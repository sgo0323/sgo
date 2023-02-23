$(function (){
    layer_popup();
});

function layer_popup() {

    // 팝업 오픈
    function open_popup(){
        layer_popup__bg = document.createElement('div');
        layer_popup__bg.className = 'layer_popup__bg';

        if(document.querySelector(target)){ 

            $('body').addClass('pp_open').append(layer_popup__bg);
            
            $('.layer_popup__bg').fadeIn(300);
            $(target).show().addClass('fade');

            setTimeout(function(){
                $(target).addClass('showed');
            }, 100);

        }
    }

    function hide_popup(popup_id){
        $('.layer_popup__bg').fadeOut(200);
        $('#'+popup_id).removeClass('showed');

        setTimeout(function(){
            $('.layer_popup__bg').remove();
            $('#'+popup_id).removeClass('fade').hide();
            $('body').removeClass('pp_open');

        }, 200);
    }


    $('[data-type="popup"]').on('click', function(){
        if($(this).attr('data-target')){
            target = $(this).attr('data-target');

            open_popup();
        }
    });
    
    $('[data-dismiss="popup"]').on('click', function(){
        popup_id = $(this).parents('.layer_popup').attr('id');

        hide_popup(popup_id);
    });

    // 팝업 닫기
    $('body').on('click', function(e){
        if($('.layer_popup').css('display') == 'block'){
            popup_id = $('.layer_popup.showed').attr('id');
            popup_area = $('#'+popup_id).find('.layer_popup__area');

            // backdrop 클래스를 갖고있으면 백그라운드 클릭 시 닫힘
            if(popup_area.hasClass('backdrop')){
                if(!$('.layer_popup').has(e.target).length){
                    hide_popup(popup_id);
                }
            }
        }
    });
}