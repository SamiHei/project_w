(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"contactHeader":"Contact Me","contactEmail":"email.placeholder"}')},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(23),s=a.n(i),r=(a(31),a(32),a(13)),o=(a(33),a(12)),l=a.p+"static/media/logo.e2a21c04.png",d=a(0);var j=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1];return window.addEventListener("scroll",(function(){window.scrollY>50?c(!0):c(!1)})),Object(d.jsxs)("nav",{className:a?"nav-bar active":"nav-bar",children:[Object(d.jsx)("a",{href:"./",children:Object(d.jsx)("img",{src:l,className:"logo-home"})}),Object(d.jsxs)("ul",{className:"nav-links",children:[Object(d.jsx)("a",{href:"#page-2",children:Object(d.jsx)("li",{children:"About me"})}),Object(d.jsx)("a",{href:"#page-3",children:Object(d.jsx)("li",{children:"Projects"})}),Object(d.jsx)(o.b,{to:"/cv",children:Object(d.jsx)("li",{children:"CV"})})]})]})};a(39);var h=function(){return Object(d.jsxs)("div",{className:"page-1",children:[Object(d.jsx)("div",{id:"startHeader",children:"Sami Heikkinen"}),Object(d.jsx)("div",{id:"startSummary",children:"Test automation expert, DevOps enthusiastic, Wanna be developer"})]})},u=(a(40),a(9));var b=function(){return Object(d.jsxs)("div",{id:"page-2",children:[Object(d.jsxs)("div",{className:"container-upper",children:[Object(d.jsx)("div",{className:"about-me-header",children:u.header}),Object(d.jsxs)("div",{className:"text-container",children:[u.aboutMe1," ",u.aboutMe2]})]}),Object(d.jsx)("div",{className:"container-lower",children:Object(d.jsxs)("div",{className:"text-container",children:[u.aboutMe3," ",u.aboutMe4]})})]})},m=a(18),x=a.n(m),p=a(25),O=a(26),f=a.n(O),v=(a(42),a.p+"static/media/GitHub_Logo.746ec8f0.png");var g=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1];function i(){return(i=Object(p.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/SamiHei/repos").then((function(e){e.json().then((function(e){c(e)}))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]);var s=function(e){var t=e.text,a=e.className;return Object(d.jsx)("div",{className:a,children:t})},o=function(e){var t=e.url,a=e.text,n=e.language,c=e.selected;return Object(d.jsxs)("a",{href:t,target:"_blank",rel:"noreferrer",className:"project-item-container ".concat(c?"active":""),children:[Object(d.jsx)("div",{className:"project-item-content",children:a}),Object(d.jsx)("div",{className:"project-language",children:n}),Object(d.jsx)("img",{src:v,className:"project-github-logo"})]})},l=a.map((function(e){var t=function(e){for(var t=e.split("_"),a="",n=t.length,c=0;c<n;c++)a+=t[c].charAt(0).toUpperCase()+t[c].slice(1),c!==n-1&&(a+=" ");return a}(e.name),a=e.language,n=e.html_url;return Object(d.jsx)(o,{url:n,text:t,language:a},t)})),j=s({text:"<",className:"arrow-prev"}),h=s({text:">",className:"arrow-next"});return Object(d.jsxs)("div",{id:"page-3",children:[Object(d.jsx)("div",{className:"project-header",children:"Projects"}),Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(f.a,{data:l,arrowLeft:j,arrowRight:h,wheel:!1,transition:"1"})})]})};a(43);var N=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"header-text",children:"CV"}),Object(d.jsx)("div",{className:"text-line",children:"TODO"})]})},w=(a(44),a(19)),y=a(20),k=a(21);var I=function(){return Object(d.jsxs)("div",{id:"footer",children:[Object(d.jsx)("div",{className:"contact-header",children:w.contactHeader}),Object(d.jsx)("div",{className:"email",children:w.contactEmail}),Object(d.jsx)("a",{href:"https://github.com/SamiHei",target:"_blank",children:Object(d.jsx)(y.a,{className:"github",icon:k.a,size:"3x"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/sami-mk-heikkinen/",target:"_blank",children:Object(d.jsx)(y.a,{className:"linkedin",icon:k.b,size:"3x"})})]})},M=a(3);var S=function(){return Object(d.jsx)(o.a,{basename:"/project_w",children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{}),Object(d.jsxs)(M.c,{children:[Object(d.jsx)(M.a,{path:"/",exact:!0,render:function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{}),Object(d.jsx)(b,{}),Object(d.jsx)(g,{}),Object(d.jsx)(I,{})]})}}),Object(d.jsx)(M.a,{path:"/cv",exact:!0,component:N})]})]})})};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('{"header":"About me","aboutMe1":"I am a Wellness technology engineer and a part-time university student who has already worked for some time in the IT field. I started my IT journey as a QA engineer and quickly specialized to test automation and DevOps (mainly CI/CD solutions and scripting).","aboutMe2":"My own commitment to learn test automation, programming, CI/CD solutions and the IT field overall has gotten me pretty far at this point, but I feel that I am able and willing to learn more every day.","aboutMe3":"My goals is no more or no less than to be the best at everything that I like to do. And when that will not happen, I will be pretty casual in most of those things, and really good at some.","aboutMe4":"In my free time I like to do different stuff, like for example this website. I haven\'t done anything with React and not much of a front-end development overall, but I decided to give it a shot and here you can see the result."}')}},[[48,1,2]]]);
//# sourceMappingURL=main.432b88ad.chunk.js.map