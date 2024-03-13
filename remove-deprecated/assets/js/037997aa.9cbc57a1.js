"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=l(n),u=s,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:s,r[1]=o;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(87462),s=(n(67294),n(3905));const i={description:"Create a Snap that estimates gas fees.",sidebar_position:1},r="Create a Snap to estimate gas fees",o={unversionedId:"learn/tutorials/gas-estimation",id:"learn/tutorials/gas-estimation",title:"Create a Snap to estimate gas fees",description:"Create a Snap that estimates gas fees.",source:"@site/snaps/learn/tutorials/gas-estimation.md",sourceDirName:"learn/tutorials",slug:"/learn/tutorials/gas-estimation",permalink:"/remove-deprecated/snaps/learn/tutorials/gas-estimation",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/tutorials/gas-estimation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Create a Snap that estimates gas fees.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Tutorials",permalink:"/remove-deprecated/snaps/learn/tutorials"},next:{title:"Create a Snap to calculate gas fee percentages",permalink:"/remove-deprecated/snaps/learn/tutorials/transaction-insights"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Set up the project",id:"1-set-up-the-project",level:3},{value:"2. Add a custom icon",id:"2-add-a-custom-icon",level:3},{value:"3. Enable network access",id:"3-enable-network-access",level:3},{value:"4. Fetch gas fee estimates",id:"4-fetch-gas-fee-estimates",level:3},{value:"5. Build and test the Snap",id:"5-build-and-test-the-snap",level:3},{value:"6. Next steps",id:"6-next-steps",level:3}],m={toc:l},d="wrapper";function c(e){let{components:t,...i}=e;return(0,s.kt)(d,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"create-a-snap-to-estimate-gas-fees"},"Create a Snap to estimate gas fees"),(0,s.kt)("p",null,"This tutorial walks you through creating a Snap that estimates gas fees.\nThe Snap uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch")," API to request information from the internet, and displays custom\ninformation in an alert dialog."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/remove-deprecated/snaps/get-started/install-flask"},"MetaMask Flask installed")),(0,s.kt)("li",{parentName:"ul"},"A text editor (for example, ",(0,s.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node")," version 20.11 or later"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn"))),(0,s.kt)("h2",{id:"steps"},"Steps"),(0,s.kt)("h3",{id:"1-set-up-the-project"},"1. Set up the project"),(0,s.kt)("p",null,"Create a new Snap project using the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/create-snap")),"\nstarter kit by running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create @metamask/snap gas-estimation-snap\n")),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx @metamask/create-snap gas-estimation-snap\n")),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm create @metamask/snap gas-estimation-snap\n")),(0,s.kt)("p",null,"Next, ",(0,s.kt)("inlineCode",{parentName:"p"},"cd")," into the ",(0,s.kt)("inlineCode",{parentName:"p"},"gas-estimation-snap")," project directory and run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")),(0,s.kt)("p",null,"This initializes your development environment with the required dependencies.\nYou may get a warning similar to the following: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'@lavamoat/allow-scripts has detected dependencies without configuration. explicit configuration required.\nrun "allow-scripts auto" to automatically populate the configuration.\n')),(0,s.kt)("p",null,"You can resolve this error by running the following command: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run allow-scripts auto\n")),(0,s.kt)("h3",{id:"2-add-a-custom-icon"},"2. Add a custom icon"),(0,s.kt)("p",null,"Your Snap must display an icon in MetaMask.\nTo add a Snap image, create a new folder ",(0,s.kt)("inlineCode",{parentName:"p"},"images")," in the Snap package ",(0,s.kt)("inlineCode",{parentName:"p"},"packages/snap/"),": "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir packages/snap/images\n")),(0,s.kt)("p",null,"Download\n",(0,s.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Montoya/gas-fee-snap/main/packages/snap/images/gas.svg"},"this ",(0,s.kt)("inlineCode",{parentName:"a"},"gas.svg")," icon file"),"\ninto the ",(0,s.kt)("inlineCode",{parentName:"p"},"\xecmages")," folder you just created.",(0,s.kt)("br",{parentName:"p"}),"\n",'This is a free icon, "Gas" by Mello from\n',(0,s.kt)("a",{parentName:"p",href:"https://thenounproject.com/browse/icons/term/gas/"},"Noun Project"),"."),(0,s.kt)("p",null,"Your file structure should look like this: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"gas-estimation-snap/\n\u251c\u2500 packages/\n\u2502  \u251c\u2500 site/\n|  |  |- src/\n|  |  |  |- App.tsx\n|  |  \u251c\u2500 package.json\n|  |  |- ...(react app content)\n|  |\n\u2502  \u251c\u2500 snap/\n|  |  \u251c\u2500 images/\n|  |  |  |- gas.svg\n|  |  \u251c\u2500 src/\n|  |  |  |- index.test.ts\n|  |  |  |- index.ts\n|  |  \u251c\u2500 snap.manifest.json\n|  |  \u251c\u2500 package.json\n|  |  |- ... (Snap content)\n\u251c\u2500 package.json\n\u251c\u2500 ... (other stuff)\n")),(0,s.kt)("p",null,"Open ",(0,s.kt)("inlineCode",{parentName:"p"},"packages/snap/snap.manifest.json")," in a text editor.\nThis file contains the main configuration details for your Snap.\nEdit the ",(0,s.kt)("inlineCode",{parentName:"p"},"npm")," object, within the ",(0,s.kt)("inlineCode",{parentName:"p"},"location")," object,\nand add ",(0,s.kt)("inlineCode",{parentName:"p"},"iconPath")," with the value ",(0,s.kt)("inlineCode",{parentName:"p"},'"images/gas.svg"')," to point to your new icon: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"location": {\n   "npm": {\n      "filePath": "dist/bundle.js",\n      "iconPath": "images/gas.svg",\n      "packageName": "snap",\n      "registry": "https://registry.npmjs.org/"\n   }\n}\n')),(0,s.kt)("p",null,"Open ",(0,s.kt)("inlineCode",{parentName:"p"},"packages/snap/package.json")," in a text editor.\nEdit the ",(0,s.kt)("inlineCode",{parentName:"p"},"files")," array and add the ",(0,s.kt)("inlineCode",{parentName:"p"},"images/")," folder: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"files": [\n  "dist/",\n  "images/",\n  "snap.manifest.json"\n],\n')),(0,s.kt)("h3",{id:"3-enable-network-access"},"3. Enable network access"),(0,s.kt)("p",null,"To enable your Snap to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch")," API, enable the\n",(0,s.kt)("a",{parentName:"p",href:"/remove-deprecated/snaps/reference/permissions#endowmentnetwork-access"},(0,s.kt)("inlineCode",{parentName:"a"},"endowment:network-access")),"\npermission by adding ",(0,s.kt)("inlineCode",{parentName:"p"},'"endowment:network-access": {}')," to the ",(0,s.kt)("inlineCode",{parentName:"p"},"initialPermissions")," object in ",(0,s.kt)("inlineCode",{parentName:"p"},"snap.manifest.json"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_dialog": {},\n  "endowment:rpc": {\n    "dapps": true,\n    "snaps": false\n  }, \n  "endowment:network-access": {}\n},\n"manifestVersion": "0.1"\n')),(0,s.kt)("h3",{id:"4-fetch-gas-fee-estimates"},"4. Fetch gas fee estimates"),(0,s.kt)("p",null,"Open ",(0,s.kt)("inlineCode",{parentName:"p"},"/packages/snap/src/index.ts"),".\nThis is the main code file for your Snap.\nTo get a gas fee estimate, use the public API endpoint provided by\n",(0,s.kt)("a",{parentName:"p",href:"https://beaconcha.in/"},"Open Source Ethereum Explorer"),".\nAdd the following ",(0,s.kt)("inlineCode",{parentName:"p"},"getFees()")," function to the beginning of the ",(0,s.kt)("inlineCode",{parentName:"p"},"/packages/snap/src/index.ts")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"import type { OnRpcRequestHandler } from '@metamask/snaps-sdk';\nimport { panel, text } from '@metamask/snaps-sdk';\n\nasync function getFees() {\n  const response = await fetch('https://beaconcha.in/api/v1/execution/gasnow'); \n  return response.text();\n}\n")),(0,s.kt)("p",null,"Next, add the ",(0,s.kt)("inlineCode",{parentName:"p"},"copyable")," component to the second import of the file: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"import type { OnRpcRequestHandler } from '@metamask/snaps-sdk';\nimport { panel, text, copyable } from '@metamask/snaps-sdk';\n")),(0,s.kt)("p",null,"Modify the Snap RPC message handler that displays the dialog.\nThis handler uses a switch statement to handle various request methods, but in this instance there is\nonly one method, ",(0,s.kt)("inlineCode",{parentName:"p"},"hello"),".\nFor the ",(0,s.kt)("inlineCode",{parentName:"p"},"hello")," method, the handler returns a call to MetaMask with the parameters to display a\ndialog, and passes some static strings."),(0,s.kt)("p",null,"Since ",(0,s.kt)("inlineCode",{parentName:"p"},"getFees()")," returns a promise, you must use ",(0,s.kt)("inlineCode",{parentName:"p"},"then()")," to resolve it in your ",(0,s.kt)("inlineCode",{parentName:"p"},"hello")," method.\nRewrite the ",(0,s.kt)("inlineCode",{parentName:"p"},"hello")," method using the following code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"case 'hello':\n  return getFees().then(fees => {\n    return snap.request({\n      method: 'snap_dialog',\n      params: {\n        type: 'alert',\n        content: panel([\n          text(`Hello, **${origin}**!`),\n          text(`Current gas fee estimates:`),\n          copyable(fees),\n        ]),\n      }\n    });\n  });\n")),(0,s.kt)("h3",{id:"5-build-and-test-the-snap"},"5. Build and test the Snap"),(0,s.kt)("p",null,"To build and test your Snap:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Open ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," in the root directory of the project, and increment the ",(0,s.kt)("inlineCode",{parentName:"p"},'"version"')," (if the ",(0,s.kt)("inlineCode",{parentName:"p"},'"version"')," is\n",(0,s.kt)("inlineCode",{parentName:"p"},"0.1.0"),", increase it to ",(0,s.kt)("inlineCode",{parentName:"p"},"0.2.0"),").")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"From the command line, run ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn start"),".\nIn the terminal, at the bottom of the message log, you see the browser URL:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"You can now view site in the browser.\n\n  http://localhost:8000/\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Open ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:8000/"},(0,s.kt)("inlineCode",{parentName:"a"},"localhost:8000"))," in your browser (with MetaMask Flask installed).\nA page like the following displays:"),(0,s.kt)("img",{src:n(40874).Z,alt:"Test dapp with template Snap",style:{border:"1px solid gray"}}),(0,s.kt)("p",{parentName:"li"},"This is a boilerplate test dapp for installing and testing your Snap.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select ",(0,s.kt)("strong",{parentName:"p"},"Connect")," to connect Flask to the dapp.\nAfter connecting, you're prompted to install the Snap with the following permissions:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Allow dapps to communicate directly with this Snap.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Access the internet.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Display dialog windows in MetaMask.")))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select ",(0,s.kt)("strong",{parentName:"p"},"Approve")," > ",(0,s.kt)("strong",{parentName:"p"},"Install"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"After installing, the ",(0,s.kt)("strong",{parentName:"p"},"Send message")," button on the page is enabled. Select this button. A dialog prompt displays with the response from the gas fee API:"))),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:n(57091).Z,alt:"Gas estimation dialog",style:{border:"1px solid gray"}})),(0,s.kt)("p",null,"You have integrated a public API into MetaMask and displayed real-time gas fee estimates."),(0,s.kt)("h3",{id:"6-next-steps"},"6. Next steps"),(0,s.kt)("p",null,"Next, you can try:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Parsing the JSON response from the remote API."),(0,s.kt)("li",{parentName:"ul"},"Displaying the fees in a nicely formatted way.")),(0,s.kt)("p",null,"You can also update the fields in ",(0,s.kt)("inlineCode",{parentName:"p"},"snap.manifest.json")," to match your custom Snap:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"proposedName")," - The name of your Snap."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"description")," - The description of your Snap."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"repository")," - The URL of your cloned GitHub repository."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"source")," - The ",(0,s.kt)("inlineCode",{parentName:"li"},"shasum")," is set automatically when you build from the command line.\nIf you decided to publish your Snap to ",(0,s.kt)("inlineCode",{parentName:"li"},"npm"),", update the ",(0,s.kt)("inlineCode",{parentName:"li"},"location")," to its published location.")),(0,s.kt)("p",null,"Similarly, you should update the ",(0,s.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"version"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"description"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"repository")," sections of\n",(0,s.kt)("inlineCode",{parentName:"p"},"/packages/snap/package.json")," even if you do not plan to publish your Snap to ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},(0,s.kt)("inlineCode",{parentName:"a"},"npm")),"."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"version")," field in ",(0,s.kt)("inlineCode",{parentName:"p"},"snap.manifest.json")," inherits the ",(0,s.kt)("inlineCode",{parentName:"p"},"version")," field from ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json"),".")),(0,s.kt)("p",null,"You can update the content of ",(0,s.kt)("inlineCode",{parentName:"p"},"/packages/site/src/pages/index.tsx")," by changing the\nname of the method for showing gas fee estimates.\nIf you change the method name in ",(0,s.kt)("inlineCode",{parentName:"p"},"/packages/site/src/pages/index.tsx"),", ensure you change the method name in ",(0,s.kt)("inlineCode",{parentName:"p"},"/packages/snap/src/index.ts")," to match."),(0,s.kt)("p",null,"After you have made all necessary changes, you can\n",(0,s.kt)("a",{parentName:"p",href:"/remove-deprecated/snaps/how-to/publish-a-snap"},"publish your Snap to npm"),"."))}c.isMDXComponent=!0},57091:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gas-estimation-0a5ae2f873be0b8fd6226aff0fb3f531.png"},40874:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/template-snap-71dab3e1010b6cdcd69aefc5739bbcdd.png"}}]);