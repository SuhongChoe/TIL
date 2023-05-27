(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{433:function(t,n,s){"use strict";s.r(n);var a=s(14),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"소셜-코딩으로-이끄는-github-실천-기술-오오츠카-히로키-제이펍-출판사"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#소셜-코딩으로-이끄는-github-실천-기술-오오츠카-히로키-제이펍-출판사"}},[t._v("#")]),t._v(" 소셜 코딩으로 이끄는 Github 실천 기술(오오츠카 히로키) / 제이펍 출판사")]),t._v(" "),n("h2",{attrs:{id:"git-기본-사용법"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-기본-사용법"}},[t._v("#")]),t._v(" git 기본 사용법")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 리포지토리 초기화. '.git'폴더 생성. 이 폴더에 현재 폴더와 관련된 관리 정보가 저장. working tree라고 부른다. 변경 내역 등 관리.")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 리포지토리 상태 표시. ")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" 파일명\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 스테이지 영역(커밋 전 임시 영역)에 파일 추가. ")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'첫 커밋'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 스테이지 영역에 기록된 시점들 파일을 실제 리포지토리 변경 내역에 반영.")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 리포지토리에 커밋된 로그 확인. ")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--pretty")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("short\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 로그 확인시 첫 번째 요약 줄만 보여주기")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log README.md\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 리드미 관련된 로그만 보기 (폴더 명도 가능)")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 커밋에서 변경된 내용 함께 확인. (뒤에 파일/폴더명 붙여도 됨)")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# working tree, 스테이지 영역, 최신 커밋 사이 변경 확인")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" HEAD\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 최신 commit과의 차이 확인")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 브랜치 목록 표시, 현재 어떤 브랜치인지.")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feature-A'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# feature-A 이름의 브랜치 만들고 그 브랜치로 이동")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge --no--ff feature-A\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 현재 브랜치에서 feature-A브랜치를 머지. 옵션은 머지 커밋도 함께 남기고 싶다는 뜻.")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--graph")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 브랜치를 시각적으로 확인")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--hard")]),t._v(" 커밋해시값\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HEAD, 스테이지, Working tree를 특정 커밋으로 복원.")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 현재 브랜치 뿐만이 아니라 이 리포지토리에서 진행된 모든 로그 볼 수 있음")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--amend")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 바로 전에 작성했던 커밋 메세지 수정")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-am")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"바로 애드하고 커밋하고 싶당"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# add, commit 한번에 하기")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" HEAD~2\npick 7a34294 Add feature-C\npick 6fsdfa2 Fix typo\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 현재 브랜치의 HEAD(최신 commit)를 포함한 두 개의 변경 내역과 관련된 내용 보여짐. 이 두개를 합쳐 한 커밋으로 뭉개버리고 싶다. fix typo가 부끄러우니까!")]),t._v("\n\npick 7a34294 Add feature-C\nfixup 6fsdfa2 Fix typo\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 뭉개고 싶은 커밋에 'fixup'으로 고쳐주고 저장. ")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:사용자명/저장소이름.git\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 주소의 저장소를 원격 저장소로 설정")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" origin master\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -u옵션: 로컬 리포에 있는 현재 브랜치 upstream이 origin 리포의 master 브랜치로 설정.")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" origin feature-D\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 원격의 feature-D브랜치로 push")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("git\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 주소의 리포지토리 받아오기")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-a")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 로컬 리포지토리랑 원격 리포지토리 브랜치 모두 표시")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" feature-D origin/feature-D\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 원격의 feature-D리포를 내가 새로 만든 feature-D브랜치로 체크아웃")]),t._v("\n")])])]),n("h3",{attrs:{id:"커밋-메세지"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#커밋-메세지"}},[t._v("#")]),t._v(" 커밋 메세지")]),t._v(" "),n("ul",[n("li",[t._v("첫 번째 줄: 변경 내용 한 줄 요약")]),t._v(" "),n("li",[t._v("두 번째 줄: 공백")]),t._v(" "),n("li",[t._v("세 번째 줄 이후: 변경과 관련 내용 상세 기록")])])])}),[],!1,null,null,null);n.default=e.exports}}]);