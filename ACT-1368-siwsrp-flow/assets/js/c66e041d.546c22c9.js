"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1784],{34038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(74848),s=t(28453),a=t(47174);const o={sidebar_label:"Unity",sidebar_position:1,description:"Set up the SDK in your Unity game.",tags:["Unity SDK"]},l="Use MetaMask SDK with Unity",r={id:"how-to/use-sdk/gaming/unity/index",title:"Use MetaMask SDK with Unity",description:"Set up the SDK in your Unity game.",source:"@site/wallet/how-to/use-sdk/gaming/unity/index.md",sourceDirName:"how-to/use-sdk/gaming/unity",slug:"/how-to/use-sdk/gaming/unity/",permalink:"/ACT-1368-siwsrp-flow/wallet/how-to/use-sdk/gaming/unity/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/index.md",tags:[{label:"Unity SDK",permalink:"/ACT-1368-siwsrp-flow/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Unity",sidebar_position:1,description:"Set up the SDK in your Unity game.",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Gaming",permalink:"/ACT-1368-siwsrp-flow/wallet/how-to/use-sdk/gaming/"},next:{title:"Connect and sign",permalink:"/ACT-1368-siwsrp-flow/wallet/how-to/use-sdk/gaming/unity/connect-and-sign"}},d={},c=[{value:"Video demo",id:"video-demo",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Configure build settings",id:"1-configure-build-settings",level:3},{value:"2. Install the Unity SDK",id:"2-install-the-unity-sdk",level:3},{value:"3. Initialize MetaMask",id:"3-initialize-metamask",level:3},{value:"4. Connect to MetaMask",id:"4-connect-to-metamask",level:3},{value:"5. Use MetaMask",id:"5-use-metamask",level:3},{value:"6. Configure MetaMask",id:"6-configure-metamask",level:3},{value:"Update the Unity SDK",id:"update-the-unity-sdk",level:2},{value:"FAQS",id:"faqs",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"use-metamask-sdk-with-unity",children:"Use MetaMask SDK with Unity"}),"\n",(0,i.jsxs)(n.p,{children:["Import ",(0,i.jsx)(n.a,{href:"/ACT-1368-siwsrp-flow/wallet/concepts/sdk/",children:"MetaMask SDK"})," into your\n",(0,i.jsx)(n.a,{href:"https://assetstore.unity.com/packages/decentralization/infrastructure/metamask-246786",children:"Unity"})," game\nto enable users to easily connect to their MetaMask Mobile wallet.\nThe MetaMask Unity SDK supports macOS, Windows, Linux, iOS, Android, and WebGL."]}),"\n",(0,i.jsx)(n.h2,{id:"video-demo",children:"Video demo"}),"\n",(0,i.jsx)(n.p,{children:"The following video demonstrates how to install and use the MetaMask Unity SDK."}),"\n",(0,i.jsx)(a.A,{url:"https://www.youtube.com/embed/0D1cIH-PZtI"}),"\n",(0,i.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,i.jsx)(n.h3,{id:"1-configure-build-settings",children:"1. Configure build settings"}),"\n",(0,i.jsx)(n.p,{children:"To build the SDK, configure the following settings in your Unity editor according to your\ndevelopment platform:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["iOS:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Build Settings > Build Options"})," and set ",(0,i.jsx)(n.strong,{children:"Enable Bitcode"})," to ",(0,i.jsx)(n.strong,{children:"NO"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Android:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.strong,{children:"Assets"})," dropdown menu and select ",(0,i.jsx)(n.strong,{children:"External Dependency Manager > Android\nResolver > Resolve"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Build Settings > Player Settings"})," and set ",(0,i.jsx)(n.strong,{children:"Minimum API level"})," to ",(0,i.jsx)(n.strong,{children:"Android 7.0\n'Nougat'"})," (API level 24)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["WebGL:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Build Settings > Player Settings"}),", switch to the ",(0,i.jsx)(n.strong,{children:"Resolution & Presentation Tab"}),", and\nselect ",(0,i.jsx)(n.strong,{children:"MetaMask"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For all platforms, also set the ",(0,i.jsx)(n.strong,{children:"Scripting Backend"})," in ",(0,i.jsx)(n.strong,{children:"Player Settings"})," to ",(0,i.jsx)(n.strong,{children:"IL2CPP"}),", and set\n",(0,i.jsx)(n.strong,{children:"IL2CPP Code Generation"})," in ",(0,i.jsx)(n.strong,{children:"Build Settings"})," to ",(0,i.jsx)(n.strong,{children:"Faster (smaller) builds"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"2-install-the-unity-sdk",children:"2. Install the Unity SDK"}),"\n",(0,i.jsxs)(n.p,{children:["Download the\n",(0,i.jsx)(n.a,{href:"https://assetstore.unity.com/packages/decentralization/infrastructure/metamask-246786",children:"MetaMask SDK for Unity"}),"\nfrom the Unity Asset Store."]}),"\n",(0,i.jsxs)(n.p,{children:["In your Unity editor, go to the menu > ",(0,i.jsx)(n.strong,{children:"Package Manager"}),".\nSelect ",(0,i.jsx)(n.strong,{children:"My Assets"}),", ",(0,i.jsx)(n.strong,{children:"MetaMask Unity SDK"}),", and ",(0,i.jsx)(n.strong,{children:"Install"}),".\nYou should see the MetaMask SDK package listed in the project packages and be able to interface\nwith it and its examples in the scene."]}),"\n",(0,i.jsxs)(n.p,{children:["You also need to install ",(0,i.jsx)(n.a,{href:"https://docs.unity3d.com/Manual/com.unity.textmeshpro.html",children:"TextMeshPro"}),".\nIf you don't have TextMeshPro installed, the Unity editor automatically prompts you to install it."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Unity SDK package structure"}),(0,i.jsx)("p",{children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"File or directory"}),(0,i.jsx)(n.th,{children:"Contents"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Documentation"})}),(0,i.jsx)(n.td,{children:"Documentation and link to online documentation"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Editor"})}),(0,i.jsx)(n.td,{children:"Editor-only code such as Setup GUI windows, data persistence for SDK settings"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Plugins"})}),(0,i.jsx)(n.td,{children:"Plugins needed by the package (the ECIES Platform runtime libraries and core SDK Codebase)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Runtime"})}),(0,i.jsx)(n.td,{children:"Main scripts for the SDK that are environment-agnostic, including the C# scripts that provide the base implementation of the SDK"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Samples"})}),(0,i.jsx)(n.td,{children:"Test application scene that can be used as a referral for your project, including modal popups and dynamic UI scaling"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"LICENSE.md"})}),(0,i.jsx)(n.td,{children:"Package license"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Third Party Notices.md"})}),(0,i.jsx)(n.td,{children:"Third party notices"})]})]})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["When new versions of the Unity SDK are released, ",(0,i.jsx)(n.a,{href:"#update-the-unity-sdk",children:"update the Unity SDK in your project"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"3-initialize-metamask",children:"3. Initialize MetaMask"}),"\n",(0,i.jsxs)(n.p,{children:["The main class you interface with is called ",(0,i.jsx)(n.code,{children:"MetaMaskWallet"}),".\nIt handles the connection to the user's wallet, as well as processing the requests to it using a\nsocket.io implementation."]}),"\n",(0,i.jsxs)(n.p,{children:["To use it inside Unity, you must attach the component called ",(0,i.jsx)(n.code,{children:"MetaMaskUnity"})," to a game object within\nthe editor.\nThis component is a singleton and you can use its ",(0,i.jsx)(n.code,{children:"Instance"})," property to access the wallet instance.\nYou first must initialize by doing one of the following:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Manually call ",(0,i.jsx)(n.code,{children:"Initialize()"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"MetaMaskUnity.Instance.Initialize();\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Check ",(0,i.jsx)(n.strong,{children:"Initialize On Start"})," on the component within the editor."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This initializes the wallet instance, making it accessible from ",(0,i.jsx)(n.code,{children:"MetaMaskUnity.Instance.Wallet"}),".\nYou can now make calls to the user's wallet using ",(0,i.jsx)(n.a,{href:"/ACT-1368-siwsrp-flow/wallet/reference/provider-api",children:"provider API methods"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"4-connect-to-metamask",children:"4. Connect to MetaMask"}),"\n",(0,i.jsxs)(n.p,{children:["Once the wallet is prepared and initialized, you can connect to MetaMask.\nCall the ",(0,i.jsx)(n.code,{children:"Connect()"})," method on the wallet instance as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"var wallet = MetaMaskUnity.Instance.Wallet;\nwallet.Connect();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also subscribe to the ",(0,i.jsx)(n.code,{children:"OnWalletConnected"})," callback on the wallet instance to be notified\nonce the wallet is connected:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'wallet.WalletConnected += OnWalletConnected;\n\nvoid OnWalletConnected(object sender, EventArgs e) {\n  Debug.Log("Wallet is connected");\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can also use the ",(0,i.jsx)(n.code,{children:"Connect()"})," method from ",(0,i.jsx)(n.code,{children:"MetaMaskUnity"})," that delegates the call to the wallet\ninstance:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"MetaMaskUnity.Instance.Connect();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["There are a variety of sample buttons included inside the package that call this method when clicked.\nThese are provided as a convenience to get started quickly with your project.\nOnce the connection request is made, a QR code is generated, and based on the transport you're using\n(",(0,i.jsx)(n.code,{children:"Unity UI"})," by default), either a new Canvas that contains the QR code is spawned or the\n",(0,i.jsx)(n.code,{children:"MetaMaskUnityUIQRImage"})," generates the QR code when the connection is requested."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to use the latter, add an instance of the ",(0,i.jsx)(n.code,{children:"MetaMaskUnityUIQRImage"})," component to the\nscene with its fields provided.\nThe transport field is also required if you want to use it isolated from the canvas that is spawned\nby the transport, then it generates the QR code for you."]}),"\n",(0,i.jsx)(n.admonition,{title:"Connect and sign",type:"info",children:(0,i.jsxs)(n.p,{children:["You can also ",(0,i.jsxs)(n.a,{href:"/ACT-1368-siwsrp-flow/wallet/how-to/use-sdk/gaming/unity/connect-and-sign",children:["use the ",(0,i.jsx)(n.code,{children:"connectAndSign"})," method"]})," to\nconnect to MetaMask and sign data in a single interaction."]})}),"\n",(0,i.jsx)(n.h3,{id:"5-use-metamask",children:"5. Use MetaMask"}),"\n",(0,i.jsxs)(n.p,{children:["Once the wallet is authorized, you can make requests to it.\nThe wallet is authorized when the buttons become interactable or the ",(0,i.jsx)(n.code,{children:"WalletAuthorized"})," event is fired:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'var wallet = MetaMaskUnity.Instance.Wallet;\nwallet.WalletAuthorized += OnWalletAuthorized;\n\nvoid OnWalletAuthorized(object sender, EventArgs e) {\n  Debug.Log("Wallet is authorized");\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can call any ",(0,i.jsx)(n.a,{href:"/wallet/reference/json-rpc-api",children:"JSON-RPC API method"})," using ",(0,i.jsx)(n.code,{children:"wallet.Request(myRequest)"}),".\nThe following is a sample transaction request:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'var wallet = MetaMaskUnity.Instance.Wallet;\nvar transactionParams = new MetaMaskTransaction\n{\n  To = "0xd0059fB234f15dFA9371a7B45c09d451a2dd2B5a",\n  From = MetaMaskUnity.Instance.Wallet.SelectedAddress,\n  Value = "0x0"\n};\n\nvar request = new MetaMaskEthereumRequest\n{\n  Method = "eth_sendTransaction",\n  Parameters = new MetaMaskTransaction[] { transactionParams }\n};\nawait wallet.Request(request);\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"/ACT-1368-siwsrp-flow/wallet/reference/sdk-unity-api",children:"Unity SDK API reference"})," for an overview of the\nAPI methods from the most important classes."]})}),"\n",(0,i.jsx)(n.h3,{id:"6-configure-metamask",children:"6. Configure MetaMask"}),"\n",(0,i.jsx)(n.p,{children:"You can customize the default configuration or create your own configuration."}),"\n",(0,i.jsx)(n.p,{children:"Edit the default configuration by doing one of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"Window > MetaMask > Setup"})," menu item."]}),"\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.code,{children:"MetaMaskConfig"})," asset in the project window."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Edit the fields and save the changes."}),"\n",(0,i.jsxs)(n.p,{children:["Create a new configuration by right-clicking on the project window and navigating to\n",(0,i.jsx)(n.strong,{children:"MetaMask > Config"}),".\nName the new configuration and use it when initializing the ",(0,i.jsx)(n.code,{children:"MetaMaskUnity"})," instance."]}),"\n",(0,i.jsx)(n.h2,{id:"update-the-unity-sdk",children:"Update the Unity SDK"}),"\n",(0,i.jsx)(n.p,{children:"Update your project's version of the MetaMask Unity SDK to ensure that your project uses the latest\nSDK functionalities and improvements.\nTo update the SDK to the latest version available on the Unity Asset Store:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Update and import the latest package using the Unity Package Manager."}),"\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Tools > MetaMask > Install in Unity"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Already Installed"})," button.\nThis updates the SDK in your project."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Alternatively, you can delete the existing MetaMask folder in your project and re-import it from the\nPackage Manager or Asset Store."}),"\n",(0,i.jsx)(n.h2,{id:"faqs",children:"FAQS"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"I can't find the SDK installation option."}),(0,i.jsxs)(n.p,{children:["If you don't see the option to ",(0,i.jsx)(n.a,{href:"#2-install-the-sdk-for-unity",children:"install the SDK"})," in your Unity menu,\nensure you're on the latest Unity version and that you have no red errors printed in your console.\nThis option not appearing is typically due to incorrect editor initialization, which you can\nusually resolve by restarting the editor or updating your Unity version."]})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"On iOS, why does a popup appear when using a deeplink?"}),(0,i.jsx)(n.p,{children:"When deeplinking, a background service is created to facilitate the communication layer between the\nUnity game and MetaMask.\nOn iOS, background services expire after a certain amount of time.\nA notification pops up to let you know the socket connection has expired."})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"What does the external dependency manager do?"}),(0,i.jsx)(n.p,{children:"The Unity Jar Resolver is an external dependency manager specifically for Unity projects that use\nexternal libraries.\nIt helps manage the dependencies between Unity and external libraries, which can sometimes be\ncomplicated due to differences between the two environments.\nThis tool is particularly useful for MetaMask SDK, since Android and iOS need a variety of native\nlibraries to facilitate deeplinking and the persistent socket connection."})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Does the SDK increase my compilation time?"}),(0,i.jsx)(n.p,{children:"No.\nIf you notice an increased compilation time, it might be related to the ILL2CP pipeline, which can\ntake longer to build at compile time.\nThe SDK is filled with precompiled libraries to save on runtime compilation."})]}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsx)(n.p,{children:"Once you have the MetaMask Unity SDK set up, you can:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/ACT-1368-siwsrp-flow/wallet/how-to/use-sdk/gaming/unity/connect-and-sign",children:"Connect and sign in Unity."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/ACT-1368-siwsrp-flow/wallet/how-to/use-sdk/gaming/unity/infura",children:"Set up Infura in Unity."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/ACT-1368-siwsrp-flow/wallet/how-to/use-sdk/gaming/unity/smart-contracts/",children:"Interact with smart contracts in Unity."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/ACT-1368-siwsrp-flow/wallet/how-to/use-sdk/gaming/unity/dweb",children:"Enable human-readable addresses in Unity using Decentraweb."})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},47174:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);const i="wrapper_iojS";var s=t(74848);const a=e=>{let{url:n}=e;return(0,s.jsxs)("div",{className:i,children:[" ",(0,s.jsx)("iframe",{src:n,allowFullScreen:!0})]})}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);