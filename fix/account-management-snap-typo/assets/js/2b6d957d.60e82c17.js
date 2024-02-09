"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6250],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(t),d=o,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||s;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const s={description:"Develop, test, and publish a Snap.",sidebar_position:1},r="Develop a Snap",i={unversionedId:"how-to/develop-a-snap",id:"how-to/develop-a-snap",title:"Develop a Snap",description:"Develop, test, and publish a Snap.",source:"@site/snaps/how-to/develop-a-snap.md",sourceDirName:"how-to",slug:"/how-to/develop-a-snap",permalink:"/fix/account-management-snap-typo/snaps/how-to/develop-a-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/develop-a-snap.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Develop, test, and publish a Snap.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"How to",permalink:"/fix/account-management-snap-typo/snaps/how-to"},next:{title:"Request permissions",permalink:"/fix/account-management-snap-typo/snaps/how-to/request-permissions"}},p={},l=[{value:"Detect the user&#39;s MetaMask version",id:"detect-the-users-metamask-version",level:2},{value:"Test your Snap",id:"test-your-snap",level:2},{value:"Debug your Snap",id:"debug-your-snap",level:2},{value:"Publish your Snap",id:"publish-your-snap",level:2},{value:"Distribute your Snap",id:"distribute-your-snap",level:2},{value:"Resources",id:"resources",level:2}],u={toc:l},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"develop-a-snap"},"Develop a Snap"),(0,o.kt)("p",null,"A Snap can integrate with and extend the functionality of MetaMask using the\n",(0,o.kt)("a",{parentName:"p",href:"/fix/account-management-snap-typo/snaps/reference/entry-points"},"Snaps entry points"),", ",(0,o.kt)("a",{parentName:"p",href:"/fix/account-management-snap-typo/snaps/reference/snaps-api"},"Snaps API"),", and\n",(0,o.kt)("a",{parentName:"p",href:"/fix/account-management-snap-typo/snaps/how-to/request-permissions"},"permissions"),"."),(0,o.kt)("admonition",{title:"important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Before developing a Snap, make sure you understand the following concepts and guidelines:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fix/account-management-snap-typo/snaps/concepts/overview"},"Snaps overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fix/account-management-snap-typo/snaps/concepts/apis"},"Snaps APIs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fix/account-management-snap-typo/snaps/concepts/files"},"Snaps files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fix/account-management-snap-typo/snaps/concepts/design-guidelines"},"Snaps design guidelines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fix/account-management-snap-typo/snaps/concepts/security-guidelines"},"Snaps security guidelines")))),(0,o.kt)("p",null,"You can get started by ",(0,o.kt)("a",{parentName:"p",href:"/fix/account-management-snap-typo/snaps/get-started/quickstart"},"creating a new Snap project")," or following a\n",(0,o.kt)("a",{parentName:"p",href:"/snaps/tutorials"},"tutorial"),".\nThis page describes additional important steps when developing a Snap."),(0,o.kt)("h2",{id:"detect-the-users-metamask-version"},"Detect the user's MetaMask version"),(0,o.kt)("p",null,"When developing a dapp that depends on ",(0,o.kt)("a",{parentName:"p",href:"/fix/account-management-snap-typo/snaps/get-started/install-flask#install-metamask-flask"},"MetaMask Flask"),",\nyou first need to know whether the user has it installed."),(0,o.kt)("p",null,"The following example uses the\n",(0,o.kt)("a",{parentName:"p",href:"https://npmjs.com/package/@metamask/detect-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider"))," package to get\nthe provider object from MetaMask first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import detectEthereumProvider from '@metamask/detect-provider';\n\n// This resolves to the value of window.ethereum or null\nconst provider = await detectEthereumProvider();\n\n// web3_clientVersion returns the installed MetaMask version as a string\nconst isFlask = (\n  await provider?.request({ method: 'web3_clientVersion' })\n)?.includes('flask');\n\nif (provider && isFlask) {\n  console.log('MetaMask Flask successfully detected!');\n\n  // Now you can use Snaps!\n} else {\n  console.error('Please install MetaMask Flask!', error);\n}\n")),(0,o.kt)("h2",{id:"test-your-snap"},"Test your Snap"),(0,o.kt)("p",null,"Test your Snap by hosting it locally using ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"),", installing it in Flask, and calling its\nAPI methods from a dapp."),(0,o.kt)("p",null,"For end-to-end Snap testing, ",(0,o.kt)("a",{parentName:"p",href:"/fix/account-management-snap-typo/snaps/how-to/test-a-snap"},"use the ",(0,o.kt)("inlineCode",{parentName:"a"},"@metamask/snaps-jest")," package"),"."),(0,o.kt)("h2",{id:"debug-your-snap"},"Debug your Snap"),(0,o.kt)("p",null,"To debug your Snap, use ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," and inspect the MetaMask background process.\nYou can add your log statements in your source code and build your Snap, or add them directly\nto your Snap bundle and use ",(0,o.kt)("a",{parentName:"p",href:"/fix/account-management-snap-typo/snaps/reference/cli/subcommands#m-manifest"},(0,o.kt)("inlineCode",{parentName:"a"},"yarn mm-snap manifest --fix")),"\nto update the ",(0,o.kt)("inlineCode",{parentName:"p"},"shasum")," in your Snap manifest file.\nThe manifest ",(0,o.kt)("inlineCode",{parentName:"p"},"shasum")," must match the contents of your bundle at the time MetaMask fetches your Snap."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Because adding logs modifies the Snap source code, you must re-install the Snap whenever you add a\nlog statement.")),(0,o.kt)("p",null,"The Snap log output is only visible in the extension background process console.\nIf you're using a Chromium browser, use the following steps to inspect the background process and\nview its console:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"chrome://extensions"),"."),(0,o.kt)("li",{parentName:"ol"},"Toggle ",(0,o.kt)("strong",{parentName:"li"},"Developer mode")," on in the top right corner."),(0,o.kt)("li",{parentName:"ol"},"Find MetaMask Flask, and select ",(0,o.kt)("strong",{parentName:"li"},"Details"),"."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Inspect views"),", select ",(0,o.kt)("inlineCode",{parentName:"li"},"background.html"),".")),(0,o.kt)("p",null,"The log output displays in the console that pops up."),(0,o.kt)("h2",{id:"publish-your-snap"},"Publish your Snap"),(0,o.kt)("p",null,"Snaps are npm packages, so publishing a Snap is as simple as publishing an npm package.\nRefer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npm-publish"},"npm CLI documentation")," for details\non publishing to the public registry.\nThe following details are specific to Snaps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The version in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"repository.url")," field in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," should match the correct repository for your Snap."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"source.location.npm.packageName")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match the name in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"proposedName")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"snap.manifest.json"),' should be a human-readable name and should not include\nthe words "MetaMask" or "Snap." '),(0,o.kt)("li",{parentName:"ul"},"The image specified in ",(0,o.kt)("inlineCode",{parentName:"li"},"iconPath")," in the manifest file is used as the icon displayed when\ninstalling the Snap, in custom dialogs, and in the settings menu.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This icon should be a valid SVG."),(0,o.kt)("li",{parentName:"ul"},"The icon will be cropped in a circle when displayed in MetaMask; you do not need to make the icon circular.")))),(0,o.kt)("p",null,"After publishing the Snap, any dapp can connect to the Snap by using the Snap ID ",(0,o.kt)("inlineCode",{parentName:"p"},"npm:[packageName]"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you are using the Snap monorepo project generated in the ",(0,o.kt)("a",{parentName:"p",href:"/fix/account-management-snap-typo/snaps/get-started/quickstart"},"quickstart"),",\nmake sure to only publish the Snap package in ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/snap"),".\nYou can use the ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.github.io/snaps/snaps-simulator/staging/#/manifest"},"Snaps Simulator")," to verify\nthat your Snap was published correctly ","\u2014"," just select ",(0,o.kt)("strong",{parentName:"p"},"localhost")," in the top right corner and change the\nSnap location to ",(0,o.kt)("strong",{parentName:"p"},"npm")," and the ID of your Snap. "),(0,o.kt)("p",{parentName:"admonition"},"Also, make sure to update the manifest file, icon file, and README to differentiate your Snap from the template.")),(0,o.kt)("h2",{id:"distribute-your-snap"},"Distribute your Snap"),(0,o.kt)("p",null,"You should deploy a dapp where users can learn about your Snap and install it, or integrate with your existing dapp."),(0,o.kt)("p",null,"If your Snap is designed to communicate with dapps, you can encourage other dapp developers to ",(0,o.kt)("a",{parentName:"p",href:"/fix/account-management-snap-typo/snaps/how-to/use-3rd-party-snaps"},"integrate your Snap"),"."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"See the full list of ",(0,o.kt)("a",{parentName:"p",href:"/fix/account-management-snap-typo/snaps/reference/resources"},"Snaps resources")," for more information on developer\ntools, example Snaps, and more."))}m.isMDXComponent=!0}}]);