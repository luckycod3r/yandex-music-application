(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5674],{45674:function(e,t,i){Promise.resolve().then(i.bind(i,78435)),Promise.resolve().then(i.bind(i,90344)),Promise.resolve().then(i.bind(i,68638)),Promise.resolve().then(i.bind(i,61308)),Promise.resolve().then(i.bind(i,96355)),Promise.resolve().then(i.bind(i,75174)),Promise.resolve().then(i.bind(i,34575)),Promise.resolve().then(i.t.bind(i,95932,23)),Promise.resolve().then(i.t.bind(i,82333,23)),Promise.resolve().then(i.t.bind(i,70345,23)),Promise.resolve().then(i.t.bind(i,25747,23)),Promise.resolve().then(i.bind(i,75563)),Promise.resolve().then(i.bind(i,24747)),Promise.resolve().then(i.bind(i,77617)),Promise.resolve().then(i.bind(i,29751)),Promise.resolve().then(i.bind(i,48769)),Promise.resolve().then(i.bind(i,80730)),Promise.resolve().then(i.bind(i,76808)),Promise.resolve().then(i.bind(i,98805)),Promise.resolve().then(i.bind(i,96262)),Promise.resolve().then(i.bind(i,25891)),Promise.resolve().then(i.bind(i,52075)),Promise.resolve().then(i.bind(i,75715)),Promise.resolve().then(i.bind(i,50449)),Promise.resolve().then(i.bind(i,81822)),Promise.resolve().then(i.bind(i,66932)),Promise.resolve().then(i.bind(i,61367)),Promise.resolve().then(i.bind(i,47097)),Promise.resolve().then(i.bind(i,45896)),Promise.resolve().then(i.bind(i,48750)),Promise.resolve().then(i.bind(i,46172)),Promise.resolve().then(i.bind(i,23339)),Promise.resolve().then(i.bind(i,95168)),Promise.resolve().then(i.bind(i,39229)),Promise.resolve().then(i.bind(i,1610)),Promise.resolve().then(i.bind(i,57004)),Promise.resolve().then(i.bind(i,24706)),Promise.resolve().then(i.bind(i,82418)),Promise.resolve().then(i.bind(i,32453)),Promise.resolve().then(i.bind(i,28465)),Promise.resolve().then(i.bind(i,98136)),Promise.resolve().then(i.bind(i,11478)),Promise.resolve().then(i.bind(i,81282)),Promise.resolve().then(i.bind(i,45656)),Promise.resolve().then(i.bind(i,26265)),Promise.resolve().then(i.bind(i,1918)),Promise.resolve().then(i.bind(i,86185)),Promise.resolve().then(i.bind(i,53457)),Promise.resolve().then(i.bind(i,12670)),Promise.resolve().then(i.bind(i,14581)),Promise.resolve().then(i.bind(i,96437)),Promise.resolve().then(i.bind(i,15527)),Promise.resolve().then(i.bind(i,45015)),Promise.resolve().then(i.bind(i,94834)),Promise.resolve().then(i.bind(i,62923)),Promise.resolve().then(i.bind(i,33066)),Promise.resolve().then(i.bind(i,5889)),Promise.resolve().then(i.bind(i,8425)),Promise.resolve().then(i.bind(i,82697)),Promise.resolve().then(i.bind(i,68814)),Promise.resolve().then(i.bind(i,51720)),Promise.resolve().then(i.bind(i,79486)),Promise.resolve().then(i.bind(i,79265))},70345:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{suspense:function(){return s},NoSSR:function(){return n}}),i(1073),i(99616);let r=i(53518);function s(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function n(e){let{children:t}=e;return t}},29152:function(e,t,i){"use strict";i.d(t,{rf:function(){return r.AlbumCard},fm:function(){return c},wk:function(){return l},H7:function(){return b}});var r=i(81822),s=i(8759),n=i(99616),o=i(90779);let a=e=>{let{forwardRef:t,title:i,description:n,albums:a,isLoading:l,className:m,containerClassName:u,headerClassName:d}=e;return(0,s.jsx)(o.HY,{className:m,headerClassName:d,containerClassName:u,isLoading:l,ref:t,title:i,description:n,children:null==a?void 0:a.map(e=>(0,s.jsx)(r.AlbumCard,{album:e,contentLinesCount:3},e.id))})},l=(0,n.forwardRef)((e,t)=>(0,s.jsx)(a,{forwardRef:t,...e}));var m=i(96555),u=i(14594),d=i(30150);let c=u.dp.props({artists:m.V5.maybe(m.V5.array(d.xh))}).views(e=>({get artistNames(){var t;return null===(t=e.artists)||void 0===t?void 0:t.map(e=>e.name).join(", ")}})),b=e=>{let t=e.artists.map(e=>(0,d.d)(e));return(0,m.pj)({...(0,u.ym)(e),artists:t})}},81822:function(e,t,i){"use strict";i.r(t),i.d(t,{AlbumCard:function(){return p}});var r=i(8759),s=i(35338),n=i(33423),o=i(99616),a=i(65244),l=i(7796),m=i(23463),u=i(15527),d=i(14077),c=i(33066),b=i(14581),v=i(45656),h=i(96437),A=i(1918),_=i(14594),x=i(30150),P=i(27951),C=i(90779),g=i(75008),f=i.n(g);let p=(0,n.Pi)(e=>{let{className:t,children:i,album:n,contentLinesCount:g}=e,p=(0,P.x5)(),{isFuture:k}=(0,C.AL)(),{formatMessage:N}=(0,a.Z)(),L=(0,_.SB)(n),{sendLikeSearchFeedback:j,sendNavigateSearchFeedback:E,sendPlaySearchFeedback:y}=(0,P.sA)(),R=n.type===m.VZ.SINGLE?N({id:"entity-names.single"}):void 0,I=(0,P.tN)([n.year,R,n.version]),w=n.contentWarning===m.F1.EXPLICIT?c.ExplicitMarkVariant.E:null,S=(0,o.useMemo)(()=>N({id:"entity-names.album-name"},{albumName:n.title}),[n.title,N]),{isPlaying:M,togglePlay:O}=(0,P.qm)({playContextParams:{contextData:{type:l.Ak.Album,meta:{id:n.id},from:p},loadContextMeta:!0}}),T=(0,o.useCallback)(e=>{e.stopPropagation(),e.preventDefault()},[]),G=(0,o.useCallback)(()=>{null==E||E()},[E]),[B,D]=(0,o.useState)(!1),W=(0,o.useCallback)(()=>{B||M||(D(!0),null==y||y()),O()},[M,B,y,O]),[z,X]=(0,o.useState)(!1),F=(0,o.useCallback)(()=>{z||n.isLiked||(X(!0),null==j||j()),L()},[n.isLiked,L,z,j]),U=(0,o.useMemo)(()=>k?(0,r.jsx)(u.Button,{className:(0,s.W)(f().icon,f().control),"aria-label":N({id:"interface-actions.context-menu"}),icon:(0,r.jsx)(b.Icon,{size:"xxs",variant:"more"}),size:"s",radius:"round",onClick:T}):null,[k,T,N]),V=(0,o.useMemo)(()=>(0,r.jsx)(h.Paper,{className:f().cover,radius:"s",withShadow:!0,children:(0,r.jsxs)(C.rU,{className:f().coverLink,href:"/album/".concat(n.id),"aria-label":n.title,onClick:G,children:[(0,r.jsx)(v.Image,{className:f().image,src:n.coverUri,size:200,fit:"cover",alt:S,withAvatarReplace:!0}),(0,r.jsx)(d.EF,{className:f().controls,playControl:(0,r.jsx)(C.JM,{className:(0,s.W)(f().playButton,f().control),buttonVariant:"default",withHover:!1,iconSize:"l",variant:"filled",onClick:W,isPlaying:M,disabled:!n.isAvailable}),likeControl:(0,r.jsx)(C.dJ,{isLiked:n.isLiked,onClick:F,variant:"default",size:"s",iconSize:"xxs",className:f().control}),menuControl:U})]})}),[n.id,n.title,n.coverUri,n.isAvailable,n.isLiked,G,S,W,M,F,U]);return(0,r.jsxs)(d.m7,{className:(0,s.W)(f().root,t),"aria-label":S,explicitMark:w,title:(0,r.jsx)(A.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",lineClamp:2,children:(0,r.jsx)(C.rU,{className:f().titleLink,href:"/album/".concat(n.id),onClick:G,children:n.title})}),contentLinesCount:g,view:V,description:(0,r.jsx)(x.jO,{className:f().artists,artists:n.artists,lineClamp:1,linkClassName:f().artistLink,captionSize:"s"}),children:[I&&(0,r.jsx)(A.Caption,{className:f().addition,variant:"div",type:"entity",size:"s",weight:"medium",lineClamp:1,children:I}),i]})})},33614:function(e,t,i){"use strict";var r,s;i.d(t,{l:function(){return r}}),(s=r||(r={})).TRACK="track",s.TEXT="text"},79486:function(e,t,i){"use strict";i.r(t),i.d(t,{AlbumPage:function(){return f}});var r=i(8759),s=i(35338),n=i(33423),o=i(11769),a=i(99616),l=i(65244),m=i(2814),u=i(7796),d=i(27287),c=i(1918),b=i(43400),v=i(23042),h=i(29152),A=i(93909),_=i(27951),x=i(90779),P=i(33614),C=i(20180),g=i.n(C);let f=(0,n.Pi)(e=>{var t;let{albumId:i}=e,n=(0,_.x5)({pageId:_.Rh.ALBUM,blockId:_.aU.ALBUM}),C=(0,a.useRef)(0),f=(0,_.uK)(),{notify:p}=(0,_.d$)();f.get(_.Xt);let{album:k,experiments:N}=(0,_.oR)(),{formatMessage:L}=(0,l.Z)(),j=(0,a.useMemo)(()=>{var e;return(0,_.XG)(null==k?void 0:null===(e=k.meta)||void 0===e?void 0:e.averageColor)},[null==k?void 0:null===(t=k.meta)||void 0===t?void 0:t.averageColor]),{ref:E,offsetY:y}=(0,d.e)(),R=(0,a.useMemo)(()=>{if(void 0!==y){let e=y-17;return{"--average-color-background":j,transform:"translateY(".concat(y>=17?0:e,"px)"),opacity:1}}return{}},[y,!1,j]);(0,a.useEffect)(()=>()=>{k.id!==i&&(k.reset(),C.current=0)},[k,i]),(0,a.useEffect)(()=>{k.isAlbumLoadingError&&!k.isNotFound&&C&&0===C.current&&(p((0,r.jsx)(x.Q,{error:L({id:"album-errors.error-during-loading-album"})}),{containerId:_.W$.ERROR}),C.current++),(k.otherArtistAlbums.loadingState===_.Gu.REJECT||k.latestGenreAlbums.loadingState===_.Gu.REJECT)&&C&&0===C.current&&(p((0,r.jsx)(x.Q,{error:L({id:"album-errors.error-during-loading-similar-albums"})}),{containerId:_.W$.ERROR}),C.current++)},[k.isAlbumLoadingError,k.isNotFound,k.latestGenreAlbums.loadingState,k.otherArtistAlbums.loadingState,L,p]);let I=(0,a.useMemo)(()=>k.isAlbumLoading||k.isAlbumLoadingError?(0,r.jsx)(v.KC,{className:g().header}):(0,r.jsx)(v.hx,{album:k.meta,className:g().header,"aria-labelledby":"virtual-grid-header",ref:E}),[k.isAlbumLoading,k.isAlbumLoadingError,k.meta,E]),w=(0,a.useMemo)(()=>({Header:()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.h,{}),I]}),Footer:()=>(0,r.jsxs)("div",{className:g().footerContainer,children:[(0,r.jsxs)("div",{children:[k.isOtherAlbumVersionsExist&&(0,r.jsx)(h.wk,{className:g().carousel,containerClassName:(0,s.W)(g().carouselContainer,g().important),isLoading:k.isAlbumLoading,title:L({id:"entity-names.other-album-versions"}),albums:k.otherAlbumVersions}),k.isLatestGenreAlbumsExist&&(0,r.jsx)(h.wk,{className:g().carousel,containerClassName:(0,s.W)(g().carouselContainer,g().important),isLoading:k.isLatestGenreAlbumsLoading,title:L({id:"entity-names.new-albums-in-genre"}),albums:k.latestGenreAlbums.items}),k.isOtherArtistAlbumsExist&&(0,r.jsx)(h.wk,{className:g().carousel,containerClassName:(0,s.W)(g().carouselContainer,g().important),isLoading:k.isOtherArtistAlbumsLoading,title:L({id:"entity-names.other-albums-of-artist"}),albums:k.otherArtistAlbums.items})]}),(0,r.jsx)(x.$_,{className:g().footer})]})}),[I,k.isOtherAlbumVersionsExist,k.isAlbumLoading,k.otherAlbumVersions,k.isLatestGenreAlbumsExist,k.isLatestGenreAlbumsLoading,k.latestGenreAlbums.items,k.isOtherArtistAlbumsExist,k.isOtherArtistAlbumsLoading,k.otherArtistAlbums.items,L]),S=(0,a.useCallback)(e=>{let t=[];for(let i=e.startIndex;i<=e.endIndex;i++){let e=k.items[i];(null==e?void 0:e.type)===P.l.TRACK&&(null==e?void 0:e.loadingState)===_.Gu.IDLE&&t.push(e.id)}t.length&&k.getTracks({trackIds:t})},[k]);k.loadingState===_.Gu.IDLE&&(0,a.use)(k.getData({albumId:i})),(0,_.NO)(k.loadingState===_.Gu.RESOLVE),k.isNotFound&&(0,o.notFound)();let M=N.checkExperiment(_.pe.WebNextAlbumDisableTracks,"on"),O=M?0:k.items.length||10;return(0,r.jsxs)(_.Lh,{pageId:_.Rh.ALBUM,children:[(0,r.jsx)("div",{className:g().averageColorBackground,style:R}),(0,r.jsx)(x.Wv,{className:(0,s.W)(g().root,g().important),listClassName:g().content,customComponents:w,totalCount:O,itemContentCallback:e=>{var t,i;let o=null==k?void 0:null===(t=k.items)||void 0===t?void 0:t[e];if(!o)return(0,r.jsx)(x.DX,{className:g().shimmerItem,variant:_.Lx.ALBUM});if(!(null==o?void 0:o.data))switch(null==o?void 0:o.type){case P.l.TEXT:return(0,r.jsx)(x.AH,{className:g().shimmerItem});case P.l.TRACK:return(0,r.jsx)(x.DX,{className:g().shimmerItem,variant:_.Lx.ALBUM})}switch(null==o?void 0:o.type){case P.l.TRACK:return(0,r.jsx)(A.RJ,{track:o.data,position:o.position,albumArtists:null==k?void 0:null===(i=k.meta)||void 0===i?void 0:i.artists,playContextParams:{contextData:{type:u.Ak.Album,meta:{id:k.meta.id},from:n},queueParams:{index:k.trackIndexInContext.get(o.id)}}});case P.l.TEXT:return(0,r.jsx)("div",{className:(0,s.W)(g().shimmerItem,g().textItem),children:(0,r.jsx)(c.Caption,{variant:"span",type:"entity",size:"m",weight:"medium",className:g().text,children:(0,r.jsx)(m.Z,{id:"entity-names.disk-number",values:{number:o.data}})})})}},onGetDataByRange:S,debounceDurationInMs:300,initialItemCount:O})]})})},79265:function(e,t,i){"use strict";i.r(t),i.d(t,{AlbumNotFoundPage:function(){return l}});var r=i(8759),s=i(33423),n=i(99616),o=i(2365),a=i(27951);let l=(0,s.Pi)(()=>{let{album:e}=(0,a.oR)();return(0,n.useEffect)(()=>()=>{e.reset()},[e]),(0,r.jsx)(o.T,{})})},75008:function(e){e.exports={root:"AlbumCard_root__vP6k4",controls:"AlbumCard_controls__yuO40",cover:"AlbumCard_cover__zXmdl",coverLink:"AlbumCard_coverLink___ZD1S",image:"AlbumCard_image__Mm55s",titleLink:"AlbumCard_titleLink__u_WLG",artists:"AlbumCard_artists__phKco",artistLink:"AlbumCard_artistLink__uPR_2",playButton:"AlbumCard_playButton__mYK9R",control:"AlbumCard_control__qx7Xh"}},20180:function(e){e.exports={root:"Album_root__Q0lER",important:"Album_important__BgPFO",averageColorBackground:"Album_averageColorBackground__Azuso",header:"Album_header__AooR_",content:"Album_content__lB0Uw",footerContainer:"Album_footerContainer__FmHR2",carousel:"Album_carousel__XJnod",carouselContainer:"Album_carouselContainer__7NJck",textItem:"Album_textItem__fRm1d",text:"Album_text__qHJw_",shimmerItem:"Album_shimmerItem__Qbpj3",footer:"Album_footer__9zwOl"}}}]);
//# sourceMappingURL=5674-4899dce334256c3b.js.map