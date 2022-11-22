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
        infinite: false,
        pauseOnHover:false,
        pauseOnFocus: false,
    })
    $('.project .projectslick .project1 .buttons .button:nth-child(1)').click(function(){
        $(this).css('background','#000');
        $(this).css('color','#FFF');
        $('.project .projectslick .project1 .buttons .button:nth-child(2)').css('background','#FFF');
        $('.project .projectslick .project1 .buttons .button:nth-child(2)').css('color','#000');
        $('.project .projectslick .project1 .buttons .button:nth-child(3)').css('background','#FFF');
        $('.project .projectslick .project1 .buttons .button:nth-child(3)').css('color','#000');
        $('.project .projectslick .project1 .pimage').css('opacity','0').stop().attr('src','././프로젝트이미지/네이버영화/PC.png').animate({opacity:1},1000);
    })
    $('.project .projectslick .project1 .buttons .button:nth-child(2)').click(function(){
        $(this).css('background','#000');
        $(this).css('color','#FFF');
        $('.project .projectslick .project1 .buttons .button:nth-child(1)').css('background','#FFF');
        $('.project .projectslick .project1 .buttons .button:nth-child(1)').css('color','#000');
        $('.project .projectslick .project1 .buttons .button:nth-child(3)').css('background','#FFF');
        $('.project .projectslick .project1 .buttons .button:nth-child(3)').css('color','#000');
        $('.project .projectslick .project1 .pimage').css('opacity','0').stop().attr('src','././프로젝트이미지/네이버영화/Tablet.png').animate({opacity:1},1000);
    })
    $('.project .projectslick .project1 .buttons .button:nth-child(3)').click(function(){
        $(this).css('background','#000');
        $(this).css('color','#FFF');
        $('.project .projectslick .project1 .buttons .button:nth-child(1)').css('background','#FFF');
        $('.project .projectslick .project1 .buttons .button:nth-child(1)').css('color','#000');
        $('.project .projectslick .project1 .buttons .button:nth-child(2').css('background','#FFF');
        $('.project .projectslick .project1 .buttons .button:nth-child(2)').css('color','#000');
        $('.project .projectslick .project1 .pimage').css('opacity','0').stop().attr('src','././프로젝트이미지/네이버영화/Mobile.JPG').animate({opacity:1},1000);
    })
    $('.project .projectslick .project2 .buttons .button:nth-child(1)').click(function(){
        $(this).css('background','#000');
        $(this).css('color','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(2)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(2)').css('color','#000');
        $('.project .projectslick .project2 .buttons .button:nth-child(3)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(3)').css('color','#000');
        $('.project .projectslick .project2 .buttons .button:nth-child(4)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(4)').css('color','#000');
        $('.project .projectslick .project2 .buttons .button:nth-child(5)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(5)').css('color','#000');
        $('.project .projectslick .project2 .pimage').css('opacity','0').stop().attr('src','././프로젝트이미지/로지텍G/Main.png').animate({opacity:1},1000);
    })
    $('.project .projectslick .project2 .buttons .button:nth-child(2)').click(function(){
        $(this).css('background','#000');
        $(this).css('color','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(1)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(1)').css('color','#000');
        $('.project .projectslick .project2 .buttons .button:nth-child(3)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(3)').css('color','#000');
        $('.project .projectslick .project2 .buttons .button:nth-child(4)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(4)').css('color','#000');
        $('.project .projectslick .project2 .buttons .button:nth-child(5)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(5)').css('color','#000');
        $('.project .projectslick .project2 .pimage').css('opacity','0').stop().attr('src','././프로젝트이미지/로지텍G/Sub4.png').animate({opacity:1},1000);
    })
    $('.project .projectslick .project2 .buttons .button:nth-child(3)').click(function(){
        $(this).css('background','#000');
        $(this).css('color','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(1)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(1)').css('color','#000');
        $('.project .projectslick .project2 .buttons .button:nth-child(2').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(2)').css('color','#000');
        $('.project .projectslick .project2 .buttons .button:nth-child(4)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(4)').css('color','#000');
        $('.project .projectslick .project2 .buttons .button:nth-child(5)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(5)').css('color','#000');
        $('.project .projectslick .project2 .pimage').css('opacity','0').stop().attr('src','././프로젝트이미지/로지텍G/Sub1.png').animate({opacity:1},1000);
    })
    $('.project .projectslick .project2 .buttons .button:nth-child(4)').click(function(){
        $(this).css('background','#000');
        $(this).css('color','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(1)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(1)').css('color','#000');
        $('.project .projectslick .project2 .buttons .button:nth-child(2)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(2)').css('color','#000');
        $('.project .projectslick .project2 .buttons .button:nth-child(3)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(3)').css('color','#000');
        $('.project .projectslick .project2 .buttons .button:nth-child(5)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(5)').css('color','#000');
        $('.project .projectslick .project2 .pimage').css('opacity','0').stop().attr('src','././프로젝트이미지/로지텍G/Sub2.png').animate({opacity:1},1000);
    })
    $('.project .projectslick .project2 .buttons .button:nth-child(5)').click(function(){
        $(this).css('background','#000');
        $(this).css('color','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(1)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(1)').css('color','#000');
        $('.project .projectslick .project2 .buttons .button:nth-child(2').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(2)').css('color','#000');
        $('.project .projectslick .project2 .buttons .button:nth-child(3)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(3)').css('color','#000');
        $('.project .projectslick .project2 .buttons .button:nth-child(4)').css('background','#FFF');
        $('.project .projectslick .project2 .buttons .button:nth-child(4)').css('color','#000');
        $('.project .projectslick .project2 .pimage').css('opacity','0').stop().attr('src','././프로젝트이미지/로지텍G/Sub3.png').animate({opacity:1},1000);
    })
    $('.indexsub li:nth-child(1)').click(function(){
        $('.indexsub li:nth-child(1) .indexls').css('opacity','1');
        $('.indexsub li:nth-child(2) .indexls').css('opacity','0');
        $('.indexsub li:nth-child(3) .indexls').css('opacity','0');
        $('.indexsub li:nth-child(4) .indexls').css('opacity','0');
        $('.indexsub li:nth-child(5) .indexls').css('opacity','0');
    })
    $('.indexsub li:nth-child(2)').click(function(){
        $('.indexsub li:nth-child(2) .indexls').css('opacity','1');
        $('.indexsub li:nth-child(1) .indexls').css('opacity','0');
        $('.indexsub li:nth-child(3) .indexls').css('opacity','0');
        $('.indexsub li:nth-child(4) .indexls').css('opacity','0');
        $('.indexsub li:nth-child(5) .indexls').css('opacity','0');
    })
    $('.indexsub li:nth-child(3)').click(function(){
        $('.indexsub li:nth-child(3) .indexls').css('opacity','1');
        $('.indexsub li:nth-child(1) .indexls').css('opacity','0');
        $('.indexsub li:nth-child(2) .indexls').css('opacity','0');
        $('.indexsub li:nth-child(4) .indexls').css('opacity','0');
        $('.indexsub li:nth-child(5) .indexls').css('opacity','0');
    })
    $('.indexsub li:nth-child(4)').click(function(){
        $('.indexsub li:nth-child(4) .indexls').css('opacity','1');
        $('.indexsub li:nth-child(1) .indexls').css('opacity','0');
        $('.indexsub li:nth-child(2) .indexls').css('opacity','0');
        $('.indexsub li:nth-child(3) .indexls').css('opacity','0');
        $('.indexsub li:nth-child(5) .indexls').css('opacity','0');
    })
    $('.indexsub li:nth-child(5)').click(function(){
        $('.indexsub li:nth-child(5) .indexls').css('opacity','1');
        $('.indexsub li:nth-child(1) .indexls').css('opacity','0');
        $('.indexsub li:nth-child(2) .indexls').css('opacity','0');
        $('.indexsub li:nth-child(3) .indexls').css('opacity','0');
        $('.indexsub li:nth-child(4) .indexls').css('opacity','0');
    })
});