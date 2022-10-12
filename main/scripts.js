// Preloader
$(window).on('load', function() {
    $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
});



//Top scroll

$(document).ready(function(){
    // muestra el scroll oculto
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
        $('.scrollTopTop').fadeIn();
    } else {
        $('.scrollTopTop').fadeOut();

    }
});
//smooth scrolling to top
$('.scrollTopTop').click(function(){
    $('html,body').animate({scrollTop: 0}, 3000)//colocar animacion
})
});


//Baner

(function () {
    document.querySelector('.cross').addEventListener('click', function () {
      document.querySelector('.banner').style.display = "none";
    })
  })()


  //GALERIA JL

  $(document).ready(function() {
  var classList = ['spiderman', 'ironman', 'captain'];
  var marvelHeroSlider = new Swiper('.marvel-container .swiper-container', {
    loop: false,
    autoplay:true,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    on: {
      init: function() {
        var index = this.activeIndex; // current slide index
        $('.marvel-container')
          .removeClass(classList)
          .addClass(classList[index]);

        $('.marvel-container .img-wrapper')
          .removeClass('active')
          .eq(index)
          .addClass('active');
      }
    }
  }).on('slideChange', function() {
    var index = this.activeIndex; // current slide index
    $('.marvel-container')
      .removeClass(classList)
      .addClass(classList[index]);
    $('.marvel-container .img-wrapper')
      .removeClass('active')
      .eq(index)
      .addClass('active');
  });
  $(window).on('resize', function() {
    marvelHeroSlider.update();
  });
});








