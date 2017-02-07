jQuery( document ).ready( function($) {


	// Setup strict mode
	(function() {

    "use strict";
			    
	
		var $color_switcher_container = $('#color-switcher-container'),
				$color_switcher = $('#color-switcher'),
				current_color = $('.color-swatch.active a').attr('href');

		current_color = current_color.replace('#', '');
		
		
		/* --------------------------------------------------------- */
		/* !Images */
		/* --------------------------------------------------------- */
		
		function color_switcher_images( color ) {
		
			$('img').each( function(index) {
			
				var path = $(this).attr('src');
				if( path.indexOf(current_color) >= 0 ) {
					path = path.replace(current_color, color);
					$(this).attr('src', path);
				}
			});
		}
	
		function color_switcher_swap_colors( color ) {
		
			color = color.replace('#', '');
		
			color_switcher_images( color );
			
			var $stylesheet = $('#theme-color-css');
			if( $stylesheet.length == 0 ) {
				$stylesheet = $("<link rel='stylesheet' id='theme-color-css' type='text/css' media='all' />");
				$('head').append($stylesheet);
			}

			$stylesheet.attr('href', mtphr_colorswitcher_vars.path+mtphr_colorswitcher_vars.before+color+mtphr_colorswitcher_vars.after+'.css' );
			
			current_color = color;
		}
	
		function color_switcher_show() {
			$('#color-switcher-toggle').addClass('active');
			$color_switcher_container.stop().animate( {
				left: 0
			}, 1000, 'easeOutExpo', function() {
				// Animation complete.
			});
		}
		
		function color_switcher_hide() {
			$('#color-switcher-toggle').removeClass('active');
			$color_switcher_container.stop().animate( {
				left: '-208px'
			}, 1000, 'easeOutExpo', function() {
				// Animation complete.
			});
		}
			
		
		// If the color switcher exists 
			
		if( $color_switcher.length > 0 ) {
		
			$('#color-switcher-toggle').click( function(e) {
				e.preventDefault();
				
				if( $(this).hasClass('active') ) {
					color_switcher_hide();
				} else {
					color_switcher_show();
				}
	
			});
			
			$('#color-switcher-done').click( function(e) {
				e.preventDefault();
				color_switcher_hide();
			});
			
			$('.color-swatch a').click( function(e) {
				e.preventDefault();
				
				$('.color-swatch').removeClass('active');
				$(this).parent().addClass('active');
				
				color_switcher_swap_colors( $(this).attr('href') );
			});
			
		}
	
	}());

});