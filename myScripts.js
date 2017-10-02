// jQuery to add/remove shadow under header when scrolling up and down

$(document).on("scroll", function() {

    if ($(document).scrollTop() > 10) {
        $("header").removeClass("normal").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled").addClass("normal");
    }

});
