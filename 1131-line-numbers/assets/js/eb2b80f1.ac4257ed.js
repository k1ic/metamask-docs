"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1624],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},32745:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:2,description:"Learn about the MetaMask Ethereum provider API."},o="About the Wallet API",s={unversionedId:"concepts/wallet-api",id:"concepts/wallet-api",title:"About the Wallet API",description:"Learn about the MetaMask Ethereum provider API.",source:"@site/wallet/concepts/wallet-api.md",sourceDirName:"concepts",slug:"/concepts/wallet-api",permalink:"/1131-line-numbers/wallet/concepts/wallet-api",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/wallet-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn about the MetaMask Ethereum provider API."},sidebar:"walletSidebar",previous:{title:"Architecture",permalink:"/1131-line-numbers/wallet/concepts/architecture"},next:{title:"About MetaMask SDK",permalink:"/1131-line-numbers/wallet/concepts/sdk/"}},p={},l=[{value:"Ethereum provider API",id:"ethereum-provider-api",level:2},{value:"JSON-RPC API",id:"json-rpc-api",level:2},{value:"Restricted methods",id:"restricted-methods",level:3},{value:"Unrestricted methods",id:"unrestricted-methods",level:3}],c={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-the-wallet-api"},"About the Wallet API"),(0,a.kt)("p",null,"MetaMask's Wallet API consists of an ",(0,a.kt)("a",{parentName:"p",href:"#ethereum-provider-api"},"Ethereum provider API"),", which wraps\na ",(0,a.kt)("a",{parentName:"p",href:"#json-rpc-api"},"JSON-RPC API"),"."),(0,a.kt)("admonition",{title:"API documentation",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The API methods are documented in the following references:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/1131-line-numbers/wallet/reference/provider-api"},"Ethereum provider API reference")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API reference")))),(0,a.kt)("h2",{id:"ethereum-provider-api"},"Ethereum provider API"),(0,a.kt)("p",null,"MetaMask injects a global JavaScript API into websites visited by its users using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum")," provider object.\nThis API is specified by ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),", and it allows dapps to\nrequest users' Ethereum accounts, read data from blockchains the user is connected to, suggest\nthat the user sign messages and transactions, and more."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"MetaMask supports ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which introduces an\nalternative discovery mechanism to the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum")," injected provider.\nThis alternative mechanism enables dapps to support ",(0,a.kt)("a",{parentName:"p",href:"/1131-line-numbers/wallet/concepts/wallet-interoperabilty"},"wallet interoperability"),"\nby discovering multiple injected wallet providers in a user's browser.\nWe recommend using this mechanism for provider discovery.")),(0,a.kt)("p",null,"The MetaMask Ethereum provider API contains the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/1131-line-numbers/wallet/reference/provider-api#properties"},"Properties")," - The provider contains a property that\ndetects if a user has MetaMask installed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/1131-line-numbers/wallet/reference/provider-api#methods"},"Methods")," - The provider contains methods that dapps can call.\nThe ",(0,a.kt)("a",{parentName:"li",href:"/1131-line-numbers/wallet/reference/provider-api#windowethereumrequestargs"},(0,a.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)")),"\nprovider method wraps the ",(0,a.kt)("a",{parentName:"li",href:"#json-rpc-api"},"JSON-RPC API"),"; dapps can use this\nprovider method to call any RPC method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/1131-line-numbers/wallet/reference/provider-api#events"},"Events")," - The provider emits events that dapps can listen to.")),(0,a.kt)("p",null,"View the ",(0,a.kt)("a",{parentName:"p",href:"/1131-line-numbers/wallet/reference/provider-api"},"provider API reference")," for all the provider properties,\nmethods, and events."),(0,a.kt)("h2",{id:"json-rpc-api"},"JSON-RPC API"),(0,a.kt)("p",null,"MetaMask uses the ",(0,a.kt)("a",{parentName:"p",href:"/1131-line-numbers/wallet/reference/provider-api#windowethereumrequestargs"},(0,a.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)")),"\nmethod of the ",(0,a.kt)("a",{parentName:"p",href:"#ethereum-provider-api"},"provider API")," to wrap a JSON-RPC API.\nThe JSON-RPC API contains standard Ethereum JSON-RPC API methods and MetaMask-specific methods."),(0,a.kt)("p",null,"The RPC methods are documented in the interactive ",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API reference"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"All RPC method requests can return errors.\nMake sure to handle errors for every call to\n",(0,a.kt)("a",{parentName:"p",href:"/1131-line-numbers/wallet/reference/provider-api#windowethereumrequestargs"},(0,a.kt)("inlineCode",{parentName:"a"},"window.ethereum.request(args)")),".")),(0,a.kt)("h3",{id:"restricted-methods"},"Restricted methods"),(0,a.kt)("p",null,"MetaMask introduced wallet permissions in ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255"),".\nIn this permissions system, each RPC method is restricted or unrestricted.\nIf a method is restricted, a dapp must request permission to call it using\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_requestpermissions"},(0,a.kt)("inlineCode",{parentName:"a"},"wallet_requestPermissions")),".\nUnder the hood, permissions are plain, JSON-compatible objects, with fields that are mostly used\ninternally by MetaMask."),(0,a.kt)("p",null,"Outside of ",(0,a.kt)("a",{parentName:"p",href:"/snaps/reference/rpc-api/#restricted-methods"},"Snaps restricted methods"),", the only\nrestricted method is ",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_accounts")),", which allows you to access\nthe user's Ethereum accounts.\nMore restricted methods will be added in the future."),(0,a.kt)("h3",{id:"unrestricted-methods"},"Unrestricted methods"),(0,a.kt)("p",null,"Unrestricted methods do not require requesting permission to call them, but they might still rely on\npermissions to succeed (for example, the signing methods require calling the restricted\n",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/eth_accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_accounts"))," method), or they might require confirmation by the\nuser (for example, ",(0,a.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_addethereumchain"},(0,a.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),")."))}m.isMDXComponent=!0}}]);