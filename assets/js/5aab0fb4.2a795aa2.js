"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9833],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||o;return a?n.createElement(d,s(s({ref:t},u),{},{components:a})):n.createElement(d,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),o=a(86010),s=a(12466),i=a(16550),l=a(91980),p=a(67392),u=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=c(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,p]=d({queryString:a,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=l??m;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var f=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(m(t),l(n))},g=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:c},s,{className:(0,o.Z)("tabs__item",k.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},46300:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(50012);function o(e){let{path:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts"),o=t.lastIndexOf("{"),s=t.slice(o+1,t.length-1),[i,l]=s.split(","),p=t.slice(0,o);return n.createElement("code",null,p+("js"===a?i:l))}},90756:(e,t,a)=>{a.d(t,{f3:()=>i,ge:()=>s,p5:()=>p,xQ:()=>u,xS:()=>l});var n=a(67294),r=a(39960);function o(e){let{children:t,linkToPage:a,style:o={}}=e;return n.createElement(r.Z,{to:a,style:{padding:"0.1rem 0.5rem",borderRadius:"0.375rem",color:"var(--auth-pills-color)",textDecoration:"none",display:"inline-block",...o}},t)}function s(){return n.createElement(o,{style:{backgroundColor:"var(--auth-pills-email)"},linkToPage:"/docs/auth/email"},"Email")}function i(){return n.createElement(o,{style:{backgroundColor:"var(--auth-pills-username-and-pass)"},linkToPage:"/docs/auth/username-and-pass"},"Username & Password")}function l(){return n.createElement(o,{style:{backgroundColor:"var(--auth-pills-github)"},linkToPage:"/docs/auth/social-auth/github"},"Github")}function p(){return n.createElement(o,{style:{backgroundColor:"var(--auth-pills-google)"},linkToPage:"/docs/auth/social-auth/google"},"Google")}function u(){return n.createElement(o,{style:{backgroundColor:"var(--auth-pills-keycloak)"},linkToPage:"/docs/auth/social-auth/keycloak"},"Keycloak")}},59209:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=(a(46300),a(85162)),s=a(74866),i=a(90756);const l={title:"Auth UI"},p=void 0,u={unversionedId:"auth/ui",id:"version-0.13.0/auth/ui",title:"Auth UI",description:"To make using authentication in your app as easy as possible, Wasp generates the server-side code but also the client-side UI for you. It enables you to quickly get the login, signup, password reset and email verification flows in your app.",source:"@site/versioned_docs/version-0.13.0/auth/ui.md",sourceDirName:"auth",slug:"/auth/ui",permalink:"/docs/auth/ui",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.13.0/auth/ui.md",tags:[],version:"0.13.0",frontMatter:{title:"Auth UI"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/auth/overview"},next:{title:"Username & Password",permalink:"/docs/auth/username-and-pass"}},m={},c=[{value:"Overview",id:"overview",level:2},{value:"Auth Components",id:"auth-components",level:2},{value:"Login Form",id:"login-form",level:3},{value:"Signup Form",id:"signup-form",level:3},{value:"Forgot Password Form",id:"forgot-password-form",level:3},{value:"Reset Password Form",id:"reset-password-form",level:3},{value:"Verify Email Form",id:"verify-email-form",level:3},{value:"Customization \ud83d\udc85\ud83c\udffb",id:"customization-",level:2},{value:"1. Customizing the Colors",id:"1-customizing-the-colors",level:3},{value:"2. Using Your Logo",id:"2-using-your-logo",level:3},{value:"3. Social Buttons Layout",id:"3-social-buttons-layout",level:3},{value:"Let&#39;s Put Everything Together \ud83e\ude84",id:"lets-put-everything-together-",level:3}],g={toc:c},d="wrapper";function h(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,n.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To make using authentication in your app as easy as possible, Wasp generates the server-side code but also the client-side UI for you. It enables you to quickly get the login, signup, password reset and email verification flows in your app."),(0,r.kt)("p",null,"Below we cover all of the available UI components and how to use them."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Auth UI",src:a(24218).Z,width:"1068",height:"464"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"After Wasp generates the UI components for your auth, you can use it as is, or customize it to your liking."),(0,r.kt)("p",null,"Based on the authentication providers you enabled in your ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp")," file, the Auth UI will show the corresponding UI (form and buttons). For example, if you enabled e-mail authentication:"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'{5} title="main.wasp"',"{5}":!0,title:'"main.wasp"'},"app MyApp {\n  //...\n  auth: {\n    methods: {\n      email: {},\n    },\n    // ...\n  }\n}\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'{5} title="main.wasp"',"{5}":!0,title:'"main.wasp"'},"app MyApp {\n  //...\n  auth: {\n    methods: {\n      email: {},\n    },\n    // ...\n  }\n}\n")))),(0,r.kt)("p",null,"You'll get the following UI:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Auth UI",src:a(80757).Z,width:"1068",height:"464"})),(0,r.kt)("p",null,"And then if you enable Google and Github:"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp" {6-7}',title:'"main.wasp"',"{6-7}":!0},"app MyApp {\n  //...\n  auth: {\n    methods: {\n      email: {},\n      google: {},\n      github: {},\n    },\n    // ...\n  }\n}\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp" {6-7}',title:'"main.wasp"',"{6-7}":!0},"app MyApp {\n  //...\n  auth: {\n    methods: {\n      email: {},\n      google: {},\n      github: {},\n    },\n    // ...\n  }\n}\n")))),(0,r.kt)("p",null,"The form will automatically update to look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Auth UI",src:a(38241).Z,width:"1271",height:"565"})),(0,r.kt)("p",null,"Let's go through all of the available components and how to use them."),(0,r.kt)("h2",{id:"auth-components"},"Auth Components"),(0,r.kt)("p",null,"The following components are available for you to use in your app:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#login-form"},"Login form")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#signup-form"},"Signup form")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#forgot-password-form"},"Forgot password form")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#reset-password-form"},"Reset password form")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#verify-email-form"},"Verify email form"))),(0,r.kt)("h3",{id:"login-form"},"Login Form"),(0,r.kt)("p",null,"Used with ",(0,r.kt)(i.f3,{mdxType:"UsernameAndPasswordPill"}),", ",(0,r.kt)(i.ge,{mdxType:"EmailPill"}),", ",(0,r.kt)(i.xS,{mdxType:"GithubPill"}),", ",(0,r.kt)(i.p5,{mdxType:"GooglePill"})," and ",(0,r.kt)(i.xQ,{mdxType:"KeycloakPill"})," authentication."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Login form",src:a(80757).Z,width:"1068",height:"464"})),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoginForm")," component to build your login page:"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute LoginRoute { path: "/login", to: LoginPage }\npage LoginPage {\n  component: import { LoginPage } from "@src/LoginPage.jsx"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/LoginPage.jsx"',title:'"src/LoginPage.jsx"'},"import { LoginForm } from 'wasp/client/auth'\n\n// Use it like this\nexport function LoginPage() {\n  return <LoginForm />\n}\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute LoginRoute { path: "/login", to: LoginPage }\npage LoginPage {\n  component: import { LoginPage } from "@src/LoginPage.tsx"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/LoginPage.tsx"',title:'"src/LoginPage.tsx"'},"import { LoginForm } from 'wasp/client/auth'\n\n// Use it like this\nexport function LoginPage() {\n  return <LoginForm />\n}\n")))),(0,r.kt)("p",null,"It will automatically show the correct authentication providers based on your ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp")," file."),(0,r.kt)("h3",{id:"signup-form"},"Signup Form"),(0,r.kt)("p",null,"Used with ",(0,r.kt)(i.f3,{mdxType:"UsernameAndPasswordPill"}),", ",(0,r.kt)(i.ge,{mdxType:"EmailPill"}),", ",(0,r.kt)(i.xS,{mdxType:"GithubPill"}),", ",(0,r.kt)(i.p5,{mdxType:"GooglePill"})," and ",(0,r.kt)(i.xQ,{mdxType:"KeycloakPill"})," authentication."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Signup form",src:a(49301).Z,width:"1017",height:"435"})),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"SignupForm")," component to build your signup page:"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute SignupRoute { path: "/signup", to: SignupPage }\npage SignupPage {\n  component: import { SignupPage } from "@src/SignupPage.jsx"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/SignupPage.jsx"',title:'"src/SignupPage.jsx"'},"import { SignupForm } from 'wasp/client/auth'\n\n// Use it like this\nexport function SignupPage() {\n  return <SignupForm />\n}\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute SignupRoute { path: "/signup", to: SignupPage }\npage SignupPage {\n  component: import { SignupPage } from "@src/SignupPage.tsx"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/SignupPage.tsx"',title:'"src/SignupPage.tsx"'},"import { SignupForm } from 'wasp/client/auth'\n\n// Use it like this\nexport function SignupPage() {\n  return <SignupForm />\n}\n")))),(0,r.kt)("p",null,"It will automatically show the correct authentication providers based on your ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp")," file."),(0,r.kt)("p",null,"Read more about customizing the signup process like adding additional fields or extra UI in the ",(0,r.kt)("a",{parentName:"p",href:"../auth/overview#customizing-the-signup-process"},"Auth Overview")," section."),(0,r.kt)("h3",{id:"forgot-password-form"},"Forgot Password Form"),(0,r.kt)("p",null,"Used with ",(0,r.kt)(i.ge,{mdxType:"EmailPill"})," authentication."),(0,r.kt)("p",null,"If users forget their password, they can use this form to reset it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Forgot password form",src:a(32662).Z,width:"1007",height:"430"})),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ForgotPasswordForm")," component to build your own forgot password page:"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute RequestPasswordResetRoute { path: "/request-password-reset", to: RequestPasswordResetPage }\npage RequestPasswordResetPage {\n  component: import { ForgotPasswordPage } from "@src/ForgotPasswordPage.jsx"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/ForgotPasswordPage.jsx"',title:'"src/ForgotPasswordPage.jsx"'},"import { ForgotPasswordForm } from 'wasp/client/auth'\n\n// Use it like this\nexport function ForgotPasswordPage() {\n  return <ForgotPasswordForm />\n}\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute RequestPasswordResetRoute { path: "/request-password-reset", to: RequestPasswordResetPage }\npage RequestPasswordResetPage {\n  component: import { ForgotPasswordPage } from "@src/ForgotPasswordPage.tsx"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/ForgotPasswordPage.tsx"',title:'"src/ForgotPasswordPage.tsx"'},"import { ForgotPasswordForm } from 'wasp/client/auth'\n\n// Use it like this\nexport function ForgotPasswordPage() {\n  return <ForgotPasswordForm />\n}\n")))),(0,r.kt)("h3",{id:"reset-password-form"},"Reset Password Form"),(0,r.kt)("p",null,"Used with ",(0,r.kt)(i.ge,{mdxType:"EmailPill"})," authentication."),(0,r.kt)("p",null,"After users click on the link in the email they receive after submitting the forgot password form, they will be redirected to this form where they can reset their password."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Reset password form",src:a(13556).Z,width:"1037",height:"492"})),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ResetPasswordForm")," component to build your reset password page:"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute PasswordResetRoute { path: "/password-reset", to: PasswordResetPage }\npage PasswordResetPage {\n  component: import { ResetPasswordPage } from "@src/ResetPasswordPage.jsx"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/ResetPasswordPage.jsx"',title:'"src/ResetPasswordPage.jsx"'},"import { ResetPasswordForm } from 'wasp/client/auth'\n\n// Use it like this\nexport function ResetPasswordPage() {\n  return <ResetPasswordForm />\n}\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute PasswordResetRoute { path: "/password-reset", to: PasswordResetPage }\npage PasswordResetPage {\n  component: import { ResetPasswordPage } from "@src/ResetPasswordPage.tsx"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/ResetPasswordPage.tsx"',title:'"src/ResetPasswordPage.tsx"'},"import { ResetPasswordForm } from 'wasp/client/auth'\n\n// Use it like this\nexport function ResetPasswordPage() {\n  return <ResetPasswordForm />\n}\n")))),(0,r.kt)("h3",{id:"verify-email-form"},"Verify Email Form"),(0,r.kt)("p",null,"Used with ",(0,r.kt)(i.ge,{mdxType:"EmailPill"})," authentication."),(0,r.kt)("p",null,"After users sign up, they will receive an email with a link to this form where they can verify their email."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Verify email form",src:a(72956).Z,width:"1036",height:"381"})),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"VerifyEmailForm")," component to build your email verification page:"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute EmailVerificationRoute { path: "/email-verification", to: EmailVerificationPage }\npage EmailVerificationPage {\n  component: import { VerifyEmailPage } from "@src/VerifyEmailPage.jsx"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/VerifyEmailPage.jsx"',title:'"src/VerifyEmailPage.jsx"'},"import { VerifyEmailForm } from 'wasp/client/auth'\n\n// Use it like this\nexport function VerifyEmailPage() {\n  return <VerifyEmailForm />\n}\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute EmailVerificationRoute { path: "/email-verification", to: EmailVerificationPage }\npage EmailVerificationPage {\n  component: import { VerifyEmailPage } from "@src/VerifyEmailPage.tsx"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/VerifyEmailPage.tsx"',title:'"src/VerifyEmailPage.tsx"'},"import { VerifyEmailForm } from 'wasp/client/auth'\n\n// Use it like this\nexport function VerifyEmailPage() {\n  return <VerifyEmailForm />\n}\n")))),(0,r.kt)("h2",{id:"customization-"},"Customization \ud83d\udc85\ud83c\udffb"),(0,r.kt)("p",null,"You customize all of the available forms by passing props to them."),(0,r.kt)("p",null,"Props you can pass to all of the forms:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"appearance")," - customize the form colors (via design tokens)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"logo")," - path to your logo"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"socialLayout")," - layout of the social buttons, which can be ",(0,r.kt)("inlineCode",{parentName:"li"},"vertical")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"horizontal"))),(0,r.kt)("h3",{id:"1-customizing-the-colors"},"1. Customizing the Colors"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://stitches.dev/"},"Stitches")," to style the Auth UI. You can customize the styles by overriding the default theme tokens."),(0,r.kt)("admonition",{title:"List of all available tokens",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/blob/release/waspc/data/Generator/templates/react-app/src/stitches.config.js"},"list of all available tokens")," which you can override.")),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/appearance.js"',title:'"src/appearance.js"'},"export const authAppearance = {\n  colors: {\n    brand: '#5969b8', // blue\n    brandAccent: '#de5998', // pink\n    submitButtonText: 'white',\n  },\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/LoginPage.jsx"',title:'"src/LoginPage.jsx"'},"import { LoginForm } from 'wasp/client/auth'\nimport { authAppearance } from './appearance'\n\nexport function LoginPage() {\n  return (\n    <LoginForm\n      // Pass the appearance object to the form\n      appearance={authAppearance}\n    />\n  )\n}\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/appearance.ts"',title:'"src/appearance.ts"'},"import type { CustomizationOptions } from 'wasp/client/auth'\n\nexport const authAppearance: CustomizationOptions['appearance'] = {\n  colors: {\n    brand: '#5969b8', // blue\n    brandAccent: '#de5998', // pink\n    submitButtonText: 'white',\n  },\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/LoginPage.tsx"',title:'"src/LoginPage.tsx"'},"import { LoginForm } from 'wasp/client/auth'\nimport { authAppearance } from './appearance'\n\nexport function LoginPage() {\n  return (\n    <LoginForm\n      // Pass the appearance object to the form\n      appearance={authAppearance}\n    />\n  )\n}\n")))),(0,r.kt)("p",null,"We recommend defining your appearance in a separate file and importing it into your components."),(0,r.kt)("h3",{id:"2-using-your-logo"},"2. Using Your Logo"),(0,r.kt)("p",null,"You can add your logo to the Auth UI by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"logo")," prop to any of the components."),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/LoginPage.jsx"',title:'"src/LoginPage.jsx"'},"import { LoginForm } from 'wasp/client/auth'\nimport Logo from './logo.png'\n\nexport function LoginPage() {\n  return (\n    <LoginForm\n      // Pass in the path to your logo\n      logo={Logo}\n    />\n  )\n}\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/LoginPage.tsx"',title:'"src/LoginPage.tsx"'},"import { LoginForm } from 'wasp/client/auth'\nimport Logo from './logo.png'\n\nexport function LoginPage() {\n  return (\n    <LoginForm\n      // Pass in the path to your logo\n      logo={Logo}\n    />\n  )\n}\n")))),(0,r.kt)("h3",{id:"3-social-buttons-layout"},"3. Social Buttons Layout"),(0,r.kt)("p",null,"You can change the layout of the social buttons by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"socialLayout")," prop to any of the components. It can be either ",(0,r.kt)("inlineCode",{parentName:"p"},"vertical")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"horizontal")," (default)."),(0,r.kt)("p",null,"If we pass in ",(0,r.kt)("inlineCode",{parentName:"p"},"vertical"),":"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/LoginPage.jsx"',title:'"src/LoginPage.jsx"'},"import { LoginForm } from 'wasp/client/auth'\n\nexport function LoginPage() {\n  return (\n    <LoginForm\n      // Pass in the socialLayout prop\n      socialLayout=\"vertical\"\n    />\n  )\n}\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/LoginPage.tsx"',title:'"src/LoginPage.tsx"'},"import { LoginForm } from 'wasp/client/auth'\n\nexport function LoginPage() {\n  return (\n    <LoginForm\n      // Pass in the socialLayout prop\n      socialLayout=\"vertical\"\n    />\n  )\n}\n")))),(0,r.kt)("p",null,"We get this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Vertical social buttons",src:a(46401).Z,width:"1337",height:"664"})),(0,r.kt)("h3",{id:"lets-put-everything-together-"},"Let's Put Everything Together \ud83e\ude84"),(0,r.kt)("p",null,"If we provide the logo and custom colors:"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/appearance.js"',title:'"src/appearance.js"'},"export const appearance = {\n  colors: {\n    brand: '#5969b8', // blue\n    brandAccent: '#de5998', // pink\n    submitButtonText: 'white',\n  },\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/LoginPage.jsx"',title:'"src/LoginPage.jsx"'},"import { LoginForm } from 'wasp/client/auth'\n\nimport { authAppearance } from './appearance'\nimport todoLogo from './todoLogo.png'\n\nexport function LoginPage() {\n  return <LoginForm appearance={appearance} logo={todoLogo} />\n}\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/appearance.ts"',title:'"src/appearance.ts"'},"import type { CustomizationOptions } from 'wasp/client/auth'\n\nexport const appearance: CustomizationOptions['appearance'] = {\n  colors: {\n    brand: '#5969b8', // blue\n    brandAccent: '#de5998', // pink\n    submitButtonText: 'white',\n  },\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/LoginPage.tsx"',title:'"src/LoginPage.tsx"'},"import { LoginForm } from 'wasp/client/auth'\n\nimport { authAppearance } from './appearance'\nimport todoLogo from './todoLogo.png'\n\nexport function LoginPage() {\n  return <LoginForm appearance={appearance} logo={todoLogo} />\n}\n")))),(0,r.kt)("p",null,"We get a form looking like this:"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"/img/authui/custom_login.gif",alt:"Custom login form"})))}h.isMDXComponent=!0},24218:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/all_screens-4474bfaf188590d975e11d5b4e04b0ae.gif"},72956:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/email_verification-b1919c242edc678175636485f6fc2264.png"},32662:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/forgot_password-493aa5ed988f04edef5cf4d400d51b95.png"},80757:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/login-1dad984cebbef0e4bd2bc0c008d2d2ff.png"},38241:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/multiple_providers-68bde90e9254bf20b979986b6fd37c13.png"},13556:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/reset_password-fe01997060cbe04a86c134098b59df46.png"},49301:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/signup-4362e29083e15457eb5a16990f57819a.png"},46401:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vertical_social_buttons-98a5bea6f132202b7a94711a661267c0.png"}}]);