(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{bb51:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("v-row",[o("v-col",{staticClass:"mt-12 mb-2 mx-6",attrs:{cols:"12"}},[o("div",{staticClass:"gradient-background non-touch clip-text"},[o("div",{staticClass:"text-subtitle-2 font-weight-bold"},[t._v(" The Most Iconic Portfolio Website Lol xD ")]),o("v-tooltip",{attrs:{top:"",transition:"slide-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[o("div",t._g(t._b({class:(t.ismobile?" text-h2 ":" text-h1 ")+" underhover point-cursor font-weight-black",on:{click:function(e){return t.goToUrl("https://shaaan.tk")}}},"div",s,!1),i),[t._v(" Shan.tk ")])]}}])},[o("span",[t._v(" Visit Now Immediately ")])]),o("div",{staticClass:"text-h6 font-weight-bold"},[t._v(" Next big feat? Let's Get that Done ! ")])],1),o("div",{staticClass:"text-body-2"},[o("span",{staticClass:"font-weight-light"},[t._v("Project Codename: ")]),o("span",{staticClass:"font-weight-bold cyan--text"},[t._v("“ Mistaken-delicacy ”")])])]),o("v-col",{staticClass:"non-touch",attrs:{cols:"12"}},[o("div",{staticClass:"text-subtitle-1 mx-5 font-weight-bold"},[t._v(" Utilizing Next Gen Technologies "),o("v-icon",{staticClass:"mx-1",attrs:{color:"error"}},[t._v("mdi-web")])],1),o("div",{staticClass:"text-subtitle-1 mx-3 font-weight-bold"},[o("span",{staticClass:"mx-2"},[t._v(" Uses ")]),o("span",{staticClass:"icon"},t._l(t.techIcons,(function(e,i){return o("v-tooltip",{key:i,attrs:{top:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(i){var s=i.on,n=i.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:"",large:!t.ismobile},on:{click:function(o){return t.goToUrl(e.link)}}},"v-btn",n,!1),s),[o("v-icon",{attrs:{color:e.color}},[t._v(" "+t._s(e.icon)+" ")])],1)]}}],null,!0)},[o("span",[t._v(" "+t._s(e.tip)+" ")])])})),1),o("span",{staticClass:"text-h5 mx-1"},[t._v(" and also.... ")]),o("span",[o("v-tooltip",{attrs:{top:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[o("v-btn",t._g(t._b({attrs:{large:!t.ismobile,icon:""},on:{click:function(e){return t.goToUrl(t.accountDetails.link)}}},"v-btn",s,!1),i),[o("v-icon",{attrs:{color:"primary"}},[t._v(" "+t._s(t.accountDetails.icon)+" ")])],1)]}}])},[o("span",[t._v(t._s(t.accountDetails.tip))])])],1)])]),o("v-col",{staticClass:"my-0",attrs:{cols:"12"}},[o("v-divider")],1),o("v-col",{attrs:{cols:"12"}},[o("v-img",{attrs:{src:"https://media.giphy.com/media/NUwoRZzHc2Bws/giphy.gif","max-height":t.ismobile?230:300}})],1),o("v-col",{attrs:{id:"home-brief",cols:"12 mx-4"}},[o("div",{staticClass:"text-h5 underhover non-touch font-weight-bold my-1"},[t._v(" Brief ")]),o("div",{staticClass:"text-body-1"},[t._v(" "+t._s(t.project_desc)+" ")])]),o("v-col",{attrs:{cols:"12"}},[o("v-img",{attrs:{src:"https://media.giphy.com/media/3o72FkiKGMGauydfyg/giphy.gif","max-height":t.ismobile?230:300}})],1),o("v-col",{attrs:{id:"home-current-status",cols:"12 mx-4"}},[o("div",{staticClass:"text-h5 underhover non-touch font-weight-bold my-1"},[t._v(" Project Status ")]),o("div",{staticClass:"text-body-1"},[t._v(" "+t._s(t.project_status)+" ")])])],1)],1)},s=[],n=o("dfce"),a={name:"Home",data:function(){return{accountDetails:{icon:"mdi-account-tie",tip:"A Developer like Me",link:"https://shaaan.tk/"},nav_drawer_icons:[{icon:"mdi-artstation",name:"Breif",id:"#home-brief"},{icon:"mdi-sign-real-estate",name:"Project Status",id:"#home-current-status"}],project_desc:"I am Super Excited to Announce that this is 'The' Most Comprehensive Portfolio Website Ever Created by a Developer. I have Created this Website with Developers in Mind. I will Have Many Tools/Services that will be Integrated inside the Same Hood to Help Developers in Many of the Tasks in Creating a Website. After Finishing the Website, this will be a Goto tool for any Developer for Complete Website Tools like Wireframing, Color Scheming, Gradient Tools, Design Tools & Examples. I will Have a Complete Blog, Gallery Integrated. We will also Have a Developer Careers Page, So that Enthusiastic and Skilled Developers Can get a Job.",project_status:"Currently the Project is Under Work-in-Progress. I will Get Everything Up and Running smoothly. Already this project has Spanned around 350+ Hours."}},components:{},methods:{goToUrl:function(t){window.open(t)}},computed:{ismobile:function(){return Object(n["a"])()},techIcons:function(){return[{icon:"mdi-vuejs",tip:"Vue Js",color:"green",link:"https://vuejs.org"},{icon:"mdi-vuetify",tip:"Vuetify Framework",color:"blue",link:"https://vuetifyjs.com/"},{icon:"mdi-nodejs",tip:"Nodejs Server",color:"green",link:"https://nodejs.org/"},{icon:"mdi-api",tip:"Express API",color:"yellow",link:"https://expressjs.com/"},{icon:"mdi-database",tip:"MongoDB Database",color:"red",link:"https://mongodb.com/"}]}},beforeMount:function(){this.$state.navdrawericons=this.nav_drawer_icons}},r=a,l=o("2877"),c=o("6544"),d=o.n(c),v=o("8336"),h=o("62ad"),u=o("ce7e"),p=o("132d"),m=o("adda"),g=o("0fd9"),b=o("3a2f"),f=Object(l["a"])(r,i,s,!1,null,null,null);e["default"]=f.exports;d()(f,{VBtn:v["a"],VCol:h["a"],VDivider:u["a"],VIcon:p["a"],VImg:m["a"],VRow:g["a"],VTooltip:b["a"]})}}]);
//# sourceMappingURL=home.1c580c90.js.map