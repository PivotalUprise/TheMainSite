jQuery(document).ready(function ($) {
	"use strict";
	// WPBakery full row for RTL mode
	function bs_fix_vc_full_width_row() {
		var $elements = jQuery('[data-vc-full-width="true"]');
		jQuery.each($elements, function () {
			var $el = jQuery(this);
			// $el.css('right', $el.css('left')).css('left', '');
            $el.css('right', 'auto').css('left', '');
		});
	}
	if( jQuery('html').attr('dir') == 'rtl' ) {
		// Fixes rows in RTL
		jQuery(document).on('data-vc-full-width', function () {
			bs_fix_vc_full_width_row();
		});

		// Run one time because it was not firing in Mac/Firefox and Windows/Edge some times
		bs_fix_vc_full_width_row();
	}

	// Activate 1 tab and click tabs
	//$('.nav-pills li:first-child').addClass('active');
	//$('.tab-content > div:first-child').addClass('active');
	$('#sell_tetim_tabs').tabs();
	
	//var activeTab = $('.tab-pane.active');
	
	//console.log('activeTab', activeTab);
	
	//$("#stta a").click(function(e){
		//e.preventDefault();
		//$(this).tab('show');
		/*
		var tabPane = $('.tab-content .tab-pane');
		var testimonialId = $(this).attr('href').slice(1,3);
		console.log($(this).attr('href').slice(1,3));
		var isActive = $('#'+testimonialId).hasClass('active');
		console.log(activeTab);
		
		if ($('#'+testimonialId).hasClass('active')) {
			$('#'+testimonialId).removeClass('active');
		} else {
			$('#'+testimonialId).addClass('active');
		}
		*/	
	//});

	// Animation
  $("span.see").click(function () {
		  $('div.map-info').addClass('bounceOutLeft').removeClass('bounceInLeft');
		  $('span.showcont').addClass('bounceInLeft').removeAttr('id', 'dnone').attr('id', 'sbtn');
	  });
	  $("span.showcont").click(function () {
		  $('div.map-info').removeClass('bounceOutLeft').addClass('bounceInLeft');
		  $('span.showcont').removeClass('bounceInLeft').removeAttr('id', 'sbtn').attr('id', 'dnone');
	  });
	  $("span.hiddesc").click(function () {
		  $('div.cta1desc').addClass('bounceOutLeft').removeClass('bounceInLeft');
		  $('div.requestform').addClass('bounceInLeft').removeClass('bounceOutLeft');
	  });
	  $("span.hiderform").click(function () {
		  $('div.cta1desc').addClass('bounceInLeft').removeClass('bounceOutLeft');
		  $('div.requestform').addClass('bounceOutLeft').removeClass('bounceInLeft');
	  });
	  $("a.showsearchline").click(function () {
		  $('form.search').addClass('act animated slideInDown').removeClass('slideOutUp');
	  });
        $("i.sstb").click(function () {
            $('form.search').addClass('act animated slideInDown').removeClass('slideOutUp');
        });
	  $("a.hidesearchline").click(function () {
		  $('form.search').addClass('slideOutUp').removeClass('act animated slideInDown');
	  });
	// Scroll
		$(document).ready(function(){   
			$(window).scroll(function () {
				if ($(this).scrollTop() > 0) {
					$('#scroller').fadeIn();
				} else {
					$('#scroller').fadeOut();
				}
			});
			$('#scroller').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 400);
				return false;
			});
		});

	// Blog shortcode navigation
	function category_query_click_handler(e) {
		var href, str, args = '', page, parent,
			waiter = jQuery('#seo_ajax_waiter'),
			cls,
			prefix;

		parent = jQuery(e.target).parents("[class*='category_query_block']");
		prefix = 'action=handle_category_query';
		cls = 'category_query';
		if (parent.length == 0) {
			parent = jQuery(e.target).parents("[class*='post_format_query_block']");
			prefix = 'action=handle_post_format_query';
			cls = 'post_format_query';
		}

		function innerHandler(result, args) {
			var parent;
			parent = jQuery(e.target).parents("[class*='" + cls + "_block']");
			result = result.substring(0, result.length - 1);
			jQuery(parent).html(result);
			jQuery("[class*='" + cls + "_pagination']").on('click', args.f);
			jQuery('#seo_ajax_waiter').css({ 'display' : 'none' });
			jQuery('html, body').animate({scrollTop: jQuery(parent).offset().top}, 500);
		}

		if (e.target.nodeName == 'A') {
			e.preventDefault();
			href = e.target.href;
			str = href.match(/\/_id.+$/)[0];
			str = str.match(/_[^\/]+/);
			str = str[0].replace(/_/g, '&');
			page = href.match(/\/page\/([0-9]+)/); page = page[1];
			jQuery(waiter).css({ 'top' : (jQuery(parent).height() - jQuery(waiter).height())/2 + 'px',
				'left' : (jQuery(parent).width() - jQuery(waiter).width())/2 + 'px',
				'display' : 'block' });
			jQuery.ajax({
				url : localajax['url'],
				method : 'POST',
				data : prefix + str + '&page=' + page + '&base=' + jQuery('#' + cls + '_service_info').html(),
				success : function(result, args) {
					args = { e : e, f : category_query_click_handler }
					innerHandler(result, args);
				}
			});
			return false;
		}
	}

	jQuery("[class*='category_query_pagination']").on('click', category_query_click_handler);
	jQuery("[class*='post_format_query_pagination']").on('click', category_query_click_handler);
});
