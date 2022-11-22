$(document).ready(function(){
    var lastWidth = $(window).width();
    $(window).resize(function(){
        if($(window).width()!=lastWidth){
            location.reload();
            lastWidth = $(window).width();
            return false;
        };
    });
    $('.portfolioslick').slick({
        rows: 1,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        verticalSwiping: true,
        draggable : true,
        infinite: false
    })
    $('.projectslick').slick({
        rows: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        draggable : true,
        infinite: true
    })
});