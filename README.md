<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Moment-Generating Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Chi-squared][chisquare-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [chi-squared][chisquare-distribution] random variable is

<!-- <equation class="equation" label="eq:chisquare_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \left( 1 - 2t \right )^{-k/2} \text{ for } t < \tfrac{1}{2}" alt="Moment-generating function (MGF) for a chi-squared distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \left( 1 - 2t \right )^{-k/2} \text{ for } t &lt; \tfrac{1}{2}" data-equation="eq:chisquare_mgf">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/chisquare/mgf/docs/img/equation_chisquare_mgf.svg" alt="Moment-generating function (MGF) for a chi-squared distribution.">
    <br>
</div>

<!-- </equation> -->

where `k` is the degrees of freedom.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-chisquare-mgf
```

</section>

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats-base-dists-chisquare-mgf' );
```

#### mgf( t, k )

Evaluates the [moment-generating function][mgf] (MGF) for a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var y = mgf( 0.4, 2 );
// returns ~5.0

y = mgf( -1.0, 5.0 );
// returns ~0.0642

y = mgf( 0.0, 10.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 1.0 );
// returns NaN

y = mgf( 0.0, NaN );
// returns NaN
```

If provided `t >= 0.5`, the function returns `NaN`.

```javascript
var y = mgf( 0.8, 1.0 );
// returns NaN
```

If provided `k < 0`, the function returns `NaN`.

```javascript
var y = mgf( 2.0, -2.0 );
// returns NaN
```

#### mgf.factory( k )

Returns a function for evaluating the [moment-generating function][mgf] (MGF) for a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var mymgf = mgf.factory( 1.0 );

var y = mymgf( 0.2 );
// returns ~1.291

y = mymgf( 0.4 );
// returns ~2.236
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var mgf = require( '@stdlib/stats-base-dists-chisquare-mgf' );

var t;
var k;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu() * 0.5;
    k = randu() * 10.0;
    y = mgf( t, k );
    console.log( 'x: %d, k: %d, M_X(t;k): %d', t.toFixed( 4 ), k.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-chisquare-mgf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-chisquare-mgf

[test-image]: https://github.com/stdlib-js/stats-base-dists-chisquare-mgf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-chisquare-mgf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-chisquare-mgf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-chisquare-mgf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-chisquare-mgf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-chisquare-mgf/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-chisquare-mgf/main/LICENSE

[chisquare-distribution]: https://en.wikipedia.org/wiki/Chi-squared_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
