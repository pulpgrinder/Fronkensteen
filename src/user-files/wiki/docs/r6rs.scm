

;;;!
11.6  Procedure predicate
;;;;!

;;;!
11.7  Arithmetic

The procedures described here implement arithmetic that is generic over the numerical tower described in chapter 3. The generic procedures described in this section accept both exact and inexact number objects as arguments, performing coercions and selecting the appropriate operations as determined by the numeric subtypes of their arguments.

Library chapter on “Arithmetic” describes libraries that define other numerical procedures.

11.7.1  Propagation of exactness and inexactness

The procedures listed below must return the mathematically correct exact result provided all their arguments are exact:

+            -            *

max          min          abs

numerator    denominator  gcd

lcm          floor        ceiling

truncate     round        rationalize

real-part    imag-part    make-rectangular

The procedures listed below must return the correct exact result provided all their arguments are exact, and no divisors are zero:

/

div          mod           div-and-mod

div0         mod0          div0-and-mod0

Moreover, the procedure expt must return the correct exact result provided its first argument is an exact real number object and its second argument is an exact integer object.

The general rule is that the generic operations return the correct exact result when all of their arguments are exact and the result is mathematically well-defined, but return an inexact result when any argument is inexact. Exceptions to this rule include sqrt, exp, log, sin, cos, tan, asin, acos, atan, expt, make-polar, magnitude, and angle, which may (but are not required to) return inexact results even when given exact arguments, as indicated in the specification of these procedures.

One general exception to the rule above is that an implementation may return an exact result despite inexact arguments if that exact result would be the correct result for all possible substitutions of exact arguments for the inexact ones. An example is (* 1.0 0) which may return either 0 (exact) or 0.0 (inexact).

11.7.2  Representability of infinities and NaNs

The specification of the numerical operations is written as though infinities and NaNs are representable, and specifies many operations with respect to these number objects in ways that are consistent with the IEEE-754 standard for binary floating-point arithmetic. An implementation of Scheme may or may not represent infinities and NaNshowever, an implementation must raise a continuable exception with condition type &no-infinities or &no-nans (respectivelysee library section on “Flonums”) whenever it is unable to represent an infinity or NaN as specified. In this case, the continuation of the exception handler is the continuation that otherwise would have received the infinity or NaN value. This requirement also applies to conversions between number objects and external representations, including the reading of program source code.

11.7.3  Semantics of common operations

Some operations are the semantic basis for several arithmetic procedures. The behavior of these operations is described in this section for later reference.

11.7.3.1  Integer division

Scheme's operations for performing integer division rely on mathematical operations div, mod, div0, and mod0, that are defined as follows:

div, mod, div0, and mod0 each accept two real numbers x1 and x2 as operands, where x2 must be nonzero.

div returns an integer, and mod returns a real. Their results are specified by
x1
div
	 x2 	= 	nd
x1
mod
	 x2 	= 	xm

* where
[r6rs-Z-G-2.gif]

Examples:
123
div
	 10 	= 	12
123
mod
	 10 	= 	3
123
div


−10

		= 	−12
123
mod


−10

		= 	3
−123
div
	 10 	= 	−13
−123
mod
	 10 	= 	7
−123
div


−10

		= 	13
−123
mod


−10

		= 	7

* div0 and mod0 are like div and mod, except the result of mod0 lies within a half-open interval centered on zero. The results are specified by
x1
div
	0 x2 	= 	nd
x1
mod
	0 x2 	= 	xm

* where:
[r6rs-Z-G-3.gif]

Examples:
123
div
	0 10 	= 	12
123
mod
	0 10 	= 	3
123
div
	0

−10

		= 	−12
123
mod
	0

−10

		= 	3
−123
div
	0 10 	= 	−12
−123
mod
	0 10 	= 	−3
−123
div
	0

−10

		= 	12
−123
mod
	0

−10

		= 	−3

*

11.7.3.2  Transcendental functions

In general, the transcendental functions log, sin−1 (arcsine), cos−1 (arccosine), and tan−1 are multiply defined. The value of log z is defined to be the one whose imaginary part lies in the range from −[r6rs-Z-G-D-3.gif] (inclusive if −0.0 is distinguished, exclusive otherwise) to [r6rs-Z-G-D-3.gif] (inclusive). log 0 is undefined.

The value of log z for non-real z is defined in terms of log on real numbers as

[r6rs-Z-G-4.gif]

where angle z is the angle of z = a · eib specified as:


angle
	 z = b + 2[r6rs-Z-G-D-3.gif] n


with −[r6rs-Z-G-D-3.gif] ≤ angle z≤ [r6rs-Z-G-D-3.gif] and angle z = b + 2[r6rs-Z-G-D-3.gif] n for some integer n.

With the one-argument version of log defined this way, the values of the two-argument-version of log, sin−1 z, cos−1 z, tan−1 z, and the two-argument version of tan−1 are according to the following formulæ:
log z b 	= 	(
log z
	/
log b
	)
sin−1 z 	= 	−i log (i z + (1 − z2)1/2)
cos−1 z 	= 	[r6rs-Z-G-D-3.gif] / 2 − sin−1 z
tan−1 z 	= 	(log (1 + i z) − log (1 − i z)) / (2 i)
tan−1 x y 	=
angle
	(x + yi)

*

The range of tan−1 x y is as in the following table. The asterisk (*) indicates that the entry applies to implementations that distinguish minus zero.

	y condition 	x condition 	range of result r
	y = 0.0 	x > 0.0 	0.0
∗ 	y = + 0.0 	x > 0.0 	+ 0.0
∗ 	y = −0.0 	x > 0.0 	−0.0
	y > 0.0 	x > 0.0 	0.0 < r < ([r6rs-Z-G-D-3.gif]/2)
	y > 0.0 	x = 0.0 	([r6rs-Z-G-D-3.gif]/2)
	y > 0.0 	x < 0.0 	([r6rs-Z-G-D-3.gif]/2) < r < [r6rs-Z-G-D-3.gif]
	y = 0.0 	x < 0 	[r6rs-Z-G-D-3.gif]
∗ 	y = + 0.0 	x < 0.0 	[r6rs-Z-G-D-3.gif]
∗ 	y = −0.0 	x < 0.0 	−[r6rs-Z-G-D-3.gif]
	y < 0.0 	x < 0.0 	−[r6rs-Z-G-D-3.gif]< r< −([r6rs-Z-G-D-3.gif]/2)
	y < 0.0 	x = 0.0 	−([r6rs-Z-G-D-3.gif]/2)
	y < 0.0 	x > 0.0 	−([r6rs-Z-G-D-3.gif]/2) < r< 0.0
	y = 0.0 	x = 0.0 	undefined
∗	y = + 0.0 	x = + 0.0 	+ 0.0
∗	y = −0.0 	x = + 0.0	−0.0
∗	y = + 0.0 	x = −0.0 	[r6rs-Z-G-D-3.gif]
∗	y = −0.0 	x = −0.0 	−[r6rs-Z-G-D-3.gif]
∗	y = + 0.0 	x = 0 	([r6rs-Z-G-D-3.gif]/2)
∗	y = −0.0 	x = 0 	−([r6rs-Z-G-D-3.gif]/2)

11.7.4  Numerical operations

11.7.4.1  Numerical type predicates
;;;!
(number? obj) ‌‌procedure
(complex? obj)‌‌ procedure
(real? obj) ‌‌procedure
(rational? obj)‌ ‌procedure
(integer? obj) ‌‌procedure

These numerical type predicates can be applied to any kind of argument. They return #t if the object is a number object of the named type, and #f otherwise. In general, if a type predicate is true of a number object then all higher type predicates are also true of that number object. Consequently, if a type predicate is false of a number object, then all lower type predicates are also false of that number object.

If z is a complex number object, then (real? z) is true if and only if (zero? (imag-part z)) and (exact? (imag-part z)) are both true.

If x is a real number object, then (rational? x) is true if and only if there exist exact integer objects k1 and k2 such that (= x (/ k1 k2)) and (= (numerator x) k1) and (= (denominator x) k2) are all true. Thus infinities and NaNs are not rational number objects.

If q is a rational number objects, then (integer? q) is true if and only if (= (denominator q) 1) is true. If q is not a rational number object, then (integer? q) is #f.

(complex? 3+4i)                        ‌⇒  #t

(complex? 3)                           ‌⇒  #t

(real? 3)                              ‌⇒  #t

(real? -2.5+0.0i)                      ‌⇒  #f

(real? -2.5+0i)                        ‌⇒  #t

(real? -2.5)                           ‌⇒  #t

