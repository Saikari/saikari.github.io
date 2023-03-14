(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function E(){}function ke(e,t){for(const n in t)e[n]=t[n];return e}function ye(e){return e()}function ue(){return Object.create(null)}function F(e){e.forEach(ye)}function oe(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Z;function te(e,t){return Z||(Z=document.createElement("a")),Z.href=t,e===Z.href}function be(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function Ce(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function de(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function D(e){return document.createTextNode(e)}function j(){return D(" ")}function qe(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function xe(e){return Array.from(e.childNodes)}function ne(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function x(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}let re;function I(e){re=e}const B=[],ve=[];let G=[];const ge=[],$e=Promise.resolve();let se=!1;function je(){se||(se=!0,$e.then(we))}function le(e){G.push(e)}const ee=new Set;let T=0;function we(){if(T!==0)return;const e=re;do{try{for(;T<B.length;){const t=B[T];T++,I(t),Le(t.$$)}}catch(t){throw B.length=0,T=0,t}for(I(null),B.length=0,T=0;ve.length;)ve.pop()();for(let t=0;t<G.length;t+=1){const n=G[t];ee.has(n)||(ee.add(n),n())}G.length=0}while(B.length);for(;ge.length;)ge.pop()();se=!1,ee.clear(),I(e)}function Le(e){if(e.fragment!==null){e.update(),F(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(le)}}function Ee(e){const t=[],n=[];G.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),G=t}const K=new Set;let A;function Se(){A={r:0,c:[],p:A}}function Pe(){A.r||F(A.c),A=A.p}function M(e,t){e&&e.i&&(K.delete(e),e.i(t))}function z(e,t,n,l){if(e&&e.o){if(K.has(e))return;K.add(e),A.c.push(()=>{K.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function Ae(e,t){const n={},l={},i={$$scope:1};let s=e.length;for(;s--;){const o=e[s],f=t[s];if(f){for(const r in o)r in f||(l[r]=1);for(const r in f)i[r]||(n[r]=f[r],i[r]=1);e[s]=f}else for(const r in o)i[r]=1}for(const o in l)o in n||(n[o]=void 0);return n}function Me(e){return typeof e=="object"&&e!==null?e:{}}function ie(e){e&&e.c()}function J(e,t,n,l){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),l||le(()=>{const o=e.$$.on_mount.map(ye).filter(oe);e.$$.on_destroy?e.$$.on_destroy.push(...o):F(o),e.$$.on_mount=[]}),s.forEach(le)}function Q(e,t){const n=e.$$;n.fragment!==null&&(Ee(n.after_update),F(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ne(e,t){e.$$.dirty[0]===-1&&(B.push(e),je(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function V(e,t,n,l,i,s,o,f=[-1]){const r=re;I(e);const u=e.$$={fragment:null,ctx:[],props:s,update:E,not_equal:i,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:ue(),dirty:f,skip_bound:!1,root:t.target||r.$$.root};o&&o(u.root);let m=!1;if(u.ctx=n?n(e,t.props||{},(g,d,...b)=>{const q=b.length?b[0]:d;return u.ctx&&i(u.ctx[g],u.ctx[g]=q)&&(!u.skip_bound&&u.bound[g]&&u.bound[g](q),m&&Ne(e,g)),d}):[],u.update(),m=!0,F(u.before_update),u.fragment=l?l(u.ctx):!1,t.target){if(t.hydrate){const g=xe(t.target);u.fragment&&u.fragment.l(g),g.forEach($)}else u.fragment&&u.fragment.c();t.intro&&M(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),we()}I(r)}class W{$destroy(){Q(this,1),this.$destroy=E}$on(t,n){if(!oe(n))return E;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(t){this.$$set&&!be(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Oe(e){let t;return{c(){t=v("div"),t.innerHTML=`<div class="firsthalf svelte-1onqnv8"><nav style="display:flex" class="svelte-1onqnv8"><div style="flex-grow:0.8" class="svelte-1onqnv8"><i class="fa-solid fa-code svelte-1onqnv8"></i>Saikari</div> 
            <div class="svelte-1onqnv8">About</div> 
            <div class="svelte-1onqnv8">Skills</div> 
            <div class="svelte-1onqnv8">Projects</div> 
            <div class="svelte-1onqnv8">Contacts</div></nav> 
        <img src="https://www.maavan.com/images/banner%20image.svg" style="float:right; width:300px;height:300px" alt=""/> 

        <div class="depth svelte-1onqnv8"><span class="svelte-1onqnv8">Portfolio</span><br/> 

            <h1 class="svelte-1onqnv8">Saikari</h1> 

            <div class="info svelte-1onqnv8"></div></div></div> 
    <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="svelte-1onqnv8"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop offset="0%" stop-color="rgba(42, 52, 67, 1)"></stop><stop offset="100%" stop-color="rgba(42, 52, 67, 1)"></stop></linearGradient></defs><path d="M0,196L48,179.7C96,163,192,131,288,106.2C384,82,480,65,576,114.3C672,163,768,278,864,310.3C960,343,1056,294,1152,261.3C1248,229,1344,212,1440,245C1536,278,1632,359,1728,383.8C1824,408,1920,376,2016,302.2C2112,229,2208,114,2304,130.7C2400,147,2496,294,2592,294C2688,294,2784,147,2880,114.3C2976,82,3072,163,3168,163.3C3264,163,3360,82,3456,49C3552,16,3648,33,3744,40.8C3840,49,3936,49,4032,106.2C4128,163,4224,278,4320,277.7C4416,278,4512,163,4608,138.8C4704,114,4800,180,4896,179.7C4992,180,5088,114,5184,130.7C5280,147,5376,245,5472,236.8C5568,229,5664,114,5760,114.3C5856,114,5952,229,6048,269.5C6144,310,6240,278,6336,228.7C6432,180,6528,114,6624,130.7C6720,147,6816,245,6864,294L6912,343L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z" fill="url(#sw-gradient-0)" style="transform:translate(0, 0px); opacity:1"></path></svg> 
    <div class="secondhalf svelte-1onqnv8" style="display:flex"><section class="profile svelte-1onqnv8" style="width:40%;font-family: &#39;Rubik Glitch&#39;, cursive;;color:#e5e5e5 ; margin-top:100px; "><img src="https://avatars.githubusercontent.com/u/109693307?v=4" alt="My Discord&#39;s profile image" class="svelte-1onqnv8"/>
            Saikari
            <nav class="contactsBar svelte-1onqnv8" style="display:flex"><div class="svelte-1onqnv8"><a href="https://github.com/Saikari"><i class="fa-brands fa-github svelte-1onqnv8"></i></a></div> 
                <div class="svelte-1onqnv8"><a href="https://avatars.githubusercontent.com/u/109693307?v=4"><i class="fa-brands fa-discord svelte-1onqnv8"></i></a></div></nav></section> 
        <section class="about svelte-1onqnv8" style="width: 55%"><h2 class="svelte-1onqnv8"><i class="fa-regular fa-circle-dot svelte-1onqnv8"></i> About me</h2>
            I&#39;m a hobbyist who likes to learn about software development and reverse engineering.</section></div>`,a(t,"class","container first active svelte-1onqnv8")},m(n,l){N(n,t,l)},p:E,i:E,o:E,d(n){n&&$(t)}}}function Te(e){return window.onload=function(){const t=document.getElementsByClassName("info")[0],n="C++/Python Developer",l=["C++/Python Developer"].map(s=>[n.search(s),n.search(s)+s.length]);let i=0;for(let s=0;s<n.length;s++)setTimeout(()=>{if(l.find(o=>o[0]===s||o[1]>s&&o[0]<s))return t.innerHTML+=`<span>${n[s]}</span>`;t.innerHTML+=n[s]},i+=50)},[]}class Be extends W{constructor(t){super(),V(this,t,Te,Oe,U,{})}}function he(e,t,n){const l=e.slice();return l[5]=t[n],l}function pe(e){let t,n=e[5]+"",l;return{c(){t=v("div"),l=D(n),a(t,"class","language svelte-lq1epr")},m(i,s){N(i,t,s),c(t,l)},p(i,s){s&8&&n!==(n=i[5]+"")&&ne(l,n)},d(i){i&&$(t)}}}function Ge(e){let t,n,l,i,s,o,f,r,u,m,g,d,b,q,h,P,p,w,_,S,ce,H,X,R,Y,ae,O=e[3],k=[];for(let y=0;y<O.length;y+=1)k[y]=pe(he(e,O,y));return{c(){t=v("div"),n=v("div"),l=j(),i=v("div"),s=v("div"),o=v("img"),u=j(),m=v("div"),g=v("span"),d=D("\u29BE "),b=D(e[1]),q=v("br"),h=j(),P=v("span"),p=D(e[2]),w=v("br"),_=j(),S=v("div");for(let y=0;y<k.length;y+=1)k[y].c();ce=j(),H=v("button"),H.textContent="Page",X=j(),R=v("link"),a(n,"class","bookmark svelte-lq1epr"),te(o.src,f=e[0])||a(o,"src",f),a(o,"alt",r="inside "+e[0]),a(o,"class","svelte-lq1epr"),x(g,"font-weight","normal"),x(g,"font-size","15px"),x(g,"left","5px"),x(g,"position","relative"),x(P,"font-size","13px"),x(P,"font-family","'Rubik Glitch', sans-serif"),a(m,"class","indepth svelte-lq1epr"),a(S,"class","languages svelte-lq1epr"),a(H,"class","svelte-lq1epr"),a(s,"class","insides svelte-lq1epr"),a(i,"id","project"),a(i,"class","svelte-lq1epr"),a(t,"class","coe svelte-lq1epr"),a(R,"href","https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap"),a(R,"rel","stylesheet")},m(y,L){N(y,t,L),c(t,n),c(t,l),c(t,i),c(i,s),c(s,o),c(s,u),c(s,m),c(m,g),c(g,d),c(g,b),c(m,q),c(m,h),c(m,P),c(P,p),c(m,w),c(s,_),c(s,S);for(let C=0;C<k.length;C+=1)k[C]&&k[C].m(S,null);c(s,ce),c(s,H),N(y,X,L),c(document.head,R),Y||(ae=qe(H,"click",function(){oe(location.href=e[4])&&(location.href=e[4]).apply(this,arguments)}),Y=!0)},p(y,[L]){if(e=y,L&1&&!te(o.src,f=e[0])&&a(o,"src",f),L&1&&r!==(r="inside "+e[0])&&a(o,"alt",r),L&2&&ne(b,e[1]),L&4&&ne(p,e[2]),L&8){O=e[3];let C;for(C=0;C<O.length;C+=1){const fe=he(e,O,C);k[C]?k[C].p(fe,L):(k[C]=pe(fe),k[C].c(),k[C].m(S,null))}for(;C<k.length;C+=1)k[C].d(1);k.length=O.length}},i:E,o:E,d(y){y&&$(t),Ce(k,y),y&&$(X),$(R),Y=!1,ae()}}}function He(e,t,n){let{image:l}=t,{name:i}=t,{description:s}=t,{languages:o}=t,{link:f}=t;return e.$$set=r=>{"image"in r&&n(0,l=r.image),"name"in r&&n(1,i=r.name),"description"in r&&n(2,s=r.description),"languages"in r&&n(3,o=r.languages),"link"in r&&n(4,f=r.link)},[l,i,s,o,f]}class Re extends W{constructor(t){super(),V(this,t,He,Ge,U,{image:0,name:1,description:2,languages:3,link:4})}}function me(e,t,n){const l=e.slice();return l[1]=t[n],l}function _e(e){let t,n;const l=[e[1]];let i={};for(let s=0;s<l.length;s+=1)i=ke(i,l[s]);return t=new Re({props:i}),{c(){ie(t.$$.fragment)},m(s,o){J(t,s,o),n=!0},p(s,o){const f=o&1?Ae(l,[Me(s[1])]):{};t.$set(f)},i(s){n||(M(t.$$.fragment,s),n=!0)},o(s){z(t.$$.fragment,s),n=!1},d(s){Q(t,s)}}}function De(e){let t,n,l,i,s,o,f,r,u,m,g,d,b,q=e[0],h=[];for(let p=0;p<q.length;p+=1)h[p]=_e(me(e,q,p));const P=p=>z(h[p],1,1,()=>{h[p]=null});return{c(){t=v("div"),n=v("div"),l=j(),i=de("svg"),s=de("path"),o=j(),f=v("div"),f.innerHTML=`<div style="text-align:center"><i class="fa-regular fa-square-check svelte-csvllv"></i> Skills
            <div class="skills svelte-csvllv"><div class="skill cpp svelte-csvllv"><img class="language svelte-csvllv" src="https://cdn.worldvectorlogo.com/logos/c.svg"/> 
                    <div class="progress cpp svelte-csvllv"></div></div> 
                <div class="skill cs svelte-csvllv"><img class="language svelte-csvllv" src="https://cdn.worldvectorlogo.com/logos/c--4.svg"/> 
                    <div class="progress cs svelte-csvllv"></div></div> 
                <div class="skill js svelte-csvllv"><img class="language svelte-csvllv" src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"/> 
                    <div class="progress js svelte-csvllv"></div></div> 
                <div class="skill python svelte-csvllv"><img class="language svelte-csvllv" src="https://cdn.worldvectorlogo.com/logos/python-5.svg"/> 
                    <div class="progress python svelte-csvllv"></div></div> 
                <div class="skill lua svelte-csvllv"><img class="language svelte-csvllv" src="https://cdn.worldvectorlogo.com/logos/lua-5.svg"/> 
                    <div class="progress lua svelte-csvllv"></div></div></div></div> 
        <div></div> 
        <div></div>`,r=j(),u=v("div"),m=v("h1"),m.innerHTML='<i class="fa-regular fa-square-check svelte-csvllv"></i> Projects',g=j(),d=v("div");for(let p=0;p<h.length;p+=1)h[p].c();a(n,"class","end svelte-csvllv"),a(s,"d","M0,64L48,74.7C96,85,192,107,288,106.7C384,107,480,85,576,85.3C672,85,768,107,864,138.7C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"),a(s,"fill","#455876"),a(s,"fill-opacity","1"),a(i,"viewBox","0 0 1440 320"),a(i,"xmlns","http://www.w3.org/2000/svg"),a(f,"class","skillsAndStuff svelte-csvllv"),x(f,"display","flex"),x(f,"flex-direction","column"),a(m,"class","svelte-csvllv"),a(d,"class","projects"),x(d,"display","grid"),x(d,"padding-top","30px"),x(d,"grid-template-columns","50% 3fr"),x(u,"text-align","center"),a(t,"class","container second svelte-csvllv"),x(t,"background","#202833")},m(p,w){N(p,t,w),c(t,n),c(t,l),c(t,i),c(i,s),c(t,o),c(t,f),c(t,r),c(t,u),c(u,m),c(u,g),c(u,d);for(let _=0;_<h.length;_+=1)h[_]&&h[_].m(d,null);b=!0},p(p,[w]){if(w&1){q=p[0];let _;for(_=0;_<q.length;_+=1){const S=me(p,q,_);h[_]?(h[_].p(S,w),M(h[_],1)):(h[_]=_e(S),h[_].c(),M(h[_],1),h[_].m(d,null))}for(Se(),_=q.length;_<h.length;_+=1)P(_);Pe()}},i(p){if(!b){for(let w=0;w<q.length;w+=1)M(h[w]);b=!0}},o(p){h=h.filter(Boolean);for(let w=0;w<h.length;w+=1)z(h[w]);b=!1},d(p){p&&$(t),Ce(h,p)}}}function Ie(e){return[[{image:"https://avatars.githubusercontent.com/u/109693637?s=200&v=4",name:"Coming soon . . .",description:"Coming soon . . .",languages:["C/C++"],link:"Coming soon . . ."}]]}class ze extends W{constructor(t){super(),V(this,t,Ie,De,U,{})}}function Fe(e){let t,n,l,i,s,o,f,r,u,m,g;return r=new Be({}),m=new ze({}),{c(){t=v("link"),n=v("link"),l=v("link"),i=v("script"),i.textContent='<link href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap" rel="stylesheet">',o=j(),f=v("main"),ie(r.$$.fragment),u=j(),ie(m.$$.fragment),a(t,"rel","preconnect"),a(t,"href","https://fonts.googleapis.com"),a(n,"rel","preconnect"),a(n,"href","https://fonts.gstatic.com"),a(n,"crossorigin",""),a(l,"href","https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap"),a(l,"rel","stylesheet"),a(i,"crossorigin","anonymous"),te(i.src,s="https://kit.fontawesome.com/24814b69dd.js")||a(i,"src",s)},m(d,b){c(document.head,t),c(document.head,n),c(document.head,l),c(document.head,i),N(d,o,b),N(d,f,b),J(r,f,null),c(f,u),J(m,f,null),g=!0},p:E,i(d){g||(M(r.$$.fragment,d),M(m.$$.fragment,d),g=!0)},o(d){z(r.$$.fragment,d),z(m.$$.fragment,d),g=!1},d(d){$(t),$(n),$(l),$(i),d&&$(o),d&&$(f),Q(r),Q(m)}}}class Ze extends W{constructor(t){super(),V(this,t,null,Fe,U,{})}}new Ze({target:document.getElementById("app")});
