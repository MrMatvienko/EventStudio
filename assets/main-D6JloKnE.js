(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const l=document.querySelector(".header");window.addEventListener("scroll",()=>{window.scrollY>400?l.style.backgroundColor="rgba(240, 238, 238, 0.9)":l.style.backgroundColor="rgba(240, 238, 238, 0.61)"});const i=document.querySelector(".burger-menu"),u=document.querySelector(".mobile-bar"),d=document.querySelectorAll(".mobile-bar-item a");i.addEventListener("click",function(){i.classList.toggle("active"),u.classList.toggle("is-hidden")});d.forEach(t=>{t.addEventListener("click",function(){i.classList.toggle("active"),u.classList.add("is-hidden")})});const f=document.querySelectorAll(".question-icon"),m=document.querySelectorAll(".question-answer");f.forEach(t=>{t.addEventListener("click",function(){const s=t.closest(".question-list-item").querySelector(".question-answer");m.forEach(r=>{if(r!==s){r.classList.remove("active"),r.style.maxHeight=null;const e=r.closest(".question-list-item").querySelector(".question-icon");e.style.transform="rotate(0deg)"}}),s.classList.toggle("active"),s.classList.contains("active")?(s.style.maxHeight=s.scrollHeight+"px",t.style.transform="rotate(180deg)"):(s.style.maxHeight=null,t.style.transform="rotate(0deg)")})});document.querySelectorAll(".selection-icon").forEach(t=>t.addEventListener("click",()=>{var s;const c=(s=t.closest(".selection-list-item"))==null?void 0:s.querySelector(".selection-sublist");c==null||c.classList.toggle("active"),t.classList.toggle("active")}));const g=document.querySelector(".help-btn"),a=document.querySelector(".help-test"),y=document.querySelector(".test-close-btn");g.addEventListener("click",function(){a.classList.remove("is-hidden")});y.addEventListener("click",function(){a.classList.add("is-hidden")});