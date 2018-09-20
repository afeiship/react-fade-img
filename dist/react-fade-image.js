!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react","react-dom"],t):"object"==typeof exports?exports.ReactFadeImage=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):e.ReactFadeImage=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e["react-dom"])}(this,function(e,t,o,r,n,a){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="/",t(0)}([function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),a=r(n);t.default=a.default},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var o={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,s,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},p=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),f=o(7),d=r(f),y=o(8),b=(r(y),o(6)),h=r(b),m=o(3),A=r(m),N=o(4),g=r(N),j=o(5),v=(r(j),o(2)),E=r(v),z="data-loaded",O="true",I=(s=u=function(e){function t(){var e,o,r,n;a(this,t);for(var i=arguments.length,u=Array(i),s=0;s<i;s++)u[s]=arguments[s];return o=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={loaded:!1},r._onLoad=function(e){var t=r.props,o=t.lazy,n=t.onChange;o||r.setState({loaded:!0},function(){n(e)})},n=o,c(r,n)}return i(t,e),p(t,[{key:"shouldComponentUpdate",value:function(){return!(this.props.once&&this.loaded)}},{key:"render",value:function(){var e=this,t=this.props,o=(t.once,t.lazy,t.src,t.className),r=n(t,["once","lazy","src","className"]),a=this.state.loaded;return d.default.createElement("img",l({ref:function(t){return e.root=t},onLoad:this._onLoad,"data-loaded":a,className:(0,A.default)("react-fade-image",o),src:E.default},this.src,r))}},{key:"src",get:function(){var e=this.props,t=e.lazy,o=e.src;return t?{"data-src":o}:{src:o}}},{key:"loaded",get:function(){return this.state.loaded||this.root.getAttribute(z)===O}}]),t}(f.Component),u.propTypes={className:h.default.string,lazy:h.default.bool,once:h.default.bool,onChange:h.default.func},u.defaultProps={lazy:!1,once:!1,onChange:g.default},s);t.default=I},function(e,t){e.exports="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDdFMzQ0NzlCNDlEMTFFOEI5RTVBNjRGNzY2NTE3NDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDdFMzQ0N0FCNDlEMTFFOEI5RTVBNjRGNzY2NTE3NDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowN0UzNDQ3N0I0OUQxMUU4QjlFNUE2NEY3NjY1MTc0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowN0UzNDQ3OEI0OUQxMUU4QjlFNUE2NEY3NjY1MTc0NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="},function(t,o){t.exports=e},function(e,o){e.exports=t},function(e,t){e.exports=o},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=a}])});
//# sourceMappingURL=react-fade-image.js.map