(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0gXW":function(e,t,n){e.exports=n.p+"static/homepage_thumb-f9250e680678da353dc9d27bf0003fd2.jpg"},BCyH:function(e,t,n){e.exports=n.p+"static/tech2_2-e7608a8a5de6cba6a41836d9d41d9c40.mp4"},HMs9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("q1tI"),r=u(i),a=u(n("17x9")),s=n("Seim"),d=u(n("tvXG")),l=u(n("PTkm")),c=u(n("uUxy"));function u(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=0,v=0,b=0,g=0,w="data-lazyload-listened",x=[],y=[],E=!1;try{var C=Object.defineProperty({},"passive",{get:function(){E=!0}});window.addEventListener("test",null,C)}catch(L){}var k=!!E&&{capture:!1,passive:!0},R=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,d.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,o=void 0,i=void 0,r=void 0,a=void 0;try{var s=t.getBoundingClientRect();o=s.top,i=s.left,r=s.height,a=s.width}catch(L){o=m,i=v,r=g,a=b}var d=window.innerHeight||document.documentElement.clientHeight,l=window.innerWidth||document.documentElement.clientWidth,c=Math.max(o,0),u=Math.max(i,0),p=Math.min(d,o+r)-c,f=Math.min(l,i+a)-u,h=void 0,w=void 0,x=void 0,y=void 0;try{var E=n.getBoundingClientRect();h=E.top,w=E.left,x=E.height,y=E.width}catch(L){h=m,w=v,x=g,y=b}var C=h-c,k=w-u,R=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return C-R[0]<=p&&C+x+R[1]>=0&&k-R[0]<=f&&k+y+R[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var i=t.getBoundingClientRect();n=i.top,o=i.height}catch(L){n=m,o=g}var r=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=r&&n+o+a[1]>=0}(e))?e.visible||(e.props.once&&y.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},j=function(){y.forEach((function(e){var t=x.indexOf(e);-1!==t&&x.splice(t,1)})),y=[]},O=function(){for(var e=0;e<x.length;++e){var t=x[e];R(t)}j()},_=void 0,z=null,I=function(e){function t(e){p(this,t);var n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return h(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===_||"debounce"===_&&void 0===this.props.debounce;if(n&&((0,s.off)(e,"scroll",z,k),(0,s.off)(window,"resize",z,k),z=null),z||(void 0!==this.props.debounce?(z=(0,l.default)(O,"number"==typeof this.props.debounce?this.props.debounce:300),_="debounce"):void 0!==this.props.throttle?(z=(0,c.default)(O,"number"==typeof this.props.throttle?this.props.throttle:300),_="throttle"):z=O),this.props.overflow){var o=(0,d.default)(this.ref);if(o&&"function"==typeof o.getAttribute){var i=+o.getAttribute(w)+1;1===i&&o.addEventListener("scroll",z,k),o.setAttribute(w,i)}}else if(0===x.length||n){var r=this.props,a=r.scroll,u=r.resize;a&&(0,s.on)(e,"scroll",z,k),u&&(0,s.on)(window,"resize",z,k)}x.push(this),R(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,d.default)(this.ref);if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(w)-1;0===t?(e.removeEventListener("scroll",z,k),e.removeAttribute(w)):e.setAttribute(w,t)}}var n=x.indexOf(this);-1!==n&&x.splice(n,1),0===x.length&&"undefined"!=typeof window&&((0,s.off)(window,"resize",z,k),(0,s.off)(window,"scroll",z,k))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,o=e.placeholder,i=e.classNamePrefix,a=e.style;return r.default.createElement("div",{className:i+"-wrapper",ref:this.setRef,style:a},this.visible?n:o||r.default.createElement("div",{style:{height:t},className:i+"-placeholder"}))}}]),t}(i.Component);I.propTypes={classNamePrefix:a.default.string,once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool,style:a.default.object},I.defaultProps={classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var P=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function i(){p(this,i);var e=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return e.displayName="LazyLoad"+P(t),e}return h(i,n),o(i,[{key:"render",value:function(){return r.default.createElement(I,e,r.default.createElement(t,this.props))}}]),i}(i.Component)}},t.default=I,t.forceCheck=O,t.forceVisible=function(){for(var e=0;e<x.length;++e){var t=x[e];t.visible=!0,t.forceUpdate()}j()}},PTkm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,i=void 0,r=void 0,a=void 0,s=void 0,d=function d(){var l=+new Date-a;l<t&&l>=0?o=setTimeout(d,t-l):(o=null,n||(s=e.apply(r,i),o||(r=null,i=null)))};return function(){r=this,i=arguments,a=+new Date;var l=n&&!o;return o||(o=setTimeout(d,t)),l&&(s=e.apply(r,i),r=null,i=null),s}}},Seim:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},TRom:function(e,t,n){"use strict";n.r(t);var o=n("uRdJ"),i=n("9Hrx"),r=n("q1tI"),a=n.n(r),s=n("pbrb"),d=n("vrFN"),l=n("Bl7J"),c=n("V8DD"),u=n.n(c),p=n("fJkC"),f=n.n(p),h=n("BCyH"),m=n.n(h),v=n("0gXW"),b=n.n(v),g=n("YscU"),w=n.n(g),x=n("k2wS"),y=n.n(x),E=n("HMs9"),C=n.n(E),k=n("pQ8y"),R=a.a.createElement(s.f,{mediaQueries:{sm:"screen and (max-width: 640px)",md:"screen and (min-width: 640px) and (max-width: 1280px)",lg:"screen and (min-width: 1280px)"},position:"relative",width:"80%",smWidth:"150%",smMarginLeft:"-40%",alignItems:"center",key:"h1"},a.a.createElement(C.a,{placeholder:a.a.createElement("img",{style:{width:"100%",marginTop:"-30px"},src:b.a})},a.a.createElement("video",{autoPlay:!0,muted:!0,playsInline:!0,loop:!0,width:"100%",style:{marginTop:"-40px"},poster:b.a},a.a.createElement("source",{src:u.a,type:"video/mp4"})))),j=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={hovered:!1},n}return Object(i.a)(t,e),t.prototype.render=function(){var e,t=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.f,{position:"absolute",left:"0",top:"0",zIndex:"0",justifyContent:"center",alignItems:"center",props:{onMouseEnter:function(){return t.setState({hovered:!0})},onMouseLeave:function(){return t.setState({hovered:!1})}},transform:"translate3d("+this.props.x+"px, "+this.props.y+"px, 0px)"},a.a.createElement(s.b,((e={zIndex:"0",className:"bubble",backgroundColor:"white"}).zIndex="0",e.width="40px",e.height="40px",e.borderRadius="40px",e.opacity="0.3",e)),a.a.createElement(s.b,{position:"absolute",backgroundColor:"white",zIndex:"1",width:"30px",height:"30px",borderRadius:"30px",opacity:"0.7"}),a.a.createElement(k.a,{in:this.state.hovered,timeout:300,classNames:"alert",unmountOnExit:!0},a.a.createElement(s.b,{textAlign:"center",position:"absolute",bottom:"100%",color:"black",fontStyle:"italic",padding:"12px",width:"200px",borderRadius:"12px",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:"200"},this.props.content))))},t}(a.a.Component),O=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={videoLoaded:!1,vWid:0,vHei:0},n.setVideoDims=n.setVideoDims.bind(Object(o.a)(n)),n.onResize=n.onResize.bind(Object(o.a)(n)),n.videoRef=a.a.createRef(),n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.onResize)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize)},n.onResize=function(){if(null!=this.videoRef.current){var e=this.videoRef.current.clientWidth,t=this.videoRef.current.clientHeight;this.setState({vWid:e,vHei:t})}},n.setVideoDims=function(e){var t=e.target.clientWidth,n=e.target.clientHeight;this.setState({videoLoaded:!0,vWid:t,vHei:n})},n.render=function(){var e=this;return a.a.createElement(s.f,{mediaQueries:{sm:"screen and (max-width: 640px)",md:"screen and (min-width: 640px) and (max-width: 1280px)",lg:"screen and (min-width: 1280px)"},position:"relative",width:"100%",smWidth:"150%",height:"100%",overflow:"hidden",smMarginLeft:"-40%",alignItems:"center",key:"h3",justifyContent:"flex-end"},a.a.createElement(s.d,{position:"relative",width:"70%"},a.a.createElement(C.a,{placeholder:a.a.createElement("img",{style:{width:"100%"},src:this.props.thumb})},a.a.createElement("video",{muted:!0,playsInline:!0,width:"100%",autoPlay:!0,loop:!0,poster:this.props.thumb,onLoadedData:this.setVideoDims,ref:this.videoRef},a.a.createElement("source",{src:this.props.videoSrc,type:"video/mp4"})),this.state.videoLoaded&&this.props.hoverPoints.map((function(t,n){return a.a.createElement(j,{key:"hi"+n,x:t[0]*e.state.vWid,content:t[2],y:t[1]*e.state.vHei})})))))},t}(a.a.Component),_={0:[R,"#E4F7FF","#0095d5"],1:[a.a.createElement(O,{videoSrc:f.a,thumb:w.a,hoverPoints:[[.4,.45,"Design research: user journeys, personas, interviews"],[.3,.8,"Interaction design and interface design"],[.7,.6,"3D modeling, illustration, sticker-making"]],key:"des"}),"#E0ECDF","#799e73"],2:[a.a.createElement(O,{videoSrc:m.a,thumb:y.a,hoverPoints:[[.45,.4,"Physical computing"],[.52,.2,"Android, Unity, AR"],[.7,.6,"Web development, C/C++ programming, Machine learning"]],key:"coputers"}),"#D9DAED","#5264af"]};t.default=function(){var e=Object(r.useState)(0),t=e[0],n=e[1],o=_[t][1];return a.a.createElement(s.f,{width:"100vw","min-height":"100vh",boxSizing:"content-box",backgroundColor:o},a.a.createElement(d.a,null),a.a.createElement(l.a,{path:"/"},a.a.createElement(s.c,{height:"calc(97vh - 182px)",smHeight:"calc(98vh - 230px)",width:"100vw",paddingLeft:"5vw",justifyContent:"center",alignItems:"flex-start",mediaQueries:{sm:"screen and (max-width: 640px)",md:"screen and (min-width: 640px) and (max-width: 1280px)",lg:"screen and (min-width: 1280px)"}},a.a.createElement(s.b,{fontWeight:"600",fontSize:"30px",width:"35%",mediaQueries:{sm:"screen and (max-width: 640px)",md:"screen and (min-width: 640px) and (max-width: 1280px)",lg:"screen and (min-width: 1280px)"},smWidth:"100%",smFontSize:"20px",zIndex:"1"},"Hi! 👋 I'm",a.a.createElement(s.d,{props:{onClick:function(){return n(0)}},borderRadius:0==t?"px":"12px",hoverCursor:"pointer",marginLeft:"8px",color:_[0][2],borderBottom:0==t?"2px solid "+_[0][2]:""},"Connie"),", a",a.a.createElement(s.d,{props:{onClick:function(){return n(1)}},marginLeft:"8px",borderRadius:1==t?"px":"12px",hoverCursor:"pointer",color:_[1][2],borderBottom:1==t?"2px solid "+_[1][2]:""},"design"),a.a.createElement(s.d,{props:{onClick:function(){return n(2)}},marginLeft:"8px",borderRadius:2==t?"px":"12px",hoverCursor:"pointer",color:_[2][2],borderBottom:2==t?"2px solid "+_[2][2]:""},"engineer"),".",a.a.createElement("br",null),"I love creating playful tools for others and researching new possibilities in technology."),a.a.createElement(s.f,{mediaQueries:{sm:"screen and (max-width: 640px)",md:"screen and (min-width: 640px) and (max-width: 1280px)",lg:"screen and (min-width: 1280px)"},lgPosition:"absolute",mdPosition:"absolute",position:"relative",left:"0px",top:"0px",width:"100%",height:"100%",zIndex:"0",justifyContent:"flex-end"},_[t][0])),a.a.createElement(s.f,{position:"fixed",bottom:"10%",zIndex:"30",width:"120px",justifyContent:"space-evenly",alignItems:"center"},Object.values(_).map((function(e,o){return a.a.createElement(s.f,{height:t==o?"40px":"20px",key:"dot"+o,width:t==o?"40px":"20px",borderRadius:"50%",padding:"4px",hoverCursor:"pointer",justifyContent:"center",alignItems:"center",border:t==o?"3px dashed white":"",props:{onClick:function(){return n(o)}}},a.a.createElement(s.b,{width:"90%",borderRadius:"50%",height:"90%",backgroundColor:t!=o?"#999":e[2]}))})))))}},V8DD:function(e,t,n){e.exports=n.p+"static/homepage_1-18ee0105e3573ec4ed3907e6ac95f5f1.mp4"},YscU:function(e,t,n){e.exports=n.p+"static/homepage_d-6657a63d15d082c06b454a65fa162b73.jpg"},fJkC:function(e,t,n){e.exports=n.p+"static/homepage_design-abfc7a61e1530dfd1b6997c2eb877b3c.mp4"},k2wS:function(e,t,n){e.exports=n.p+"static/homepage_t-d88659e96f7a894d6e607335cf8f90eb.jpg"},tvXG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var i=window.getComputedStyle(o),r=i.position,a=i.overflow,s=i["overflow-x"],d=i["overflow-y"];if("static"===r&&t)o=o.parentNode;else{if(n.test(a)&&n.test(s)&&n.test(d))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},uRdJ:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},uUxy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,i;return t||(t=250),function(){var r=n||this,a=+new Date,s=arguments;o&&a<o+t?(clearTimeout(i),i=setTimeout((function(){o=a,e.apply(r,s)}),t)):(o=a,e.apply(r,s))}}}}]);
//# sourceMappingURL=component---src-templates-index-js-87967815405ad84106da.js.map