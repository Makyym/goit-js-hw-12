import{a as F,S as v,i as c}from"./assets/vendor-CRCB-GUD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function h(i,o){const r=new URLSearchParams({key:"46092367-b3ded390d3bc77cfd15f53989",q:i,image_type:"photo",safesearch:!0,orientation:"horizontal",page:o,per_page:15});try{return(await F.get(`https://pixabay.com/api/?${r}`)).data}catch(t){console.log(t)}}const p=document.querySelector(".gallery-section"),l=document.querySelector(".load-btn"),g=document.querySelector("form"),m=g.elements.input;g.elements.button;const n=document.querySelector(".loader-element"),f=new v(".gallery-section a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});let a=1,y="",u=0;async function L(i){if(i.preventDefault(),a=1,l.classList.replace("is-visible","non-visible"),m.value.trim()==="")c.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:"",message:"Please fill in the input field",position:"topRight"});else{p.textContent="",n.classList.replace("non-visible","is-visible");const o=m.value.trim();try{let r=await h(o,a);if(r.hits.length===0){c.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.classList.replace("is-visible","non-visible");return}else{if(p.insertAdjacentHTML("beforeend",b(r.hits)),f.refresh(),n.classList.replace("is-visible","non-visible"),y=o,u=r.totalHits,p.insertAdjacentElement("afterend",n),u<15){c.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:!1,position:"topRight",message:"We're sorry, but you've reached the end of search results."}),l.classList.replace("is-visible","non-visible");return}l.classList.replace("non-visible","is-visible")}}catch(r){console.log(r)}}}g.addEventListener("submit",()=>L(event));l.addEventListener("click",async()=>{try{n.classList.replace("non-visible","is-visible");const o=Math.ceil(u/15);a+=1;const r=await h(y,a);n.classList.replace("is-visible","non-visible"),p.insertAdjacentHTML("beforeend",b(r.hits));const e=2*document.querySelector(".img-card").getBoundingClientRect().height;if(window.scrollBy({top:e,left:0,behavior:"smooth"}),f.refresh(),a===o){c.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:!1,position:"topRight",message:"We're sorry, but you've reached the end of search results."}),l.classList.replace("is-visible","non-visible");return}}catch(i){console.log(i)}});function b(i){return i.reduce((r,t)=>{const e=`<li class="img-card">
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
        </li>`;return r+e},"")}
//# sourceMappingURL=index.js.map
