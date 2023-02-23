function inputDate(){
    // input type date
    $("input[type=date].date").on("change", (e) => {
        console.log('test');

        const target = $(e.target);

        if (target.val() == "") target.addClass("date_empty");
        else target.removeClass("date_empty");
    });
}

$(function (){
    inputDate();
});