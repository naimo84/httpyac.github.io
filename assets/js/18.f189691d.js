(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{394:function(t,s,e){"use strict";e.r(s);var a=e(28),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"meta-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meta-data"}},[t._v("#")]),t._v(" Meta Data")]),t._v(" "),e("p",[t._v("All lines starting with "),e("code",[t._v("#")]),t._v(" are interpreted as meta data lines. Lines in Format "),e("code",[t._v("# @foo bar")]),t._v(" are interpreted as meta data (or alternatively "),e("code",[t._v("// @foo")]),t._v(" because of "),e("a",{attrs:{href:"https://www.jetbrains.com/help/idea/exploring-http-syntax.html#enable-disable-redirects",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intellij"),e("OutboundLink")],1),t._v("). It is possible to attach meta data that influences the processing of the request")]),t._v(" "),e("h2",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),e("p",[t._v("Responses of a requests with a Name are automatically added as Variables and can be reused by other Requests")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @name json\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/json")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n\n###\n# @ref json\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("POST")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/anything")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n{{json.slideshow.author}}")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Name must be unique in all imported files, there is no scope support and first found request with name will be used.")])]),t._v(" "),e("h2",{attrs:{id:"title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" Title")]),t._v(" "),e("p",[t._v("additional title of region (used in cli output and outline view). It is possible to define title in region delimiter")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @title get json\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/json")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("### get json\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/json")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])])])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("additional description of region (used in cli output and outline view)")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @description get json content\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/json")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])])])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("first comment of a region is automatically used as description")])]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("/*\nget json content\n*/\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/json")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])])])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"ref-and-forceref"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ref-and-forceref"}},[t._v("#")]),t._v(" Ref and ForceRef")]),t._v(" "),e("p",[t._v("Requests can reference other requests. When the request is called, it is ensured that the referenced Request is called beforehand. "),e("code",[t._v("forceRef")]),t._v(" always call the other request. "),e("code",[t._v("ref")]),t._v(" only calls if no response is cached.")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @name json\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/json")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n\n###\n# @ref json\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("POST")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/anything")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n{{json.slideshow.author}}\n\n###\n# @forceRef keycloak\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("POST")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/anything")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n{{json.slideshow.author}}")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("It is possible to reference any number of requests.")])]),t._v(" "),e("h2",{attrs:{id:"import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[t._v("#")]),t._v(" Import")]),t._v(" "),e("p",[t._v("To reference Requests from other files, these must first be imported. Imported files are enabled for all requests in one file.")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @import ./name.http\n# @ref json\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("POST")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/anything")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n{{json.slideshow.author}}")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"disabled"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disabled"}},[t._v("#")]),t._v(" Disabled")]),t._v(" "),e("p",[t._v("requests can be disabled. It is possible to disable requests dynamically with "),e("span",{pre:!0},[t._v("{{httpRegion.metaParams.disabled=true}}")]),t._v(" in script")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @disabled\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/json")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])])])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"jwt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[t._v("#")]),t._v(" JWT")]),t._v(" "),e("p",[t._v("jwt meta data supports auto decode of jwt token. just provide property in response to decode and it is added to the promise with ${property}_parsed")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @jwt data\n\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("POST")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/anything")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"inject-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inject-variables"}},[t._v("#")]),t._v(" Inject Variables")]),t._v(" "),e("p",[t._v("Inject Variables in request body (needed because of compatibility with Intellij)")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @injectVariables\n\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("POST")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/anything")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n< ./variables.json")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"note"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[t._v("#")]),t._v(" Note")]),t._v(" "),e("p",[t._v("shows a confirmation dialog before sending request")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @note Are you sure?\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("DELETE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/anything")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])])])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"loop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loop"}},[t._v("#")]),t._v(" Loop")]),t._v(" "),e("p",[t._v("Allows multiple Invocations of a Request with different parameters.")]),t._v(" "),e("h3",{attrs:{id:"for-of"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-of"}},[t._v("#")]),t._v(" for ... of ...")]),t._v(" "),e("p",[t._v("Variable "),e("code",[t._v("$index")]),t._v(" and Variable Name is injected in Variables for every iteration")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("{{\n  exports.data = [1, 2, 3];\n}}\n# @loop for item of data\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/anything?item={{item}}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])])])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h3",{attrs:{id:"for"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for"}},[t._v("#")]),t._v(" for ...")]),t._v(" "),e("p",[t._v("Variable "),e("code",[t._v("$index")]),t._v(" is injected in Variables for every iteration")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @loop for 4\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/anything?item={{$index}}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])])])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"while"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#while"}},[t._v("#")]),t._v(" while ...")]),t._v(" "),e("p",[t._v("Variable "),e("code",[t._v("$index")]),t._v(" is injected in Variables for every iteration")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("{{\n  exports.expression = {\n    index: 0,\n  };\n}}\n# @loop while expression.index < 3\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("/anything?item={{expression.index++}}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])])])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("An index is automatically appended to the Name of the request, which can be used to access it in subsequent requests (name=foo => foo0, foo1,...).")])]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @loop for 4\n# @name foo\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/anything?item={{$index}}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n\n###\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("POST")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/anything?item={{foo3.args.item}}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h2",{attrs:{id:"save"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#save"}},[t._v("#")]),t._v(" Save")]),t._v(" "),e("p",[t._v("If "),e("code",[t._v("@save")]),t._v(" is specified, the response will not be displayed but saved directly.")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @name save\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/json")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])])])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Meta Data is ignored in CLI and Httpbook")])]),t._v(" "),e("h2",{attrs:{id:"openwith"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#openwith"}},[t._v("#")]),t._v(" OpenWith")]),t._v(" "),e("p",[t._v("Provide viewType of custom editor to preview files. If content-type header of the response is image, files will be previewed automatically with built-in image preview. If content-type is "),e("code",[t._v("application/pdf")]),t._v(" and extension "),e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("vscode-pdf"),e("OutboundLink")],1),t._v(" is installed, it will be used for preview.")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @openWith imagePreview.previewEditor\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://raw.githubusercontent.com/AnWeber/vscode-httpyac/master/icon.png")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])])])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Meta Data is ignored in CLI and Httpbook")])]),t._v(" "),e("h2",{attrs:{id:"extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extension"}},[t._v("#")]),t._v(" Extension")]),t._v(" "),e("p",[t._v("Change Extension of file for save or openWith.")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @name save\n# @extension gson\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/json")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])])])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Meta Data is ignored in CLI and Httpbook")])]),t._v(" "),e("h2",{attrs:{id:"no-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#no-log"}},[t._v("#")]),t._v(" No log")]),t._v(" "),e("p",[t._v("Prevent logging of request data in output console")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @no-log\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://httpbin.org/json")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])])])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"no-cookiejar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#no-cookiejar"}},[t._v("#")]),t._v(" No CookieJar")]),t._v(" "),e("p",[t._v("cookieJar support is disabled for this request")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @no-cookie-jar\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://www.google.de")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])])])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"no-client-certificate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#no-client-certificate"}},[t._v("#")]),t._v(" No Client Certificate")]),t._v(" "),e("p",[t._v("SSL client certificate is not send for this request")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @no-client-cert\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://client.badssl.com/")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("X-ClientCert:")]),t._v(" pfx: ../assets/badssl.com-client.p12 passphrase: badssl.com")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"no-reject-unauthorized"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#no-reject-unauthorized"}},[t._v("#")]),t._v(" No Reject Unauthorized")]),t._v(" "),e("p",[t._v("All invalid SSL certificates will be ignored and no error will be thrown.")]),t._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[t._v("# @no-reject-unauthorized\n\n"),e("span",{pre:!0,attrs:{class:"token request-line"}},[e("span",{pre:!0,attrs:{class:"token method property"}},[t._v("GET")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://client.badssl.com/")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("X-ClientCert:")]),t._v(" pfx: ../assets/badssl.com-client.p12 passphrase: badssl.com")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);