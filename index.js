/* empty css                      */import{a as g,S as h,i as o}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();const L="https://pixabay.com/api/",b="50537892-ac7a1ace2e3791ae5c3aa87a3";async function l(s){const t={key:b,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await g.get(L,{params:t})).data}const d=document.querySelector(".gallery");let i;function u(){d.innerHTML=""}function f(s){const t=s.map(e=>`
        <li>
          <a class="gallery__item" href="${e.largeImageURL}">
            <img class="gallery__image" src="${e.webformatURL}" alt="${e.tags}" />
            <div class="info">
              <p><b>Likes:</b> ${e.likes}</p>
              <p><b>Views:</b> ${e.views}</p>
              <p><b>Comments:</b> ${e.comments}</p>
              <p><b>Downloads:</b> ${e.downloads}</p>
            </div>
          </a>
        </li>
      `).join("");d.insertAdjacentHTML("beforeend",t),i?i.refresh():i=new h(".gallery a")}const w=document.querySelector(".form"),m=document.querySelector(".loader");w.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t){o.error({message:"Please enter a search term!"});return}u(),p();try{const e=await l(t);e.hits.length===0?o.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):f(e.hits)}catch(e){o.error({message:`Error: ${e.message}`})}finally{y()}});function p(){m.classList.remove("hidden")}function y(){m.classList.add("hidden")}window.addEventListener("DOMContentLoaded",()=>{v()});async function v(){const s="nature";u(),p();try{const t=await l(s);f(t.hits)}catch(t){o.error({message:`Error: ${t.message}`})}finally{y()}}
//# sourceMappingURL=index.js.map
