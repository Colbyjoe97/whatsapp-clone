(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},134:function(e,t,c){},135:function(e,t,c){},136:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c(1),s=c.n(n),i=c(14),r=c.n(i),o=(c(104),c(92)),d=c(20),j=(c(105),c(81)),l=c.n(j),u=c(86),b=c.n(u),h=c(85),m=c.n(h),O=c(87),p=c.n(O),x=c(164),f=c(172),v=c(165),g=(c(106),c(107),c(46)),_=g.a.initializeApp({apiKey:"AIzaSyC0kI1tjP9BITnQ7UX-WijmQOSHCYl8B1o",authDomain:"whatsapp-clone-edaa5.firebaseapp.com",projectId:"whatsapp-clone-edaa5",storageBucket:"whatsapp-clone-edaa5.appspot.com",messagingSenderId:"348304486559",appId:"1:348304486559:web:a286178e15a17288c1b2aa",measurementId:"G-GLPZ5CZWS9"}).firestore(),N=g.a.auth(),S=new g.a.auth.GoogleAuthProvider,w=_,C=c(39);var y=function(e){var t,c=e.id,s=e.name,i=e.addNewChat,r=Object(n.useState)(""),o=Object(d.a)(r,2),j=o[0],l=o[1],u=Object(n.useState)([]),b=Object(d.a)(u,2),h=b[0],m=b[1];return Object(n.useEffect)((function(){c&&w.collection("rooms").doc(c).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return m(e.docs.map((function(e){return e.data()})))}))}),[c]),Object(n.useEffect)((function(){l(Math.floor(5e3*Math.random()))}),[]),i?Object(a.jsx)("div",{onClick:function(){var e=prompt("Please enter a name for chatroom");e&&w.collection("rooms").add({name:e})},className:"sidebarChat",children:Object(a.jsx)("h2",{children:"Add new chat"})}):Object(a.jsx)(C.b,{to:"/rooms/".concat(c),children:Object(a.jsxs)("div",{className:"sidebarChat",children:[Object(a.jsx)(f.a,{src:"https://avatars.dicebear.com/api/human/".concat(j,".svg")}),Object(a.jsxs)("div",{className:"sidebarChat__info",children:[Object(a.jsx)("h2",{children:s}),Object(a.jsx)("p",{className:"computerView",children:null===(t=h[0])||void 0===t?void 0:t.message})]})]})})},I=Object(n.createContext)(),k=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(a.jsx)(I.Provider,{value:Object(n.useReducer)(t,c),children:s})},E=function(){return Object(n.useContext)(I)};var A=function(){var e=E(),t=Object(d.a)(e,2),c=t[0].user,s=(t[1],Object(n.useState)([])),i=Object(d.a)(s,2),r=i[0],o=i[1];return Object(n.useEffect)((function(){var e=w.collection("rooms").onSnapshot((function(e){return o(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),Object(a.jsxs)("div",{className:"sidebar",children:[Object(a.jsxs)("div",{className:"sidebar__header",children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(f.a,{src:null===c||void 0===c?void 0:c.photoURL})}),Object(a.jsxs)("div",{className:"sidebar__headerRight",children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(m.a,{})}),Object(a.jsx)(x.a,{children:Object(a.jsx)(b.a,{})}),Object(a.jsx)(x.a,{children:Object(a.jsx)(p.a,{})})]})]}),Object(a.jsx)("div",{className:"sidebar__search",children:Object(a.jsxs)("div",{className:"sidebar__searchContainer",children:[Object(a.jsx)(v.a,{}),Object(a.jsx)("input",{type:"text",placeholder:"Search chatrooms.."})]})}),Object(a.jsxs)("div",{className:"sidebar__chats",children:[Object(a.jsx)(y,{addNewChat:!0}),r.map((function(e){return Object(a.jsx)(y,{id:e.id,name:e.data.name},e.id)}))]})]})},P=c(69),B=c.n(P),T=c(88),D=c(166),L=c(171),M=c(173),R=c(170),U=c(167),W=c(168),F=c(169),G=c(89),z=(c.n(G).a.create({baseURL:"http://localhost:9000"}),c(90)),J=c.n(z),Q=(c(134),c(17));var V=function(e){var t,c,s=e.id,i=E(),r=Object(d.a)(i,2),o=r[0].user,j=(r[1],Object(n.useState)("")),l=Object(d.a)(j,2),u=l[0],b=l[1],h=Object(n.useState)(""),m=Object(d.a)(h,2),O=m[0],p=m[1],_=Object(Q.f)().roomId,N=Object(n.useState)(""),S=Object(d.a)(N,2),C=S[0],I=S[1],k=Object(n.useState)([]),A=Object(d.a)(k,2),P=A[0],G=A[1],z=Object(n.useState)([]),V=Object(d.a)(z,2),Z=V[0],H=V[1];Object(n.useEffect)((function(){s&&w.collection("rooms").doc(s).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return G(e.docs.map((function(e){return e.data()})))}))}),[s]),Object(n.useEffect)((function(){var e=w.collection("rooms").onSnapshot((function(e){return H(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),Object(n.useEffect)((function(){_&&(w.collection("rooms").doc(_).onSnapshot((function(e){return I(e.data().name)})),w.collection("rooms").doc(_).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return G(e.docs.map((function(e){return e.data()})))})))}),[_]),Object(n.useEffect)((function(){p(Math.floor(5e3*Math.random()))}),[_]);var K=function(){var e=Object(T.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),w.collection("rooms").doc(_).collection("messages").add({message:u,name:o.displayName,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),b("");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"chat",children:[Object(a.jsxs)("div",{className:"chat__header",children:[Object(a.jsx)("div",{className:"avatar",children:Object(a.jsx)(f.a,{src:"https://avatars.dicebear.com/api/human/".concat(O,".svg")})}),Object(a.jsxs)("div",{className:"chat__headerInfo",children:[Object(a.jsx)("h3",{children:C}),Object(a.jsxs)("p",{children:["Last Seen "," ",new Date(null===(t=P[P.length-1])||void 0===t||null===(c=t.timestamp)||void 0===c?void 0:c.toDate()).toUTCString()]})]}),Object(a.jsxs)("div",{className:"chat__headerInfoMobile",children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(f.a,{src:null===o||void 0===o?void 0:o.photoURL})}),Object(a.jsx)(D.a,{className:"app__dropdown",children:Object(a.jsx)(L.a,{variant:"outlined",value:C,children:Z.map((function(e){return Object(a.jsx)(M.a,{value:e.data.name,children:Object(a.jsx)(y,{id:e.id,name:e.data.name},e.id)})}))})}),Object(a.jsx)("div",{onClick:function(){var e=prompt("Please enter a name for chatroom");e&&w.collection("rooms").add({name:e})},className:"mobileChatAdd",children:Object(a.jsx)("h2",{children:"Add new chat"})})]}),Object(a.jsxs)("div",{className:"chat__headerRight",children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(v.a,{})}),Object(a.jsx)(x.a,{children:Object(a.jsx)(U.a,{})}),Object(a.jsx)(x.a,{children:Object(a.jsx)(W.a,{})})]})]}),Object(a.jsx)("div",{className:"chat__body",children:P.map((function(e){var t;return Object(a.jsxs)("p",{className:"chat__message ".concat(e.name===o.displayName&&"chat__receiver"),children:[Object(a.jsxs)("span",{className:"chat__name",children:[e.name,": "]}),e.message,Object(a.jsx)("span",{className:"chat__timestamp",children:new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()})]})}))}),Object(a.jsxs)("div",{className:"chat__footer",children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(F.a,{})}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{value:u,onChange:function(e){return b(e.target.value)},placeholder:"Type a message..",type:"text"}),Object(a.jsx)("div",{className:"form__button",children:Object(a.jsx)(R.a,{onClick:K,type:"submit",children:"Send message"})})]}),Object(a.jsx)("div",{className:"mic__button",children:Object(a.jsx)(x.a,{children:Object(a.jsx)(J.a,{})})})]})]})},Z=c(91),H=(c(135),c(70)),K="SET_USER",X=function(e,t){switch(console.log(t),t.type){case K:return Object(H.a)(Object(H.a)({},e),{},{user:t.user});default:return e}};var Y=function(){var e=E(),t=Object(d.a)(e,2);Object(Z.a)(t[0]);var c=t[1];return Object(a.jsx)("div",{className:"login",children:Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png",alt:""}),Object(a.jsx)("div",{className:"login__text",children:Object(a.jsx)("h1",{children:"Sign in to WhatsApp"})}),Object(a.jsx)(R.a,{type:"submit",onClick:function(){N.signInWithPopup(S).then((function(e){c({type:K,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign in with Google"})]})})};var q=function(){var e=E(),t=Object(d.a)(e,2),c=t[0].user,s=(t[1],Object(n.useState)([])),i=Object(d.a)(s,2),r=i[0],j=i[1];return Object(n.useEffect)((function(){var e=new l.a("4eefa8127dd75938c541",{cluster:"us2"}).subscribe("messages");return e.bind("inserted",(function(e){j([].concat(Object(o.a)(r),[e]))})),function(){e.unbind_all(),e.unsubscribe()}}),[r]),console.log("Messages: ",r),Object(a.jsx)("div",{className:"app",children:c?Object(a.jsx)("div",{className:"app__body",children:Object(a.jsxs)(C.a,{children:[Object(a.jsx)(A,{}),Object(a.jsxs)(Q.c,{children:[Object(a.jsx)(Q.a,{path:"/rooms/:roomId",children:Object(a.jsx)(V,{})}),Object(a.jsx)(Q.a,{path:"/",children:Object(a.jsx)(V,{})})]})]})}):Object(a.jsx)(Y,{})})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,175)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(k,{initialState:{user:null},reducer:X,children:Object(a.jsx)(q,{})})}),document.getElementById("root")),$()}},[[136,1,2]]]);
//# sourceMappingURL=main.d1e3c2b9.chunk.js.map