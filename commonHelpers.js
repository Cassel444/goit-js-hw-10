import"./assets/styles-a1d85631.js";import{f as m,i as p}from"./assets/vendor-77e16229.js";const e={input:document.querySelector("#datetime-picker"),button:document.querySelector("button[data-start]"),day:document.querySelector("span[data-days]"),hour:document.querySelector("span[data-hours]"),minute:document.querySelector("span[data-minutes]"),second:document.querySelector("span[data-seconds]")};let d;e.button.disabled=!0;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const o=Date.now();t[0]<=o?(p.show(f),e.button.disabled=!0):(e.button.disabled=!1,d=t[0])}},f={title:"ERROR",titleColor:"#FFFFFF",titleSize:"24px",message:"Please choose a date in the future",messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#B51B1B",timeout:4e3,overlay:!0,overlayClose:!0,position:"topRight"};function y({days:t,hours:o,minutes:n,seconds:r}){e.day.textContent=`${t}`,e.hour.textContent=`${o}`,e.minute.textContent=`${n}`,e.second.textContent=`${r}`}e.button.addEventListener("click",b);function b(){const t=setInterval(()=>{const o=Date.now(),n=d-o;if(n<=0){clearInterval(t),e.input.disabled=!1,e.button.disabled=!1;return}const{days:r,hours:i,minutes:s,seconds:u}=F(n);y({days:r,hours:i,minutes:s,seconds:u}),e.input.disabled=!0,e.button.disabled=!0},1e3)}function F(t){const s=a(Math.floor(t/864e5)),u=a(Math.floor(t%864e5/36e5)),c=a(Math.floor(t%864e5%36e5/6e4)),l=a(Math.floor(t%864e5%36e5%6e4/1e3));return{days:s,hours:u,minutes:c,seconds:l}}function a(t){return String(t).padStart(2,"0")}m("#datetime-picker",h);
//# sourceMappingURL=commonHelpers.js.map
