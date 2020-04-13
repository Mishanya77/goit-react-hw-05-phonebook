(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={enter:"slideFromLeft_enter__1F_da",appear:"slideFromLeft_appear__1l-72",enterActive:"slideFromLeft_enterActive__3eZCj",appearActive:"slideFromLeft_appearActive__3y4gt",appearDone:"slideFromLeft_appearDone__1x8S_",exit:"slideFromLeft_exit__2e3ms",exitActive:"slideFromLeft_exitActive__TkYGq"}},,,,function(e,t,n){e.exports={deleteBtn:"ContactElement_deleteBtn__20PqZ",contactElement:"ContactElement_contactElement__j-CDg",contactContainer:"ContactElement_contactContainer__2fBt4"}},,,,,function(e,t,n){e.exports={form:"ContactForm_form__1fuOn"}},function(e,t,n){e.exports={notification:"Notification_notification__1C7Ma"}},function(e,t,n){e.exports={title:"App_title__1YcTA"}},function(e,t,n){e.exports={enter:"slideFromRight_enter__6dU6W",enterActive:"slideFromRight_enterActive__3xCMV",exit:"slideFromRight_exit__2KA8L",exitActive:"slideFromRight_exitActive__2TwKz"}},function(e,t,n){e.exports={enter:"pop_enter__1NM7x",enterActive:"pop_enterActive__1Bhql",exit:"pop_exit__1_phz",exitActive:"pop_exitActive__3xbz2"}},,,,function(e,t,n){e.exports=n(34)},,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),r=n.n(c),i=(n(30),n(22)),s=n(5),l=n(6),m=n(10),u=n(11),p=n(38),_=n(36),f=n(15),h=n(7),d=n(16),v=n.n(d),b=n(17),E=n.n(b),g=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(h.a)({},a,o))},e.handleSubmit=function(t){t.preventDefault(),e.state.name&&e.state.number&&(e.props.onFormSubmit(Object(f.a)({},e.state)),e.reset())},e}return Object(l.a)(n,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"".concat(E.a.form," container shadow")},o.a.createElement("label",{htmlFor:"name"},"Name",o.a.createElement("input",{type:"text",value:t,name:"name",required:!0,onChange:this.handleChange})),o.a.createElement("label",{htmlFor:"number"},"Number",o.a.createElement(v.a,{mask:["(",/\d/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],name:"number",required:!0,value:n,onChange:this.handleChange,placeholder:"Enter a phone number"})),o.a.createElement("button",{type:"submit"},"Add contact"))}}]),n}(a.Component),C=n(37),x=n(12),F=n.n(x),A=function(e){var t=e.contact,n=e.onDeleteContact;return o.a.createElement("div",{className:"".concat(F.a.contactElement," container shadow")},o.a.createElement("div",{className:F.a.contactContainer},o.a.createElement("span",null,t.name),o.a.createElement("span",null,t.number)),o.a.createElement("button",{onClick:function(){return n(t.id)},className:F.a.deleteBtn,type:"button"},"\u2715"))},S=n(8),y=n.n(S),N=function(e){var t=e.contacts,n=e.onDeleteContact;return o.a.createElement(C.a,{component:"ul"},t.map((function(e){return o.a.createElement(_.a,{key:e.id,timeout:200,unmountOnExit:!0,classNames:y.a},o.a.createElement("li",null,o.a.createElement(A,{contact:e,onDeleteContact:n})))})))},O=function(e){var t=e.value,n=e.onChangeFilter;return o.a.createElement("div",{className:"container shadow"},o.a.createElement("p",null,"Find contacts by name:"),o.a.createElement("input",{name:"filter",value:t,onChange:n,placeholder:"Type here to search..."}))},w=n(18),j=n.n(w),k=function(e){var t=e.message;return o.a.createElement("div",{className:j.a.notification},t)},D=n(19),L=n.n(D),M=n(20),B=n.n(M),q=n(21),T=n.n(q),J=(n(33),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={contacts:[],filter:"",message:"",showMessage:!1},e.changeFilter=function(t){var n=t.target.value;e.setState({filter:n})},e.onDeleteContact=function(t){var n=e.state.contacts;e.setState({contacts:n.filter((function(e){return e.id!==t}))})},e.onFormSubmit=function(t){var n=e.state.contacts,a={id:Object(p.a)(),name:t.name,number:t.number};if(n.find((function(e){return e.name===a.name})))return e.setState({showMessage:!0,message:"Contact already exists!"}),void setTimeout((function(){e.setState({showMessage:!1})}),2e3);e.setState({contacts:[].concat(Object(i.a)(n),[a])})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.contacts;t.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=e.message,c=e.showMessage,r=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,n);return o.a.createElement("div",{className:"container"},o.a.createElement(_.a,{in:c,timeout:200,classNames:B.a,unmountOnExit:!0},o.a.createElement(k,{message:a})),o.a.createElement(_.a,{in:!0,appear:!0,timeout:1e3,classNames:y.a},o.a.createElement("h1",{className:L.a.title},"Phonebook")),o.a.createElement(g,{onFormSubmit:this.onFormSubmit}),o.a.createElement(_.a,{in:t.length>1,timeout:200,classNames:T.a,unmountOnExit:!0},o.a.createElement(O,{value:n,onChangeFilter:this.changeFilter})),o.a.createElement(N,{contacts:r,onDeleteContact:this.onDeleteContact}))}}]),n}(a.Component));r.a.render(o.a.createElement(J,null),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.570b4464.chunk.js.map