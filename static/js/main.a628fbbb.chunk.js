(this["webpackJsonpramadan-countdown-app"]=this["webpackJsonpramadan-countdown-app"]||[]).push([[0],{19:function(e,a,t){e.exports=t(31)},24:function(e,a,t){},25:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),l=t.n(c),o=(t(24),t(25),t(8)),s=t(18),m=function(e){var a=e.countdownData;e.name;if(!a.isItRday)return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading"},"Countdown to Ramadan 2022"),r.a.createElement("div",{className:"countdown-wrapper"},r.a.createElement("div",{className:"countdown-box"},a.days,r.a.createElement("span",{className:"legend"},"Days")),r.a.createElement("div",{className:"countdown-box"},a.hours,r.a.createElement("span",{className:"legend"},"Hours")),r.a.createElement("div",{className:"countdown-box"},a.minutes,r.a.createElement("span",{className:"legend"},"Minutes")),r.a.createElement("div",{className:"countdown-box"},a.seconds,r.a.createElement("span",{className:"legend"},"Seconds"))))},u=function(e){var a=e.name,t=e.day,c=e.month,l=Object(n.useState)({seconds:0,hours:0,minutes:0,days:0,isItRday:!1}),u=Object(s.a)(l,2),d=u[0],i=u[1];void 0!==a&&void 0!==t&&void 0!==c||(a="Sanusi",c=4,t=2);var E=new Date,p=E.getFullYear(),v=E.getDate()===t&&E.getMonth()===c-1;Object(n.useEffect)((function(){setInterval((function(){v?i((function(e){return Object(o.a)(Object(o.a)({},e),{},{isItRday:!0})})):function(){var e=new Date,a=new Date(p,c-1,t);e>a?a=new Date(p+1,c-1,t):e.getFullYear()===a.getFullYear()+1&&(a=new Date(p,c-1,t));var n=e.getTime(),r=a.getTime()-n,l=Math.floor(r/1e3),s=Math.floor(l/60),m=Math.floor(s/60),u=Math.floor(m/24);l%=60,s%=60,m%=24,i((function(e){return Object(o.a)(Object(o.a)({},e),{},{seconds:l,minutes:s,hours:m,days:u,isItRday:v})}))}()}),1e3)}),[p,t,v,c]);var h=["January","February","March","April","May","June","July","August","September","October","November","December"][new Date(p,c-1,t).getMonth()];return r.a.createElement("div",{className:"page"},r.a.createElement(m,{countdownData:d,name:a}),!v&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ramadanDate"},"Ramadan Starting Date:",r.a.createElement("br",null)," Saturday ",t," ",h,", ",p,r.a.createElement("h2",{className:"wish"},"01-RAMADAN-1443")),r.a.createElement("div",null,r.a.createElement("h2",{className:"wish"},"Wishing All Muslim Ummah Ramadan Mubarak"),r.a.createElement("footer",null,"\xa9 2022 Sanusi Abdulkadir",r.a.createElement("br",null),"Software Engineer (React developer)"))))},d=t(1);var i=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/ramadan-countdown-app",component:u})))},E=t(10);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,null,r.a.createElement(i,null))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a628fbbb.chunk.js.map