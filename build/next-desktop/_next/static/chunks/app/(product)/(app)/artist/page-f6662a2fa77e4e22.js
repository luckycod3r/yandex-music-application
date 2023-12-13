(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7150,307,3953],{91078:function(t,e,a){Promise.resolve().then(a.bind(a,72062))},72062:function(t,e,a){"use strict";a.r(e);var s=a(8759),r=a(11769),i=a(48829),l=a(81661);e.default=()=>{let t=(0,r.useSearchParams)(),e=t.get("artistId");return e||(0,r.notFound)(),(0,s.jsx)(i.fp,{children:(0,s.jsx)(l.xA,{artistId:e})})}},52207:function(t,e,a){"use strict";a.r(e),a.d(e,{NavigationEvents:function(){return l}});var s=a(11769),r=a(99616),i=a(27951);let l=()=>{let t=(0,i.sv)(),e=(0,s.usePathname)(),a=(0,s.useSearchParams)();return(0,r.useEffect)(()=>{let s="".concat(e).concat(a.size>0?"?".concat(a):"");t.hit(s)},[e,a,t]),null}},17796:function(t,e,a){"use strict";a.r(e),a.d(e,{PrimaryPage:function(){return l}});var s=a(8759),r=a(99616),i=a(27951);let l=t=>{let{children:e}=t,a=(0,i.k6)();return(0,r.useEffect)(()=>{var t;(!(null==a?void 0:a.state)||(null==a?void 0:null===(t=a.state)||void 0===t?void 0:t.isLocationNotEqual(window.location.href)))&&(null==a||a.pushState({href:window.location.href,primaryPage:{pathname:window.location.pathname,query:window.location.search}}))},[]),(0,s.jsx)(r.Suspense,{children:e})}},95842:function(t,e,a){"use strict";a.r(e),a.d(e,{SecondaryPage:function(){return l}});var s=a(8759),r=a(99616),i=a(27951);let l=t=>{let{children:e,defaultPrimaryPage:a="/"}=t,l=(0,i.k6)();return(0,r.useEffect)(()=>{var t,e,s;if(!(null==l?void 0:l.state)||(null==l?void 0:null===(t=l.state)||void 0===t?void 0:t.isLocationNotEqual(window.location.href))){let t=null!==(s=null==l?void 0:null===(e=l.state)||void 0===e?void 0:e.data.primaryPage)&&void 0!==s?s:{pathname:a,query:""};null==l||l.pushState({href:window.location.href,primaryPage:t})}},[]),(0,s.jsx)(r.Suspense,{children:e})}},48829:function(t,e,a){"use strict";a.d(e,{YJ:function(){return s.PrimaryPage},fp:function(){return r.SecondaryPage}});var s=a(17796),r=a(95842);a(52207)},81661:function(t,e,a){"use strict";a.d(e,{xh:function(){return g},xA:function(){return s.ArtistPage}});var s=a(39148);a(47657);var r=a(96555),i=a(96431),l=a(29152),n=a(20380),o=a(75434),u=a(93909),c=a(30150),d=a(27951);let p=(t,e)=>(0,r.pj)({artist:(0,c.d)(t),lastMonthListeners:null==e?void 0:e.lastMonthListeners}),m=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,s=t;return t.length<a&&(s=s.concat(e)),s.map(l.H7).slice(0,a)},g=r.V5.model("Artist",{loadingState:r.V5.enumeration(Object.values(d.Gu)),meta:r.V5.maybeNull(n.b),popularTracks:r.V5.array(u.mv),lastRelease:r.V5.maybeNull(l.fm),similarArtists:r.V5.array(c.xh),popularAlbums:r.V5.array(l.fm),playlists:r.V5.array(o.EA),errorStatusCode:r.V5.maybeNull(r.V5.number)}).actions(t=>({getData:(0,r.ls)(function*(e){let{artistId:a}=e,{slides:s,experiments:n}=(0,r.yj)(t),{artistsResource:g,logger:_}=(0,r.dU)(t),f=n.checkExperiment(d.pe.WebNextArtistDisableLastReleases,"on"),h=n.checkExperiment(d.pe.WebNextArtistDisablePopularTracks,"on"),N=n.checkExperiment(d.pe.WebNextArtistDisableSimilarArtists,"on"),v=n.checkExperiment(d.pe.WebNextArtistDisablePopularAlbums,"on"),E=n.checkExperiment(d.pe.WebNextArtistDisablePlaylists,"on");if(t.loadingState!==d.Gu.PENDING)try{t.loadingState=d.Gu.PENDING;let{popularTracks:e,error:n,artist:_,stats:x,albums:k,playlists:A,alsoAlbums:C,similarArtists:S,lastReleases:T}=yield g.getBriefInfo({artistId:a,popularTracksCount:5,fetchPlaylistLikesCounts:!0});if("not-found"===n||(null==_?void 0:_.error)==="not-found"){t.errorStatusCode=i.CN.NOT_FOUND,t.loadingState=d.Gu.REJECT;return}if(t.meta=(0,r.pj)(p(_,x)),!f&&T&&T.length>0){let e=T[0];e&&k&&k.length>1&&(t.lastRelease=(0,r.pj)((0,l.H7)(e)))}!h&&e&&e.length>0&&(t.popularTracks=(0,r.pj)(e.slice(0,5).map(u.sZ))),!N&&S&&S.length>0&&(t.similarArtists=(0,r.pj)(S.slice(0,9).map(c.d))),v||(t.popularAlbums=(0,r.pj)(m(k,C,9))),!E&&A&&A.length>0&&(t.playlists=(0,r.pj)(A.map(o.Q9))),s.artistReset(),s.artistSlidesLoadingState===d.Gu.IDLE&&(yield s.getArtistSlides({artistId:a})),t.loadingState!==d.Gu.IDLE&&(t.loadingState=d.Gu.RESOLVE)}catch(e){("string"==typeof e||e instanceof Error)&&_.error(e),e instanceof i.du&&(e.statusCode===i.CN.NOT_FOUND||e.statusCode===i.CN.BAD_REQUEST)&&(t.errorStatusCode=i.CN.NOT_FOUND),t.loadingState!==d.Gu.IDLE&&(t.loadingState=d.Gu.REJECT)}}),reset(){t.loadingState=d.Gu.IDLE,t.meta=null,t.errorStatusCode=null,t.lastRelease=null,t.popularTracks=(0,r.pj)([]),t.similarArtists=(0,r.pj)([]),t.playlists=(0,r.pj)([])}})).views(t=>({get isLoading(){return t.loadingState===d.Gu.IDLE||t.loadingState===d.Gu.PENDING},get isPopularTracksExist(){return t.loadingState===d.Gu.IDLE||t.loadingState===d.Gu.PENDING||t.popularTracks.length>0},get popularAlbumsTitle(){var e,a;let s=null===(a=t.meta)||void 0===a?void 0:null===(e=a.artist)||void 0===e?void 0:e.counts;if(s&&s.albums>0&&s.albums<9&&s.compilations>0)return"Популярные альбомы и сборники";if(s&&s.albums>0)return"Популярные альбомы";return"Популярные сборники"},get isPopularAlbumsExists(){return t.loadingState===d.Gu.IDLE||t.loadingState===d.Gu.PENDING||t.popularAlbums.length>0},get isSimilarArtistsExist(){return t.loadingState===d.Gu.IDLE||t.loadingState===d.Gu.PENDING||t.similarArtists.length>0},get isPlaylistsExist(){return t.loadingState===d.Gu.IDLE||t.loadingState===d.Gu.PENDING||t.playlists&&t.playlists.length>0},get isLastReleaseExists(){return t.loadingState===d.Gu.IDLE||t.loadingState===d.Gu.PENDING||!!t.lastRelease},get isNotFound(){return t.loadingState===d.Gu.REJECT&&t.errorStatusCode===i.CN.NOT_FOUND}}))},39148:function(t,e,a){"use strict";a.r(e),a.d(e,{ArtistPage:function(){return A}});var s=a(8759),r=a(35338),i=a(33423),l=a(11769),n=a(99616),o=a(65244),u=a(7796),c=a(27287),d=a(71716),p=a(43400),m=a(23042),g=a(29152),_=a(20380),f=a(75434),h=a(93909),N=a(90271),v=a(27951),E=a(90779),x=a(42351),k=a.n(x);let A=(0,i.Pi)(t=>{var e,a,i;let{artistId:x}=t,A=(0,v.x5)({pageId:v.Rh.ARTIST,blockId:v.aU.ARTIST}),C=(0,v.uK)();C.get(v.Xt);let{artist:S,slides:T,experiments:y}=(0,v.oR)(),{formatMessage:L}=(0,o.Z)(),{ref:P,offsetY:R}=(0,c.e)(),j=(0,n.useMemo)(()=>{var t,e;return(0,v.XG)(null==S?void 0:null===(e=S.meta)||void 0===e?void 0:null===(t=e.artist)||void 0===t?void 0:t.averageColor)},[null==S?void 0:null===(a=S.meta)||void 0===a?void 0:null===(e=a.artist)||void 0===e?void 0:e.averageColor]),b=(0,n.useMemo)(()=>{if(void 0!==R){let t=R-17;return{"--average-color-background":j,transform:"translateY(".concat(R>=17?0:t,"px)"),opacity:1}}return{}},[R,!1,j]);(0,n.useEffect)(()=>()=>{S.id!==x&&S.reset()},[S,x]),S.loadingState===v.Gu.IDLE&&(0,n.use)(S.getData({artistId:x})),(0,v.NO)(S.loadingState===v.Gu.RESOLVE),S.isNotFound&&(0,l.notFound)();let D=(0,n.useMemo)(()=>{if(y.checkExperiment(v.pe.WebRewind2023,"on")&&T.artistItems.length>0)return"/rewind2023/artist/".concat(x)},[x,y,T.artistItems.length]),G=t=>({contextData:{type:u.Ak.Artist,meta:{id:Number(x)},from:A},queueParams:{index:S.popularTracks.findIndex(e=>e.id===t)},loadContextMeta:!0}),I=(0,n.useMemo)(()=>S.isLoading?(0,s.jsx)(m.KC,{className:k().header,coverRadius:"round"}):(0,s.jsx)(m.f3,{className:k().header,artistMeta:S.meta,coverLink:D,ref:P}),[S.isLoading,S.meta,D,P]);return(0,s.jsxs)(v.Lh,{pageId:v.Rh.ARTIST,children:[(0,s.jsx)("div",{className:k().averageColorBackground,style:b}),(0,s.jsxs)(d.t,{className:k().root,containerClassName:k().content,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(p.h,{}),I,(0,s.jsxs)("div",{className:k().recents,children:[S.isPopularTracksExist&&(0,s.jsxs)("div",{className:(0,r.W)(k().popularTracksBlock,{[k().popularTracksBlock_withLastRelease]:S.isLastReleaseExists}),children:[(0,s.jsx)(E.ti,{className:(0,r.W)(k().carouselContainer,k().important),title:L({id:"entity-names.popular-tracks"})}),(0,s.jsx)(E.RS,{className:(0,r.W)(k().popularTracksContainer,k().tracksContainer),isLoading:S.isLoading,variant:v.Lx.PLAYLIST,children:null===(i=S.popularTracks)||void 0===i?void 0:i.map((t,e)=>(0,s.jsx)(h.O2,{track:t,playContextParams:G(t.id),hasDuplicatesBefore:(0,N.BA)(S.popularTracks,t,e)},t.id))})]}),S.isLastReleaseExists&&(0,s.jsxs)("div",{className:k().lastReleaseBlock,children:[(0,s.jsx)(E.ti,{className:(0,r.W)(k().lastReleaseHeader,k().important),title:L({id:"entity-names.recently-release"})}),S.isLoading?(0,s.jsx)(E.hi,{className:k().lastReleaseCard}):(0,s.jsx)(g.rf,{className:k().lastReleaseCard,album:S.lastRelease})]})]}),(0,s.jsxs)("div",{className:k().carouselBlocks,children:[S.isPopularAlbumsExists&&(0,s.jsx)(g.wk,{headerClassName:k().carouselHeader,containerClassName:(0,r.W)(k().carouselContainer,k().important),albums:S.popularAlbums,isLoading:S.isLoading,title:S.popularAlbumsTitle}),S.isPlaylistsExist&&(0,s.jsx)(f.VD,{isLoading:S.isLoading,title:L({id:"entity-names.artist-playlist"}),playlists:S.playlists,containerClassName:(0,r.W)(k().carouselContainer,k().important),headerClassName:k().carouselHeader}),S.isSimilarArtistsExist&&(0,s.jsx)(E.HY,{title:L({id:"entity-names.similar-artists"}),isLoading:S.isLoading,headerClassName:k().carouselHeader,containerClassName:(0,r.W)(k().carouselContainer,k().important),children:S.similarArtists.map(t=>(0,s.jsx)(_.I,{artist:t,contentLinesCount:3},S.id))})]})]}),(0,s.jsx)(E.$_,{className:k().footer})]})]})})},47657:function(t,e,a){"use strict";a.r(e),a.d(e,{ArtistNotFoundPage:function(){return o}});var s=a(8759),r=a(33423),i=a(99616),l=a(2365),n=a(27951);let o=(0,r.Pi)(()=>{let{artist:t}=(0,n.oR)();return(0,i.useEffect)(()=>()=>{t.reset()},[t]),(0,s.jsx)(l.T,{})})},42351:function(t){t.exports={root:"Artist_root__K_jRw",averageColorBackground:"Artist_averageColorBackground__5iOpY",header:"Artist_header__I7G_m",content:"Artist_content__B8c8f",recents:"Artist_recents__Oj3Y3",popularTracksBlock:"Artist_popularTracksBlock__ETF5y",popularTracksBlock_withLastRelease:"Artist_popularTracksBlock_withLastRelease__0aHnG",popularTracksContainer:"Artist_popularTracksContainer__Yc6SW",tracksContainer:"Artist_tracksContainer__OPqVm",lastReleaseBlock:"Artist_lastReleaseBlock__bWGDw",carouselHeader:"Artist_carouselHeader__lVeWu",carouselContainer:"Artist_carouselContainer__8v2E_",important:"Artist_important__M0WDR",popularTracks:"Artist_popularTracks__IGPnd",lastReleaseHeader:"Artist_lastReleaseHeader__h30bq",lastReleaseCard:"Artist_lastReleaseCard__6eY78",carouselBlocks:"Artist_carouselBlocks__eQGOp",footer:"Artist_footer__B_78X"}},81643:function(t,e,a){"use strict";a.d(e,{d:function(){return r}});var s=a(59274);class r extends s.e{statusCode;constructor(t,e){super(t,{code:"E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE",cause:e.cause}),this.statusCode=e.statusCode,Object.setPrototypeOf(this,r.prototype)}}},59274:function(t,e,a){"use strict";a.d(e,{e:function(){return r}});var s=a(83993);class r extends s.y{name="HttpException";constructor(t="Http Client error",{code:e="E_HTTP_CLIENT",...a}={}){super(t,{code:e,...a}),Object.setPrototypeOf(this,r.prototype)}}},96431:function(t,e,a){"use strict";a.d(e,{du:function(){return i.d},CN:function(){return r}}),(s=r||(r={}))[s.NOT_FOUND=404]="NOT_FOUND",s[s.BAD_REQUEST=400]="BAD_REQUEST";var s,r,i=a(81643)}},function(t){t.O(0,[2498,7873,8316,8628,6499,7951,2565,7243,9107,4721,4657,4025,4164,1744],function(){return t(t.s=91078)}),_N_E=t.O()}]);
//# sourceMappingURL=page-f6662a2fa77e4e22.js.map