(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{514:function(a,t,s){"use strict";s.r(t);var r=s(14),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_2020-09"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2020-09"}},[a._v("#")]),a._v(" 2020.09")]),a._v(" "),t("h2",{attrs:{id:"_0903"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0903"}},[a._v("#")]),a._v(" 0903")]),a._v(" "),t("h3",{attrs:{id:"javascript-번들러"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript-번들러"}},[a._v("#")]),a._v(" JavaScript 번들러")]),a._v(" "),t("p",[a._v("https://wormwlrm.github.io/2020/08/12/History-of-JavaScript-Modules-and-Bundlers.html")]),a._v(" "),t("ul",[t("li",[a._v("재밌는 주제 많네... 시간내서 조금씩 보자 https://web.dev/live/")])]),a._v(" "),t("h4",{attrs:{id:"번들러-종류"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#번들러-종류"}},[a._v("#")]),a._v(" 번들러 종류")]),a._v(" "),t("ul",[t("li",[a._v("ES6 전\n"),t("ul",[t("li",[a._v("CommonJS")]),a._v(" "),t("li",[a._v("AMD")]),a._v(" "),t("li",[a._v("UMD")]),a._v(" "),t("li",[a._v("node.js")]),a._v(" "),t("li",[a._v("Browserify")]),a._v(" "),t("li",[a._v("RequireJS")])])]),a._v(" "),t("li",[a._v("ES6 이후\n"),t("ul",[t("li",[a._v("Grunt, Gulp")]),a._v(" "),t("li",[a._v("Google Closure Compiler")]),a._v(" "),t("li",[a._v("Webpack")]),a._v(" "),t("li",[a._v("Babel")]),a._v(" "),t("li",[a._v("Rollup")]),a._v(" "),t("li",[a._v("Parcel")]),a._v(" "),t("li",[a._v("TypeScript, CoffeScript")]),a._v(" "),t("li",[a._v("SystemJS")])])])]),a._v(" "),t("h4",{attrs:{id:"모듈-시스템"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#모듈-시스템"}},[a._v("#")]),a._v(" 모듈 시스템")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<html>\n\n\n  <script src="/src/foo.js"><\/script>\n  <script src="/src/bar.js"><\/script>\n</html>\n')])])]),t("ul",[t("li",[a._v("문제: 스크립트를 로드한 전역 컨텍스트에서 각 모듈간의 충돌 발생. 같은 변수명 사용 등. 로드 순서도 중요해져부림.")]),a._v(" "),t("li",[a._v("08년도에 V8엔진(브라우저 외부에서도 JS실행 가능)공개되고, 이를 이용해 서버사이드에서 JS활용하자는 아이디어 제시. 그러다보니 모듈화 필요성 부각. 09년 기점으로 모듈 표준화하기 위한 움직임.\n"),t("ul",[t("li",[a._v("CommonJS\n"),t("ul",[t("li",[a._v("JS")])])]),a._v(" "),t("li",[a._v("AMD(Asynchronous Module Definition)")])])])]),a._v(" "),t("h2",{attrs:{id:"_0915"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0915"}},[a._v("#")]),a._v(" 0915")]),a._v(" "),t("p",[a._v("master, develop/ 빼고 모든 브랜치 제거")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 머지된 친구들만 날리고 싶다면")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--merged")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\*"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" master "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" develop "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 머지여부 상관없이 날리고 싶다면")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\*"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" master "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" develop "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);