(real? #e1e10)                         ‌⇒  #t

(rational? 6/10)                       ‌⇒  #t

(rational? 6/3)                        ‌⇒  #t

(rational? 2)                          ‌⇒  #t

(integer? 3+0i)                        ‌⇒  #t

(integer? 3.0)                         ‌⇒  #t

(integer? 8/4)                         ‌⇒  #t

(number? +nan.0)                       ‌⇒  #t

(complex? +nan.0)                      ‌⇒  #t

(real? +nan.0)                         ‌⇒  #t

(rational? +nan.0)                     ‌⇒  #f

(complex? +inf.0)                      ‌⇒  #t

(real? -inf.0)                         ‌⇒  #t

(rational? -inf.0)                     ‌⇒  #f

(integer? -inf.0)                      ‌⇒  #f

    Note:‌ Except for number?, the behavior of these type predicates on inexact number objects is unreliable, because any inaccuracy may affect the result.
;;;!
;;;!
(real-valued? obj)‌‌ procedure
(rational-valued? obj )‌‌procedure
(integer-valued? obj)‌‌ procedure

These numerical type predicates can be applied to any kind of argument. The real-valued? procedure returns #t if the object is a number object and is equal in the sense of = to some real number object, or if the object is a NaN, or a complex number object whose real part is a NaN and whose imaginary part is zero in the sense of zero?. The rational-valued? and integer-valued? procedures return #t if the object is a number object and is equal in the sense of = to some object of the named type, and otherwise they return #f.

(real-valued? +nan.0)                  ‌⇒  #t

(real-valued? +nan.0+0i)                  ‌⇒  #t

(real-valued? -inf.0)                  ‌⇒  #t

(real-valued? 3)                       ‌⇒  #t

(real-valued? -2.5+0.0i)               ‌⇒  #t

(real-valued? -2.5+0i)                 ‌⇒  #t

(real-valued? -2.5)                    ‌⇒  #t

(real-valued? #e1e10)                  ‌⇒  #t

(rational-valued? +nan.0)              ‌⇒  #f

(rational-valued? -inf.0)              ‌⇒  #f

(rational-valued? 6/10)                ‌⇒  #t

(rational-valued? 6/10+0.0i)           ‌⇒  #t

(rational-valued? 6/10+0i)             ‌⇒  #t

(rational-valued? 6/3)                 ‌⇒  #t

(integer-valued? 3+0i)                 ‌⇒  #t

(integer-valued? 3+0.0i)               ‌⇒  #t

(integer-valued? 3.0)                  ‌⇒  #t

(integer-valued? 3.0+0.0i)             ‌⇒  #t

(integer-valued? 8/4)                  ‌⇒  #t

    Note:‌ These procedures test whether a given number object can be coerced to the specified type without loss of numerical accuracy. Specifically, the behavior of these predicates differs from the behavior of real?, rational?, and integer? on complex number objects whose imaginary part is inexact zero.

    Note:‌ The behavior of these type predicates on inexact number objects is unreliable, because any inaccuracy may affect the result.
;;;!
;;;!
(exact? z)‌‌ procedure
(inexact? z)‌‌ procedure

These numerical predicates provide tests for the exactness of a quantity. For any number object, precisely one of these predicates is true.

(exact? 5)                   ‌⇒  #t

(inexact? +inf.0)            ‌⇒  #t

11.7.4.2  Generic conversions
;;;!
;;;!
(inexact z) ‌‌procedure
(exact z)‌‌ procedure

The inexact procedure returns an inexact representation of z. If inexact number objects of the appropriate type have bounded precision, then the value returned is an inexact number object that is nearest to the argument. If an exact argument has no reasonably close inexact equivalent, an exception with condition type &implementation-violation may be raised.

    Note:‌ For a real number object whose magnitude is finite but so large that it has no reasonable finite approximation as an inexact number, a reasonably close inexact equivalent may be +inf.0 or -inf.0. Similarly, the inexact representation of a complex number object whose components are finite may have infinite components.

The exact procedure returns an exact representation of z. The value returned is the exact number object that is numerically closest to the argumentin most cases, the result of this procedure should be numerically equal to its argument. If an inexact argument has no reasonably close exact equivalent, an exception with condition type &implementation-violation may be raised.

These procedures implement the natural one-to-one correspondence between exact and inexact integer objects throughout an implementation-dependent range.

The inexact and exact procedures are idempotent.
;;;!
11.7.4.3  Arithmetic operations
;;;!
(= z1 z2 z3 ...) ‌‌procedure
(< x1 x2 x3 ...) ‌‌procedure
(> x1 x2 x3 ...)‌‌ procedure
(<= x1 x2 x3 ...) ‌‌procedure
(>= x1 x2 x3 ...) ‌‌procedure

These procedures return #t if their arguments are (respectively): equal, monotonically increasing, monotonically decreasing, monotonically nondecreasing, or monotonically nonincreasing, and #f otherwise.

(= +inf.0 +inf.0)           ‌⇒  #t

(= -inf.0 +inf.0)           ‌⇒  #f

(= -inf.0 -inf.0)           ‌⇒  #t

For any real number object x that is neither infinite nor NaN:

(< -inf.0 x +inf.0))        ‌⇒  #t

(> +inf.0 x -inf.0))        ‌⇒  #t

For any number object z:
(= +nan.0 z)               ‌⇒  #f

For any real number object x:
(< +nan.0 x)               ‌⇒  #f

(> +nan.0 x)               ‌⇒  #f

These predicates must be transitive.

    Note:‌ The traditional implementations of these predicates in Lisp-like languages are not transitive.

    Note:‌ While it is possible to compare inexact number objects using these predicates, the results may be unreliable because a small inaccuracy may affect the resultthis is especially true of = and zero? (below).

    When in doubt, consult a numerical analyst.
;;;!
;;;!
(zero? z)‌‌ procedure
(positive? x)‌‌ procedure
(negative? x)‌‌ procedure
(odd? n)‌‌ procedure
(even? n) ‌‌procedure
(finite? x)‌‌ procedure
(infinite? x)‌‌ procedure
(nan? x)‌‌ procedure

These numerical predicates test a number object for a particular property, returning #t or #f. The zero? procedure tests if the number object is = to zero, positive? tests whether it is greater than zero, negative? tests whether it is less than zero, odd? tests whether it is odd, even? tests whether it is even, finite? tests whether it is not an infinity and not a NaN, infinite? tests whether it is an infinity, nan? tests whether it is a NaN.

(zero? +0.0)                  ‌⇒  #t

(zero? -0.0)                  ‌⇒  #t

(zero? +nan.0)                ‌⇒  #f

(positive? +inf.0)            ‌⇒  #t

(negative? -inf.0)            ‌⇒  #t

(positive? +nan.0)            ‌⇒  #f

(negative? +nan.0)            ‌⇒  #f

(finite? +inf.0)              ‌⇒  #f

(finite? 5)                   ‌⇒  #t

(finite? 5.0)                 ‌⇒  #t

(infinite? 5.0)               ‌⇒  #f

(infinite? +inf.0)            ‌⇒  #t

    Note:‌ As with the predicates above, the results may be unreliable because a small inaccuracy may affect the result.
;;;!
;;;!
(max x1 x2 ...) ‌‌procedure
(min x1 x2 ...)‌‌ procedure

These procedures return the maximum or minimum of their arguments.

(max 3 4)                              ‌⇒  4

(max 3.9 4)                            ‌⇒  4.0

For any real number object x:

(max +inf.0 x)                         ‌⇒  +inf.0

(min -inf.0 x)                         ‌⇒  -inf.0

    Note:‌ If any argument is inexact, then the result is also inexact (unless the procedure can prove that the inaccuracy is not large enough to affect the result, which is possible only in unusual implementations). If min or max is used to compare number objects of mixed exactness, and the numerical value of the result cannot be represented as an inexact number object without loss of accuracy, then the procedure may raise an exception with condition type &implementation-restriction.
;;;!
;;;!
(+ z1 ...) ‌‌procedure
(* z1 ...)‌‌ procedure

These procedures return the sum or product of their arguments.

(+ 3 4)                                ‌⇒  7

(+ 3)                                  ‌⇒  3

(+)                                    ‌⇒  0

(+ +inf.0 +inf.0)                      ‌⇒  +inf.0

(+ +inf.0 -inf.0)                      ‌⇒  +nan.0

(* 4)                                  ‌⇒  4

(*)                                    ‌⇒  1

(* 5 +inf.0)                           ‌⇒  +inf.0

(* -5 +inf.0)                          ‌⇒  -inf.0

(* +inf.0 +inf.0)                      ‌⇒  +inf.0

(* +inf.0 -inf.0)                      ‌⇒  -inf.0

(* 0 +inf.0)                           ‌⇒  0 or +nan.0

(* 0 +nan.0)                           ‌⇒  0 or +nan.0

(* 1.0 0)                              ‌⇒  0 or 0.0

For any real number object x that is neither infinite nor NaN:

(+ +inf.0 x)                           ‌⇒  +inf.0

(+ -inf.0 x)                           ‌⇒  -inf.0

For any real number object x:

(+ +nan.0 x)                           ‌⇒  +nan.0

For any real number object x that is not an exact 0:

(* +nan.0 x)                           ‌⇒  +nan.0

If any of these procedures are applied to mixed non-rational real and non-real complex arguments, they either raise an exception with condition type &implementation-restriction or return an unspecified number object.

Implementations that distinguish −0.0 should adopt behavior consistent with the following examples:

(+ 0.0 -0.0)  ‌⇒ 0.0

(+ -0.0 0.0)  ‌⇒ 0.0

(+ 0.0 0.0)   ‌⇒ 0.0

(+ -0.0 -0.0) ‌⇒ -0.0
;;;!
;;;!
(- z)‌‌ procedure
(- z1 z2 ...) ‌‌procedure

With two or more arguments, this procedures returns the difference of its arguments, associating to the left. With one argument, however, it returns the additive inverse of its argument.

(- 3 4)                                ‌⇒  -1

(- 3 4 5)                              ‌⇒  -6

(- 3)                                  ‌⇒  -3

(- +inf.0 +inf.0)                      ‌⇒  +nan.0

If this procedure is applied to mixed non-rational real and non-real complex arguments, it either raises an exception with condition type &implementation-restriction or returns an unspecified number object.

Implementations that distinguish −0.0 should adopt behavior consistent with the following examples:

(- 0.0)       ‌⇒ -0.0

(- -0.0)      ‌⇒ 0.0

(- 0.0 -0.0)  ‌⇒ 0.0

(- -0.0 0.0)  ‌⇒ -0.0

(- 0.0 0.0)   ‌⇒ 0.0

(- -0.0 -0.0) ‌⇒ 0.0
;;;!
;;;!
(/ z)‌‌ procedure
(/ z1 z2 ...) ‌‌procedure

If all of the arguments are exact, then the divisors must all be nonzero. With two or more arguments, this procedure returns the quotient of its arguments, associating to the left. With one argument, however, it returns the multiplicative inverse of its argument.

(/ 3 4 5)                              ‌⇒  3/20

(/ 3)                                  ‌⇒  1/3

(/ 0.0)                                ‌⇒  +inf.0

(/ 1.0 0)                              ‌⇒  +inf.0

(/ -1 0.0)                             ‌⇒  -inf.0

(/ +inf.0)                             ‌⇒  0.0

(/ 0 0)                                  &assertion exception

(/ 3 0)                                  &assertion exception

(/ 0 3.5)                              ‌⇒  0.0

(/ 0 0.0)                              ‌⇒  +nan.0

(/ 0.0 0)                              ‌⇒  +nan.0

(/ 0.0 0.0)                            ‌⇒  +nan.0

If this procedure is applied to mixed non-rational real and non-real complex arguments, it either raises an exception with condition type &implementation-restriction or returns an unspecified number object.
;;;!
;;;!
(abs x)‌‌ procedure

Returns the absolute value of its argument.

(abs -7)                               ‌⇒  7

