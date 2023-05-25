"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:s,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),s=(n(7294),n(3905));const r={description:"Install Snaps dependencies.",sidebar_position:1},l="Install Snaps",i={unversionedId:"get-started/install-snaps",id:"get-started/install-snaps",title:"Install Snaps",description:"Install Snaps dependencies.",source:"@site/snaps/get-started/install-snaps.md",sourceDirName:"get-started",slug:"/get-started/install-snaps",permalink:"/zs/snaps-cors/snaps/get-started/install-snaps",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Install Snaps dependencies.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Get started",permalink:"/zs/snaps-cors/snaps/category/get-started"},next:{title:"Snaps quickstart",permalink:"/zs/snaps-cors/snaps/get-started/quickstart"}},o={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install MetaMask Flask",id:"install-metamask-flask",level:2},{value:"Install the Snaps CLI",id:"install-the-snaps-cli",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"install-snaps"},"Install Snaps"),(0,s.kt)("p",null,"To use Snaps, you must install ",(0,s.kt)("a",{parentName:"p",href:"#install-metamask-flask"},"MetaMask Flask")," and the ",(0,s.kt)("a",{parentName:"p",href:"#install-the-snaps-cli"},"Snaps CLI"),"."),(0,s.kt)("p",null,"You can then ",(0,s.kt)("a",{parentName:"p",href:"/zs/snaps-cors/snaps/get-started/quickstart"},"get started quickly using the Snaps template"),"."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Up-to-date Chromium or Firefox browser"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," version 16 or later"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm")," or ",(0,s.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn"))),(0,s.kt)("h2",{id:"install-metamask-flask"},"Install MetaMask Flask"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://metamask.io/flask/"},"MetaMask Flask")," is a canary distribution for developers that provides\naccess to upcoming MetaMask features.\nSnaps is the first feature rolled out in the Flask environment."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/metamask-flask-developmen/ljfoeinjpaedjfecbmggjgodbgkmjkjk"},"Install Flask"),"\nin a new browser profile, or disable any existing installed versions of MetaMask before installing\nFlask."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Running multiple instances of MetaMask in the same browser profile breaks dapp interactions.")),(0,s.kt)("h2",{id:"install-the-snaps-cli"},"Install the Snaps CLI"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/zs/snaps-cors/snaps/reference/cli/"},"Snaps CLI")," provides commands for initiating a snap project and building,\nexecuting, and serving your snap for local development."),(0,s.kt)("p",null,"In a terminal window, install the CLI globally using npm or Yarn:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @metamask/snaps-cli\nor\nyarn global add @metamask/snaps-cli\n")),(0,s.kt)("p",null,"Verify the installation and display usage instructions:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap --help\n")))}u.isMDXComponent=!0}}]);