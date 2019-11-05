'use strict';

function handleNavBar() {
    $('.sec-nav').slideUp(500);
    $('#navbar-toggle-cbox').prop('checked', false);
    $('.sec-nav').slideDown(500);
}

function scrollDown(target) {
    $('html').animate({
        scrollTop: $('#' + target).offset().top - 100
    }, 1000);
}

function handleAndScroll() {
    $('.technologies-js').on('click', function (event) {
        handleNavBar();
        event.preventDefault();
        scrollDown('technologies');
    })

    $('.portfolio-js').on('click', function (event) {
        handleNavBar();
        event.preventDefault();
        scrollDown('portfolio');
    })
}

$(handleAndScroll);