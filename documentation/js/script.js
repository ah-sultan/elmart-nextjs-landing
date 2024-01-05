(function($) {
	"use strict";

	//Add OnepageNav / Sidebar
	function sideNav() {
		if($('.menu-box .sticky-menu').length){
			$('.menu-box .sticky-menu ul').onePageNav();
		}
	}

	//Add Scroll Bar To Sidebar
	if($('#sidebar .menu-box').length){
		$("#sidebar .menu-box").mCustomScrollbar({
			axis:"y",
			autoExpandScrollbar:false
		});
	}

	//animate to top on Page Refresh
    $('html, body').animate({
	   scrollTop: $('html, body').offset().top
	}, 1000);
   
	$(document).on('ready', function() {
		sideNav();
	});

	//Sidebar
	$(function() {
		$('.mobile-menu-icon').on('click',function() {
		  $('#sidebar').addClass('show');
		})
		$('.mobile-menu-close').on('click',function() {
		  $('#sidebar').removeClass('show');
		})
	  });

})(window.jQuery);