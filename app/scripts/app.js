window.MEETUP_KEY = '5c4b1d264f3925541e45676d73106f1a';

window.GOOGLE_PLUS_KEY = 'AIzaSyDIeycbdMumGfVW36NPu5r-DgmFQBPxGnM';

(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.displayInstalledToast = function () {
    document.querySelector('#caching-complete').show();
  };

  app._is = function (route, value) {
    return route === value;
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function () {
    // ...
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function () {
    // imports are loaded and elements have been registered
  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function () {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel) {
      drawerPanel.closeDrawer();
    }
  };

  fetch.utils = {};

  fetch.utils.queryParams = function queryParams(params) {
    return '?' + Object.keys(params).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
  };

  fetch.utils.checkStatus = function checkStatus(response) {
    console.log('checkStatus', response);
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  };

  fetch.utils.parseJSON = function parseJSON(response) {
    return response.json();
  };

})(document);
