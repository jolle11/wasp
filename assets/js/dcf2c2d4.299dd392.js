"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1548],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46300:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(50012);function o(e){let{path:t}=e;const[n]=(0,a.Nk)("docusaurus.tab.js-ts"),o=t.lastIndexOf("{"),i=t.slice(o+1,t.length-1),[s,c]=i.split(","),p=t.slice(0,o);return r.createElement("code",null,p+("js"===n?s:c))}},54326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));n(46300);const o={title:"Accessing the configuration"},i=void 0,s={unversionedId:"advanced/accessing-app-config",id:"version-0.13.0/advanced/accessing-app-config",title:"Accessing the configuration",description:"Whenever you start a Wasp app, you are starting two processes.",source:"@site/versioned_docs/version-0.13.0/advanced/accessing-app-config.md",sourceDirName:"advanced",slug:"/advanced/accessing-app-config",permalink:"/docs/advanced/accessing-app-config",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.13.0/advanced/accessing-app-config.md",tags:[],version:"0.13.0",frontMatter:{title:"Accessing the configuration"},sidebar:"docs",previous:{title:"Web Sockets",permalink:"/docs/advanced/web-sockets"},next:{title:"Custom HTTP API Endpoints",permalink:"/docs/advanced/apis"}},c={},p=[{value:"Server configuration object",id:"server-configuration-object",level:2},{value:"Client configuration object",id:"client-configuration-object",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Whenever you start a Wasp app, you are starting two processes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"The client process")," - A React app that implements your app's frontend."),(0,a.kt)("p",{parentName:"li"}," During development, this is a dev server with hot reloading. In production,\nit's a simple process that serves pre-built static files with environment variables\nembedded during the build (details depend on ",(0,a.kt)("a",{parentName:"p",href:"/docs/advanced/deployment/overview"},"how you deploy\nit"),").")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"The server process")," - An Express server that implements your app's backend."),(0,a.kt)("p",{parentName:"li"}," During development, this is an Express server controlled by a\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/nodemon"},(0,a.kt)("inlineCode",{parentName:"a"},"nodemon"))," process that takes care of\nhot reloading and restarts. In production, it's a regular Express server run\nusing Node."))),(0,a.kt)("p",null,"Check ",(0,a.kt)("a",{parentName:"p",href:"/docs"},"the introduction")," for a more in-depth explanation of Wasp's runtime architecture."),(0,a.kt)("p",null,"You can configure both processes through environment variables. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/advanced/deployment/manually#environment-variables"},"the\ndeployment instructions")," for a full list\nof supported variables."),(0,a.kt)("p",null,"Wasp gives you runtime access to the processes' configurations through ",(0,a.kt)("strong",{parentName:"p"},"configuration objects"),"."),(0,a.kt)("h2",{id:"server-configuration-object"},"Server configuration object"),(0,a.kt)("p",null,"The server configuration object contains these fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"frontendUrl: String")," - Set it with env var ",(0,a.kt)("inlineCode",{parentName:"p"},"WASP_WEB_CLIENT_URL"),"."),(0,a.kt)("p",{parentName:"li"},"The URL of your client (the app's frontend).",(0,a.kt)("br",null),"\nWasp automatically sets it during development when you run ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp start"),".",(0,a.kt)("br",null),"\nIn production, you should set it to your client's URL as the server sees it\n(i.e., with the DNS and proxies considered)."))),(0,a.kt)("p",null,"You can access it like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { config } from 'wasp/server'\n\nconsole.log(config.frontendUrl)\n")),(0,a.kt)("h2",{id:"client-configuration-object"},"Client configuration object"),(0,a.kt)("p",null,"The client configuration object contains these fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"apiUrl: String")," - Set it with env var ",(0,a.kt)("inlineCode",{parentName:"p"},"REACT_APP_API_URL")),(0,a.kt)("p",{parentName:"li"},"The URL of your server (the app's backend).",(0,a.kt)("br",null),"\nWasp automatically sets it during development when you run ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp start"),".",(0,a.kt)("br",null),"\nIn production, it should contain the value of your server's URL as the user's browser\nsees it (i.e., with the DNS and proxies considered)."))),(0,a.kt)("p",null,"You can access it like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { config } from 'wasp/client'\n\nconsole.log(config.apiUrl)\n")))}d.isMDXComponent=!0}}]);