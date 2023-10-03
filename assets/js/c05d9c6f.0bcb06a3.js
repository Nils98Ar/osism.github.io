"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[3390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(g,o(o({ref:t},m),{},{components:r})):n.createElement(g,o({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_label:"Manager",sidebar_position:10},o="Manager",s={unversionedId:"guides/upgrade-guides/manager",id:"guides/upgrade-guides/manager",title:"Manager",description:"Always read the release notes first to learn what has changed and what",source:"@site/docs/guides/upgrade-guides/manager.md",sourceDirName:"guides/upgrade-guides",slug:"/guides/upgrade-guides/manager",permalink:"/docs/guides/upgrade-guides/manager",draft:!1,editUrl:"https://github.com/osism/osism.github.io/tree/main/docs/guides/upgrade-guides/manager.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Manager",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Upgrade Guides",permalink:"/docs/guides/upgrade-guides/"},next:{title:"Network",permalink:"/docs/guides/upgrade-guides/network"}},p={},l=[],m={toc:l},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manager"},"Manager"),(0,a.kt)("p",null,"Always read the release notes first to learn what has changed and what\nadjustments are necessary"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sync the image versions in the configuration repository. It is important to do this so\nthat the correct versions are available in ",(0,a.kt)("inlineCode",{parentName:"p"},"environments/manager/images.yml"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"MANAGER_VERSION=6.0.0 gilt overlay  # you have to do this 2x\nMANAGER_VERSION=6.0.0 gilt overlay\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the new manager version in the configuration repository."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"yq -i '.manager_version = \"6.0.0\"' environments/manager/configuration.yml\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If ",(0,a.kt)("inlineCode",{parentName:"p"},"openstack_version")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ceph_version")," are set in ",(0,a.kt)("inlineCode",{parentName:"p"},"environments/manager/configuration.yml"),"\n(or anywhere else), they must be removed when using a stable release.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Commit and push changes in the configuration repository. Since everyone here has their own\nworkflows for changes to the configuration repository, only a generic example for Git."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'git commit -a -s -m "manager: use OSISM version 6.0.0"\ngit push\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update the configuration repository on the manager."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"osism apply configuration\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update the manager services on the manager."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"osism update manager\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If Ansible Vault was used to encrypt ",(0,a.kt)("inlineCode",{parentName:"li"},"environments/manager/secrets.yml"),", the parameter\n",(0,a.kt)("inlineCode",{parentName:"li"},"--ask-vault-pass")," is also appended."),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"osism update manager")," does not work yet, use ",(0,a.kt)("inlineCode",{parentName:"li"},"osism-update-manager")," instead.")))),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Refresh the facts cache."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"osism apply facts\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If Traefik is used on the management plane (",(0,a.kt)("inlineCode",{parentName:"p"},"traefik_enable: true")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"environments/infrastructure/configuration.yml"),")\nthen Traefik should also be upgraded directly."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"osism apply traefik\n")))))}c.isMDXComponent=!0}}]);