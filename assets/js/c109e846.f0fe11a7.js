"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},46300:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),i=n(50012);function a(e){let{path:t}=e;const[n]=(0,i.Nk)("docusaurus.tab.js-ts"),a=t.lastIndexOf("{"),o=t.slice(a+1,t.length-1),[p,s]=o.split(","),l=t.slice(0,a);return r.createElement("code",null,l+("js"===n?p:s))}},77085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));n(46300),n(44996);const a={title:"Developing Existing App with AI"},o=void 0,p={unversionedId:"wasp-ai/developing-existing-app",id:"version-0.13.0/wasp-ai/developing-existing-app",title:"Developing Existing App with AI",description:"While Wasp AI doesn't at the moment offer any additional help for developing your Wasp app with AI beyond initial generation, this is something we are exploring actively.",source:"@site/versioned_docs/version-0.13.0/wasp-ai/developing-existing-app.md",sourceDirName:"wasp-ai",slug:"/wasp-ai/developing-existing-app",permalink:"/docs/wasp-ai/developing-existing-app",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.13.0/wasp-ai/developing-existing-app.md",tags:[],version:"0.13.0",frontMatter:{title:"Developing Existing App with AI"},sidebar:"docs",previous:{title:"Creating New App with AI",permalink:"/docs/wasp-ai/creating-new-app"},next:{title:"Overview",permalink:"/docs/advanced/deployment/overview"}},s={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"While Wasp AI doesn't at the moment offer any additional help for developing your Wasp app with AI beyond initial generation, this is something we are exploring actively."),(0,i.kt)("p",null,"In the meantime, while waiting for Wasp AI to add support for this, we suggest checking out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paul-gauthier/aider"},"aider"),", which is an AI pair programming tool in your terminal. This is a third-party tool, not affiliated with Wasp in any way, but we and some of Wasp users have found that it can be helpful when working on Wasp apps."))}d.isMDXComponent=!0}}]);