(abs -inf.0)                           ‌⇒  +inf.0
;;;!
;;;!
(div-and-mod x1 x2)‌‌ procedure
(div x1 x2) ‌‌procedure
(mod x1 x2) ‌‌procedure
(div0-and-mod0 x1 x2) ‌‌procedure
(div0 x1 x2) ‌‌procedure
(mod0 x1 x2) ‌‌procedure

These procedures implement number-theoretic integer division and return the results of the corresponding mathematical operations specified in section 11.7.3.1. In each case, x1 must be neither infinite nor a NaN, and x2 must be nonzerootherwise, an exception with condition type &assertion is raised.

(div x1 x2)         ‌⇒ x1 div x2

(mod x1 x2)         ‌⇒ x1 mod x2

(div-and-mod x1 x2)     ‌⇒ x1 div x2, x1 mod x2
two return values

(div0 x1 x2)        ‌⇒ x1 div0 x2

(mod0 x1 x2)        ‌⇒ x1 mod0 x2

(div0-and-mod0 x1 x2)
‌‌⇒ x1 div0 x2, x1 mod0 x2
two return values
;;;!
;;;!
(gcd n1 ...) ‌‌procedure
(lcm n1 ...) ‌‌procedure

These procedures return the greatest common divisor or least common multiple of their arguments. The result is always non-negative.

(gcd 32 -36)                           ‌⇒  4

(gcd)                                  ‌⇒  0

(lcm 32 -36)                           ‌⇒  288

(lcm 32.0 -36)                         ‌⇒  288.0

(lcm)                                  ‌⇒  1
;;;!
;;;!
(numerator q)‌‌ procedure
(denominator q)‌‌ procedure

These procedures return the numerator or denominator of their argumentthe result is computed as if the argument was represented as a fraction in lowest terms. The denominator is always positive. The denominator of 0 is defined to be 1.

(numerator (/ 6 4))                    ‌⇒  3

(denominator (/ 6 4))                  ‌⇒  2

(denominator

  (inexact (/ 6 4)))                   ‌⇒  2.0
;;;!
;;;!
(floor x)‌ ‌procedure
(ceiling x)‌‌ procedure
(truncate x)‌‌ procedure
(round x)‌‌ procedure

These procedures return inexact integer objects for inexact arguments that are not infinities or NaNs, and exact integer objects for exact rational arguments. For such arguments, floor returns the largest integer object not larger than x. The ceiling procedure returns the smallest integer object not smaller than x. The truncate procedure returns the integer object closest to x whose absolute value is not larger than the absolute value of x. The round procedure returns the closest integer object to x, rounding to even when x represents a number halfway between two integers.

    Note:‌ If the argument to one of these procedures is inexact, then the result is also inexact. If an exact value is needed, the result should be passed to the exact procedure.

Although infinities and NaNs are not integer objects, these procedures return an infinity when given an infinity as an argument, and a NaN when given a NaN.

(floor -4.3)                           ‌⇒  -5.0

(ceiling -4.3)                         ‌⇒  -4.0

(truncate -4.3)                        ‌⇒  -4.0

(round -4.3)                           ‌⇒  -4.0

(floor 3.5)                            ‌⇒  3.0

(ceiling 3.5)                          ‌⇒  4.0

(truncate 3.5)                         ‌⇒  3.0

(round 3.5)                            ‌⇒  4.0

(round 7/2)                            ‌⇒  4

(round 7)                              ‌⇒  7

(floor +inf.0)                         ‌⇒  +inf.0

(ceiling -inf.0)                       ‌⇒  -inf.0

(round +nan.0)                         ‌⇒  +nan.0
;;;!
;;;!
(rationalize x1 x2) ‌‌procedure

The rationalize procedure returns the a number object representing the simplest rational number differing from x1 by no more than x2. A rational number r1 is simpler than another rational number r2 if r1 = p1/q1 and r2 = p2/q2 (in lowest terms) and |p1| ≤ |p2| and |q1| ≤ |q2|. Thus 3/5 is simpler than 4/7. Although not all rationals are comparable in this ordering (consider 2/7 and 3/5) any interval contains a rational number that is simpler than every other rational number in that interval (the simpler 2/5 lies between 2/7 and 3/5). Note that 0 = 0/1 is the simplest rational of all.
(rationalize (exact .3) 1/10)
‌‌⇒ 1/3

(rationalize .3 1/10)
‌‌⇒ #i1/3  approximately

(rationalize +inf.0 3)                 ‌⇒  +inf.0

(rationalize +inf.0 +inf.0)            ‌⇒  +nan.0

(rationalize 3 +inf.0)                 ‌⇒  0.0

The first two examples hold only in implementations whose inexact real number objects have sufficient precision.
;;;!
;;;!
(exp z)‌‌ procedure
(log z) ‌‌procedure
(log z1 z2)‌‌ procedure
(sin z) ‌‌procedure
(cos z)‌‌procedure
(tan z)‌‌ procedure
(asin z) ‌‌procedure
(acos z) ‌‌procedure
(atan z)‌ ‌procedure
(atan x1 x2) ‌‌procedure

These procedures compute the usual transcendental functions. The exp procedure computes the base-e exponential of z. The log procedure with a single argument computes the natural logarithm of z (not the base-ten logarithm)(log z1 z2) computes the base-z2 logarithm of z1. The asin, acos, and atan procedures compute arcsine, arccosine, and arctangent, respectively. The two-argument variant of atan computes (angle (make-rectangular x2 x1)).

See section 11.7.3.2 for the underlying mathematical operations. These procedures may return inexact results even when given exact arguments.

(exp +inf.0)                   ‌⇒ +inf.0

(exp -inf.0)                   ‌⇒ 0.0

(log +inf.0)                   ‌⇒ +inf.0

(log 0.0)                      ‌⇒ -inf.0

(log 0)                          &assertion exception

(log -inf.0)
‌‌⇒ +inf.0+3.141592653589793i
 approximately

(atan -inf.0)
‌‌⇒ -1.5707963267948965 approximately

(atan +inf.0)
‌‌⇒ 1.5707963267948965 approximately

(log -1.0+0.0i)
‌‌⇒ 0.0+3.141592653589793i approximately

(log -1.0-0.0i)
‌‌⇒ 0.0-3.141592653589793i approximately
if -0.0 is distinguished
;;;!
;;;!
(sqrt z) ‌‌procedure

Returns the principal square root of z. For rational z, the result has either positive real part, or zero real part and non-negative imaginary part. With log defined as in section 11.7.3.2, the value of (sqrt z) could be expressed as e(log z/2).

The sqrt procedure may return an inexact result even when given an exact argument.

(sqrt -5)
‌‌⇒  0.0+2.23606797749979i approximately

(sqrt +inf.0)               ‌⇒  +inf.0

(sqrt -inf.0)               ‌⇒  +inf.0i
;;;!
;;;!
(exact-integer-sqrt k)‌‌ procedure

The exact-integer-sqrt procedure returns two non-negative exact integer objects s and r where k = s2 + r and k < (s + 1)2.

(exact-integer-sqrt 4) ‌⇒ 2 0
two return values

(exact-integer-sqrt 5) ‌⇒ 2 1
two return values
;;;!
;;;!
(expt z1 z2)‌‌ procedure

Returns z1 raised to the power z2. For nonzero z1, this is ez2 log z1. 0.0z is 1.0 if z = 0.0, and 0.0 if (real-part z) is positive. For other cases in which the first argument is zero, either an exception is raised with condition type &implementation-restriction, or an unspecified number object is returned.

For an exact real number object z1 and an exact integer object z2, (expt z1 z2) must return an exact result. For all other values of z1 and z2, (expt z1 z2) may return an inexact result, even when both z1 and z2 are exact.

(expt 5 3)                  ‌⇒  125

(expt 5 -3)                 ‌⇒  1/125

(expt 5 0)                  ‌⇒  1

(expt 0 5)                  ‌⇒  0

(expt 0 5+.0000312i)        ‌⇒  0

(expt 0 -5)                 ‌⇒  unspecified

(expt 0 -5+.0000312i)       ‌⇒  unspecified

(expt 0 0)                  ‌⇒  1

(expt 0.0 0.0)              ‌⇒  1.0
;;;!
;;;!
(make-rectangular x1 x2)‌‌ procedure
(make-polar x3 x4)‌‌ procedure
(real-part z)‌‌ procedure
(imag-part z)‌‌ procedure
(magnitude z)‌‌ procedure
(angle z) ‌‌procedure

Suppose a1, a2, a3, and a4 are real numbers, and c is a complex number such that the following holds:
[r6rs-Z-G-5.gif]

Then, if x1, x2, x3, and x4 are number objects representing a1, a2, a3, and a4, respectively, (make-rectangular x1 x2) returns c, and (make-polar x3 x4) returns c.
(make-rectangular 1.1 2.2)
‌‌⇒ 1.1+2.2i approximately

(make-polar 1.1 2.2)
‌‌⇒ 1.1@2.2 approximately

Conversely, if −[r6rs-Z-G-D-3.gif] ≤ a4 ≤ [r6rs-Z-G-D-3.gif], and if z is a number object representing c, then (real-part z) returns a1 (imag-part z) returns a2, (magnitude z) returns a3, and (angle z) returns a4.

(real-part 1.1+2.2i)              ‌⇒ 1.1 approximately

(imag-part 1.1+2.2i)              ‌⇒ 2.2i approximately

(magnitude 1.1@2.2)              ‌⇒ 1.1 approximately

(angle 1.1@2.2)                  ‌⇒ 2.2 approximately

(angle -1.0)
‌‌⇒ 3.141592653589793 approximately

(angle -1.0+0.0i)
‌‌⇒ 3.141592653589793 approximately

(angle -1.0-0.0i)
‌‌⇒ -3.141592653589793 approximately
if -0.0 is distinguished

(angle +inf.0)       ‌⇒ 0.0

(angle -inf.0)
‌‌⇒ 3.141592653589793 approximately

Moreover, suppose x1, x2 are such that either x1 or x2 is an infinity, then
(make-rectangular x1 x2) ‌⇒ z

(magnitude z)              ‌⇒ +inf.0

The make-polar, magnitude, and angle procedures may return inexact results even when given exact arguments.

(angle -1)
‌‌⇒ 3.141592653589793 approximately
;;;!
11.7.4.4  Numerical Input and Output
;;;!
(number->string z)‌‌ procedure
(number->string z radix) ‌‌procedure
(number->string z radix precision)‌‌ procedure

