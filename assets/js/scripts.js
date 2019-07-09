//
// scroll top button animation
//
$(window).scroll(function() {
    // lê e guarda o scroll actual da página
    var current_scroll = $(window).scrollTop();

    // quando o scroll chegar ao valor definido faz
    // aparecer o butão que nos permite voltar ao topo da página
    // de forma automática
    if (current_scroll > 600) {
        $('.push_up').fadeIn();

        // função de click que permite o regresso automatizado
        // e animado ao topo da página.
        $('.push_up').click(function() {
            $('html, body')
                .stop()
                .animate({ scrollTop: 0 }, 800);
        });
    } else {
        $('.push_up').fadeOut();
    }
});

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') ==
                this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length
                ? target
                : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate(
                    {
                        scrollTop: target.offset().top
                    },
                    1000,
                    function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(':focus')) {
                            // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    }
                );
            }
        }
    });
