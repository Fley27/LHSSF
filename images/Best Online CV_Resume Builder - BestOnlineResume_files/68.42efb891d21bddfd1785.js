(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[68],{"mq+w":function(e,t,n){"use strict";n.r(t);var r,i=n("cpVT"),o=n("nKUr"),u=n("q1tI"),a=n("Vvt1"),c=n.n(a),s=n("ttZb"),p=n("20a2"),d=n("R554"),f=n("Oizg"),l=n("jT3O"),b=n("H+61"),m=n("UlJF"),h=n("7LId"),g=n("VIvw"),v=n("iHvq"),O=n("vOnD"),j=n("RWO2"),w=n("iEkq"),x=n("xmSN"),y=n("LHey");function P(){var e=Object(l.a)(["\n    margin: 20px auto;\n  "]);return P=function(){return e},e}function k(){var e=Object(l.a)(["\n    margin: 44px auto;\n  "]);return k=function(){return e},e}function R(){var e=Object(l.a)(["\n    padding: 0px 20px;\n  "]);return R=function(){return e},e}function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(v.a)(e);if(t){var i=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(g.a)(this,n)}}var S=Object(y.d)(r=function(e){Object(h.a)(n,e);var t=I(n);function n(){var e,r;Object(b.a)(this,n);for(var i=arguments.length,u=new Array(i),a=0;a<i;a++)u[a]=arguments[a];return Object(g.a)(r,(e=r=t.call.apply(t,[this].concat(u)),r.state={width:0},r.componentDidMount=function(){window.addEventListener("resize",r.updateWidth),r.updateWidth()},r.updateWidth=function(){if(r.preview){var e=r.preview.offsetWidth;r.setState({width:e})}},r.getPreviewRef=function(e){r.preview=e},r.getPreview=function(){var e=r.state.width,t=r.props,n=t.setPageState,i=t.getResume,u=t.updateImmue,a=i?Object(j.k)(i.settings.template):null;return Object(o.jsx)(D,{ref:r.getPreviewRef,children:Object(o.jsx)(w.default,{source:i,updateCount:i.updatesCount,setPageState:n,width:e,noDebounce:!0,variant:a,updateImmue:u})})},e))}return Object(m.a)(n,[{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"componentDidUpdate",value:function(e,t){e.loadingState&&!this.props.loadingState&&this.updateWidth()}},{key:"render",value:function(){var e=this.props,t=e.loading,n=e.getResume,r=e.updateImmue;return Object(o.jsxs)(q,{children:[Object(o.jsx)(x.a,{source:n,loading:t,updateImmue:r}),Object(o.jsx)(E,{children:this.getPreview()})]})}}]),n}(u.PureComponent))||r,q=O.default.section.withConfig({displayName:"Page",componentId:"sc-1qqn6ti-0"})(["position:fixed;z-index:3;top:0;left:0;bottom:0;right:0;display:flex;pointer-events:auto;transform:translateY(0px);flex-flow:column nowrap;"]),E=O.default.div.withConfig({displayName:"PreviewContent",componentId:"sc-1qqn6ti-1"})(["background-color:#e5e4ea;height:calc(100vh - 70px);flex:1 0 0px;padding:20px 0px;overflow-y:auto;"," &::-webkit-scrollbar{width:14px;height:292px;}&::-webkit-scrollbar-thumb{border:4px solid rgba(0,0,0,0);background-clip:padding-box;border-radius:7px;scroll-padding-top:10px;background-color:#131518;}"],(function(e){return e.theme.max("sm")(R())})),D=O.default.div.withConfig({displayName:"Preview",componentId:"sc-1qqn6ti-2"})(["max-width:928px;overflow:hidden;height:","px;transform:translateY(0px);opacity:1;margin:60px auto;background:white;border-radius:",";"," ",""],(function(e){return e.height}),(function(e){return e.theme.general.borderRadius}),(function(e){return e.theme.max("md")(k())}),(function(e){return e.theme.max("sm")(P())})),_=S,W=n("FWZJ"),C=n("9614");function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var z=c()((function(){return n.e(66).then(n.bind(null,"kuKP"))}),{loadableGenerated:{webpack:function(){return["kuKP"]},modules:["resume-preview.js -> ../imports/core/ui/components/ErrorOccured"]}});t.default=function(){var e=Object(u.useContext)(y.c).screenResolution.width,t=Object(p.useRouter)().query.resumeId,n=Object(C.a)().trackEvent,r=Object(s.c)(d.d,{variables:{resumeId:t}}),a=r.loading,c=r.error,l=r.data,b=Object(u.useState)(null),m=b[0],h=b[1],g=Object(u.useState)(1),v=g[0],O=g[1],j=Object(u.useState)(null),w=j[0],x=j[1];Object(u.useEffect)((function(){n("preview_view")}),[]),Object(u.useEffect)((function(){Object(W.y)("preview_page_experiment_2"),Object(W.y)("generator_resume_preview")}),[a]);if(a)return Object(o.jsx)(f.a,{});if(c)return Object(o.jsx)(z,{});var P=w||l.getResume;return Object(o.jsx)(_,{getResume:P,currentPage:v,numPages:m,width:e,setPageState:function(e,t){O(e),h(t)},onNextPage:function(){return O(v+1)},onPreviousPage:function(){return O(v-1)},updateImmue:function(e,t){if(e&&x(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)),t)return P}})}}}]);