; Copyright 2020 by Anthony W. Hursh. Distributed under the same MIT license as Fronkensteen as a whole.
# Fronkensteen Markup

All the normal Markdown stuff (including several common extensions, such as superscript and subscript) is available, along with many added goodies.


## Inline formatting

### External (web) links

These are the standard Markdown links. They consist of a title in square brackets (like the wiki-style links) followed by the URL for an external web site contained in parentheses.

``` markdown

[English Wikipedia](http://en.wikipedia.org)


```

will produce:

[English Wikipedia](http://en.wikipedia.org)

The default behavior when an external link is clicked is to open the URL in a new browser window (or tab, depending on how you have your browser configured). This is to prevent accidentally navigating away from the Fronkensteen app, potentially losing unsaved data. You can change this by redefining the `(external-link_click target url)` procedure found in `text-processor/text-processor.scm`. Here, the first argument is the jQuery object containing the external link, the second is the link's URL. If you really did want to navigate away from the Fronkensteen app, you could do something like:

```
(define (external-link_click target url)
  (navigate-url url))
```

### Hashtags

You can freely use #hashtags in your text. These will be replaced with a link with the `hashtag` class. The default behavior when a hashtag is clicked is to bring up an alert box informing the user that they've clicked a hashtag. To do something more useful, redefine the `(hashtag_click target link-text)` procedure found in `text-processor/text-processor.scm`. Here, the first argument is the jQuery object containing the external link, the second is the hashtag text.

### Wiki-style links

Text enclosed in square brackets (but not followed by an URL in parentheses, as with a standard Markdown link) will be replaced with a link with the `wikilink` class.

``` markdown

[This is another wiki page]


```

will produce:

[This is another wiki page]

As with hashtags, the default behavior when a wikilink is clicked is to bring up an alert box informing the user that they've clicked a wikilink. To do something more useful, redefine the `(wikilink_click target link-text)` procedure found in `text-processor/text-processor.scm`. Here, the first argument is the jQuery object containing the external link, the second is the wikilink text.

### Font and text decorations

``` markdown
The following text is in **bold**.
```

produces:

The following text is in **bold**.

``` markdown
The following text is in *italic*.
```

produces:

The following text is in *italic*.

``` markdown
The following text contains a ~~strikethrough~~.
```

produces:

The following text contains a ~~strikethrough~~.

``` markdown
The following text is `formatted as inline code`.
```

produces:

The following text is `formatted as inline code`.

### Superscripts and subscripts

``` markdown
The following text contains a superscript^1^.
```

produces:

The following text contains a superscript^1^.

``` markdown
The following text contains a subscript~1~.
```

produces:

The following text contains a subscript~1~.

### Footnotes

``` markdown
The following text contains a clickable footnote
{{{This is the note. Click on the arrow to the left to return.}}}.
```

produces:

The following text contains a clickable footnote {{{This is the note. Click on the arrow to the left to return.}}}.

### Inline typography

``` markdown
In running text, -- is replaced with an en dash,
--- is replaced with an em dash, and " and ' are replaced
with their corresponding typographic ("curly" or "smart")
quotation marks.
```

produces:

In running text, -- is replaced with an en dash,
--- is replaced with an em dash, and " and ' are replaced
with their corresponding typographic ("curly" or "smart")
quotation marks.

TODO: add some mechanism to handle proper typography for non-English languages.

## Block formatting

### Headings

``` markdown
# This is a first-level heading
## This is a second-level heading.
### This is a third-level heading.
```
produces:

# This is a first-level heading
## This is a second-level heading.
### This is a third-level heading.

Heading levels up to and including the sixth level are supported.

### Lists

``` markdown
* This
* is
* a
* bulleted list
```
produces:

* This
* is
* a
* bulleted list


``` markdown
1. This
2. is
3. a
4. numbered
5. list
```
produces:

1. This
2. is
3. a
4. numbered
5. list


### Block quote

``` markdown
> This line is formatted as a block quote.
```
produces:

> This line is formatted as a block quote.

### Source code blocks
    ```
    #include <stdio.h>
    int main(int argc, char **argv){
        printf("Hello, world!\n");
    }
    ```
produces:

```
#include <stdio.h>
int main(int argc, char **argv){
    printf("Hello, world!\n");
}

```

### Poetry/song lyrics

    | I'm a
    |    poet
    |   and
    |       didn't
    | know ---
    | It.

produces:

| I'm a
|    poet
|   and
|       didn't
| know  ---
| It.

In poetry formatting, all line breaks, spacing, etc. will be passed through verbatim, however typographic quote marks, dashes, etc. will be used.


### LaTeX markup for math
    $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$
produces:
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

### Text alignment

The following code:

```
<-> Here is a bunch of text that will be displayed justified. Lorem ipsum
dolor sit amet, consectetur adipiscing elit. Duis in orci vel orci condimentum
interdum. Nulla sed pharetra turpis, sed euismod quam. Proin ac mi iaculis
orci tincidunt fermentum. Integer pharetra elit sit amet nisi viverra aliquam.
Nullam dignissim quam vitae velit ultrices interdum. Suspendisse placerat est
nec hendrerit dictum.
```
will produce:

<-> Here is a bunch of text that will be displayed justified. Lorem ipsum
dolor sit amet, consectetur adipiscing elit. Duis in orci vel orci condimentum
interdum. Nulla sed pharetra turpis, sed euismod quam. Proin ac mi iaculis
orci tincidunt fermentum. Integer pharetra elit sit amet nisi viverra aliquam.
Nullam dignissim quam vitae velit ultrices interdum. Suspendisse placerat est
nec hendrerit dictum.

The code:

```
-> Here is a bunch of text that will be displayed right-aligned. Lorem ipsum
dolor sit amet, consectetur adipiscing elit. Duis in orci vel orci condimentum
interdum. Nulla sed pharetra turpis, sed euismod quam. Proin ac mi iaculis
orci tincidunt fermentum. Integer pharetra elit sit amet nisi viverra aliquam.
Nullam dignissim quam vitae velit ultrices interdum. Suspendisse placerat est
nec hendrerit dictum.
```

will produce:

-> Here is a bunch of text that will be displayed right-aligned. Lorem ipsum
dolor sit amet, consectetur adipiscing elit. Duis in orci vel orci condimentum
interdum. Nulla sed pharetra turpis, sed euismod quam. Proin ac mi iaculis
orci tincidunt fermentum. Integer pharetra elit sit amet nisi viverra aliquam.
Nullam dignissim quam vitae velit ultrices interdum. Suspendisse placerat est
nec hendrerit dictum.

The code:

```
-><- Here is a bunch of text that will be displayed centered. Lorem ipsum
dolor sit amet, consectetur adipiscing elit. Duis in orci vel orci condimentum
interdum. Nulla sed pharetra turpis, sed euismod quam. Proin ac mi iaculis
orci tincidunt fermentum. Integer pharetra elit sit amet nisi viverra aliquam.
Nullam dignissim quam vitae velit ultrices interdum. Suspendisse placerat est
nec hendrerit dictum.
```

will produce:

-><- Here is a bunch of text that will be displayed centered. Lorem ipsum
dolor sit amet, consectetur adipiscing elit. Duis in orci vel orci condimentum
interdum. Nulla sed pharetra turpis, sed euismod quam. Proin ac mi iaculis
orci tincidunt fermentum. Integer pharetra elit sit amet nisi viverra aliquam.
Nullam dignissim quam vitae velit ultrices interdum. Suspendisse placerat est
nec hendrerit dictum.

The code:

```
<- Here is a bunch of text that will be displayed left-aligned. Lorem ipsum
dolor sit amet, consectetur adipiscing elit. Duis in orci vel orci condimentum
interdum. Nulla sed pharetra turpis, sed euismod quam. Proin ac mi iaculis
orci tincidunt fermentum. Integer pharetra elit sit amet nisi viverra aliquam.
Nullam dignissim quam vitae velit ultrices interdum. Suspendisse placerat est
nec hendrerit dictum.
```

will produce:

<- Here is a bunch of text that will be displayed left-aligned. Lorem ipsum
dolor sit amet, consectetur adipiscing elit. Duis in orci vel orci condimentum
interdum. Nulla sed pharetra turpis, sed euismod quam. Proin ac mi iaculis
orci tincidunt fermentum. Integer pharetra elit sit amet nisi viverra aliquam.
Nullam dignissim quam vitae velit ultrices interdum. Suspendisse placerat est
nec hendrerit dictum.

Left-aligned is the default, but it's there if you need it.

### Embedded Scheme code

You may insert a Scheme expression directly in your markup and it will be replaced at display time with the result of evaluating it (in string format).

``` markdown

@@(+ 2 3)@@

```
produces:

@@(+ 2 3)@@

``` markdown

    @@(cons 'a '(a b))@@

```
produces:

@@(cons 'a '(a b))@@

``` markdown

@@(define (square x) (* x x))@@

@@(square 10)@@

```
produces:

@@(define (square x) (* x x))@@

@@(square 10)@@


``` markdown

@@(iso-8601-date)@@

```
produces:

@@(iso-8601-date)@@

You can even embed Fronkensteen markup in the file.

``` markdown

@@(button "Hello!")@@

```

produces:

@@(button "Hello!")@@

**This feature must be used with care.** Enabling it for random code you grabbed from the net, or for random code entered by your users, would obviously be a Bad Thing.

The text-processor bale defines two versions of the high-level text-processor procedure, trusted-text-processor and untrusted-text-processor. At a lower level,  the markdown-it bale provides two versions of the low-level markdown handler procedure, markdown and trusted-markdown. The trusted-text-processor procedure calls trusted-markdown, while the untrusted-text-processor procedure calls plain markdown.

The trusted versions of these procedure enable the processing of embedded Scheme code, while the untrusted versions do not. There are some other security restrictions on the untrusted versions. For example, the trusted versions will allow embedded raw HTML code, while the untrusted ones do not.
