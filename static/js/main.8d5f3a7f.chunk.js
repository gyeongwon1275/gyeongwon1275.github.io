(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{33:function(e,a,t){e.exports=t(48)},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},42:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),l=t.n(c);t(38),t(39);var o=function(){return r.a.createElement("div",{className:"education-container"},r.a.createElement("h2",null,"\uad50\uc721"),r.a.createElement("div",{className:"education-wrapper"},r.a.createElement("div",{className:"date-wrapper"},r.a.createElement("h4",null,"2020.03~2020.08")),r.a.createElement("div",{className:"education-info-wrapper"},r.a.createElement("h3",null,"\ucf54\ub4dc\uc2a4\ud14c\uc774\uce20 (Code States)"),r.a.createElement("h4",null,"Advance software engineering, Immersive program (20\uae30)"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.notion.so/Code-States-Immersive-Course-16-a78e1e11032947bbbdc423c4729529c0"},"\ucf54\ub4dc\uc2a4\ud14c\uc774\uce20 \ucee4\ub9ac\ud058\ub7fc"))),r.a.createElement("div",{className:"education-wrapper"},r.a.createElement("div",{className:"date-wrapper"},r.a.createElement("h4",null,"2012.02~2018.02")),r.a.createElement("div",{className:"education-info-wrapper"},r.a.createElement("h3",null," \ud56d\uacf5\ub300\ud559\uad50"),r.a.createElement("h4",null," \uae30\uacc4\uacf5\ud559 \ud559\uc0ac \uc878"))))},i=(t(40),t(25)),s=t.n(i);t(41);var m=function(){return Object(n.useEffect)((function(){s.a.init({duration:2e3})}),[]),r.a.createElement("div",{className:"main-text-container"},r.a.createElement("h1",null," \uc548\ub155\ud558\uc138\uc694?"),r.a.createElement("h3",null,"React\ub97c \uc88b\uc544\ud558\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 \uae40\uacbd\uc6d0\uc785\ub2c8\ub2e4."),r.a.createElement("div",{className:"social-icon-container"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://bit.ly/2FZhvPP"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://bit.ly/2FGyNl2"},r.a.createElement("i",{className:"fab fa-blogger-b"})),r.a.createElement("div",{className:"email-wrapper"},r.a.createElement("a",{href:"mailto:rlaruddnjs28@gmail.com"},r.a.createElement("i",{className:"far fa-envelope"})," ")," ",r.a.createElement("p",null,"rlaruddnjs28@gmail.com"))))},p=t(31),u=(t(42),t(77)),d=t(76),E=t(74),f=t(72);var h=function(){var e=Object(n.useState)(0),a=Object(p.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){var e=[document.querySelector(".main-text-container").offsetTop,document.querySelector(".skills-container").offsetTop,document.querySelector(".project-container").offsetTop,document.querySelector(".education-container").offsetTop];window.scrollY<.8*e[1]&&c(0),window.scrollY<.8*e[2]&&window.scrollY>=.8*e[1]&&c(1),window.scrollY>=.8*e[2]&&window.scrollY<.9*e[3]&&c(2),window.scrollY>=.9*e[3]&&c(3)}),!0)}),[]);var l=Object(f.a)((function(e){return{appbar:{backgroundColor:e.palette.background.paper},indicatorColor:e.palette.primary.dark}})),o=Object(n.useCallback)((function(e){return function(){var a=document.querySelector(".".concat(e)).offsetTop;window.scrollTo({top:a,left:0,behavior:"smooth"})}}),[]),i=l();return r.a.createElement(u.a,{className:i.appbar},r.a.createElement(d.a,{value:t,onChange:function(e,a){c(a)}},r.a.createElement(E.a,{label:"MAIN",onClick:o("main-text-container")}),r.a.createElement(E.a,{label:"SKILLS",onClick:o("skills-container")}),r.a.createElement(E.a,{label:"WORKS",onClick:o("project-container")}),r.a.createElement(E.a,{label:"EDUCATION",onClick:o("education-container")})))};t(46);function g(e){var a=e.project,t=a.title,n=a.info,c=a.src,l=a.stack,o=a.github,i=a.deploy;return r.a.createElement("div",{className:"card-wrapper"},r.a.createElement("div",{className:"card-front"},r.a.createElement("h3",null,t),r.a.createElement("h4",null,n),r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{alt:"sample",src:c}))),r.a.createElement("div",{className:"card-back"},r.a.createElement("h3",null,"Stack"),r.a.createElement("h4",null,l),r.a.createElement("div",{className:"card-link-wrapper"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:o},r.a.createElement("i",{className:"fab fa-github"})),i&&r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:i},r.a.createElement("i",{className:"fas fa-globe"})))))}var v={title:"Otjang",info:"[ \uc758\ub958\uad00\ub9ac react-native App ]",src:"https://practicegyeongwon.s3.ap-northeast-2.amazonaws.com/add_item.gif",stack:"react-native / redux\nredux-thunk / react-hooks\nreact-navigation / aws-sdk\nvictory-native",github:"https://bit.ly/3hMoxEE",deploy:null},w={title:"Pet-calculator",info:"[\ubc18\ub824\ub3d9\ubb3c \uac74\uac15\uacc4\uc0b0\uae30 Clone]",src:"https://practicegyeongwon.s3.ap-northeast-2.amazonaws.com/responsive_new.gif",stack:"typescript / react\nreact-hooks / redux\nSass / webpack / chart.js",github:"https://bit.ly/2ZZVQhk",deploy:"https://bit.ly/33R05wL"};var b=function(){return r.a.createElement("div",{className:"project-container"},r.a.createElement("h2",null,"\ud504\ub85c\uc81d\ud2b8"),r.a.createElement("div",{className:"card-container"},r.a.createElement(g,{project:v}),r.a.createElement(g,{project:w})))},k=(t(47),"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"),N="https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png",y="https://image.flaticon.com/icons/png/512/226/226777.png",j="https://www.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",S="https://raw.githubusercontent.com/1ambda/1ambda.github.io/master/assets/images/redux/redux_logo.png?width=30%&height=30%",_="https://www.mitrai.com/wp-content/uploads/2018/01/react-logo.png",C="https://sass-lang.com/assets/img/styleguide/white-e44bed0d.png";var x=function(){return r.a.createElement("div",{className:"skills-container"},r.a.createElement("h2",null,"\uc2a4\ud0ac"),r.a.createElement("div",{className:"skills-wrapper"},r.a.createElement("h3",null,"\ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4"),r.a.createElement("img",{alt:"javascript",src:k}),r.a.createElement("img",{alt:"typescript",src:N}),r.a.createElement("img",{alt:"java",src:y})),r.a.createElement("div",{className:"skills-wrapper"},r.a.createElement("h3",null,"\ud504\ub808\uc784\uc6cc\ud06c & \ub77c\uc774\ube0c\ub7ec\ub9ac"),r.a.createElement("img",{alt:"react",src:j}),r.a.createElement("img",{alt:"redux",src:S}),r.a.createElement("img",{alt:"reactNative",src:_}),r.a.createElement("img",{alt:"sass",src:C})))};var O=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(h,null),r.a.createElement(m,null),r.a.createElement(x,null),r.a.createElement(b,null),r.a.createElement(o,null))},T=t(30),I=t(75),Y=Object(T.a)({palette:{type:"dark"}});l.a.render(r.a.createElement(I.a,{theme:Y},r.a.createElement(O,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.8d5f3a7f.chunk.js.map