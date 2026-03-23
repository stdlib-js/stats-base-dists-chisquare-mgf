"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=i(function(w,u){
var t=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-pow/dist');function v(e,r){return t(e)||t(r)||r<0||e>=.5?NaN:q(1-2*e,-r/2)}u.exports=v
});var c=i(function(d,s){
var N=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-pow/dist');function y(e){if(o(e)||e<0)return N(NaN);return r;function r(n){return o(n)||n>=.5?NaN:p(1-2*n,-e/2)}}s.exports=y
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=a(),x=c();m(f,"factory",x);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
