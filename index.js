import{a as m,S as d,i as y}from"./assets/vendor-DJBB7VhM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="58346314-fef5aebf609ba6e46751a0ff8",h="https://pixabay.com/api/";function L(s){return m.get(h,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".loader");function v(){f.classList.add("is-active")}function S(){f.classList.remove("is-active")}function q(s){const r=s.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:a,comments:u,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${i}" alt="${e}" />
        </a>
        <ul class="info">
          <li class="info-item">
            <p class="info-label">Likes</p>
            <p class="info-value">${t}</p>
          </li>
          <li class="info-item">
            <p class="info-label">Views</p>
            <p class="info-value">${a}</p>
          </li>
          <li class="info-item">
            <p class="info-label">Comments</p>
            <p class="info-value">${u}</p>
          </li>
          <li class="info-item">
            <p class="info-label">Downloads</p>
            <p class="info-value">${p}</p>
          </li>
        </ul>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function w(){c.innerHTML=""}const n=document.querySelector(".form");function l(s){y.error({message:s,position:"topRight"})}n.addEventListener("submit",s=>{s.preventDefault();const r=n.elements["search-text"].value.trim();if(r===""){l("Please enter a search query!");return}w(),v(),L(r).then(i=>{if(i.hits.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}q(i.hits)}).catch(()=>{l("Something went wrong. Please try again later.")}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
