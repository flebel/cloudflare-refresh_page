(function () {
  'use strict';

  if (!window.addEventListener) return; // Check for IE9+.

  let options = INSTALL_OPTIONS;

  function doWork() {
    // TODO
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
