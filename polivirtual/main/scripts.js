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

/*
AOS.init({
    easing: 'ease',
    duration: 1000,
    once: true
  });*/
