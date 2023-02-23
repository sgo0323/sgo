var isProcess = false;
var $model = "";

function is_screen(max_width) {
    var output;
    if (!!window.matchMedia || !!window.msMatchMedia) {
        output = window.matchMedia('(max-width:' + max_width + 'px)').matches
    } else {
        output = ($(window).width() <= max_width) ? !0 : !1
    }
    return output;
}

// vh계산
function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

// html include
window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.include; // data-include 속성값 담기

        if (includePath) { // 해당 요소에 data-include 속성값이 있다면
            var xhttp = new XMLHttpRequest(); // 서버로 보내는 요청

            xhttp.onreadystatechange = function () { // 서버로부터 응답 받은 후 할 동작
                if (this.readyState == 4 && this.status == 200) { // 요청한 데이터 처리가 완료되어 응답할 준비가 완료됨 && 서버에 문서가 존재함
                    el.outerHTML = this.responseText; 
                }
            };
            xhttp.open('GET', '/include/'+includePath, true);
            xhttp.send();
        }
    });
});

function copyToClipboard(val){
	var textArea = document.createElement("textarea");//textarea 생성

	textArea.value = val.trim();
	document.body.appendChild(textArea);

	textArea.select();//선택
	document.execCommand("Copy");//복사
	textArea.remove();//생성한 textarea 삭제
}

function copyResult(){
    $model = $('#slider-div').slick('slickCurrentSlide') + 1;
    var copyText = "";

    try{
        copyText = $('#result'+$model).html().replace(/(<br>|<br\/>|<br \/>)/g, '\r\n');
        copyToClipboard(copyText);
    }catch(error){
        alert("복사 실패하였습니다.");
        return false;
    }
    alert("복사되었습니다.");
    return false;

}

// $(function(){
//     if($('.OI_wrap').hasClass('intro')) {
//         // intro page
//         gsap.fromTo(".text_area", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 1.5});
//     } else if($('.OI_wrap').hasClass('main')) {
//         // main page
//         // main contents
//         gsap.fromTo(".input_area", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 1.5});
        
//         function loadingTitle(){
//             let loading_title = gsap.timeline();

//             loading_title.set(".title_1", {opacity: 1, duration: 2})
//                 .set(".title_2, .title_3, .title_4, .title_5", {opacity: 0, duration: 2})
//                 .to(".title_1", {opacity: 0}, "+=2")
//                 .to(".title_2", {opacity: 1})
//                 .to(".title_2", {opacity: 0}, "+=2")
//                 .to(".title_3", {opacity: 1})
//                 .to(".title_3", {opacity: 0}, "+=2")
//                 .to(".title_4", {opacity: 1})
//                 .to(".title_4", {opacity: 0}, "+=2")
//                 .to(".title_5", {opacity: 1});
//         }

//         // slide contents
//         function oiSlide() {
//             var $slide = $('.description_area .description_slide');
//             var $nav = $('.card_area .card_nav').find('.card_contents');
//             var enableNav = true; //클릭하여 내비게이션 이동 허용 여부(슬라이드 동작 중 클릭되는 것을 방지)

//             $slide.on('init reInit', function (event, slick) {//페이징이니셜
//                 if(!slick.$dots) return;
//             }).on('beforeChange', function(event, slick, currentSlide, nextSlide){ //슬라이드 변경 시 내비 및 페이징 변경
//                 //내비 변경
//                 if(enableNav){
//                 $nav.removeClass("on");
//                 $nav.eq(nextSlide).addClass("on");
//                 navStatus();
//                 }
//             });

//             function navStatus(){ //슬라이드 동작 중 내비클릭 방지
//                 enableNav = false;
//                 setTimeout(function() {
//                 enableNav = true;
//                 });
//             }

//             $nav.on("click", function(){ //내비 클릭시 해당 인덱스로 이동
//                 if(enableNav){
//                     var slideNo = $(this).index();
//                     $slide.slick('slickGoTo', slideNo).slick('refresh');
//                     $nav.removeClass("on");
//                     $(this).addClass("on");
//                     navStatus();
//                 }
//             });

//             $slide.slick({
//                 arrows: true,  // Prev/Next Arrows
//                 dots: true,
//                 customPaging : function(slider, i) {
//                     var thumb = $(slider.$slides[i]).data();
//                     return '0' + (i + 1);
//                 },
//                 autoplay:false,
//                 fade: true,
//                 draggable: false
//             });

//         }

//         // card_area
//         gsap.set(".card_area h3", {y: 100, opacity: 0});
        
//         function cardAnimation(){
//             let card_animation = gsap.timeline();

//             if (is_screen(479)){
//                 card_animation.set(".card_area h3", {y: 100, opacity: 0})            
//                 .set(".card_contents", {opacity: 0})
//                 .set(".card_1, .card_3", {y: -80, opacity: 0})                
//                 .set(".card_2, .card_4", {y: 80, opacity: 0})
//                 .to(".card_area h3", {y: 0, opacity: 1, duration: 2}, "+=1")
//                 .to(".card_1", {y: 0, opacity: 1})
//                 .to(".card_2", {y: 0, opacity: 1})
//                 .to(".card_3", {y: 0, opacity: 1})
//                 .to(".card_4", {y: 0, opacity: 1});

