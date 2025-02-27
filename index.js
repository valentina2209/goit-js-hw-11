import{a as p,i as m,S as y}from"./assets/vendor-Dnf_KHwu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h="49079569-ff8624e89e8813a2e30953c9b",g="https://pixabay.com/api/",b=async(s,t=1)=>{const o={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:40};try{return(await p.get(g,{params:o})).data}catch(a){throw a}},u=document.querySelector(".gallery");let i=null;const L=()=>{u.innerHTML=""},q=s=>{const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:n,comments:d,downloads:f})=>`
      <li class="photo-card">
        <a href="${a}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes: ${r}</b></p>
          <p class="info-item"><b>Views: ${n}</b></p>
          <p class="info-item"><b>Comments: ${d}</b></p>
          <p class="info-item"><b>Downloads: ${f}</b></p>
        </div>
      </li>
      `).join("");u.insertAdjacentHTML("beforeend",t),i?i.refresh():i=new y(".gallery a",{captionsData:"alt",captionDelay:250})},w=()=>{document.querySelector(".loader").hidden=!1},l=()=>{document.querySelector(".loader").hidden=!0},c=s=>{m.error({title:"Error",message:s,position:"topRight"})},S=document.querySelector(".search-form");S.addEventListener("submit",async s=>{s.preventDefault();const t=s.currentTarget.query.value.trim();if(t===""){c("Please enter a search query.");return}L(),w();try{const o=await b(t);if(l(),o.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}q(o.hits)}catch(o){l(),c("Something went wrong. Please try again later."),console.error(o)}});
//# sourceMappingURL=index.js.map
