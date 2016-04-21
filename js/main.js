$(document).ready(function(){
    
    // Preloader
    $('#preloader-circle').css('transform', 'scale(0)');
    
    setTimeout(function(){
        $('.preloader').addClass('preloader-hide');}, 500);
    
});