(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(195);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"About page")))}},191:function(e,t,n){var a;e.exports=(a=n(194))&&a.default||a},192:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(12),u=n.n(i),o=n(190),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(191),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var s=n(39);n.d(t,"parsePath",function(){return s.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},193:function(e){e.exports={data:{site:{siteMetadata:{title:"Web developer and chess lover"}}}}},194:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),u=n.n(i),o=n(42),c=n(1),l=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(o.a,{location:t,pageResources:n})};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l},195:function(e,t,n){"use strict";var a=n(193),r=n(0),i=n.n(r),u=n(12),o=n.n(u),c=n(197),l=n.n(c),d=n(192),s=function(e){return e.siteTitle,i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("h1",null,"A header")))},p=function(e){var t=e.children;return e.data,i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})};p.propTypes={children:o.a.node.isRequired},t.a=p}}]);
//# sourceMappingURL=component---src-pages-about-js-2645fc9fd4f18eddfea5.js.map