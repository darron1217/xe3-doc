(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{465:function(t,s,a){"use strict";a.r(s);var e=a(43),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"토글-메뉴-제작-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#토글-메뉴-제작-방법"}},[t._v("#")]),t._v(" 토글 메뉴 제작 방법")]),t._v(" "),a("h2",{attrs:{id:"토글메뉴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#토글메뉴"}},[t._v("#")]),t._v(" 토글메뉴")]),t._v(" "),a("p",[t._v("부가적으로 필요한 기능들을 드롭박스로 호출할 수 있도록 토글메뉴를 사용할 수 있습니다. 예를 들어 게시글 페이지에서 게시글 작성자를 클릭하면 프로필을 보는 메뉴나, 회원의 관리페이지로 넘어갈 수 있는 토글메뉴가 우측에 나타나고, 공유아이콘을 클릭하면 페이스북에 공유하기, 라인에 공유하기, 트위터에 공유하기와 같은 토글메뉴 드롭박스에 나타나게 할 수 있습니다.")]),t._v(" "),a("p",[t._v("토글메뉴는 형태에 따라 3가지 타입을 지원합니다.")]),t._v(" "),a("ul",[a("li",[t._v("MENUTYPE_EXEC")]),t._v(" "),a("li",[t._v("MENUTYPE_LINK")]),t._v(" "),a("li",[t._v("MENUTYPE_RAW")])]),t._v(" "),a("h3",{attrs:{id:"토글메뉴-생성하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#토글메뉴-생성하기"}},[t._v("#")]),t._v(" 토글메뉴 생성하기")]),t._v(" "),a("p",[t._v("추가하고자 하는 새로운 토글메뉴 클래스에서 "),a("code",[t._v("AbstractToggleMenu")]),t._v(" 를 상속 받습니다. 그리고 명시된 추상메서드를 구현합니다.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// plugins/myplugin/src/ToggleMenus/ToggleItem.php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("MyPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ToggleMenus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ToggleItem")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractToggleMenu")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// implement code")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MENUTYPE_RAW")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'do_something()'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'js_file_directory'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("ul",[a("li",[a("code",[t._v("getText")]),t._v(": 메뉴가 펼쳐졌을때 보여지게될 문자열입니다.")]),t._v(" "),a("li",[a("code",[t._v("getType")]),t._v(": "),a("code",[t._v("MENUTYPE_EXEC")]),t._v(", "),a("code",[t._v("MENUTYPE_LINK")]),t._v(", "),a("code",[t._v("MENUTYPE_RAW")]),t._v(" 세 가지 중 한가지를 반환해야 합니다.")]),t._v(" "),a("li",[a("code",[t._v("getAction")]),t._v(": 해당 메뉴를 클릭했을때 실행 되어질 js 문자열입니다. 만약 타입이 "),a("code",[t._v("raw")]),t._v(" 인 경우 html 이 반환되어야 합니다.")]),t._v(" "),a("li",[a("code",[t._v("getScript")]),t._v(": 메뉴의 동작을 위해 특정 js 파일이 필요한 경우 해당 파일의 경로를 반환해 줍니다.")])]),t._v(" "),a("h4",{attrs:{id:"exec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exec"}},[t._v("#")]),t._v(" exec")]),t._v(" "),a("p",[a("code",[t._v("exec")]),t._v(" 타입은 "),a("code",[t._v("getAction")]),t._v(" 에 의해 반환된 문자열이 그 자체로 js 로 실행 가능한 형태를 가집니다. 특정 함수를 실행하는 경우 함수에서 필요로하는 인자는 해당 토글메뉴내에서 제공되어야 합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("public function getType()\n{\n  return static::MENUTYPE_EXEC;\n}\n\npublic function getAction()\n{\n  return 'alert(\"hello\")';\n}\n")])])]),a("h4",{attrs:{id:"link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[t._v("#")]),t._v(" link")]),t._v(" "),a("p",[a("code",[t._v("link")]),t._v(" 타입은 클릭시 다른페이지로 이동하는 메뉴입니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("public function getType()\n{\n  return static::MENUTYPE_LINK;\n}\n\npublic function getAction()\n{\n  return '/';\n}\n")])])]),a("h4",{attrs:{id:"raw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raw"}},[t._v("#")]),t._v(" raw")]),t._v(" "),a("p",[a("code",[t._v("raw")]),t._v(" 타입은 메뉴에 표현될 형태부터 실행될 방식까지 직접 지정하여 사용하는 방식입니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("public function getType()\n{\n  return static::MENUTYPE_RAW;\n}\n\npublic function getAction()\n{\n  return '<a href=\"#\" onclick=\"method('argument')\">Raw메뉴</a>';\n}\n")])])]),a("h3",{attrs:{id:"토글메뉴-등록"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#토글메뉴-등록"}},[t._v("#")]),t._v(" 토글메뉴 등록")]),t._v(" "),a("h4",{attrs:{id:"컴포넌트-아이디"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#컴포넌트-아이디"}},[t._v("#")]),t._v(" 컴포넌트 아이디")]),t._v(" "),a("p",[t._v("컴포넌트 아이디는 아래와 같은 규칙으로 작성합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<type>/toggleMenu/<plugin>@<name>\n")])])]),a("p",[a("code",[t._v("type")]),t._v("은 토글메뉴를 사용할 타입의 아이디 입니다. (ex - "),a("code",[t._v("user")]),t._v(", "),a("code",[t._v("module/board@board")]),t._v(")"),a("br"),t._v(" "),a("code",[t._v("plugin")]),t._v("은 토글메뉴가 소속될 플러그인 디렉토리 이름입니다."),a("br"),t._v(" "),a("code",[t._v("name")]),t._v("은 토글메뉴의 고유한 아이디 입니다.")]),t._v(" "),a("h4",{attrs:{id:"컴포넌트-등록"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#컴포넌트-등록"}},[t._v("#")]),t._v(" 컴포넌트 등록")]),t._v(" "),a("p",[t._v("composer.json 파일에 다음과 같이 입력합니다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// plugins/my_plugin/composer.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extra"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xpressengine"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my plugin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"component"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_plugin@my_field/toggleMenu/my_plugin@toggle_item"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"class"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GilDongHong\\\\XePlugin\\\\MyPlugin\\\\ToggleMenus\\\\ToggleItem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"toggle_item ToggleItem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The toggleMenu supported by My_plugin plugin."')]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("h3",{attrs:{id:"토글메뉴-띄우기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#토글메뉴-띄우기"}},[t._v("#")]),t._v(" 토글메뉴 띄우기")]),t._v(" "),a("p",[t._v("type을 통해 등록된 토글메뉴를 불러올 수 있습니다. 가장 직관적인 방법은 ToggleMenuHandler의 getItems 메쏘드를 사용하는 것입니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("app('xe.toggleMenu')->getItems('user');\n\n//[\n//     \"user/toggleMenu/xpressengine@profile\" => App\\ToggleMenus\\User\\ProfileItem,\n//     \"user/toggleMenu/xpressengine@manage\" => App\\ToggleMenus\\User\\ManageItem,\n//]\n")])])]),a("p",[t._v("해당 함수는 user를 "),a("code",[t._v("$type")]),t._v("으로 삼은 ToggleMenu 아이템들을 리턴합니다."),a("br"),t._v("\n타입에 따라서 모듈과 같이 instance를 사용하는 경우 두 번째 파라미터로 "),a("code",[t._v("$instanceId")]),t._v(","),a("br"),t._v("\nUser 모델과 같이 고유한 키값을 가지는 경우 세 번째 파라미터로 "),a("code",[t._v("$identifier")]),t._v("를 받습니다."),a("br"),t._v("\n각 파라미터는 ToggleMenu의 getAction에서 받아서 처리합니다.")]),t._v(" "),a("h4",{attrs:{id:"frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontend"}},[t._v("#")]),t._v(" Frontend")]),t._v(" "),a("p",[t._v("XE는 Frontend에서 ToggleMenu 아이템들을 로드할 수 있는 방법을 이미 준비했습니다."),a("br"),t._v(" "),a("code",[t._v("<a>")]),t._v("태그 안에 몇 가지 속성을 주는 것만으로 해당 type에서 필요한 ToggleMenu를"),a("br"),t._v(" "),a("code",[t._v("<li>...</li>")]),t._v("태그에 담아 렌더링할 수 있습니다.")]),t._v(" "),a("p",[a("code",[t._v("data-toggle")]),t._v(' "xe-page-toggle-menu"를 삽입합니다.'),a("br"),t._v(" "),a("code",[t._v("data-url")]),t._v(" 를 넣어 toggleMenu 리스트를 동적으로 호출할 url을 삽입합니다."),a("br"),t._v(" "),a("code",[t._v("data-data")]),t._v(" 사용할 type과 해당 type이 필요로 하는 파라미터를 추가로 넣어줍니다.($identifier의 키값을 id로 받고 있는 것을 확인합니다.)"),a("br"),t._v(" "),a("code",[t._v("data-side")]),t._v(" 렌더링된 리스트가 해당 태그 어느 방향에 위치할지 결정합니다.")]),t._v(" "),a("p",[t._v("아래의 예제는 board플러그인의 모듈을 target으로 삼은 targetMenu를 호출하는 태그입니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<a href=\"#\" \n   data-toggle=\"xe-page-toggle-menu\"\n   data-url=\"{{route('toggleMenuPage')}}\"\n   data-data='{!! json_encode(['id'=>$item->id,'type'=>'module/board@board','instanceId'=>$item->instance_id]) !!}'\n   data-side=\"dropdown-menu-right\">\n   {{$text}}\n</a>\n")])])]),a("h3",{attrs:{id:"토글메뉴-관리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#토글메뉴-관리"}},[t._v("#")]),t._v(" 토글메뉴 관리")]),t._v(" "),a("p",[t._v("관리자가 해당 타입에 등록되어있는 토글메뉴를 사용할지 안할지를 결정할 수 있도록 화면을 띄워줄 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("{!! new ToggleMenuSection($type) !!}\n")])])]),a("p",[t._v("위 예제는 $type을 사용하는 토글메뉴들의 리스트를 on/off할 수 있는 토글버튼과 함께 렌더링합니다. 저장 버튼을 누르면 ToggleMenuHandler를 통해 config에 설정정보를 저장합니다.")])])}),[],!1,null,null,null);s.default=n.exports}}]);