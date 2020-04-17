; Copyright 2020 by Anthony W. Hursh. Distributed under the same MIT license as Fronkensteen as a whole.

**This is still at the "moving fast and breaking things" stage. Sharp corners are pretty much guaranteed to still be present. Report bugs on the [Fronkensteen project page](http://github.com/Fronkensteen).**

# What is Fronkensteen?

It's a self-contained Scheme development environment. Everything is in one HTML file, which will work in any modern browser.{{{i.e., not Internet Explorer. Sorry.}}}

Fronkensteen will work fine when loaded from a local disk. No server needed!

It can also be put on a web server, copied onto a thumb drive, emailed... use your imagination!

The emphasis in Fronkensteen is on pragmatism, not theoretical purity. The goal is to have something that makes it easy to write apps, which means solid interfaces to the underlying JavaScript/CSS/HTML world, even if that involves some things that an advocate of pure functional programming might look at with a suspicious eye.

# Why?

Those of us of a certain age have fond memories of using computers where you could just sit down, write some code, run it, debug it, and save it for future use. No external editors. No toolchains. No servers. It's an incredibly liberating and low-friction way of exploring the world of code. Sadly, those days appeared to be gone forever. The closest modern equivalent would probably be JavaScript (built into every modern browser) but doing anything really interesting with that requires using not one, but three languages (HTML, JavaScript, and CSS). It also requires an external editor, and perhaps a running web server. Not ideal. Fronkensteen is entirely contained in a single file. There's *nothing* extra to install for basic use.

# Where Do I Get It?

You're soaking in it. @@(fa-icon "r" "smile-beam")@@ This page itself is a running Fronkensteen app.  @@(button "#download-fronkensteen" "Get it now!")@@

Clicking the button will generate a full Fronkensteen workspace from the actual system you're looking at, including any changes you might've made to the code, and save it as an HTML file on your local disk.

This is a live Scheme environment. You can test it out by entering some Scheme code in the text box below and clicking the Evaluate button.

@@(<< (textarea "#scheme-demo-text!rows='15'!cols='80'" "(define (square x)\n    (* x x))\n\n(square 10)") (button "#scheme-demo-eval" "Evaluate")@@

@@(pre (code "#scheme-demo-result" ""))@@

# What's Included?

Fronkensteen aims to be a batteries-included development system. It has comprehensive HTML generation and jQuery integration procedures.

@@ (button "#view-html-docs" "Tell me more") @@

It comes with a powerful markup language that includes the ability to execute embedded Scheme code (for example, the mini-REPL above, and the various buttons you see on this screen), typeset LaTeX equations, perform text alignment such as centering, right/left alignment, and justification, poetry formatting,  automatic handling of #hashtags, [wiki-style links], and [normal Markdown hyperlinks](https://github.com/pulpgrinder/Fronkensteen), easy to use footnotes{{{Like this one!}}}, and more! The screen you're looking at right now is generated from a Fronkensteen markup file which contains embedded Scheme code.

$${\int^b_a \frac{1}{3}x^3} dx$$


$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

@@ (button "#view-markup-docs" "Tell me more") @@

# How Do I Use It?

The tutorial might be a good place to start.

@@ (button "#show-tutorial" "Tutorial") @@

To do something other than view this page, you'll need to use the editor. The tutorial automatically opens the editor, but if you just want to use the editor, do a Shift+Alt+click (or Shift+Option+click) on this page (on a desktop machine) and the editor will open up, allowing you to edit the running code for the system. You can execute updated Scheme or JavaScript code directly from the editor. You can even edit the UI while it's actually running. Put that in hot reload's pipe and smoke it.

If you're looking for a place to start, try the files in the app folder, starting with app.scm.

By convention, you'd put all the code for your app in the app folder, but you're free to edit *anything at all* in the system. Just keep in mind that messing around with the underlying system files could potentially cause the system to not even "boot" the next time you run it. "With great power comes great responsibility." Make plenty of backups. :-)

Most load-time errors in user code (either JavaScript or Scheme) will automatically kick you into a low-level debugger that lets you edit the offending files and then attempt to restart. The primitive editor in the debugger is not pretty, but is functional. If you've managed to hose the system at a level where not even that works, you can force the system to start in debug mode by adding ?debug to the URL (e.g., `file://whatever/fronkensteen.html?debug` or `https://whatever/fronkensteen.html?debug`).

# Credits

The Fronkesteen system is copyright 2020 by Anthony W. Hursh and is released under the MIT License. As with most large FOSS projects, Fronkensteen relies on components from many other developers and projects. However, particular credit should be given to the excellent [BiwaScheme interpreter](https://github.com/biwascheme/biwascheme) by Yutaka HARA. For a full list of credits and licenses, click the button below.

@@(button "#view-fronkensteen-licenses" "View Licenses")@@
