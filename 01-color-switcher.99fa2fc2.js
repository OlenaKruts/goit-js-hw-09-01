!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.querySelector("body"),a=null;t.addEventListener("click",(function(r){t.setAttribute("disabled","disabled"),e.removeAttribute("disabled"),a=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.setAttribute("disabled","disabled"),e.addEventListener("click",(function(d){t.removeAttribute("disabled"),e.setAttribute("disabled","disabled"),clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.99fa2fc2.js.map
