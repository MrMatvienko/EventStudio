(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const l=document.querySelector(".header");window.addEventListener("scroll",()=>{window.scrollY>400?l.style.backgroundColor="rgba(240, 238, 238, 0.9)":l.style.backgroundColor="rgba(240, 238, 238, 0.61)"});const i=document.querySelector(".burger-menu"),d=document.querySelector(".mobile-bar"),a=document.querySelectorAll(".mobile-bar-item a");i.addEventListener("click",function(){i.classList.toggle("active"),d.classList.toggle("is-hidden")});a.forEach(t=>{t.addEventListener("click",function(){i.classList.toggle("active"),d.classList.add("is-hidden")})});const f=document.querySelectorAll(".question-icon"),m=document.querySelectorAll(".question-answer");f.forEach(t=>{t.addEventListener("click",function(){const o=t.closest(".question-list-item").querySelector(".question-answer");m.forEach(r=>{if(r!==o){r.classList.remove("active"),r.style.maxHeight=null;const e=r.closest(".question-list-item").querySelector(".question-icon");e.style.transform="rotate(0deg)"}}),o.classList.toggle("active"),o.classList.contains("active")?(o.style.maxHeight=o.scrollHeight+"px",t.style.transform="rotate(180deg)"):(o.style.maxHeight=null,t.style.transform="rotate(0deg)")})});document.querySelectorAll(".selection-icon").forEach(t=>t.addEventListener("click",()=>{var o;const c=(o=t.closest(".selection-list-item"))==null?void 0:o.querySelector(".selection-sublist");c==null||c.classList.toggle("active"),t.classList.toggle("active")}));const y=document.querySelector(".help-btn"),u=document.querySelector(".help-test"),g=document.querySelector(".test-close-btn");y.addEventListener("click",function(){u.classList.remove("is-hidden"),document.body.style.overflow="hidden"});g.addEventListener("click",function(){u.classList.add("is-hidden"),document.body.style.overflow=""});