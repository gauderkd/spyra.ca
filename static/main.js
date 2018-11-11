$(function() {
    var header = $(".header-container");
    var picture_header = $(".pic_wrapper");
    var picture = $(".profile_pic");
    var header_title = $(".title_wrapper");
    var header_title_row = $('.header-title');
    var menu = $('.menuitem');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.addClass("sub-header-container");
            picture.css({ top: -550, transition: 'all 0.5s' });
            picture_header.css({ 'max-height': 0, transition: 'max-height 0.5s'});
            header_title.removeClass("title_wrapper").addClass("sub-title-wrapper");
            menu.removeClass("menuitem_home");

        } else {
            header.removeClass("sub-header-container");
            picture.css({ top: 75, transition: 'all 0.5s' });
            picture_header.css({ 'max-height': 250, transition: 'max-height 0.5s'});
            header_title.removeClass("sub-title-wrapper").addClass("title_wrapper");
            menu.addClass("menuitem_home");
        }
    });
});
