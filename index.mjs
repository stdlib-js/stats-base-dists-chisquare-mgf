// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function r(t,n){return s(t)||s(n)||n<0||t>=.5?NaN:e(1-2*t,-n/2)}function i(t){return s(t)||t<0?n(NaN):function(n){if(s(n)||n>=.5)return NaN;return e(1-2*n,-t/2)}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
