function modal() {

    // 모달 오픈
    function open_modal(){
        modal_bg = document.createElement('div');
        modal_bg.className = 'modal_bg';

        if(document.querySelector(target)){ 

            $('body').addClass('modal_open').append(modal_bg);
            
            $('.modal_bg').fadeIn(300);
            $(target).show().addClass('fade');

            setTimeout(function(){
                $(target).addClass('showed');
            }, 100);

        }
    }

    function hide_modal(modal_id){
        $('.modal_bg').fadeOut(200);
        $('#'+modal_id).removeClass('showed');

        setTimeout(function(){
            $('.modal_bg').remove();
            $('#'+modal_id).removeClass('fade').hide();
            $('body').removeClass('modal_open');

        }, 200);
    }


    $('[data-type="modal"]').on('click', function(){
        if($(this).attr('data-target')){
            target = $(this).attr('data-target');

            open_modal();
        }
    });
    
    $('[data-dismiss="modal"]').on('click', function(){
        modal_id = $(this).parents('.modal').attr('id');

        hide_modal(modal_id);
    });

    // 모달 닫기
    $('body').on('click', function(e){
        if($('.modal').css('display') == 'block'){
            modal_id = $('.modal.showed').attr('id');
            modal_dialog = $('#'+modal_id).find('.modal_dialog');

            // backdrop 클래스를 갖고있으면 백그라운드 클릭 시 닫힘
            if(modal_dialog.hasClass('backdrop')){
                if(!$('.modal').has(e.target).length){
                    hide_modal(modal_id);
                }
            }
        }
    });
}

$(function (){
    modal();
});