; Copyright 2020 by Anthony W. Hursh. Distributed under the same MIT license as Fronkensteen as a whole.

## This is a work in progress

## HTML Generation

Fronkensteen has procedures corresponding to all standard HTML tags, as well as some custom tags (and you are also free to design your own tags).

The elements are generated using a convention called SEML, which is based on an idea by Logan Braga, and originally implemented by him in Ruby. However, this implementation has been written from scratch in JavaScript, and differs from Braga's in some respects.

SEML is designed to be reminiscent of the format used in CSS files and jQuery selectors. The general format is:
```
(tagname seml-spec text-content)
```

Note, however, that some element types, such as &lt;img&gt; don't have text content.

Let's look at some examples.

If we wanted to generate the paragraph element:
```
<p id="foo">Words, words, words.</p>
```

We'd use:

```
(p "#foo" "Words, words, words.")

```

Note that the id attribute is marked with a '#', just the same as in CSS and jQuery.

Now let's look at a more complex example. Suppose we want to generate:

```
<a id='foo' class='bar' baz='rag' href='http://www.apple.com'>Apple Home Page</a>
```

We'd do that in Fronkensteen with:

```
(a "#foo.bar!baz='rag'!href='http://www.apple.com'" "Apple Home Page")
```

Here we have an id that begins with '#', a class that begins with '.' (again, just like CSS/jQuery), and some other attributes that are set off with '!'.

The HTML procedures return strings, not DOM elements. The string must be converted to elements and inserted in the document with jQuery procedures (below).

### **Sharp Corner**

Unfortunately Scheme already has a procedure called `div`, so Fronkensteen uses `dv` instead. All other HTML elements use their normal names.

## Auto-wiring of HTML Elements

Some HTML elements (such as buttons) can be "auto-wired". Using a button as an example, `(button "#coolbutton" "My Cool Button")` will produce `<button id="coolbutton">My Cool Button</button>` (just as above). If this button is inserted into the DOM and the `(wire-ui)` procedure is called afterward, an event handler will be added to the button that calls a procedure named `(coolbutton_click)` when the button is clicked (if that procedure exists). This is very convenient compared to adding an event handler to every button by hand. The element must have an id in order for this to work. Similar conventions exist for other elements. See `dom/wired.scm` for details.


## jQuery Interface

BiwaScheme has a nice, Scheme-like interface to jQuery. However, Fronkensteen opts for a more jQuery-like procedure syntax. Why jQuery? Because jQuery has been around for a long time, it works, and it's not going anywhere. Other frameworks seem to come and go with depressing regularity. Also, there's a vast amount of jQuery example code on the net. Translating this code to work with Fronkensteen is pretty straightforward.

A jQuery call like:

```
$("#test-div").html("New text")

```

maps in a direct fashion to:

```
(% "#test-div" "html" "New Text")
```

Note that this actually has *fewer* parentheses than the jQuery. :-)



## CSS in Scheme

Fronkensteen lets you use Scheme code to write and install CSS. The `proc-css-list` procedure in:

````
(install-css "text-processor-style"
  (proc-css-list `(
    (".fronkensteen-footnote-link" (
      "font-size" "75%"
      "vertical-align" "super"
      "line-height" "0"
      ))
    (".fronkensteen-footnote" (
      "text-decoration" "underline"
      "cursor" "pointer"
        )))))
````

will generate the following CSS:

.fronkensteen-footnote-link {
  font-size:75%;
  vertical-align:super;
  line-height:0;
}
.fronkensteen-footnote {
  text-decoration:underline;
  cursor:pointer;
}

The `install-css` procedure takes that generated CSS and installs it in the document as a style element in the document head, with an id of `text-processor-style`.

The backquote/quasiquote operator `\`` in proc-css-list is not strictly necessary in this case. It's there so you can use an unquote operator `,` in the list to include arbitrary Scheme code to be evaluated and inserted into the list.
 
