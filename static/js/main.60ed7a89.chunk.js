(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{17:function(e,t,a){e.exports=a(45)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=(a(22),a(12)),s=a(13),m=a(16),i=a(15);var u=function(e){return r.a.createElement("div",{className:"card my-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"img-container col-1"},r.a.createElement("img",{alt:e.name,src:e.image})),r.a.createElement("div",{className:"col-4 pt-2"},e.firstName," ",e.surName),r.a.createElement("div",{className:"col-5 pt-2"},e.email),r.a.createElement("div",{className:"col-2 pt-2"},e.phone)))};a(23);var p=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};a(24);var h=function(e){return r.a.createElement("h1",{className:"title text-center py-4"},e.children)};a(25);var f=function(e){return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"employee",type:"text",className:"form-control",placeholder:"search Employees",id:"employee"})))};a(26);var E=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1"}),r.a.createElement("h5",{className:"col-4"}," Name"),r.a.createElement("div",{className:"col-5"},r.a.createElement("h5",null,"Email",r.a.createElement("button",{type:"submit",onClick:e.sortEmployee,className:"sort btn btn-success float-right"},"sort"))),r.a.createElement("h5",{className:"col-2"},"Phone"))},d=a(14),v=a.n(d),y=function(){return v.a.get("https://randomuser.me/api/?results=20")},N=(a(44),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={search:"",employees:[]},e.handleInputChange=function(t){e.setState({search:t.target.value}),console.log(e.state.search)},e.filterEmployee=function(){var t=e.state.employees.filter((function(t){return t.name.first.toUpperCase().includes(e.state.search.toUpperCase())}));e.setState({employees:t})},e.sortEmployee=function(t){t.preventDefault();var a=e.state.employees.sort((function(e,t){var a=e.email.toUpperCase(),n=t.email.toUpperCase();return a<n?-1:a>n?1:0}));e.setState({employees:a})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){return e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(p,null,r.a.createElement(h,null,"Employee Directory"),r.a.createElement("div",{className:"container"},r.a.createElement(f,{handleInputChange:this.handleInputChange}),r.a.createElement(E,{sortEmployee:this.sortEmployee}),this.state.employees.map((function(t,a){return r.a.createElement(u,{filterEmployee:e.filterEmployee,image:t.picture.thumbnail,firstName:t.name.first,surName:t.name.last,email:t.email,phone:t.phone,key:a})}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.60ed7a89.chunk.js.map