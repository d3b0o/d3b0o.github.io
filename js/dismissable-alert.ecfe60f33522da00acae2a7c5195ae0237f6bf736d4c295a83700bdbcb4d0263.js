(()=>{(()=>{"use strict";Object.keys(localStorage).forEach(function(e){/^global-alert-/.test(e)&&document.documentElement.setAttribute("data-global-alert","closed")}),window.addEventListener("DOMContentLoaded",()=>{var e=document.getElementById("announcement");if(e!==null){var a=e.dataset.id;Object.keys(localStorage).forEach(function(t){/^global-alert-/.test(t)&&t!==a&&(localStorage.removeItem(t),document.documentElement.removeAttribute("data-global-alert"))}),e.addEventListener("closed.bs.alert",()=>{localStorage.setItem(a,"closed")})}})})();})();
/*!
 * Dismissable alert for Bootstrap based Hyas sites
 * Copyright 2021-2023 Hyas
 * Licensed under the MIT License
 */
