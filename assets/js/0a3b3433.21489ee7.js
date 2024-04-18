"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46300:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(50012);function i(e){let{path:t}=e;const[n]=(0,r.Nk)("docusaurus.tab.js-ts"),i=t.lastIndexOf("{"),o=t.slice(i+1,t.length-1),[s,l]=o.split(","),p=t.slice(0,i);return a.createElement("code",null,p+("js"===n?s:l))}},87587:(e,t,n)=>{n.d(t,{Jp:()=>i,aH:()=>o});var a=n(67294);const r=e=>{let{color:t,children:n}=e;return a.createElement("span",{style:{border:`2px solid ${t}`,display:"inline-block",padding:"0.2em 0.4em",color:t,borderRadius:"0.4em",fontSize:"0.8em",lineHeight:"1",fontWeight:"bold"}},n)};function i(){return a.createElement(r,{color:"#0b62f5"},"internal")}function o(){return a.createElement(r,{color:"#f59e0b"},"required")}},15954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=(n(46300),n(87587));const o={title:"Type-Safe Links"},s=void 0,l={unversionedId:"advanced/links",id:"version-0.12.0/advanced/links",title:"Type-Safe Links",description:"If you are using Typescript, you can use Wasp's custom Link component to create type-safe links to other pages on your site.",source:"@site/versioned_docs/version-0.12.0/advanced/links.md",sourceDirName:"advanced",slug:"/advanced/links",permalink:"/docs/0.12.0/advanced/links",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.12.0/advanced/links.md",tags:[],version:"0.12.0",frontMatter:{title:"Type-Safe Links"},sidebar:"docs",previous:{title:"Configuring Middleware",permalink:"/docs/0.12.0/advanced/middleware-config"},next:{title:"Wasp Language (.wasp)",permalink:"/docs/0.12.0/general/language"}},p={},c=[{value:"Using the <code>Link</code> Component",id:"using-the-link-component",level:2},{value:"Using Search Query &amp; Hash",id:"using-search-query--hash",level:3},{value:"The <code>routes</code> Object",id:"the-routes-object",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"<code>Link</code> Component",id:"link-component",level:3},{value:"<code>routes</code> Object",id:"routes-object",level:3}],u={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you are using Typescript, you can use Wasp's custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," component to create type-safe links to other pages on your site."),(0,r.kt)("h2",{id:"using-the-link-component"},"Using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"Link")," Component"),(0,r.kt)("p",null,"After you defined a route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'route TaskRoute { path: "/task/:id", to: TaskPage }\npage TaskPage { ... }\n')),(0,r.kt)("p",null,"You can get the benefits of type-safe links by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," component from ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp/client/router"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="TaskList.tsx"',title:'"TaskList.tsx"'},"import { Link } from 'wasp/client/router'\n\nexport const TaskList = () => {\n  // ...\n\n  return (\n    <div>\n      {tasks.map((task) => (\n        <Link\n          key={task.id}\n          to=\"/task/:id\"\n          {/* \ud83d\udc46 You must provide a valid path here */}\n          params={{ id: task.id }}>\n          {/* \ud83d\udc46 All the params must be correctly passed in */}\n          {task.description}\n        </Link>\n      ))}\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"using-search-query--hash"},"Using Search Query & Hash"),(0,r.kt)("p",null,"You can also pass ",(0,r.kt)("inlineCode",{parentName:"p"},"search")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," props to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TaskList.tsx"',title:'"TaskList.tsx"'},'<Link\n  to="/task/:id"\n  params={{ id: task.id }}\n  search={{ sortBy: \'date\' }}\n  hash="comments"\n>\n  {task.description}\n</Link>\n')),(0,r.kt)("p",null,"This will result in a link like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"/task/1?sortBy=date#comments"),". Check out the ",(0,r.kt)("a",{parentName:"p",href:"#link-component"},"API Reference")," for more details."),(0,r.kt)("h2",{id:"the-routes-object"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"routes")," Object"),(0,r.kt)("p",null,"You can also get all the pages in your app with the ",(0,r.kt)("inlineCode",{parentName:"p"},"routes")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="TaskList.tsx"',title:'"TaskList.tsx"'},"import { routes } from 'wasp/client/router'\n\nconst linkToTask = routes.TaskRoute.build({ params: { id: 1 } })\n")),(0,r.kt)("p",null,"This will result in a link like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"/task/1"),"."),(0,r.kt)("p",null,"You can also pass ",(0,r.kt)("inlineCode",{parentName:"p"},"search")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," props to the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," function. Check out the ",(0,r.kt)("a",{parentName:"p",href:"#routes-object"},"API Reference")," for more details."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"link-component"},(0,r.kt)("inlineCode",{parentName:"h3"},"Link")," Component"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," component accepts the following props:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"to")," ",(0,r.kt)(i.aH,{mdxType:"Required"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A valid Wasp Route path from your ",(0,r.kt)("inlineCode",{parentName:"li"},"main.wasp")," file."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"params: { [name: string]: string | number }")," ",(0,r.kt)(i.aH,{mdxType:"Required"})," (if the path contains params)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"An object with keys and values for each param in the path."),(0,r.kt)("li",{parentName:"ul"},"For example, if the path is ",(0,r.kt)("inlineCode",{parentName:"li"},"/task/:id"),", then the ",(0,r.kt)("inlineCode",{parentName:"li"},"params")," prop must be ",(0,r.kt)("inlineCode",{parentName:"li"},"{ id: 1 }"),". Wasp supports required and optional params."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"search: string[][] | Record<string, string> | string | URLSearchParams")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Any valid input for ",(0,r.kt)("inlineCode",{parentName:"li"},"URLSearchParams")," constructor."),(0,r.kt)("li",{parentName:"ul"},"For example, the object ",(0,r.kt)("inlineCode",{parentName:"li"},"{ sortBy: 'date' }")," becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"?sortBy=date"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"hash: string"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"all other props that the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://v5.reactrouter.com/web/api/Link"},"Link")," component accepts"))),(0,r.kt)("h3",{id:"routes-object"},(0,r.kt)("inlineCode",{parentName:"h3"},"routes")," Object"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"routes")," object contains a function for each route in your app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="router.tsx"',title:'"router.tsx"'},'export const routes = {\n  // RootRoute has a path like "/"\n  RootRoute: {\n    build: (options?: {\n      search?: string[][] | Record<string, string> | string | URLSearchParams\n      hash?: string\n    }) => // ...\n  },\n\n  // DetailRoute has a path like "/task/:id/:something?"\n  DetailRoute: {\n    build: (\n      options: {\n        params: { id: ParamValue; something?: ParamValue; },\n        search?: string[][] | Record<string, string> | string | URLSearchParams\n        hash?: string\n      }\n    ) => // ...\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," object is required if the route contains params. The ",(0,r.kt)("inlineCode",{parentName:"p"},"search")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," parameters are optional."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"routes")," object like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { routes } from 'wasp/client/router'\n\nconst linkToRoot = routes.RootRoute.build()\nconst linkToTask = routes.DetailRoute.build({ params: { id: 1 } })\n")))}d.isMDXComponent=!0}}]);