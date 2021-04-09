$(document).ready(function() {
   
    $('.menu_dx li').mouseenter(function() {
        $(this).children('.dropdown').addClass('active');
    });

    $('.menu_dx li').mouseleave(function() {
        $(this).children('.dropdown').removeClass('active');
    });

    $('.chevroned a').mouseenter(function() {
        $(this).children('i').removeClass('fa-chevron-down');
        $(this).children('i').addClass('fa-chevron-up');
    });

    $('.chevroned a').mouseleave(function() {
        $(this).children('i').removeClass('fa-chevron-up');
        $(this).children('i').addClass('fa-chevron-down');
    });

    $('.chevroned').mouseenter(function() {
        $(this).children('.dropdown').css('min-width', '100px');
    });
    
});









