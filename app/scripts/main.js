// jshint devel:true
/*global $:false */
$(document).ready(function(){
    'use strict';
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
	$('a[href^="#"]').on('click', function (e) {
       e.preventDefault();
       var target = this.hash;
       var $target = $(target);
       $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
    });
   });
});
