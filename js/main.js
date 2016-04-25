$(document).ready(function(){
    
    var heroHeight = $('#hero').outerHeight();
    
     $(document).scroll(function(){
        if ($('#hero').scrollTop() >= 100) {
            $('body').animate({scrollTop: heroHeight}, 1000);
        }
    });
    
    $('.inactive-a').click(function(){
        event.preventDefault();
    });
    
    $('#arrow-down, #check').click(function(){
        $('body').animate({ scrollTop: heroHeight}, 1000);
    });
    
    // Preloader
    $('#preloader-circle').css('transform', 'scale(0)');
    
    setTimeout(function(){
        $('.preloader').addClass('preloader-hide');
        $('#preloader-left, #preloader-right').css('border-width', '0');   
    }, 500);
});