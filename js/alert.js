function alert(){
    // 얼럿 닫기
    $('[data-dismiss="alert"]').on('click', function(){
        if($(this).parents().hasClass('alert_dismissible')){
            $(this).parents('.alert').fadeOut();
        }
    });
}

$(function (){
    alert();
});