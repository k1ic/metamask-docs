"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[2928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),c=a,g=h["".concat(p,".").concat(c)]||h[c]||m[c]||o;return n?i.createElement(g,r(r({ref:t},d),{},{components:n})):i.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[h]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(7462),a=(n(7294),n(3905));const o={title:"Signing methods",description:"A brief history of the signing RPC methods."},r="History of the signing methods",s={unversionedId:"concepts/signing-methods",id:"concepts/signing-methods",title:"Signing methods",description:"A brief history of the signing RPC methods.",source:"@site/wallet/concepts/signing-methods.md",sourceDirName:"concepts",slug:"/concepts/signing-methods",permalink:"/721-remove-v2/wallet/concepts/signing-methods",draft:!1,tags:[],version:"current",frontMatter:{title:"Signing methods",description:"A brief history of the signing RPC methods."},sidebar:"walletSidebar",previous:{title:"MetaMask SDK connections",permalink:"/721-remove-v2/wallet/concepts/sdk-connections"},next:{title:"Convenience libraries",permalink:"/721-remove-v2/wallet/concepts/convenience-libraries"}},p={},l=[{value:"eth_sign",id:"eth_sign",level:3},{value:"personal_sign",id:"personal_sign",level:3},{value:"eth_signTypedData",id:"eth_signtypeddata",level:3}],d={toc:l};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"history-of-the-signing-methods"},"History of the signing methods"),(0,a.kt)("p",null,"This page describes a brief history of the signing RPC methods in MetaMask.\nLearn how to ",(0,a.kt)("a",{parentName:"p",href:"/721-remove-v2/wallet/how-to/sign-data"},"use the recommended signing methods"),"."),(0,a.kt)("h3",{id:"eth_sign"},"eth_sign"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"eth_sign")," is MetaMask's original signing method.\nIt allows signing an arbitrary hash, which means it can be used to sign transactions, or any other\ndata, making it a dangerous phishing risk."),(0,a.kt)("admonition",{title:"important",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"eth_sign")," is deprecated.\nMetaMask disables this method by default and doesn't recommend using this method in production.\nHowever, some applications (usually internal administrator panels) use this method for its ease of\nuse, or because of an inability to change the associated dapp.\nIf a wallet user must interact with a dapp that still uses ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_sign")," and accepts the risks,\nthey can still re-enable it through advanced settings.")),(0,a.kt)("h3",{id:"personal_sign"},"personal_sign"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/#personal_sign"},(0,a.kt)("inlineCode",{parentName:"a"},"personal_sign"))," is\nthe next implemented signing method, which adds a prefix to the signed data so it can't impersonate\ntransactions.\nThis method also displays human-readable text when UTF-8 encoded, making it a popular choice for\nsite logins."),(0,a.kt)("p",null,"The text prefix of ",(0,a.kt)("inlineCode",{parentName:"p"},"personal_sign")," makes signatures expensive to verify on-chain.\nIf you don't need signatures to be efficiently processed on-chain, you can\n",(0,a.kt)("a",{parentName:"p",href:"/721-remove-v2/wallet/how-to/sign-data#use-personalsign"},"use this method"),"."),(0,a.kt)("h3",{id:"eth_signtypeddata"},"eth_signTypedData"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712")," introduced ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_signTypedData"),", which is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cheap to verify on chain."),(0,a.kt)("li",{parentName:"ul"},"Human-readable."),(0,a.kt)("li",{parentName:"ul"},"Protected against phishing signatures.")),(0,a.kt)("p",null,"If on-chain verifiability cost is a high priority for you, we recommend\n",(0,a.kt)("a",{parentName:"p",href:"/721-remove-v2/wallet/how-to/sign-data#use-ethsigntypeddatav4"},"using this method"),"."),(0,a.kt)("p",null,"The EIP-712 specification changed several times while retaining the same EIP, meaning that MetaMask\noriginally implemented ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_signTypedData")," as the earliest proposed version, then implemented later\nversions with hard-versioned method names:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eth_signTypedData_v1")," \u2013 The same as ",(0,a.kt)("inlineCode",{parentName:"li"},"eth_signTypedData"),".\nRead the\n",(0,a.kt)("a",{parentName:"li",href:"https://medium.com/metamask/scaling-web3-with-signtypeddata-91d6efc8b290"},"introductory blog post to this method"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eth_signTypedData_v3")," \u2013 A highly used version of the EIP-712 specification.\nRead the\n",(0,a.kt)("a",{parentName:"li",href:"https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26"},"introductory blog post to this method"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://metamask.github.io/api-playground/api-documentation/#eth_signTypedData_v4"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),"\n\u2013 The latest version of the EIP-712 specification, with added support for arrays and a breaking\nfix for the way structs are encoded.\nRead the\n",(0,a.kt)("a",{parentName:"li",href:"https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26"},"introductory blog post to this method"),".")),(0,a.kt)("admonition",{title:"important",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"All early versions of this method lack later security improvements.\nWe recommend using the latest version, ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_signTypedData_v4"),".")),(0,a.kt)("p",null,"To avoid compatibility issues between clients, we recommend using the hard-versioned method names.\nThe missing ",(0,a.kt)("inlineCode",{parentName:"p"},"v2")," represents an intermediary design that the Cipher browser implemented \u2013\nMetaMask has room to implement it if there's enough developer demand for it."))}h.isMDXComponent=!0}}]);