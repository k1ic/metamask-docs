"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4151],{49822:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var t=a(74848),r=a(28453),s=a(11470),i=a(19365);const l={sidebar_position:4,sidebar_label:"Enable human-readable addresses",description:"Integrate Decentraweb into your Unity game to enable human-readable addresses.",tags:["Unity SDK"]},o="Enable human-readable addresses in Unity",u={id:"how-to/use-sdk/gaming/unity/dweb",title:"Enable human-readable addresses in Unity",description:"Integrate Decentraweb into your Unity game to enable human-readable addresses.",source:"@site/wallet/how-to/use-sdk/gaming/unity/dweb.md",sourceDirName:"how-to/use-sdk/gaming/unity",slug:"/how-to/use-sdk/gaming/unity/dweb",permalink:"/ACT-1368-siwsrp-flow/wallet/how-to/use-sdk/gaming/unity/dweb",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/dweb.md",tags:[{label:"Unity SDK",permalink:"/ACT-1368-siwsrp-flow/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Enable human-readable addresses",description:"Integrate Decentraweb into your Unity game to enable human-readable addresses.",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Contract provider",permalink:"/ACT-1368-siwsrp-flow/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider"},next:{title:"Unreal Engine (coming soon)",permalink:"/ACT-1368-siwsrp-flow/wallet/how-to/use-sdk/gaming/unreal-engine"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialize the integration wrapper",id:"initialize-the-integration-wrapper",level:2},{value:"Convert a name to an Ethereum address",id:"convert-a-name-to-an-ethereum-address",level:2},{value:"Convert an Ethereum address to a name",id:"convert-an-ethereum-address-to-a-name",level:2},{value:"Example",id:"example",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"enable-human-readable-addresses-in-unity",children:"Enable human-readable addresses in Unity"}),"\n",(0,t.jsxs)(n.p,{children:["You can integrate the ",(0,t.jsx)(n.a,{href:"https://decentraweb.org/",children:"Decentraweb"})," name resolver into your Unity game\nwith ",(0,t.jsx)(n.a,{href:"/ACT-1368-siwsrp-flow/wallet/how-to/use-sdk/gaming/unity/",children:"MetaMask SDK"})," installed.\nDecentraweb maps human-readable names to machine-readable identifiers, such as Ethereum addresses.\nIntegrating Decentraweb into your game allows users to interact with addresses in a more user-friendly way."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/ACT-1368-siwsrp-flow/wallet/how-to/use-sdk/gaming/unity/",children:"MetaMask SDK set up"})," in your Unity game."]}),"\n",(0,t.jsx)(n.h2,{id:"initialize-the-integration-wrapper",children:"Initialize the integration wrapper"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"newDWebAPIWrapper()"})," method to configure and initialize a C# integration wrapper, which\nacts as a bridge between the MetaMask Unity SDK and the Decentraweb name resolver API.\nThis method initializes the wrapper with necessary configuration parameters, including\nauthentication details required to interact with the Decentraweb name resolver API."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"// Initialize the wrapper.\nvar apiWrapper = newDWebAPIWrapper();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"convert-a-name-to-an-ethereum-address",children:"Convert a name to an Ethereum address"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"ResolveNameAsync(name)"})," method to convert a human-readable name to the corresponding\nEthereum address."]}),"\n",(0,t.jsx)(n.p,{children:"The C# integration wrapper translates the request into a format that the Decentraweb name resolver\nAPI can understand, and sends the translated request to the name resolver using a standard HTTP POST request."}),"\n",(0,t.jsx)(n.p,{children:"The name resolver processes the request and responds with the Ethereum address."}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"Method",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'// Initialize the wrapper.\nvar apiWrapper = newDWebAPIWrapper();\n\n// Get the user\'s human-readable name.\nvar name = "user.dweb";\n\n// Resolve the name to an Ethereum address.\nvar address = await apiWrapper.ResolveNameAsync(name);\n'})})}),(0,t.jsx)(i.A,{value:"JSON response",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "success": true,\n  "result": "0xcB3E45F337Dd3Beeba98F5F9F9A16e9cD152cC86"\n}\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"convert-an-ethereum-address-to-a-name",children:"Convert an Ethereum address to a name"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"GetNameAsync(address)"})," method to convert an Ethereum address to the corresponding\nhuman-readable name."]}),"\n",(0,t.jsx)(n.p,{children:"The C# integration wrapper translates the request into a format the Unity SDK can understand, and\nsends the translated request to the SDK."}),"\n",(0,t.jsx)(n.p,{children:"The SDK processes the request and responds with the human-readable name."}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"Method",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'// Initialize the wrapper.\nvar apiWrapper = newDWebAPIWrapper();\n\n// Get the user\'s address.\nvar address = "0xcB3E45F337Dd3Beeba98F5F9F9A16e9cD152cC86"\n\n// Resolve the address to a human-readable name.\nvar name = await apiWrapper.GetNameAsync(address)\n'})})}),(0,t.jsx)(i.A,{value:"JSON response",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "success": true,\n  "result": {\n    "name": "lordsats",\n    "confirmed": true\n  }\n}\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"The following is an example of using the Unity SDK Decentraweb integration to create a transaction:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'public async Task FormTransactionAsync()\n{\n  // Initialize the wrapper.\n  var apiWrapper = new DWebAPIWrapper();\n\n  // Get the user\'s human-readable name.\n  var name = "user.dweb";\n\n  // Resolve the name to an Ethereum address.\n  var address = await apiWrapper.ResolveNameAsync(name);\n\n  // Form the transaction.\n  var transaction = new Transaction\n  {\n    To = address,\n    Value = 1.0m,\n    Gas = 21000\n  };\n\n  // The rest of the transaction formation code.\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var t=a(18215);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>j});var t=a(96540),r=a(18215),s=a(23104),i=a(56347),l=a(205),o=a(57485),u=a(31682),d=a(89466);function c(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function b(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[u,c]=p({queryString:a,groupId:r}),[b,w]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),g=(()=>{const e=u??b;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),w(e)}),[c,w,s]),tabValues:s}}var w=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function f(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),d=e=>{const n=e.currentTarget,a=o.indexOf(n),r=l[a].value;r!==t&&(u(n),i(r))},c=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:c,onClick:d,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function x(e){let{lazy:n,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(f,{...n,...e}),(0,v.jsx)(x,{...n,...e})]})}function j(e){const n=(0,w.A)();return(0,v.jsx)(y,{...e,children:c(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var t=a(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);