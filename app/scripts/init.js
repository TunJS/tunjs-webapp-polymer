
(function (window, document) {
 'use strict';
  var _polyfills = [];
  if ('Promise' in window &&
    'resolve' in window.Promise &&
    'reject' in window.Promise &&
    'all' in window.Promise &&
    'race' in window.Promise &&
    (function () {
      var resolve;
      new window.Promise(function (r) {
        resolve = r;
      });
      return typeof resolve === 'function';
    }())) {} else {
    // document.write('<script src="bower_components\/es6-promise\/promise.min.js"><\/script>');
    _polyfills.push('promise');
  }
  if ('fetch' in window) {} else {
    // document.write('<script src="bower_components\/fetch\/fetch.js"><\/script>');
    _polyfills.push('fetch');
  }
  if (_polyfills.length) {
    document.write('<script src="\/\/cdn.polyfill.io\/v1\/polyfill.min.js?features=' + _polyfills.join(',') + '"><\/script>'); // jshint ignore:line
  }
  if ('registerElement' in document && 'createShadowRoot' in HTMLElement.prototype && 'import' in document.createElement('link') && 'content' in document.createElement('template')) {
    (function () {
      function ready() {
        setTimeout(function () {
          document.dispatchEvent(new CustomEvent('WebComponentsReady', {
            bubbles: true
          }));
        });
      }
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        ready();
      } else {
        window.addEventListener('DOMContentLoaded', ready);
      }
    })();
  } else {
    document.write('<script src="bower_components\/webcomponentsjs\/webcomponents.min.js"><\/script>'); // jshint ignore:line
  }
  window.Polymer = window.Polymer || {};
  window.Polymer.dom = 'shadow';
})(window, window.document);
