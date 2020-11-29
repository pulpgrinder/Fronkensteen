# Fronkensteen

## You don't need this repo if you just want to run Fronkensteen. If that's the case, just go to the [github.io page](https://pulpgrinder.github.io) with any modern mainstream browser to get the latest build. Fronkensteen is more or less feature-complete at this stage, but still contains some sharp corners and some bugs (mostly related to the UI redesign... not everything is wired up properly just yet). Bug squashing is in progress, and a release version is expected soon.

Fronkensteen is a self-contained, single-file, fully-programmable wiki-like environment that works in any full-featured modern browser (i.e., just about everything other than Internet Explorer or pre-Chrome Edge). You can write and execute apps without any external resources at all. No toolchain. No server. No external editor. The entire system is contained in a single HTML file which can be opened in a browser from the local file system, put on a standard web server, embedded in a native wrapper (such as Electron or Cordova)...

The system is fully scriptable in both Scheme and JavaScript.

## Demo

For the stabl(-ish) version, go to the [github.io page](https://pulpgrinder.github.io).

## Development setup

To get the latest bleeding-edge version, or to contribute to development, follow the instructions below.

1) Clone the repo with `git clone https://github.com/pulpgrinder/Fronkensteen.git`.
`
1) Install `node` and `npm`, if you don't already have them.

1) Run `npm install`.

## Fronkensteen development

Scheme and JavaScript source libraries are placed in the src/ folder. These are loaded in natural sort order, meaning that it is possible to control the load order by prefixing the folder names with a number (i.e., the first folder loaded will be the 1-root folder). If you wish to suppress the loading of a file or folder, but still keep it in the repo, you may prefix the file or folder name with a !.

To bundle any source code changes into a working Fronkensteen package, run:

`node fronkensteen-build-monster`

The built bundle will be located in `dist`. The individual packages will be placed in `packages`. This is useful if you want to experiment with adding and removing packages in the internal Fronkensteen package manager.

## Remote REPL

Fronkensteen has remote REPL capability. This can be handy when testing on a device with a small screen, where there's insufficient screen real estate to run the internal editor. Sadly, this does require running a server. Just run `node fronkensteen-server` to start the middleware server. The server starts up on port 8000 by default, so pointing your browser to `http://localhost:8000/fronkensteen.html` will bring it up (assuming your client and server are on the same machine. If the client is on a different machine, replace `localhost` with the appropriate host name or IP address).

Add `?remote-app` to the URL for your Fronkensteen app and reload it (e.g. `http://localhost:8000/fronkensteen.html?remote-app`) and it will attempt to connect to the middleware (you will be prompted for the port number and address of the middleware server) Alternatively, you can run `(launch-remote-repl-app)` from within Scheme code.

To send REPL commands to your running Fronkensteen app, you need some sort of terminal. A simple one is built in to the Fronkensteen system. Launch another instance of Fronkensteen (which could be on a different machine) with the parameter `?remote-terminal` (e.g. `file:///foo/bar/baz/fronkensteen.html?remote-terminal`). Once again, use the port number and address you've set up for the middleware server.

If you use the Atom editor, you might try [fronkensteen-atom-repl](https://github.com/pulpgrinder/fronkensteen-atom-repl), a terminal plugin hat lets you execute Scheme code on a remote Fronkensteen app from directly within the Atom editor.
