(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{378:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"django-aggregation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#django-aggregation"}},[t._v("#")]),t._v(" Django Aggregation")]),t._v(" "),s("blockquote",[s("p",[t._v("ag·gre·ga·tion [æ̀ɡriɡéiʃən]\n명사")]),t._v(" "),s("ol",[s("li",[t._v("[U] 집합, 집성(集成), 집적(集積)")])])]),t._v(" "),s("h2",{attrs:{id:"예제로-쓸-모델"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제로-쓸-모델"}},[t._v("#")]),t._v(" 예제로 쓸 모델")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" models\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Author")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 작가")]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IntegerField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Publisher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 출판사")]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    num_awards "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IntegerField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Book")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 책")]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    pages "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IntegerField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    price "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DecimalField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_digits"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decimal_places"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    rating "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FloatField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    authors "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ManyToManyField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Author"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 다수 작가")]),t._v("\n    publisher "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ForeignKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Publisher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 한 출판사")]),t._v("\n    pubdate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DateField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 상점")]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    books "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ManyToManyField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Book"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 다수 책")]),t._v("\n    registered_users "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PositiveIntegerField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"cheat-sheet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cheat-sheet"}},[t._v("#")]),t._v(" Cheat Sheet")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 책 다 세기")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Book"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2452")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 출판사가 지앤선인 책들 세기")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Book"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publisher__name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'지앤선'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("73")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 모든 책들의 가격 평균")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Avg\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Book"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aggregate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Avg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price__avg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("34.35")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 모든 책들 중 가장 비싼 가격")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Book"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aggregate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price__max'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  Decimal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'81.20'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 'price_per_page'란 이름으로, 장당 가격을 구한다.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Book"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aggregate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("    price_per_page"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("F"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("F"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" output_field"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("FloatField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price_per_page'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4470664529184653")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# All the following queries involve traversing the Book<->Publisher")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# foreign key relationship backwards.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 출판사마다 reverse해서 book을 가져오고, 그거 갯수 샌다.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" pubs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Publisher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num_books"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'book'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" pubs\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Publisher BaloneyPress"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Publisher SalamiPress"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" pubs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num_books\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("73")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 출판사 reverse book 갯수가 많은 탑 5개")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The top 5 publishers, in order by number of books.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" pubs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Publisher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num_books"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'book'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order_by"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-num_books'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" pubs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num_books\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1323")]),t._v("\n")])])]),s("h2",{attrs:{id:"쿼리셋에-aggreates하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#쿼리셋에-aggreates하기"}},[t._v("#")]),t._v(" 쿼리셋에 aggreates하기")]),t._v(" "),s("p",[t._v("장고에선 두 가지 방식으로 aggreates를 만들 수 있다.")]),t._v(" "),s("h3",{attrs:{id:"_1-전체-쿼리셋에-summary-values-만들기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-전체-쿼리셋에-summary-values-만들기"}},[t._v("#")]),t._v(" 1. 전체 쿼리셋에 Summary values 만들기")]),t._v(" "),s("p",[t._v("e.g. 모든 책에 대한 평균 가격 구하기")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Book"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aggregate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Avg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price__avg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("34.35")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Book"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aggregate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("average_price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Avg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'average_price'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("34.35")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 이름 명시")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Book"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aggregate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Avg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Min"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price__avg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("34.35")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price__max'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Decimal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'81.20'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'price__min'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Decimal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12.99'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 다중 반환")]),t._v("\n")])])]),s("p",[t._v("aggreate()는 Queryset의 Terminal clause로, 키-밸류 쌍을 반환한다.")]),t._v(" "),s("h3",{attrs:{id:"_2-쿼리셋-각-요소에-aggregates하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-쿼리셋-각-요소에-aggregates하기"}},[t._v("#")]),t._v(" 2. 쿼리셋 각 요소에 aggregates하기")]),t._v(" "),s("p",[t._v("e.g. 책 리스트가 있을 때, 각 책마다 저자가 몇 명 있는지 계산.\n이는 "),s("code",[t._v("annotate()")]),t._v("으로 만들 수 있다. "),s("code",[t._v("aggreate()")]),t._v("랑은 다르게 terminal clause가 아니고 QuerySet을 반환한다.\nBook과 Authors는 M2M 관계이다.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 책마다 저자가 몇 명 있는지 계산된 책 리스트 반환")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" q "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Book"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authors'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Book"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" The Definitive Guide to Django"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authors__count\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 이름 지어주기")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" q "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Book"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num_authors"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authors'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num_authors\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),s("h2",{attrs:{id:"joins-and-aggregates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#joins-and-aggregates"}},[t._v("#")]),t._v(" Joins and aggregates")]),t._v(" "),s("p",[t._v("Store마다 책들의 min, max 가격 표기\nStore에 M2M으로 연결되어있는 books를 찾아, books모델의 price를 비교.\n더블 언더스코어로 관계된 모델을 찾아갈 수 있다.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("min_price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Min"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'books__price'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max_price"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'books__price'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"역참조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#역참조"}},[t._v("#")]),t._v(" 역참조")]),t._v(" "),s("p",[t._v("Publisher엔 Book이 거꾸로 Foriegn key로 연결되어있다. Lowercase로 역참조를 할 수 있다.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Publisher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'book'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"refer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refer"}},[t._v("#")]),t._v(" Refer")]),t._v(" "),s("p",[t._v("https://docs.djangoproject.com/en/1.9/topics/db/aggregation/\nhttp://raccoonyy.github.io/conditional-annotate-with-django-query/\nhttp://raccoonyy.github.io/django-annotate-and-aggregate-like-as-excel/")])])}),[],!1,null,null,null);s.default=e.exports}}]);