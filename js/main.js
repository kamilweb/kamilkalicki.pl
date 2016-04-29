$(document).ready(function(){
    
     // Preloader
    $('#preloader-circle').css('transform', 'scale(0)');
    
    $('#logo-box').css('top', '50%');
    
    setTimeout(function(){
        $('.logo-left').addClass('logo-left-up');
        $('.logo-right').addClass('logo-right-down');
    }, 500);
    
    setTimeout(function(){
        $('#preloader-left, #preloader-right').addClass('preloader-hide');
        $('#logo-box').hide();
    }, 1000);
    
    
    // Main
    
    
    
    $('i#msg-icon').click(function(){
        $('html, body').animate({ scrollTop: $('#lets-work').offset().top}, 1000);
    });
    
    $('#arrow-down, #check-out').click(function(){
        $('html, body').animate({ scrollTop: $('#about-me').offset().top + 1}, 1500);
    });
    
    // Owl carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTime: 3000,
        margin: 20,
        autoWidth: true,
        center: 1,
        dots: false,
        nav: false
    });
    
    // Let's work together
    $('#msg-form').submit(function(){
        if(($('#email').val() == "") || ($('textarea').val() == "") || ($('#name').val() == "") || ($('#phone').val() == "") || ($('#topic').val() == ""))
        {
            alert("Uzupełnij wymagane pola");
            return false;
        }
    });
    
});