(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(19),s=n.n(r),i=(n(27),n(14),n(11)),o=(n(28),n(10)),l=n.p+"static/media/logo.e2a21c04.png",j=n(0);var d=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return window.addEventListener("scroll",(function(){window.scrollY>50?c(!0):c(!1)})),Object(j.jsxs)("nav",{className:n?"nav-bar active":"nav-bar",children:[Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("img",{src:l,className:"logo-home"})}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)("a",{href:"#page-2",children:Object(j.jsx)("li",{children:"About me"})}),Object(j.jsx)("a",{href:"#page-3",children:Object(j.jsx)("li",{children:"Projects"})}),Object(j.jsx)(o.b,{to:"/cv",children:Object(j.jsx)("li",{children:"CV"})})]})]})};n(35);var h=function(){return Object(j.jsxs)("div",{className:"page-1",children:[Object(j.jsx)("h1",{id:"startHeader",children:"Sami Heikkinen"}),Object(j.jsx)("h2",{children:"Test automation expert, DevOps enthusiastic, Wanna be developer"})]})},u=(n(36),n(8));var b=function(){return Object(j.jsxs)("div",{id:"page-2",children:[Object(j.jsx)("div",{className:"about-me-header",children:u.header}),Object(j.jsxs)("div",{className:"container-left",children:[Object(j.jsx)("div",{className:"container-left-text-part-one",children:u.aboutMeFirstPart}),Object(j.jsx)("div",{className:"container-left-text-part-two",children:u.aboutMeSecondPart})]}),Object(j.jsxs)("div",{className:"container-right",children:[Object(j.jsx)("div",{className:"container-right-text-part-one",children:u.lifeGoalsFirstPart}),Object(j.jsx)("div",{className:"container-right-text-part-two",children:u.lifeGoalsSecondPart})]})]})},m=n(17),p=n.n(m),x=n(21),f=n(22),O=n.n(f),v=(n(38),n.p+"static/media/GitHub_Logo.746ec8f0.png");var g=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];function r(){return(r=Object(x.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/SamiHei/repos").then((function(e){e.json().then((function(e){c(e)}))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){r.apply(this,arguments)}()}),[]);var s=function(e){var t=e.text,n=e.className;return Object(j.jsx)("div",{className:n,children:t})},o=function(e){var t=e.url,n=e.text,a=e.language,c=e.selected;return Object(j.jsxs)("a",{href:t,target:"_blank",rel:"noreferrer",className:"project-item-container ".concat(c?"active":""),children:[Object(j.jsx)("div",{className:"project-item-content",children:n}),Object(j.jsx)("div",{className:"project-language",children:a}),Object(j.jsx)("img",{src:v,className:"project-github-logo"})]})},l=n.map((function(e){var t=function(e){for(var t=e.split("_"),n="",a=t.length,c=0;c<a;c++)n+=t[c].charAt(0).toUpperCase()+t[c].slice(1),c!==a-1&&(n+=" ");return n}(e.name),n=e.language,a=e.html_url;return Object(j.jsx)(o,{url:a,text:t,language:n},t)})),d=s({text:"<",className:"arrow-prev"}),h=s({text:">",className:"arrow-next"});return Object(j.jsxs)("div",{id:"page-3",children:[Object(j.jsx)("h1",{children:"Projects"}),Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(O.a,{data:l,arrowLeft:d,arrowRight:h,wheel:!1,transition:"1"})})]})};var w=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"CV"})})};var N=function(){return Object(j.jsx)("div",{className:"page-1",children:Object(j.jsx)("h1",{id:"startHeader",children:"Blog"})})},y=n(2);var I=function(){return Object(j.jsx)(o.a,{basename:"/project_w",children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsxs)(y.c,{children:[Object(j.jsx)(y.a,{path:"/",exact:!0,render:function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{}),Object(j.jsx)(b,{}),Object(j.jsx)(g,{})]})}}),Object(j.jsx)(y.a,{path:"/cv",exact:!0,component:w}),Object(j.jsx)(y.a,{path:"/blog",exact:!0,component:N})]})]})})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"header":"About me","aboutMeFirstPart":"I am a Wellness technology engineer and part-time university student who has already worked for some time in the IT field. I started my IT journey as a QA engineer and quickly specialized to test automation and DevOps.","aboutMeSecondPart":"My own commitment to learn test automation, programming and CI/CD solutions has gotten me pretty far at this point, but I feel that I am able and willing to learn more every day.","headerTwo":"Life goals","lifeGoalsFirstPart":"My goals is no more or no less than to be best at everything I like to do. And that will be not happening, so I will be pretty casual in most of those things, and good or really good at some.","lifeGoalsSecondPart":"In the mean time along improving my self, I like to do different stuff like this website. I haven\'t done anything with React and not much of a front-end development overall."}')}},[[39,1,2]]]);
//# sourceMappingURL=main.53e5e094.chunk.js.map