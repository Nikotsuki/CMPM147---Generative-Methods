!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.XXH=r():t.XXH=r()}(this,function(){return function(t){function r(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var i={};return r.m=t,r.c=i,r.d=function(t,i,e){r.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:e})},r.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(i,"a",i),i},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="",r(r.s=2)}([function(t,r,i){"use strict";(function(t){function e(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(r){return!1}}function o(){return n.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function h(t,r){if(o()<r)throw new RangeError("Invalid typed array length");return n.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r),t.__proto__=n.prototype):(null===t&&(t=new n(r)),t.length=r),t}function n(t,r,i){if(!(n.TYPED_ARRAY_SUPPORT||this instanceof n))return new n(t,r,i);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return f(this,t)}return s(this,t,r,i)}function s(t,r,i,e){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?p(t,r,i,e):"string"==typeof r?l(t,r,i):m(t,r)}function a(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(0>t)throw new RangeError('"size" argument must not be negative')}function u(t,r,i,e){return a(r),0>=r?h(t,r):void 0!==i?"string"==typeof e?h(t,r).fill(i,e):h(t,r).fill(i):h(t,r)}function f(t,r){if(a(r),t=h(t,0>r?0:0|y(r)),!n.TYPED_ARRAY_SUPPORT)for(var i=0;r>i;++i)t[i]=0;return t}function l(t,r,i){if(("string"!=typeof i||""===i)&&(i="utf8"),!n.isEncoding(i))throw new TypeError('"encoding" must be a valid string encoding');var e=0|d(r,i);t=h(t,e);var o=t.write(r,i);return o!==e&&(t=t.slice(0,o)),t}function c(t,r){var i=r.length<0?0:0|y(r.length);t=h(t,i);for(var e=0;i>e;e+=1)t[e]=255&r[e];return t}function p(t,r,i,e){if(r.byteLength,0>i||r.byteLength<i)throw new RangeError("'offset' is out of bounds");if(r.byteLength<i+(e||0))throw new RangeError("'length' is out of bounds");return r=void 0===i&&void 0===e?new Uint8Array(r):void 0===e?new Uint8Array(r,i):new Uint8Array(r,i,e),n.TYPED_ARRAY_SUPPORT?(t=r,t.__proto__=n.prototype):t=c(t,r),t}function m(t,r){if(n.isBuffer(r)){var i=0|y(r.length);return t=h(t,i),0===t.length?t:(r.copy(t,0,0,i),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||K(r.length)?h(t,0):c(t,r);if("Buffer"===r.type&&$(r.data))return c(t,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function y(t){if(t>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|t}function _(t){return+t!=t&&(t=0),n.alloc(+t)}function d(t,r){if(n.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var i=t.length;if(0===i)return 0;for(var e=!1;;)switch(r){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":case void 0:return H(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return Z(t).length;default:if(e)return H(t).length;r=(""+r).toLowerCase(),e=!0}}function g(t,r,i){var e=!1;if((void 0===r||0>r)&&(r=0),r>this.length)return"";if((void 0===i||i>this.length)&&(i=this.length),0>=i)return"";if(i>>>=0,r>>>=0,r>=i)return"";for(t||(t="utf8");;)switch(t){case"hex":return z(this,r,i);case"utf8":case"utf-8":return P(this,r,i);case"ascii":return S(this,r,i);case"latin1":case"binary":return I(this,r,i);case"base64":return T(this,r,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,r,i);default:if(e)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),e=!0}}function w(t,r,i){var e=t[r];t[r]=t[i],t[i]=e}function v(t,r,i,e,o){if(0===t.length)return-1;if("string"==typeof i?(e=i,i=0):i>2147483647?i=2147483647:-2147483648>i&&(i=-2147483648),i=+i,isNaN(i)&&(i=o?0:t.length-1),0>i&&(i=t.length+i),i>=t.length){if(o)return-1;i=t.length-1}else if(0>i){if(!o)return-1;i=0}if("string"==typeof r&&(r=n.from(r,e)),n.isBuffer(r))return 0===r.length?-1:A(t,r,i,e,o);if("number"==typeof r)return r=255&r,n.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,r,i):Uint8Array.prototype.lastIndexOf.call(t,r,i):A(t,[r],i,e,o);throw new TypeError("val must be string, number or Buffer")}function A(t,r,i,e,o){function h(t,r){return 1===n?t[r]:t.readUInt16BE(r*n)}var n=1,s=t.length,a=r.length;if(void 0!==e&&(e=String(e).toLowerCase(),"ucs2"===e||"ucs-2"===e||"utf16le"===e||"utf-16le"===e)){if(t.length<2||r.length<2)return-1;n=2,s/=2,a/=2,i/=2}var u;if(o){var f=-1;for(u=i;s>u;u++)if(h(t,u)===h(r,-1===f?0:u-f)){if(-1===f&&(f=u),u-f+1===a)return f*n}else-1!==f&&(u-=u-f),f=-1}else for(i+a>s&&(i=s-a),u=i;u>=0;u--){for(var l=!0,c=0;a>c;c++)if(h(t,u+c)!==h(r,c)){l=!1;break}if(l)return u}return-1}function C(t,r,i,e){i=Number(i)||0;var o=t.length-i;e?(e=Number(e),e>o&&(e=o)):e=o;var h=r.length;if(h%2!==0)throw new TypeError("Invalid hex string");e>h/2&&(e=h/2);for(var n=0;e>n;++n){var s=parseInt(r.substr(2*n,2),16);if(isNaN(s))return n;t[i+n]=s}return n}function b(t,r,i,e){return G(H(r,t.length-i),t,i,e)}function E(t,r,i,e){return G(V(r),t,i,e)}function R(t,r,i,e){return E(t,r,i,e)}function x(t,r,i,e){return G(Z(r),t,i,e)}function B(t,r,i,e){return G(J(r,t.length-i),t,i,e)}function T(t,r,i){return Q.fromByteArray(0===r&&i===t.length?t:t.slice(r,i))}function P(t,r,i){i=Math.min(t.length,i);for(var e=[],o=r;i>o;){var h=t[o],n=null,s=h>239?4:h>223?3:h>191?2:1;if(i>=o+s){var a,u,f,l;switch(s){case 1:128>h&&(n=h);break;case 2:a=t[o+1],128===(192&a)&&(l=(31&h)<<6|63&a,l>127&&(n=l));break;case 3:a=t[o+1],u=t[o+2],128===(192&a)&&128===(192&u)&&(l=(15&h)<<12|(63&a)<<6|63&u,l>2047&&(55296>l||l>57343)&&(n=l));break;case 4:a=t[o+1],u=t[o+2],f=t[o+3],128===(192&a)&&128===(192&u)&&128===(192&f)&&(l=(15&h)<<18|(63&a)<<12|(63&u)<<6|63&f,l>65535&&1114112>l&&(n=l))}}null===n?(n=65533,s=1):n>65535&&(n-=65536,e.push(n>>>10&1023|55296),n=56320|1023&n),e.push(n),o+=s}return U(e)}function U(t){var r=t.length;if(tt>=r)return String.fromCharCode.apply(String,t);for(var i="",e=0;r>e;)i+=String.fromCharCode.apply(String,t.slice(e,e+=tt));return i}function S(t,r,i){var e="";i=Math.min(t.length,i);for(var o=r;i>o;++o)e+=String.fromCharCode(127&t[o]);return e}function I(t,r,i){var e="";i=Math.min(t.length,i);for(var o=r;i>o;++o)e+=String.fromCharCode(t[o]);return e}function z(t,r,i){var e=t.length;(!r||0>r)&&(r=0),(!i||0>i||i>e)&&(i=e);for(var o="",h=r;i>h;++h)o+=X(t[h]);return o}function Y(t,r,i){for(var e=t.slice(r,i),o="",h=0;h<e.length;h+=2)o+=String.fromCharCode(e[h]+256*e[h+1]);return o}function M(t,r,i){if(t%1!==0||0>t)throw new RangeError("offset is not uint");if(t+r>i)throw new RangeError("Trying to access beyond buffer length")}function L(t,r,i,e,o,h){if(!n.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||h>r)throw new RangeError('"value" argument is out of bounds');if(i+e>t.length)throw new RangeError("Index out of range")}function O(t,r,i,e){0>r&&(r=65535+r+1);for(var o=0,h=Math.min(t.length-i,2);h>o;++o)t[i+o]=(r&255<<8*(e?o:1-o))>>>8*(e?o:1-o)}function N(t,r,i,e){0>r&&(r=4294967295+r+1);for(var o=0,h=Math.min(t.length-i,4);h>o;++o)t[i+o]=r>>>8*(e?o:3-o)&255}function D(t,r,i,e){if(i+e>t.length)throw new RangeError("Index out of range");if(0>i)throw new RangeError("Index out of range")}function k(t,r,i,e,o){return o||D(t,r,i,4,3.4028234663852886e38,-3.4028234663852886e38),W.write(t,r,i,e,23,4),i+4}function j(t,r,i,e,o){return o||D(t,r,i,8,1.7976931348623157e308,-1.7976931348623157e308),W.write(t,r,i,e,52,8),i+8}function F(t){if(t=q(t).replace(rt,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function q(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function X(t){return 16>t?"0"+t.toString(16):t.toString(16)}function H(t,r){r=r||1/0;for(var i,e=t.length,o=null,h=[],n=0;e>n;++n){if(i=t.charCodeAt(n),i>55295&&57344>i){if(!o){if(i>56319){(r-=3)>-1&&h.push(239,191,189);continue}if(n+1===e){(r-=3)>-1&&h.push(239,191,189);continue}o=i;continue}if(56320>i){(r-=3)>-1&&h.push(239,191,189),o=i;continue}i=(o-55296<<10|i-56320)+65536}else o&&(r-=3)>-1&&h.push(239,191,189);if(o=null,128>i){if((r-=1)<0)break;h.push(i)}else if(2048>i){if((r-=2)<0)break;h.push(i>>6|192,63&i|128)}else if(65536>i){if((r-=3)<0)break;h.push(i>>12|224,i>>6&63|128,63&i|128)}else{if(!(1114112>i))throw new Error("Invalid code point");if((r-=4)<0)break;h.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}}return h}function V(t){for(var r=[],i=0;i<t.length;++i)r.push(255&t.charCodeAt(i));return r}function J(t,r){for(var i,e,o,h=[],n=0;n<t.length&&!((r-=2)<0);++n)i=t.charCodeAt(n),e=i>>8,o=i%256,h.push(o),h.push(e);return h}function Z(t){return Q.toByteArray(F(t))}function G(t,r,i,e){for(var o=0;e>o&&!(o+i>=r.length||o>=t.length);++o)r[o+i]=t[o];return o}function K(t){return t!==t}var Q=i(5),W=i(6),$=i(7);r.Buffer=n,r.SlowBuffer=_,r.INSPECT_MAX_BYTES=50,n.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:e(),r.kMaxLength=o(),n.poolSize=8192,n._augment=function(t){return t.__proto__=n.prototype,t},n.from=function(t,r,i){return s(null,t,r,i)},n.TYPED_ARRAY_SUPPORT&&(n.prototype.__proto__=Uint8Array.prototype,n.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&n[Symbol.species]===n&&Object.defineProperty(n,Symbol.species,{value:null,configurable:!0})),n.alloc=function(t,r,i){return u(null,t,r,i)},n.allocUnsafe=function(t){return f(null,t)},n.allocUnsafeSlow=function(t){return f(null,t)},n.isBuffer=function(t){return!(null==t||!t._isBuffer)},n.compare=function(t,r){if(!n.isBuffer(t)||!n.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var i=t.length,e=r.length,o=0,h=Math.min(i,e);h>o;++o)if(t[o]!==r[o]){i=t[o],e=r[o];break}return e>i?-1:i>e?1:0},n.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(t,r){if(!$(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return n.alloc(0);var i;if(void 0===r)for(r=0,i=0;i<t.length;++i)r+=t[i].length;var e=n.allocUnsafe(r),o=0;for(i=0;i<t.length;++i){var h=t[i];if(!n.isBuffer(h))throw new TypeError('"list" argument must be an Array of Buffers');h.copy(e,o),o+=h.length}return e},n.byteLength=d,n.prototype._isBuffer=!0,n.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;t>r;r+=2)w(this,r,r+1);return this},n.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;t>r;r+=4)w(this,r,r+3),w(this,r+1,r+2);return this},n.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;t>r;r+=8)w(this,r,r+7),w(this,r+1,r+6),w(this,r+2,r+5),w(this,r+3,r+4);return this},n.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?P(this,0,t):g.apply(this,arguments)},n.prototype.equals=function(t){if(!n.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:0===n.compare(this,t)},n.prototype.inspect=function(){var t="",i=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,i).match(/.{2}/g).join(" "),this.length>i&&(t+=" ... ")),"<Buffer "+t+">"},n.prototype.compare=function(t,r,i,e,o){if(!n.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===i&&(i=t?t.length:0),void 0===e&&(e=0),void 0===o&&(o=this.length),0>r||i>t.length||0>e||o>this.length)throw new RangeError("out of range index");if(e>=o&&r>=i)return 0;if(e>=o)return-1;if(r>=i)return 1;if(r>>>=0,i>>>=0,e>>>=0,o>>>=0,this===t)return 0;for(var h=o-e,s=i-r,a=Math.min(h,s),u=this.slice(e,o),f=t.slice(r,i),l=0;a>l;++l)if(u[l]!==f[l]){h=u[l],s=f[l];break}return s>h?-1:h>s?1:0},n.prototype.includes=function(t,r,i){return-1!==this.indexOf(t,r,i)},n.prototype.indexOf=function(t,r,i){return v(this,t,r,i,!0)},n.prototype.lastIndexOf=function(t,r,i){return v(this,t,r,i,!1)},n.prototype.write=function(t,r,i,e){if(void 0===r)e="utf8",i=this.length,r=0;else if(void 0===i&&"string"==typeof r)e=r,i=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r=0|r,isFinite(i)?(i=0|i,void 0===e&&(e="utf8")):(e=i,i=void 0)}var o=this.length-r;if((void 0===i||i>o)&&(i=o),t.length>0&&(0>i||0>r)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");e||(e="utf8");for(var h=!1;;)switch(e){case"hex":return C(this,t,r,i);case"utf8":case"utf-8":return b(this,t,r,i);case"ascii":return E(this,t,r,i);case"latin1":case"binary":return R(this,t,r,i);case"base64":return x(this,t,r,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,r,i);default:if(h)throw new TypeError("Unknown encoding: "+e);e=(""+e).toLowerCase(),h=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var tt=4096;n.prototype.slice=function(t,r){var i=this.length;t=~~t,r=void 0===r?i:~~r,0>t?(t+=i,0>t&&(t=0)):t>i&&(t=i),0>r?(r+=i,0>r&&(r=0)):r>i&&(r=i),t>r&&(r=t);var e;if(n.TYPED_ARRAY_SUPPORT)e=this.subarray(t,r),e.__proto__=n.prototype;else{var o=r-t;e=new n(o,void 0);for(var h=0;o>h;++h)e[h]=this[h+t]}return e},n.prototype.readUIntLE=function(t,r,i){t=0|t,r=0|r,i||M(t,r,this.length);for(var e=this[t],o=1,h=0;++h<r&&(o*=256);)e+=this[t+h]*o;return e},n.prototype.readUIntBE=function(t,r,i){t=0|t,r=0|r,i||M(t,r,this.length);for(var e=this[t+--r],o=1;r>0&&(o*=256);)e+=this[t+--r]*o;return e},n.prototype.readUInt8=function(t,r){return r||M(t,1,this.length),this[t]},n.prototype.readUInt16LE=function(t,r){return r||M(t,2,this.length),this[t]|this[t+1]<<8},n.prototype.readUInt16BE=function(t,r){return r||M(t,2,this.length),this[t]<<8|this[t+1]},n.prototype.readUInt32LE=function(t,r){return r||M(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},n.prototype.readUInt32BE=function(t,r){return r||M(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},n.prototype.readIntLE=function(t,r,i){t=0|t,r=0|r,i||M(t,r,this.length);for(var e=this[t],o=1,h=0;++h<r&&(o*=256);)e+=this[t+h]*o;return o*=128,e>=o&&(e-=Math.pow(2,8*r)),e},n.prototype.readIntBE=function(t,r,i){t=0|t,r=0|r,i||M(t,r,this.length);for(var e=r,o=1,h=this[t+--e];e>0&&(o*=256);)h+=this[t+--e]*o;return o*=128,h>=o&&(h-=Math.pow(2,8*r)),h},n.prototype.readInt8=function(t,r){return r||M(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},n.prototype.readInt16LE=function(t,r){r||M(t,2,this.length);var i=this[t]|this[t+1]<<8;return 32768&i?4294901760|i:i},n.prototype.readInt16BE=function(t,r){r||M(t,2,this.length);var i=this[t+1]|this[t]<<8;return 32768&i?4294901760|i:i},n.prototype.readInt32LE=function(t,r){return r||M(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},n.prototype.readInt32BE=function(t,r){return r||M(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},n.prototype.readFloatLE=function(t,r){return r||M(t,4,this.length),W.read(this,t,!0,23,4)},n.prototype.readFloatBE=function(t,r){return r||M(t,4,this.length),W.read(this,t,!1,23,4)},n.prototype.readDoubleLE=function(t,r){return r||M(t,8,this.length),W.read(this,t,!0,52,8)},n.prototype.readDoubleBE=function(t,r){return r||M(t,8,this.length),W.read(this,t,!1,52,8)},n.prototype.writeUIntLE=function(t,r,i,e){if(t=+t,r=0|r,i=0|i,!e){var o=Math.pow(2,8*i)-1;L(this,t,r,i,o,0)}var h=1,n=0;for(this[r]=255&t;++n<i&&(h*=256);)this[r+n]=t/h&255;return r+i},n.prototype.writeUIntBE=function(t,r,i,e){if(t=+t,r=0|r,i=0|i,!e){var o=Math.pow(2,8*i)-1;L(this,t,r,i,o,0)}var h=i-1,n=1;for(this[r+h]=255&t;--h>=0&&(n*=256);)this[r+h]=t/n&255;return r+i},n.prototype.writeUInt8=function(t,r,i){return t=+t,r=0|r,i||L(this,t,r,1,255,0),n.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},n.prototype.writeUInt16LE=function(t,r,i){return t=+t,r=0|r,i||L(this,t,r,2,65535,0),n.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):O(this,t,r,!0),r+2},n.prototype.writeUInt16BE=function(t,r,i){return t=+t,r=0|r,i||L(this,t,r,2,65535,0),n.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):O(this,t,r,!1),r+2},n.prototype.writeUInt32LE=function(t,r,i){return t=+t,r=0|r,i||L(this,t,r,4,4294967295,0),n.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):N(this,t,r,!0),r+4},n.prototype.writeUInt32BE=function(t,r,i){return t=+t,r=0|r,i||L(this,t,r,4,4294967295,0),n.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):N(this,t,r,!1),r+4},n.prototype.writeIntLE=function(t,r,i,e){if(t=+t,r=0|r,!e){var o=Math.pow(2,8*i-1);L(this,t,r,i,o-1,-o)}var h=0,n=1,s=0;for(this[r]=255&t;++h<i&&(n*=256);)0>t&&0===s&&0!==this[r+h-1]&&(s=1),this[r+h]=(t/n>>0)-s&255;return r+i},n.prototype.writeIntBE=function(t,r,i,e){if(t=+t,r=0|r,!e){var o=Math.pow(2,8*i-1);L(this,t,r,i,o-1,-o)}var h=i-1,n=1,s=0;for(this[r+h]=255&t;--h>=0&&(n*=256);)0>t&&0===s&&0!==this[r+h+1]&&(s=1),this[r+h]=(t/n>>0)-s&255;return r+i},n.prototype.writeInt8=function(t,r,i){return t=+t,r=0|r,i||L(this,t,r,1,127,-128),n.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),0>t&&(t=255+t+1),this[r]=255&t,r+1},n.prototype.writeInt16LE=function(t,r,i){return t=+t,r=0|r,i||L(this,t,r,2,32767,-32768),n.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):O(this,t,r,!0),r+2},n.prototype.writeInt16BE=function(t,r,i){return t=+t,r=0|r,i||L(this,t,r,2,32767,-32768),n.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):O(this,t,r,!1),r+2},n.prototype.writeInt32LE=function(t,r,i){return t=+t,r=0|r,i||L(this,t,r,4,2147483647,-2147483648),n.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):N(this,t,r,!0),r+4},n.prototype.writeInt32BE=function(t,r,i){return t=+t,r=0|r,i||L(this,t,r,4,2147483647,-2147483648),0>t&&(t=4294967295+t+1),n.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):N(this,t,r,!1),r+4},n.prototype.writeFloatLE=function(t,r,i){return k(this,t,r,!0,i)},n.prototype.writeFloatBE=function(t,r,i){return k(this,t,r,!1,i)},n.prototype.writeDoubleLE=function(t,r,i){return j(this,t,r,!0,i)},n.prototype.writeDoubleBE=function(t,r,i){return j(this,t,r,!1,i)},n.prototype.copy=function(t,r,i,e){if(i||(i=0),e||0===e||(e=this.length),r>=t.length&&(r=t.length),r||(r=0),e>0&&i>e&&(e=i),e===i)return 0;if(0===t.length||0===this.length)return 0;if(0>r)throw new RangeError("targetStart out of bounds");if(0>i||i>=this.length)throw new RangeError("sourceStart out of bounds");if(0>e)throw new RangeError("sourceEnd out of bounds");e>this.length&&(e=this.length),t.length-r<e-i&&(e=t.length-r+i);var o,h=e-i;if(this===t&&r>i&&e>r)for(o=h-1;o>=0;--o)t[o+r]=this[o+i];else if(1e3>h||!n.TYPED_ARRAY_SUPPORT)for(o=0;h>o;++o)t[o+r]=this[o+i];else Uint8Array.prototype.set.call(t,this.subarray(i,i+h),r);return h},n.prototype.fill=function(t,r,i,e){if("string"==typeof t){if("string"==typeof r?(e=r,r=0,i=this.length):"string"==typeof i&&(e=i,i=this.length),1===t.length){var o=t.charCodeAt(0);256>o&&(t=o)}if(void 0!==e&&"string"!=typeof e)throw new TypeError("encoding must be a string");if("string"==typeof e&&!n.isEncoding(e))throw new TypeError("Unknown encoding: "+e)}else"number"==typeof t&&(t=255&t);if(0>r||this.length<r||this.length<i)throw new RangeError("Out of range index");if(r>=i)return this;r>>>=0,i=void 0===i?this.length:i>>>0,t||(t=0);var h;if("number"==typeof t)for(h=r;i>h;++h)this[h]=t;else{var s=n.isBuffer(t)?t:H(new n(t,e).toString()),a=s.length;for(h=0;i-r>h;++h)this[h+r]=s[h%a]}return this};var rt=/[^+\/0-9A-Za-z-_]/g}).call(r,i(4))},function(t,r,i){r.UINT32=i(8),r.UINT64=i(9)},function(t,r,i){t.exports={h32:i(3),h64:i(10)}},function(t,r,i){(function(r){function e(t){for(var r=[],i=0,e=t.length;e>i;i++){var o=t.charCodeAt(i);128>o?r.push(o):2048>o?r.push(192|o>>6,128|63&o):55296>o||o>=57344?r.push(224|o>>12,128|o>>6&63,128|63&o):(i++,o=65536+((1023&o)<<10|1023&t.charCodeAt(i)),r.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|63&o))}return new Uint8Array(r)}function o(){return 2==arguments.length?new o(arguments[1]).update(arguments[0]).digest():this instanceof o?void h.call(this,arguments[0]):new o(arguments[0])}function h(t){return this.seed=t instanceof n?t.clone():n(t),this.v1=this.seed.clone().add(s).add(a),this.v2=this.seed.clone().add(a),this.v3=this.seed.clone(),this.v4=this.seed.clone().subtract(s),this.total_len=0,this.memsize=0,this.memory=null,this}var n=i(1).UINT32;n.prototype.xxh_update=function(t,r){var i,e,o=a._low,h=a._high;e=t*o,i=e>>>16,i+=r*o,i&=65535,i+=t*h;var n=this._low+(65535&e),u=n>>>16;u+=this._high+(65535&i);var f=u<<16|65535&n;f=f<<13|f>>>19,n=65535&f,u=f>>>16,o=s._low,h=s._high,e=n*o,i=e>>>16,i+=u*o,i&=65535,i+=n*h,this._low=65535&e,this._high=65535&i};var s=n("2654435761"),a=n("2246822519"),u=n("3266489917"),f=n("668265263"),l=n("374761393");o.prototype.init=h,o.prototype.update=function(t){var i,o="string"==typeof t;o&&(t=e(t),o=!1,i=!0),"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&(i=!0,t=new Uint8Array(t));var h=0,n=t.length,s=h+n;if(0==n)return this;if(this.total_len+=n,0==this.memsize&&(this.memory=o?"":i?new Uint8Array(16):new r(16)),this.memsize+n<16)return o?this.memory+=t:i?this.memory.set(t.subarray(0,n),this.memsize):t.copy(this.memory,this.memsize,0,n),this.memsize+=n,this;if(this.memsize>0){o?this.memory+=t.slice(0,16-this.memsize):i?this.memory.set(t.subarray(0,16-this.memsize),this.memsize):t.copy(this.memory,this.memsize,0,16-this.memsize);var a=0;o?(this.v1.xxh_update(this.memory.charCodeAt(a+1)<<8|this.memory.charCodeAt(a),this.memory.charCodeAt(a+3)<<8|this.memory.charCodeAt(a+2)),a+=4,this.v2.xxh_update(this.memory.charCodeAt(a+1)<<8|this.memory.charCodeAt(a),this.memory.charCodeAt(a+3)<<8|this.memory.charCodeAt(a+2)),a+=4,this.v3.xxh_update(this.memory.charCodeAt(a+1)<<8|this.memory.charCodeAt(a),this.memory.charCodeAt(a+3)<<8|this.memory.charCodeAt(a+2)),a+=4,this.v4.xxh_update(this.memory.charCodeAt(a+1)<<8|this.memory.charCodeAt(a),this.memory.charCodeAt(a+3)<<8|this.memory.charCodeAt(a+2))):(this.v1.xxh_update(this.memory[a+1]<<8|this.memory[a],this.memory[a+3]<<8|this.memory[a+2]),a+=4,this.v2.xxh_update(this.memory[a+1]<<8|this.memory[a],this.memory[a+3]<<8|this.memory[a+2]),a+=4,this.v3.xxh_update(this.memory[a+1]<<8|this.memory[a],this.memory[a+3]<<8|this.memory[a+2]),a+=4,this.v4.xxh_update(this.memory[a+1]<<8|this.memory[a],this.memory[a+3]<<8|this.memory[a+2])),h+=16-this.memsize,this.memsize=0,o&&(this.memory="")}if(s-16>=h){var u=s-16;do o?(this.v1.xxh_update(t.charCodeAt(h+1)<<8|t.charCodeAt(h),t.charCodeAt(h+3)<<8|t.charCodeAt(h+2)),h+=4,this.v2.xxh_update(t.charCodeAt(h+1)<<8|t.charCodeAt(h),t.charCodeAt(h+3)<<8|t.charCodeAt(h+2)),h+=4,this.v3.xxh_update(t.charCodeAt(h+1)<<8|t.charCodeAt(h),t.charCodeAt(h+3)<<8|t.charCodeAt(h+2)),h+=4,this.v4.xxh_update(t.charCodeAt(h+1)<<8|t.charCodeAt(h),t.charCodeAt(h+3)<<8|t.charCodeAt(h+2))):(this.v1.xxh_update(t[h+1]<<8|t[h],t[h+3]<<8|t[h+2]),h+=4,this.v2.xxh_update(t[h+1]<<8|t[h],t[h+3]<<8|t[h+2]),h+=4,this.v3.xxh_update(t[h+1]<<8|t[h],t[h+3]<<8|t[h+2]),h+=4,this.v4.xxh_update(t[h+1]<<8|t[h],t[h+3]<<8|t[h+2])),h+=4;while(u>=h)}return s>h&&(o?this.memory+=t.slice(h):i?this.memory.set(t.subarray(h,s),this.memsize):t.copy(this.memory,this.memsize,h,s),this.memsize=s-h),this},o.prototype.digest=function(){var t,r,i=this.memory,e="string"==typeof i,o=0,h=this.memsize,c=new n;for(t=this.total_len>=16?this.v1.rotl(1).add(this.v2.rotl(7).add(this.v3.rotl(12).add(this.v4.rotl(18)))):this.seed.clone().add(l),t.add(c.fromNumber(this.total_len));h-4>=o;)e?c.fromBits(i.charCodeAt(o+1)<<8|i.charCodeAt(o),i.charCodeAt(o+3)<<8|i.charCodeAt(o+2)):c.fromBits(i[o+1]<<8|i[o],i[o+3]<<8|i[o+2]),t.add(c.multiply(u)).rotl(17).multiply(f),o+=4;for(;h>o;)c.fromBits(e?i.charCodeAt(o++):i[o++],0),t.add(c.multiply(l)).rotl(11).multiply(s);return r=t.clone().shiftRight(15),t.xor(r).multiply(a),r=t.clone().shiftRight(13),t.xor(r).multiply(u),r=t.clone().shiftRight(16),t.xor(r),this.init(this.seed),t},t.exports=o}).call(r,i(0).Buffer)},function(t){var r;r=function(){return this}();try{r=r||Function("return this")()||(1,eval)("this")}catch(i){"object"==typeof window&&(r=window)}t.exports=r},function(t,r){"use strict";function i(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[r-2]?2:"="===t[r-1]?1:0}function e(t){return 3*t.length/4-i(t)}function o(t){var r,e,o,h,n,s=t.length;h=i(t),n=new f(3*s/4-h),e=h>0?s-4:s;var a=0;for(r=0;e>r;r+=4)o=u[t.charCodeAt(r)]<<18|u[t.charCodeAt(r+1)]<<12|u[t.charCodeAt(r+2)]<<6|u[t.charCodeAt(r+3)],n[a++]=o>>16&255,n[a++]=o>>8&255,n[a++]=255&o;return 2===h?(o=u[t.charCodeAt(r)]<<2|u[t.charCodeAt(r+1)]>>4,n[a++]=255&o):1===h&&(o=u[t.charCodeAt(r)]<<10|u[t.charCodeAt(r+1)]<<4|u[t.charCodeAt(r+2)]>>2,n[a++]=o>>8&255,n[a++]=255&o),n}function h(t){return a[t>>18&63]+a[t>>12&63]+a[t>>6&63]+a[63&t]}function n(t,r,i){for(var e,o=[],n=r;i>n;n+=3)e=(t[n]<<16)+(t[n+1]<<8)+t[n+2],o.push(h(e));return o.join("")}function s(t){for(var r,i=t.length,e=i%3,o="",h=[],s=16383,u=0,f=i-e;f>u;u+=s)h.push(n(t,u,u+s>f?f:u+s));return 1===e?(r=t[i-1],o+=a[r>>2],o+=a[r<<4&63],o+="=="):2===e&&(r=(t[i-2]<<8)+t[i-1],o+=a[r>>10],o+=a[r>>4&63],o+=a[r<<2&63],o+="="),h.push(o),h.join("")}r.byteLength=e,r.toByteArray=o,r.fromByteArray=s;for(var a=[],u=[],f="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,p=l.length;p>c;++c)a[c]=l[c],u[l.charCodeAt(c)]=c;u["-".charCodeAt(0)]=62,u["_".charCodeAt(0)]=63},function(t,r){r.read=function(t,r,i,e,o){var h,n,s=8*o-e-1,a=(1<<s)-1,u=a>>1,f=-7,l=i?o-1:0,c=i?-1:1,p=t[r+l];for(l+=c,h=p&(1<<-f)-1,p>>=-f,f+=s;f>0;h=256*h+t[r+l],l+=c,f-=8);for(n=h&(1<<-f)-1,h>>=-f,f+=e;f>0;n=256*n+t[r+l],l+=c,f-=8);if(0===h)h=1-u;else{if(h===a)return n?0/0:(p?-1:1)*(1/0);n+=Math.pow(2,e),h-=u}return(p?-1:1)*n*Math.pow(2,h-e)},r.write=function(t,r,i,e,o,h){var n,s,a,u=8*h-o-1,f=(1<<u)-1,l=f>>1,c=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=e?0:h-1,m=e?1:-1,y=0>r||0===r&&0>1/r?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(s=isNaN(r)?1:0,n=f):(n=Math.floor(Math.log(r)/Math.LN2),r*(a=Math.pow(2,-n))<1&&(n--,a*=2),r+=n+l>=1?c/a:c*Math.pow(2,1-l),r*a>=2&&(n++,a/=2),n+l>=f?(s=0,n=f):n+l>=1?(s=(r*a-1)*Math.pow(2,o),n+=l):(s=r*Math.pow(2,l-1)*Math.pow(2,o),n=0));o>=8;t[i+p]=255&s,p+=m,s/=256,o-=8);for(n=n<<o|s,u+=o;u>0;t[i+p]=255&n,p+=m,n/=256,u-=8);t[i+p-m]|=128*y}},function(t){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,r){var i,e;!function(o){function h(t,r){return this instanceof h?(this._low=0,this._high=0,this.remainder=null,"undefined"==typeof r?s.call(this,t):"string"==typeof t?a.call(this,t,r):void n.call(this,t,r)):new h(t,r)}function n(t,r){return this._low=0|t,this._high=0|r,this}function s(t){return this._low=65535&t,this._high=t>>>16,this}function a(t,r){var i=parseInt(t,r||10);return this._low=65535&i,this._high=i>>>16,this}({36:h(Math.pow(36,5)),16:h(Math.pow(16,7)),10:h(Math.pow(10,9)),2:h(Math.pow(2,30))}),{36:h(36),16:h(16),10:h(10),2:h(2)};h.prototype.fromBits=n,h.prototype.fromNumber=s,h.prototype.fromString=a,h.prototype.toNumber=function(){return 65536*this._high+this._low},h.prototype.toString=function(t){return this.toNumber().toString(t||10)},h.prototype.add=function(t){var r=this._low+t._low,i=r>>>16;return i+=this._high+t._high,this._low=65535&r,this._high=65535&i,this},h.prototype.subtract=function(t){return this.add(t.clone().negate())},h.prototype.multiply=function(t){var r,i,e=this._high,o=this._low,h=t._high,n=t._low;return i=o*n,r=i>>>16,r+=e*n,r&=65535,r+=o*h,this._low=65535&i,this._high=65535&r,this},h.prototype.div=function(t){if(0==t._low&&0==t._high)throw Error("division by zero");if(0==t._high&&1==t._low)return this.remainder=new h(0),this;if(t.gt(this))return this.remainder=this.clone(),this._low=0,this._high=0,this;if(this.eq(t))return this.remainder=new h(0),this._low=1,this._high=0,this;for(var r=t.clone(),i=-1;!this.lt(r);)r.shiftLeft(1,!0),i++;for(this.remainder=this.clone(),this._low=0,this._high=0;i>=0;i--)r.shiftRight(1),this.remainder.lt(r)||(this.remainder.subtract(r),i>=16?this._high|=1<<i-16:this._low|=1<<i);return this},h.prototype.negate=function(){var t=(65535&~this._low)+1;return this._low=65535&t,this._high=~this._high+(t>>>16)&65535,this},h.prototype.equals=h.prototype.eq=function(t){return this._low==t._low&&this._high==t._high},h.prototype.greaterThan=h.prototype.gt=function(t){return this._high>t._high?!0:this._high<t._high?!1:this._low>t._low},h.prototype.lessThan=h.prototype.lt=function(t){return this._high<t._high?!0:this._high>t._high?!1:this._low<t._low},h.prototype.or=function(t){return this._low|=t._low,this._high|=t._high,this},h.prototype.and=function(t){return this._low&=t._low,this._high&=t._high,this},h.prototype.not=function(){return this._low=65535&~this._low,this._high=65535&~this._high,this},h.prototype.xor=function(t){return this._low^=t._low,this._high^=t._high,this},h.prototype.shiftRight=h.prototype.shiftr=function(t){return t>16?(this._low=this._high>>t-16,this._high=0):16==t?(this._low=this._high,this._high=0):(this._low=this._low>>t|this._high<<16-t&65535,this._high>>=t),this},h.prototype.shiftLeft=h.prototype.shiftl=function(t,r){return t>16?(this._high=this._low<<t-16,this._low=0,r||(this._high&=65535)):16==t?(this._high=this._low,this._low=0):(this._high=this._high<<t|this._low>>16-t,this._low=this._low<<t&65535,r||(this._high&=65535)),this},h.prototype.rotateLeft=h.prototype.rotl=function(t){var r=this._high<<16|this._low;return r=r<<t|r>>>32-t,this._low=65535&r,this._high=r>>>16,this},h.prototype.rotateRight=h.prototype.rotr=function(t){var r=this._high<<16|this._low;return r=r>>>t|r<<32-t,this._low=65535&r,this._high=r>>>16,this},h.prototype.clone=function(){return new h(this._low,this._high)},i=[],e=function(){return h}.apply(r,i),!(void 0!==e&&(t.exports=e))}(this)},function(t,r){var i,e;!function(o){function h(t,r,i,e){return this instanceof h?(this.remainder=null,"string"==typeof t?a.call(this,t,r):"undefined"==typeof r?s.call(this,t):void n.apply(this,arguments)):new h(t,r,i,e)}function n(t,r,i,e){return"undefined"==typeof i?(this._a00=65535&t,this._a16=t>>>16,this._a32=65535&r,this._a48=r>>>16,this):(this._a00=0|t,this._a16=0|r,this._a32=0|i,this._a48=0|e,this)}function s(t){return this._a00=65535&t,this._a16=t>>>16,this._a32=0,this._a48=0,this}function a(t,r){r=r||10,this._a00=0,this._a16=0,this._a32=0,this._a48=0;for(var i=u[r]||new h(Math.pow(r,5)),e=0,o=t.length;o>e;e+=5){var n=Math.min(5,o-e),s=parseInt(t.slice(e,e+n),r);this.multiply(5>n?new h(Math.pow(r,n)):i).add(new h(s))}return this}var u={16:h(Math.pow(16,5)),10:h(Math.pow(10,5)),2:h(Math.pow(2,5))},f={16:h(16),10:h(10),2:h(2)};h.prototype.fromBits=n,h.prototype.fromNumber=s,h.prototype.fromString=a,h.prototype.toNumber=function(){return 65536*this._a16+this._a00},h.prototype.toString=function(t){t=t||10;

var r=f[t]||new h(t);if(!this.gt(r))return this.toNumber().toString(t);for(var i=this.clone(),e=new Array(64),o=63;o>=0&&(i.div(r),e[o]=i.remainder.toNumber().toString(t),i.gt(r));o--);return e[o-1]=i.toNumber().toString(t),e.join("")},h.prototype.add=function(t){var r=this._a00+t._a00,i=r>>>16;i+=this._a16+t._a16;var e=i>>>16;e+=this._a32+t._a32;var o=e>>>16;return o+=this._a48+t._a48,this._a00=65535&r,this._a16=65535&i,this._a32=65535&e,this._a48=65535&o,this},h.prototype.subtract=function(t){return this.add(t.clone().negate())},h.prototype.multiply=function(t){var r=this._a00,i=this._a16,e=this._a32,o=this._a48,h=t._a00,n=t._a16,s=t._a32,a=t._a48,u=r*h,f=u>>>16;f+=r*n;var l=f>>>16;f&=65535,f+=i*h,l+=f>>>16,l+=r*s;var c=l>>>16;return l&=65535,l+=i*n,c+=l>>>16,l&=65535,l+=e*h,c+=l>>>16,c+=r*a,c&=65535,c+=i*s,c&=65535,c+=e*n,c&=65535,c+=o*h,this._a00=65535&u,this._a16=65535&f,this._a32=65535&l,this._a48=65535&c,this},h.prototype.div=function(t){if(0==t._a16&&0==t._a32&&0==t._a48){if(0==t._a00)throw Error("division by zero");if(1==t._a00)return this.remainder=new h(0),this}if(t.gt(this))return this.remainder=this.clone(),this._a00=0,this._a16=0,this._a32=0,this._a48=0,this;if(this.eq(t))return this.remainder=new h(0),this._a00=1,this._a16=0,this._a32=0,this._a48=0,this;for(var r=t.clone(),i=-1;!this.lt(r);)r.shiftLeft(1,!0),i++;for(this.remainder=this.clone(),this._a00=0,this._a16=0,this._a32=0,this._a48=0;i>=0;i--)r.shiftRight(1),this.remainder.lt(r)||(this.remainder.subtract(r),i>=48?this._a48|=1<<i-48:i>=32?this._a32|=1<<i-32:i>=16?this._a16|=1<<i-16:this._a00|=1<<i);return this},h.prototype.negate=function(){var t=(65535&~this._a00)+1;return this._a00=65535&t,t=(65535&~this._a16)+(t>>>16),this._a16=65535&t,t=(65535&~this._a32)+(t>>>16),this._a32=65535&t,this._a48=~this._a48+(t>>>16)&65535,this},h.prototype.equals=h.prototype.eq=function(t){return this._a48==t._a48&&this._a00==t._a00&&this._a32==t._a32&&this._a16==t._a16},h.prototype.greaterThan=h.prototype.gt=function(t){return this._a48>t._a48?!0:this._a48<t._a48?!1:this._a32>t._a32?!0:this._a32<t._a32?!1:this._a16>t._a16?!0:this._a16<t._a16?!1:this._a00>t._a00},h.prototype.lessThan=h.prototype.lt=function(t){return this._a48<t._a48?!0:this._a48>t._a48?!1:this._a32<t._a32?!0:this._a32>t._a32?!1:this._a16<t._a16?!0:this._a16>t._a16?!1:this._a00<t._a00},h.prototype.or=function(t){return this._a00|=t._a00,this._a16|=t._a16,this._a32|=t._a32,this._a48|=t._a48,this},h.prototype.and=function(t){return this._a00&=t._a00,this._a16&=t._a16,this._a32&=t._a32,this._a48&=t._a48,this},h.prototype.xor=function(t){return this._a00^=t._a00,this._a16^=t._a16,this._a32^=t._a32,this._a48^=t._a48,this},h.prototype.not=function(){return this._a00=65535&~this._a00,this._a16=65535&~this._a16,this._a32=65535&~this._a32,this._a48=65535&~this._a48,this},h.prototype.shiftRight=h.prototype.shiftr=function(t){return t%=64,t>=48?(this._a00=this._a48>>t-48,this._a16=0,this._a32=0,this._a48=0):t>=32?(t-=32,this._a00=65535&(this._a32>>t|this._a48<<16-t),this._a16=this._a48>>t&65535,this._a32=0,this._a48=0):t>=16?(t-=16,this._a00=65535&(this._a16>>t|this._a32<<16-t),this._a16=65535&(this._a32>>t|this._a48<<16-t),this._a32=this._a48>>t&65535,this._a48=0):(this._a00=65535&(this._a00>>t|this._a16<<16-t),this._a16=65535&(this._a16>>t|this._a32<<16-t),this._a32=65535&(this._a32>>t|this._a48<<16-t),this._a48=this._a48>>t&65535),this},h.prototype.shiftLeft=h.prototype.shiftl=function(t,r){return t%=64,t>=48?(this._a48=this._a00<<t-48,this._a32=0,this._a16=0,this._a00=0):t>=32?(t-=32,this._a48=this._a16<<t|this._a00>>16-t,this._a32=this._a00<<t&65535,this._a16=0,this._a00=0):t>=16?(t-=16,this._a48=this._a32<<t|this._a16>>16-t,this._a32=65535&(this._a16<<t|this._a00>>16-t),this._a16=this._a00<<t&65535,this._a00=0):(this._a48=this._a48<<t|this._a32>>16-t,this._a32=65535&(this._a32<<t|this._a16>>16-t),this._a16=65535&(this._a16<<t|this._a00>>16-t),this._a00=this._a00<<t&65535),r||(this._a48&=65535),this},h.prototype.rotateLeft=h.prototype.rotl=function(t){if(t%=64,0==t)return this;if(t>=32){var r=this._a00;if(this._a00=this._a32,this._a32=r,r=this._a48,this._a48=this._a16,this._a16=r,32==t)return this;t-=32}var i=this._a48<<16|this._a32,e=this._a16<<16|this._a00,o=i<<t|e>>>32-t,h=e<<t|i>>>32-t;return this._a00=65535&h,this._a16=h>>>16,this._a32=65535&o,this._a48=o>>>16,this},h.prototype.rotateRight=h.prototype.rotr=function(t){if(t%=64,0==t)return this;if(t>=32){var r=this._a00;if(this._a00=this._a32,this._a32=r,r=this._a48,this._a48=this._a16,this._a16=r,32==t)return this;t-=32}var i=this._a48<<16|this._a32,e=this._a16<<16|this._a00,o=i>>>t|e<<32-t,h=e>>>t|i<<32-t;return this._a00=65535&h,this._a16=h>>>16,this._a32=65535&o,this._a48=o>>>16,this},h.prototype.clone=function(){return new h(this._a00,this._a16,this._a32,this._a48)},i=[],e=function(){return h}.apply(r,i),!(void 0!==e&&(t.exports=e))}(this)},function(t,r,i){(function(r){function e(t){for(var r=[],i=0,e=t.length;e>i;i++){var o=t.charCodeAt(i);128>o?r.push(o):2048>o?r.push(192|o>>6,128|63&o):55296>o||o>=57344?r.push(224|o>>12,128|o>>6&63,128|63&o):(i++,o=65536+((1023&o)<<10|1023&t.charCodeAt(i)),r.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|63&o))}return new Uint8Array(r)}function o(){return 2==arguments.length?new o(arguments[1]).update(arguments[0]).digest():this instanceof o?void h.call(this,arguments[0]):new o(arguments[0])}function h(t){return this.seed=t instanceof n?t.clone():n(t),this.v1=this.seed.clone().add(s).add(a),this.v2=this.seed.clone().add(a),this.v3=this.seed.clone(),this.v4=this.seed.clone().subtract(s),this.total_len=0,this.memsize=0,this.memory=null,this}var n=i(1).UINT64,s=n("11400714785074694791"),a=n("14029467366897019727"),u=n("1609587929392839161"),f=n("9650029242287828579"),l=n("2870177450012600261");o.prototype.init=h,o.prototype.update=function(t){var i,o="string"==typeof t;o&&(t=e(t),o=!1,i=!0),"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&(i=!0,t=new Uint8Array(t));var h=0,u=t.length,f=h+u;if(0==u)return this;if(this.total_len+=u,0==this.memsize&&(this.memory=o?"":i?new Uint8Array(32):new r(32)),this.memsize+u<32)return o?this.memory+=t:i?this.memory.set(t.subarray(0,u),this.memsize):t.copy(this.memory,this.memsize,0,u),this.memsize+=u,this;if(this.memsize>0){o?this.memory+=t.slice(0,32-this.memsize):i?this.memory.set(t.subarray(0,32-this.memsize),this.memsize):t.copy(this.memory,this.memsize,0,32-this.memsize);var l=0;if(o){var c;c=n(this.memory.charCodeAt(l+1)<<8|this.memory.charCodeAt(l),this.memory.charCodeAt(l+3)<<8|this.memory.charCodeAt(l+2),this.memory.charCodeAt(l+5)<<8|this.memory.charCodeAt(l+4),this.memory.charCodeAt(l+7)<<8|this.memory.charCodeAt(l+6)),this.v1.add(c.multiply(a)).rotl(31).multiply(s),l+=8,c=n(this.memory.charCodeAt(l+1)<<8|this.memory.charCodeAt(l),this.memory.charCodeAt(l+3)<<8|this.memory.charCodeAt(l+2),this.memory.charCodeAt(l+5)<<8|this.memory.charCodeAt(l+4),this.memory.charCodeAt(l+7)<<8|this.memory.charCodeAt(l+6)),this.v2.add(c.multiply(a)).rotl(31).multiply(s),l+=8,c=n(this.memory.charCodeAt(l+1)<<8|this.memory.charCodeAt(l),this.memory.charCodeAt(l+3)<<8|this.memory.charCodeAt(l+2),this.memory.charCodeAt(l+5)<<8|this.memory.charCodeAt(l+4),this.memory.charCodeAt(l+7)<<8|this.memory.charCodeAt(l+6)),this.v3.add(c.multiply(a)).rotl(31).multiply(s),l+=8,c=n(this.memory.charCodeAt(l+1)<<8|this.memory.charCodeAt(l),this.memory.charCodeAt(l+3)<<8|this.memory.charCodeAt(l+2),this.memory.charCodeAt(l+5)<<8|this.memory.charCodeAt(l+4),this.memory.charCodeAt(l+7)<<8|this.memory.charCodeAt(l+6)),this.v4.add(c.multiply(a)).rotl(31).multiply(s)}else{var c;c=n(this.memory[l+1]<<8|this.memory[l],this.memory[l+3]<<8|this.memory[l+2],this.memory[l+5]<<8|this.memory[l+4],this.memory[l+7]<<8|this.memory[l+6]),this.v1.add(c.multiply(a)).rotl(31).multiply(s),l+=8,c=n(this.memory[l+1]<<8|this.memory[l],this.memory[l+3]<<8|this.memory[l+2],this.memory[l+5]<<8|this.memory[l+4],this.memory[l+7]<<8|this.memory[l+6]),this.v2.add(c.multiply(a)).rotl(31).multiply(s),l+=8,c=n(this.memory[l+1]<<8|this.memory[l],this.memory[l+3]<<8|this.memory[l+2],this.memory[l+5]<<8|this.memory[l+4],this.memory[l+7]<<8|this.memory[l+6]),this.v3.add(c.multiply(a)).rotl(31).multiply(s),l+=8,c=n(this.memory[l+1]<<8|this.memory[l],this.memory[l+3]<<8|this.memory[l+2],this.memory[l+5]<<8|this.memory[l+4],this.memory[l+7]<<8|this.memory[l+6]),this.v4.add(c.multiply(a)).rotl(31).multiply(s)}h+=32-this.memsize,this.memsize=0,o&&(this.memory="")}if(f-32>=h){var p=f-32;do{if(o){var c;c=n(t.charCodeAt(h+1)<<8|t.charCodeAt(h),t.charCodeAt(h+3)<<8|t.charCodeAt(h+2),t.charCodeAt(h+5)<<8|t.charCodeAt(h+4),t.charCodeAt(h+7)<<8|t.charCodeAt(h+6)),this.v1.add(c.multiply(a)).rotl(31).multiply(s),h+=8,c=n(t.charCodeAt(h+1)<<8|t.charCodeAt(h),t.charCodeAt(h+3)<<8|t.charCodeAt(h+2),t.charCodeAt(h+5)<<8|t.charCodeAt(h+4),t.charCodeAt(h+7)<<8|t.charCodeAt(h+6)),this.v2.add(c.multiply(a)).rotl(31).multiply(s),h+=8,c=n(t.charCodeAt(h+1)<<8|t.charCodeAt(h),t.charCodeAt(h+3)<<8|t.charCodeAt(h+2),t.charCodeAt(h+5)<<8|t.charCodeAt(h+4),t.charCodeAt(h+7)<<8|t.charCodeAt(h+6)),this.v3.add(c.multiply(a)).rotl(31).multiply(s),h+=8,c=n(t.charCodeAt(h+1)<<8|t.charCodeAt(h),t.charCodeAt(h+3)<<8|t.charCodeAt(h+2),t.charCodeAt(h+5)<<8|t.charCodeAt(h+4),t.charCodeAt(h+7)<<8|t.charCodeAt(h+6)),this.v4.add(c.multiply(a)).rotl(31).multiply(s)}else{var c;c=n(t[h+1]<<8|t[h],t[h+3]<<8|t[h+2],t[h+5]<<8|t[h+4],t[h+7]<<8|t[h+6]),this.v1.add(c.multiply(a)).rotl(31).multiply(s),h+=8,c=n(t[h+1]<<8|t[h],t[h+3]<<8|t[h+2],t[h+5]<<8|t[h+4],t[h+7]<<8|t[h+6]),this.v2.add(c.multiply(a)).rotl(31).multiply(s),h+=8,c=n(t[h+1]<<8|t[h],t[h+3]<<8|t[h+2],t[h+5]<<8|t[h+4],t[h+7]<<8|t[h+6]),this.v3.add(c.multiply(a)).rotl(31).multiply(s),h+=8,c=n(t[h+1]<<8|t[h],t[h+3]<<8|t[h+2],t[h+5]<<8|t[h+4],t[h+7]<<8|t[h+6]),this.v4.add(c.multiply(a)).rotl(31).multiply(s)}h+=8}while(p>=h)}return f>h&&(o?this.memory+=t.slice(h):i?this.memory.set(t.subarray(h,f),this.memsize):t.copy(this.memory,this.memsize,h,f),this.memsize=f-h),this},o.prototype.digest=function(){var t,r,i=this.memory,e="string"==typeof i,o=0,h=this.memsize,c=new n;for(this.total_len>=32?(t=this.v1.clone().rotl(1),t.add(this.v2.clone().rotl(7)),t.add(this.v3.clone().rotl(12)),t.add(this.v4.clone().rotl(18)),t.xor(this.v1.multiply(a).rotl(31).multiply(s)),t.multiply(s).add(f),t.xor(this.v2.multiply(a).rotl(31).multiply(s)),t.multiply(s).add(f),t.xor(this.v3.multiply(a).rotl(31).multiply(s)),t.multiply(s).add(f),t.xor(this.v4.multiply(a).rotl(31).multiply(s)),t.multiply(s).add(f)):t=this.seed.clone().add(l),t.add(c.fromNumber(this.total_len));h-8>=o;)e?c.fromBits(i.charCodeAt(o+1)<<8|i.charCodeAt(o),i.charCodeAt(o+3)<<8|i.charCodeAt(o+2),i.charCodeAt(o+5)<<8|i.charCodeAt(o+4),i.charCodeAt(o+7)<<8|i.charCodeAt(o+6)):c.fromBits(i[o+1]<<8|i[o],i[o+3]<<8|i[o+2],i[o+5]<<8|i[o+4],i[o+7]<<8|i[o+6]),c.multiply(a).rotl(31).multiply(s),t.xor(c).rotl(27).multiply(s).add(f),o+=8;for(h>=o+4&&(e?c.fromBits(i.charCodeAt(o+1)<<8|i.charCodeAt(o),i.charCodeAt(o+3)<<8|i.charCodeAt(o+2),0,0):c.fromBits(i[o+1]<<8|i[o],i[o+3]<<8|i[o+2],0,0),t.xor(c.multiply(s)).rotl(23).multiply(a).add(u),o+=4);h>o;)c.fromBits(e?i.charCodeAt(o++):i[o++],0,0,0),t.xor(c.multiply(l)).rotl(11).multiply(s);return r=t.clone().shiftRight(33),t.xor(r).multiply(a),r=t.clone().shiftRight(29),t.xor(r).multiply(u),r=t.clone().shiftRight(32),t.xor(r),this.init(this.seed),t},t.exports=o}).call(r,i(0).Buffer)}])});



"use strict";

/* global p5 */
/* exported preload, setup, draw, mouseClicked */

// Project base code provided by {amsmith,ikarth}@ucsc.edu


let tile_width_step_main; // A width step is half a tile's width
let tile_height_step_main; // A height step is half a tile's height

// Global variables. These will mostly be overwritten in setup().
let tile_rows, tile_columns;
let camera_offset;
let camera_velocity;

/////////////////////////////
// Transforms between coordinate systems
// These are actually slightly weirder than in full 3d...
/////////////////////////////
function worldToScreen([world_x, world_y], [camera_x, camera_y]) {
  let i = (world_x - world_y) * tile_width_step_main;
  let j = (world_x + world_y) * tile_height_step_main;
  return [i + camera_x, j + camera_y];
}

function worldToCamera([world_x, world_y], [camera_x, camera_y]) {
  let i = (world_x - world_y) * tile_width_step_main;
  let j = (world_x + world_y) * tile_height_step_main;
  return [i, j];
}

function tileRenderingOrder(offset) {
  return [offset[1] - offset[0], offset[0] + offset[1]];
}

function screenToWorld([screen_x, screen_y], [camera_x, camera_y]) {
  screen_x -= camera_x;
  screen_y -= camera_y;
  screen_x /= tile_width_step_main * 2;
  screen_y /= tile_height_step_main * 2;
  screen_y += 0.5;
  return [Math.floor(screen_y + screen_x), Math.floor(screen_y - screen_x)];
}

function cameraToWorldOffset([camera_x, camera_y]) {
  let world_x = camera_x / (tile_width_step_main * 2);
  let world_y = camera_y / (tile_height_step_main * 2);
  return { x: Math.round(world_x), y: Math.round(world_y) };
}

function worldOffsetToCamera([world_x, world_y]) {
  let camera_x = world_x * (tile_width_step_main * 2);
  let camera_y = world_y * (tile_height_step_main * 2);
  return new p5.Vector(camera_x, camera_y);
}

function preload() {
  if (window.p3_preload) {
    window.p3_preload();
  }
}

function setup() {
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
  canvas.parent("canvas-container");
  $(window).resize(function() {
    resizeScreen();
  });
  resizeScreen();


  camera_offset = new p5.Vector(-width /2, height / 2);
  camera_velocity = new p5.Vector(0, 0);

  if (window.p3_setup) {
    window.p3_setup();
  }

  let label = createP();
  label.html("World key: ");
  label.parent("container");

  let input = createInput("xyzzy");
  input.parent(label);
  input.input(() => {
    rebuildWorld(input.value());
  });

  createP("Arrow keys scroll. Clicking changes tiles.").parent("container");

  rebuildWorld(input.value());
}

function rebuildWorld(key) {
  if (window.p3_worldKeyChanged) {
    window.p3_worldKeyChanged(key);
  }
  tile_width_step_main = window.p3_tileWidth ? window.p3_tileWidth() : 32;
  tile_height_step_main = window.p3_tileHeight ? window.p3_tileHeight() : 14.5;
  tile_columns = Math.ceil(width / (tile_width_step_main * 2));
  tile_rows = Math.ceil(height / (tile_height_step_main * 2));
}

function mouseClicked() {
  let world_pos = screenToWorld(
    [0 - mouseX, mouseY],
    [camera_offset.x, camera_offset.y]
  );

  if (window.p3_tileClicked) {
    window.p3_tileClicked(world_pos[0], world_pos[1]);
  }
  return false;
}

function draw() {
  // Keyboard controls!
  if (keyIsDown(LEFT_ARROW)) {
    camera_velocity.x -= 1;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    camera_velocity.x += 1;
  }
  if (keyIsDown(DOWN_ARROW)) {
    camera_velocity.y -= 1;
  }
  if (keyIsDown(UP_ARROW)) {
    camera_velocity.y += 1;
  }

  let camera_delta = new p5.Vector(0, 0);
  camera_velocity.add(camera_delta);
  camera_offset.add(camera_velocity);
  camera_velocity.mult(0.95); // cheap easing
  if (camera_velocity.mag() < 0.01) {
    camera_velocity.setMag(0);
  }

  let world_pos = screenToWorld(
    [0 - mouseX, mouseY],
    [camera_offset.x, camera_offset.y]
  );
  let world_offset = cameraToWorldOffset([camera_offset.x, camera_offset.y]);

  background(100);

  if (window.p3_drawBefore) {
    window.p3_drawBefore();
  }

  let overdraw = 0.1;

  let y0 = Math.floor((0 - overdraw) * tile_rows);
  let y1 = Math.floor((1 + overdraw) * tile_rows);
  let x0 = Math.floor((0 - overdraw) * tile_columns);
  let x1 = Math.floor((1 + overdraw) * tile_columns);

  for (let y = y0; y < y1; y++) {
    for (let x = x0; x < x1; x++) {
      drawTile(tileRenderingOrder([x + world_offset.x, y - world_offset.y]), [
        camera_offset.x,
        camera_offset.y
      ]); // odd row
    }
    for (let x = x0; x < x1; x++) {
      drawTile(
        tileRenderingOrder([
          x + 0.5 + world_offset.x,
          y + 0.5 - world_offset.y
        ]),
        [camera_offset.x, camera_offset.y]
      ); // even rows are offset horizontally
    }
  }

  describeMouseTile(world_pos, [camera_offset.x, camera_offset.y]);

  if (window.p3_drawAfter) {
    window.p3_drawAfter();
  }
}

// Display a discription of the tile at world_x, world_y.
function describeMouseTile([world_x, world_y], [camera_x, camera_y]) {
  let [screen_x, screen_y] = worldToScreen(
    [world_x, world_y],
    [camera_x, camera_y]
  );
  drawTileDescription([world_x, world_y], [0 - screen_x, screen_y]);
}

function drawTileDescription([world_x, world_y], [screen_x, screen_y]) {
  push();
  translate(screen_x, screen_y);
  if (window.p3_drawSelectedTile) {
    window.p3_drawSelectedTile(world_x, world_y, screen_x, screen_y);
  }
  pop();
}

// Draw a tile, mostly by calling the user's drawing code.
function drawTile([world_x, world_y], [camera_x, camera_y]) {
  let [screen_x, screen_y] = worldToScreen(
    [world_x, world_y],
    [camera_x, camera_y]
  );
  push();
  translate(0 - screen_x, screen_y);
  if (window.p3_drawTile) {
    window.p3_drawTile(world_x, world_y, -screen_x, screen_y);
  }
  pop();
}





















/* global p5 */
/* exported preload, setup, draw, mouseClicked */

// Project base code provided by {amsmith,ikarth}@ucsc.edu
let canvasContainer;
var centerHorz, centerVert;

/////////////////////////////
// Transforms between coordinate systems
// These are actually slightly weirder than in full 3d...
/////////////////////////////
function worldToScreen([world_x, world_y], [camera_x, camera_y]) {
  let i = (world_x - world_y) * tile_width_step_main;
  let j = (world_x + world_y) * tile_height_step_main;
  return [i + camera_x, j + camera_y];
}

function worldToCamera([world_x, world_y], [camera_x, camera_y]) {
  let i = (world_x - world_y) * tile_width_step_main;
  let j = (world_x + world_y) * tile_height_step_main;
  return [i, j];
}

function tileRenderingOrder(offset) {
  return [offset[1] - offset[0], offset[0] + offset[1]];
}

function screenToWorld([screen_x, screen_y], [camera_x, camera_y]) {
  screen_x -= camera_x;
  screen_y -= camera_y;
  screen_x /= tile_width_step_main * 2;
  screen_y /= tile_height_step_main * 2;
  screen_y += 0.5;
  return [Math.floor(screen_y + screen_x), Math.floor(screen_y - screen_x)];
}

function cameraToWorldOffset([camera_x, camera_y]) {
  let world_x = camera_x / (tile_width_step_main * 2);
  let world_y = camera_y / (tile_height_step_main * 2);
  return { x: Math.round(world_x), y: Math.round(world_y) };
}

function worldOffsetToCamera([world_x, world_y]) {
  let camera_x = world_x * (tile_width_step_main * 2);
  let camera_y = world_y * (tile_height_step_main * 2);
  return new p5.Vector(camera_x, camera_y);
}

function preload() {
  if (window.p3_preload) {
    window.p3_preload();
  }
}

function resizeScreen() {
  centerHorz = canvasContainer.width() / 2; // Adjusted for drawing logic
  centerVert = canvasContainer.height() / 2; // Adjusted for drawing logic
  console.log("Resizing...");
  resizeCanvas(canvasContainer.width(), canvasContainer.height());
  // redrawCanvas(); // Redraw everything based on new size
}

const code = document.querySelector("#code");

function setup() {
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
  canvas.parent("canvas-container");
  // resize canvas is the page is resized

  $(window).resize(function() {
    resizeScreen();
  });
  resizeScreen();

  camera_offset = new p5.Vector(-width / 2, height / 2);
  camera_velocity = new p5.Vector(0, 0);

  if (window.p3_setup) {
    window.p3_setup();
  }

  //let label = createP();
  //label.html("World key: ");
  //label.parent("container");

  //input.parent(label);


  //createP("Arrow keys scroll. Clicking changes tiles.").parent("container");

  rebuildWorld(code.value);
}

code.addEventListener("input", (e) => {
  rebuildWorld(code.value);
});

function rebuildWorld(key) {
  if (window.p3_worldKeyChanged) {
    window.p3_worldKeyChanged(key);
  }
  tile_width_step_main = window.p3_tileWidth ? window.p3_tileWidth() : 32;
  tile_height_step_main = window.p3_tileHeight ? window.p3_tileHeight() : 14.5;
  tile_columns = Math.ceil(width / (tile_width_step_main * 2));
  tile_rows = Math.ceil(height / (tile_height_step_main * 2));
}

function mouseClicked() {
  let world_pos = screenToWorld(
    [0 - mouseX, mouseY],
    [camera_offset.x, camera_offset.y]
  );

  if (window.p3_tileClicked) {
    window.p3_tileClicked(world_pos[0], world_pos[1]);
  }
  return false;
}

function draw() {
  // Keyboard controls!
  if (keyIsDown(LEFT_ARROW)) {
    camera_velocity.x -= 1;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    camera_velocity.x += 1;
  }
  if (keyIsDown(DOWN_ARROW)) {
    camera_velocity.y -= 1;
  }
  if (keyIsDown(UP_ARROW)) {
    camera_velocity.y += 1;
  }

  let camera_delta = new p5.Vector(0, 0);
  camera_velocity.add(camera_delta);
  camera_offset.add(camera_velocity);
  camera_velocity.mult(0.95); // cheap easing
  if (camera_velocity.mag() < 0.01) {
    camera_velocity.setMag(0);
  }

  let world_pos = screenToWorld(
    [0 - mouseX, mouseY],
    [camera_offset.x, camera_offset.y]
  );
  let world_offset = cameraToWorldOffset([camera_offset.x, camera_offset.y]);

  background(100);

  if (window.p3_drawBefore) {
    window.p3_drawBefore();
  }

  let overdraw = 0.2;

  let y0 = Math.floor((0 - overdraw) * tile_rows);
  let y1 = Math.floor((1 + overdraw) * tile_rows);
  let x0 = Math.floor((0 - overdraw) * tile_columns);
  let x1 = Math.floor((1 + overdraw) * tile_columns);

  for (let y = y0; y < y1; y++) {
    for (let x = x0; x < x1; x++) {
      drawTile(tileRenderingOrder([x + world_offset.x, y - world_offset.y]), [
        camera_offset.x,
        camera_offset.y
      ]); // odd row
    }
    for (let x = x0; x < x1; x++) {
      drawTile(
        tileRenderingOrder([
          x + 0.5 + world_offset.x,
          y + 0.5 - world_offset.y
        ]),
        [camera_offset.x, camera_offset.y]
      ); // even rows are offset horizontally
    }
  }

  describeMouseTile(world_pos, [camera_offset.x, camera_offset.y]);

  if (window.p3_drawAfter) {
    window.p3_drawAfter();
  }
}

// Display a discription of the tile at world_x, world_y.
function describeMouseTile([world_x, world_y], [camera_x, camera_y]) {
  let [screen_x, screen_y] = worldToScreen(
    [world_x, world_y],
    [camera_x, camera_y]
  );
  drawTileDescription([world_x, world_y], [0 - screen_x, screen_y]);
}

function drawTileDescription([world_x, world_y], [screen_x, screen_y]) {
  push();
  translate(screen_x, screen_y);
  if (window.p3_drawSelectedTile) {
    window.p3_drawSelectedTile(world_x, world_y, screen_x, screen_y);
  }
  pop();
}

// Draw a tile, mostly by calling the user's drawing code.
function drawTile([world_x, world_y], [camera_x, camera_y]) {
  let [screen_x, screen_y] = worldToScreen(
    [world_x, world_y],
    [camera_x, camera_y]
  );
  push();
  translate(0 - screen_x, screen_y);
  if (window.p3_drawTile) {
    window.p3_drawTile(world_x, world_y, -screen_x, screen_y);
  }
  pop();
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//my_world//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





"use strict";

/* global XXH */
/* exported --
    p3_preload
    p3_setup
    p3_worldKeyChanged
    p3_tileWidth
    p3_tileHeight
    p3_tileClicked
    p3_drawBefore
    p3_drawTile
    p3_drawSelectedTile
    p3_drawAfter
*/

function p3_preload() {
}

function p3_setup() {
}

let worldSeed;

function p3_worldKeyChanged(key) {
  worldSeed = XXH.h32(key, 0);
  noiseSeed(worldSeed);
  randomSeed(worldSeed);
}

function p3_tileWidth() {
  return 12;
}
function p3_tileHeight() {
  return 6;
}

let [tw, th] = [p3_tileWidth(), p3_tileHeight()];

let clicks = {};


function p3_tileClicked(i, j) {
  let key = [i, j];
  clicks[key] = 1 + (clicks[key] | 0);
}

function p3_drawBefore() {}


function p3_drawTile(i, j) {
  let noiseLevel = noise(i/10, j/9);
  //let n = clicks[[i, j]];
  noStroke();
  
  let n = clicks[[i, j]] | 0;
  let topo = -200*noiseLevel - n * 12
  
  beginShape();
  vertex(-tw, 0);
  vertex(0, th);
  vertex(tw, 0);
  vertex(0, -th);
  endShape(CLOSE);
  
  line(tw, 0, tw, topo);
  

  //0, -th+topo == Utop
  //tw,0 == Bright
  //-tw, 0 == Bleft
  //0, -th == Btop
  //-tw, topo == Tleft
  //tw, topo == Tright
  //0, th+topo == Tbottom

  
  if (noiseLevel < 0.4){
    let tempTopo = -40;
    fill('#357d8c') // blue
    if (noiseLevel < 0.3){
      fill('#286b81') // light blue
    }
    quad(-tw, 0 + tempTopo, 0, th+ tempTopo, tw, 0+ tempTopo, 0, -th+ tempTopo);
    quad(0, th+ tempTopo, tw, 0 + tempTopo, tw, 0,0, th); //Tbottom, TRight, Bright, Bbottom
    quad (0, th+tempTopo, -tw, tempTopo, -tw, 0, 0, th);
  }
  else if (noiseLevel >= 0.7) {
    let tempTopo = topo * 1.0;
    fill('#f4fafc'); //snow top
    quad(-tw, 0 + tempTopo, 0, th+ tempTopo, tw, 0+ tempTopo, 0, -th+ tempTopo);
    fill('#515151'); // stone right
    //sides
    quad(0, th+ tempTopo, tw, 0 + tempTopo, tw, 0,0, th); // Right side
    fill('#676767'); // stone left
    quad (0, th+tempTopo, -tw, tempTopo, -tw, 0, 0, th); // left side
  }
  else if (0.7 > noiseLevel && noiseLevel > 0.65){
    let tempTopo = topo * 0.8;
    fill('#717171'); //sand top
    quad(-tw, 0 + tempTopo, 0, th+ tempTopo, tw, 0+ tempTopo, 0, -th+ tempTopo);
    fill('#515151'); // sand sides
    //sides
    quad(0, th+ tempTopo, tw, 0 + tempTopo, tw, 0,0, th); 
    fill('#676767'); // sand left
    quad (0, th+tempTopo, -tw, tempTopo, -tw, 0, 0, th);
  }
  else if (0.65 > noiseLevel && noiseLevel > 0.50){
    let tempTopo = topo * 0.5;
    fill('#6ea03f'); //grass top
    quad(-tw, 0 + tempTopo, 0, th+ tempTopo, tw, 0+ tempTopo, 0, -th+ tempTopo);
    fill('#6e5038'); // dirt right
    //sides
    quad(0, th+ tempTopo, tw, 0 + tempTopo, tw, 0,0, th); 
    fill('#7a5e46'); // dirt left
    quad (0, th+tempTopo, -tw, tempTopo, -tw, 0, 0, th);
  }
  else if (0.50 > noiseLevel && noiseLevel > 0.45){
    let tempTopo = topo * 0.5;
    fill('#dcd6aa'); //sand top
    quad(-tw, 0 + tempTopo, 0, th+ tempTopo, tw, 0+ tempTopo, 0, -th+ tempTopo);
    fill('#928e7b'); // sand sides
    //sides
    quad(0, th+ tempTopo, tw, 0 + tempTopo, tw, 0,0, th); //Tbottom, TRight, Bright, Bbottom
    fill('#aba17b'); // sand left
    quad (0, th+tempTopo, -tw, tempTopo, -tw, 0, 0, th);
  }
}

function p3_drawSelectedTile(i, j) {
  noFill();
  stroke(0, 255, 0, 128);

  beginShape();
  vertex(-tw, 0);
  vertex(0, th);
  vertex(tw, 0);
  vertex(0, -th);
  endShape(CLOSE);

  noStroke();
  fill(0);
  text("tile " + [i, j], 0, 0);
}

function p3_drawAfter() {}
