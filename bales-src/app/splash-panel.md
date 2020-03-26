; Copyright 2020 by Anthony W. Hursh. Distributed under the same MIT license as Fronkensteen as a whole.
# What is Fronkensteen?

It's a self-contained Scheme development environment. Everything is in one HTML file, which will work in any modern browser (i.e., not Internet Explorer). It can be put on a web server, or loaded from the local file system with no server needed.


# Why?

Those of us of a certain age have fond memories of using computers where you could just sit down, write some code, and run it. No external editors. No toolchains. No servers. It's an incredibly liberating and low-friction way of exploring the world of code. Sadly, those days appeared to be gone forever. The closest modern equivalent would probably be JavaScript (built into every modern browser) but doing anything really interesting with that requires using not one, but three languages (HTML, JavaScript, and CSS). It also requires an external editor, and perhaps a running web server. Not ideal. Fronkensteen is entirely contained in a single file. There's nothing extra to install for basic use.

# Where Do I Get It?

You're soaking in it. @@(fa-icon "r" "smile-beam")@@ @@(button "#download-fronkensteen" "Get it now!")@@

Just click the button and save the resulting HTML file on your hard drive, then open it in your favorite browser.

This is a live Scheme environment. You can test it out by entering some Scheme code in the text box below and clicking the Eval button.

@@(<< (textarea "#scheme-demo-text!rows='15'!cols='80'" "(car '(a b))") (button "#scheme-demo-eval" "Eval")@@

@@(pre (code "#scheme-demo-result" ""))@@


# How Do I Use It?

To do something other than view this page, you'll need to use the editor.

Triple-click on this page and the editor will open up, allowing you to edit the full code for the system. You can execute updated Scheme or JavaScript code directly from the editor.

To get started, it's suggested that you work with the files located in the top-level app folder.

@@(button "#view-fronkensteen-licenses" "View Licenses")@@
