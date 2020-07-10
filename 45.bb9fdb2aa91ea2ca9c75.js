(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{216:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",[a("h2",[t._v("Usage")]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("mcw-snackbar")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("message")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Simple message"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":dismissAction")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v("\n>")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("mcw-snackbar")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("p",[t._v("Simple "),a("code",{pre:!0},[t._v("mcw-snackbar")]),t._v(" does not queue messages.")]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  data() {\n    "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("open")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n    };\n  },\n")])]),t._v(" "),a("p",[t._v("or "),a("code",{pre:!0},[t._v("mcw-snackbar-queue")]),t._v(" maintains an internal queue of messages displayed in sequence.")]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("mcw-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"showLeading"')]),t._v(">")]),t._v("Leading"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("mcw-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("mcw-snackbar-queue")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"bar"')]),t._v(" />")]),t._v("\n")])]),t._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n    showLeading() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.bar.handleSnack({\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("message")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`Your photo has been archived.`")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("timeoutMs")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("5000")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("actionText")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Undo'")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("leading")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n      });\n    },\n  },\n")])]),t._v(" "),a("h3",[t._v("Props")]),t._v(" "),a("h3",[a("code",{pre:!0},[t._v("mcw-snackbar")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[t._v("open")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("v-model")])]),t._v(" "),a("tr",[a("td",[t._v("message")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Message to show in the snackbar")])]),t._v(" "),a("tr",[a("td",[t._v("reason")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Passed as argument when snackbar closes programatically")])]),t._v(" "),a("tr",[a("td",[t._v("timeoutMs")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Timeout in milliseconds when to close snackbar.")])]),t._v(" "),a("tr",[a("td",[t._v("closeOnEscape")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v('Closes popup on "Esc" button if true.')])]),t._v(" "),a("tr",[a("td",[t._v("actionText")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Text for action button")])]),t._v(" "),a("tr",[a("td",[t._v("leading")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("Shows snackbar on the left if true")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("(or right for rtl languages)")])]),t._v(" "),a("tr",[a("td",[t._v("stacked")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("Shows buttons under text if true")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("dismiss-action")])]),t._v(" "),a("td",[t._v("String/Boolean")]),t._v(" "),a("td",[t._v("Show dismiss action")])])])]),t._v(" "),a("h3",[a("code",{pre:!0},[t._v("mcw-snackbar-queue")])]),t._v(" "),a("h4",[t._v("Methods")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Method")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[t._v("handleSnack( { timeoutMs, closeOnEscape, message, actionText, dismissAction, stacked, leading, actionHandler })")])]),t._v(" "),a("td",[t._v("queues the next snack")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("message")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Message to show in the snackbar")])]),t._v(" "),a("tr",[a("td",[t._v("reason")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Passed as argument when snackbar closes programatically")])]),t._v(" "),a("tr",[a("td",[t._v("timeoutMs")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Timeout in milliseconds when to close snackbar.")])]),t._v(" "),a("tr",[a("td",[t._v("closeOnEscape")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v('Closes popup on "Esc" button if true.')])]),t._v(" "),a("tr",[a("td",[t._v("actionText")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Text for action button")])]),t._v(" "),a("tr",[a("td",[t._v("leading")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("Shows snackbar on the left if true (or right for rtl languages)")])]),t._v(" "),a("tr",[a("td",[t._v("stacked")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("Shows buttons under text if true")])]),t._v(" "),a("tr",[a("td",[t._v("actionHandler")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("Callback on action")])])])]),t._v(" "),a("h3",[t._v("Reference")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar"}},[t._v("https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar")])])])])}],!1,null,null,null);s.default=r.exports}}]);
//# sourceMappingURL=45.bb9fdb2aa91ea2ca9c75.js.map