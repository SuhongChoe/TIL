(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{388:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"장고-페이스북-가입-달기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#장고-페이스북-가입-달기"}},[t._v("#")]),t._v(" 장고 페이스북 가입 달기")]),t._v(" "),s("p",[t._v("장고로 만든 개인 사이트에 소셜 가입 기능을 붙이려 한다.\n"),s("a",{attrs:{href:"http://python-social-auth.readthedocs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("python-social-auth"),s("OutboundLink")],1),t._v("를 써서 만들어본다.\n나는 "),s("code",[t._v("email")]),t._v("을 기본 아이디로 쓰도록 User Model을 확장해두었는데, 그것때문에 많이 삽질했다. 징글징글~~~ 세륜장고... 사라져주세요... 아 아니 사라지진 말아요.")]),t._v(" "),s("h2",{attrs:{id:"oauth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oauth"}},[t._v("#")]),t._v(" oAuth")]),t._v(" "),s("p",[t._v("일단 oAuth에 대해 간단히 알고 시작한다. "),s("a",{attrs:{href:"http://d2.naver.com/helloworld/24942",target:"_blank",rel:"noopener noreferrer"}},[t._v("네이버 D2 블로그"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"python-social-auth-설치하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-social-auth-설치하기"}},[t._v("#")]),t._v(" python-social-auth 설치하기")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://python-social-auth.readthedocs.org/en/latest/installing.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식 독스"),s("OutboundLink")],1),t._v("를 참고하여 설치한다.\n참고: "),s("a",{attrs:{href:"http://initialkommit.github.io/2015/04/27/django-newbie-adding-facebook-authentication-to-a-django-app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("KwangYoun Jung님 블로그"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-social-auth\n")])])]),s("p",[t._v("핍으로 설치해주고, 센스있게 "),s("code",[t._v("requirements.txt")]),t._v("에도 써준다. "),s("code",[t._v("Installed_apps")]),t._v("에도 써준다.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("INSTALLED_APPS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'social.apps.django_app.default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"환경설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#환경설정"}},[t._v("#")]),t._v(" 환경설정")]),t._v(" "),s("p",[s("code",[t._v("settings.py")]),t._v("에 필요한 환경설정을 해준다.\n"),s("a",{attrs:{href:"https://developers.facebook.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("페이스북 디벨로퍼 사이트"),s("OutboundLink")],1),t._v("에 들어가서 클릭클릭 해서 앱을 만들어준다. 별로 어렵지 않다. 거기서 얻은 키, 시크릿키를 넣어준다.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("TEMPLATE_CONTEXT_PROCESSORS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.contrib.auth.context_processors.auth'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.core.context_processors.debug'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.core.context_processors.i18n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.core.context_processors.media'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.core.context_processors.static'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.core.context_processors.tz'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.contrib.messages.context_processors.messages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'social.apps.django_app.context_processors.backends'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'social.apps.django_app.context_processors.login_redirect'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nAUTHENTICATION_BACKENDS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'social.backends.facebook.FacebookOAuth2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 'social.backends.google.GoogleOAuth2',")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 'social.backends.twitter.TwitterOAuth',")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.contrib.auth.backends.ModelBackend'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nSOCIAL_AUTH_LOGIN_REDIRECT_URL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v("\nSOCIAL_AUTH_URL_NAMESPACE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'social'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Facebook")]),t._v("\nSOCIAL_AUTH_FACEBOOK_KEY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'페북에서 받아온 키를 넣으세요'")]),t._v("\nSOCIAL_AUTH_FACEBOOK_SECRET "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'페북에서 받아온 시크릿키를 넣으세요'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Google")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = ''")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = ''")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Twitter")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SOCIAL_AUTH_TWITTER_KEY = ''")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SOCIAL_AUTH_TWITTER_SECRET = ''")]),t._v("\n\nSESSION_SERIALIZER "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'django.contrib.sessions.serializers.PickleSerializer'")]),t._v("\n\nSOCIAL_AUTH_FACEBOOK_SCOPE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# FACEBOOK_EXTENDED_PERMISSIONS = ['email', 'picture']")]),t._v("\nSOCIAL_AUTH_FACEBOOK_PROFILE_EXTRA_PARAMS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fields'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id, name, email, age_range'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("이메일은 디폴트로 받아오지 않으므로, 이메일을 쓰고 싶다면 하단의 변수들을 추가해준다.\n변수명은 "),s("a",{attrs:{href:"https://developers.facebook.com/docs/facebook-login/permissions#reference-public_profile",target:"_blank",rel:"noopener noreferrer"}},[t._v("페이스북 사이트"),s("OutboundLink")],1),t._v("를 참고한다.")]),t._v(" "),s("blockquote",[s("p",[t._v("(+추가)\n"),s("code",[t._v("FACEBOOK_EXTENDED_PERMISSIONS")]),t._v("에 email을 추가해주니, 이게 기본 email을 덮어씌워서 페이스북에서 '추가 이메일'이 입력된 것을 받아오게 되어버렸다. 그래서 추가 이메일을 쓰지 않은 사람은 이메일을 받아오지 못하는 불상사가... 부들부들... 이틀 헤맸다.")])]),t._v(" "),s("h2",{attrs:{id:"urls-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#urls-py"}},[t._v("#")]),t._v(" urls.py")]),t._v(" "),s("p",[t._v("urls.py에도 추가해준다.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("r''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'social.apps.django_app.urls'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" namespace"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'social'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h2",{attrs:{id:"base-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base-html"}},[t._v("#")]),t._v(" base.html")]),t._v(" "),s("p",[t._v("페북 앱을 만들면 생기는 스크립트를 여는 바디태그 뒤에 넣어준다.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fbAsyncInit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("appId")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'앱아이디'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("xfbml")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("version")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v2.5'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fjs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     js "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//connect.facebook.net/en_US/sdk.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     fjs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fjs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'facebook-jssdk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{% url 'social:begin' 'facebook' %}?next={{ request.path }}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Login with Facebook"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("html엔 이런 식으로 추가해주면 기본적인 동작은 한다.\n기본 유저모델로 끝나면 좋겠지만, 만약 가입에 다른 절차들이 필요하다면 몇 가지 작업이 필요하다.")]),t._v(" "),s("ol",[s("li",[t._v("이메일을 기본 아이디로 쓰고")]),t._v(" "),s("li",[t._v("닉네임을 필수로 만들고")]),t._v(" "),s("li",[t._v("프로필 사진을 받음")])]),t._v(" "),s("p",[t._v("내 유저모델은 가입시 이런 절차가 필요한데, 페이스북하고 연동할 때에 이를 '어답터'처럼 연결할 함수가 필요하다.")]),t._v(" "),s("h2",{attrs:{id:"pipeline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pipeline"}},[t._v("#")]),t._v(" Pipeline")]),t._v(" "),s("p",[s("code",[t._v("python-social-auth")]),t._v("에선 "),s("strong",[t._v("파이프라인")]),t._v("이란 개념으로 이를 해결한다.\n회원가입이 진행되는 동안 수행되는 일련의 함수가 있는데, 이 함수 사이에 필요한 기능이 들어간 함수를 집어넣거나, 기존에 만들어진 함수를 덮어쓰는 식으로 제어한다.\n"),s("a",{attrs:{href:"https://python-social-auth.readthedocs.org/en/latest/pipeline.html#authentication-pipeline",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식사이트"),s("OutboundLink")],1),t._v("의 설명을 참고.")]),t._v(" "),s("h2",{attrs:{id:"settings-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settings-py"}},[t._v("#")]),t._v(" settings.py")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("SOCIAL_AUTH_PIPELINE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'social.pipeline.social_auth.social_details'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'social.pipeline.social_auth.social_uid'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'social.pipeline.social_auth.auth_allowed'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'social.pipeline.social_auth.social_user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'social.pipeline.user.get_username'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 'social.pipeline.user.create_user',")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accounts.social.create_user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 덮어씀")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accounts.social.update_avatar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 추가함")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'social.pipeline.social_auth.associate_user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'social.pipeline.social_auth.load_extra_data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'social.pipeline.user.user_details'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("settings.py에 파이프라인 플로우를 적어준다.\n"),s("code",[t._v("accounts")]),t._v("앱에 "),s("code",[t._v("social.py")]),t._v("를 만들어서, "),s("code",[t._v("create_user")]),t._v("함수는 덮어쓰고, "),s("code",[t._v("update_avatar")]),t._v("함수를 새로 만들어주었다.")]),t._v(" "),s("h2",{attrs:{id:"social-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#social-py"}},[t._v("#")]),t._v(" social.py")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" urllib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" urlopen\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ContentFile\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" social"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" slugify\n\nUSER_FIELDS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nickname'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strategy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" details"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("details"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'is_new'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    fields "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" details"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nickname'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" details"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'username'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" fields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'is_new'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" strategy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("fields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update_avatar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("backend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" backend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'facebook'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://graph.facebook.com/%s/picture?type=large"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        avatar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" urlopen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("avatar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("slugify"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" social"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ContentFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("avatar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[s("code",[t._v("create_user")]),t._v("함수에서, 원래는 "),s("code",[t._v("USER_FIELDS")]),t._v("가 들어가던 것을, email과 nickname이 들어가도록 교체해줬다.\n"),s("code",[t._v("update_avarter")]),t._v("는 create_user다음에 불리는 함수인데, 페이스북 아바타를 저장하고 user model에 넣어주는 기능을 한다.")]),t._v(" "),s("h2",{attrs:{id:"끝"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#끝"}},[t._v("#")]),t._v(" 끝~")]),t._v(" "),s("p",[t._v("끝났다. 모쪼록 less 삽질에 도움이 되었으면 좋겠습니다.\n예제는 "),s("a",{attrs:{href:"https://github.com/omab/python-social-auth/tree/master/examples/django_example/example",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식 깃허브"),s("OutboundLink")],1),t._v("에서 참고하시면 됩니다.")]),t._v(" "),s("h2",{attrs:{id:"refer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refer"}},[t._v("#")]),t._v(" Refer")]),t._v(" "),s("p",[t._v("http://initialkommit.github.io/2015/04/27/django-newbie-adding-facebook-authentication-to-a-django-app/")]),t._v(" "),s("p",[t._v("http://codingdojang.com/scode/280\nhttps://github.com/omab/django-social-auth\nhttp://django-social-auth.readthedocs.org/en/latest/installing.html")]),t._v(" "),s("p",[t._v("http://javaguirre.net/2013/11/06/creating-a-user-profile-in-python-social-auth-in-django/\nhttps://gist.github.com/revolunet/5104376")]),t._v(" "),s("p",[t._v("http://i5on9i.blogspot.kr/2016/01/django-social-log-in-library.html")])])}),[],!1,null,null,null);s.default=e.exports}}]);