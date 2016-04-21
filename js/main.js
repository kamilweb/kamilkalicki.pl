$(document).ready(function(){
    
    // Preloader
    $('#preloader-circle').css('transform', 'scale(0)');
    
    setTimeout(function(){
        $('.preloader').addClass('preloader-hide');
        $('#preloader-left').css('left', '-100%'); 
        $('#preloader-right').css('border-width', '0');   
    }, 500);
    
    setTimeout(function(){
        $('#preloader-left, #preloader-right').hide();
    },1300);
    
    
});