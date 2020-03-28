# Fronkensteen

## Caution: this is a preliminary version. It still contains many bugs and sharp corners! Moving fast and breaking things is occurring on a constant basis.

Fronkensteen is a self-contained Scheme development environment that works in any modern browser (i.e., just about everything other than Internet Explorer). You can write and execute apps with no external resources at all. No toolchain. No external editor. The entire system is contained in a single HTML file which can be put on a web server or even opened in the browser from the local file system.

## How to use

For a possibly somewhat stable version, go to the [github.io page](https://pulpgrinder.github.io).
To get the latest bleeding-edge version, save the [fronkensteen.html](https://raw.githubusercontent.com/pulpgrinder/Fronkensteen/master/dist/fronkensteen.html) file to your hard drive, open it in a browser, and you're good to go.



## Fronkensteen system development

**You don't need to do any of this stuff if all you want to do is run Fronkensteen, or use it to create an app.**

**These instructions are only for those who are working on Fronkensteen internals.**

If you *do* want to work on the internals of Fronkensteen itself, as opposed to using Fronkensteen to create an app, read on.

## Install developer tools

1) Install node.js (if you don't already have it)
1) Install npm (if you don't already have it)
1) Run `npm install`

## Rebuilding the Fronkensteen system

First, run:

`node fronkensteen-baler`

This generates all the packaged bales (see below) from the source code in the folders located in `bales-src`. The packaged bales are written to `bales-dist`. These are plain UTF-8 files.

Next, run:

`node fronkensteen-builder`

This command gathers up the bales and generates the distributable fronkensteen.html file. This will be placed in the `dist` folder.


## The bale system

As noted above, Fronkensteen consists of a single HTML file generated from Fronkensteen bales. Each bale contains a bundle of files, stored in JSON format. A typical bale would consist of either Scheme code or a JavaScript library with an accompanying Scheme wrapper. It might also include extra resources (for example, images or fonts). The bale JSON files are then used to generate the final `fronkensteen.html` file, producing a single-file distributable.

## Creating a new bale

Create a new directory in the `bales-src` folder and place all your desired files in it. Create a new file called `(balename).balespec` inside your new directory. For example, if you wanted to make a bale named `foobar`, you'd create a `foobar` folder inside `bales-src`, then create a `foobar.balespec` file inside the `foobar` folder.

The balespec format is as follows:

```
#bale-version 0.1
#mandatory false
#load-bale false
(...list of files to include, one per line)
```

The #bale-version directive gives the version of the baler tool that was used to generate the bale (currently 0.1)

The #mandatory directive specifies whether the bale is essential for a minimal running system, in an attempt to keep users from deleting a vital bale (TODO: implement the check for this).

The #load-bale directive specifies whether or not to execute any Javascript or Scheme files located in the bale at load time. This lets you include files in the generated  Fronkensteen system without automatically running them. This directive is optional. If it is not included, the system assumes you want to run any Scheme or Javascript code in the bale at load time.

## Custom configurations

`fronkensteen-builder` includes the bales specified in `default-build.bale_config`. You can remove unused bales to save space. Obviously some care must be taken not to remove the basic system bales, or other bales on which your app relies (TODO: add more detail here). You can also remove unused bales from the Bale Manager inside a running Fronkensteen system. The default configuration is a "kitchen sink" setup that includes just about everything.

## Unpackage a bale

To unpackage a bale (for instance, one that's been edited in the internal editor and then exported):

1) Put the bale in `bales-dist` (if it isn't already there)
2) Run `node fronkensteen_unbale (bale name)`
3) The source files will be extracted from the bale and placed in the corresponding directory in `bales-src`.

## Remote REPL

Fronkensteen has remote REPL capability. This can be handy when testing on a device with a small screen, where there's insufficient screen real estate to run the internal editor. Sadly, this does require running a server. After downloading the repo and running `npm install`, run `node fronkensteen-server` to start the middleware.

Just add `?remote` to the URL for your Fronkensteen app and reload (e.g. `file:///foo/bar/baz/fronkensteen.html?remote`) and it will attempt to connect to the middleware. Alternatively, you can run `(launch-remote-repl-server)` from Scheme code (for example, in `app/init.scm`).

To send commands to your app, you have a couple of options. A very basic one is to use the remote-terminal bale. Disable the standard app bale, enable the remote-terminal bale, and save the workspace, and you'll have a (very plain) remote terminal that can be run right from your browser. You may also be interested in [fronkensteen-atom-repl](https://github.com/pulpgrinder/fronkensteen-atom-repl), a plugin for the Atom text editor that lets you execute Scheme code on a remote Fronkensteen app from inside the editor.
