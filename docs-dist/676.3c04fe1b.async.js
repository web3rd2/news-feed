"use strict";(self.webpackChunkfeed_sdk=self.webpackChunkfeed_sdk||[]).push([[676],{32676:function(oe,x,e){e.r(x),e.d(x,{CardWrapper:function(){return z},Description:function(){return T},Headline:function(){return A},LayoutWrapper:function(){return M},NewsFeed:function(){return q},NewsProvider:function(){return X}});var I=e(59400),s=e.n(I),o=e(67294),l=e(19521),R=e(17061),y=e.n(R),B=e(861),j=e.n(B),J=e(17156),Q=e.n(J),U=e(27424),g=e.n(U),V=e(6154),n=e(85893),C=(0,o.createContext)({articles:[],loadMore:function(){},isLoading:!1,error:""}),X=function(t){var u=t.apiKey,c=t.pageSize,i=c===void 0?10:c,v=t.initialCategory,f=v===void 0?"general":v,p=t.children,h=(0,o.useState)([]),a=g()(h,2),Z=a[0],_=a[1],ee=(0,o.useState)(!1),b=g()(ee,2),re=b[0],O=b[1],ne=(0,o.useState)(""),$=g()(ne,2),te=$[0],H=$[1],W=function(){var D=Q()(y()().mark(function E(){var F,K,G,m=arguments;return y()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return F=m.length>0&&m[0]!==void 0?m[0]:1,r.prev=1,O(!0),H(""),r.next=6,V.Z.get("https://newsapi.org/v2/top-headlines?country=us&category=".concat(f,"&pageSize=").concat(i,"&page=").concat(F,"&apiKey=").concat(u));case 6:K=r.sent,G=K.data,_(function(ie){return[].concat(j()(ie),j()(G.articles))}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(1),H(r.t0.message);case 14:return r.prev=14,O(!1),r.finish(14);case 17:case"end":return r.stop()}},E,null,[[1,11,14,17]])}));return function(){return D.apply(this,arguments)}}();(0,o.useEffect)(function(){W()},[f,u]);var ae=function(){W(Math.ceil(Z.length/i)+1)};return(0,n.jsx)(C.Provider,{value:{articles:Z,error:te,isLoading:re,loadMore:ae},children:p})},Y=function(){var t=(0,o.useContext)(C);if(!t)throw new Error("need inside NewsProvider");return t},w,N,S,L,P,M=l.ZP.div(w||(w=s()([`
  display: flex;
  flex-wrap: wrap;
  flex-direction: `,`;
`])),function(d){return d.isHorizontal?"row":"column"}),k=l.ZP.button(N||(N=s()([`
  margin: 20px;
`]))),z=l.ZP.div(S||(S=s()([`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
`]))),A=l.ZP.h3(L||(L=s()([`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px 0;
`]))),T=l.ZP.p(P||(P=s()([`
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 10px 0;
`]))),q=function(t){var u=t.theme,c=t.children,i=Y(),v=i.articles,f=i.isLoading,p=i.error,h=i.loadMore;return(0,n.jsxs)("div",{style:{backgroundColor:u.backgroundColor,color:u.color,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,n.jsx)(M,{isHorizontal:!0,children:v.map(function(a){return c?c(a):(0,n.jsxs)(z,{children:[(0,n.jsx)(A,{children:a.title}),(0,n.jsx)(T,{children:a.description}),(0,n.jsxs)("p",{children:["publishedAt: ",a.publishedAt]}),(0,n.jsx)("a",{href:a.url,children:"more"})]},a.title)})}),f&&(0,n.jsx)("div",{children:"loading news..."}),p&&(0,n.jsxs)("div",{children:["error: ",p]}),!f&&(0,n.jsx)(k,{type:"button",onClick:h,children:"load more"})]})}}}]);
