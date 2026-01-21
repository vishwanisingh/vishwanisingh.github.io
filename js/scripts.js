/*!
    Title: Dev Portfolio Template
    Version: 1.2.2
    Last Change: 03/25/2020
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function($) {

    // Show current year
    $("#current-year").text(new Date().getFullYear());

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#about').offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block with specific icons based on company
        $this.find('.vtimeline-point').each(function() {
            var companyName = $(this).find('h3').text().toLowerCase();
            var iconClass = 'fa fa-briefcase'; // Default icon
            
            // Choose specific icons based on company
            if (companyName.includes('massachusetts') || companyName.includes('hospital')) {
                iconClass = 'fa fa-hospital-o'; // Hospital icon for MGH
            } else if (companyName.includes('iit') || companyName.includes('technology')) {
                iconClass = 'fa fa-graduation-cap'; // Education/research icon for IIT
            } else if (companyName.includes('geeks')) {
                iconClass = 'fa fa-code'; // Code icon for GeeksforGeeks
            }
            
            $(this).prepend('<div class="vtimeline-icon"><i class="' + iconClass + '"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Function to open the popup
    $(".open-popup").click(function() {
        var imgSrc = $(this).data("img-src");
        $(".popup img").attr("src", imgSrc);
        $(".popup").css("display", "block");
    });

    // Function to close the popup
    $(".close-popup").click(function() {
        $(".popup").css("display", "none");
    });


    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

    $(window).on("scroll", function() {
    if ($("#about-section").offset().top < $(window).scrollTop() + $(window).height() - 100) {
        $("#about-section").addClass("visible");
    }
    });


})(jQuery);