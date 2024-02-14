"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6487],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),g=a,k=m["".concat(o,".").concat(g)]||m[g]||c[g]||i;return t?r.createElement(k,d(d({ref:n},l),{},{components:t})):r.createElement(k,d({ref:n},l))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,d=new Array(i);d[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:a,d[1]=s;for(var p=2;p<i;p++)d[p]=t[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},42021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={},d="Type alias: Sender",s={unversionedId:"reference/keyring-api/type-aliases/Sender",id:"reference/keyring-api/type-aliases/Sender",title:"Type alias: Sender",description:"Type declaration",source:"@site/snaps/reference/keyring-api/type-aliases/Sender.md",sourceDirName:"reference/keyring-api/type-aliases",slug:"/reference/keyring-api/type-aliases/Sender",permalink:"/1131-line-numbers/snaps/reference/keyring-api/type-aliases/Sender",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/type-aliases/Sender.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Type alias: KeyringRequest",permalink:"/1131-line-numbers/snaps/reference/keyring-api/type-aliases/KeyringRequest"},next:{title:"Type alias: SubmitRequestResponse",permalink:"/1131-line-numbers/snaps/reference/keyring-api/type-aliases/SubmitRequestResponse"}},o={},p=[{value:"Type declaration",id:"type-declaration",level:2},{value:"send()",id:"send",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Source",id:"source",level:2}],l={toc:p},m="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"type-alias-sender"},"Type alias: Sender"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type Sender: {\n  send: Promise<\n     | null\n     | string[]\n     | {\n     address: string;\n     id: string;\n     name: string;\n     options: null | Record<string, Json>;\n     supportedMethods: (\n        | "personal_sign"\n        | "eth_sendTransaction"\n        | "eth_sign"\n        | "eth_signTransaction"\n        | "eth_signTypedData"\n        | "eth_signTypedData_v1"\n        | "eth_signTypedData_v2"\n        | "eth_signTypedData_v3"\n        | "eth_signTypedData_v4")[];\n     type: "eip155:eoa" | "eip155:erc4337";\n     }\n     | {\n     account: string;\n     request: { id: string; jsonrpc: "2.0"; method: string; } | { id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json> | Json[]; };\n     scope: string;\n     }\n     | {\n     pending: true;\n     }\n     | {\n     pending: false;\n     result: Json;\n     }\n     | {\n     address: string;\n     id: string;\n     name: string;\n     options: null | Record<string, Json>;\n     supportedMethods: (\n        | "personal_sign"\n        | "eth_sendTransaction"\n        | "eth_sign"\n        | "eth_signTransaction"\n        | "eth_signTypedData"\n        | "eth_signTypedData_v1"\n        | "eth_signTypedData_v2"\n        | "eth_signTypedData_v3"\n        | "eth_signTypedData_v4")[];\n     type: "eip155:eoa" | "eip155:erc4337";\n     }[]\n     | {\n     account: string;\n     request: { id: string; jsonrpc: "2.0"; method: string; } | { id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json> | Json[]; };\n     scope: string;\n  }[]>;\n};\n')),(0,a.kt)("h2",{id:"type-declaration"},"Type declaration"),(0,a.kt)("h3",{id:"send"},"send()"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"request")),(0,a.kt)("td",{parentName:"tr",align:"left"},"|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_listAccounts"'),";   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_getAccount"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; };   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_createAccount"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," name: string; options: Record<string, Json",">"," ","|"," null; };   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_filterAccountChains"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; chains: string[]; };   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_updateAccount"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," account: ","{"," id: string; name: string; address: string; options: Record<string, Json",">"," ","|",' null; supportedMethods: ("personal',"_",'sign" ',"|",' "eth',"_",'sendTransaction" ',"|",' "eth',"_",'sign" ',"|",' "eth',"_",'signTransaction" ',"|",' "eth',"_",'signTypedData" ',"|",' "eth',"_","signTypedData","_",'v1" ',"|",' "eth',"_","signTypedData","_",'v2" ',"|",' "eth',"_","signTypedData","_",'v3" ',"|",' "eth',"_","signTypedData","_",'v4")[]; type: "eip155:eoa" ',"|",' "eip155:erc4337"; }; };   }   ',"|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_deleteAccount"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; };   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_listRequests"'),";   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_getRequest"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; };   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_submitRequest"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," account: string; scope: string; request: ","{",' id: string; jsonrpc: "2.0"; method: string; } ',"|"," ","{",' id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json',">"," ","|"," Json[]; }; };   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_approveRequest"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; };   }   ","|"," ","{","   ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_rejectRequest"'),";   ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ","{"," id: string; };   }")))),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-client.ts#L28"},"external/keyring-api/src/keyring-client.ts:28")))}c.isMDXComponent=!0}}]);