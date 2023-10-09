// @ts-nocheck
export function customScript() {
  setTimeout(() => {


    $(document).ready(function($) {

      "use strict";

      $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll',
        horizontalOffset: 0,
        verticalOffset: 0
      });


      // loader
      var loader = function(show = false) {
        if (show) {
          setTimeout(function() {
            if($('#ftco-loader').length > 0) {
              $('#ftco-loader').addClass('show');
            }
          }, 1);
        } else {
          setTimeout(function() {
            if($('#ftco-loader').length > 0) {
              $('#ftco-loader').removeClass('show');
            }
          }, 1);
        }
      };
      loader();

      var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
          $('.js-fullheight').css('height', $(window).height());
        });

      };
      fullHeight();
    });


    $(function() {

      var link = $('#navbar a.dot');

      // Move to specific section when click on menu link
      link.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        $(this).addClass('active');
        e.preventDefault();
      });

      // Run the scrNav when scroll
      $(window).on('scroll', function(){
        scrNav();
      });

      // scrNav function
      // Change active dot according to the active section in the window
      function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function() {
          var id = $(this).attr('id'),
            offset = $(this).offset().top-1,
            height = $(this).height();
          if(sTop >= offset && sTop < offset + height) {
            link.removeClass('active');
            $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
          }
        });
      }
      scrNav();
    });


    $(function() {

      $(".progress").each(function() {

        var value = $(this).attr('data-value');
        var left = $(this).find('.progress-left .progress-bar');
        var right = $(this).find('.progress-right .progress-bar');

        if (value > 0) {
          if (value <= 50) {
            right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
          } else {
            right.css('transform', 'rotate(180deg)')
            left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
          }
        }

      })

      function percentageToDegrees(percentage) {

        return percentage / 100 * 360

      }

    });
  }, 1000)

}
