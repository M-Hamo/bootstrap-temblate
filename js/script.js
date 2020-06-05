var height = $('#header').height();
$(window).scroll(function () {
    if ($(this).scrollTop() > height) {
        $('.navbar').removeClass('fixed');
    } 
    else {
        $('.navbar').addClass('fixed');
    }
});