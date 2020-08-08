(function ($) {
    "use strict";

    /*-------------------------------------
	Background image
	-------------------------------------*/
	$("[data-bg-image]").each(function() {
		var img = $(this).data("bg-image");
		$(this).css({
			backgroundImage: "url(" + img + ")"
		});
    });

    /*-------------------------------------
    After Load All Content Add a Class
    -------------------------------------*/

    window.onload = addNewClass();

    function addNewClass() {
        $('.demo-template-animation').imagesLoaded().done(function (instance) {
            $('.demo-template-animation').addClass('loaded');
        });
    }


})(jQuery);
