; Copyright 2020 by Anthony W. Hursh. Distributed under the same MIT license as Fronkensteen as a whole.
# What is Fronkensteen?

It's a self-contained Scheme development environment. Everything is in one HTML file, which will work in any modern browser (i.e., not Internet Explorer). It can be put on a web server, or even loaded from the local file system with no server needed.


# Why?

Those of us of a certain age have fond memories of using computers where you could just sit down, write some code, and run it. No external editors. No toolchains. No servers. It's an incredibly liberating and low-friction way of exploring the world of code. Sadly, those days appeared to be gone forever. The closest modern equivalent would probably be JavaScript (built into every modern browser) but doing anything really interesting with that requires using not one, but three languages (HTML, JavaScript, and CSS). It also requires an external editor, and perhaps a running web server. Not ideal. Fronkensteen is entirely contained in a single file. There's nothing extra to install for basic use.

# Where Do I Get It?

You're soaking in it. This page itself is a running Fronkensteen app. @@(fa-icon "r" "smile-beam")@@ @@(button "#download-fronkensteen" "Get it now!")@@

Clicking the button will generate a full Fronkensteen workspace from the actual system you're looking at, including any changes you might've made to the code, and save it.

This is a live Scheme environment. You can test it out by entering some Scheme code in the text box below and clicking the Eval button.

@@(<< (textarea "#scheme-demo-text!rows='15'!cols='80'" "(car '(a b))") (button "#scheme-demo-eval" "Eval")@@

@@(pre (code "#scheme-demo-result" ""))@@

# What's Included?

Fronkensteen aims to be a batteries-included development system. It has comprehensive HTML generation and jQuery integration procedures.

@@ (button "#view-html-docs" "Tell me more") @@


It comes with a powerful markup language that includes the ability to execute embedded Scheme code (for example, the mini-REPL above), typeset LaTeX equations, perform text alignment such as centering, right/left alignment, and justification, poetry formatting,  automatic handling of #hashtags, [wiki-style links], and [normal Markdown hyperlinks](https://github.com/pulpgrinder/Fronkensteen), easy to use footnotes{{{Like this one!}}}, and more!

@@ (button "#view-markup-docs" "Tell me more") @@

# How Do I Use It?

Perhaps you should begin with the tutorial.

@@ (button "#show-tutorial" "Tutorial") @@

To do something other than view this page, you'll need to use the editor. The tutorial automatically opens the editor, but if you just want to use the editor, triple-click on this page (on a desktop machine) and the editor will open up, allowing you to edit the running code for the system. You can execute updated Scheme or JavaScript code directly from the editor. You can even edit the UI while it's actually running. Put that in hot reload's pipe and smoke it.

Normally, you'd put all the code for your app in the app folder, but you're free to edit anything at all in the system, while keeping in mind that messing around with the underlying system files could potentially cause the system to not even load "With great power comes great responsibility." Make plenty of backups. :-)

As with most large FOSS projects, Fronkensteen relies on components from many other developers and projects. However, particular credit should be given to the excellent [BiwaScheme interpreter](https://github.com/biwascheme/biwascheme) by Yutaka HARA. For a full list of credits/licenses, click the button below.

@@(button "#view-fronkensteen-licenses" "View Licenses")@@
