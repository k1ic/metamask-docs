"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=p(n),u=r,h=l["".concat(c,".").concat(u)]||l[u]||d[u]||o;return n?a.createElement(h,s(s({ref:t},m),{},{components:n})):a.createElement(h,s({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={description:"Register a contract's method names with users.",sidebar_position:2},s="Display a contract's method names",i={unversionedId:"how-to/display/method-names",id:"how-to/display/method-names",title:"Display a contract's method names",description:"Register a contract's method names with users.",source:"@site/wallet/how-to/display/method-names.md",sourceDirName:"how-to/display",slug:"/how-to/display/method-names",permalink:"/fix/account-management-snap-typo/wallet/how-to/display/method-names",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/display/method-names.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Register a contract's method names with users.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Display tokens",permalink:"/fix/account-management-snap-typo/wallet/how-to/display/tokens"},next:{title:"Display a dapp icon",permalink:"/fix/account-management-snap-typo/wallet/how-to/display/icon"}},c={},p=[],m={toc:p},l="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"display-a-contracts-method-names"},"Display a contract's method names"),(0,r.kt)("p",null,"MetaMask uses the ",(0,r.kt)("a",{parentName:"p",href:"https://www.4byte.directory/"},"Ethereum Signature Database")," to display\nmethod names on the confirmation screen.\nFor many common method names, such as token methods, this allows MetaMask to look up the method\nnames by their ",(0,r.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/v0.4.21/abi-spec.html"},"method signature"),".\nHowever, sometimes you're using a method that isn't in that database, and MetaMask simply\ndisplays ",(0,r.kt)("strong",{parentName:"p"},"Contract Interaction")," to the user."),(0,r.kt)("p",null,"To register your contract's method names so they show in the MetaMask interface,\n",(0,r.kt)("a",{parentName:"p",href:"https://www.4byte.directory/submit/"},"submit each method's signature to the Ethereum Signature Database"),"."))}d.isMDXComponent=!0}}]);