// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Math.floor;function p(r){return y(r)===r}function v(r){return p(r/2)}function b(r){return v(r>0?r-1:r+1)}var w=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;function s(r){return r===w||r===d}var A=Math.sqrt;function _(r){return Math.abs(r)}var m,h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),U=Object.prototype.toString,g=Object.prototype.hasOwnProperty,j="function"==typeof Symbol?Symbol.toStringTag:"",N=h&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return U.call(r);t=r[j],u=j,n=null!=(o=r)&&g.call(o,u);try{r[j]=void 0}catch(n){return U.call(r)}return e=U.call(r),n?r[j]=t:delete r[j],e}:function(r){return U.call(r)},I="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,S="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=m,T="function"==typeof Float64Array,H="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(T&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,L=E,V="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,x="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,256,257]),t=n,r=(V&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var M,k=P,Y="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:M,uint8:k};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new L(1),X=new F(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n){return R[0]=n,r[0]=X[Z],r[1]=X[$],r}function nr(r,n){return 1===arguments.length?rr([0,0],r):rr(r,n)}var tr=!0===K?0:1,er=new L(1),or=new F(er.buffer);function ur(r,n){return er[0]=r,or[tr]=n>>>0,er[0]}function ir(r){return 0|r}var fr,ar,cr=!0===K?1:0,lr=new L(1),yr=new F(lr.buffer);function pr(r){return lr[0]=r,yr[cr]}!0===K?(fr=1,ar=0):(fr=0,ar=1);var vr={HIGH:fr,LOW:ar},br=new L(1),wr=new F(br.buffer),dr=vr.HIGH,sr=vr.LOW;function Ar(r,n){return wr[dr]=r,wr[sr]=n,br[0]}var _r=[0,0];function mr(r,n){var t,e;return nr(_r,r),t=_r[0],t&=2147483647,e=pr(n),Ar(t|=e&=2147483648,_r[1])}var hr=!0===K?1:0,Ur=new L(1),gr=new F(Ur.buffer);function jr(r,n){return Ur[0]=r,gr[hr]=n>>>0,Ur[0]}var Nr=1023,Ir=1048576,Or=[1,1.5],Sr=[0,.5849624872207642],Er=[0,1.350039202129749e-8];function Fr(r,n,t,e){return l(r)||s(r)?(n[e]=r,n[e+t]=0,n):0!==r&&_(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Fr(r,[0,0],1,0)}),"assign",Fr);var Tr=[0,0],Hr=[0,0];function Gr(r,n){var t,e;return 0===n||0===r||l(r)||s(r)?r:(Fr(r,Tr,1,0),n+=Tr[1],n+=function(r){var n=pr(r);return(n=(2146435072&n)>>>20)-Nr|0}(r=Tr[0]),n<-1074?mr(0,r):n>1023?r<0?d:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr(Hr,r),t=Hr[0],t&=2148532223,e*Ar(t|=n+Nr<<20,Hr[1])))}var Pr=2147483647,Lr=1048575,Vr=1048576,Wr=2147483647,xr=1083179008,Mr=1e300,kr=1e-300,Yr=[0,0],qr=[0,0];function Cr(r,n){var t,e,o,u,i,f,a,c,y,v,m,h,U,g;if(l(r)||l(n))return NaN;if(nr(Yr,n),i=Yr[0],0===Yr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return A(r);if(-.5===n)return 1/A(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(s(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:_(r)<1==(n===w)?0:w}(r,n)}if(nr(Yr,r),u=Yr[0],0===Yr[1]){if(0===u)return function(r,n){return n===d?w:n===w?0:n>0?b(n)?r:0:b(n)?mr(w,r):w}(r,n);if(1===r)return 1;if(-1===r&&b(n))return-1;if(s(r))return r===d?Cr(-0,-n):n<0?0:w}if(r<0&&!1===p(n))return(r-r)/(r-r);if(o=_(r),t=u&Wr|0,e=i&Wr|0,a=i>>>31|0,f=(f=u>>>31|0)&&b(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&pr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Mr*Mr:f*kr*kr;if(t>1072693248)return 0===a?f*Mr*Mr:f*kr*kr;m=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ur(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(qr,o)}else m=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,b,w,d,s,A,_,m,h,U,g;return m=0,t<Ir&&(m-=53,t=pr(n*=9007199254740992)),m+=(t>>20)-Nr|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=Ir),i=ur(o=(A=(n=jr(n,t))-(c=Or[U]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=jr(0,e+=U<<18),s=(u=o*o)*u*(0===(g=u)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=ur(a=3+(u=i*i)+(s+=(f=_*(A-i*a-i*(n-(a-c))))*(i+o)),0),w=(v=-7.028461650952758e-9*(y=ur(y=(A=i*a)+(_=f*a+(s-(a-3-u))*o),0))+.9617966939259756*(_-(y-A))+Er[U])-((b=ur(b=(p=.9617967009544373*y)+v+(l=Sr[U])+(d=m),0))-d-l-p),r[0]=b,r[1]=w,r}(qr,o,t);if(v=(n-(c=ur(n,0)))*m[0]+n*m[1],y=c*m[0],nr(Yr,h=v+y),U=ir(Yr[0]),g=ir(Yr[1]),U>=xr){if(0!=(U-xr|g))return f*Mr*Mr;if(v+8008566259537294e-32>h-y)return f*Mr*Mr}else if((U&Wr)>=1083231232){if(0!=(U-3230714880|g))return f*kr*kr;if(v<=h-y)return f*kr*kr}return h=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&Pr|0)>>20)-Nr|0,c=0,l>1071644672&&(o=jr(0,((c=r+(Vr>>y+1)>>>0)&~(Lr>>(y=((c&Pr)>>20)-Nr|0)))>>>0),c=(c&Lr|Vr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=ir(r=pr(a=1-((a=(u=.6931471824645996*(o=ur(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Gr(a,c):jr(a,r)}(U,y,v),f*h}function zr(r,n){return l(r)||l(n)||n<0||r>=.5?NaN:Cr(1-2*r,-n/2)}return c(zr,"factory",(function(r){return l(r)||r<0?(n=NaN,function(){return n}):function(n){return l(n)||n>=.5?NaN:Cr(1-2*n,-r/2)};var n})),zr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=n();
//# sourceMappingURL=browser.js.map
