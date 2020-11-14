$(function() {
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scroll, introH);

    $(window).on("scroll resize", function(){
        scrollPos = $(this).scrollTop();
        introH = intro.innerHeight();
        if (introH < scrollPos) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        checkScroll(scroll, introH);
    });

    function checkScroll() {
        if (introH < scrollPos) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 57
        }, 700);
    });

    $(navToggle).on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    });


});


