$(function() {
    var offset = 220;
    var duration = 500;

    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.freecoding-back-to-top').css('opacity', '0.4');
        } else {            
            $('.freecoding-back-to-top').css('opacity', '0');
        }
    });
    
    $('.freecoding-back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })

    $('.freecoding-section img').each(function() {
        var self = $(this);
        self.wrap('<a href="'+self.attr('src')+'" data-lightbox="image"></a>');
    });

    $('.freecoding-post-content iframe').each(function() {
        if ($(this).attr('width') != '100%') {
            $(this).wrap('<div class="freecoding-video"></div>');
        }
    });

    $('.freecoding-post-content pre').addClass('prettyprint');
    
    $('.freecoding-menu > a').click(function() {
        $(this).toggleClass('open')
        $('.freecoding-menu .freecoding-items').toggleClass('open');
        return false;
    });
});