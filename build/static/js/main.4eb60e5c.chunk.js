(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{17:function(e,a,t){e.exports=t(30)},22:function(e,a,t){},23:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(10),c=t.n(s),m=(t(22),t(23),t(11)),r=t(12),i=t(13),o=t(15),u=t(14),d=t(4),E=t(16),g=t(5),p=t.n(g),h=(t(24),t(26),t(31),{apiKey:"AIzaSyCUB6sSpAoUYTf5VrCGZn3pYwBctzKxvsw",authDomain:"lab7-4bc55.firebaseapp.com",databaseURL:"https://lab7-4bc55.firebaseio.com",projectId:"lab7-4bc55",storageBucket:"lab7-4bc55.appspot.com",messagingSenderId:"544709639552",appId:"1:544709639552:web:06d113a6fda884f9921565",measurementId:"G-CN7LY4HRFR"});p.a.apps.length||p.a.initializeApp(h);var v=p.a;var b=function(e){return l.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("a",{className:"navbar-item",href:"/"})),l.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},l.a.createElement("div",{className:"navbar-start"}),l.a.createElement("div",{className:"navbar-end"},l.a.createElement("div",{className:"navbar-item"},l.a.createElement("div",{className:"buttons"},l.a.createElement("h3",{className:"navbar-item"},e.username),l.a.createElement("button",{className:"button is-light",onClick:e.logout},"Logout"))))))};var f=function(e){var a=e.data.timestamp.toDate();return l.a.createElement("article",{className:"media"},l.a.createElement("figure",{className:"media-left"},l.a.createElement("p",{className:"image is-64x64"})),l.a.createElement("div",{className:"media-content"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement("small",null,a.toString()),l.a.createElement("br",null),e.data.text))),l.a.createElement("div",{className:"media-right"},l.a.createElement("button",{className:"delete",onClick:e.delete,value:e.id},"delete")))};var N=function(e){return l.a.createElement("article",{className:"media"},l.a.createElement("p",{className:"image is-64x64"}),l.a.createElement("dir",{className:"media-content"},l.a.createElement("div",{className:"check"},l.a.createElement("p",{className:"control"},l.a.createElement("input",{type:"number",id:"1",name:"\u0e01\u0e23\u0e30\u0e40\u0e1e\u0e23\u0e32",min:"0",max:"99",defaultValue:"0",onChange:e.onChange}),l.a.createElement("label",{for:"\u0e01\u0e23\u0e30\u0e40\u0e1e\u0e23\u0e32"},"        \u0e1c\u0e31\u0e14\u0e01\u0e23\u0e30\u0e40\u0e1e\u0e23\u0e32 \u0e08\u0e32\u0e19\u0e25\u0e30 40")))),l.a.createElement("p",{className:"image is-64x64"}),l.a.createElement("dir",{className:"media-content"},l.a.createElement("div",{className:"check"},l.a.createElement("p",{className:"control"},l.a.createElement("input",{type:"number",id:"2",name:"\u0e01\u0e23\u0e30\u0e40\u0e1e\u0e23\u0e32",min:"0",max:"99",defaultValue:"0",onChange:e.onChange}),l.a.createElement("label",{for:"\u0e41\u0e01\u0e07\u0e01\u0e23\u0e30\u0e2b\u0e23\u0e35\u0e48"},"       \u0e41\u0e01\u0e07\u0e01\u0e23\u0e30\u0e2b\u0e23\u0e35\u0e48 \u0e08\u0e32\u0e19\u0e25\u0e30 50")))),l.a.createElement("p",{className:"image is-64x64"}),l.a.createElement("dir",{className:"media-content"},l.a.createElement("div",{className:"check"},l.a.createElement("p",{className:"control"},l.a.createElement("input",{type:"number",id:"3",name:"\u0e01\u0e23\u0e30\u0e40\u0e1e\u0e23\u0e32",min:"0",max:"99",defaultValue:"0",onChange:e.onChange}),l.a.createElement("label",{for:"\u0e01\u0e23\u0e30\u0e40\u0e1e\u0e23\u0e32"},"        \u0e1c\u0e31\u0e14\u0e01\u0e23\u0e30\u0e40\u0e1e\u0e23\u0e32 \u0e08\u0e32\u0e19\u0e25\u0e30 40")))),l.a.createElement("p",{className:"image is-64x64"}),l.a.createElement("dir",{className:"media-content"},l.a.createElement("div",{className:"check"},l.a.createElement("p",{className:"control"},l.a.createElement("input",{type:"number",id:"4",name:"\u0e01\u0e23\u0e30\u0e40\u0e1e\u0e23\u0e32",min:"0",max:"99",defaultValue:"0",onChange:e.onChange}),l.a.createElement("label",{for:"\u0e01\u0e23\u0e30\u0e40\u0e1e\u0e23\u0e32"},"        \u0e1c\u0e31\u0e14\u0e01\u0e23\u0e30\u0e40\u0e1e\u0e23\u0e32 \u0e08\u0e32\u0e19\u0e25\u0e30 40")))),l.a.createElement("nav",{className:"level-right"},l.a.createElement("div",{className:"level-left"},l.a.createElement("div",{className:"level-item"},l.a.createElement("button",{className:"button is-info",onClick:e.post},"Submit")))))};var C=function(e){return l.a.createElement("section",{className:"section container"},l.a.createElement(N,{image:e.image,onChange:e.onChange,post:e.post}),function(){var a=[];return e.messages.forEach((function(t){a.push(l.a.createElement(f,{image:e.image,key:t.id,id:t.id,data:t.data(),delete:e.delete}))})),a}())},w=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).post=function(e){v.firestore().collection("users").doc(t.state.currentUser.email).collection("messages").add({text:t.state.comment,timestamp:new Date})},t.delete=function(e){v.firestore().collection("users").doc(t.state.currentUser.email).collection("messages").doc(e.target.value).delete()},t.onChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(m.a)({},n,l))},t.onSubmit=function(e){e.preventDefault();var a=t.state,n=a.email,l=a.password;v.auth().signInWithEmailAndPassword(n,l).then((function(e){t.setState({currentUser:e.user})})).catch((function(e){t.setState({message:e.message})}))},t.state={email:"",password:"",messages:"",currentUser:null,image:"",comment:""},t.logout=t.logout.bind(Object(d.a)(t)),t}return Object(E.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.auth().onAuthStateChanged((function(a){a&&(e.setState({currentUser:a}),v.firestore().collection("users").doc(a.email).collection("messages").onSnapshot((function(a){e.setState({messages:a})})),v.storage().ref("40510726_1885325624882038_6625989121489764352_n.jpg").getDownloadURL().then((function(a){return e.setState({image:a})})))}))}},{key:"logout",value:function(){var e=this;v.auth().signOut().then((function(a){e.setState({currentUser:null})}))}},{key:"render",value:function(){var e=this.state,a=e.message,t=e.currentUser;return t?l.a.createElement("div",null,l.a.createElement(b,{logout:this.logout,username:t.email}),l.a.createElement(C,{image:this.state.image,messages:this.state.messages,onChange:this.onChange,post:this.post,delete:this.delete})):l.a.createElement("section",{className:"section container"},l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column is-half"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Email"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"email",name:"email",onChange:this.onChange}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"password"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"password",name:"password",onChange:this.onChange}))),a?l.a.createElement("p",{className:"help is-danger"},a):null,l.a.createElement("div",{className:"field is-grouped"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button is-link"},"Login")))))))}}]),a}(l.a.Component);var k=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"GAGTOON"),l.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.4eb60e5c.chunk.js.map