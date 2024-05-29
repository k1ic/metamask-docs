"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2416],{41996:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(74848),s=t(28453);const r={sidebar_position:2,description:"Learn about the Android SDK architecture.",tags:["Android SDK"]},o="Android SDK architecture",a={id:"concepts/sdk/android",title:"Android SDK architecture",description:"Learn about the Android SDK architecture.",source:"@site/wallet/concepts/sdk/android.md",sourceDirName:"concepts/sdk",slug:"/concepts/sdk/android",permalink:"/ACT-1368-siwsrp-flow/wallet/concepts/sdk/android",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/sdk/android.md",tags:[{label:"Android SDK",permalink:"/ACT-1368-siwsrp-flow/wallet/tags/android-sdk"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn about the Android SDK architecture.",tags:["Android SDK"]},sidebar:"walletSidebar",previous:{title:"SDK connections",permalink:"/ACT-1368-siwsrp-flow/wallet/concepts/sdk/connections"},next:{title:"Convenience libraries",permalink:"/ACT-1368-siwsrp-flow/wallet/concepts/convenience-libraries"}},d={},c=[{value:"Architecture",id:"architecture",level:2},{value:"Connection flow",id:"connection-flow",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"android-sdk-architecture",children:"Android SDK architecture"}),"\n",(0,i.jsxs)(n.p,{children:["The Android version of ",(0,i.jsx)(n.a,{href:"/ACT-1368-siwsrp-flow/wallet/concepts/sdk/",children:"MetaMask SDK"})," enables your users to easily connect with their\nMetaMask Mobile wallet.\nThe ",(0,i.jsx)(n.a,{href:"#architecture",children:"architecture"})," and ",(0,i.jsx)(n.a,{href:"#connection-flow",children:"connection flow"})," of\nthe Android SDK differs from the other SDK platforms."]}),"\n",(0,i.jsx)(n.admonition,{title:"Get started",type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Get started by ",(0,i.jsx)(n.a,{href:"/ACT-1368-siwsrp-flow/wallet/how-to/use-sdk/mobile/android",children:"setting up the SDK in your Android dapp"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["See the ",(0,i.jsx)(n.a,{href:"https://github.com/MetaMask/metamask-android-sdk/tree/main/app",children:"example Android dapp"})," in\nthe Android SDK GitHub repository for advanced use cases."]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(n.p,{children:"The following diagram outlines the high-level architecture of the Android SDK:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Android SDK architecture diagram",src:t(18292).A+"",width:"1512",height:"1122"})}),"\n",(0,i.jsx)(n.p,{children:"The MetaMask Android SDK consists of two components:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"The client SDK"}),", imported in the dapp"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"The server SDK"}),", an Android Native Module embedded in the MetaMask React Native wallet"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The client SDK communicates with the server SDK using\n",(0,i.jsx)(n.a,{href:"https://developer.android.com/guide/components/processes-and-threads#IPC",children:"Interprocess communication (IPC)"}),".\nThe JSON-RPC calls are implemented using the\n",(0,i.jsx)(n.a,{href:"https://developer.android.com/guide/components/aidl",children:"Android Interface Definition Language (AIDL)"}),".\nCommunication over IPC is encrypted using elliptic curve integrated encryption scheme (ECIES)."]}),"\n",(0,i.jsx)(n.p,{children:"Within MetaMask, the wallet (written in React Native) communicates with the Native Module (written\nin Kotlin) using different mechanisms depending on the direction of communication:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Native Module \u2192 React Native"})," - The Native Module broadcasts messages as events that the wallet\nlistens to and handles upon receipt."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"React Native \u2192 Native Module"})," - The wallet calls the Native Module using the ",(0,i.jsx)(n.code,{children:"NativeModules"})," API,\nwhich enables React Native code to call native Kotlin primitives."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connection-flow",children:"Connection flow"}),"\n",(0,i.jsx)(n.p,{children:"The following diagram outlines the communication flow between the Android client SDK and server SDK:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Android SDK communication diagram",src:t(51997).A+"",width:"1512",height:"1334"})}),"\n",(0,i.jsx)(n.p,{children:"The flow is as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The dapp, with the SDK installed, initiates communication when a user connects to MetaMask.\nThe dapp deeplinks to MetaMask, and MetaMask sets up the Android Native Module to receive client requests."}),"\n",(0,i.jsx)(n.li,{children:"The dapp generates an ECIES public/private key pair.\nThe dapp and MetaMask exchange public keys over IPC."}),"\n",(0,i.jsx)(n.li,{children:"The dapp and MetaMask perform end-to-end encrypted JSON-RPC calls."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},18292:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sdk-android-architecture-37023c4faf4a70fbda21e5a463252d65.png"},51997:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sdk-android-communication-10dcd9c63acfecb8a3274a0641499424.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);