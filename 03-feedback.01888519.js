function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,f,u,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(w,t),l?b(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function w(){var e=p();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return d?m(n,i-(e-c)):n}(e))}function O(e){return f=void 0,v&&o?b(e):(o=r=void 0,a)}function S(){var e=p(),n=h(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(d)return f=setTimeout(w,t),b(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},S.flush=function(){return void 0===f?a:O(p())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b={},j=document.querySelector(".feedback-form"),h=document.querySelector(".feedback-form input"),w=document.querySelector(".feedback-form textarea");j.addEventListener("input",e(t)((function(e){b[e.target.name]=e.target.value,localFormData=JSON.stringify(b),localStorage.setItem("feedback-form-state",localFormData),console.log(b)}),500)),function(){{const e=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(e),h.value=e.email,w.value=e.message}}();
//# sourceMappingURL=03-feedback.01888519.js.map
