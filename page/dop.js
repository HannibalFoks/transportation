$(document).ready(function () {

    togl();

    var $page = $('html, body');
    $('a[href*="#"]').click(function () {
        if ($($.attr(this, 'href')).offset() != null) {
            toggleBurger();
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 300);
        }
        return false;
    });

    /*  setInterval(run, slideInterval);
      $('.open-popup').on('click', function (e) {
          e.preventDefault();
          togl()
      }); */

    $('#close').on('click', togl);
    $(window).resize(function () {
        //     slideHeight();
    });

    $('.menu-burger__header').click(function () {
        toggleBurger();
    });

});
function toggleBurger() {
    $('.menu-burger__header').toggleClass('open-menu');
    $('.header__nav').toggleClass('open-menu');
    $('.fon-blac').toggleClass('open-menu');
}

function togl() {
    $('#popup').toggle();
    //$('.popup__content').toggleClass('target');
}