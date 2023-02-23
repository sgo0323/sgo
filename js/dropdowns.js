function dropdown() {
    /*Dropdown Menu*/
    $('.dropdown__content').click(function() {
        $(this).attr('tabindex', 1).focus();
        $(this).find('.dropdown__select').toggleClass('dropdown__select--on');
        $(this).find('.dropdown__arrow').toggleClass('dropdown__arrow--rotate');
        $(this).find('.dropdown__list').toggleClass('dropdown__list--on');
    });
    $('.dropdown__content').focusout(function() {
        $(this).find('.dropdown__select').removeClass('dropdown__select--on');
        $(this).find('.dropdown__arrow').removeClass('dropdown__arrow--rotate');
        $(this).find('.dropdown__list').removeClass('dropdown__list--on');
    });
    $('.dropdown__item').click(function() {
        $(this).parents('.dropdown__content').find('.dropdown__title').text($(this).text());
        $(this).parents('.dropdown__content').find('input').attr('value', $(this).attr('data-value'));
    });
}

$(function() {
    setTimeout(function() {
        dropdown();
    }, 100);
});