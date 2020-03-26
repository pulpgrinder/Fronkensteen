// markdown-extensions.js.
// Procedures related to the markdown (and LaTeX) processing system.
// Copyright 2018-2019 by Anthony W. Hursh
// MIT License.


Fronkensteen.markdownConfig =   { // Disallows HTML
     xhtmlOut:     true,
     typographer:  true,
     quotes: '“”‘’'
  }

Fronkensteen.trustedMarkdownConfig =   {
       xhtmlOut:     true,
       html:true,
       typographer:  true,
       quotes: '“”‘’'
    }

Fronkensteen.markdown = function(text,trusted){
  let config = Fronkensteen.markdownConfig;
  if(trusted === true){
    config = Fronkensteen.trustedMarkdownConfig;
  }
  let md = window.markdownit(config).use(window.markdownitSub).use(window.markdownitSup);
// Make sure text ends with a newline. Avoids some weird corner cases
// with block-level markup.
  if(text.slice(-1) !== "\n"){
    text = text + "\n";
  }
  return md.render(text);
}

Fronkensteen.trustedMarkdown = function(text){
  return Fronkensteen.markdown(text,true);
}

Fronkensteen.untrustedMarkdown = function(text){
  return Fronkensteen.markdown(text,false);
}
BiwaScheme.define_libfunc("markdown",1, 1, function(ar){
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.untrustedMarkdown(ar[0])
})

BiwaScheme.define_libfunc("trusted-markdown",1, 1, function(ar){
  BiwaScheme.assert_string(ar[0]);
  return Fronkensteen.trustedMarkdown(ar[0])
})
