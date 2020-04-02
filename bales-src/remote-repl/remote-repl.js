// Remote REPL drivers for Fronkensteen.
// Copyright 2019 by Anthony W. Hursh.
// MIT License.

  // Object that handles connections to/from remote REPLs.
  Fronkensteen.remoteREPL = {
  host:null,
  replsocket:null,
  password:null,
  errors:[],
  addError:function(errorMessage){
    Fronkensteen.remoteREPL.errors.push(errorMessage);
  },
  connect:function(isServer,resultHandler){
    let self = this;
    let defaulthost = ""
    let defaultpassword = Fronkensteen.getLocalStorageItem("remote-repl-password");
    if(defaultpassword === null){
      defaultpassword = "sanguine";
    }
    if(isServer === true){
      defaulthost = Fronkensteen.getLocalStorageItem("remote-repl-server");
      if(defaulthost === null){
        defaulthost =  "localhost:5900"
      }
    }
    else{
      defaulthost = Fronkensteen.getLocalStorageItem("remote-repl-client");
      if(defaulthost === null){
        defaulthost =  "localhost:5901"
      }
    }
    self.host = prompt("Host:port", defaulthost);
    if(isServer === true){
      Fronkensteen.setLocalStorageItem("remote-repl-server",self.host);
    }
    else {
      Fronkensteen.setLocalStorageItem("remote-repl-client",self.host);
    }
    self.password = prompt("Password", defaultpassword);
    Fronkensteen.setLocalStorageItem("remote-repl-password",self.password);

    self.replsocket = new WebSocket("ws://" + self.host);
    self.replsocket.onopen = function(event) {
        console.log('remoteREPL connected as ' + (isServer ? 'server':'client') + '. Waiting for  commands.');
    };
    if(isServer){
      self.replsocket.onmessage = function (evt) {
            let message = evt.data;
            let parsedMessage = JSON.parse(message);
            let signature = parsedMessage['signature'];
            let expr = parsedMessage['expr'];
            let shaObj = new jsSHA("SHA3-512", "TEXT");
            shaObj.update(expr + self.password);
            let sigcheck = shaObj.getHash("HEX");
            if(sigcheck !== signature){ // Bad passphrase.
                console.error("Invalid signature from remote client! Check passphrase.");
                return;
            }

            var intp2 = new BiwaScheme.Interpreter(scheme_interpreter);
            let result = intp2.evaluate(Fronkensteen.renderReadTemplate(expr)) + "";
            if(Fronkensteen.CumulativeErrors.length !== 0){
              result = result + "\n" + Fronkensteen.CumulativeErrors.join("\n");
              Fronkensteen.CumulativeErrors = [];
            }
            let resultSHA = new jsSHA("SHA3-512", "TEXT");
            resultSHA.update(result + self.password);
            let newSig = resultSHA.getHash("HEX");
            self.replsocket.send(JSON.stringify({"result":result,"signature":newSig}));
        };

      }
      else {
          self.replsocket.onmessage = function (evt) {
          let message = evt.data;
          let parsedMessage = JSON.parse(message);
          let signature = parsedMessage['signature'];
          let result = parsedMessage['result'];
          let shaObj = new jsSHA("SHA3-512", "TEXT");
          shaObj.update(result + self.password);
          let sigcheck = shaObj.getHash("HEX");
          if(sigcheck !== signature){ // Bad passphrase.
              console.error("Invalid signature from remote client! Check passphrase.");
              return;
          }
          resultHandler(result);
        };
      }
      self.replsocket.onerror = function(event){
        alert("Error communicating with REPL middleware.");
        self.replsocket.close();
        self.replsocket = null;
      }
    },
    sendExpression:function(expr){
      let self=this;
      if(self.replsocket === null){
        console.error("Fronkensteen remote REPL: not connected.");
        return;
      }
      let shaObj = new jsSHA("SHA3-512", "TEXT");
      shaObj.update(expr + self.password);
      let signature = shaObj.getHash("HEX");
      self.replsocket.send(JSON.stringify({"expr":expr,"signature":signature}));
    }
  }

BiwaScheme.define_libfunc("launch-remote-repl-server", 0, 0, function(ar){
    // Allow incoming remote REPL connections
    Fronkensteen.remoteREPL.connect(true,null);
});
BiwaScheme.define_libfunc("remote-evaluate", 1, 1, function(ar){
    BiwaScheme.assert_string(ar[0]);
    // Allow incoming remote REPL connections
    Fronkensteen.remoteREPL.sendExpression(ar[0]);
});

// Default result display. Just passes the result off to the display-repl-result procedure in Scheme (which needs to be defined by the user).
Fronkensteen.displayReplResult = function(result){
let resultString = "(display-repl-result " + Fronkensteen.patchReplQuotes(result) + ")"
var intp2 = new BiwaScheme.Interpreter(scheme_interpreter);
intp2.evaluate(resultString);
}

BiwaScheme.define_libfunc("launch-remote-repl-client", 0, 0, function(ar){
    // Connect to remote REPL server.
    Fronkensteen.remoteREPL.connect(false,Fronkensteen.displayReplResult);
});
