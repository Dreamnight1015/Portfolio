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
        verticalSwiping: true,
        speed: 1000,
        draggable : true,
        infinite: false,
        dots: true,
        customPaging: function(slider, i) { 
            console.log($(slider.$slides[i]).html());
            return '<button class="tab">' + $(slider.$slides[i]).find('.item').attr('data-dot-title') + '</button>';
        }
    })
    $('.portfolioslick').mousewheel(function(e) {
        e.preventDefault();
        if (e.deltaY < 0) {
            $(this).slick('slickNext');
        }else {
        $(this).slick('slickPrev');
        }
    });
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
    const $text = document.querySelector(".text");

// 글자 모음 - 개행문자(\n)로 줄바꿈
const letters = [
  "안녕하세요. \n 성장하기 위해 노력하는 퍼블리셔 한동규입니다.",
];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 줄바꿈을 위한 <br> 치환
const changeLineBreak = (letter) => {
  return letter.map(text => text === "\n" ? "<br>" : text);
}

// 타이핑 효과
const typing = async () => {  
  // 기존코드에서 개행치환코드 추가
  const letter = changeLineBreak(letters[i].split(""));
  
  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
  }
}
// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);
});