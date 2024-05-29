"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2520],{21477:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=r(74848),s=r(28453),a=r(11470),i=r(19365);const o={description:"Get the estimated gas prices for a chain."},c="Get EIP-1559 gas prices",l={id:"gas-api/api-reference/gasprices-type2",title:"Get EIP-1559 gas prices",description:"Get the estimated gas prices for a chain.",source:"@site/services/gas-api/api-reference/gasprices-type2.md",sourceDirName:"gas-api/api-reference",slug:"/gas-api/api-reference/gasprices-type2",permalink:"/ACT-1368-siwsrp-flow/services/gas-api/api-reference/gasprices-type2",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/api-reference/gasprices-type2.md",tags:[],version:"current",frontMatter:{description:"Get the estimated gas prices for a chain."},sidebar:"servicesSidebar",previous:{title:"Get the busy threshold",permalink:"/ACT-1368-siwsrp-flow/services/gas-api/api-reference/busythreshold"}},d={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"get-eip-1559-gas-prices",children:"Get EIP-1559 gas prices"}),"\n",(0,t.jsxs)(n.p,{children:["Returns the estimated ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1559",children:"EIP-1559"})," gas fees for the specified\nblockchain network."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET"})," ",(0,t.jsx)(n.code,{children:"https://gas.api.infura.io/networks/${chainId}/suggestedGasFees"})]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Path"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"chainId"}),": ",(0,t.jsx)(n.code,{children:"string"})," - ID of the chain to query."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"Recommended gas price details based of the level of urgency:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"low"}),", ",(0,t.jsx)(n.code,{children:"medium"}),", ",(0,t.jsx)(n.code,{children:"high"})," - Object containing recommended values for transactions by level of urgency:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"suggestedMaxPriorityFeePerGas"}),": ",(0,t.jsx)(n.code,{children:"string"})," - The maximum suggested priority fee per gas to pay\nto have transactions included in a block."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"suggestedMaxFeePerGas"}),": ",(0,t.jsx)(n.code,{children:"string"})," - The maximum suggested total fee per gas to pay, including\nboth the base fee and the priority fee."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"minWaitTimeEstimate"}),": ",(0,t.jsx)(n.code,{children:"number"})," - The minimum estimated wait time (in milliseconds) for a\ntransaction to be included in a block at the suggested gas price."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"maxWaitTimeEstimate"}),": ",(0,t.jsx)(n.code,{children:"number"})," - The maximum estimated wait time (in milliseconds) for a\ntransaction to be included in a block at the suggested gas price."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"estimatedBaseFee"}),": ",(0,t.jsx)(n.code,{children:"string"})," - The current estimated base fee per gas on the network."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"networkCongestion"}),": ",(0,t.jsx)(n.code,{children:"number"})," - The current congestion on the network, represented as a number\nbetween ",(0,t.jsx)(n.code,{children:"0"})," and ",(0,t.jsx)(n.code,{children:"1"}),".\nA lower network congestion score (for example ",(0,t.jsx)(n.code,{children:"0.1"}),"), indicates that fewer transactions are being\nsubmitted, so it's cheaper to validate transactions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"latestPriorityFeeRange"}),": ",(0,t.jsx)(n.code,{children:"array"})," - The range of priority fees per gas for recent transactions on\nthe network."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"historicalPriorityFeeRange"}),": ",(0,t.jsx)(n.code,{children:"array"})," - The range of priority fees per gas for transactions on the\nnetwork over a historical period."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"historicalBaseFeeRange"}),": ",(0,t.jsx)(n.code,{children:"array"})," - The range of base fees per gas on the network over a\nhistorical period."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"priorityFeeTrend"}),": ",(0,t.jsx)(n.code,{children:"string"})," - The current trend in priority fees on the network, either ",(0,t.jsx)(n.code,{children:"up"})," or\n",(0,t.jsx)(n.code,{children:"down"})," (whether it's getting more expensive or cheaper)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"baseFeeTrend"}),": ",(0,t.jsx)(n.code,{children:"string"})," - The current trend in base fees on the network, either ",(0,t.jsx)(n.code,{children:"up"})," or\n",(0,t.jsx)(n.code,{children:"down"})," (whether it's getting more expensive or cheaper)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(n.p,{children:["Include your ",(0,t.jsx)(n.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id",children:"API key"}),"\nand ",(0,t.jsx)(n.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret",children:"API key secret"}),"\nto authorize your account to use the APIs."]}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"cURL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X "GET"                     \\\n    -u <API-KEY>:<API-KEY-SECRET> \\\n    "https://gas.api.infura.io/networks/1/suggestedGasFees"\n'})})}),(0,t.jsx)(i.A,{value:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const axios = require("axios");\n\nconst apiKey = "<API-KEY>"; // Replace with your API key.\nconst apiKeySecret = "<API-KEY-SECRET>"; // Replace with your API key secret.\n\nconst Auth = Buffer.from(\n    apiKey + ":" + apiKeySecret,\n).toString("base64");\n\n// The chain ID of the supported network.\nconst chainId = 1;\n\n(async () => {\n    try {\n        const { data } = await axios.get(\n            `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,\n            {\n                headers: {\n                    Authorization: `Basic ${Auth}`,\n                },\n            },\n        );\n        console.log("Suggested gas fees:", data);\n    } catch (error) {\n        console.log("Server responded with:", error);\n    }\n})();\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "low": {\n        "suggestedMaxPriorityFeePerGas": "0.05",\n        "suggestedMaxFeePerGas": "16.334026964",\n        "minWaitTimeEstimate": 15000,\n        "maxWaitTimeEstimate": 30000\n    },\n    "medium": {\n        "suggestedMaxPriorityFeePerGas": "0.1",\n        "suggestedMaxFeePerGas": "22.083436402",\n        "minWaitTimeEstimate": 15000,\n        "maxWaitTimeEstimate": 45000\n    },\n    "high":{\n        "suggestedMaxPriorityFeePerGas": "0.3",\n        "suggestedMaxFeePerGas": "27.982845839",\n        "minWaitTimeEstimate": 15000,\n        "maxWaitTimeEstimate": 60000\n    },\n    "estimatedBaseFee": "16.284026964",\n    "networkCongestion" :0.5125,\n    "latestPriorityFeeRange": ["0", "3"],\n    "historicalPriorityFeeRange": ["0.000000001", "89"],\n    "historicalBaseFeeRange": ["13.773088584", "29.912845463"],\n    "priorityFeeTrend": "down",\n    "baseFeeTrend": "up"\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(18215);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),s=r(18215),a=r(23104),i=r(56347),o=r(205),c=r(57485),l=r(31682),d=r(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[l,u]=m({queryString:r,groupId:s}),[g,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),x=(()=>{const e=l??g;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function b(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),s=o[r].value;s!==t&&(l(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);