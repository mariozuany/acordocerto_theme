var AcordoCertoCustomBehaviors = {
    isHome: function() {
        return window.location.pathname.split('/').length <= 3;
    },
    
    hideSearchTagline: function() {
        var searchTagline = document.querySelector('.search__tagline');
        searchTagline.style.display = 'none'
    },

    init: function() {
        if (!AcordoCertoCustomBehaviors.isHome()) {
          AcordoCertoCustomBehaviors.hideSearchTagline();
        }
    }    
  }

  AcordoCertoCustomBehaviors.init();
