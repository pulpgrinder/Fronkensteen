; Welcome to the world of Fronkensteen!
; First of all, any text following a semicolon (like these lines) is considered
; to be a comment, and is ignored by the system.
; Secondly, this is a very, very, VERY abbreviated introduction to Scheme and
; the Fronkensteen system.
; Consult a good Scheme text or the Fronkensteen system documentation
; and source code for in-depth learning. A list of recommended resources is
; at the end of this file.

; Secondly, in the Fronkensteen editor (which you are in now) you can execute
; a Scheme expression by placing the cursor at the end of the expression and
; clicking the "walking person" icon. You can execute multiple
; expresssions by selecting them with the mouse and clicking the walking person.

; There's also a "running person" that executes all the code in the current
; file without selecting anything. We won't be using that in this tutorial, but
; it's handy to have.

; Try placing the cursor after the 5 on the next line and clicking the
; walking person.

5

; You should get the result of evaluating the number 5, which, unsurprisingly,
; is 5. The result is pasted directly into the editor as a Scheme comment and
; can be deleted after you've seen it.

; Now let's try something a little more interesting. Try putting the cursor
; after the closing parenthesis in the next expression and clicking the walking
; person.

(alert "Hello, world!")

; Congrats! You've just run your first Scheme program in the
; Fronkensteen system! The #<undef> just means that the alert procedure
; does not return a value, so don't worry about that for now.
; Most Scheme expressions consist of an opening parenthesis, a procedure name,
; some arguments, and a closing parenthesis. This structure --  several items
; enclosed in parentheses -- is called a "list", and is the fundamental
;  data structure for Lisp-like languages (such as Scheme). The powerful
; thing about this is that it lets you easily represent code and data
; using the same syntax.


; Now try the following expression, but this time select the entire expression
; with your mouse, including the single quote at the beginning.

'(alert "Hello, world!")

; The quote tells the system to return the following expression as a Scheme
; data structure, rather than evaluating it.
; The value of (alert "Hello, World") is the return value from showing an
; alert on the screen (which is nothing) The value of '(alert "Hello, world!")
; is a list containing the symbol alert and the string "Hello, World". Without
; the quote, alert is executed as a procedure, while with it, it's used
; as a symbol.

; We can build up lists and select elements from them while the code is running.
; The car procedure returns the first element from a list, and the cdr
; procedure returns the rest of the list after removing the first element.
; Try each of the following, one at a time.

