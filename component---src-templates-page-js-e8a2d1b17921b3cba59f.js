(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{W1o5:function(t,e,n){},rgsX:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),o=(n("9eSz"),n("6cYQ")),i=(n("rl5w"),n("pbrb"));e.a=function(t){var e=t.title,n=t.date,a=(t.path,t.coverImage,t.coverVideo,t.author,t.excerpt,t.tags),l=t.html,s=(t.links,t.previousPost),c=t.nextPost,m=s&&s.frontmatter.path,p=s&&s.frontmatter.title,d=c&&c.frontmatter.path,u=c&&c.frontmatter.title;return r.a.createElement(i.c,{width:"100%",alignItems:"center",justifyContent:"flex-start",paddingBottom:"12px"},r.a.createElement(i.b,{position:"relative",padding:"48px 0px 12px 0px",borderBottom:"1px solid #CCC",marginBottom:"24px",mediaQueries:{sm:"screen and (max-width: 900px)"},smWidth:"100%",width:"900px"},r.a.createElement(i.b,{fontFamily:"Domaine",fontSize:"40px"},e),r.a.createElement(i.b,{fontFamily:"EB Garamond",fontSize:"24px"},n),r.a.createElement(i.b,{color:"#AAA",fontFamily:"EB Garamond",fontSize:"24px",marginBottom:"24px"},a.join(", "))),r.a.createElement("div",{className:"post-detail-container",dangerouslySetInnerHTML:{__html:l}}),r.a.createElement(i.b,{mediaQueries:{sm:"screen and (max-width: 900px)"},smWidth:"100%",width:"900px"},r.a.createElement(o.a,{previousPath:m,previousLabel:p,nextPath:d,nextLabel:u})))}},sweJ:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return c}));var a=n("q1tI"),r=n.n(a),o=n("vrFN"),i=n("Bl7J"),l=n("rgsX"),s=(n("qhky"),n("5FQF"));n("pbrb"),n("W1o5");e.default=function(t){var e=t.data,n=t.pageContext,c=e.markdownRemark,m=c.frontmatter,p=m.title,d=m.date,u=m.path,x=m.author,f=m.coverImage,h=m.coverVideo,v=m.links,E=m.excerpt,g=m.tags,w=c.excerpt,b=c.id,k=c.html,I=n.next,y=n.previous,B=Object(a.useState)(!1),P=B[0],C=B[1],F=function(){document.scrollingElement.scrollTop>70?C(!0):C(!1)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",F),function(){window.removeEventListener("scroll",F)}}),[]),r.a.createElement(i.a,null,r.a.createElement(o.a,{title:p,description:E||w}),P?r.a.createElement(s.a,{text:"Return to top ↑",internal:!0,passInProps:{position:"fixed",zIndex:"1",left:"5%",top:"5%",className:"return-button",props:{onClick:function(){document.scrollingElement.scrollTop=0}}}}):"",r.a.createElement(l.a,{key:b,title:p,date:d,path:u,author:x,coverImage:f,coverVideo:h,links:v,html:k,tags:g,previousPost:y,nextPost:I}))};var c="2994161705"}}]);
//# sourceMappingURL=component---src-templates-page-js-e8a2d1b17921b3cba59f.js.map