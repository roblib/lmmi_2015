(function ($) {


	Drupal.behaviors.nice_select = {
		attach: function (context, settings) {

			$('.view-ryrie-campbell select', context).once(function() {
				$(this).niceSelect();
			});
		}
	};

	Drupal.behaviors.collection_search = {
		attach: function (context, settings) {

			$('.islandora-collection-search-form  option[value="all"]').remove();
			$('.islandora-collection-search-form  .form-item-collection-select').hide();
			//$('.islandora-collection-search-form  .current').replaceWith('<span class="current">KindredSpaces</span>');
			
		}
	};
	Drupal.behaviors.solr_search_move_results = {
		attach: function (context, settings) {

			$('#islandora-solr-result-count', context).once(function() {
				$(this).insertAfter($('.page-islandora-search h1'));
			});
		}
	};
	Drupal.behaviors.current_facet_query = {
		attach: function (context, settings) {

			var target = '.remove-filter';
			var icon = '<i class="fa fa-times-circle" aria-hidden="true"></i>';
			$(target, context).once(function() {

				$(this).html(icon);


			});
			var target = 'a.remove-query';
			var icon = '<i class="fa fa-times-circle" aria-hidden="true"></i>';
			$(target, context).once(function() {

				$(this).html(icon);


			});

		}
	};
	Drupal.behaviors.search_facet_manipulation = {
		attach: function(context, settings) {
			//$("span.replaceme").replaceWith($(".program .file"));
		}
	};	



	Drupal.behaviors.move_prog_link = {
		attach: function(context, settings) {
			$("span.replaceme").replaceWith($(".program .file"));
		}
	};	
	Drupal.behaviors.move_submenu_location = {
		attach: function(context, settings) {
			$('.breadcrumb').after($('.page-sub-nav'));
		}
	};	

	Drupal.behaviors.submenu_actions = {
		attach: function(context, settings) {
			// Place your code here.
			$('.page-sub-nav').hover(
					function(){
						$('.menu-block-wrapper', this).stop().fadeIn(100);
					},

					function(){
						$('.menu-block-wrapper', this).stop().fadeOut(100);
					}

					);

			$('.page-sub-nav h2').html( $('.page-sub-nav h2').text() );
		}
	};	
	Drupal.behaviors.shining_scroll_menu_link = {
		attach: function(context, settings) {
			// Place your code here.
			$('#menu-2439-1 a').attr('target', '_blank');

		}
	};	

	//Drupal.behaviors.solr_metadata = {
	//attach: function(context, settings) {
	//// Place your code here.
	//$('.islandora-metadata').prependTo($('.islandora-book-metadata'));

	//}
	//};	

	Drupal.behaviors.program_link_manipulation = {
		attach: function (context, settings) {
			$('h1').hide;
		}
	};


	Drupal.behaviors.solr_plus_minus = {
		attach: function (context, settings) {

			var target = 'a.plus';
			var replacement = '<i class="fa fa-search-plus" aria-hidden="true"></i>';

			$(target, context).once(function() {
				$(this).empty();
				$(this).append(replacement);
			});

			var target = 'a.minus';
			var replacement = '<i class="fa fa-search-minus" aria-hidden="true"></i>';

			$(target, context).once(function() {
				$(this).empty();
				$(this).append(replacement);
			});


		}
	};
})(jQuery);
