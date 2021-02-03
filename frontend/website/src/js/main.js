var AcordoCertoCustomBehaviors = {
    isHome: function() {
        return window.location.pathname.split('/').filter(function(item){
            return item
        }).length <= 3;
    },

    hideSearchTagline: function() {
        var searchTagline = document.querySelector('.search__tagline');
        searchTagline.style.display = 'none'
    },

    menuAction: function() {
        var mainMenu = document.querySelector('.button-menu');
        mainMenu.addEventListener('click', function (e){
            mainMenu.classList.toggle('icon-active');
        });
    },

    init: function() {
        if (!AcordoCertoCustomBehaviors.isHome()) {
          AcordoCertoCustomBehaviors.hideSearchTagline();
        }
        AcordoCertoCustomBehaviors.menuAction();
    }    
  }

  AcordoCertoCustomBehaviors.init();
