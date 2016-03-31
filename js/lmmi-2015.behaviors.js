(function ($) {


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
	//Drupal.behaviors.my_custom_behavior = {
		//attach: function(context, settings) {
			//// Place your code here.
			//$('.robs-sub-menu').dropit()

		//}
	//};	

	/**
	 * The recommended way for producing HTML markup through JavaScript is to write
	 * theming functions. These are similiar to the theming functions that you might
	 * know from 'phptemplate' (the default PHP templating engine used by most
	 * Drupal themes including Omega). JavaScript theme functions accept arguments
	 * and can be overriden by sub-themes.
	 *
	 * In most cases, there is no good reason to NOT wrap your markup producing
	 * JavaScript in a theme function.
	 */
	Drupal.theme.prototype.lmmi2015ExampleButton = function (path, title) {
		// Create an anchor element with jQuery.
		return $('<a href="' + path + '" title="' + title + '">' + title + '</a>');
	};

	/**
	 * Behaviors are Drupal's way of applying JavaScript to a page. In short, the
	 * advantage of Behaviors over a simple 'document.ready()' lies in how it
	 * interacts with content loaded through Ajax. Opposed to the
	 * 'document.ready()' event which is only fired once when the page is
	 * initially loaded, behaviors get re-executed whenever something is added to
	 * the page through Ajax.
	 *
	 * You can attach as many behaviors as you wish. In fact, instead of overloading
	 * a single behavior with multiple, completely unrelated tasks you should create
	 * a separate behavior for every separate task.
	 *
	 * In most cases, there is no good reason to NOT wrap your JavaScript code in a
	 * behavior.
	 *
	 * @param context
	 *   The context for which the behavior is being executed. This is either the
	 *   full page or a piece of HTML that was just added through Ajax.
	 * @param settings
	 *   An array of settings (added through drupal_add_js()). Instead of accessing
	 *   Drupal.settings directly you should use this because of potential
	 *   modifications made by the Ajax callback that also produced 'context'.
	 */
	Drupal.behaviors.lmmi2015ExampleBehavior = {
		attach: function (context, settings) {
			// By using the 'context' variable we make sure that our code only runs on
			// the relevant HTML. Furthermore, by using jQuery.once() we make sure that
			// we don't run the same piece of code for an HTML snippet that we already
			// processed previously. By using .once('foo') all processed elements will
			// get tagged with a 'foo-processed' class, causing all future invocations
			// of this behavior to ignore them.
			$('.some-selector', context).once('foo', function () {
				// Now, we are invoking the previously declared theme function using two
				// settings as arguments.
				var $anchor = Drupal.theme('lmmi2015ExampleButton', settings.myExampleLinkPath, settings.myExampleLinkTitle);

				// The anchor is then appended to the current element.
				$anchor.appendTo(this);
			});
		}
	};

})(jQuery);