Radix must be an exact integer object, either 2, 8, 10, or 16. If omitted, radix defaults to 10. If a precision is specified, then z must be an inexact complex number object, precision must be an exact positive integer object, and radix must be 10. The number->string procedure takes a number object and a radix and returns as a string an external representation of the given number object in the given radix such that
(let ((number z) (radix radix))

  (eqv? (string->number

          (number->string number radix)

          radix)

        number))

is true. If no possible result makes this expression true, an exception with condition type &implementation-restriction is raised.

    Note:‌ The error case can occur only when z is not a complex number object or is a complex number object with a non-rational real or imaginary part.

If a precision is specified, then the representations of the inexact real components of the result, unless they are infinite or NaN, specify an explicit <mantissa width> p, and p is the least p ≥ precision for which the above expression is true.

If z is inexact, the radix is 10, and the above expression and condition can be satisfied by a result that contains a decimal point, then the result contains a decimal point and is expressed using the minimum number of digits (exclusive of exponent, trailing zeroes, and mantissa width) needed to make the above expression and condition true [4, 7]otherwise the format of the result is unspecified.

The result returned by number->string never contains an explicit radix prefix.
;;;!
;;;!
(string->number string)‌‌ procedure
(string->number string radix) ‌‌procedure

Returns a number object with maximally precise representation expressed by the given string. Radix must be an exact integer object, either 2, 8, 10, or 16. If supplied, radix is a default radix that may be overridden by an explicit radix prefix in string (e.g., "#o177"). If radix is not supplied, then the default radix is 10. If string is not a syntactically valid notation for a number object or a notation for a rational number object with a zero denominator, then string->number returns #f.
(string->number "100")                 ‌⇒  100

(string->number "100" 16)              ‌⇒  256

(string->number "1e2")                 ‌⇒  100.0

(string->number "0/0")                 ‌⇒  #f

(string->number "+inf.0")              ‌⇒  +inf.0

(string->number "-inf.0")              ‌⇒  -inf.0

(string->number "+nan.0")              ‌⇒  +nan.0

    Note:‌ The string->number procedure always returns a number object or #fit never raises an exception.
;;;!
11.8  Booleans

The standard boolean objects for true and false have external representations #t and #f.However, of all objects, only #f counts as false in conditional expressions. See section 5.7.

    Note:‌ Programmers accustomed to other dialects of Lisp should be aware that Scheme distinguishes both #f and the empty list from each other and from the symbol nil.
;;;!
(not obj)‌‌ procedure

Returns #t if obj is #f, and returns #f otherwise.

