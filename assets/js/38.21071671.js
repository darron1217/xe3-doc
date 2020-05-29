(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{402:function(e,t,s){"use strict";s.r(t);var a=s(43),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"응답"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#응답"}},[e._v("#")]),e._v(" 응답")]),e._v(" "),s("h2",{attrs:{id:"response-사용의-제한"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-사용의-제한"}},[e._v("#")]),e._v(" Response 사용의 제한")]),e._v(" "),s("p",[e._v("XE의 기본 프레임워크인 라라벨에서는 대부분의 라우트나 컨트롤러 액션에서 "),s("code",[e._v("Illuminate\\Http\\Response")]),e._v("의 인스턴스나 "),s("RouterLink",{attrs:{to:"/04. 개발자 문서/view.html"}},[e._v("뷰")]),e._v("를 반환하도록 합니다.")],1),e._v(" "),s("p",[e._v("하지만 XE는 웹 브라우저로 html 형식의 응답을 보낼 때, 스킨과 테마를 적용한 후 보내야 합니다. 특별한 경우가 아니라면 컨트롤러에서 "),s("code",[e._v("Illuminate\\Http\\Response")]),e._v(" 인스턴스나 뷰를 직접 반환(return)하지 마십시오. 대신, "),s("RouterLink",{attrs:{to:"/04. 개발자 문서/presenter.html"}},[e._v("프레젠터")]),e._v("를 사용하여 반환하십시오. 반드시 "),s("RouterLink",{attrs:{to:"/04. 개발자 문서/presenter.html"}},[e._v("프레젠터")]),e._v("를 사용해야만 테마와 스킨이 적용되고 위젯 또한 정상적으로 출력됩니다.")],1),e._v(" "),s("h2",{attrs:{id:"리다이렉트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#리다이렉트"}},[e._v("#")]),e._v(" 리다이렉트")]),e._v(" "),s("p",[e._v("일반적으로 리다이렉트 Response는 "),s("code",[e._v("Illuminate\\Http\\RedirectResponse")]),e._v(" 클래스의 인스턴스이며, 사용자를 다른 URL로 리다이렉트하는 데 필요한 적절한 헤더를 포함하고 있습니다.")]),e._v(" "),s("h3",{attrs:{id:"리다이렉트-반환하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#리다이렉트-반환하기"}},[e._v("#")]),e._v(" 리다이렉트 반환하기")]),e._v(" "),s("p",[s("code",[e._v("RedirectResponse")]),e._v(" 인스턴스를 생성하는 데는 몇 가지 방법이 있습니다. 가장 간단한 방법은 "),s("code",[e._v("redirect")]),e._v(" 헬퍼 함수를 사용하는 것입니다. 테스트를 진행할 때 리다이렉트 Response를 생성하는 모킹(Mock)은 일반적으로 잘 하지 않기 때문에, 대부분의 경우에 헬퍼 함수를 사용하게 됩니다.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("return redirect('user/login');\n")])])]),s("h3",{attrs:{id:"리다이렉트에-플래시-데이터와-함께-반환하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#리다이렉트에-플래시-데이터와-함께-반환하기"}},[e._v("#")]),e._v(" 리다이렉트에 플래시 데이터와 함께 반환하기")]),e._v(" "),s("p",[e._v("새로운 URL로 리다이렉트 이동하고 플래시 데이터를 세션에 저장 하는 것은 일반적으로 동시에 진행됩니다. 따라서 편의성을 높이기 위해 "),s("code",[e._v("RedirectResponse")]),e._v(" 인스턴스를 생성하고 "),s("strong",[e._v("동시에")]),e._v(" 메소드 체인을 통해 플래시 데이터를 세션에 저장할 수 있습니다:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("return redirect('user/login')->with('message', 'Login Failed');\n")])])]),s("h3",{attrs:{id:"이전-url로-리다이렉트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이전-url로-리다이렉트"}},[e._v("#")]),e._v(" 이전 URL로 리다이렉트")]),e._v(" "),s("p",[e._v("예를 들어, 폼 전송 후에, 사용자를 이전 URL로 리다이렉트 시키고자 하는 경우가 있을 수 있습니다. 이런 경우에는 "),s("code",[e._v("back")]),e._v(" 메소드를 사용하면 됩니다:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("return redirect()->back();\n\nreturn redirect()->back()->withInput();\n")])])]),s("h3",{attrs:{id:"이름이-지정된-라우트로-리다이렉트-하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이름이-지정된-라우트로-리다이렉트-하기"}},[e._v("#")]),e._v(" 이름이 지정된 라우트로 리다이렉트 하기")]),e._v(" "),s("p",[e._v("전달 인자 없이 "),s("code",[e._v("redirect")]),e._v(" 헬퍼 함수를 호출할 때에는 "),s("code",[e._v("Illuminate\\Routing\\Redirector")]),e._v("의 인스턴스가 반환됩니다. 따라서 "),s("code",[e._v("Redirector")]),e._v(" 인스턴스의 메소드를 사용할 수 있습니다. 예를 들어, 이름지 지정된 라우트로 이동하는 "),s("code",[e._v("RedirectResponse")]),e._v("를 생성하고자 한다면 "),s("code",[e._v("route")]),e._v(" 메소드를 사용할 수 있습니다:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("return redirect()->route('login');\n")])])]),s("h3",{attrs:{id:"이름이-지정된-라우트로-파라미터와-함께-리다이렉트-하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이름이-지정된-라우트로-파라미터와-함께-리다이렉트-하기"}},[e._v("#")]),e._v(" 이름이 지정된 라우트로 파라미터와 함께 리다이렉트 하기")]),e._v(" "),s("p",[e._v("라우트에 전달해야 할 파라미터가 있다면 "),s("code",[e._v("route")]),e._v(" 메소드의 두 번째 인자로 전달하면 됩니다.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// For a route with the following URI: profile/{id}\n\nreturn redirect()->route('profile', [1]);\n")])])]),s("h3",{attrs:{id:"이름지-지정된-라우트로-파라미터-이름과-함께-리다이렉트-하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이름지-지정된-라우트로-파라미터-이름과-함께-리다이렉트-하기"}},[e._v("#")]),e._v(" 이름지 지정된 라우트로 파라미터 이름과 함께 리다이렉트 하기")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// For a route with the following URI: profile/{user}\n\nreturn redirect()->route('profile', ['user' => 1]);\n")])])]),s("h3",{attrs:{id:"컨트롤러-액션으로-리다이렉트-하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#컨트롤러-액션으로-리다이렉트-하기"}},[e._v("#")]),e._v(" 컨트롤러 액션으로 리다이렉트 하기")]),e._v(" "),s("p",[e._v("이름이 지정된 라우트로 이동하는 "),s("code",[e._v("RedirectResponse")]),e._v(" 인스턴스를 생성하는것과 비슷하게 컨트롤러 액션으로 리다이렉션 할 수 있습니다.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("return redirect()->action('App\\Http\\Controllers\\HomeController@index');\n")])])]),s("blockquote",{staticClass:"caution"},[s("p",[s("strong",[e._v("주의:")]),e._v(" "),s("code",[e._v("URL:setRootControllerNamespace")]),e._v("를 통해서 컨트롤러의 루트 네임스페이스가 지정되었다면, 전체 네임 스페이스를 지정할 필요가 없습니다.")])]),e._v(" "),s("h3",{attrs:{id:"컨트롤러-액션으로-파라미터와-함께-리다이렉트-하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#컨트롤러-액션으로-파라미터와-함께-리다이렉트-하기"}},[e._v("#")]),e._v(" 컨트롤러 액션으로 파라미터와 함께 리다이렉트 하기")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("return redirect()->action('App\\Http\\Controllers\\UserController@profile', [1]);\n")])])]),s("h3",{attrs:{id:"컨트롤러-액션으로-파라미터-이름과-함께-리다이렉트-하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#컨트롤러-액션으로-파라미터-이름과-함께-리다이렉트-하기"}},[e._v("#")]),e._v(" 컨트롤러 액션으로 파라미터 이름과 함께 리다이렉트 하기")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("return redirect()->action('App\\Http\\Controllers\\UserController@profile', ['user' => 1]);\n")])])]),s("h2",{attrs:{id:"기타-response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기타-response"}},[e._v("#")]),e._v(" 기타 Response")]),e._v(" "),s("p",[s("code",[e._v("response")]),e._v(" 헬퍼 함수를 사용하여 편리하게 다른 타입의 response 인스턴스를 생성할 수도 있습니다. "),s("code",[e._v("response")]),e._v(" 헬퍼함수를 인자없이 호출하게 되면 "),s("code",[e._v("Illuminate\\Contracts\\Routing\\ResponseFactory")]),e._v(" contract를 반환합니다. 이 contract는 response를 생성하기 위한 다양한 메소드를 제공합니다.")]),e._v(" "),s("h3",{attrs:{id:"json-response-생성하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-response-생성하기"}},[e._v("#")]),e._v(" JSON response 생성하기")]),e._v(" "),s("p",[s("code",[e._v("json")]),e._v(" 메소드는 헤더의 "),s("code",[e._v("Content-Type")]),e._v("을 자동으로 "),s("code",[e._v("application/json")]),e._v("으로 지정합니다:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("return response()->json(['name' => 'Abigail', 'state' => 'CA']);\n")])])]),s("h3",{attrs:{id:"jsonp-response-생성하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonp-response-생성하기"}},[e._v("#")]),e._v(" JSONP Response 생성하기")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("return response()->json(['name' => 'Abigail', 'state' => 'CA'])\n                 ->setCallback($request->input('callback'));\n")])])]),s("h3",{attrs:{id:"파일-다운로드-response-생성하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#파일-다운로드-response-생성하기"}},[e._v("#")]),e._v(" 파일 다운로드 Response 생성하기")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("return response()->download($pathToFile);\n\nreturn response()->download($pathToFile, $name, $headers);\n\nreturn response()->download($pathToFile)->deleteFileAfterSend(true);\n")])])]),s("blockquote",{staticClass:"caution"},[s("p",[s("strong",[e._v("참고:")]),e._v(" 파일 다운로드를 관리하는 Symfony의 HttpFoundation에서 다운로드 할 파일의 이름이 ASCII 파일 이름임을 필요로 하고 있습니다.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);