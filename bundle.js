// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r},y=n()?c:l;var v=function(r,n,t){y(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},b=Math.floor;var w=function(r){return b(r)===r},d=w;var A=function(r){return d(r/2)};var s=function(r){return A(r>0?r-1:r+1)},_=Number.POSITIVE_INFINITY,m=Number.NEGATIVE_INFINITY,h=_,U=m;var g=function(r){return r===h||r===U},j=Math.sqrt;var N=function(r){return Math.abs(r)};var I=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var O=function(){return I&&"symbol"==typeof Symbol.toStringTag},S=Object.prototype.toString,E=S;var F=function(r){return E.call(r)},T=Object.prototype.hasOwnProperty;var H=function(r,n){return null!=r&&T.call(r,n)},G="function"==typeof Symbol?Symbol.toStringTag:"",P=H,L=G,V=S;var W=F,x=function(r){var n,t,e;if(null==r)return V.call(r);t=r[L],n=P(r,L);try{r[L]=void 0}catch(n){return V.call(r)}return e=V.call(r),n?r[L]=t:delete r[L],e},M=O()?x:W,k=M,Y="function"==typeof Uint32Array;var q="function"==typeof Uint32Array?Uint32Array:null,C=function(r){return Y&&r instanceof Uint32Array||"[object Uint32Array]"===k(r)},z=q;var B=function(){var r,n;if("function"!=typeof z)return!1;try{n=new z(n=[1,3.14,-3.14,4294967296,4294967297]),r=C(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var D="function"==typeof Uint32Array?Uint32Array:void 0,J=function(){throw new Error("not implemented")},K=B()?D:J,Q=M,R="function"==typeof Float64Array;var X="function"==typeof Float64Array?Float64Array:null,Z=function(r){return R&&r instanceof Float64Array||"[object Float64Array]"===Q(r)},$=X;var rr=function(){var r,n;if("function"!=typeof $)return!1;try{n=new $([1,3.14,-3.14,NaN]),r=Z(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var nr="function"==typeof Float64Array?Float64Array:void 0,tr=function(){throw new Error("not implemented")},er=rr()?nr:tr,or=M,ur="function"==typeof Uint8Array;var ir="function"==typeof Uint8Array?Uint8Array:null,fr=function(r){return ur&&r instanceof Uint8Array||"[object Uint8Array]"===or(r)},ar=ir;var cr=function(){var r,n;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,256,257]),r=fr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var lr="function"==typeof Uint8Array?Uint8Array:void 0,yr=function(){throw new Error("not implemented")},vr=cr()?lr:yr,pr=M,br="function"==typeof Uint16Array;var wr="function"==typeof Uint16Array?Uint16Array:null,dr=function(r){return br&&r instanceof Uint16Array||"[object Uint16Array]"===pr(r)},Ar=wr;var sr=function(){var r,n;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,65536,65537]),r=dr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var _r,mr="function"==typeof Uint16Array?Uint16Array:void 0,hr=function(){throw new Error("not implemented")},Ur={uint16:sr()?mr:hr,uint8:vr};(_r=new Ur.uint16(1))[0]=4660;var gr,jr,Nr=52===new Ur.uint8(_r.buffer)[0];!0===Nr?(gr=1,jr=0):(gr=0,jr=1);var Ir=K,Or={HIGH:gr,LOW:jr},Sr=new er(1),Er=new Ir(Sr.buffer),Fr=Or.HIGH,Tr=Or.LOW;var Hr=function(r,n){return Sr[0]=n,r[0]=Er[Fr],r[1]=Er[Tr],r};var Gr=function(r,n){return 1===arguments.length?Hr([0,0],r):Hr(r,n)},Pr=Gr,Lr=K,Vr=!0===Nr?0:1,Wr=new er(1),xr=new Lr(Wr.buffer);var Mr=function(r,n){return Wr[0]=r,xr[Vr]=n>>>0,Wr[0]},kr=Mr;var Yr=function(r){return 0|r},qr=K,Cr=!0===Nr?1:0,zr=new er(1),Br=new qr(zr.buffer);var Dr,Jr,Kr=function(r){return zr[0]=r,Br[Cr]};!0===Nr?(Dr=1,Jr=0):(Dr=0,Jr=1);var Qr=K,Rr={HIGH:Dr,LOW:Jr},Xr=new er(1),Zr=new Qr(Xr.buffer),$r=Rr.HIGH,rn=Rr.LOW;var nn=function(r,n){return Zr[$r]=r,Zr[rn]=n,Xr[0]},tn=nn,en=Pr,on=Kr,un=tn,fn=[0,0];var an=function(r,n){var t,e;return en(fn,r),t=fn[0],t&=2147483647,e=on(n),un(t|=e&=2147483648,fn[1])},cn=s,ln=an,yn=m,vn=_;var pn=function(r,n){return n===yn?vn:n===vn?0:n>0?cn(n)?r:0:cn(n)?ln(vn,r):vn},bn=Kr;var wn=function(r,n){return(2147483647&bn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},dn=N,An=_;var sn=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:dn(r)<1==(n===An)?0:An},_n=K,mn=!0===Nr?1:0,hn=new er(1),Un=new _n(hn.buffer);var gn=function(r,n){return hn[0]=r,Un[mn]=n>>>0,hn[0]};var jn=Kr,Nn=kr,In=gn,On=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Sn=1048576,En=[1,1.5],Fn=[0,.5849624872207642],Tn=[0,1.350039202129749e-8];var Hn=kr,Gn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Pn=g,Ln=p,Vn=N;var Wn=function(r,n){return Ln(n)||Pn(n)?(r[0]=n,r[1]=0,r):0!==n&&Vn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var xn=function(r,n){return 1===arguments.length?Wn([0,0],r):Wn(r,n)},Mn=Kr;var kn=function(r){var n=Mn(r);return(n=(2146435072&n)>>>20)-1023|0},Yn=_,qn=m,Cn=p,zn=g,Bn=an,Dn=xn,Jn=kn,Kn=Pr,Qn=tn,Rn=[0,0],Xn=[0,0];var Zn=function(r,n){var t,e;return 0===n||0===r||Cn(r)||zn(r)?r:(Dn(Rn,r),n+=Rn[1],(n+=Jn(r=Rn[0]))<-1074?Bn(0,r):n>1023?r<0?qn:Yn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Kn(Xn,r),t=Xn[0],t&=2148532223,e*Qn(t|=n+1023<<20,Xn[1])))};var $n=Kr,rt=gn,nt=kr,tt=Yr,et=Zn,ot=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},ut=2147483647,it=1048575,ft=1048576;var at=p,ct=s,lt=g,yt=w,vt=j,pt=N,bt=Pr,wt=kr,dt=Yr,At=m,st=_,_t=pn,mt=wn,ht=sn,Ut=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p,b,w,d,A,s,_,m,h,U;return m=0,t<Sn&&(m-=53,t=jn(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=Sn),e=524288+(t>>1|536870912),f=(_=1/((n=In(n,t))+(c=En[U])))*((s=n-c)-(i=Nn(o=s*_,0))*(a=In(0,e+=U<<18))-i*(n-(a-c))),A=(u=o*o)*u*On(u),a=Nn(a=3+(u=i*i)+(A+=f*(i+o)),0),w=(p=-7.028461650952758e-9*(y=Nn(y=(s=i*a)+(_=f*a+(A-(a-3-u))*o),0))+.9617966939259756*(_-(y-s))+Tn[U])-((b=Nn(b=(v=.9617967009544373*y)+p+(l=Fn[U])+(d=m),0))-d-l-v),r[0]=b,r[1]=w,r},gt=function(r,n){var t,e,o,u,i;return t=(i=1.9259629911266175e-8*(o=n-1)-1.4426950408889634*(o*o*Gn(o)))-((e=Hn(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r},jt=function(r,n,t){var e,o,u,i,f,a,c,l,y;return y=((l=r&ut|0)>>20)-1023|0,c=0,l>1071644672&&(o=rt(0,((c=r+(ft>>y+1)>>>0)&~(it>>(y=((c&ut)>>20)-1023|0)))>>>0),c=(c&it|ft)>>20-y>>>0,r<0&&(c=-c),n-=o),f=(i=.6931471805599453*(t-((o=nt(o=t+n,0))-n))+-1.904654299957768e-9*o)-((a=(u=.6931471824645996*o)+i)-u),e=a-(o=a*a)*ot(o),r=$n(a=1-(a*e/(e-2)-(f+a*f)-a)),r=tt(r),a=(r+=c<<20>>>0)>>20<=0?et(a,c):rt(a,r)},Nt=2147483647,It=1083179008,Ot=1e300,St=1e-300,Et=[0,0],Ft=[0,0];var Tt=function r(n,t){var e,o,u,i,f,a,c,l,y,v,p,b,w,d;if(at(n)||at(t))return NaN;if(bt(Et,t),f=Et[0],0===Et[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return vt(n);if(-.5===t)return 1/vt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(lt(t))return ht(n,t)}if(bt(Et,n),i=Et[0],0===Et[1]){if(0===i)return _t(n,t);if(1===n)return 1;if(-1===n&&ct(t))return-1;if(lt(n))return n===At?r(-0,-t):t<0?0:st}if(n<0&&!1===yt(t))return(n-n)/(n-n);if(u=pt(n),e=i&Nt|0,o=f&Nt|0,c=f>>>31|0,a=(a=i>>>31|0)&&ct(t)?-1:1,o>1105199104){if(o>1139802112)return mt(n,t);if(e<1072693247)return 1===c?a*Ot*Ot:a*St*St;if(e>1072693248)return 0===c?a*Ot*Ot:a*St*St;p=gt(Ft,u)}else p=Ut(Ft,u,e);if(v=(t-(l=wt(t,0)))*p[0]+t*p[1],y=l*p[0],bt(Et,b=v+y),w=dt(Et[0]),d=dt(Et[1]),w>=It){if(0!=(w-It|d))return a*Ot*Ot;if(v+8008566259537294e-32>b-y)return a*Ot*Ot}else if((w&Nt)>=1083231232){if(0!=(w-3230714880|d))return a*St*St;if(v<=b-y)return a*St*St}return a*(b=jt(w,y,v))},Ht=p,Gt=Tt;var Pt=function(r){return function(){return r}},Lt=p,Vt=Tt;var Wt=function(r,n){return Ht(r)||Ht(n)||n<0||r>=.5?NaN:Gt(1-2*r,-n/2)};return v(Wt,"factory",(function(r){return Lt(r)||r<0?Pt(NaN):function(n){if(Lt(n)||n>=.5)return NaN;return Vt(1-2*n,-r/2)}})),Wt}));
//# sourceMappingURL=bundle.js.map
