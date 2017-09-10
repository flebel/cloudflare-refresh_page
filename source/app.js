(function () {
  'use strict';

  if (!window.addEventListener) return; // Check for IE9+.

  let options = INSTALL_OPTIONS;

  function doWork() {
    // TODO: message https://github.com/CloudflareApps/Ideas/issues/263
    setTimeout(function() {
      location.reload(true);
    }, options.refresh_countdown * 1000);
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
