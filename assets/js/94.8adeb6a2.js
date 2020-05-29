(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{460:function(t,a,s){"use strict";s.r(a);var e=s(43),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page"}},[t._v("#")]),t._v(" Page")]),t._v(" "),s("h2",{attrs:{id:"page-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-2"}},[t._v("#")]),t._v(" Page")]),t._v(" "),s("p",[s("code",[t._v("XE.page()")]),t._v("의 기능을 사용하기 위해서는 "),s("strong",[t._v("xe-page.js")]),t._v("파일을 로드하여야 합니다.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// blade파일(php)에서 로드할 경우")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" XeFrontend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("js")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'assets/core/xe-ui-component/js/xe-page.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'body'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"xe-page-url-target-options-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xe-page-url-target-options-callback"}},[t._v("#")]),t._v(" XE.page(url, target, options, callback)")]),t._v(" "),s("p",[t._v("target영역에 html을 로드하여 화면에 랜더링합니다. response로 html 및 js, css파일들의 경로를 전달 받습니다.")]),t._v(" "),s("h4",{attrs:{id:"동작-순서"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동작-순서"}},[t._v("#")]),t._v(" 동작 순서")]),t._v(" "),s("ol",[s("li",[t._v("js, css파일 로드")]),t._v(" "),s("li",[t._v("html 로드")]),t._v(" "),s("li",[t._v("callback 실행")])]),t._v(" "),s("h4",{attrs:{id:"arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" arguments")]),t._v(" "),s("ul",[s("li",[t._v("url (string)\n"),s("ul",[s("li",[t._v("ajax가 호출될 url")])])]),t._v(" "),s("li",[t._v("target (string)\n"),s("ul",[s("li",[t._v("html이 append될 selector")])])]),t._v(" "),s("li",[t._v("options (object)\n"),s("ul",[s("li",[t._v("data (object) 전송 파라미터")]),t._v(" "),s("li",[t._v("type (string) http method 'get'|'post'")]),t._v(" "),s("li",[t._v("addType (string) target에 response html을 넣어주는 방식의 타입 "),s("code",[t._v("append")]),t._v(", "),s("code",[t._v("prepend")]),t._v(", "),s("code",[t._v("before")]),t._v(", "),s("code",[t._v("after")]),t._v(". 옵션을 명시하지 않을 경우 target영역에 html을 덮어 넣습니다.")])])])]),t._v(" "),s("h4",{attrs:{id:"callback-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#callback-function"}},[t._v("#")]),t._v(" callback (function)")]),t._v(" "),s("p",[t._v("html append이후에 실행될 callback")]),t._v(" "),s("h4",{attrs:{id:"dom-element에-data-attruibute를-이용한-xe-page-사용-방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-element에-data-attruibute를-이용한-xe-page-사용-방법"}},[t._v("#")]),t._v(" DOM Element에 "),s("code",[t._v("data-*")]),t._v(" attruibute를 이용한 XE.page 사용 방법")]),t._v(" "),s("p",[t._v("xe.page.js파일을 로드하면 "),s("code",[t._v('data-toggle="xe-page"')]),t._v(" attribute를 사용한 DOM에 click이벤트를 바인딩 합니다.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("assets/core/common/xe.page.js")]),t._v("의 파일을 로드합니다.")]),t._v(" "),s("li",[t._v("클릭되는 DOM에 "),s("code",[t._v("data-toggle='xe-page'")]),t._v(" attribute를 명시하여야 합니다.")]),t._v(" "),s("li",[t._v("href or data-url에 ajax를 요청할 url정보를 명시합니다.")]),t._v(" "),s("li",[t._v("data-target으로 append할 영역의 selector를 명시합니다.")]),t._v(" "),s("li",[t._v("data-callback으로 callback명을 명시합니다.")]),t._v(" "),s("li",[t._v("data-params로 요청시 전송할 파라미터 정보를 명시합니다. (JSON string)")])]),t._v(" "),s("div",{staticClass:"language-markup extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markup"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/api/test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-toggle")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xe-page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-params")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{'param1':'value1'}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-target")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-callback")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("callbackFunc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("[XE.page 실행]"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);