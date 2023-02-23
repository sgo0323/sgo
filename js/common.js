function is_screen(max_width) {
    var output;
    if (!!window.matchMedia || !!window.msMatchMedia) {
        output = window.matchMedia('(max-width:' + max_width + 'px)').matches
    } else {
        output = ($(window).width() <= max_width) ? !0 : !1
    }
    return output;
}

// iframe height
function autoResizeIframe() {	
    $('iframe.active').on('load', function() {
        if(this.contentDocument) {
            $(this).height(this.contentDocument.documentElement.scrollHeight);
        } else {
            $(this).height(this.contentWindow.document.body.scrollHeight);
        }
    });
}

// header shortcut
function headerShortcut() {
    $('.shortcut__btn').click(function() {
        $(this).parents('.shortcut').find('.shortcut__content').toggleClass('shortcut__content--on');
    });

    $('.shortcut').focusout(function() {
        $(this).find('.shortcut__content').removeClass('shortcut__content--on');
    });
}

// gnb focus
function gnbFocus() {
    $('.gnb__item').click(function() {
        $('.gnb__item').removeClass('gnb__item--on');
        $(this).addClass('gnb__item--on');
    });
}


$(function() {
    // iframe height
    autoResizeIframe();    

    setTimeout(function() {
        // header shortcut
        headerShortcut();
        // gnb focus
        gnbFocus();
    }, 100);
});