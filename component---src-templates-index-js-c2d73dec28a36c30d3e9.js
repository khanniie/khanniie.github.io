(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0gXW":function(e,t,n){e.exports=n.p+"static/homepage_thumb-04902279fe8886185c9bc557ed70dfdc.jpg"},"3Qlt":function(e,t,n){e.exports=n.p+"static/blue_window-f277e524ecc2145ef00121987bc5aa58.png"},HMs9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("q1tI"),r=l(i),a=l(n("17x9")),d=n("Seim"),s=l(n("tvXG")),p=l(n("PTkm")),c=l(n("uUxy"));function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,v=0,x=0,b=0,g="data-lazyload-listened",w=[],y=[],E=!1;try{var _=Object.defineProperty({},"passive",{get:function(){E=!0}});window.addEventListener("test",null,_)}catch(k){}var C=!!E&&{capture:!1,passive:!0},O=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,s.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,o=void 0,i=void 0,r=void 0,a=void 0;try{var d=t.getBoundingClientRect();o=d.top,i=d.left,r=d.height,a=d.width}catch(k){o=h,i=v,r=b,a=x}var s=window.innerHeight||document.documentElement.clientHeight,p=window.innerWidth||document.documentElement.clientWidth,c=Math.max(o,0),l=Math.max(i,0),f=Math.min(s,o+r)-c,u=Math.min(p,i+a)-l,m=void 0,g=void 0,w=void 0,y=void 0;try{var E=n.getBoundingClientRect();m=E.top,g=E.left,w=E.height,y=E.width}catch(k){m=h,g=v,w=b,y=x}var _=m-c,C=g-l,O=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return _-O[0]<=f&&_+w+O[1]>=0&&C-O[0]<=u&&C+y+O[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var i=t.getBoundingClientRect();n=i.top,o=i.height}catch(k){n=h,o=b}var r=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=r&&n+o+a[1]>=0}(e))?e.visible||(e.props.once&&y.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},T=function(){y.forEach((function(e){var t=w.indexOf(e);-1!==t&&w.splice(t,1)})),y=[]},z=function(){for(var e=0;e<w.length;++e){var t=w[e];O(t)}T()},R=void 0,W=null,j=function(e){function t(e){f(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return m(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===R||"debounce"===R&&void 0===this.props.debounce;if(n&&((0,d.off)(e,"scroll",W,C),(0,d.off)(window,"resize",W,C),W=null),W||(void 0!==this.props.debounce?(W=(0,p.default)(z,"number"==typeof this.props.debounce?this.props.debounce:300),R="debounce"):void 0!==this.props.throttle?(W=(0,c.default)(z,"number"==typeof this.props.throttle?this.props.throttle:300),R="throttle"):W=z),this.props.overflow){var o=(0,s.default)(this.ref);if(o&&"function"==typeof o.getAttribute){var i=+o.getAttribute(g)+1;1===i&&o.addEventListener("scroll",W,C),o.setAttribute(g,i)}}else if(0===w.length||n){var r=this.props,a=r.scroll,l=r.resize;a&&(0,d.on)(e,"scroll",W,C),l&&(0,d.on)(window,"resize",W,C)}w.push(this),O(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(this.ref);if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(g)-1;0===t?(e.removeEventListener("scroll",W,C),e.removeAttribute(g)):e.setAttribute(g,t)}}var n=w.indexOf(this);-1!==n&&w.splice(n,1),0===w.length&&"undefined"!=typeof window&&((0,d.off)(window,"resize",W,C),(0,d.off)(window,"scroll",W,C))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,o=e.placeholder,i=e.classNamePrefix,a=e.style;return r.default.createElement("div",{className:i+"-wrapper",ref:this.setRef,style:a},this.visible?n:o||r.default.createElement("div",{style:{height:t},className:i+"-placeholder"}))}}]),t}(i.Component);j.propTypes={classNamePrefix:a.default.string,once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool,style:a.default.object},j.defaultProps={classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var I=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function i(){f(this,i);var e=u(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return e.displayName="LazyLoad"+I(t),e}return m(i,n),o(i,[{key:"render",value:function(){return r.default.createElement(j,e,r.default.createElement(t,this.props))}}]),i}(i.Component)}},t.default=j,t.forceCheck=z,t.forceVisible=function(){for(var e=0;e<w.length;++e){var t=w[e];t.visible=!0,t.forceUpdate()}T()}},O18y:function(e,t,n){e.exports=n.p+"static/green_window-d8f148762b99c1a89c7fb28eb29c7cfd.png"},PTkm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,i=void 0,r=void 0,a=void 0,d=void 0,s=function s(){var p=+new Date-a;p<t&&p>=0?o=setTimeout(s,t-p):(o=null,n||(d=e.apply(r,i),o||(r=null,i=null)))};return function(){r=this,i=arguments,a=+new Date;var p=n&&!o;return o||(o=setTimeout(s,t)),p&&(d=e.apply(r,i),r=null,i=null),d}}},Seim:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},TRom:function(e,t,n){"use strict";n.r(t);var o=n("uRdJ"),i=n("9Hrx"),r=n("q1tI"),a=n.n(r),d=n("pbrb"),s=n("vrFN"),p=n("Bl7J"),c=n("zY3M"),l=n.n(c),f=n("fJkC"),u=n.n(f),m=n("b3R5"),h=n.n(m),v=n("0gXW"),x=n.n(v),b=n("O18y"),g=n.n(b),w=n("tbC8"),y=n.n(w),E=n("3Qlt"),_=n.n(E),C=n("mdZb"),O=n.n(C),T=n("vrQ9"),z=n.n(T),R=n("HMs9"),W=n.n(R),j=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={videoLoaded:!1,vWid:0,vHei:0},n.setVideoDims=n.setVideoDims.bind(Object(o.a)(n)),n.onResize=n.onResize.bind(Object(o.a)(n)),n.videoRef=a.a.createRef(),n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.onResize)},n.componentWillUnmount=function(){},n.onResize=function(){if(null!=this.videoRef.current){var e=this.videoRef.current.clientWidth,t=this.videoRef.current.clientHeight;this.setState({vWid:e,vHei:t})}},n.setVideoDims=function(e){var t=e.target.clientWidth,n=e.target.clientHeight;this.setState({videoLoaded:!0,vWid:t,vHei:n})},n.render=function(){return a.a.createElement(d.b,{transition:"transform 1s",transformStyle:"preserve-3d",className:"homepage-card-container",hoverTransform:this.props.hoverTransform},a.a.createElement(d.f,{position:"relative",width:"100%",alignItems:"center",key:"h3",overflow:"hidden",justifyContent:"flex-end",backgroundColor:"#CDF5FB",borderRadius:"4%",boxShadow:this.props.shadow},a.a.createElement(d.b,{width:"100%",position:"absolute",bottom:"0px"},a.a.createElement(W.a,{placeholder:a.a.createElement("img",{style:{width:"100%"},src:this.props.thumb})},a.a.createElement("video",{muted:!0,playsInline:!0,width:"100%",autoPlay:!0,loop:!0,poster:this.props.thumb,onLoadedData:this.setVideoDims,ref:this.videoRef},a.a.createElement("source",{src:this.props.videoSrc,type:"video/mp4"})))),a.a.createElement(d.b,{position:"relative",props:{src:this.props.frame},component:"img",width:"100%",zIndex:"1"})),a.a.createElement(d.b,{width:"80%",color:"black",position:"absolute",top:"0px",left:"0px",minWidth:"200px",transform:"translate3d(0px, 0px, -10px) rotateZ(0deg)",backgroundColor:this.props.cardColor,borderRadius:"8px",padding:"24px",fontSize:"12px",overflow:"none",fontWeight:"600","max-width":"300px",className:"card-description",transition:"transform 1s",transformStyle:"preserve-3d",fontFamily:"Open Sans",opacity:"0"},this.props.description))},t}(a.a.Component);t.default=function(){var e,t;return a.a.createElement(d.f,{width:"100vw","min-height":"100vh",boxSizing:"content-box",backgroundColor:"#dcf5ffAA",backgroundImage:"linear-gradient(45deg, #D8FFE566 0%, #FFE7DC66 90%)"},a.a.createElement(s.a,null),a.a.createElement(p.a,{path:"/"},a.a.createElement(d.f,{width:"100%",paddingTop:"8%",paddingBottom:"8%",height:"100%",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap",zIndex:"1200",smZIndex:"0",mediaQueries:{sm:"screen and (max-width: 640px)",md:"screen and (min-width: 640px) and (max-width: 1280px)",lg:"screen and (min-width: 1280px)"}},a.a.createElement(d.b,{fontWeight:"600",width:"340px",mediaQueries:{sm:"screen and (max-width: 640px)",md:"screen and (min-width: 640px) and (max-width: 920px)"},smWidth:"100%",mdWidth:"100%",smFontSize:"20px",smMarginBottom:"5%",mdMarginBottom:"5%",marginBottom:"0px"},a.a.createElement(d.b,{fontSize:"34px",lineHeight:"135%",marginBottom:"10px",fontFamily:"Domaine Display"},"Hi! 👋 I'm Connie, a frontend developer, artist and designer."),a.a.createElement(d.b,{fontSize:"17px",fontWeight:"400",lineHeight:"180%",fontFamily:"Open Sans"}," I love creating playful tools for others and researching new possibilities in technology.")),a.a.createElement(d.f,{position:"relative",mediaQueries:{sm:"screen and (max-width: 640px)",md:"screen and (min-width: 640px) and (max-width: 920px)",lg:"screen and (min-width: 1280px)"},width:"calc(80% - 330px)",smWidth:"100%",mdWidth:"100%",height:"1px",lgHeight:"1px",mdHeight:"calc(100% - 200px)",smHeight:"auto",justifyContent:"center",zIndex:"1"},a.a.createElement(d.b,((e={width:"65%",mdWidth:"50%",smWidth:"50%",position:"absolute",left:"23%",zIndex:"2",top:"-7vh",mdTop:"2%",lgTop:"-13vh",smTop:"2%",mediaQueries:{sm:"screen and (max-width: 640px)",md:"screen and (min-width: 640px) and (max-width: 920px)",lg:"screen and (min-width: 1280px)"},smPosition:"relative"}).smWidth="100%",e.smLeft="auto",e.perspective="500px",e.transform="translate3d(0px, 0px, 16px)",e),a.a.createElement(j,{videoSrc:l.a,thumb:x.a,frame:_.a,cardColor:"#d1efff",description:"🤠 Welcome to my website! Here you can learn about me and view some selected projects.",hoverTransform:"rotate3d(0.01, 0.02, 0.02, 5deg) translate3d(0%, 15%, 0px)",shadow:"54.8188px 99.9545px 80px rgba(45, 57, 80, 0.06), 39.8721px 72.7013px 53.9219px rgba(45, 57, 80, 0.0485625), 27.752px 50.602px 34.875px rgba(45, 57, 80, 0.0405), 18.2016px 33.188px 21.6406px rgba(45, 57, 80, 0.0346875), 10.9638px 19.9909px 13px rgba(45, 57, 80, 0.03), 5.78167px 10.5421px 7.73438px rgba(45, 57, 80, 0.0253125), 2.39832px 4.37301px 4.625px rgba(45, 57, 80, 0.0195), 0.556753px 1.01516px 2.45312px rgba(45, 57, 80, 0.0114375)"})),a.a.createElement(d.b,{width:"45%",position:"absolute",zIndex:"1",left:"0px",mdWidth:"30%",lgTop:"-18vh",mdTop:"20%",mediaQueries:{sm:"screen and (max-width: 640px)",md:"screen and (min-width: 640px) and (max-width: 920px)",lg:"screen and (min-width: 1280px)"},top:"-15vh",smDisplay:"none"},a.a.createElement(j,{videoSrc:h.a,thumb:z.a,frame:y.a,cardColor:"#ecdeff",description:"💻 I am experienced in web and Android development. I am also proficient at Unity game development, physical computing and machine learning.",hoverTransform:"rotate3d(0.01, 0.03, 0.02, -12deg) translate3d(-24%, -45%, 0px)",shadow:"13.8692px 29.944px 80px rgba(39, 64, 86, 0.07), 8.98928px 19.4082px 46.8519px rgba(39, 64, 86, 0.0531481), 5.3422px 11.534px 25.4815px rgba(39, 64, 86, 0.0425185), 2.77383px 5.98881px 13px rgba(39, 64, 86, 0.035), 1.13008px 2.43989px 6.51852px rgba(39, 64, 86, 0.0274815), 0.256837px 0.554519px 3.14815px rgba(39, 64, 86, 0.0168519)"})),a.a.createElement(d.b,((t={width:"48%",position:"absolute",right:"0%",top:"40%",mdTop:"12%",mdWidth:"34%",lgTop:"-27vh",zIndex:"0",mediaQueries:{sm:"screen and (max-width: 640px)",md:"screen and (min-width: 640px) and (max-width: 920px)",lg:"screen and (min-width: 1280px)"}}).top="-20vh",t.smDisplay="none",t),a.a.createElement(j,{videoSrc:u.a,thumb:O.a,frame:g.a,cardColor:"#dcedad",description:"🖋️ I have experience in UX research, interface design, interaction design, hardware UX, and info vis.",hoverTransform:"rotate3d(0.01, 0.03, 0.02, 8deg) translate3d(24%, -45%, 0px)",shadow:"33.0084px 55.995px 80px rgba(51, 57, 107, 0.07), 24.0085px 40.7276px 53.9219px rgba(51, 57, 107, 0.0566562), 16.7105px 28.3475px 34.875px rgba(51, 57, 107, 0.04725), 10.9598px 18.5921px 21.6406px rgba(51, 57, 107, 0.0404687), 6.60169px 11.199px 13px rgba(51, 57, 107, 0.035), 3.48136px 5.90573px 7.73438px rgba(51, 57, 107, 0.0295312), 1.44412px 2.44978px 4.625px rgba(51, 57, 107, 0.02275), 0.335242px 0.5687px 2.45312px rgba(51, 57, 107, 0.0133437)"}))))))}},b3R5:function(e,t,n){e.exports=n.p+"static/tech_2-c046188b79af44007e78e24932c1707a.mp4"},fJkC:function(e,t,n){e.exports=n.p+"static/homepage_design-abfc7a61e1530dfd1b6997c2eb877b3c.mp4"},mdZb:function(e,t,n){e.exports=n.p+"static/homepage_d_thumb-d4e1cd7f5642eae3b7d9908af928690f.jpg"},tbC8:function(e,t,n){e.exports=n.p+"static/pink_window-8992c3fa04539fa5acf1ce1002102739.png"},tvXG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var i=window.getComputedStyle(o),r=i.position,a=i.overflow,d=i["overflow-x"],s=i["overflow-y"];if("static"===r&&t)o=o.parentNode;else{if(n.test(a)&&n.test(d)&&n.test(s))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},uRdJ:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},uUxy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,i;return t||(t=250),function(){var r=n||this,a=+new Date,d=arguments;o&&a<o+t?(clearTimeout(i),i=setTimeout((function(){o=a,e.apply(r,d)}),t)):(o=a,e.apply(r,d))}}},vrQ9:function(e,t,n){e.exports=n.p+"static/homepage_t_thumb-be7511d6f2c5f5b7c7b26ffdf566bd82.jpg"},zY3M:function(e,t,n){e.exports=n.p+"static/homepage-46472ba32089743385f648042d7b3deb.mp4"}}]);
//# sourceMappingURL=component---src-templates-index-js-c2d73dec28a36c30d3e9.js.map