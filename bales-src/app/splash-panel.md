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

# What's Included?

Fronkensteen aims to be a batteries-included development system. It comes with a powerful markup language that includes the ability to execute embedded Scheme code (for example, the mini-REPL above), LaTeX equations such as:

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

Text alignment operators such as centering, right/left alignment, and justification:

-><-  For example, this paragraph is centered.

Poetry formatting such as:

| Shall I compare thee to a summer's day?
| Thou art more lovely and more temperate:
| Rough winds do shake the darling buds of May,
| And summer's lease hath all too short a date;
| Sometime too hot the eye of heaven shines,
| And often is his gold complexion dimm'd;
| And every fair from fair sometime declines,
| By chance or nature's changing course untrimm'd;
| But thy eternal summer shall not fade,
| Nor lose possession of that fair thou ow'st;
| Nor shall death brag thou wander'st in his shade,
| When in eternal lines to time thou grow'st:
|    So long as men can breathe or eyes can see,
|    So long lives this, and this gives life to thee.


Automatic processing of #hashtags, [wiki-style links], and [normal Markdown hyperlinks](https://github.com/pulpgrinder/Fronkensteen). Doing something useful with these links is up to your code.

Easy to use footnotes{{{Like this one!}}}.

And more.

# How Do I Use It?

To do something other than view this page, you'll need to use the editor.

Triple-click on this page and the editor will open up, allowing you to edit the full code for the system. You can execute updated Scheme or JavaScript code directly from the editor.

To get started, it's suggested that you work with the files located in the top-level app folder.

As with most FOSS projects, Fronkensteen relies on components from many other developers. However, particular credit should be given to the excellent [BiwaScheme interpreter](https://github.com/biwascheme/biwascheme) by Yutaka HARA. For a full list of credits/licenses, click the button below.

@@(button "#view-fronkensteen-licenses" "View Licenses")@@
