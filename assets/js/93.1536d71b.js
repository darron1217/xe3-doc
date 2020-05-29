(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{459:function(a,t,s){"use strict";s.r(t);var e=s(43),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"page-modal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-modal"}},[a._v("#")]),a._v(" Page Modal")]),a._v(" "),s("h2",{attrs:{id:"page-modal-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-modal-2"}},[a._v("#")]),a._v(" Page Modal")]),a._v(" "),s("p",[a._v("XE.page의 기능을 사용하기 위해서는 "),s("strong",[a._v("xe-page.js")]),a._v("파일을 로드하여야 합니다.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//blade파일(php)에서 로드할 경우")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" XeFrontend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("js")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[a._v("'assets/core/xe-ui-component/js/xe-page.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"xe-pagemodal-url-options-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xe-pagemodal-url-options-callback"}},[a._v("#")]),a._v(" XE.pageModal(url, options, callback)")]),a._v(" "),s("p",[a._v("xeModal을 실행하여 html을 해당 modal영역에 랜더링합니다. response로 html 및 js, css파일들의 경로를 전달 받습니다.")]),a._v(" "),s("h4",{attrs:{id:"동작-순서"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동작-순서"}},[a._v("#")]),a._v(" 동작 순서")]),a._v(" "),s("ol",[s("li",[a._v("js, css파일 로드")]),a._v(" "),s("li",[a._v("html로드")]),a._v(" "),s("li",[a._v("callback 실행")]),a._v(" "),s("li",[a._v("xeModal 실행")])]),a._v(" "),s("h4",{attrs:{id:"arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[a._v("#")]),a._v(" arguments")]),a._v(" "),s("ul",[s("li",[a._v("url (string)\n"),s("ul",[s("li",[a._v("ajax가 호출될 url")])])]),a._v(" "),s("li",[a._v("options (object)\n"),s("ul",[s("li",[a._v("data (object) 전송 파라미터")]),a._v(" "),s("li",[a._v("type (string) http method 'get'|'post'")])])]),a._v(" "),s("li",[a._v("callback (function)\n"),s("ul",[s("li",[a._v("html append이후에 실행될 callback")])])])]),a._v(" "),s("h3",{attrs:{id:"dom-element-data-attruibute를-이용한-xe-pagemodal-사용-방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-element-data-attruibute를-이용한-xe-pagemodal-사용-방법"}},[a._v("#")]),a._v(" DOM Element "),s("code",[a._v("data-*")]),a._v(" attruibute를 이용한 XE.pageModal 사용 방법")]),a._v(" "),s("p",[a._v("xe.page.js파일을 로드하면 "),s("code",[a._v('data-toggle="xe-page-modal"')]),a._v(" attribute를 사용한 DOM에 click이벤트를 바인딩 합니다.")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("assets/core/common/xe.page.js")]),a._v("의 파일을 로드합니다.")]),a._v(" "),s("li",[a._v("클릭되는 DOM에 "),s("code",[a._v("data-toggle='xe-page-modal'")]),a._v(" attribute를 명시하여야 합니다.")]),a._v(" "),s("li",[a._v("href or data-url에 ajax를 요청할 url정보를 명시합니다.")]),a._v(" "),s("li",[a._v("data-callback으로 callback명을 명시합니다.")]),a._v(" "),s("li",[a._v("data-params로 요청시 전송할 파라미터 정보를 명시합니다. (JSON string)")])]),a._v(" "),s("div",{staticClass:"language-markup extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markup"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("api/test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" \n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("data-toggle")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("xe-page-modal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" \n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("data-params")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("{'param1':'value1'}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" \n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("data-callback")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("callbackFunc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("[XE.pageModal 실행]"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("p",[a._v("Controller 예시")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("class ExampleController extends Controller\n{\n    public function exampleReturnPopup()\n    {\n        //api_render 헬퍼 함수의 인자로 blade 파일의 경로를 지정하면 팝업으로 띄울 수 있도록 변환해줍니다. \n        return api_render('example_blade');\n    }\n}\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);