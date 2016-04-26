$(document).ready(function(){
    
     // Preloader
    $('#preloader-circle').css('transform', 'scale(0)');
    
    $('#logo-box').css('top', '50%');
    
    setTimeout(function(){
        $('.logo-left').addClass('logo-left-up');
        $('.logo-right').addClass('logo-right-down');
    }, 500);
    
    setTimeout(function(){
        $('.preloader').addClass('preloader-hide');
        $('#preloader-left, #preloader-right').css('border-width', '0');
        $('#logo-box').hide();
    }, 1000);
    
    
    // Main
    
    $('.inactive-a').click(function(){
        event.preventDefault();
    });
    
    $('#arrow-down, #check-out').click(function(){
        $('body').animate({ scrollTop: $('#about-me').offset().top + 1}, 1000);
    });
});