//             } else {
//                 card_animation.set(".card_area h3", {y: 100, opacity: 0})
//                 .set(".card_contents", {opacity: 0})
//                 .set(".card_1, .card_3", {y: -80, opacity: 0})
//                 .set(".card_2, .card_4", {y: 80, opacity: 0})
//                 .to(".card_area h3", {y: 0, opacity: 1, duration: 2}, "+=1")
//                 .to(".card_1, .card_2, .card_3, .card_4", {y: 0, opacity: 1});
//             }
//         }

//         function cardTextAnimation(){
//             if (is_screen(2500) && !is_screen(1024)) {
//                 gsap.set(".card_nav .text", {y: 180});
//             } else if (is_screen(1024) && !is_screen(768)) {
//                 gsap.set(".card_nav .text", {y: 145});
//             } else if (is_screen(768) && !is_screen(320)) {
//                 gsap.set(".card_nav .text", {y: 130});
//             } else if (is_screen(320)) {
//                 gsap.set(".card_nav .text", {y: 110});
//             } /* else {
//                 gsap.set(".card_nav .text", {y: 180});
//             } */

//             $('.card_contents').mouseenter(function(){
//                 $(this).find('.type').hide();
//                 if (is_screen(479)) {
//                     $(this).css({'transform':'translate(0px, 0px)', 'transition-duration':'1s'});
//                 } else {
//                     $(this).css({'transform':'translate(0px, -20px)', 'transition-duration':'1s'});
//                 }
//             });

//             $('.card_contents').mouseleave(function(){
//                 $('.type').show();
//                 $(this).css({'transform':'translate(0px, 0px)', 'transition-duration':'1s'});
//             });

//             gsap.utils.toArray(".card_nav .card_contents").forEach(el => {
//                 // get just the nested <li> submenu items inside this one
//                 let items = el.querySelectorAll(".card_nav .text");
//                 // if any are found, create the animation and mouseover/mouseout listeners
//                 if (items.length > 0) {
//                     let animation = gsap.to(items, {y: 0, duration: 1, paused: true});
//                     el.addEventListener("mouseover", () => animation.play());
//                     el.addEventListener("mouseout", () => animation.reverse());
//                 }
//             });
//         }
//         $('.btn_search').click(function(){

//         	if (isProcess){
//         		alert("잠시만 기다려 주세요.");
//         		return;
//         	}

//             if($('#keyword').val() == ""){
//                 $('#keyword').focus();
//                 alert("문장을 생성할 키워드를 입력하세요.");
//                 return false;
//             }

//             var prompt_text = $('#keyword').val();

//             isProcess = true;
//             $.ajax({
//                 url: "/generates",
//                 type: "post",
//                 data: {
//                      "prompt_text"	: prompt_text
//                 },
//                 dataType: "html",
//                 beforeSend : function(data){
//                     //$(this).closest('.keyword_area').find('.input_area').hide();
//                     //$(this).closest('.keyword_area').find('.loading_area').show();

//                     $('#input_area').hide();
//                     $('#loading_area').show();

//                     if ($('.loading_area').css("display") == "block"){
//                         loadingTitle();
//                     }
//                 },
//                 success : function(data,status,xhr){
//                     isProcess = false;
//                     generated_data = data;

//                     $("#result").replaceWith(data);
                    
//                 },
//                 complete : function(){
//                     $('#area2').css('display', 'block');
//                     $('#area1, #area3').css('display', 'none');

//                     // header
//                     $('.header_btn li.restart').css('display', 'block');

//                     oiSlide();
//                     cardAnimation();
//                     cardTextAnimation();

//                     $('.card_nav .btn_default').on("click", function(){
//                         $('#area3').css('display', 'block');
//                         $('#area2').css('display', 'none');

//                         // header
//                         if($('.description_area').css('display') == "block"){
//                             $('.header_btn li.copy').css('display', 'block');
//                             $('.header_btn li.restart').css('display', 'block');
//                         } else {
//                             $('.header_btn li.copy').css('display', 'none');
//                             $('.header_btn li.restart').css('display', 'none');
//                         }
//                     });

//                     // responsive
//                     $(window).resize(function(){
//                         cardTextAnimation();
//                     });
//                 },
//                 error : function(request, status, error){
//                     isProcess = false;
//                     alert('잠시만 기다려주세요. \n더 좋은 서비스 제공을 위해 개선작업이 진행중입니다. \n증상이 지속되면 관리자에게 문의해주세요.');
//                 }
//             });
//         });
        
//         $('#keyword').keypress(function(event){
//              var keycode = (event.keyCode ? event.keyCode : event.which);
//              if(keycode == '13'){
//                $('.btn_search').click();
//              }
//         });

//         //모바일 스크롤에 따른 헤더 노출 & 비노출
//         if (is_screen(478)) {
//             $(window).scroll(function(event){
//                 var lastScrollTop = 0
//                 var scollTop = $(this).scrollTop();

//                 if (scollTop > lastScrollTop){
//                     // downscroll
//                     $('header').removeClass('on');
//                     $('header').addClass('off');
//                 } else {
//                     // upscroll
//                     $('header').removeClass('off');
//                     $('header').addClass('on');
//                 }
//                 lastScrollTop = scollTop;
//             });
//         }
//     }
// });