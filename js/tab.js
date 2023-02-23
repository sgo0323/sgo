function tab(){
    $('.tab').each(function(i) {
        var oTab = $(this);
        var tabIndex = $(this).find('.show').attr('id').match(/\d+$/);
    
        $(this).find('.tab_panel').find('#content_' + tabIndex[0]).show();
    
        $(this).find('.tab_nav li a').click(function() {
            /*선택색인*/    
            var tabIndex = $(this).attr('id').match(/\d+$/);
            /*타이틀*/
            oTab.find('.tab_nav li a').removeClass('show');
            $(this).addClass('show');
            /*패널*/
            oTab.find('.tab_panel .tab_content').hide();
            oTab.find('.tab_panel').find('#content_' + tabIndex[0]).show();

          return false;
        });
    });
}

$(function (){
    tab();
});