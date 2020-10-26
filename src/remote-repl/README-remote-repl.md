The remote-repl package provides remote REPL functionality for Fronkensteen. Both client and server mode are supported. In client mode, Scheme code is sent to a remote Fronkensteen instance for evaluation. In server mode, the local Fronkensteen instance evaluates incoming Scheme code from a remote client. Due to the limitations of browser-based JavaScript, both of these are dependent on a middleware package to pass the data back and forth. One such package is chrysotile, included with the Fronkensteen distribution.

remote-repl.js provides the following Scheme procedures:

`(launch-remote-repl-server)` -> Launches the package in server mode, and waits for incoming connections from a client.

`(launch-remote-repl-client)` -> Launches the package in client mode, and attempts to connect to a server.

Both of these prompt for a host:port address (default: localhost:5900 for the server, and localhost:5901 for the client) and a password.

`(remote-evaluate expr)` -> sends expr to the remote Fronkensteen server instance for evaluation (client-only). Your client code also needs to define a `display-repl-result` procedure in order to display the result of the remote evaluation. This can be as fancy or as minimal as you like -- at the low end, it could be a basic console-log, at the upper end it could be some type of custom display in a remote editor. The procedure should take one string argument.

The same password must be used in all three of the client, the server, and the chrysotile middleware. This is used to provide some rudimentary security; the password is appended to each data item and used to generate a SHA3-512 hash, which is transmitted with the data. Both the middleware and the endpoints carry out the same process, appending their own password to the data and generating their own hash. If the generated hash doesn't match the one transmitted with the data, the data is rejected.

Note that this provides NO encryption. The data is transmitted in plain text.
