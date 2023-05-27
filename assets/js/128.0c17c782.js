(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{427:function(v,_,l){"use strict";l.r(_);var i=l(14),n=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"pycon-2015"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pycon-2015"}},[v._v("#")]),v._v(" Pycon 2015")]),v._v(" "),_("h2",{attrs:{id:"sphinx-autodoc-타카유키-시미즈카와"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sphinx-autodoc-타카유키-시미즈카와"}},[v._v("#")]),v._v(" Sphinx autodoc (타카유키 시미즈카와)")]),v._v(" "),_("ul",[_("li",[v._v("docstring\n"),_("ul",[_("li",[v._v("API DOCS")])])]),v._v(" "),_("li",[v._v("sphinx\n"),_("ul",[_("li",[v._v("documentation generator")]),v._v(" "),_("li",[v._v("python version is ipt")]),v._v(" "),_("li",[v._v("import your code docstrings")]),v._v(" "),_("li",[v._v("translation into other languages")])])])]),v._v(" "),_("h2",{attrs:{id:"character-encoding-in-python-강대성"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#character-encoding-in-python-강대성"}},[v._v("#")]),v._v(" Character Encoding in Python (강대성)")]),v._v(" "),_("ul",[_("li",[v._v("Encoding\n"),_("ul",[_("li",[v._v("전달하고자 하는 내용을 부호화")])])]),v._v(" "),_("li",[v._v("Character Encoding\n"),_("ul",[_("li",[v._v("저장/통신 하기 위해선 2진수")])])]),v._v(" "),_("li",[v._v("Unicode\n"),_("ul",[_("li",[v._v("전세계 문자/기호를 codepoint에 매칭")]),v._v(" "),_("li",[v._v("한글, 타이문자 등등")]),v._v(" "),_("li",[v._v("많이 쓰이는 이모티콘 등도 정의(똥같은거)")]),v._v(" "),_("li",[v._v("Unicode != UTF-8")])])]),v._v(" "),_("li",[v._v("UTF-8\n"),_("ul",[_("li",[v._v("모든 Unicode codepoint를 다룰 수 있다.")]),v._v(" "),_("li",[v._v("Unicode를 Encoding했을 때 NULL 포함 X")]),v._v(" "),_("li",[v._v("ASCII Text는 UTF-8 될 수 있음.")]),v._v(" "),_("li",[v._v("일부 바이트 유실되어도 다음시작 byte알 수 있다(복구가능)")]),v._v(" "),_("li",[v._v("Web Encoding중 84%가 사용!")])])]),v._v(" "),_("li",[v._v("Unicode Sandwich")]),v._v(" "),_("li",[v._v("python2\n"),_("ul",[_("li",[v._v("default: ASCII")])])]),v._v(" "),_("li",[v._v("python3\n"),_("ul",[_("li",[v._v("default: UTF8")])])]),v._v(" "),_("li",[v._v("Python은 파일의 인코딩을 알지 못함")]),v._v(" "),_("li",[v._v("일본어 디코딩\n"),_("ul",[_("li",[v._v("주고 받은 인코딩을 정확히 파악!!")])])]),v._v(" "),_("li",[v._v("인코딩 해결법\n"),_("ul",[_("li",[v._v("encode, decode이렇게 저렇게 하다 잘 되면 써요 ==> 망하는 지름길")])])]),v._v(" "),_("li",[v._v("인코딩 파악 위한 순서\n"),_("ul",[_("li",[v._v("문서 또는 서로의 약속 확인")]),v._v(" "),_("li",[v._v("전송받은 데이터 열어서 확인")]),v._v(" "),_("li",[v._v("테스트(반드시!!)")])])]),v._v(" "),_("li",[v._v("인코딩 파악에 도움되는 것\n"),_("ul",[_("li",[v._v("chardet 2.3.0")]),v._v(" "),_("li",[v._v("n퍼센트 확률로 이 인코딩이다 하고 알려줌")])])]),v._v(" "),_("li",[v._v("테스트\n"),_("ul",[_("li",[v._v("전체 프로그램 돌리면 오래 걸릴 수 있으니 부분을 떼어서 검사")])])]),v._v(" "),_("li",[v._v("파일 IO를 위한 팁\n"),_("ul",[_("li",[v._v("파일을 열 때 codecs쓰면 간단해짐")]),v._v(" "),_("li",[v._v("python3에선 내장함수에서 가능")])])]),v._v(" "),_("li",[v._v("결론 TIP\n"),_("ul",[_("li",[_("ol",[_("li",[v._v("Unicode Sandwich")])]),v._v(" "),_("ul",[_("li",[v._v("python에선 항상 Unicode")])])]),v._v(" "),_("li",[_("ol",{attrs:{start:"2"}},[_("li",[v._v("인코딩 파악하기")])]),v._v(" "),_("ul",[_("li",[v._v("문서보고, 확인하고 테스트.")]),v._v(" "),_("li",[v._v("주어야하는 인코딩도 명확히")])])])])])]),v._v(" "),_("h2",{attrs:{id:"한국어-nltk-gensim-박은정"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#한국어-nltk-gensim-박은정"}},[v._v("#")]),v._v(" 한국어 & NLTK & Gensim (박은정)")]),v._v(" "),_("blockquote",[_("p",[v._v("단어/문서를 컴퓨터가 이해할 수 있게 표현하는 방법")])]),v._v(" "),_("ul",[_("li",[v._v("어떻게 하면 구조가 없는 데이터인 "),_("code",[v._v("텍스트")]),v._v("의 의미를 컴퓨터가 잘 이해할 수 있을까?")]),v._v(" "),_("li",[v._v("단어를 표현하는 가장 쉬운 방법: "),_("code",[v._v("이진 표현법")]),v._v(" "),_("ul",[_("li",[v._v("어떤 단어를 벡터화 시킬 수 있다.")]),v._v(" "),_("li",[v._v("근데 이진 표현법 사용 => 단어간 유사도 정의 불가\n"),_("ul",[_("li",[v._v("호텔&모텔 / 호텔&고양이 얼마나 비슷한지 전혀 모름")])])])])])]),v._v(" "),_("ul",[_("li",[v._v("BOW(bag of words)\n"),_("ul",[_("li",[v._v("단어가 문서에 존재한다/안한다(term existance)")]),v._v(" "),_("li",[v._v("단어가 문서에 n번 존재한다(term frequency)")]),v._v(" "),_("li",[v._v("근데 공간의 차원이 너무 커서 문서간 유사도 지표의 효과 떨어짐")])])])]),v._v(" "),_("ul",[_("li",[v._v("워드넷 같은 텍소노미\n"),_("ul",[_("li",[v._v("모든 용어를 포함하려 하지만, 전문 도메인 용어들은 많이 빠짐")])])]),v._v(" "),_("li",[v._v("단어의 주변을 보면 그 단어를 안다\n"),_("ul",[_("li",[v._v("== 단어의 의미는 해당 단어의 문맥("),_("code",[v._v("context")]),v._v(")이 담고 있다.")]),v._v(" "),_("li",[v._v("co-occurence: 두 단어가 정해진 구간 내에서 동시에 등장\n"),_("ul",[_("li",[_("ol",[_("li",[v._v("Term-document matrix : 한 문서에 같이 등장하면 비슷한 단어")])])]),v._v(" "),_("li",[_("ol",{attrs:{start:"2"}},[_("li",[v._v("Term-term matrix : 단어가 문맥 내에 같이 등장하면 비슷한 단어")])])])])])])]),v._v(" "),_("li",[v._v("word2vec\n"),_("ul",[_("li",[v._v("단어에 대한")])])]),v._v(" "),_("li",[v._v("doc2vec\n"),_("ul",[_("li",[v._v("문서/문단 벡터를 마치 단어인 양 학습시키자!")]),v._v(" "),_("li",[v._v("차원 축소")])])]),v._v(" "),_("li",[v._v("한국어 영화 리뷰 토이데이터")])]),v._v(" "),_("h2",{attrs:{id:"python-and-test-배권한"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#python-and-test-배권한"}},[v._v("#")]),v._v(" Python and Test (배권한)")]),v._v(" "),_("ul",[_("li",[v._v("테스트 이점\n"),_("ul",[_("li",[v._v("불안감 해소")]),v._v(" "),_("li",[v._v("테스트 통한 점진적 개선 가능")]),v._v(" "),_("li",[v._v("손으로 하는 수고 덜어준다.")])])]),v._v(" "),_("li",[v._v("어떻게 해야하나\n"),_("ul",[_("li",[v._v("TDD추천")]),v._v(" "),_("li",[v._v("느리지만(직접 해보니 5배쯤 느림...ㅠㅠ) 많이 배우고 좋은 프로그램을 짤 수 있다")]),v._v(" "),_("li",[v._v("하지만 만능은 아님.\n"),_("ul",[_("li",[v._v("리팩토링을 수반")])])]),v._v(" "),_("li",[v._v("하지만 TDD로 개발을 진행할 힘을 얻고, 리팩토링으로 구조 개선\n"),_("ul",[_("li",[v._v("좋은 구조는 또 다른 분야라 생각 ㅎㅎ")])])])])]),v._v(" "),_("li",[v._v("언제 리팩토링 해야하나\n"),_("ul",[_("li",[v._v("Three strikes and you refactor")]),v._v(" "),_("li",[v._v("세 번 이상 같은 것을 하면 안댕!!!")]),v._v(" "),_("li",[v._v("egoless programming을 해야 한다.\n"),_("ul",[_("li",[v._v("나의 코드는 의미가 없으며(!=실력없음) 목적을 위하여 언제든 지울 수 있음(==나는 계속 성장할 수 있다).")])])])])]),v._v(" "),_("li",[v._v("다시, 어떻게 해야하나\n"),_("ul",[_("li",[v._v("pyramid\n"),_("ul",[_("li",[_("code",[v._v("unit test")]),v._v("해야한다")]),v._v(" "),_("li",[v._v("가급적 테스트는 30초 이내에 끝나야 함(그래야 피드백을 빨리 받고 다른 일을 할 수 있음)")]),v._v(" "),_("li",[v._v("그 여러개의 unit test를 합쳐 "),_("code",[v._v("integration test")])])])]),v._v(" "),_("li",[_("code",[v._v("Functional test")]),v._v(" "),_("ul",[_("li",[v._v("위에서 아래로")])])])])]),v._v(" "),_("li",[_("code",[v._v("Obey the test goat")]),v._v(" 라는 사이트\n"),_("ul",[_("li",[v._v("클린코드를 위한 테스트 주도 개발 <<책 봐라")]),v._v(" "),_("li",[v._v("가급적이면 unit test를 많이 짜는 습관")])])]),v._v(" "),_("li",[v._v("테스트 비용\n"),_("ul",[_("li",[v._v("테스트도 결국 알고리즘 처럼 비용의 세계")]),v._v(" "),_("li",[v._v("인간 확인 비용 < 테스트 짜는 비용\n"),_("ul",[_("li",[v._v("이면 굿. 반대면 인간이 확인해도 됨.")])])]),v._v(" "),_("li",[v._v("테스트 커버리지가 100%일 필요는 없음(70%만 넘으면 될듯.)")])])]),v._v(" "),_("li",[v._v("테스트 하기 쉬운 코드 짜려면?\n"),_("ul",[_("li",[v._v("테스트를 먼저 짠다.")]),v._v(" "),_("li",[v._v("기능을 많이 나눔")]),v._v(" "),_("li",[v._v("코드리뷰를 거친다")]),v._v(" "),_("li",[v._v("의도를 잘 나타내야함")]),v._v(" "),_("li",[v._v("가독성")])])]),v._v(" "),_("li",[v._v("CI를 통해서 협업\n"),_("ul",[_("li",[v._v("깔끔한 환경에서 할 수 있다.")]),v._v(" "),_("li",[v._v("테스트를 돌림")]),v._v(" "),_("li",[v._v("형식을 검사")]),v._v(" "),_("li",[v._v("import order등을 검사")])])]),v._v(" "),_("li",[v._v("more...\n"),_("ul",[_("li",[v._v("py.test를 쓰세요. 이게 좋앙.")]),v._v(" "),_("li",[v._v("다른 분들의 코드를 많이 보세요(e.g. 장고쪽에 좋은 테스트 많다)")]),v._v(" "),_("li",[v._v("더 고민해서 TC를 짜자")])])])]),v._v(" "),_("h2",{attrs:{id:"탐색적으로-큰-데이터-분석하기-장혜식"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#탐색적으로-큰-데이터-분석하기-장혜식"}},[v._v("#")]),v._v(" 탐색적으로 큰 데이터 분석하기 (장혜식)")]),v._v(" "),_("ul",[_("li",[v._v("EHR(Electronic Health Records)\n"),_("ul",[_("li",[v._v("병원 데이터 - 엄청나게 많은 데이터 쌓임")])])]),v._v(" "),_("li",[v._v("탐색적 데이터 분석\n"),_("ul",[_("li",[_("code",[v._v("재미있는 것")]),v._v("을 찾아야 함\n"),_("ul",[_("li",[v._v("코드 추가/수정이 매우 간편")])])]),v._v(" "),_("li",[v._v("언제 어떤 데이터가 추가될 지 모른다.")]),v._v(" "),_("li",[v._v("코드는 빨리 만들어서 (거의) 한 번만 쓴다.")]),v._v(" "),_("li",[v._v("그렇다고 "),_("code",[v._v("재사용")]),v._v("이 아예 없는 것도 아니다.\n"),_("ul",[_("li",[v._v("프레임워크가 유연하고 성숙해야 함")])])]),v._v(" "),_("li",[v._v("데이터가 작지는 않다.")])])]),v._v(" "),_("li",[v._v("Jupiter Notebook\n"),_("ul",[_("li",[v._v("인생이 주피터를 쓰기 전과 후로 나뉜다(ㅎㅎ)\n"),_("ul",[_("li",[v._v("판다스도! 두개 꼭 써봐요")])])])])]),v._v(" "),_("li",[v._v("Snakemake\n"),_("ul",[_("li",[v._v("make의 좋은점 / 안좋은점")]),v._v(" "),_("li",[v._v("파이썬 코드를 거의 그대로 쓸 수 있다.")]),v._v(" "),_("li",[v._v("의존성이 없는 작업은 병렬로 실행됨")]),v._v(" "),_("li",[v._v("이미 있는 새 파일은 무시하고 지나감")]),v._v(" "),_("li",[v._v("File-driven Programming\n"),_("ul",[_("li",[v._v("보일러판이 필요 없는 프로그램 내장형 병렬화 이벤트 루프")])])])])]),v._v(" "),_("li",[v._v("텍스트 파일\n"),_("ul",[_("li",[v._v("tsv(탭으로 구분 텍스트), csv(쉼표로 구분 텍스트)")]),v._v(" "),_("li",[v._v("큰 텍스트 파일을 (엄청쉽게) 병렬처리 하려면?\n"),_("ul",[_("li",[v._v("압축을 안 한다?")]),v._v(" "),_("li",[v._v("파일을 쪼갠다?")]),v._v(" "),_("li",[v._v("tabix를 쓴다!\n"),_("ul",[_("li",[v._v("bgzf\n"),_("ul",[_("li",[v._v("압축을 여러 개로 쪼개서 압축한다.")]),v._v(" "),_("li",[v._v("앞뒤로 돌아다니면서 탐색 가능!!")]),v._v(" "),_("li",[v._v("100% 하위호환")])])]),v._v(" "),_("li",[v._v("한계점\n"),_("ul",[_("li",[v._v("초기 인덱싱이 병렬화 X. (오래걸림)")]),v._v(" "),_("li",[v._v("반드시 2레벨 인덱스로 정렬되어 있어야 함")]),v._v(" "),_("li",[v._v("레벨 1 인덱스는 병렬 안됨(맞나?)")])])])])])])])])]),v._v(" "),_("li",[v._v("Julia\n"),_("ul",[_("li",[v._v("파이썬과 친한 언어 ㅎㅎ")])])])]),v._v(" "),_("h2",{attrs:{id:"약속-하재승"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#약속-하재승"}},[v._v("#")]),v._v(" 약속 (하재승)")]),v._v(" "),_("ul",[_("li",[v._v("ㅎㅎㅎ좋으당!")]),v._v(" "),_("li",[v._v("프로그래밍은 다 거짓말")])]),v._v(" "),_("h2",{attrs:{id:"도도와-파이썬-김재석"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#도도와-파이썬-김재석"}},[v._v("#")]),v._v(" 도도와 파이썬 (김재석)")]),v._v(" "),_("ul",[_("li",[v._v("스포카가 도도포인트를 만들며 있었던 기술적 의사결정 공유")]),v._v(" "),_("li",[v._v("Do things that don't scale\n"),_("ul",[_("li",[v._v("다만 첫번째 고객의 취향에 완전히 맞춤!!")])])]),v._v(" "),_("li",[v._v("백오피스를 가볍게 두고 고객의 니즈에 더 노력을 쏟음\n"),_("ul",[_("li",[v._v("더 팔릴만한 것 만들기!")]),v._v(" "),_("li",[v._v("이유: 스포카에서의 경험")]),v._v(" "),_("li",[v._v("장점: 장기적으로 효율 좋음. 단, 성공했을 때!!")]),v._v(" "),_("li",[v._v("분석은 엑셀로 << 인턴도 데이터 분석 가능")]),v._v(" "),_("li",[v._v("디플로이는 heroku로(디플로이 시스템을 만들고 유지보수 하는 것도 부담)\n"),_("ul",[_("li",[v._v("다만 버지니아에서 날아오는데 레이턴시 이슈 ->AWS 도쿄로 옮김")])])])])]),v._v(" "),_("li",[v._v("빠르고, 점진적으로")]),v._v(" "),_("li",[v._v("나쁜 선택\n"),_("ul",[_("li",[v._v("매장이 1000개 가까이 늘어나니 서비스에 대한 요구사항 늘어남")]),v._v(" "),_("li",[v._v("기존 서비스가 커져서 추가가 고통스러웠음(넣으면 서버 터짐;😉")]),v._v(" "),_("li",[v._v("종종 '그 때 제대로 해놨면 지금 이고생 안하는데 ㅠㅠ'후회")]),v._v(" "),_("li",[v._v("하지만 그건 이미 그 코드를 계속 만질 수 있는 미래 시점에서의 평가일 뿐")])])]),v._v(" "),_("li",[v._v("파이썬은 스타트업에게 좋은가?\n"),_("ul",[_("li",[v._v("Duct tape")]),v._v(" "),_("li",[v._v("스타텁은 단지 '작은'회사가 아님.")]),v._v(" "),_("li",[v._v("스타텁의 가장 중요한 키워드는 '고속성장'")]),v._v(" "),_("li",[v._v("시어머니봇\n"),_("ul",[_("li",[v._v("코드리뷰를 사람끼리 하면 사실 맘이 상할 때가 있다")]),v._v(" "),_("li",[v._v("봇은 잔인하게 엄격함")]),v._v(" "),_("li",[v._v("봇한테 화가 날 순 있어도 미워하진 않더라")]),v._v(" "),_("li",[v._v("오픈소스로 풀었어요~")])])])])])]),v._v(" "),_("h2",{attrs:{id:"r이-판치는-세상에-python데이터-분석가로-사는-법-하용호"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#r이-판치는-세상에-python데이터-분석가로-사는-법-하용호"}},[v._v("#")]),v._v(" R이 판치는 세상에 Python데이터 분석가로 사는 법 (하용호)")]),v._v(" "),_("ul",[_("li",[v._v("10분만에 듣는 머신러닝\n"),_("ul",[_("li",[v._v("작대기의 자유도에 따라 성능이 결정")]),v._v(" "),_("li",[v._v("회귀")]),v._v(" "),_("li",[v._v("XOR Problem")]),v._v(" "),_("li",[v._v("Decision Tree")]),v._v(" "),_("li",[v._v("Support Vector Machine")]),v._v(" "),_("li",[v._v("Random Forest\n"),_("ul",[_("li",[v._v("놀랍게도 성능이 좋음")])])])])]),v._v(" "),_("li",[v._v("빅데이터\n"),_("ul",[_("li",[v._v("말 오글거려")])])]),v._v(" "),_("li",[v._v("GGPLOT2\n"),_("ul",[_("li",[v._v("애증. 안예뻐")])])]),v._v(" "),_("li",[v._v("seaborn\n"),_("ul",[_("li",[v._v("그림 그릴 때 좀더 예쁨")])])]),v._v(" "),_("li",[v._v("파이썬 인터렉티브 노트북\n"),_("ul",[_("li",[v._v("내가 했던 과정이 노트북처럼 주르륵 나온다.")]),v._v(" "),_("li",[v._v("이런 방식이 아니고, 결과만 pdf로 주거나 하면 협업시 데이터를 조금만 고치거나 할 때 힘듦.")]),v._v(" "),_("li",[v._v("그게 아니고, 이렇게 만든 과정을 팀 협업할 때 보면 매우 도움.")])])]),v._v(" "),_("li",[v._v("mrjob\n"),_("ul",[_("li",[v._v("느리지만 사실 우리가 개발하는 속도가 더 느림")]),v._v(" "),_("li",[v._v("사실 코드를 한번 짜고 한번만 쓸 때가 많다.")])])]),v._v(" "),_("li",[v._v("luigi\n"),_("ul",[_("li",[v._v("snakemake랑 비슷(근데 이게 더 좋아 by 용호)")])])]),v._v(" "),_("li",[v._v("Spark\n"),_("ul",[_("li",[v._v("하둡보다 선호!(by 용호)")])])])]),v._v(" "),_("h2",{attrs:{id:"django-매생이"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#django-매생이"}},[v._v("#")]),v._v(" django (매생이)")]),v._v(" "),_("ul",[_("li",[v._v("스타트업의 마감시간 == 남은 돈")])])])}),[],!1,null,null,null);_.default=n.exports}}]);