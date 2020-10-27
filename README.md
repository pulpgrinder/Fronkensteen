# Fronkensteen

## Caution: this is a preliminary version. It still contains many sharp corners, and, no doubt, bugs. Moving fast and breaking things is occurring on a constant basis.

Fronkensteen is a self-contained, single-file, wiki environment that works in any modern browser (i.e., just about everything other than Internet Explorer or pre-Chrome Edge). You can write and execute apps without any external resources at all. No toolchain. No server. No external editor. The entire system is contained in a single HTML file which can be opened in a browser from the local file system, put on a standard web server, embedded in a native wrapper (such as Electron or Cordova)...

The system is fully scriptable in both Scheme and JavaScript.

## Demo/How to use

For the stabl(-ish) version, go to the [github.io page](https://pulpgrinder.github.io). You don't need this repo to get a running Fronkensteen system.

To get the latest bleeding-edge version, or to contribute to development, clone this repo and follow the instructions below.

## Fronkensteen system development

Scheme and JavaScript source libraries are placed in the src/ folder. These are loaded in natural sort order, meaning that it is possible to control the load order by prefixing the folder names with a number (i.e., the first folder loaded will be the 1-root folder). If you wish to suppress the loading of a file or folder, but still keep it in the repo, you may prefix the file or folder name with a !.


## Remote REPL

Fronkensteen has remote REPL capability. This can be handy when testing on a device with a small screen, where there's insufficient screen real estate to run the internal editor. Sadly, this does require running a server. After downloading the repo and running `npm install`, run `node fronkensteen-server` to start the middleware server.

Just add `?remote-app` to the URL for your Fronkensteen app and reload it (e.g. `file:///foo/bar/baz/fronkensteen.html?remote-app`) and it will attempt to connect to the middleware (you will be prompted for the port number and address of the middleware server) Alternatively, you can run `(launch-remote-repl-app)` from within Scheme code.

To send REPL commands to your running Fronkensteen app, you need some sort of terminal. A simple one is built in to the Fronkensteen system. Launch another instance of Fronkensteen (which could be on a different machine) with the parameter `?remote-terminal` (e.g. `file:///foo/bar/baz/fronkensteen.html?remote-terminal`). Once again, use the port number and address you've set up for the middleware server.

If you use the Atom editor, you might try [fronkensteen-atom-repl](https://github.com/pulpgrinder/fronkensteen-atom-repl), a terminal plugin hat lets you execute Scheme code on a remote Fronkensteen app from directly within the Atom editor.
