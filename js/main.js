$(document).ready(function(){
    
// Preloader
    setTimeout(function(){
        
        $('#logo-box').css('top', '50%');
    
        $('#preloader-circle').css('transform', 'scale(0)');

        setTimeout(function(){
            $('.logo-left').addClass('logo-left-up');
            $('.logo-right').addClass('logo-right-down');
        }, 500);

        setTimeout(function(){
            $('#logo-box').hide();
            $('#preloader-left, #preloader-right').animate({borderRightWidth: 0, borderLeftWidth: 0},800);
        }, 1000);
    },300);
    
    
// Main
    $('#arrow-down, #check-out, #about-me-link').click(function(){
        $('html, body').animate({ scrollTop: $('#about-me').offset().top + 1}, 2000);
    });
    
    $('#kontakt').click(function(){
        $('html, body').animate({ scrollTop: $('#lets-work').offset().top}, 3000);
    });
    
    // Owl-carousel
    $(".owl-carousel").owlCarousel({
        items: 4,
        autoplay: true,
        loop: true,
    });
    
// Skrollr 
    if($(window).width() >= 768){
        var s = skrollr.init();
    }
    
// Let's work together
    
    $('#msg-form').submit(function(){
        

        var redBtn = $('#msg-form .blue-btn').addClass('red-btn');

        
        if($('#email').val() == ""){
            $('#email').addClass('red-line');
        }
        if($('#name').val() == ""){
            $('#name').addClass('red-line');
        }
        if($('#topic').val() == ""){
            $('#topic').addClass('red-line');
        }
        if($('textarea').val() == ""){
            $('textarea').addClass('red-line');
        }
        if(($('textarea').val() == "") || ($('#name').val() == "") || ($('#topic').val() == "") || ($('#email').val() == "") ) {
            redBtn
            return false
        };   
    });
    

    $('body').click(function(){
        $('.msg-input, textarea').removeClass('red-line');

        $('#msg-form .blue-btn').removeClass('red-btn');

    });
    
    
});