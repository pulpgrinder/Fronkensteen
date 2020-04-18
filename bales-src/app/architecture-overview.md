## Overview of Fronkensteen Architecture

### Bales

Fronkensteen packages units of functionality in "bales", which are collections of related files, both code (JavaScript, Scheme, and CSS) and resources (docs, images, fonts, etc.).

By convention, you'd put all the code for your app in the app bale ("folder"), but you're free to edit *anything at all* in the system. Just keep in mind that messing around with the underlying system files could potentially cause the system to not even "boot" the next time you run it. "With great power comes great responsibility." Make plenty of backups. :-)

The bale manager (accessible from the code editor) lets you add or remove bales, change their load order, or suppress their loading altogether (for example, the tutorial bale included with the default Fronkensteen distribution has loading suppressed, because that code is intended to be run interactively by the user, not run automatically at system load time). Naturally, one must use some care when removing bales; if an important bale (for example, the root bale) is removed, the system may not even start.

In addition, each individual bale has a `$CODE_LOADER` file that controls the loading of JS, CSS, and Scheme code in that bale. You can have code in your bale without necessarily loading it automatically -- if it isn't listed in the bale's `$CODE_LOADER`, it won't be loaded.

At startup, the Fronkensteen loader first loads all the JS and CSS files from all the bales, in the order they are listed in their respective `$CODE_LOADER` files. Scheme files are queued in the order they are encountered, and then executed in order after all the CSS and JS for the whole system has been loaded. This is to ensure than any necessary JS and CSS that supports the Scheme code has been loaded. However, it is possible that this behavior might change in a future version of Fronkensteen. It should be safe to assume that the files of any one type (JS, CSS, Scheme) will be loaded in the order they are encountered. That is, if `foo.js` appears after `bar.js` in a `$CODE_LOADER` file, or appears in a `$CODE_LOADER` file for a bale that comes later in the bale list, you can assume that `foo.js` will be loaded after `bar.js`. The same will hold for CSS and Scheme files.

Most load-time errors in user code (either JavaScript or Scheme) will automatically kick you into a low-level debugger that lets you edit the offending files and then attempt to restart. The primitive editor in the debugger is not pretty, but is functional. If you've managed to hose the system to a degree where not even that works, you can force the system to start in debug mode by adding ?debug to the URL (e.g., `file://whatever/fronkensteen.html?debug` or `https://whatever/fronkensteen.html?debug`).

### Making your own bales

You can create your own bales using the `fronkensteen_baler tool` included with the Fronkensteen source code, available on [https://github.com/pulpgrinder/Fronkensteen](Github). A method of creating a new bale from within a running Fronkensteen system is on the to-do list.

You're welcome to submit useful bales as pull requests for the Fronkensteen project, however, only bales offering major, and generally useful, functionality will typically be considered for inclusion in the default distribution. It should be something along the lines of the katex bale, or the beautify_html bale, not something that (e.g.) just converts a string to lower case. Naturally, you're free to create your own bales that do anything you like and put them in your own GitHub repo (or distribute them any other way you see fit).