(car '(1 2))

(cdr '(1 2))

; Note that we're using the quote here. This is worth thinking about. What would
; happen if we left the quote off? Scheme would consider the argument for car
; to be (1 2). The problem there is that when it tries to evaluate
; (1 2), it produces an error. Why? Remember that Scheme expects the first
; item in a (non-quoted) list it's evaluating to be a procedure, and 1
; is not a procedure.
; By quoting the '(1 2), we suppress evaluation and pass the list to car or cdr
; as is. Try it without the quote to see the error message.

(car (1 2))

; The car and cdr procedures take lists apart. Now let's see how to build them
; up. The cons procedure takes two arguments. If the second argument is a list,
; including the empty list '(), cons produces a new list, with the
; first argument added to the beginning of the second argument.
; (if the second argument is not a list, cons produces a "dotted pair", which
; is beyond the scope of this tutorial).

(cons 1 '(2 3))

(cons '(2 3) '(4 5))

; Let's look at some other procedures.

(+ 2 2)

; Scheme uses what's known as "prefix notation" for all procedures, including
; arithmetic operations. In most languages there is a mix of conventions, or
; example, 2 + 3 for arithmetic (this is called "infix") and sin(x) for a
; function call. Scheme uses the same syntax for both. While this takes some
; getting used to, it is a very powerful tool.
;
; In this case, + is a procedure which is applied to the arguments
; following. + is a procedure in exactly the same way that alert or car are.
; In contrast to many other languages, Scheme makes no distinction between
; defined procedures and built-in operators. You could even redefine + if
; you wanted, although that would be a bad idea in almost every
; circumstance. :-)

; Speaking of procedure definitions, let's see how that works. Put the cursor
; after the closing paren in (* x x)) and and evaluate it (click the walking person).

(define (square x)
  (* x x))

; You'll get #undef, which once again is nothing to worry about. In BiwaScheme
; (the Scheme used in Fronkensteen) define doesn't return a value. In other
; Schemes this differs. As with most other programming languages, Scheme uses
; * to signify multiplication.

; Now evaluate this:

(square 10)

; Did it work?

; Now let's look at map and apply. The map procedure takes another procedure
; and executes it for every member of its second argument.
; That may seem confusing, so let's see an example.
; Evaluate each of the following expressions one at a time.

(define my-numbers '(1 2 3 4))

(map square my-numbers)

; If you defined square above, you should get the result of using square on
; every element of the list.

; The map procedure operates on its argument one element at a time. By
; contrast, apply uses the procedure on the list as a whole.

(apply + my-numbers)

; The result is exactly the same as running (+ 1 2 3 4).
; Why is this useful? Because we can generate my-numbers seperately using
; a (possibly) complex procedure, and then hand it off to another
; (possibly) complex procedure, without either of those being
; set in stone ahead of time.


; Now let's see how to interact with the DOM (the "web page"). Fronkensteen
; uses a jQuery-like syntax to do that.
; The "hide editor" button in the toolbar (the door icon at the extreme left)
; has the HTML id fronkensteen-editor-hide-button, or
; #fronkensteen-editor-hide-button as a jQuery selector(you can verify this by
; inspecting it in your browser's debugger). Let's say we don't like the door.
; We can use the jQuery interface to change it to anything we want.
; Try this:

(% "#fronkensteen-editor-hide-button" "html" "Buh-bye")


; Cool, huh?
; The whole Fronkensteen system is utterly mutable and can be altered at will.
; What's going on here: the jQuery interface procedure, named %, is being
; called with a selector for an HTML element or elements, in this case
; "#fronkensteen-editor-hide-button", and on that element or elements,
; the "html" operation, which sets the internal HTML of the element or elements
; is being used to set the button's content to "Buh-bye". We could use any
; string we wanted in place of the "Buh-bye", including arbitrarily complex
; HTML code.
; In JavaScript, the equivalent jQuery expression would be:
; $("#fronkensteen-editor-hide-button).html("Buh-bye")
; Note that despite the common complaint that Lisp-like languages have
; too many parentheses, the Scheme version here actually has fewer
; parentheses than the standard jQuery version. :-)
;
; "Lisp isn't a language. It is a building material." -- Alan Kay

; This tutorial has necessarily been very brief. More docs are expected in the
; future.

; Some recommended resources:
;
; Simply Scheme by Brian Harvey and Matthew Wright, available online at:
; https://people.eecs.berkeley.edu/~bh/ss-toc2.html
; This is a great introductory text.
;
; The Structure and Interpretation of Computer Programs, by Harold Abelson
; and Gerald Jay Sussman with Julie Sussman. This is a challenging text for
; most beginners, but would be excellent after the Harvey and Wright book above.
; (in fact, that's one reason Harvey and Wright wrote their book... as a
; "prequel" of sorts to SICP).
; Available as a PDF at:
; https://web.mit.edu/alexmv/6.037/sicp.pdf
; Or as HTML at:
; https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book.html

; How to Design Programs by Felleisen, et al.
; This book is actually about Racket, another Lisp-like language, but
; nonetheless contains much valuable information. It is also intended as
; an introductory text.
; Available online at:
; https://htdp.org/2018-01-06/Book/
;
; The Scheme Programming Language, by R. Kent Dybvig. This is an in-depth
; Scheme manual.
; Available online at:
; https://scheme.com/tspl4/
;
; The Revised6 Report on the Algorithmic Language Scheme, by Sperber, et al.
; The RNRS reports (of which this is the sixth, commonly abbreviated R6RS) are
; the working documents used by Scheme standardization committees to create
; and specify new versions of the language. This is more of a reference
; than a tutorial, but it's of interest nonetheless.
; Available online at:
; http://www.r6rs.org/
;
