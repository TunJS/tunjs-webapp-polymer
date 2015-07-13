(function (window, document) {
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
})(window, window.document);
