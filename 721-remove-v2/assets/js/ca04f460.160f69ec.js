"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[2449],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(h,s(s({ref:t},c),{},{components:r})):a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"React"},s="Use MetaMask SDK with React",i={unversionedId:"how-to/use-sdk/javascript/react",id:"how-to/use-sdk/javascript/react",title:"React",description:"You can import MetaMask SDK into your React dapp to enable your users to easily connect with their",source:"@site/wallet/how-to/use-sdk/javascript/react.md",sourceDirName:"how-to/use-sdk/javascript",slug:"/how-to/use-sdk/javascript/react",permalink:"/721-remove-v2/wallet/how-to/use-sdk/javascript/react",draft:!1,tags:[],version:"current",frontMatter:{title:"React"},sidebar:"walletSidebar",previous:{title:"Use MetaMask SDK with JavaScript",permalink:"/721-remove-v2/wallet/how-to/use-sdk/javascript/"},next:{title:"Pure JavaScript",permalink:"/721-remove-v2/wallet/how-to/use-sdk/javascript/pure-js"}},l={},p=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Instantiate the SDK",id:"3-instantiate-the-sdk",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-metamask-sdk-with-react"},"Use MetaMask SDK with React"),(0,n.kt)("p",null,"You can import MetaMask SDK into your React dapp to enable your users to easily connect with their\nMetaMask Mobile wallet.\nThe SDK for React ",(0,n.kt)("a",{parentName:"p",href:"/721-remove-v2/wallet/#how-it-works"},"works the same way")," and has the\n",(0,n.kt)("a",{parentName:"p",href:"/721-remove-v2/wallet/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,n.kt)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk\nor\nnpm i @metamask/sdk\n")),(0,n.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,n.kt)("p",null,"In your project script, add the following to import the SDK:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import MetaMaskSDK from '@metamask/sdk';\n")),(0,n.kt)("h3",{id:"3-instantiate-the-sdk"},"3. Instantiate the SDK"),(0,n.kt)("p",null,"Instantiate the SDK using any ",(0,n.kt)("a",{parentName:"p",href:"/721-remove-v2/wallet/reference/sdk-js-options"},"options"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const MMSDK = new MetaMaskSDK(options);\n\nconst ethereum = MMSDK.getProvider(); // You can also access via window.ethereum\n")),(0,n.kt)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,n.kt)("p",null,"Use the SDK by calling any ",(0,n.kt)("a",{parentName:"p",href:"/721-remove-v2/wallet/reference/provider-api"},"provider API methods"),".\nAlways call ",(0,n.kt)("a",{parentName:"p",href:"/721-remove-v2/wallet/reference/rpc-api#eth_requestaccounts"},(0,n.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," using\n",(0,n.kt)("a",{parentName:"p",href:"/721-remove-v2/wallet/reference/provider-api#ethereumrequestargs"},(0,n.kt)("inlineCode",{parentName:"a"},"ethereum.request()"))," first, since it\nprompts the installation or connection popup to appear."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"ethereum.request({ method: 'eth_requestAccounts', params: [] });\n")))}u.isMDXComponent=!0}}]);