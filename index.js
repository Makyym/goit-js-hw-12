import{a as b,S as F,i as c}from"./assets/vendor-CRCB-GUD.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function m(r,i){const o=new URLSearchParams({key:"46092367-b3ded390d3bc77cfd15f53989",q:r,image_type:"photo",safesearch:!0,orientation:"horizontal",page:i,per_page:15});try{return(await b.get(`https://pixabay.com/api/?${o}`)).data}catch(t){console.log(t)}}const l=document.querySelector(".gallery-section"),p=document.querySelector(".load-btn"),g=document.querySelector("form"),f=g.elements.input;g.elements.button;const n=document.querySelector(".loader-element"),d=new F(".gallery-section a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});let u=1,y="";function L(r){if(r.preventDefault(),f.value.trim()==="")c.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:"",message:"Please fill in the input field",position:"topRight"});else{l.textContent="",n.classList.replace("non-visible","is-visible");const i=f.value.trim();m(i,u).then(o=>{if(o.hits.length===0){c.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.classList.replace("is-visible","non-visible");return}else l.insertAdjacentHTML("beforeend",h(o.hits)),d.refresh(),n.classList.replace("is-visible","non-visible"),p.classList.replace("non-visible","is-visible"),y=i,l.insertAdjacentElement("afterend",n)}).catch(o=>console.log(o))}}g.addEventListener("submit",()=>L(event));p.addEventListener("click",async()=>{try{n.classList.replace("non-visible","is-visible"),u+=1;const r=await m(y,u);if(n.classList.replace("is-visible","non-visible"),r.hits.length<15){l.insertAdjacentHTML("beforeend",h(r.hits)),d.refresh(),c.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:!1,position:"topRight",message:"We're sorry, but you've reached the end of search results."}),p.classList.replace("is-visible","non-visible");return}l.insertAdjacentHTML("beforeend",h(r.hits));const o=2*document.querySelector(".img-card").getBoundingClientRect().height;window.scrollBy({top:o,left:0,behavior:"smooth"}),d.refresh()}catch(r){console.log(r)}});function h(r){return r.reduce((o,t)=>{const e=`<li class="img-card">
        <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
        <ul>
        <li>
        <h3>Likes</h3>
        <p>${t.likes}</p>
        </li>
        <li>
        <h3>Views</h3>
        <p>${t.views}</p>
        </li>
        <li>
        <h3>Comments</h3>
        <p>${t.comments}</p>
        </li>
        <li>
        <h3>Downloads</h3>
        <p>${t.downloads}</p>
        </li>
        </ul>
        </a>
        </li>`;return o+e},"")}
//# sourceMappingURL=index.js.map
