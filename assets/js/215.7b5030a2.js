(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{516:function(a,t,s){"use strict";s.r(t);var v=s(14),_=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_2020-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2020-10"}},[a._v("#")]),a._v(" 2020.10")]),a._v(" "),t("h2",{attrs:{id:"_10-06"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-06"}},[a._v("#")]),a._v(" 10.06")]),a._v(" "),t("h3",{attrs:{id:"visx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#visx"}},[a._v("#")]),a._v(" visx")]),a._v(" "),t("p",[a._v("https://airbnb.io/visx/")]),a._v(" "),t("ul",[t("li",[a._v("Visualization을 로우레벨단에서 구현한 리액트 라이브러리(차트 만드는 라이브러리가 아님!) made by 에어뱀비")]),a._v(" "),t("li",[a._v("패키지가 쪼개져있어서 사이즈가 작다. 필요한것만 갖다 쓸 수 있음.")]),a._v(" "),t("li",[a._v("유연해서 아무 state 관리나 애니메이션 라이브러리 등에 붙일 수 있음.")]),a._v(" "),t("li",[a._v("젤 중요한건 - 요게 리액트란거. 리액트만 알면 비쥬얼라이제이션을 할 수 있음.")])]),a._v(" "),t("h2",{attrs:{id:"_10-09"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-09"}},[a._v("#")]),a._v(" 10/09")]),a._v(" "),t("h3",{attrs:{id:"web-vitals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-vitals"}},[a._v("#")]),a._v(" Web Vitals")]),a._v(" "),t("p",[a._v("https://web.dev/vitals/")]),a._v(" "),t("ul",[t("li",[a._v("Core web vitals")])]),a._v(" "),t("h2",{attrs:{id:"_10-31"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-31"}},[a._v("#")]),a._v(" 10/31")]),a._v(" "),t("h3",{attrs:{id:"feconf-2020-듣는중"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feconf-2020-듣는중"}},[a._v("#")]),a._v(" FEConf 2020 듣는중~")]),a._v(" "),t("h4",{attrs:{id:"dark-mode-by-현섭님"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dark-mode-by-현섭님"}},[a._v("#")]),a._v(" Dark mode by 현섭님")]),a._v(" "),t("ul",[t("li",[a._v("preferes-color-scheme 스펙: 사용자 운영체제에서 감지해옴\n"),t("ul",[t("li",[a._v("문제: OS는 다크모드 지원 x하는데 앱 자체에서 지원하고 싶은 경우엔 사용 불가. (그리고 앱에 고정하고 싶을때도...)")])])]),a._v(" "),t("li",[a._v("클라이언트 사이드에서는 js를 이용해 앱과 통신, 서버사이드에서는 user agent를 통해 다크모드 감지.")]),a._v(" "),t("li",[a._v("Render blocking css + 서버사이드 css적용")])]),a._v(" "),t("h4",{attrs:{id:"hwp-js-by-한님"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hwp-js-by-한님"}},[a._v("#")]),a._v(" hwp.js by 한님")]),a._v(" "),t("ul",[t("li",[t("ol",[t("li",[a._v("바이너리 업로드. 파일업로드랑 거의 비슷. but js의 File타입은 내부접근 불가. arrayBffer")])])]),a._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[a._v("바이너리 다운로드.")])])]),a._v(" "),t("li",[a._v("로컬파일을 브라우저에서 연다는건 file scheme을 연다는것.")]),a._v(" "),t("li",[a._v("xhr 사용. 권한과 심사 필요.")]),a._v(" "),t("li",[a._v("hwp의 구조 분석 - 텍스트 / 이미지 / 동영상 등 여러 파일이 뭉쳐진 하나의 파일. 일종의 압축파일로 볼 수 있음.\n"),t("ul",[t("li",[a._v("compound file binary라는걸로 압축이 되어있음. ms가 개발함. 파싱하기 어렵고 여러 플랫폼 대응이 어려움(윈도우는 쉬움... but 최근에는 ms office조차도 zip으로 넘어감 ㅋ)")])])]),a._v(" "),t("li",[a._v("cfb.js 를 통해서 압축된애를 열어볼 수 있었음")]),a._v(" "),t("li",[a._v("나의 기술적 결정: 브라우저, node.js 상관없이 돌아가는 universal javascript 추구햇음")]),a._v(" "),t("li",[a._v("바이너리 파일 다룰 때 쓸만한 라이브러리가 많음 (pako 등...) 오픈소스 짱!")])]),a._v(" "),t("h4",{attrs:{id:"iframe-활용-by-윤환님"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iframe-활용-by-윤환님"}},[a._v("#")]),a._v(" iframe 활용 by 윤환님")]),a._v(" "),t("ul",[t("li",[a._v("iframe url에 토큰 담아서 보안 강화.")]),a._v(" "),t("li",[a._v("window.postMessage: Window 오브젝트 사이에서 안전하게 cross-origin 통신 할 수 있게 함. 양방향통신할때 보통 사용. 근데 이거 사용하려면 allow-same-origin 허용해야함()")])]),a._v(" "),t("h4",{attrs:{id:"relay-by-지혁님"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#relay-by-지혁님"}},[a._v("#")]),a._v(" Relay by 지혁님")]),a._v(" "),t("ul",[t("li",[a._v("요즘 사람들 왤케 키노트 잘만들지 나는 디자인 좋아한다고 명함도 못내밀겠다")]),a._v(" "),t("li",[a._v("전역 상태관리 사용, 데이터 중복 최소화.")]),a._v(" "),t("li",[a._v("Fragment: 컴포넌트의 데이터 의존성을 표현하는 문법.")]),a._v(" "),t("li",[a._v("co-location: 컴포넌트와 프레그먼트를 동일 파일에 작성. 그렇게 유도함!")]),a._v(" "),t("li",[a._v("relay: 데이터 프레임워크. 릴레이 컴파일러가 프래그먼트의 모음을 단일 graphql 쿼리로 생성. 릴레이 컴파일러가 타입 체크 등 오류가 발생할 여지 줄여줌. 오호라")]),a._v(" "),t("li",[a._v("클라이언트 스키마: 서버 레이어 증가시키면 네트워크 지연시간, 디버깅 어려움 등 다양 문제 발생. 클라이언트스키마는 GraphQl 서버 코드를 클라 내에 포함하기.")]),a._v(" "),t("li",[a._v("단점: 워크플로가 복잡해짐 (graphQL 스키마 수정, TS타입 생성, graphQL 리졸버 수정, 컴포넌트 수정, 릴레이 컴파일, 결과 ㅠㅠ), 타입 선언 이중으로 해줘야함!, 번들사이즈 증가")]),a._v(" "),t("li",[a._v("장점: 프래그먼트 co-location을 통해 유지보수성 업, 데이터를 어케 처리하느냐에서 어떻게 선언하느냐로 고민이 옮겨감. 컴파일 타임에 오류 미리 알 수 있슴. 데이터관련한 버그가 현저히 줄어듬")]),a._v(" "),t("li",[a._v("선언적으로 작성한다는것\n"),t("ul",[t("li",[a._v("how를 분리해낼때는 우리 서비스에 대한 지식 다 빼버리고 범용정으로 만들기 - npm 라이브러리처럼. 유닛테스트 촘촘히 가능.")]),a._v(" "),t("li",[a._v("what을 분리해낼때는... 웬만하면 분리 안해도 된다. 의존성 그대로 냅둬서 해당 컴포넌트만 보더라도 파악가능하도록.")])])])]),a._v(" "),t("h4",{attrs:{id:"크롬-데브툴-by-흥운님"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#크롬-데브툴-by-흥운님"}},[a._v("#")]),a._v(" 크롬 데브툴 by 흥운님")]),a._v(" "),t("ul",[t("li")])])}),[],!1,null,null,null);t.default=_.exports}}]);