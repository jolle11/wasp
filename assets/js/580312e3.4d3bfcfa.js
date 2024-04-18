"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),i=n(86010),o=n(12466),l=n(16550),s=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=s??c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var f=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==l&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(b,(0,a.Z)({key:String(t)},e))}},46300:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(50012);function i(e){let{path:t}=e;const[n]=(0,r.Nk)("docusaurus.tab.js-ts"),i=t.lastIndexOf("{"),o=t.slice(i+1,t.length-1),[l,s]=o.split(","),u=t.slice(0,i);return a.createElement("code",null,u+("js"===n?l:s))}},91391:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));n(46300);const i={toc:[]},o="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When a user ",(0,r.kt)("strong",{parentName:"p"},"signs in for the first time"),", Wasp creates a new user account and links it to the chosen auth provider account for future logins."))}l.isMDXComponent=!0},84740:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));n(46300);const i={toc:[]},o="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Wasp automatically generates the ",(0,r.kt)("inlineCode",{parentName:"p"},"defineUserSignupFields")," function to help you correctly type your ",(0,r.kt)("inlineCode",{parentName:"p"},"userSignupFields")," object."))}l.isMDXComponent=!0},58778:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));n(46300);const i={toc:[]},o="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, Wasp doesn't store any information it receives from the social login provider. It only stores the user's ID specific to the provider."),(0,r.kt)("p",null,"There are two mechanisms used for overriding the default behavior:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userSignupFields")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"configFn"))),(0,r.kt)("p",null,"Let's explore them in more detail."))}l.isMDXComponent=!0},52964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>b,frontMatter:()=>m,metadata:()=>g,toc:()=>v});var a=n(87462),r=n(67294),i=n(3905),o=(n(46300),n(85162)),l=n(74866),s=n(39960);function u(e){let{pagePart:t=""}=e;const n=[{title:"Google",description:"Users sign in with their Google account.",linkToDocs:"/docs/auth/social-auth/google"+t},{title:"Github",description:"Users sign in with their Github account.",linkToDocs:"/docs/auth/social-auth/github"+t}];return r.createElement(r.Fragment,null,r.createElement("div",{className:"social-auth-grid"},n.map((e=>r.createElement(p,{title:e.title,description:e.description,linkToDocs:e.linkToDocs})))),r.createElement("p",{className:"social-auth-info"},r.createElement("small",null,"Click on each provider for more details.")))}function p(e){let{linkToDocs:t,title:n,description:a}=e;return r.createElement(s.Z,{to:t,className:"auth-method-box"},r.createElement("h3",null,n," \xbb"),r.createElement("p",null,a))}var c=n(91391),d=(n(58778),n(84740));const m={title:"Overview"},h=void 0,g={unversionedId:"auth/social-auth/overview",id:"version-0.12.0/auth/social-auth/overview",title:"Overview",description:"Social login options (e.g., Log in with Google) are a great (maybe even the best) solution for handling user accounts.",source:"@site/versioned_docs/version-0.12.0/auth/social-auth/overview.md",sourceDirName:"auth/social-auth",slug:"/auth/social-auth/overview",permalink:"/docs/0.12.0/auth/social-auth/overview",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.12.0/auth/social-auth/overview.md",tags:[],version:"0.12.0",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"Email",permalink:"/docs/0.12.0/auth/email"},next:{title:"GitHub",permalink:"/docs/0.12.0/auth/social-auth/github"}},f={},v=[{value:"Available Providers",id:"available-providers",level:2},{value:"User Entity",id:"user-entity",level:2},{value:"Default Behavior",id:"default-behavior",level:2},{value:"Overrides",id:"overrides",level:2},{value:"Example: Allowing User to Set Their Username",id:"example-allowing-user-to-set-their-username",level:3},{value:"1. Adding the <code>isSignupComplete</code> Field to the <code>User</code> Entity",id:"1-adding-the-issignupcomplete-field-to-the-user-entity",level:4},{value:"2. Overriding the Default Behavior",id:"2-overriding-the-default-behavior",level:4},{value:"3. Showing the Correct State on the Client",id:"3-showing-the-correct-state-on-the-client",level:4},{value:"Using the User&#39;s Provider Account Details",id:"using-the-users-provider-account-details",level:3},{value:"UI Helpers",id:"ui-helpers",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Fields in the <code>app.auth</code> Dictionary and Overrides",id:"fields-in-the-appauth-dictionary-and-overrides",level:3}],k={toc:v},y="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Social login options (e.g., ",(0,i.kt)("em",{parentName:"p"},"Log in with Google"),") are a great (maybe even the best) solution for handling user accounts.\nA famous old developer joke tells us ",(0,i.kt)("em",{parentName:"p"},'"The best auth system is the one you never have to make."')),(0,i.kt)("p",null,"Wasp wants to make adding social login options to your app as painless as possible."),(0,i.kt)("p",null,"Using different social providers gives users a chance to sign into your app via their existing accounts on other platforms (Google, GitHub, etc.)."),(0,i.kt)("p",null,"This page goes through the common behaviors between all supported social login providers and shows you how to customize them.\nIt also gives an overview of Wasp's UI helpers - the quickest possible way to get started with social auth."),(0,i.kt)("h2",{id:"available-providers"},"Available Providers"),(0,i.kt)("p",null,"Wasp currently supports the following social login providers:"),(0,i.kt)(u,{mdxType:"SocialAuthGrid"}),(0,i.kt)("h2",{id:"user-entity"},"User Entity"),(0,i.kt)("p",null,"Wasp requires you to declare a ",(0,i.kt)("inlineCode",{parentName:"p"},"userEntity")," for all ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," methods (social or otherwise).\nThis field tells Wasp which Entity represents the user."),(0,i.kt)("p",null,"Here's what the full setup looks like:"),(0,i.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app myApp {\n  wasp: {\n    version: "^0.11.0"\n  },\n  title: "My App",\n  auth: {\n    // highlight-next-line\n    userEntity: User,\n    methods: {\n      google: {}\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n\n// highlight-next-line\nentity User {=psl\n    id                        Int           @id @default(autoincrement())\n    //...\npsl=}\n'))),(0,i.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app myApp {\n  wasp: {\n    version: "^0.11.0"\n  },\n  title: "My App",\n  auth: {\n    // highlight-next-line\n    userEntity: User,\n    methods: {\n      google: {}\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n\n// highlight-next-line\nentity User {=psl\n    id                        Int           @id @default(autoincrement())\n    //...\npsl=}\n')))),(0,i.kt)("small",null,(0,i.kt)("p",null,"To learn more about what the fields on these entities represent, look at the ",(0,i.kt)("a",{parentName:"p",href:"#api-reference"},"API Reference"),".")),(0,i.kt)("h2",{id:"default-behavior"},"Default Behavior"),(0,i.kt)(c.ZP,{mdxType:"DefaultBehaviour"}),(0,i.kt)("h2",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,"By default, Wasp doesn't store any information it receives from the social login provider. It only stores the user's ID specific to the provider."),(0,i.kt)("p",null,"If you wish to store more information about the user, you can override the default behavior. You can do this by defining the ",(0,i.kt)("inlineCode",{parentName:"p"},"userSignupFields")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"configFn")," fields in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.wasp")," for each provider."),(0,i.kt)("p",null,"You can create custom signup setups, such as allowing users to define a custom username after they sign up with a social provider."),(0,i.kt)("h3",{id:"example-allowing-user-to-set-their-username"},"Example: Allowing User to Set Their Username"),(0,i.kt)("p",null,"If you want to modify the signup flow (e.g., let users choose their own usernames), you will need to go through three steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The first step is adding a ",(0,i.kt)("inlineCode",{parentName:"li"},"isSignupComplete")," property to your ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," Entity. This field will signal whether the user has completed the signup process."),(0,i.kt)("li",{parentName:"ol"},"The second step is overriding the default signup behavior."),(0,i.kt)("li",{parentName:"ol"},"The third step is implementing the rest of your signup flow and redirecting users where appropriate.")),(0,i.kt)("p",null,"Let's go through both steps in more detail."),(0,i.kt)("h4",{id:"1-adding-the-issignupcomplete-field-to-the-user-entity"},"1. Adding the ",(0,i.kt)("inlineCode",{parentName:"h4"},"isSignupComplete")," Field to the ",(0,i.kt)("inlineCode",{parentName:"h4"},"User")," Entity"),(0,i.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},"entity User {=psl\n    id                        Int           @id @default(autoincrement())\n    username                  String?       @unique\n    // highlight-next-line\n    isSignupComplete          Boolean       @default(false)\npsl=}\n"))),(0,i.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},"entity User {=psl\n    id                        Int           @id @default(autoincrement())\n    username                  String?       @unique\n    // highlight-next-line\n    isSignupComplete          Boolean       @default(false)\npsl=}\n")))),(0,i.kt)("h4",{id:"2-overriding-the-default-behavior"},"2. Overriding the Default Behavior"),(0,i.kt)("p",null,"Declare an import under ",(0,i.kt)("inlineCode",{parentName:"p"},"app.auth.methods.google.userSignupFields")," (the example assumes you're using Google):"),(0,i.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app myApp {\n  wasp: {\n    version: "^0.11.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    methods: {\n      google: {\n        // highlight-next-line\n        userSignupFields: import { userSignupFields } from "@src/auth/google.js"\n      }\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n\n// ...\n')),(0,i.kt)("p",null,"And implement the imported function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/auth/google.js",title:"src/auth/google.js"},"export const userSignupFields = {\n  isSignupComplete: () => false,\n}\n"))),(0,i.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app myApp {\n  wasp: {\n    version: "^0.11.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    methods: {\n      google: {\n        // highlight-next-line\n        userSignupFields: import { userSignupFields } from "@src/auth/google.js"\n      }\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n\n// ...\n')),(0,i.kt)("p",null,"And implement the imported function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/auth/google.ts",title:"src/auth/google.ts"},"import { defineUserSignupFields } from 'wasp/server/auth'\n\nexport const userSignupFields = defineUserSignupFields({\n  isSignupComplete: () => false,\n})\n")),(0,i.kt)(d.ZP,{mdxType:"GetUserFieldsType"}))),(0,i.kt)("h4",{id:"3-showing-the-correct-state-on-the-client"},"3. Showing the Correct State on the Client"),(0,i.kt)("p",null,"You can query the user's ",(0,i.kt)("inlineCode",{parentName:"p"},"isSignupComplete")," flag on the client with the ",(0,i.kt)("a",{parentName:"p",href:"../../auth/overview"},(0,i.kt)("inlineCode",{parentName:"a"},"useAuth()"))," hook.\nDepending on the flag's value, you can redirect users to the appropriate signup step."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When the user lands on the homepage, check the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"user.isSignupComplete"),"."),(0,i.kt)("li",{parentName:"ol"},"If it's ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", it means the user has started the signup process but hasn't yet chosen their username. Therefore, you can redirect them to ",(0,i.kt)("inlineCode",{parentName:"li"},"EditUserDetailsPage")," where they can edit the ",(0,i.kt)("inlineCode",{parentName:"li"},"username")," property.")),(0,i.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=src/HomePage.jsx",title:"src/HomePage.jsx"},"import { useAuth } from 'wasp/client/auth'\nimport { Redirect } from 'react-router-dom'\n\nexport function HomePage() {\n  const { data: user } = useAuth()\n\n  if (user.isSignupComplete === false) {\n    return <Redirect to=\"/edit-user-details\" />\n  }\n\n  // ...\n}\n"))),(0,i.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/HomePage.tsx",title:"src/HomePage.tsx"},"import { useAuth } from 'wasp/client/auth'\nimport { Redirect } from 'react-router-dom'\n\nexport function HomePage() {\n  const { data: user } = useAuth()\n\n  if (user.isSignupComplete === false) {\n    return <Redirect to=\"/edit-user-details\" />\n  }\n\n  // ...\n}\n")),(0,i.kt)("p",null,"The same general principle applies to more complex signup procedures, just change the boolean ",(0,i.kt)("inlineCode",{parentName:"p"},"isSignupComplete")," property to a property like ",(0,i.kt)("inlineCode",{parentName:"p"},"currentSignupStep")," that can hold more values."))),(0,i.kt)("h3",{id:"using-the-users-provider-account-details"},"Using the User's Provider Account Details"),(0,i.kt)("p",null,"Account details are provider-specific.\nEach provider has their own rules for defining the ",(0,i.kt)("inlineCode",{parentName:"p"},"userSignupFields")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"configFn")," fields:"),(0,i.kt)(u,{pagePart:"#overrides",mdxType:"SocialAuthGrid"}),(0,i.kt)("h2",{id:"ui-helpers"},"UI Helpers"),(0,i.kt)("admonition",{title:"Use Auth UI",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"../../auth/ui"},"Auth UI")," is a common name for all high-level auth forms that come with Wasp."),(0,i.kt)("p",{parentName:"admonition"},"These include fully functional auto-generated login and signup forms with working social login buttons.\nIf you're looking for the fastest way to get your auth up and running, that's where you should look."),(0,i.kt)("p",{parentName:"admonition"},"The UI helpers described below are lower-level and are useful for creating your custom forms.")),(0,i.kt)("p",null,"Wasp provides sign-in buttons and URLs for each of the supported social login providers."),(0,i.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=src/LoginPage.jsx",title:"src/LoginPage.jsx"},"import {\n  GoogleSignInButton,\n  googleSignInUrl,\n  GitHubSignInButton,\n  gitHubSignInUrl,\n} from 'wasp/client/auth'\n\nexport const LoginPage = () => {\n  return (\n    <>\n      <GoogleSignInButton />\n      <GitHubSignInButton />\n      {/* or */}\n      <a href={googleSignInUrl}>Sign in with Google</a>\n      <a href={gitHubSignInUrl}>Sign in with GitHub</a>\n    </>\n  )\n}\n"))),(0,i.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/LoginPage.tsx",title:"src/LoginPage.tsx"},"import {\n  GoogleSignInButton,\n  googleSignInUrl,\n  GitHubSignInButton,\n  gitHubSignInUrl,\n} from 'wasp/client/auth'\n\nexport const LoginPage = () => {\n  return (\n    <>\n      <GoogleSignInButton />\n      <GitHubSignInButton />\n      {/* or */}\n      <a href={googleSignInUrl}>Sign in with Google</a>\n      <a href={gitHubSignInUrl}>Sign in with GitHub</a>\n    </>\n  )\n}\n")))),(0,i.kt)("p",null,"If you need even more customization, you can create your custom components using ",(0,i.kt)("inlineCode",{parentName:"p"},"signInUrl"),"s."),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"fields-in-the-appauth-dictionary-and-overrides"},"Fields in the ",(0,i.kt)("inlineCode",{parentName:"h3"},"app.auth")," Dictionary and Overrides"),(0,i.kt)("p",null,"For more information on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allowed fields in ",(0,i.kt)("inlineCode",{parentName:"li"},"app.auth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userSignupFields")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"configFn")," functions")),(0,i.kt)("p",null,"Check the provider-specific API References:"),(0,i.kt)(u,{pagePart:"#api-reference",mdxType:"SocialAuthGrid"}))}b.isMDXComponent=!0}}]);