(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{498:function(l,v,e){"use strict";e.r(v);var i=e(14),_=Object(i.a)({},(function(){var l=this,v=l._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[v("h1",{attrs:{id:"javascript-promise"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#javascript-promise"}},[l._v("#")]),l._v(" Javascript Promise")]),l._v(" "),v("p",[l._v("http://www.html5rocks.com/ko/tutorials/es6/promises/")]),l._v(" "),v("ul",[v("li",[l._v("뭐지?\n"),v("ul",[v("li",[l._v("JS는 싱글 스레드\n"),v("ul",[v("li",[l._v("동시에 2개 스크립트 실행불가. 하나가 실행된 뒤에 나머지가 실행됨.")])])]),l._v(" "),v("li",[l._v("이벤트가 항상 최선책은 아니다\n"),v("ul",[v("li",[l._v("keyup, touchstart등 동일한 객체에서 여러번 발생할 수 있는 것들에 훌륭")]),l._v(" "),v("li",[l._v("그러나 비동기적으로 성공/실패가 왔을 때 다음과 같은 이상적인 것들을 원할 수는 있음.\\")]),l._v(" "),v("li",[l._v("만약 html이미지 엘리먼트가 promise를 반환하는 ready메서드를 갖고있다면 이렇게 할 수도 있음")])])]),l._v(" "),v("li",[l._v("promise는 다음과 같은 것을 제외하곤 이벤트 리스너와 비슷\n"),v("ul",[v("li",[l._v("단 한번 성공만 하거나 실패만 함.")]),l._v(" "),v("li",[l._v("성공하거나 실패하고 성공/실패 콜백을 나중에 추가했다면, 이벤트가 먼저 발생했다 하더라도 올바른 콜백이 호출됨")]),l._v(" "),v("li",[l._v("=>이것들은 비동기 성공/실패에 대해 엄청 유용함.\n"),v("ul",[v("li",[l._v("이는 여러분이 어떤 것이 유효하게 되는 정확한 시점보다 그 결과에 반응하는데 관심이 더 있기 때문.")])])])])]),l._v(" "),v("li",[l._v("promise의 상태\n"),v("ul",[v("li",[l._v("fulfilled: 프로미스가 성공하였음과 관련된 액션")]),l._v(" "),v("li",[l._v("rejected: ‘’ 실패")]),l._v(" "),v("li",[l._v("pending: 아직 완료되거나(fulfilled) 거부되지(rejected)않은 상태")]),l._v(" "),v("li",[l._v("settled: 완료되거나 거부된 상태")]),l._v(" "),v("li",[l._v("또한 규격에선 객체를 promise처럼 기술하기 위해 thenable용어를 사용하고, 이는 then메소드를 가짐.")])])])])]),l._v(" "),v("li",[l._v("Promises가 자바스크립트에 도착하다\n"),v("ul",[v("li",[l._v("라이브러리: Q, when, WinJS, RSVP.js")]),l._v(" "),v("li",[l._v("프로미스 생성\n"),v("ul",[v("li",[l._v("promise생성자는 2개의 파라미터(resolve, reject)를 가지는 콜백 하나를 인자로 가짐. 콜백 내에서 무언가 할 수 있고, 동기화될 것이며,")]),l._v(" "),v("li",[l._v("모든것이 정상동작하면 resolve호출, 아니면 reject호출")]),l._v(" "),v("li",[l._v("error객체를 통해 reject하는건 꼭 필요한건 아니지만 Stack trace를 수집하여 디버깅도구들을 더 유용하게 한다는 장점.")])])]),l._v(" "),v("li",[l._v("프로미스 사용\n"),v("ul",[v("li",[l._v("‘then’은 성공한 경우를 위한 콜백과 실패한 경우를 위한 다른 콜백 인자 2개를 가짐.")]),l._v(" "),v("li",[l._v("둘 다 선택적인 사항이므로 성공이나 실패한 경우에 대해서만 콜백 추가 가능.")])])])])]),l._v(" "),v("li",[l._v("XMLHttpRequest의 Promise화")]),l._v(" "),v("li",[l._v("체이닝\n"),v("ul",[v("li",[l._v("값들을 변환하거나 비동기 동작 뒤에 또 다른 추가적인 비동기 동작을 수행하기 위해 then들을 함께 연결 가능.")]),l._v(" "),v("li",[l._v("값의 변환")])])])])])}),[],!1,null,null,null);v.default=_.exports}}]);