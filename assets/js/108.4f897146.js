(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{407:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"chrome-extensions-만들기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chrome-extensions-만들기"}},[t._v("#")]),t._v(" Chrome Extensions 만들기")]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("ul",[s("li",[t._v("HTML, CSS, JS, Images등 필요한 것을 모아놓은 압축된 번들.")]),t._v(" "),s("li",[t._v("구글 크롬 브라우저에 기능 추가")]),t._v(" "),s("li",[t._v("브라우저가 웹 페이지에 제공하는 모든 API 사용가능. (XMLHttpRequest, JSON, HTML 등...)")]),t._v(" "),s("li",[t._v("웹페이지나 서버랑 "),s("code",[t._v("content script")]),t._v("나 "),s("code",[t._v("cross-origin XMLHttpRequests")]),t._v("로 통신가능.")]),t._v(" "),s("li",[t._v("브라우저 기능들이랑 상호작용할 수도 있다(e.g. 북마크, 탭)")])]),t._v(" "),s("h2",{attrs:{id:"files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[t._v("#")]),t._v(" Files")]),t._v(" "),s("p",[s("code",[t._v("manifest.json")]),t._v(". 익스텐션의 정보.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Extension"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Gets information from Google."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"icons"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"128"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icon_128.png"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"background"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"persistent"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bg.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"permissions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://*.google.com/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://*.google.com/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"browser_action"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"default_title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"default_icon"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icon_19.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"default_popup"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"popup.html"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"architecture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[t._v("#")]),t._v(" Architecture")]),t._v(" "),s("p",[t._v("다수의 extensions들은 "),s("code",[t._v("background page")]),t._v("를 가진다. 이는 익스텐션의 메인 로직을 담는 보이지 않는 페이지다.\n혹은 익스텐션의 UI를 보여주는 다른 페이지를 가질 수도 있다.")]),t._v(" "),s("ul",[s("li",[t._v("Background page\n"),s("ul",[s("li",[s("code",[t._v("background.html")]),t._v(". 익스텐션을 컨트롤 할 수 있는 js를 넣을 수 있다. 두가지 종류가 있다.")]),t._v(" "),s("li",[s("ol",[s("li",[t._v("persistent background pages: 항상 열려있다.")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("event pages: 필요할 때 열리고 닫힌다.")])])])])]),t._v(" "),s("li",[t._v("UI pages\n"),s("ul",[s("li",[s("code",[t._v("tabs.create")]),t._v("이나 "),s("code",[t._v("window.open()")]),t._v("으로 다른 HTML파일을 보여줄 수 있다.")]),t._v(" "),s("li",[t._v("익스텐션 내부의 HTML페이지는 다른 DOM들을 완벽히 접근할 수 있다.")])])]),t._v(" "),s("li",[t._v("Content scripts\n"),s("ul",[s("li",[t._v("익스텐션이 웹 페이지랑 인터랙트하기 위해 필요. content script는 loaded page의 일부지, 익스텐션의 일부가 아니다.")]),t._v(" "),s("li",[t._v("브라우저가 방문한 웹페이지의 디테일 정보를 읽을 수 있다. DOM을 읽을 수 있고 수정도 할 수 있다.")]),t._v(" "),s("li",[t._v("하지만 부모 익스텐션의 백그라우드 페이지 돔은 수정하지 못한다.")])])])]),t._v(" "),s("h2",{attrs:{id:"chrome-api들-사용하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chrome-api들-사용하기"}},[t._v("#")]),t._v(" chrome.* API들 사용하기")]),t._v(" "),s("ul",[s("li",[t._v("Chrome-only API들을 사용할 수 있다. (e.g. window.open()말고 tabs.create메서드를 사용 가능)")]),t._v(" "),s("li",[t._v("보통 비동기다. 끝나기 전까지 기다리지 않음. 결과를 알고싶다면 콜백 함수를 넘겨야 한다.\n"),s("ul",[s("li",[s("code",[t._v("chrome.tabs.create(object createProperties, function callback)")])])])]),t._v(" "),s("li",[t._v("동기 메서들은 콜백이 없다. 보통 return type이 있다.\n"),s("ul",[s("li",[s("code",[t._v("string chrome.runtime.getURL()")])])])])]),t._v(" "),s("h3",{attrs:{id:"예제-콜백-사용하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제-콜백-사용하기"}},[t._v("#")]),t._v(" 예제 - 콜백 사용하기")]),t._v(" "),s("p",[t._v("현재 선택된 탭을 새로운 URL로 가고 싶을 때, 현재 탭의 아이디를 알아내고("),s("code",[t._v("tabs.query")]),t._v("사용), 새로운 URL로 가야할텐데("),s("code",[t._v("tabs.update")]),t._v("사용), 비동기라서 아래 함수는 작동하지 않는다.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 잘못된 코드")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tab "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'active'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//WRONG!!!")]),t._v("\nchrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("newUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("someOtherFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 맞는 코드")]),t._v("\nchrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'active'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tabs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tabs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tabs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" newUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("someOtherFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"데이터-저장하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#데이터-저장하기"}},[t._v("#")]),t._v(" 데이터 저장하기")]),t._v(" "),s("p",[s("code",[t._v("storage API")]),t._v("나 HTML5 "),s("code",[t._v("web storage API")]),t._v("(로컬스토리지 등...)에 데이터를 저장할 수 있다. 혹은 서버에 저장할 수도 있다.")]),t._v(" "),s("p",[t._v("익명 모드 브라우저로 하면 저장할 수 없다. 고려해야 함.")]),t._v(" "),s("h2",{attrs:{id:"refer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refer"}},[t._v("#")]),t._v(" Refer")]),t._v(" "),s("p",[t._v("https://developer.chrome.com/extensions/overview\nhttps://developer.chrome.com/extensions/samples#email-this-page-(by-google)")])])}),[],!1,null,null,null);s.default=r.exports}}]);