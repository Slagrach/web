$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $(" a").hover(function () {
        $(this).next("em").animate({
            opacity: "show",
            left: "80%"
        }, "slow");
    }, function () {
        $(this).next("em").animate({
            opacity: "hide",
            left: "-120%"
        }, "slow");
    })

    $('.slider__card').slick({
        arrows: true, // стрелки вкдючены
        dots: true, // точки включены
        slidesToShow: 2, // показывать два слайда
        initialSlide: 0, // с какого слайда начинать
        autoplay: true, // автопрокрутка
        autoplaySpeed: 5000, // автопрокрутка каждые 5сек
        infinite: true, // бесконечная прокрутка
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true
    });
});
