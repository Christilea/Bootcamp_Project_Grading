(this.webpackJsonpbootcamp_project_grading=this.webpackJsonpbootcamp_project_grading||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(17),o=n.n(r),i=(n(25),n(20)),l=n(7),s=n(9),j=(n.p,n(26),n(41)),d=n(8),u=n(2),b=(n(27),n(0));function h(e){return Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)(d.c,{exact:!0,to:"/",activeStyle:{fontWeight:"bold",color:"white",border:"1px solid white"},children:"Home"}),Object(b.jsx)(d.c,{to:"/gradebook",activeStyle:{fontWeight:"bold",color:"white",border:"1px solid white"},children:"Gradebook"}),Object(b.jsx)(d.c,{to:"/new",activeStyle:{fontWeight:"bold",color:"white",border:"1px solid white"},children:"Enter a new grade"}),e.login?Object(b.jsxs)("span",{className:"welcome",children:["Welcome, ",e.user," "," ",Object(b.jsx)("button",{onClick:e.loginToggle,children:"Log out"})]}):null]})}function p(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{name:"username",onChange:e.handleChange,placeholder:"username"}),Object(b.jsx)("input",{onChange:e.handlePasswordChange,type:"password",name:"password",placeholder:"password"}),Object(b.jsx)("button",{onClick:e.setUser,children:"Log in"})]})})}function g(e){return Object(b.jsx)("div",{className:"homeDiv",children:e.login?Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:["Welcome, ",e.user]}),Object(b.jsx)("h5",{children:"Use the links above to navigate."}),Object(b.jsx)("h5",{children:"In a typical application, this would be connected to a backend that would store grade information."}),Object(b.jsx)("h5",{children:"In this case, however, all grades are simulated, projects cannot be saved or edited, and all new grades will not persist upon next login."})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Please log in"}),Object(b.jsx)("h5",{children:"New users can use any username and password"}),Object(b.jsx)(p,{handleChange:e.handleChange,handlePasswordChange:e.handlePasswordChange,setUser:e.setUser})]})})}var O=function(e){return e<50?"Incomplete":e<=52?"F-":e<=57?"F":e<=59?"F+":e<=62?"D-":e<=67?"D":e<=69?"D+":e<=72?"C-":e<=77?"C":e<=79?"C+":e<=82?"B-":e<=87?"B":e<=89?"B+":e<=92?"A-":e<=97?"A":"A+"};n(37);function x(e){var t=e.project;return Object(b.jsxs)("div",{className:"gradeDiv",children:[Object(b.jsxs)("h2",{children:["Title: ",Object(b.jsx)(d.b,{to:"/project/".concat(t.id),children:t.projTitle})]}),Object(b.jsxs)("h4",{children:["Due: ",t.dueDate]}),Object(b.jsxs)("h4",{children:["Group size: ",t.groupSize]}),Object(b.jsxs)("h4",{children:["Score: ",t.gradeCalc]}),Object(b.jsxs)("h4",{children:["Letter: ",O(t.gradeCalc)]})]})}n(38);function m(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"hi",children:"Gradebook"}),Object(b.jsx)("div",{className:"gradebook",children:e.projects.map((function(e){return Object(b.jsx)(x,{project:e})}))})]})}function v(e){return Object(b.jsxs)("div",{children:["Enter a new project",Object(b.jsxs)("form",{onSubmit:e.submit,children:[Object(b.jsx)("label",{htmlFor:"projTitle",children:"Project Title"}),Object(b.jsx)("input",{onChange:e.newTitle,id:"projTitle",placeholder:"Project Title"}),Object(b.jsx)("label",{htmlFor:"dueDate",children:"Due Date"}),Object(b.jsx)("input",{onChange:e.dueDateChange,id:"dueDate",type:"date"}),Object(b.jsx)("label",{htmlFor:"groupSize",children:"Group Size"}),Object(b.jsx)("input",{onChange:e.groupSize,id:"groupSize",type:"number",min:"1",placeholder:"2"}),Object(b.jsx)("label",{htmlFor:"gradeCalc",children:"Numerical grade"}),Object(b.jsx)("input",{onChange:e.gradeChange,id:"gradeCalc",type:"number",min:"0",max:"100",placeholder:"0-100"}),Object(b.jsx)("input",{type:"submit"})]})]})}var f=[{id:1,projTitle:"Football tracker",projReqs:["Responsive","Polished UI"],dueDate:"2021-09-27",varCats:["Category 1","Category 2"],varCatsVals:["Value 1","Value 2"],groupSize:4,groupScore:["Score 1","Score 2"],memberScore:["Score 1 mem 1"],links:["deployed link","github link"],comments:["comment 1","comment 2"],gradeCalc:89},{id:2,projTitle:"Food finder",projReqs:["Responsive","Polished UI"],dueDate:"2021-09-23",varCats:["Category 1","Category 2"],varCatsVals:["Value 1","Value 2"],groupSize:4,groupScore:["Score 1","Score 2"],memberScore:["Score 1 mem 1"],links:["deployed link","github link"],comments:["comment 1","comment 2"],gradeCalc:73}];function C(e){var t=Object(u.g)().project,n=e.projects.filter((function(e){return e.id===t})),a=function(e){e.preventDefault()},r=Object(c.useState)(n[0].gradeCalc),o=Object(s.a)(r,2),i=o[0],l=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"header",children:"On any normal application, the user would be able to edit these and update the gradebook accordingly. Since there is no backend, the simulation ends here, with all fields editable."}),Object(b.jsxs)("div",{className:"projectDiv",children:[Object(b.jsxs)("h2",{children:["Title: ",Object(b.jsx)("input",{type:"text",onChange:a,defaultValue:n[0].projTitle})]}),Object(b.jsxs)("h4",{children:["Due:",Object(b.jsx)("input",{type:"date",onChange:a,defaultValue:n[0].dueDate})]}),Object(b.jsxs)("h4",{children:["Group size: ",Object(b.jsx)("input",{type:"number",onChange:a,defaultValue:n[0].groupSize})]}),Object(b.jsxs)("h4",{children:["Score: ",Object(b.jsx)("input",{type:"number",onChange:function(e){e.preventDefault(),l(e.target.value)},defaultValue:n[0].gradeCalc})]}),Object(b.jsxs)("h4",{children:["Letter: ",O(i)]}),Object(b.jsx)("button",{children:Object(b.jsx)(d.b,{to:"/gradebook",children:"Save (doesn't actually save)"})})]})]})}function w(){return Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"Cannot find the requested page. Please navigate using the links above."})})}var S=function(){var e=Object(c.useState)(f),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({id:null,projTitle:"",dueDate:null,groupSize:null,gradeCalc:null}),o=Object(s.a)(r,2),p=o[0],O=o[1],x=Object(c.useState)(""),S=Object(s.a)(x,2),y=S[0],D=S[1],k=Object(c.useState)(""),T=Object(s.a)(k,2),P=T[0],z=T[1],F=Object(c.useState)(""),N=Object(s.a)(F,2),V=N[0],I=N[1],U=Object(c.useState)(!1),L=Object(s.a)(U,2),B=L[0],G=L[1];return Object(b.jsxs)(d.a,{children:[Object(b.jsx)(h,{login:B,loginToggle:function(){G(!B)},user:y}),Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{exact:!0,path:"/gradebook",children:B?Object(b.jsx)(m,{login:B,projects:n}):Object(b.jsx)(u.a,{to:"/"})}),Object(b.jsx)(u.b,{exact:!0,path:"/project/:project",children:B?Object(b.jsx)(C,{login:B,projects:n}):Object(b.jsx)(u.a,{to:"/"})}),Object(b.jsx)(u.b,{exact:!0,path:"/new",children:B?Object(b.jsx)(v,{login:B,submit:function(e){e.preventDefault(),O(Object(l.a)(Object(l.a)({},p),{},{id:Object(j.a)()})),a([].concat(Object(i.a)(n),[p]))},newTitle:function(e){O(Object(l.a)(Object(l.a)({},p),{},{projTitle:e.target.value}))},dueDateChange:function(e){O(Object(l.a)(Object(l.a)({},p),{},{dueDate:e.target.value}))},groupSize:function(e){O(Object(l.a)(Object(l.a)({},p),{},{groupSize:e.target.value}))},gradeChange:function(e){O(Object(l.a)(Object(l.a)({},p),{},{gradeCalc:e.target.value}))}}):Object(b.jsx)(u.a,{to:"/"})}),Object(b.jsx)(u.b,{exact:!0,path:"/",children:Object(b.jsx)(g,{handleChange:function(e){I(e.target.value)},handlePasswordChange:function(e){z(e.target.value)},login:B,setUser:function(e){e.preventDefault(),V&&P?(D(V),G(!B)):V&&!P?window.alert("Please enter your password"):!V&&P?window.alert("Please enter your username"):window.alert("Please enter both your username and password")},user:y})}),Object(b.jsx)(u.b,{path:"*",children:Object(b.jsx)(w,{})})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),y()}},[[39,1,2]]]);
//# sourceMappingURL=main.0a227175.chunk.js.map