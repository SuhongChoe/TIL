(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{447:function(t,s,r){"use strict";r.r(s);var a=r(14),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"enhanced-ecommerce-in-tagmanager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enhanced-ecommerce-in-tagmanager"}},[t._v("#")]),t._v(" Enhanced ecommerce in tagmanager")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.google.com/tag-manager/enhanced-ecommerce",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식 문서"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"enhanced-ecommerce-작동시키기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enhanced-ecommerce-작동시키기"}},[t._v("#")]),t._v(" Enhanced Ecommerce 작동시키기")]),t._v(" "),s("p",[t._v("두 가지 방법이 있다.")]),t._v(" "),s("ol",[s("li",[t._v("Data Layer로 넣기 (권장됨)")]),t._v(" "),s("li",[t._v("커스텀 자바스크립트 매크로로 넣기")])]),t._v(" "),s("h2",{attrs:{id:"제품-impression-측정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#제품-impression-측정"}},[t._v("#")]),t._v(" 제품 Impression 측정")]),t._v(" "),s("ul",[s("li",[t._v("측정: impressions")]),t._v(" "),s("li",[t._v("데이터타입: "),s("code",[t._v("impressionFieldObjects")]),t._v("의 배열")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Measures product impressions and also tracks a standard")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pageview for the tag configuration.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Product impressions are sent by pushing an impressions object")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// containing one or more impressionFieldObjects.")]),t._v("\ndataLayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'ecommerce'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'currencyCode'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EUR'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Local currency is optional.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'impressions'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Triblend Android T-Shirt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Name or ID is required.")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12345'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'price'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'15.25'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'brand'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Google'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'category'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Apparel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'variant'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Gray'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'list'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Search Results'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'position'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Donut Friday Scented T-Shirt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'67890'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'price'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'33.75'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'brand'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Google'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'category'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Apparel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'variant'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Black'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'list'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Search Results'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'position'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"refer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refer"}},[t._v("#")]),t._v(" Refer")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://youtu.be/GM2L4tp6wd4?list=PLXIUlXaKkxrx_--L98C11vErhnW8AB5XB",target:"_blank",rel:"noopener noreferrer"}},[t._v("Magento Google Tag Manager Add To Cart Tag"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"http://www.simoahava.com/analytics/ecommerce-tips-google-tag-manager/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ecommerce tips google tag-manager"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"http://www.simoahava.com/analytics/persist-datalayer-google-tag-manager/",target:"_blank",rel:"noopener noreferrer"}},[t._v("persist-datalayer-google-tag-manager"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);