(not #t)   ‌⇒  #f

(not 3)          ‌⇒  #f

(not (list 3))   ‌⇒  #f

(not #f)  ‌⇒  #t

(not '())        ‌⇒  #f

(not (list))     ‌⇒  #f

(not 'nil)       ‌⇒  #f
;;;!
;;;!
(boolean? obj) ‌‌procedure

Returns #t if obj is either #t or #f and returns #f otherwise.

(boolean? #f)  ‌⇒  #t

(boolean? 0)          ‌⇒  #f

(boolean? '())        ‌⇒  #f

(boolean=? bool1 bool2 bool3 ...)‌‌procedure

Returns #t if the booleans are the same.
;;;!
11.9  Pairs and lists

A pair is a compound structure with two fields called the car and cdr fields (for historical reasons). Pairs are created by the procedure cons. The car and cdr fields are accessed by the procedures car and cdr.

Pairs are used primarily to represent lists. A list can be defined recursively as either the empty listor a pair whose cdr is a list. More precisely, the set of lists is defined as the smallest set X such that

    The empty list is in X.

    If list is in X, then any pair whose cdr field contains list is also in X.

The objects in the car fields of successive pairs of a list are the elements of the list. For example, a two-element list is a pair whose car is the first element and whose cdr is a pair whose car is the second element and whose cdr is the empty list. The length of a list is the number of elements, which is the same as the number of pairs.

The empty listis a special object of its own type. It is not a pair. It has no elements and its length is zero.

    Note:‌ The above definitions imply that all lists have finite length and are terminated by the empty list.

A chain of pairs not ending in the empty list is called an improper list. Note that an improper list is not a list. The list and dotted notations can be combined to represent improper lists:

(a b c . d)

is equivalent to

(a . (b . (c . d)))

Whether a given pair is a list depends upon what is stored in the cdr field.
;;;!
(pair? obj)‌‌ procedure

Returns #t if obj is a pair, and otherwise returns #f.

(pair? '(a . b))        ‌⇒  #t

(pair? '(a b c))        ‌⇒  #t

(pair? '())             ‌⇒  #f

(pair? '#(a b))         ‌⇒  #f
;;;!
;;;!
(cons obj1 obj2) ‌‌procedure

Returns a newly allocated pair whose car is obj1 and whose cdr is obj2. The pair is guaranteed to be different (in the sense of eqv?) from every existing object.

(cons 'a '())           ‌⇒  (a)

(cons '(a) '(b c d))    ‌⇒  ((a) b c d)

(cons "a" '(b c))       ‌⇒  ("a" b c)

(cons 'a 3)             ‌⇒  (a . 3)

(cons '(a b) 'c)        ‌⇒  ((a b) . c)
;;;!
;;;!
(car pair) ‌‌procedure

Returns the contents of the car field of pair.

(car '(a b c))          ‌⇒  a

(car '((a) b c d))      ‌⇒  (a)

(car '(1 . 2))          ‌⇒  1

(car '())                 &assertion exception
;;;!
;;;!
(cdr pair)‌‌ procedure

Returns the contents of the cdr field of pair.

(cdr '((a) b c d))      ‌⇒  (b c d)

(cdr '(1 . 2))          ‌⇒  2

(cdr '())                 &assertion exception
;;;!
;;;!
(caar pair)‌‌ procedure
(cadr pair)‌‌ procedure
(cdar pair)‌‌ procedure
(cddr pair)‌‌ procedure
(caaar pair)‌‌ procedure
(caadr pair)‌‌ procedure
(cadar pair)‌‌ procedure
(caddr pair)‌‌ procedure
(cdaar pair)‌‌ procedure
(cdadr pair)‌‌ procedure
(cddar pair)‌‌ procedure
(cdddr pair)‌‌ procedure
(caaaar pair) procedure
(caaadr pair) procedure
(caadar pair) procedure
(caaddr pair) procedure
(cadaar pair) procedure
(cadadr pair) procedure
(caddar pair) procedure
(cadddr pair) procedure
(cdaaar pair) procedure
(cdaadr pair) procedure
(cdadar pair) procedure
(cdaddr pair) procedure
(cddaar pair) procedure
(cddadr pair) procedure
(cdddar pair)‌‌ procedure
(cddddr pair) procedure

These procedures are compositions of car and cdr, where for example caddr could be defined by

(define caddr (lambda (x) (car (cdr (cdr x))))).

Arbitrary compositions, up to four deep, are provided. There are twenty-eight of these procedures in all.
;;;!

;;;!
(null? obj)‌‌ procedure

Returns #t if obj is the empty list, #fotherwise.
;;;!
;;;!
(list? obj)‌‌ procedure

Returns #t if obj is a list, #f otherwise. By definition, all lists are chains of pairs that have finite length and are terminated by the empty list.

(list? '(a b c))     ‌⇒  #t

(list? '())          ‌⇒  #t

(list? '(a . b))     ‌⇒  #f

(list obj ...)‌‌procedure

Returns a newly allocated list of its arguments.

(list 'a (+ 3 4) 'c)            ‌⇒  (a 7 c)

(list)                          ‌⇒  ()
;;;!
;;;!
(length list) ‌‌procedure

Returns the length of list.

(length '(a b c))               ‌⇒  3

(length '(a (b) (c d e)))       ‌⇒  3

(length '())                    ‌⇒  0
;;;!
;;;!
(append list ... obj)‌‌ procedure

Returns a possibly improper list consisting of the elements of the first list followed by the elements of the other lists, with obj as the cdr of the final pair. An improper list results if obj is not a list.

(append '(x) '(y))              ‌⇒  (x y)

(append '(a) '(b c d))          ‌⇒  (a b c d)

(append '(a (b)) '((c)))        ‌⇒  (a (b) (c))

(append '(a b) '(c . d))        ‌⇒  (a b c . d)

(append '() 'a)                 ‌⇒  a

If append constructs a nonempty chain of pairs, it is always newly allocated. If no pairs are allocated, obj is returned.
;;;!
;;;!
(reverse list) ‌‌procedure

Returns a newly allocated list consisting of the elements of list in reverse order.

(reverse '(a b c))              ‌⇒  (c b a)

(reverse '(a (b c) d (e (f))))
‌‌⇒  ((e (f)) d (b c) a)
;;;!
;;;!
(list-tail list k)‌‌ procedure

List should be a list of size at least k. The list-tail procedure returns the subchain of pairs of list obtained by omitting the first k elements.

(list-tail '(a b c d) 2)                 ‌⇒  (c d)

Implementation responsibilities: The implementation must check that list is a chain of pairs whose length is at least k. It should not check that it is a chain of pairs beyond this length.
;;;!
;;;!
(list-ref list k) ‌‌procedure

List must be a list whose length is at least k + 1. The list-tail procedure returns the kth element of list.

(list-ref '(a b c d) 2)                 ‌⇒ c

Implementation responsibilities: The implementation must check that list is a chain of pairs whose length is at least k + 1. It should not check that it is a list of pairs beyond this length.
;;;!
;;;!
(map proc list1 list2 ...) ‌‌procedure

The lists should all have the same length. Proc should accept as many arguments as there are lists and return a single value. Proc should not mutate any of the lists.

The map procedure applies proc element-wise to the elements of the lists and returns a list of the results, in order. Proc is always called in the same dynamic environment as map itself. The order in which proc is applied to the elements of the lists is unspecified. If multiple returns occur from map, the values returned by earlier returns are not mutated.

(map cadr '((a b) (d e) (g h)))
‌‌⇒  (b e h)

(map (lambda (n) (expt n n))

     '(1 2 3 4 5))
‌‌⇒  (1 4 27 256 3125)

(map + '(1 2 3) '(4 5 6))         ‌⇒  (5 7 9)

(let ((count 0))

  (map (lambda (ignored)

         (set! count (+ count 1))

         count)

       '(a b)))                 ‌⇒  (1 2) or (2 1)

Implementation responsibilities: The implementation should check that the lists all have the same length. The implementation must check the restrictions on proc to the extent performed by applying it as described. An implementation may check whether proc is an appropriate argument before applying it.
;;;!
;;;!
(for-each proc list1 list2 ...) ‌‌procedure

The lists should all have the same length. Proc should accept as many arguments as there are lists. Proc should not mutate any of the lists.

The for-each procedure applies proc element-wise to the elements of the lists for its side effects, in order from the first elements to the last. Proc is always called in the same dynamic environment as for-each itself. The return values of for-each are unspecified.

(let ((v (make-vector 5)))

  (for-each (lambda (i)

              (vector-set! v i (* i i)))

            '(0 1 2 3 4))

  v)                                ‌⇒  #(0 1 4 9 16)

(for-each (lambda (x) x) '(1 2 3 4))
‌‌⇒ unspecified

(for-each even? '()) ‌⇒ unspecified

Implementation responsibilities: The implementation should check that the lists all have the same length. The implementation must check the restrictions on proc to the extent performed by applying it as described. An implementation may check whether proc is an appropriate argument before applying it.

    Note:‌ Implementations of for-each may or may not tail-call proc on the last elements.
;;;!
11.10  Symbols

Symbols are objects whose usefulness rests on the fact that two symbols are identical (in the sense of eq?, eqv? and equal?) if and only if their names are spelled the same way. A symbol literal is formed using quote.
;;;!
(symbol? obj) ‌‌procedure

Returns #t if obj is a symbol, otherwise returns #f.

(symbol? 'foo)          ‌⇒  #t

(symbol? (car '(a b)))  ‌⇒  #t

(symbol? "bar")         ‌⇒  #f

(symbol? 'nil)          ‌⇒  #t

(symbol? '())           ‌⇒  #f

(symbol? #f)     ‌⇒  #f
;;;!
;;;!
(symbol->string symbol)‌‌ procedure

Returns the name of symbol as an immutable string.

(symbol->string 'flying-fish)

                                  ‌⇒  "flying-fish"

(symbol->string 'Martin)          ‌⇒  "Martin"

(symbol->string

   (string->symbol "Malvina"))

                                  ‌⇒  "Malvina"
;;;!
;;;!
(symbol=? symbol1 symbol2 symbol3 ...)‌‌ procedure

Returns #t if the symbols are the same, i.e., if their names are spelled the same.
;;;!
;;;!
(string->symbol string)‌‌ procedure

Returns the symbol whose name is string.

(eq? 'mISSISSIppi 'mississippi)
‌‌⇒  #f

(string->symbol "mISSISSIppi")
‌‌⇒the symbol with name "mISSISSIppi"

(eq? 'bitBlt (string->symbol "bitBlt"))
‌‌⇒  #t

(eq? 'JollyWog

     (string->symbol

       (symbol->string 'JollyWog)))
‌‌⇒  #t

(string=? "K. Harper, M.D."

          (symbol->string

            (string->symbol "K. Harper, M.D.")))
‌‌⇒  #t
;;;!
11.11  Characters

Characters are objects that represent Unicode scalar values [27].

    Note:‌ Unicode defines a standard mapping between sequences of Unicode scalar values(integers in the range 0 to #x10FFFF, excluding the range #xD800 to #xDFFF) in the latest version of the standard and human-readable “characters”. More precisely, Unicode distinguishes between glyphs, which are printed for humans to read, and characters, which are abstract entities that map to glyphs (sometimes in a way that's sensitive to surrounding characters). Furthermore, different sequences of scalar values sometimes correspond to the same character. The relationships among scalar, characters, and glyphs are subtle and complex.

    Despite this complexity, most things that a literate human would call a “character” can be represented by a single Unicode scalar value (although several sequences of Unicode scalar values may represent that same character). For example, Roman letters, Cyrillic letters, Hebrew consonants, and most Chinese characters fall into this category.

    Unicode scalar values exclude the range #xD800 to #xDFFF, which are part of the range of Unicode code points. However, the Unicode code points in this range, the so-called surrogates, are an artifact of the UTF-16 encoding, and can only appear in specific Unicode encodings, and even then only in pairs that encode scalar values. Consequently, all characters represent code points, but the surrogate code points do not have representations as characters.
;;;!
(char? obj)‌‌ procedure

Returns #t if obj is a character, otherwise returns #f.
;;;!
;;;!
(char->integer char)‌‌ procedure
(integer->char sv)‌‌procedure


Sv must be a Unicode scalar value, i.e., a non-negative exact integer object in [0, #xD7FF] ∪ [#xE000, #x10FFFF].

Given a character, char->integer returns its Unicode scalar value as an exact integer object. For a Unicode scalar value sv, integer->char returns its associated character.

(integer->char 32) ‌⇒ #\space

(char->integer (integer->char 5000))

‌⇒ 5000

(integer->char #\xD800)   &assertion exception
;;;!
;;;!
(char=? char1 char2 char3 ...)‌‌ procedure
(char<? char1 char2 char3 ...) ‌‌procedure
(char>? char1 char2 char3 ...) ‌‌procedure
(char<=? char1 char2 char3 ...) ‌‌procedure
(char>=? char1 char2 char3 ...) ‌‌procedure

These procedures impose a total ordering on the set of characters according to their Unicode scalar values.

(char<? #\z #\ß) ‌⇒ #t

(char<? #\z #\Z) ‌⇒ #f
;;;!
11.12  Strings

Strings are sequences of characters.

The length of a string is the number of characters that it contains. This number is fixed when the string is created. The valid indices of a string are the integers less than the length of the string. The first character of a string has index 0, the second has index 1, and so on.
;;;!
(string? obj) ‌‌procedure

Returns #t if obj is a string, otherwise returns #f.
;;;!
;;;!
(make-string k) ‌‌procedure
(make-string k char)‌‌ procedure

Returns a newly allocated string of length k. If char is given, then all elements of the string are initialized to char, otherwise the contents of the string are unspecified.
;;;!
;;;!
(string char ...)‌‌ procedure

Returns a newly allocated string composed of the arguments.
;;;!
;;;!
(string-length string)‌‌ procedure

Returns the number of characters in the given string as an exact integer object.
;;;!
;;;!
(string-ref string k)‌‌ procedure

K must be a valid index of string. The string-ref procedure returns character

k of string using zero-origin indexing.

    Note:‌ Implementors should make string-ref run in constant time.
;;;!
;;;!
(string=? string1 string2 string3 ...) ‌‌procedure

Returns #t if the strings are the same length and contain the same characters in the same positions. Otherwise, the string=? procedure returns #f.

(string=? "Straße" "Strasse")
‌‌⇒ #f
;;;!
;;;!
(string<? string1 string2 string3 ...) ‌‌procedure
(string>? string1 string2 string3 ...) ‌‌procedure
(string<=? string1 string2 string3 ...)‌ ‌procedure
(string>=? string1 string2 string3 ...) ‌‌procedure

These procedures are the lexicographic extensions to strings of the corresponding orderings on characters. For example, string<? is the lexicographic ordering on strings induced by the ordering char<? on characters. If two strings differ in length but are the same up to the length of the shorter string, the shorter string is considered to be lexicographically less than the longer string.

(string<? "z" "ß") ‌⇒ #t

(string<? "z" "zz") ‌⇒ #t

(string<? "z" "Z") ‌⇒ #f
;;;!
;;;!
(substring string start end)‌‌ procedure

String must be a string, and start and end must be exact integer objects satisfying

0 ≤


start


	≤


end


	≤
(string-length string).



The substring procedure returns a newly allocated string formed from the characters of string beginning with index start (inclusive) and ending with index end (exclusive).
;;;!
;;;!
(string-append string ...)‌‌ procedure

Returns a newly allocated string whose characters form the concatenation of the given strings.
;;;!
;;;!
(string->list string)‌‌ procedure
(list->string list)‌‌ procedure

List must be a list of characters. The string->list procedure returns a newly allocated list of the characters that make up the given string. The list->string procedure returns a newly allocated string formed from the characters in list. The string->list and list->string procedures are inverses so far as equal? is concerned.
;;;!
;;;!
(string-for-each proc string1 string2 ...)‌‌ procedure

The strings must all have the same length. Proc should accept as many arguments as there are strings. The string-for-each procedure applies proc element-wise to the characters of the strings for its side effects, in order from the first characters to the last. Proc is always called in the same dynamic environment as string-for-each itself. The return values of string-for-each are unspecified.

Analogous to for-each.

Implementation responsibilities: The implementation must check the restrictions on proc to the extent performed by applying it as described. An implementation may check whether proc is an appropriate argument before applying it.
;;;!
;;;!
(string-copy string)‌‌ procedure

Returns a newly allocated copy of the given string.
;;;!
11.13  Vectors

Vectors are heterogeneous structures whose elements are indexed by integers. A vector typically occupies less space than a list of the same length, and the average time needed to access a randomly chosen element is typically less for the vector than for the list.

The length of a vector is the number of elements that it contains. This number is a non-negative integer that is fixed when the vector is created. The valid indicesof a vector are the exact non-negative integer objects less than the length of the vector. The first element in a vector is indexed by zero, and the last element is indexed by one less than the length of the vector.

Like list constants, vector constants must be quoted:

'#(0 (2 2 2 2) "Anna")
‌‌⇒  #(0 (2 2 2 2) "Anna")
;;;!
(vector? obj)‌‌ procedure

Returns #t if obj is a vector. Otherwise the procedure returns #f.
;;;!
;;;!
(make-vector k)‌‌ procedure
(make-vector k fill) ‌‌procedure

Returns a newly allocated vector of k elements. If a second argument is given, then each element is initialized to fill. Otherwise the initial contents of each element is unspecified.
;;;!
;;;!
(vector obj ...) ‌‌procedure

Returns a newly allocated vector whose elements contain the given arguments. Analogous to list.

(vector 'a 'b 'c)               ‌⇒  #(a b c)
;;;!
;;;!
(vector-length vector)‌‌ procedure

Returns the number of elements in vector as an exact integer object.
;;;!
;;;!
(vector-ref vector k) ‌‌procedure

K must be a valid index of vector. The vector-ref procedure returns the contents of element

k of vector.

(vector-ref '#(1 1 2 3 5 8 13 21) 5)
‌‌⇒  8
;;;!
;;;!
(vector-set! vector k obj)‌‌ procedure

K must be a valid index of vector. The vector-set! procedure stores obj in element

k of vector, and returns unspecified values.

Passing an immutable vector to vector-set! should cause an exception with condition type &assertion to be raised.

(let ((vec (vector 0 '(2 2 2 2) "Anna")))

  (vector-set! vec 1 '("Sue" "Sue"))

  vec)
‌‌⇒  #(0 ("Sue" "Sue") "Anna")

(vector-set! '#(0 1 2) 1 "doe")
‌‌⇒  unspecified

             constant vector

             should raise  &assertion exception
;;;!
;;;!
(vector->list vector)‌‌ procedure
(list->vector list)‌‌ procedure

The vector->list procedure returns a newly allocated list of the objects contained in the elements of vector. The list->vector procedure returns a newly created vector initialized to the elements of the list list.

(vector->list '#(dah dah didah))
‌‌⇒  (dah dah didah)

(list->vector '(dididit dah))
‌‌⇒  #(dididit dah)

(vector-fill! vector fill)‌‌procedure

Stores fill in every element of vector and returns unspecified values.
;;;!
;;;!
(vector-map proc vector1 vector2 ...) ‌‌procedure

The vectors must all have the same length. Proc should accept as many arguments as there are vectors and return a single value.

The vector-map procedure applies proc element-wise to the elements of the vectors and returns a vector of the results, in order. Proc is always called in the same dynamic environment as vector-map itself. The order in which proc is applied to the elements of the vectors is unspecified. If multiple returns occur from vector-map, the return values returned by earlier returns are not mutated.

Analogous to map.

Implementation responsibilities: The implementation must check the restrictions on proc to the extent performed by applying it as described. An implementation may check whether proc is an appropriate argument before applying it.
;;;!
;;;!
(vector-for-each proc vector1 vector2 ...)‌‌ procedure

The vectors must all have the same length. Proc should accept as many arguments as there are vectors. The vector-for-each procedure applies proc element-wise to the elements of the vectors for its side effects, in order from the first elements to the last. Proc is always called in the same dynamic environment as vector-for-each itself. The return values of vector-for-each are unspecified.

Analogous to for-each.

Implementation responsibilities: The implementation must check the restrictions on proc to the extent performed by applying it as described. An implementation may check whether proc is an appropriate argument before applying it.
;;;!
11.14  Errors and violations
;;;!
(error who message irritant1 ...) ‌‌procedure
(assertion-violation who message irritant1 ...) ‌‌procedure

Who must be a string or a symbol or #f. Message must be a string. The irritants are arbitrary objects.

These procedures raise an exception. The error procedure should be called when an error has occurred, typically caused by something that has gone wrong in the interaction of the program with the external world or the user. The assertion-violation procedure should be called when an invalid call to a procedure was made, either passing an invalid number of arguments, or passing an argument that it is not specified to handle.

The who argument should describe the procedure or operation that detected the exception. The message argument should describe the exceptional situation. The irritants should be the arguments to the operation that detected the operation.

The condition object provided with the exception (see library chapter on “Exceptions and conditions”) has the following condition types:

    If who is not #f, the condition has condition type &who, with who as the value of its field. In that case, who should be the name of the procedure or entity that detected the exception. If it is #f, the condition does not have condition type &who.

    The condition has condition type &message, with message as the value of its field.

    The condition has condition type &irritants, and its field has as its value a list of the irritants.

Moreover, the condition created by error has condition type &error, and the condition created by assertion-violation has condition type &assertion.

(define (fac n)

  (if (not (integer-valued? n))

      (assertion-violation

       'fac "non-integral argument" n))

  (if (negative? n)

      (assertion-violation

       'fac "negative argument" n))

  (letrec

    ((loop (lambda (n r)

             (if (zero? n)

                 r

                 (loop (- n 1) (* r n))))))

      (loop n 1)))

(fac 5) ‌⇒ 120

(fac 4.5)   &assertion exception

(fac -3)   &assertion exception

(assert <expression>)‌‌syntax

An assert form is evaluated by evaluating <expression>. If <expression> returns a true value, that value is returned from the assert expression. If <expression> returns #f, an exception with condition types &assertion and &message is raised. The message provided in the condition object is implementation-dependent.

    Note:‌ Implementations should exploit the fact that assert is syntax to provide as much information as possible about the location of the assertion failure.
;;;!
11.15  Control features

This chapter describes various primitive procedures which control the flow of program execution in special ways.
;;;!
(apply proc arg1 ... rest-args)‌‌ procedure

Rest-args must be a list. Proc should accept n arguments, where n is number of args plus the length of rest-args. The apply procedure calls proc with the elements of the list (append (list arg1 ...) rest-args) as the actual arguments.

If a call to apply occurs in a tail context, the call to proc is also in a tail context.

(apply + (list 3 4))              ‌⇒  7

(define compose

  (lambda (f g)

    (lambda args

      (f (apply g args)))))

((compose sqrt *) 12 75)              ‌⇒  30
;;;!
;;;!
(call-with-current-continuation proc) ‌‌procedure
(call/cc proc) ‌‌procedure

Proc should accept one argument. The procedure call-with-current-continuation (which is the same as the procedure call/cc) packages the current continuation as an “escape procedure”and passes it as an argument to proc. The escape procedure is a Scheme procedure that, if it is later called, will abandon whatever continuation is in effect at that later time and will instead reinstate the continuation that was in effect when the escape procedure was created. Calling the escape procedure may cause the invocation of before and after procedures installed using dynamic-wind.

The escape procedure accepts the same number of arguments as the continuation of the original call to call-with-current-continuation.

The escape procedure that is passed to proc has unlimited extent just like any other procedure in Scheme. It may be stored in variables or data structures and may be called as many times as desired.

If a call to call-with-current-continuation occurs in a tail context, the call to proc is also in a tail context.

The following examples show only some ways in which call-with-current-continuation is used. If all real uses were as simple as these examples, there would be no need for a procedure with the power of call-with-current-continuation.

(call-with-current-continuation

  (lambda (exit)

    (for-each (lambda (x)

                (if (negative? x)

                    (exit x)))

              '(54 0 37 -3 245 19))

    #t))                        ‌⇒  -3

(define list-length

  (lambda (obj)

    (call-with-current-continuation

      (lambda (return)

        (letrec ((r

                  (lambda (obj)

                    (cond ((null? obj) 0)

                          ((pair? obj)

                           (+ (r (cdr obj)) 1))

                          (else (return #f))))))

          (r obj))))))

(list-length '(1 2 3 4))            ‌⇒  4

(list-length '(a b . c))            ‌⇒  #f

(call-with-current-continuation procedure?)

                            ‌⇒  #t

    Note:‌ Calling an escape procedure reenters the dynamic extent of the call to call-with-current-continuation, and thus restores its dynamic environmentsee section 5.12.
;;;!
;;;!
(values obj ...) ‌‌procedure

Delivers all of its arguments to its continuation. The values procedure might be defined as follows:
(define (values . things)

  (call-with-current-continuation

    (lambda (cont) (apply cont things))))

The continuations of all non-final expressions within a sequence of expressions, such as in lambda, begin, let, let*, letrec, letrec*, let-values, let*-values, case, and cond forms, usually take an arbitrary number of values.

Except for these and the continuations created by call-with-values, let-values, and let*-values, continuations implicitly accepting a single value, such as the continuations of <operator> and <operand>s of procedure calls or the <test> expressions in conditionals, take exactly one value. The effect of passing an inappropriate number of values to such a continuation is undefined.
;;;!
;;;!
(call-with-values producer consumer) ‌‌procedure

Producer must be a procedure and should accept zero arguments. Consumer must be a procedure and should accept as many values as producer returns. The call-with-values procedure calls producer with no arguments and a continuation that, when passed some values, calls the consumer procedure with those values as arguments. The continuation for the call to consumer is the continuation of the call to call-with-values.

(call-with-values (lambda () (values 4 5))

                  (lambda (a b) b))

                                                   ‌⇒  5

(call-with-values * -)                             ‌⇒  -1

If a call to call-with-values occurs in a tail context, the call to consumer is also in a tail context.

Implementation responsibilities: After producer returns, the implementation must check that consumer accepts as many values as consumer has returned.

(dynamic-wind before thunk after)‌‌procedure

Before, thunk, and after must be procedures, and each should accept zero arguments. These procedures may return any number of values. The dynamic-wind procedure calls thunk without arguments, returning the results of this call. Moreover, dynamic-wind calls before without arguments whenever the dynamic extent of the call to thunk is entered, and after without arguments whenever the dynamic extent of the call to thunk is exited. Thus, in the absence of calls to escape procedures created by call-with-current-continuation, dynamic-wind calls before, thunk, and after, in that order.

While the calls to before and after are not considered to be within the dynamic extent of the call to thunk, calls to the before and after procedures of any other calls to dynamic-wind that occur within the dynamic extent of the call to thunk are considered to be within the dynamic extent of the call to thunk.

More precisely, an escape procedure transfers control out of the dynamic extent of a set of zero or more active dynamic-wind calls x ... and transfer control into the dynamic extent of a set of zero or more active dynamic-wind calls y .... It leaves the dynamic extent of the most recent x and calls without arguments the corresponding after procedure. If the after procedure returns, the escape procedure proceeds to the next most recent x, and so on. Once each x has been handled in this manner, the escape procedure calls without arguments the before procedure corresponding to the least recent y. If the before procedure returns, the escape procedure reenters the dynamic extent of the least recent y and proceeds with the next least recent y, and so on. Once each y has been handled in this manner, control is transferred to the continuation packaged in the escape procedure.

Implementation responsibilities: The implementation must check the restrictions on thunk and after only if they are actually called.

(let ((path '())

      (c #f))

  (let ((add (lambda (s)

               (set! path (cons s path)))))

    (dynamic-wind

      (lambda () (add 'connect))

      (lambda ()

        (add (call-with-current-continuation

               (lambda (c0)

                 (set! c c0)

                 'talk1))))

      (lambda () (add 'disconnect)))

    (if (< (length path) 4)

        (c 'talk2)

        (reverse path))))


‌‌⇒ (connect talk1 disconnect

               connect talk2 disconnect)

(let ((n 0))

  (call-with-current-continuation

    (lambda (k)

      (dynamic-wind

        (lambda ()

          (set! n (+ n 1))

          (k))

        (lambda ()

          (set! n (+ n 2)))

        (lambda ()

          (set! n (+ n 4))))))

  n) ‌⇒ 1

(let ((n 0))

  (call-with-current-continuation

    (lambda (k)

      (dynamic-wind

        values

        (lambda ()

          (dynamic-wind

            values

            (lambda ()

              (set! n (+ n 1))

              (k))

            (lambda ()

              (set! n (+ n 2))

              (k))))

        (lambda ()

          (set! n (+ n 4))))))

  n) ‌⇒ 7

    Note:‌ Entering a dynamic extent restores its dynamic environmentsee section 5.12.
;;;!
11.16  Iteration

(let <variable> <bindings> <body>)‌‌syntax

“Named let” is a variant on the syntax of let that provides a general looping construct and may also be used to express recursion. It has the same syntax and semantics as ordinary let except that <variable> is bound within <body> to a procedure whose parameters are the bound variables and whose body is <body>. Thus the execution of <body> may be repeated by invoking the procedure named by <variable>.

(let loop ((numbers '(3 -2 1 6 -5))

           (nonneg '())

           (neg '()))

  (cond ((null? numbers) (list nonneg neg))

        ((>= (car numbers) 0)

         (loop (cdr numbers)

               (cons (car numbers) nonneg)

               neg))

        ((< (car numbers) 0)

         (loop (cdr numbers)

               nonneg

               (cons (car numbers) neg)))))
‌‌⇒  ((6 1 3) (-5 -2))

11.17  Quasiquotation

(quasiquote <qq template>)‌‌syntax
unquote‌‌auxiliary syntax
unquote-splicing‌‌auxiliary syntax

“Backquote” or “quasiquote”expressions are useful for constructing a list or vector structure when some but not all of the desired structure is known in advance.

Syntax: <Qq template> should be as specified by the grammar at the end of this entry.

Semantics: If no unquote or unquote-splicing forms appear within the <qq template>, the result of evaluating (quasiquote <qq template>) is equivalent to the result of evaluating (quote <qq template>).

If an (unquote <expression> ...) form appears inside a <qq template>, however, the <expression>s are evaluated (“unquoted”) and their results are inserted into the structure instead of the unquote form.

If an (unquote-splicing <expression> ...) form appears inside a <qq template>, then the <expression>s must evaluate to liststhe opening and closing parentheses of the lists are then “stripped away” and the elements of the lists are inserted in place of the unquote-splicing form.

Any unquote-splicing or multi-operand unquote form must appear only within a list or vector <qq template>.

As noted in section 4.3.5, (quasiquote <qq template>) may be abbreviated `<qq template>, (unquote <expression>) may be abbreviated ,<expression>, and (unquote-splicing <expression>) may be abbreviated ,@<expression>.

`(list ,(+ 1 2) 4)  ‌⇒  (list 3 4)

(let ((name 'a)) `(list ,name ',name))
‌‌⇒  (list a (quote a))

`(a ,(+ 1 2) ,@(map abs '(4 -5 6)) b)
‌‌⇒  (a 3 4 5 6 b)

`(( foo ,(- 10 3)) ,@(cdr '(c)) . ,(car '(cons)))
‌‌⇒  ((foo 7) . cons)

`#(10 5 ,(sqrt 4) ,@(map sqrt '(16 9)) 8)
‌‌⇒  #(10 5 2 4 3 8)

(let ((name 'foo))

  `((unquote name name name)))
‌‌⇒ (foo foo foo)

(let ((name '(foo)))

  `((unquote-splicing name name name)))
‌‌⇒ (foo foo foo)

(let ((q '((append x y) (sqrt 9))))

  ``(foo ,,@q))
‌‌⇒ `(foo

                 (unquote (append x y) (sqrt 9)))

(let ((x '(2 3))

      (y '(4 5)))

  `(foo (unquote (append x y) (sqrt 9))))
‌‌⇒ (foo (2 3 4 5) 3)

Quasiquote forms may be nested. Substitutions are made only for unquoted components appearing at the same nesting level as the outermost quasiquote. The nesting level increases by one inside each successive quasiquotation, and decreases by one inside each unquotation.

`(a `(b ,(+ 1 2) ,(foo ,(+ 1 3) d) e) f)
‌‌⇒  (a `(b ,(+ 1 2) ,(foo 4 d) e) f)

(let ((name1 'x)

      (name2 'y))

  `(a `(b ,,name1 ,',name2 d) e))
‌‌⇒  (a `(b ,x ,'y d) e)

A quasiquote expression may return either fresh, mutable objects or literal structure for any structure that is constructed at run time during the evaluation of the expression. Portions that do not need to be rebuilt are always literal. Thus,
(let ((a 3)) `((1 2) ,a ,4 ,'five 6))

may be equivalent to either of the following expressions:
'((1 2) 3 4 five 6)

(let ((a 3))

  (cons '(1 2)

        (cons a (cons 4 (cons 'five '(6))))))

However, it is not equivalent to this expression:
(let ((a 3)) (list (list 1 2) a 4 'five 6))

It is a syntax violation if any of the identifiers quasiquote, unquote, or unquote-splicing appear in positions within a <qq template> otherwise than as described above.

The following grammar for quasiquote expressions is not context-free. It is presented as a recipe for generating an infinite number of production rules. Imagine a copy of the following rules for D = 1, 2, 3, .... D keeps track of the nesting depth.

<qq template> → <qq template 1>

<qq template 0> → <expression>

<quasiquotation D> → (quasiquote <qq template D>)

<qq template D> → <lexeme datum>

‌ ∣ <list qq template D>

    ∣ <vector qq template D>

    ∣ <unquotation D>

<list qq template D> → (<qq template or splice D>*)

    ∣ (<qq template or splice D>+ . <qq template D>)

    ∣ <quasiquotation D + 1>

<vector qq template D> → #(<qq template or splice D>*)

<unquotation D> → (unquote <qq template D−1>)

<qq template or splice D> → <qq template D>

    ∣ <splicing unquotation D>

<splicing unquotation D> →

       (unquote-splicing <qq template D−1>*)

    ∣ (unquote <qq template D−1>*)

In <quasiquotation>s, a <list qq template D> can sometimes be confused with either an <unquotation D> or a <splicing unquotation D>. The interpretation as an <unquotation> or <splicing unquotation D> takes precedence.

11.18  Binding constructs for syntactic keywords

The let-syntax and letrec-syntax forms bind keywords. Like a begin form, a let-syntax or letrec-syntax form may appear in a definition context, in which case it is treated as a definition, and the forms in the body must also be definitions. A let-syntax or letrec-syntax form may also appear in an expression context, in which case the forms within their bodies must be expressions.

(let-syntax <bindings> <form> ...)‌‌syntax

Syntax: <Bindings> must have the form
((<keyword> <expression>) ...)

Each <keyword> is an identifier, and each <expression> is an expression that evaluates, at macro-expansion time, to a transformer. Transformers may be created by syntax-rules or identifier-syntax (see section 11.19) or by one of the other mechanisms described in library chapter on “syntax-case”. It is a syntax violation for <keyword> to appear more than once in the list of keywords being bound.

Semantics: The <form>s are expanded in the syntactic environment obtained by extending the syntactic environment of the let-syntax form with macros whose keywords are the <keyword>s, bound to the specified transformers. Each binding of a <keyword> has the <form>s as its region.

The <form>s of a let-syntax form are treated, whether in definition or expression context, as if wrapped in an implicit beginsee section 11.4.7. Thus definitions in the result of expanding the <form>s have the same region as any definition appearing in place of the let-syntax form would have.

Implementation responsibilities: The implementation should detect if the value of <expression> cannot possibly be a transformer.

(let-syntax ((when (syntax-rules ()

                     ((when test stmt1 stmt2 ...)

                      (if test

                          (begin stmt1

                                 stmt2 ...))))))

  (let ((if #t))

    (when if (set! if 'now))

    if))                           ‌⇒  now

(let ((x 'outer))

  (let-syntax ((m (syntax-rules () ((m) x))))

    (let ((x 'inner))

      (m))))                       ‌⇒  outer

(let ()

  (let-syntax

    ((def (syntax-rules ()

            ((def stuff ...) (define stuff ...)))))

    (def foo 42))

  foo) ‌⇒ 42

(let ()

  (let-syntax ())

  5) ‌⇒ 5

(letrec-syntax <bindings> <form> ...)‌‌syntax

Syntax: Same as for let-syntax.

Semantics: The <form>s are expanded in the syntactic environment obtained by extending the syntactic environment of the letrec-syntax form with macros whose keywords are the <keyword>s, bound to the specified transformers. Each binding of a <keyword> has the <bindings> as well as the <form>s within its region, so the transformers can transcribe forms into uses of the macros introduced by the letrec-syntax form.

The <form>s of a letrec-syntax form are treated, whether in definition or expression context, as if wrapped in an implicit beginsee section 11.4.7. Thus definitions in the result of expanding the <form>s have the same region as any definition appearing in place of the letrec-syntax form would have.

Implementation responsibilities: The implementation should detect if the value of <expression> cannot possibly be a transformer.

(letrec-syntax

  ((my-or (syntax-rules ()

            ((my-or) #f)

            ((my-or e) e)

            ((my-or e1 e2 ...)

             (let ((temp e1))

               (if temp

                   temp

                   (my-or e2 ...)))))))

  (let ((x #f)

        (y 7)

        (temp 8)

        (let odd?)

        (if even?))

    (my-or x

           (let temp)

           (if y)

           y)))        ‌⇒  7

The following example highlights how let-syntax and letrec-syntax differ.

(let ((f (lambda (x) (+ x 1))))

  (let-syntax ((f (syntax-rules ()

                    ((f x) x)))

               (g (syntax-rules ()

                    ((g x) (f x)))))

    (list (f 1) (g 1))))
‌‌⇒ (1 2)

(let ((f (lambda (x) (+ x 1))))

  (letrec-syntax ((f (syntax-rules ()

                       ((f x) x)))

                  (g (syntax-rules ()

                       ((g x) (f x)))))

    (list (f 1) (g 1))))
‌‌⇒ (1 1)

The two expressions are identical except that the let-syntax form in the first expression is a letrec-syntax form in the second. In the first expression, the f occurring in g refers to the let-bound variable f, whereas in the second it refers to the keyword f whose binding is established by the letrec-syntax form.

11.19  Macro transformers

(syntax-rules (<literal> ...) <syntax rule> ...)‌‌syntax (expand)
_‌‌auxiliary syntax (expand)
...‌‌auxiliary syntax (expand)

Syntax: Each <literal> must be an identifier. Each <syntax rule> must have the following form:

(<srpattern> <template>)

An <srpattern> is a restricted form of <pattern>, namely, a nonempty <pattern> in one of four parenthesized forms below whose first subform is an identifier or an underscore _. A <pattern> is an identifier, constant, or one of the following.

(<pattern> ...)

(<pattern> <pattern> ... . <pattern>)

(<pattern> ... <pattern> <ellipsis> <pattern> ...)

(<pattern> ... <pattern> <ellipsis> <pattern> ... . <pattern>)

#(<pattern> ...)

#(<pattern> ... <pattern> <ellipsis> <pattern> ...)

An <ellipsis> is the identifier “...” (three periods).

A <template> is a pattern variable, an identifier that is not a pattern variable, a pattern datum, or one of the following.

(<subtemplate> ...)

(<subtemplate> ... . <template>)

#(<subtemplate> ...)

A <subtemplate> is a <template> followed by zero or more ellipses.

Semantics: An instance of syntax-rules evaluates, at macro-expansion time, to a new macro transformer by specifying a sequence of hygienic rewrite rules. A use of a macro whose keyword is associated with a transformer specified by syntax-rules is matched against the patterns contained in the <syntax rule>s, beginning with the leftmost <syntax rule>. When a match is found, the macro use is transcribed hygienically according to the template. It is a syntax violation when no match is found.

An identifier appearing within a <pattern> may be an underscore ( _ ), a literal identifier listed in the list of literals (<literal> ...), or an ellipsis ( ... ). All other identifiers appearing within a <pattern> are pattern variables. It is a syntax violation if an ellipsis or underscore appears in (<literal> ...).

While the first subform of <srpattern> may be an identifier, the identifier is not involved in the matching and is not considered a pattern variable or literal identifier.

Pattern variables match arbitrary input subforms and are used to refer to elements of the input. It is a syntax violation if the same pattern variable appears more than once in a <pattern>.

Underscores also match arbitrary input subforms but are not pattern variables and so cannot be used to refer to those elements. Multiple underscores may appear in a <pattern>.

A literal identifier matches an input subform if and only if the input subform is an identifier and either both its occurrence in the input expression and its occurrence in the list of literals have the same lexical binding, or the two identifiers have the same name and both have no lexical binding.

A subpattern followed by an ellipsis can match zero or more elements of the input.

More formally, an input form F matches a pattern P if and only if one of the following holds:

    P is an underscore ( _ ).

    P is a pattern variable.

    P is a literal identifier and F is an identifier such that both P and F would refer to the same binding if both were to appear in the output of the macro outside of any bindings inserted into the output of the macro. (If neither of two like-named identifiers refers to any binding, i.e., both are undefined, they are considered to refer to the same binding.)

    P is of the form (P1 ... Pn) and F is a list of n elements that match P1 through Pn.

    P is of the form (P1 ... Pn . Px) and F is a list or improper list of n or more elements whose first n elements match P1 through Pn and whose nth cdr matches Px.

    P is of the form (P1 ... Pk Pe <ellipsis> Pm+1 ... Pn), where <ellipsis> is the identifier ... and F is a list of n elements whose first k elements match P1 through Pk, whose next m−k elements each match Pe, and whose remaining n−m elements match Pm+1 through Pn.

    P is of the form (P1 ... Pk Pe <ellipsis> Pm+1 ... Pn . Px), where <ellipsis> is the identifier ... and F is a list or improper list of n elements whose first k elements match P1 through Pk, whose next m−k elements each match Pe, whose next n−m elements match Pm+1 through Pn, and whose nth and final cdr matches Px.

    P is of the form #(P1 ... Pn) and F is a vector of n elements that match P1 through Pn.

    P is of the form #(P1 ... Pk Pe <ellipsis> Pm+1 ... Pn), where <ellipsis> is the identifier ... and F is a vector of n or more elements whose first k elements match P1 through Pk, whose next m−k elements each match Pe, and whose remaining n−m elements match Pm+1 through Pn.

    P is a pattern datum (any nonlist, nonvector, nonsymbol datum) and F is equal to P in the sense of the equal? procedure.

When a macro use is transcribed according to the template of the matching <syntax rule>, pattern variables that occur in the template are replaced by the subforms they match in the input.

Pattern data and identifiers that are not pattern variables or ellipses are copied into the output. A subtemplate followed by an ellipsis expands into zero or more occurrences of the subtemplate. Pattern variables that occur in subpatterns followed by one or more ellipses may occur only in subtemplates that are followed by (at least) as many ellipses. These pattern variables are replaced in the output by the input subforms to which they are bound, distributed as specified. If a pattern variable is followed by more ellipses in the subtemplate than in the associated subpattern, the input form is replicated as necessary. The subtemplate must contain at least one pattern variable from a subpattern followed by an ellipsis, and for at least one such pattern variable, the subtemplate must be followed by exactly as many ellipses as the subpattern in which the pattern variable appears. (Otherwise, the expander would not be able to determine how many times the subform should be repeated in the output.) It is a syntax violation if the constraints of this paragraph are not met.

A template of the form (<ellipsis> <template>) is identical to <template>, except that ellipses within the template have no special meaning. That is, any ellipses contained within <template> are treated as ordinary identifiers. In particular, the template (... ...) produces a single ellipsis, .... This allows syntactic abstractions to expand into forms containing ellipses.

(define-syntax be-like-begin

  (syntax-rules ()

    ((be-like-begin name)

     (define-syntax name

       (syntax-rules ()

         ((name expr (... ...))

          (begin expr (... ...))))))))

(be-like-begin sequence)

(sequence 1 2 3 4) ‌⇒ 4

As an example for hygienic use of auxiliary identifier, if let and cond are defined as in section 11.16 and appendix B then they are hygienic (as required) and the following is not an error.

(let ((=> #f))

  (cond (#t => 'ok)))           ‌⇒ ok

The macro transformer for cond recognizes => as a local variable, and hence an expression, and not as the identifier =>, which the macro transformer treats as a syntactic keyword. Thus the example expands into

(let ((=> #f))

  (if #t (begin => 'ok)))

instead of

(let ((=> #f))

  (let ((temp #t))

    (if temp ('ok temp))))

which would result in an assertion violation.

(identifier-syntax <template>)‌‌syntax (expand)
(identifier-syntax‌‌syntax (expand)

(<id1> <template1>)
((set! <id2> <pattern>)
<template2>))
set!‌‌auxiliary syntax ( expand)

Syntax: The <id>s must be identifiers. The <template>s must be as for syntax-rules.

Semantics: When a keyword is bound to a transformer produced by the first form of identifier-syntax, references to the keyword within the scope of the binding are replaced by <template>.

(define p (cons 4 5))

(define-syntax p.car (identifier-syntax (car p)))

p.car ‌⇒ 4

(set! p.car 15) ‌⇒  &syntax exception

The second, more general, form of identifier-syntax permits the transformer to determine what happens when set! is used. In this case, uses of the identifier by itself are replaced by <template1>, and uses of set! with the identifier are replaced by <template2>.

(define p (cons 4 5))

(define-syntax p.car

  (identifier-syntax

    (_ (car p))

    ((set! _ e) (set-car! p e))))

(set! p.car 15)

p.car           ‌⇒ 15

p               ‌⇒ (15 5)

11.20  Tail calls and tail contexts

A tail callis a procedure call that occurs in a tail context. Tail contexts are defined inductively. Note that a tail context is always determined with respect to a particular lambda expression.

    The last expression within the body of a lambda expression, shown as <tail expression> below, occurs in a tail context.
    (lāmbda <formals>

      <definition>*

      <expression>* <tail expression>)

    If one of the following expressions is in a tail context, then the subexpressions shown as <tail expression> are in a tail context. These were derived from specifications of the syntax of the forms described in this chapter by replacing some occurrences of <expression> with <tail expression>. Only those rules that contain tail contexts are shown here.
    (if <expression> <tail expression> <tail expression>)

    (if <expression> <tail expression>)

    (cond <cond clause>+)

    (cond <cond clause>* (else <tail sequence>))

    (cāse <expression>

      <case clause>+)

    (cāse <expression>

      <case clause>*

      (else <tail sequence>))

    (and <expression>* <tail expression>)

    (or <expression>* <tail expression>)

    (let <bindings> <tail body>)

    (let <variable> <bindings> <tail body>)

    (let* <bindings> <tail body>)

    (letrec* <bindings> <tail body>)

    (letrec <bindings> <tail body>)

    (let-values <mv-bindings> <tail body>)

    (let*-values <mv-bindings> <tail body>)

    (let-syntax <bindings> <tail body>)

    (letrec-syntax <bindings> <tail body>)

    (begin <tail sequence>)

    A <cond clause> is
    (<test> <tail sequence>),

    a <case clause> is
    ((<datum>*) <tail sequence>),

    a <tail body> is
    <definition>* <tail sequence>,

    and a <tail sequence> is
    <expression>* <tail expression>.

    If a cond expression is in a tail context, and has a clause of the form (<expression1> => <expression2>) then the (implied) call to the procedure that results from the evaluation of <expression2> is in a tail context. <Expression2> itself is not in a tail context.

Certain built-in procedures must also perform tail calls. The first argument passed to apply and to call-with-current-continuation, and the second argument passed to call-with-values, must be called via a tail call.

In the following example the only tail call is the call to f. None of the calls to g or h are tail calls. The reference to x is in a tail context, but it is not a call and thus is not a tail call.
(lambda ()

  (if (g)

      (let ((x (h)))

        x)

      (and (g) (f))))

    Note:‌ Implementations may recognize that some non-tail calls, such as the call to h above, can be evaluated as though they were tail calls. In the example above, the let expression could be compiled as a tail call to h. (The possibility of h returning an unexpected number of values can be ignored, because in that case the effect of the let is explicitly unspecified and implementation-dependent.)

[Go to first, previous, next page  contents  index]
