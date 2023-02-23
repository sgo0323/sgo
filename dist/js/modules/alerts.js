function alert(){
    // 얼럿 닫기
    $('[data-dismiss="alert"]').on('click', function(){
        if($(this).parents().hasClass('alert__dismissible')){
            $(this).parents('.alert').fadeOut();
        }
    });
}

$(function (){
    alert();
});