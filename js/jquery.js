jQuery(document).ready(function($) {

$(".contacts__form").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "https://formfor.site/send/DFRJPHUPfRgZ41Gc25T1bJ7HVFq503",
data: str,
success: function(msg) {
if(msg == 'OK') {
  
} else {
  
}
$(".contacts__form-success").addClass("contacts__form-success--show")
}
});
return false;
});
});


jQuery(function($) {

    const section = $('.section'),
          nav = $('.navigation'),
          navHeight = nav.outerHeight();

    $(window).on('scroll', function () {
        const position = $(this).scrollTop();

        section.each(function () {
            const top = $(this).offset().top - navHeight - 5,
                  bottom = top + $(this).outerHeight();

            if (position >= top && position <= bottom) {
                nav.find('a').removeClass('active');
                section.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        const id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - navHeight
        }, 500);

        return false;
    });

});