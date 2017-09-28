(function () {
  'use strict';

  if (!window.addEventListener) return; // Check for IE9+.

  var options = INSTALL_OPTIONS;

  function doWork() {
    setTimeout(function() {
      location.reload(true);
    }, options.refresh_interval * 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', doWork);
  } else {
    doWork();
  }

  window.INSTALL_SCOPE = {
    setOptions: function setOptions (nextOptions) {
      options = nextOptions;
      doWork();
    }
  };
}())
