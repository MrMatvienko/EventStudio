(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".burger-menu"),l=document.querySelector(".mobile-bar"),u=document.querySelectorAll(".mobile-bar-item a");c.addEventListener("click",function(){c.classList.toggle("active"),l.classList.toggle("is-hidden")});u.forEach(o=>{o.addEventListener("click",function(){c.classList.toggle("active"),l.classList.add("is-hidden")})});const a=document.querySelectorAll(".question-icon"),d=document.querySelectorAll(".question-answer");a.forEach(o=>{o.addEventListener("click",function(){const s=o.closest(".question-list-item").querySelector(".question-answer");d.forEach(r=>{if(r!==s){r.classList.remove("active"),r.style.maxHeight=null;const e=r.closest(".question-list-item").querySelector(".question-icon");e.style.transform="rotate(0deg)"}}),s.classList.toggle("active"),s.classList.contains("active")?(s.style.maxHeight=s.scrollHeight+"px",o.style.transform="rotate(180deg)"):(s.style.maxHeight=null,o.style.transform="rotate(0deg)")})});