!function(){"use strict";const e=document.getElementById("toggle-icon"),t=document.getElementById("overlay"),i=document.getElementById("menu"),a=document.getElementsByTagName("body")[0],n=document.querySelector("#texto-container"),s=document.querySelector(".overlay-texto"),r=(document.getElementById("btn-leia-mais"),document.querySelector("#informes-nav")),l=document.querySelector("#ferramentas-nav");if(document.getElementById("no-exist"),document.getElementById("btn-leia-mais")){const d=document.getElementById("btn-leia-mais");function m(){n.style.height="auto",s.style.display="none",d.style.display="none"}d.addEventListener("click",m),(n.innerText.length<426||screen.width>=1024)&&(n.style.height="auto",s.style.display="none",d.style.display="none")}function c(){i.classList.remove("active"),t.style.visibility="hidden",a.style.overflow="visible",e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Abrir menu")}r.addEventListener("click",(e=>{r.classList.contains("active")?(r.classList.remove("active"),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-label","Abrir submenu"),r.nextElementSibling.style.marginTop="0rem",t.style.visibility="hidden"):(r.classList.add("active"),r.setAttribute("aria-expanded","true"),r.setAttribute("aria-label","Fechar submenu"),t.style.visibility="visible",screen.width<1279&&(r.nextElementSibling.style.marginTop="8.25rem"))})),l.addEventListener("click",(e=>{l.classList.contains("active-ferramentas")?(l.classList.remove("active-ferramentas"),l.nextElementSibling.style.marginTop="0rem",l.setAttribute("aria-expanded","false"),l.setAttribute("aria-label","Abrir submenu"),t.style.visibility="hidden"):(l.setAttribute("aria-expanded","true"),l.setAttribute("aria-label","Fechar submenu"),l.classList.add("active-ferramentas"),t.style.visibility="visible",screen.width<1279&&(l.nextElementSibling.style.marginTop="26.5rem"))})),e.addEventListener("click",(function(n){i.classList.contains("active")?c():(e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","Fechar menu"),t.style.visibility="visible",i.classList.add("active"),a.style.overflow="hidden",n.currentTarget.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","Fechar menu"))})),t.addEventListener("click",(function(e){c(),r.classList.remove("active"),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-label","Abrir submenu"),r.nextElementSibling.style.marginTop="0rem",l.classList.remove("active-ferramentas"),l.nextElementSibling.style.marginTop="0rem",l.setAttribute("aria-expanded","false"),l.setAttribute("aria-label","Abrir submenu")}))}();
//# sourceMappingURL=bundle.js.map
