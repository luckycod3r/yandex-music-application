(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2601],{52601:function(e,s,r){Promise.resolve().then(r.bind(r,78435)),Promise.resolve().then(r.bind(r,90344)),Promise.resolve().then(r.bind(r,68638)),Promise.resolve().then(r.bind(r,61308)),Promise.resolve().then(r.bind(r,96355)),Promise.resolve().then(r.bind(r,75174)),Promise.resolve().then(r.bind(r,34575)),Promise.resolve().then(r.t.bind(r,95932,23)),Promise.resolve().then(r.t.bind(r,82333,23)),Promise.resolve().then(r.t.bind(r,70345,23)),Promise.resolve().then(r.t.bind(r,25747,23)),Promise.resolve().then(r.bind(r,75563)),Promise.resolve().then(r.bind(r,24747)),Promise.resolve().then(r.bind(r,77617)),Promise.resolve().then(r.bind(r,29751)),Promise.resolve().then(r.bind(r,48769)),Promise.resolve().then(r.bind(r,80730)),Promise.resolve().then(r.bind(r,76808)),Promise.resolve().then(r.bind(r,98805)),Promise.resolve().then(r.bind(r,96262)),Promise.resolve().then(r.bind(r,25891)),Promise.resolve().then(r.bind(r,52075)),Promise.resolve().then(r.bind(r,75715)),Promise.resolve().then(r.bind(r,50449)),Promise.resolve().then(r.bind(r,81822)),Promise.resolve().then(r.bind(r,66932)),Promise.resolve().then(r.bind(r,61367)),Promise.resolve().then(r.bind(r,47097)),Promise.resolve().then(r.bind(r,45896)),Promise.resolve().then(r.bind(r,48750)),Promise.resolve().then(r.bind(r,46172)),Promise.resolve().then(r.bind(r,23339)),Promise.resolve().then(r.bind(r,95168)),Promise.resolve().then(r.bind(r,39229)),Promise.resolve().then(r.bind(r,1610)),Promise.resolve().then(r.bind(r,57004)),Promise.resolve().then(r.bind(r,24706)),Promise.resolve().then(r.bind(r,82418)),Promise.resolve().then(r.bind(r,32453)),Promise.resolve().then(r.bind(r,28465)),Promise.resolve().then(r.bind(r,98136)),Promise.resolve().then(r.bind(r,11478)),Promise.resolve().then(r.bind(r,81282)),Promise.resolve().then(r.bind(r,45656)),Promise.resolve().then(r.bind(r,26265)),Promise.resolve().then(r.bind(r,1918)),Promise.resolve().then(r.bind(r,86185)),Promise.resolve().then(r.bind(r,53457)),Promise.resolve().then(r.bind(r,12670)),Promise.resolve().then(r.bind(r,14581)),Promise.resolve().then(r.bind(r,96437)),Promise.resolve().then(r.bind(r,15527)),Promise.resolve().then(r.bind(r,45015)),Promise.resolve().then(r.bind(r,94834)),Promise.resolve().then(r.bind(r,62923)),Promise.resolve().then(r.bind(r,13795)),Promise.resolve().then(r.bind(r,78190)),Promise.resolve().then(r.bind(r,46029)),Promise.resolve().then(r.bind(r,33066)),Promise.resolve().then(r.bind(r,5889)),Promise.resolve().then(r.bind(r,8425)),Promise.resolve().then(r.bind(r,82697)),Promise.resolve().then(r.bind(r,68814)),Promise.resolve().then(r.bind(r,51720)),Promise.resolve().then(r.bind(r,8752)),Promise.resolve().then(r.bind(r,47657)),Promise.resolve().then(r.bind(r,39148))},70345:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(e,s){for(var r in s)Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}(s,{suspense:function(){return i},NoSSR:function(){return o}}),r(1073),r(99616);let t=r(53518);function i(){let e=Error(t.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=t.NEXT_DYNAMIC_NO_SSR_CODE,e}function o(e){let{children:s}=e;return s}},39148:function(e,s,r){"use strict";r.r(s),r.d(s,{ArtistPage:function(){return N}});var t=r(8759),i=r(35338),o=r(33423),n=r(11769),a=r(99616),l=r(65244),d=r(7796),m=r(27287),c=r(71716),u=r(43400),v=r(23042),h=r(29152),b=r(20380),P=r(75434),_=r(93909),p=r(90271),k=r(27951),x=r(90779),C=r(42351),A=r.n(C);let N=(0,o.Pi)(e=>{var s,r,o;let{artistId:C}=e,N=(0,k.x5)({pageId:k.Rh.ARTIST,blockId:k.aU.ARTIST}),f=(0,k.uK)();f.get(k.Xt);let{artist:g,slides:R,experiments:j}=(0,k.oR)(),{formatMessage:T}=(0,l.Z)(),{ref:L,offsetY:E}=(0,m.e)(),B=(0,a.useMemo)(()=>{var e,s;return(0,k.XG)(null==g?void 0:null===(s=g.meta)||void 0===s?void 0:null===(e=s.artist)||void 0===e?void 0:e.averageColor)},[null==g?void 0:null===(r=g.meta)||void 0===r?void 0:null===(s=r.artist)||void 0===s?void 0:s.averageColor]),y=(0,a.useMemo)(()=>{if(void 0!==E){let e=E-17;return{"--average-color-background":B,transform:"translateY(".concat(E>=17?0:e,"px)"),opacity:1}}return{}},[E,!1,B]);(0,a.useEffect)(()=>()=>{g.id!==C&&g.reset()},[g,C]),g.loadingState===k.Gu.IDLE&&(0,a.use)(g.getData({artistId:C})),(0,k.NO)(g.loadingState===k.Gu.RESOLVE),g.isNotFound&&(0,n.notFound)();let I=(0,a.useMemo)(()=>{if(j.checkExperiment(k.pe.WebRewind2023,"on")&&R.artistItems.length>0)return"/rewind2023/artist/".concat(C)},[C,j,R.artistItems.length]),S=e=>({contextData:{type:d.Ak.Artist,meta:{id:Number(C)},from:N},queueParams:{index:g.popularTracks.findIndex(s=>s.id===e)},loadContextMeta:!0}),O=(0,a.useMemo)(()=>g.isLoading?(0,t.jsx)(v.KC,{className:A().header,coverRadius:"round"}):(0,t.jsx)(v.f3,{className:A().header,artistMeta:g.meta,coverLink:I,ref:L}),[g.isLoading,g.meta,I,L]);return(0,t.jsxs)(k.Lh,{pageId:k.Rh.ARTIST,children:[(0,t.jsx)("div",{className:A().averageColorBackground,style:y}),(0,t.jsxs)(c.t,{className:A().root,containerClassName:A().content,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(u.h,{}),O,(0,t.jsxs)("div",{className:A().recents,children:[g.isPopularTracksExist&&(0,t.jsxs)("div",{className:(0,i.W)(A().popularTracksBlock,{[A().popularTracksBlock_withLastRelease]:g.isLastReleaseExists}),children:[(0,t.jsx)(x.ti,{className:(0,i.W)(A().carouselContainer,A().important),title:T({id:"entity-names.popular-tracks"})}),(0,t.jsx)(x.RS,{className:(0,i.W)(A().popularTracksContainer,A().tracksContainer),isLoading:g.isLoading,variant:k.Lx.PLAYLIST,children:null===(o=g.popularTracks)||void 0===o?void 0:o.map((e,s)=>(0,t.jsx)(_.O2,{track:e,playContextParams:S(e.id),hasDuplicatesBefore:(0,p.BA)(g.popularTracks,e,s)},e.id))})]}),g.isLastReleaseExists&&(0,t.jsxs)("div",{className:A().lastReleaseBlock,children:[(0,t.jsx)(x.ti,{className:(0,i.W)(A().lastReleaseHeader,A().important),title:T({id:"entity-names.recently-release"})}),g.isLoading?(0,t.jsx)(x.hi,{className:A().lastReleaseCard}):(0,t.jsx)(h.rf,{className:A().lastReleaseCard,album:g.lastRelease})]})]}),(0,t.jsxs)("div",{className:A().carouselBlocks,children:[g.isPopularAlbumsExists&&(0,t.jsx)(h.wk,{headerClassName:A().carouselHeader,containerClassName:(0,i.W)(A().carouselContainer,A().important),albums:g.popularAlbums,isLoading:g.isLoading,title:g.popularAlbumsTitle}),g.isPlaylistsExist&&(0,t.jsx)(P.VD,{isLoading:g.isLoading,title:T({id:"entity-names.artist-playlist"}),playlists:g.playlists,containerClassName:(0,i.W)(A().carouselContainer,A().important),headerClassName:A().carouselHeader}),g.isSimilarArtistsExist&&(0,t.jsx)(x.HY,{title:T({id:"entity-names.similar-artists"}),isLoading:g.isLoading,headerClassName:A().carouselHeader,containerClassName:(0,i.W)(A().carouselContainer,A().important),children:g.similarArtists.map(e=>(0,t.jsx)(b.I,{artist:e,contentLinesCount:3},g.id))})]})]}),(0,t.jsx)(x.$_,{className:A().footer})]})]})})},47657:function(e,s,r){"use strict";r.r(s),r.d(s,{ArtistNotFoundPage:function(){return l}});var t=r(8759),i=r(33423),o=r(99616),n=r(2365),a=r(27951);let l=(0,i.Pi)(()=>{let{artist:e}=(0,a.oR)();return(0,o.useEffect)(()=>()=>{e.reset()},[e]),(0,t.jsx)(n.T,{})})},42351:function(e){e.exports={root:"Artist_root__K_jRw",averageColorBackground:"Artist_averageColorBackground__5iOpY",header:"Artist_header__I7G_m",content:"Artist_content__B8c8f",recents:"Artist_recents__Oj3Y3",popularTracksBlock:"Artist_popularTracksBlock__ETF5y",popularTracksBlock_withLastRelease:"Artist_popularTracksBlock_withLastRelease__0aHnG",popularTracksContainer:"Artist_popularTracksContainer__Yc6SW",tracksContainer:"Artist_tracksContainer__OPqVm",lastReleaseBlock:"Artist_lastReleaseBlock__bWGDw",carouselHeader:"Artist_carouselHeader__lVeWu",carouselContainer:"Artist_carouselContainer__8v2E_",important:"Artist_important__M0WDR",popularTracks:"Artist_popularTracks__IGPnd",lastReleaseHeader:"Artist_lastReleaseHeader__h30bq",lastReleaseCard:"Artist_lastReleaseCard__6eY78",carouselBlocks:"Artist_carouselBlocks__eQGOp",footer:"Artist_footer__B_78X"}}}]);
//# sourceMappingURL=2601-28a3242259f0ef96.js.map