# Fronkensteen

## Caution: this is a preliminary version. It still contains many sharp corners, and, no doubt, bugs. Moving fast and breaking things is occurring on a constant basis.

Fronkensteen is a self-contained, single-file, wiki environment that works in any modern browser (i.e., just about everything other than Internet Explorer). You can write and execute apps without any external resources at all. No toolchain. No server. No external editor. The entire system is contained in a single HTML file which can be opened in a browser from the local file system, put on a standard web server, embedded in a native wrapper (such as Electron or Cordova)...

The system is fully scriptable in both Scheme and JavaScript.

## Demo/How to use

For a (possibly) somewhat stable version, go to the [github.io page](https://pulpgrinder.github.io).
To get the latest bleeding-edge version, clone this repo and follow the instructions below.


## Fronkensteen system development

(to be rewritten)

## Remote REPL

Fronkensteen has remote REPL capability. This can be handy when testing on a device with a small screen, where there's insufficient screen real estate to run the internal editor. Sadly, this does require running a server. After downloading the repo and running `npm install`, run `node fronkensteen-server` to start the middleware.

Just add `?remote` to the URL for your Fronkensteen app and reload (e.g. `file:///foo/bar/baz/fronkensteen.html?remote`) and it will attempt to connect to the middleware. Alternatively, you can run `(launch-remote-repl-server)` from Scheme code.

To send commands to your app, you might try [fronkensteen-atom-repl](https://github.com/pulpgrinder/fronkensteen-atom-repl), a plugin for the Atom text editor that lets you execute Scheme code on a remote Fronkensteen app from inside the editor.

Alternatively, look at the remote-terminal package in the distribution (disabled by default).
