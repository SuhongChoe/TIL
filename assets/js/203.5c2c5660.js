(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{503:function(t,a,s){"use strict";s.r(a);var r=s(14),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"단축-평가-값-short-circuit-evaluation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단축-평가-값-short-circuit-evaluation"}},[t._v("#")]),t._v(" 단축 평가 값 (Short-circuit Evaluation)")]),t._v(" "),a("blockquote",[a("p",[t._v("논리 연산자들은 왼쪽->오른쪽 순으로 실행됨.\n이 연산자들은 결과를 얻게 되는 순간 단축 평가(즉, 평가의 중단)를 시행.\nfalse && 표현식 -> 이미 false발견\ntrue || 표현식 -> 이미 true\n그러나 그 결과값은 (반드시 true 또는 false가 아니라) 평가를 중단하게 된 계기가 된 값을 리턴한다.")])]),t._v(" "),a("h2",{attrs:{id:"예제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예제"}},[t._v("#")]),t._v(" 예제")]),t._v(" "),a("h3",{attrs:{id:"ex-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ex-1"}},[t._v("#")]),t._v(" ex.1")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" me "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"바보"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" you "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("me "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"천재"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"바보"')]),t._v("\n")])])]),a("p",[t._v("내용을 가진 문자열은 true니까 you에 me값이 대입된다.")]),t._v(" "),a("h3",{attrs:{id:"ex-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ex-2"}},[t._v("#")]),t._v(" ex.2")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" me "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" you "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("me "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"천재"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"천재"')]),t._v("\n")])])]),a("h3",{attrs:{id:"ex-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ex-3"}},[t._v("#")]),t._v(" ex.3")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" me "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" you "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("me "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"천재"')]),t._v("\n")])])]),a("p",[t._v("me가 값을 가지고 있지 않은 경우엔 빈 객체 생성")]),t._v(" "),a("h3",{attrs:{id:"ex-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ex-4"}},[t._v("#")]),t._v(" ex.4")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("vA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvC "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("vB"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("vC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//do something")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("세 값 중 어느 하나라도 true로 취급될 수 있으면 if내의 코드가 실행.")]),t._v(" "),a("li",[t._v("경험 많은 개발자들은 그래서 비용이 높은 코드는 가능한 한 나중에 평가되도록 작성한다.")]),t._v(" "),a("li",[t._v("OR연산자를 사용할 땐 true를 리턴할 가능성이 높은 코드를 첫 번째 조건으로 작성하고,")]),t._v(" "),a("li",[t._v("AND연산자에선 false를 첫번째로.")])]),t._v(" "),a("h2",{attrs:{id:"참고"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#참고"}},[t._v("#")]),t._v(" 참고")]),t._v(" "),a("p",[t._v("인터랙티브 프론트엔드 웹 개발 교과서 자바스크립트&제이쿼리 (제이펍) p.169")])])}),[],!1,null,null,null);a.default=e.exports}}]);