$(function() {
    var header = $(".header-container");
    var header_picture = $(".img_wrapper");
    var header_title = $(".title_wrapper");
    var header_title_row = $('.header-title');
    var menu = $('.menurow-home');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.addClass("sub-header-container");
            header_picture.addClass("sub-header-picture");
            header_title.removeClass("title_wrapper").addClass("sub-title-wrapper");
            menu.removeClass("menurow-home")

        } else {
            header.removeClass("sub-header-container");
            header_picture.removeClass("sub-header-picture");
            header_title.removeClass("sub-title-wrapper").addClass("title_wrapper");
            menu.addClass("menurow-home")
        }
    });
});
