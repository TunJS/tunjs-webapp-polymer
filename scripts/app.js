window.MEETUP_KEY="5c4b1d264f3925541e45676d73106f1a",window.GOOGLE_PLUS_KEY="AIzaSyDIeycbdMumGfVW36NPu5r-DgmFQBPxGnM",function(e){"use strict";var t=e.querySelector("#app");t.displayInstalledToast=function(){e.querySelector("#caching-complete").show()},t.addEventListener("dom-change",function(){console.log("dom-change"),e.body.removeAttribute("placeholder")}),window.addEventListener("WebComponentsReady",function(){}),t.onMenuSelect=function(){var t=e.querySelector("#paperDrawerPanel");t&&t.closeDrawer()},fetch.utils={},fetch.utils.queryParams=function(e){return"?"+Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")},fetch.utils.checkStatus=function(e){return console.log("checkStatus",e),e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.statusText))},fetch.utils.parseJSON=function(e){return e.json()}}(document);