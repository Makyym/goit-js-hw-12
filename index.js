import{a as F,S as v,i as c}from"./assets/vendor-CRCB-GUD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function h(i,r){const o=new URLSearchParams({key:"46092367-b3ded390d3bc77cfd15f53989",q:i,image_type:"photo",safesearch:!0,orientation:"horizontal",page:r,per_page:15});try{return(await F.get(`https://pixabay.com/api/?${o}`)).data}catch(t){console.log(t)}}const p=document.querySelector(".gallery-section"),a=document.querySelector(".load-btn"),u=document.querySelector("form"),m=u.elements.input;u.elements.button;const n=document.querySelector(".loader-element"),f=new v(".gallery-section a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});let l=1,y="",g=0;async function L(i){if(i.preventDefault(),l=1,a.classList.replace("is-visible","non-visible"),m.value.trim()==="")c.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:"",message:"Please fill in the input field",position:"topRight"});else{p.textContent="",n.classList.replace("non-visible","is-visible");const r=m.value.trim();try{let o=await h(r,l);if(o.hits.length===0){c.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.classList.replace("is-visible","non-visible");return}else{if(p.insertAdjacentHTML("beforeend",b(o.hits)),f.refresh(),n.classList.replace("is-visible","non-visible"),y=r,g=o.totalHits,p.insertAdjacentElement("afterend",n),g<15){c.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:!1,position:"topRight",message:"We're sorry, but you've reached the end of search results."}),a.classList.replace("is-visible","non-visible");return}a.classList.replace("non-visible","is-visible")}}catch(o){console.log(o)}}}u.addEventListener("submit",()=>L(event));a.addEventListener("click",async()=>{try{n.classList.replace("non-visible","is-visible");const r=Math.ceil(g/15);l+=1,console.log(r),console.log(l),console.log(g);const o=await h(y,l);n.classList.replace("is-visible","non-visible"),p.insertAdjacentHTML("beforeend",b(o.hits));const e=2*document.querySelector(".img-card").getBoundingClientRect().height;if(window.scrollBy({top:e,left:0,behavior:"smooth"}),f.refresh(),l===r){c.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:!1,position:"topRight",message:"We're sorry, but you've reached the end of search results."}),a.classList.replace("is-visible","non-visible");return}}catch(i){console.log(i)}});function b(i){return i.reduce((o,t)=>{const e=`<li class="img-card">
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
