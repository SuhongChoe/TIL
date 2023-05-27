(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{458:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"better-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#better-code"}},[t._v("#")]),t._v(" Better code")]),t._v(" "),a("p",[t._v("with Grokking simplicity (단순에 대한 완전한 이해)")]),t._v(" "),a("h2",{attrs:{id:"머리말"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#머리말"}},[t._v("#")]),t._v(" 머리말")]),t._v(" "),a("ul",[a("li",[t._v("프로그래밍 스타일의 진화: 구조적 -> 객체지향 -> 함수형")]),t._v(" "),a("li",[t._v("예전엔 코드짜기 전에 순서도 그림: but 스파게티코드가 만들어짐\n"),a("ul",[a("li",[t._v("'제어 흐름'(if/else, switch, while, for )을 구성하는 기술도 발전합니당")]),t._v(" "),a("li",[t._v("이 책에선 새로운 다이어그램/냄새/발견법 등 제시할거임")])])]),t._v(" "),a("li",[t._v("함수형\n"),a("ul",[a("li",[t._v("'부작용 없음'이 다가 X(현실적이지 않고 제대로 이해한 말이 아님)\n"),a("ul",[a("li",[t._v("idea 1: 외부세계에 영향미치지않는 작업 / 실행시마다 다른결과&약간부작용 작업 두개를 구분하자.")]),t._v(" "),a("li",[t._v("idea 2: 항목별로가 아닌 한번에 데이터 모음을 처리하는 기술 집합. 이는 부작용 없이 항목을 독립적으로 처리할 수 있을때 가장 효과적.")])])])])])]),t._v(" "),a("h2",{attrs:{id:"ch-4-action에서-calculation-뽑아내기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ch-4-action에서-calculation-뽑아내기"}},[t._v("#")]),t._v(" Ch.4 Action에서 Calculation 뽑아내기")]),t._v(" "),a("ul",[a("li",[t._v("Testable 코드(=재사용 가능한 코드)의 조건\n"),a("ul",[a("li",[t._v("DOM업뎃에서 비즈니스 규칙 분리")]),t._v(" "),a("li",[t._v("공유 변수(e.g. 전역변수) 의존")]),t._v(" "),a("li",[t._v("답이 어딘가(DOM 등)에 있다 가정하지 말아라")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("재사용이 가능하려면 전역변수 의존하면 안되는군. 그게 순수한것.\nReact에서 state도 일종의 전역변수같다 코드를 implicit하게 만드는..")])]),t._v(" "),a("ul",[a("li",[t._v("함수에서 코드들을 Implicit한지 Explicit한지, 그리고 Input인지 Output인지 구분하자.\n"),a("ul",[a("li",[t._v("Implicit한 input (암묵적인 인자 - e.g. global변수 접근), output(암묵적인 아웃풋 - e.g. 함수 중간에 들어가는 console.log, 데이터베이스 접근 등)이 함수를 Action으로 만든다.\n"),a("ul",[a("li",[t._v("이 input은 argument로, output은 return value로 변경하자")]),t._v(" "),a("li",[t._v("함수형 세계에서는 이들(implicit input/output)을 "),a("code",[t._v("Side effects")]),t._v("라 부른다. Main effect가 아니잖어 ㅋ")])])])])]),t._v(" "),a("li",[t._v("요약: 암시적 입력 및 출력 최소화")])]),t._v(" "),a("blockquote",[a("p",[t._v("리팩터링 책에서 이야기하는거랑 비슷하군 ㅎ")])]),t._v(" "),a("h2",{attrs:{id:"ch-5-action-디자인-개선"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ch-5-action-디자인-개선"}},[t._v("#")]),t._v(" Ch.5 Action 디자인 개선")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Bad smell")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 무료배송 여부를 알고싶은데 총금액, 상품금액을 인자로 받는게 이상함 (코드스멜이 남)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gets_free_shipping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item_price")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item_price "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" total "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Good")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_free_shipping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("이렇게 변경하는건 '리팩터링'이라고 하면 안됨. 행동 자체를 바꾸는거니.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Code smell: 카트의 구조, 카트아이템의 구조 모두를 알고있어야 하는 함수")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" price")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" new_cart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  new_cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("price")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" new_cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 개선: make_cart_item는 카트아이템 구조만, add_item은 카트구조만 알아도 된다. 그럼 각각 독립적으로 발전시키고 개발할 수 있다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make_cart_item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" price")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("price")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" new_cart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  new_cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" new_cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Code smell: 장바구니에 구체적인 변수이름")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" new_cart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  new_cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" new_cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 개선: 일반적인 이름")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_element_last")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" elem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" new_array "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  new_array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" new_array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("코드를 슥 따라갔을 때 기존 배경지식 없이 내가 보고 있는 코드만으로도 어떤 일을 하는지 이해할 수 있어야겠구먼")])]),t._v(" "),a("ul",[a("li",[t._v("요약: 최소한의 데이터 구조만을 아는 함수를 만들자. 그래야 더 재사용 가능. 단일 책임!")])]),t._v(" "),a("h2",{attrs:{id:"ch-6-가변언어에서-불변성-immutability-지키기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ch-6-가변언어에서-불변성-immutability-지키기"}},[t._v("#")]),t._v(" Ch.6 가변언어에서 불변성(immutability) 지키기")]),t._v(" "),a("ul",[a("li",[t._v("Q. 면접질문: 왜 가변성보다 불변성이 좋은가요?")]),t._v(" "),a("li",[t._v("copy-on-write 법칙: 원본수정 대신 복사본을 만들어 수정하고 return.")]),t._v(" "),a("li",[t._v("함수형 프로그래밍에서 immutable이 필요한 이유: 변경가능한 데이터에 대해 Calculation한다는건 말이 안됨.")])]),t._v(" "),a("h2",{attrs:{id:"ch-7-신뢰불가한-코드-e-g-변경어려운-레거시-외부api콜-에서-imuutablity-지키기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ch-7-신뢰불가한-코드-e-g-변경어려운-레거시-외부api콜-에서-imuutablity-지키기"}},[t._v("#")]),t._v(" Ch.7 신뢰불가한 코드(e.g. 변경어려운 레거시, 외부API콜)에서 imuutablity 지키기")]),t._v(" "),a("ul",[a("li",[t._v("신뢰불가한 코드를 한번 deepCopy본을 만들어서 세이프존을 구성 (스냅샷 뜨는 느낌) (defensive copy)\n"),a("ul",[a("li",[t._v("참고: deepCopy vs shallowCopy:")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("payrollCalcSafe 란 네이밍 싫네. 차라리 기존코드를 payrollCalcUnsafe라고 하지.")])])])}),[],!1,null,null,null);a.default=e.exports}}]);