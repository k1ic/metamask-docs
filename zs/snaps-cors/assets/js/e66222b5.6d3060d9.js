"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9463],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=m(r),h=a,d=l["".concat(c,".").concat(h)]||l[h]||u[h]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var m=2;m<o;m++)s[m]=r[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5225:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const o={description:"Register a contract's method names on the Ethereum Signature Database.",sidebar_position:7},s="Register a contract's method names",i={unversionedId:"how-to/register-method-names",id:"how-to/register-method-names",title:"Register a contract's method names",description:"Register a contract's method names on the Ethereum Signature Database.",source:"@site/wallet/how-to/register-method-names.md",sourceDirName:"how-to",slug:"/how-to/register-method-names",permalink:"/zs/snaps-cors/wallet/how-to/register-method-names",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Register a contract's method names on the Ethereum Signature Database.",sidebar_position:7},sidebar:"walletSidebar",previous:{title:"Register a token with users",permalink:"/zs/snaps-cors/wallet/how-to/register-token"},next:{title:"Access a user's MetaMask provider",permalink:"/zs/snaps-cors/wallet/how-to/access-provider"}},c={},m=[],p={toc:m};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"register-a-contracts-method-names"},"Register a contract's method names"),(0,a.kt)("p",null,"MetaMask uses the ",(0,a.kt)("a",{parentName:"p",href:"https://www.4byte.directory/"},"Ethereum Signature Database")," to display\nmethod names on the confirmation screen.\nFor many common method names, such as token methods, this allows MetaMask to look up the method\nnames by their ",(0,a.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/v0.4.21/abi-spec.html"},"method signature"),".\nHowever, sometimes you're using a method that isn't in that database, and MetaMask simply\ndisplays ",(0,a.kt)("strong",{parentName:"p"},"Contract Interaction")," to the user."),(0,a.kt)("p",null,"To register your contract's method names so they show in the MetaMask interface,\n",(0,a.kt)("a",{parentName:"p",href:"https://www.4byte.directory/submit/"},"submit each method's signature to the Ethereum Signature Database"),"."))}l.isMDXComponent=!0}}]);