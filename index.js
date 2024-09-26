import{a as b,S as F,i as c}from"./assets/vendor-CRCB-GUD.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function m(r,i){const s=new URLSearchParams({key:"46092367-b3ded390d3bc77cfd15f53989",q:r,image_type:"photo",safesearch:!0,orientation:"horizontal",page:i,per_page:15});try{return(await b.get(`https://pixabay.com/api/?${s}`)).data}catch(t){console.log(t)}}const n=document.querySelector(".gallery-section"),p=document.querySelector(".load-btn"),g=document.querySelector("form"),f=g.elements.input;g.elements.button;const a=document.querySelector(".loader-element"),d=new F(".gallery-section a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});let u=1,y="";function L(r){if(r.preventDefault(),f.value.trim()==="")c.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:"",message:"Please fill in the input field",position:"topRight"});else{n.textContent="",a.classList.replace("non-visible","is-visible");const i=f.value.trim();m(i,u).then(s=>{if(s.hits.length===0){c.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.classList.replace("is-visible","non-visible");return}else{n.insertAdjacentHTML("beforeend",h(s.hits)),d.refresh(),a.classList.replace("is-visible","non-visible"),p.classList.replace("non-visible","is-visible"),y=i;const e=2*document.querySelector(".img-card").getBoundingClientRect().height;window.scrollBy({top:e,behavior:"smooth"})}}).catch(s=>console.log(s))}}g.addEventListener("submit",()=>L(event));p.addEventListener("click",async()=>{try{u+=1;const r=await m(y,u);if(r.hits.length<15){n.insertAdjacentHTML("beforeend",h(r.hits)),d.refresh(),c.error({backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",position:"topCenter",messageColor:"#FFFFFF",icon:!1,position:"topRight",message:"We're sorry, but you've reached the end of search results."}),p.classList.replace("is-visible","non-visible");return}n.insertAdjacentHTML("beforeend",h(r.hits)),d.refresh()}catch(r){console.log(r)}});function h(r){return r.reduce((s,t)=>{const e=`<li class="img-card">
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
        </li>`;return s+e},"")}
//# sourceMappingURL=index.js.map
