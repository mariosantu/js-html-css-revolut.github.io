$(document).ready(function() {
   
    $('.menu_dx li').mouseenter(function() {
        $(this).children('.dropdown').addClass('active');
    });

    $('.menu_dx li').mouseleave(function() {
        $(this).children('.dropdown').removeClass('active');
    });
    
});









