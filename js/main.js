$(document).ready(function(){
    
    // Preloader
    $('#preloader-circle').css('transform', 'scale(0)');
    
    setTimeout(function(){
        $('.preloader').addClass('preloader-hide');
        $('#preloader-left, #preloader-right').css('border-width', '0');   
    }, 500);
});