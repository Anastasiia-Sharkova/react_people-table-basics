(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(10),n=a.n(c),s=a(6),r=a(2),l=a(0),j=(a(15),a(1)),i=function(){return Object(j.jsx)("div",{className:"homePage",children:Object(j.jsx)("p",{className:"homePage__title",children:"HomePage"})})},o=a(7),b=a(4),d=a(5),h=a.n(d),p=(a(18),function(e){var t=e.person;return Object(j.jsxs)("tr",{className:"table-row",children:[Object(j.jsx)("td",{className:"table-row__data",children:t.name}),Object(j.jsx)("td",{className:"table-row__data",children:t.sex}),Object(j.jsx)("td",{className:"table-row__data",children:t.born}),Object(j.jsx)("td",{className:"table-row__data",children:t.died}),Object(j.jsx)("td",{className:"table-row__data",children:t.motherName||"no information"}),Object(j.jsx)("td",{className:"table-row__data",children:t.fatherName||"no information"})]})}),u=(a(19),function(e){var t=e.people;return Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"table-header",children:"Name"}),Object(j.jsx)("th",{className:"table-header",children:"Sex"}),Object(j.jsx)("th",{className:"table-header",children:"Born"}),Object(j.jsx)("th",{className:"table-header",children:"Died"}),Object(j.jsx)("th",{className:"table-header",children:"Mother"}),Object(j.jsx)("th",{className:"table-header",children:"Father"})]})}),Object(j.jsx)("tbody",{className:"table-body",children:t.map((function(e){return Object(j.jsx)(p,{person:e},e.slug)}))})]})}),m=function(){var e=Object(o.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1];return Object(l.useEffect)((function(){var e=function(){var e=Object(o.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(j.jsx)(u,{people:a})},O=(a(20),function(){return Object(j.jsx)("div",{className:"not-found-page__img"})}),f=(a(21),function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("h1",{className:"app__title",children:"People table"}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(s.b,{to:"/",className:"app__link",children:"Home page"}),Object(j.jsx)(s.b,{to:"/people",className:"app__link",children:"People page"})]}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/",element:Object(j.jsx)(i,{})}),Object(j.jsx)(r.a,{path:"people",element:Object(j.jsx)(x,{})}),Object(j.jsx)(r.a,{path:"*",element:Object(j.jsx)(O,{})})]})]})});n.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.883b6569.chunk.js.map