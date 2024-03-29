
      $(document).ready(function() {
        $('#slides').lightSlider({
        item:6,
        loop:true,
        // slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        pager: false,
        autoWidth: false,
        keyPress: true,
        auto: true,
        pauseOnHover: true,
        responsive : [
          {
                breakpoint:1200,
                settings: {
                    item:7,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:800,
                settings: {
                    item:5,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:3,
                    slideMove:1
                  }
            }
        ]
    });  
  });

  $(document).ready(function() {
    $('#clearanceSlides').lightSlider({
    item:6,
    loop:true,
    // slideMove:2,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed:600,
    pager: false,
    autoWidth: false,
    keyPress: true,
    auto: true,
    pauseOnHover: true,
    responsive : [
      {
            breakpoint:1200,
            settings: {
                item:7,
                slideMove:1,
                slideMargin:6,
              }
        },
        {
            breakpoint:800,
            settings: {
                item:5,
                slideMove:1,
                slideMargin:6,
              }
        },
        {
            breakpoint:480,
            settings: {
                item:3,
                slideMove:1
              }
        }
    ]
});  
});


$(document).ready(function() {
  $('#product').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      thumbItem:5,
      slideMargin:0,
      enableDrag: false,
      currentPagerPosition:'left',
      onSliderLoad: function(el) {
          el.lightGallery({
              selector: '#imageGallery .lslide'
          });
      }   
  });  
});