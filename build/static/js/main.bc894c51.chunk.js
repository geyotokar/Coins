(this.webpackJsonpreacttest1=this.webpackJsonpreacttest1||[]).push([[0],{44:function(t,e,n){},82:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),i=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))},o=n(26),s=n.n(o),b=n(6),l=n(23),d=n(2),j=n(14),u=n(19),O=n.n(u),h=n(30),m=n(4),x=n(10),f=n(45),g=n.n(f).a.create({baseURL:"https://api.coingecko.com/api/v3/"}),p=function(t,e){return g.get("simple/price?ids=".concat(t,"&vs_currencies=").concat(e)).then((function(t){return t.data}))},v=n(31),C=n(46);!function(t){t.light="light",t.dark="dark"}(c||(c={}));var E,y,F,S,T,k,w,D,B,H,A,z,V,_,M,I={colors:{primary:"#7986CB",secondary:"#2B2B2B",success:"#4CAF50",danger:"#F44446",bg:"#E8E7EC",font:"#19191B"},media:{lg:"(max-width: 1140px)",md:"(max-width: 960px)",sm:"(max-width: 720px)",xs:"(max-width: 540px)"}},N=Object(m.a)(Object(m.a)({},I),{},{type:c.light,colors:Object(m.a)(Object(m.a)({},I.colors),{},{bg:"#E5E4E8",font:"#19191B"})}),U=Object(m.a)(Object(m.a)({},I),{},{type:c.dark,colors:Object(m.a)(Object(m.a)({},I.colors),{},{bg:"#19191B",font:"#E5E4E8"})}),L={amount1:1,amount2:1,value:{},historyBTCValues:[],historyETHValues:[],newHistoryValues:[],usd:1,theme:N},R=function(t){return{type:"COINS/SET_PRICE",data:t}},P=function(t){return{type:"COINS/SET_AMOUNT1",amount:t}},G=function(t){return{type:"COINS/SET_AMOUNT2",amount:t}},J=function(){return{type:"COINS/TOGGLE_THEME"}},Y=Object(v.c)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0,n=function(t,e,n){return[].concat(Object(x.a)(t.slice(0,e)),[n],Object(x.a)(t.slice(e)))};switch(e.type){case"COINS/SET_PRICE":return Object(m.a)(Object(m.a)({},t),{},{value:e.data});case"COINS/SET_AMOUNT1":return Object(m.a)(Object(m.a)({},t),{},{amount1:e.amount});case"COINS/SET_AMOUNT2":return Object(m.a)(Object(m.a)({},t),{},{amount2:e.amount});case"COINS/SET_BTC_HISTORY":return t.usd=e.data.market_data.current_price.valuesOf(e.data.market_data.current_price.usd),t.newHistoryValues=n(t.historyBTCValues,e.id,t.usd),Object(m.a)(Object(m.a)(Object(m.a)({},t),e.data),{},{historyBTCValues:t.newHistoryValues});case"COINS/SET_ETH_HISTORY":return t.usd=e.data.market_data.current_price.valuesOf(e.data.market_data.current_price.usd),t.newHistoryValues=n(t.historyETHValues,e.id,t.usd),Object(m.a)(Object(m.a)(Object(m.a)({},t),e.data),{},{historyETHValues:t.newHistoryValues});case"COINS/TOGGLE_THEME":var a=t.theme.type===c.light;return Object(m.a)(Object(m.a)({},t),{},{theme:a?U:N});default:return t}}),Object(v.b)(Object(v.a)(C.a))),q=Y,W=n(5),K=Object(W.c)(E||(E=Object(b.a)(["\n  position: relative;\n  margin-top: 0.3em;\n  padding: 0.5em 1em;\n  width: 20em;\n  border-radius: 1em;\n"]))),Q=Object(W.c)(y||(y=Object(b.a)(["\n  border-radius: 1em;\n  background-color: #FFFFFFEE;  \n"]))),X=W.d.div(F||(F=Object(b.a)(["\n  ",";\n  padding-top: 2em;\n  height: 5em;\n  color: ",";\n  background-color: ",";\n"])),K,(function(t){return t.font}),(function(t){return t.bg})),Z=W.d.p(S||(S=Object(b.a)(["\n  opacity: 0.7;\n  margin-bottom: 0.3em;\n"]))),$=W.d.div(T||(T=Object(b.a)(["\n  position: absolute;  \n  top: 3em;\n  width: 100%;\n  ","\n"])),Q),tt=W.d.div(k||(k=Object(b.a)(["\n  position: absolute; \n  left: 7em;\n  text-align: left;\n"]))),et=W.d.div(w||(w=Object(b.a)(["\n  position: absolute;\n  left: 38%;\n  width: 40%;\n"]))),nt=W.d.div(D||(D=Object(b.a)(["\n  position: relative;\n  margin-top: 2.6em;\n  padding: 30px 20px;\n  width: 20em;\n  height: 23.4em;\n  box-sizing: border-box;\n  ","\n"])),Q),ct=W.d.button(B||(B=Object(b.a)(["\n  border: none;\n  background-color: inherit;\n"]))),at=W.d.a(H||(H=Object(b.a)(["\n  text-decoration: none;\n"]))),rt=W.d.img(A||(A=Object(b.a)(["\n  display: inline;\n  width: 30px;\n  height: 30px;\n"]))),it=W.d.img(z||(z=Object(b.a)(["\n  display: inline;\n  width: 15px;\n  height: 15px;\n"]))),ot=n(1),st=function(t){var e="",n="";switch(t.id){case"logo":e=bt[0],n=bt[1];break;case"portfolio":e=bt[2];break;case"converter":e=bt[3];break;case"theme":e=bt[4];break;case"btc":e=bt[5],n=bt[6];break;case"eth":e=bt[7];break;case"usd":e=bt[8]}return Object(ot.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:[Object(ot.jsx)(lt,{d:e,fill:t.fill}),n.length>0&&Object(ot.jsx)(lt,{d:n,fill:t.fill})]})},bt=["M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8z","M12 17c.901 0 2.581-.168 3.707-1.292l-1.414-1.416C13.85 14.735 12.992 15 12 15c-1.626 0-3-1.374-3-3s1.374-3 3-3c.993 0 1.851.265 2.293.707l1.414-1.414C14.582 7.168 12.901 7 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5z","M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-4 2v11H8V8h8zm-1-4v2H9V4h6zM4 8h2v11H4V8zm14 11V8h2l.001 11H18z","M10 11H7.101l.001-.009a4.956 4.956 0 0 1 .752-1.787 5.054 5.054 0 0 1 2.2-1.811c.302-.128.617-.226.938-.291a5.078 5.078 0 0 1 2.018 0 4.978 4.978 0 0 1 2.525 1.361l1.416-1.412a7.036 7.036 0 0 0-2.224-1.501 6.921 6.921 0 0 0-1.315-.408 7.079 7.079 0 0 0-2.819 0 6.94 6.94 0 0 0-1.316.409 7.04 7.04 0 0 0-3.08 2.534 6.978 6.978 0 0 0-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4 4-4zm4 2h2.899l-.001.008a4.976 4.976 0 0 1-2.103 3.138 4.943 4.943 0 0 1-1.787.752 5.073 5.073 0 0 1-2.017 0 4.956 4.956 0 0 1-1.787-.752 5.072 5.072 0 0 1-.74-.61L7.05 16.95a7.032 7.032 0 0 0 2.225 1.5c.424.18.867.317 1.315.408a7.07 7.07 0 0 0 2.818 0 7.031 7.031 0 0 0 4.395-2.945 6.974 6.974 0 0 0 1.053-2.503c.027-.135.043-.273.063-.41H22l-4-4-4 4z","M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.144.206.38.996.591 1.921H8v2h8v-2h-.774c.213-.927.45-1.719.593-1.925.352-.503.726-.94 1.087-1.363zm-2.724.213c-.434.617-.796 2.075-1.006 3.075h-2.351c-.209-1.002-.572-2.463-1.011-3.08a20.502 20.502 0 0 0-1.196-1.492C7.644 11.294 7 10.544 7 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.521-.643 2.274-1.615 3.413-.373.438-.796.933-1.203 1.512z","m11.953 8.819-.547 2.19c.619.154 2.529.784 2.838-.456.322-1.291-1.673-1.579-2.291-1.734zm-.822 3.296-.603 2.415c.743.185 3.037.921 3.376-.441.355-1.422-2.029-1.789-2.773-1.974z","M14.421 2.299C9.064.964 3.641 4.224 2.306 9.581.97 14.936 4.23 20.361 9.583 21.697c5.357 1.335 10.783-1.924 12.117-7.281 1.336-5.356-1.924-10.781-7.279-12.117zm1.991 8.275c-.145.974-.686 1.445-1.402 1.611.985.512 1.485 1.298 1.009 2.661-.592 1.691-1.998 1.834-3.87 1.48l-.454 1.82-1.096-.273.447-1.794a44.624 44.624 0 0 1-.875-.228l-.449 1.804-1.095-.275.454-1.823c-.257-.066-.517-.136-.782-.202L6.87 15l.546-1.256s.808.215.797.199c.311.077.448-.125.502-.261l.719-2.875.115.029a.864.864 0 0 0-.114-.037l.512-2.053c.013-.234-.066-.528-.511-.639.018-.011-.797-.198-.797-.198l.291-1.172 1.514.378-.001.005c.227.057.461.111.7.165l.449-1.802 1.097.273-.44 1.766c.294.067.591.135.879.207l.438-1.755 1.097.273-.449 1.802c1.384.479 2.396 1.195 2.198 2.525z","M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z","M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 14.915V18h-2v-1.08c-2.339-.367-3-2.002-3-2.92h2c.011.143.159 1 2 1 1.38 0 2-.585 2-1 0-.324 0-1-2-1-3.48 0-4-1.88-4-3 0-1.288 1.029-2.584 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .516-2 1 0 .374 0 1 2 1 3.48 0 4 1.88 4 3 0 1.288-1.029 2.584-3 2.915z"],lt=W.d.path(V||(V=Object(b.a)(["\n  color: ","\n"])),(function(t){return t.fill})),dt=function(){var t=Object(j.c)((function(t){return t.theme})),e=t.colors.bg,n=t.colors.font,c=Object(j.b)();return Object(ot.jsx)("header",{children:Object(ot.jsxs)(jt,{bg:n,font:e,children:[Object(ot.jsx)(ut,{children:Object(ot.jsx)(st,{id:"logo",fill:e})}),Object(ot.jsx)(ut,{children:Object(ot.jsx)(ct,{onClick:function(){c(J())},children:Object(ot.jsx)(st,{id:"theme",fill:e})})}),Object(ot.jsx)(ut,{children:Object(ot.jsx)(at,{children:Object(ot.jsx)(l.b,{to:"/converter",children:Object(ot.jsx)(st,{id:"converter",fill:e})})})}),Object(ot.jsx)(ut,{children:Object(ot.jsx)(at,{children:Object(ot.jsx)(l.b,{to:"/portfolio",children:Object(ot.jsx)(st,{id:"portfolio",fill:e})})})})]})})},jt=W.d.div(_||(_=Object(b.a)(["\n  position: absolute;\n  margin: 3vh;\n  height: 94vh;\n  width: 4em;\n  border-radius: 2em;\n  color: ",";\n  background-color: ",";\n"])),(function(t){return t.font}),(function(t){return t.bg})),ut=W.d.div(M||(M=Object(b.a)(["\n  margin: 2em 1em 1em 1em;\n  opacity: 0.8;\n  &:hover, &:active {\n    opacity: 1;\n  }\n"]))),Ot=(n(44),n(7)),ht=n(29);Ot.e.register(Ot.a,Ot.q,Ot.g);var mt,xt,ft={labels:["BTC","ETH","USD"],datasets:[{label:"# of Votes",data:[12,19,3],backgroundColor:["#BCD9FFDE","#FCF9D9DE","#A7E6BADE"],borderColor:["#BCD9FFDE","#FCF9D9DE","#A7E6BADE"],borderWidth:1}]},gt=function(){return Object(ot.jsx)(ht.a,{data:ft})},pt=W.d.div(mt||(mt=Object(b.a)(["\n  --p: 80;\n  --b: 5px;\n  --w: 40px;\n  --c: #FFFFFFEE;\n  position: absolute;\n  right: 1em;\n  top: 40%;\n  transform: translate(0, -40%);\n  display: inline-grid;\n  margin: 5px;\n  width: var(--w);\n  place-content: center; // is it need?\n  aspect-ratio: 1;\n  animation: p 1s 0.5s both;\n  @keyframes p {\n    from {--p: 0}\n  }\n  :before, :after {\n    content: '';\n    position: absolute;\n    border-radius: 50%;\n  }\n  // rounded first end\n  :before {\n    inset: 0;\n    background: \n            radial-gradient(farthest-side, \n            var(--c)98%, #0000) top/var(--b) var(--b) no-repeat, \n            conic-gradient(var(--c) calc(var(--p)*1%), #0000 0);\n    -webkit-mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));\n    mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));\n  }\n  // rounded second end\n  :after {\n    inset: calc(50% - var(--b)/2);\n    background: var(--c);\n    transform: rotate(calc(var(--p)*3.6deg)) translateY(calc(50% - var(--w)/2));\n  }\n"]))),vt=r.a.memo((function(){var t=Object(j.c)((function(t){return t.theme})),e=t.colors.bg,n=t.colors.font;return Object(ot.jsxs)($,{children:[Object(ot.jsxs)(tt,{children:[Object(ot.jsx)("h1",{children:"Wallet"}),Object(ot.jsxs)(X,{bg:n,font:e,children:[Object(ot.jsx)("h5",{children:Object(ot.jsx)(Z,{children:"Total balance"})}),Object(ot.jsxs)("h2",{children:[Object(ot.jsx)(st,{id:"usd",fill:e})," 9866660"]})]}),Object(ot.jsx)(Ct,{id:"btc",name:"BTC Bitcoin",color1:"#A1DFB3",color2:"#BCD9FF"}),Object(ot.jsx)(Ct,{id:"eth",name:"ETH Ethereum",color1:"#DDCDCC",color2:"#FCF9D9"}),Object(ot.jsx)(Ct,{id:"usd",name:"USD US Dollar",color1:"#DCD9D9",color2:"#A7E6BA"})]}),Object(ot.jsx)(et,{children:Object(ot.jsx)(nt,{children:Object(ot.jsx)(gt,{})})})]})})),Ct=function(t){return Object(ot.jsxs)(yt,{color1:t.color1,color2:t.color2,children:[Object(ot.jsx)(pt,{}),Object(ot.jsx)("h4",{children:t.name}),Object(ot.jsxs)("h2",{children:[Object(ot.jsx)(st,{id:t.id,fill:"#FFFFFF"})," 9866660"]})]})},Et=vt,yt=W.d.div(xt||(xt=Object(b.a)(["\n  ",";\n  height: 4em;\n  color: #FFFFFF;\n  background: linear-gradient(to right, ",", ",");\n"])),K,(function(t){return t.color1}),(function(t){return t.color2})),Ft=n(11);Ot.e.register(Ot.d,Ot.j,Ot.l,Ot.i,Ot.p,Ot.q,Ot.g);var St,Tt,kt={responsive:!0,interaction:{mode:"index",intersect:!1},stacked:!1,plugins:{title:{display:!0,text:"Exchange rate to USD"}},scales:{y:{type:"linear",display:!0,position:"left"},y1:{type:"linear",display:!0,position:"right",grid:{drawOnChartArea:!1}}}},wt=new Date,Dt=Date.parse(wt),Bt=864e5,Ht=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],At=[Dt-6*Bt,Dt-5*Bt,Dt-4*Bt,Dt-3*Bt,Dt-2*Bt,Dt-Bt,Dt].map((function(t){return new Date(t)})).map((function(t){return t.getDate()+" "+Ht[t.getMonth()]})),zt=function(){var t={labels:At,datasets:[{label:"BTC",data:[15,10,26,8,0,18,6],borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)",yAxisID:"y"},{label:"ETH",data:[6,18,0,8,26,10,15],borderColor:"rgb(255, 206, 86)",backgroundColor:"rgba(255, 206, 86, 0.5)",yAxisID:"y1"}]};return Object(ot.jsx)(ht.b,{options:kt,data:t})},Vt=n(18),_t=function(t){return Object(ot.jsx)("div",{children:Object(ot.jsx)(Vt.c,{initialValues:{amount:t.amount},onSubmit:function(e,n){var c=n.setSubmitting;t.changeAmount(e.amount),c(!1)},children:function(t){var e=t.isSubmitting;return Object(ot.jsxs)(Vt.b,{children:[Object(ot.jsx)(Vt.a,{type:"text",name:"amount"}),Object(ot.jsx)("button",{type:"submit",disabled:e,children:"+"})]})}})})},Mt=n.p+"static/media/bitcoin.a256dd67.svg",It=[Mt,Mt,n.p+"static/media/dollar.39ac4cc0.svg"],Nt=function(){return Object(ot.jsx)("div",{children:Object(ot.jsx)(Vt.c,{initialValues:{id:""},onSubmit:function(t,e){(0,e.setSubmitting)(!1)},children:function(t){var e=t.isSubmitting;return Object(ot.jsxs)(Vt.b,{children:[Object(ot.jsx)(Vt.a,{type:"text",name:"amount"}),Object(ot.jsx)("button",{type:"submit",disabled:e,children:"convert"})]})}})})},Ut=function(t){var e=Object(a.useState)(!1),n=Object(Ft.a)(e,2),c=n[0],r=n[1],i=t.rate?t.rate:1;return c?Object(ot.jsx)(Nt,{}):Object(ot.jsxs)("div",{children:[Object(ot.jsxs)("div",{children:[Object(ot.jsx)(rt,{src:t.icon})," ",t.name,", ",Object(ot.jsx)(it,{src:t.icon,alt:"..."}),"1 = ",i,Object(ot.jsx)(it,{src:It[2],alt:"..."})]}),Object(ot.jsx)(it,{src:t.icon,alt:"..."}),Object(ot.jsx)("div",{children:t.changeAmount?Object(ot.jsx)(_t,{amount:t.amount,changeAmount:t.changeAmount}):Object(ot.jsx)("div",{children:t.amount})}),Object(ot.jsx)("button",{onClick:function(){r(!0)},children:"\u2304"})]})},Lt=r.a.memo((function(){var t=Object(a.useState)("bitcoin"),e=Object(Ft.a)(t,2),n=e[0],c=(e[1],Object(a.useState)("usd")),r=Object(Ft.a)(c,2),i=r[0],o=(r[1],Object(j.c)((function(t){return t.value}))),s=Object(j.c)((function(t){return t.amount1})),b=Object(j.c)((function(t){return t.amount2})),l=Object(j.b)();Object(a.useEffect)((function(){l(function(t,e){return function(){var n=Object(h.a)(O.a.mark((function n(c){var a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p(t,e);case 2:a=n.sent,c(R(a));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}(n,i))}),[n,i,l]);var d=Object.values(o.bitcoin?o.bitcoin:o.ethereum?o.ethereum:o.dollar?o.dollar:{})[0];Object(a.useEffect)((function(){l(G(s?s*d:1))}),[d,s,l]);var u=It[0],m=It[2];return Object(ot.jsxs)($,{children:[Object(ot.jsxs)(tt,{children:[Object(ot.jsx)(Ut,{icon:u,name:"BTC",amount:s,changeAmount:function(t){l(P(t))},rate:d}),Object(ot.jsx)(Ut,{icon:m,name:"BTC",amount:b})]}),Object(ot.jsx)(et,{children:Object(ot.jsx)(zt,{})})]})})),Rt=Lt,Pt=Object(W.b)(St||(St=Object(b.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    margin: 0;\n    text-align: center;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  svg {\n    position: relative;\n    top: 3px;\n  }\n"]))),Gt=function(){return Object(ot.jsx)(l.a,{children:Object(ot.jsx)(j.a,{store:q,children:Object(ot.jsxs)(W.a,{theme:q.getState().theme,children:[Object(ot.jsx)(Jt,{}),Object(ot.jsx)(Pt,{})]})})})},Jt=function(){var t=Object(j.c)((function(t){return t.theme}));return Object(ot.jsxs)(Yt,{font:t.colors.font,bg:t.colors.bg,children:[Object(ot.jsx)(dt,{}),Object(ot.jsxs)(d.c,{children:[Object(ot.jsx)(d.a,{path:"/",element:Object(ot.jsx)(Et,{})}),Object(ot.jsx)(d.a,{path:"/portfolio",element:Object(ot.jsx)(Et,{})}),Object(ot.jsx)(d.a,{path:"/converter/*",element:Object(ot.jsx)(Rt,{})})]})]})},Yt=W.d.div(Tt||(Tt=Object(b.a)(["\n  height: 100vh;\n  color: ",";\n  background-color: ",";\n"])),(function(t){return t.font}),(function(t){return t.bg}));s.a.render(Object(ot.jsx)(Gt,{}),document.getElementById("root")),i()}},[[82,1,2]]]);
//# sourceMappingURL=main.bc894c51.chunk.js.map