<?php

/**
 * @file
 * Default theme implementation for a single paragraph item.
 *
 * Available variables:
 * - $content: An array of content items. Use render($content) to print them
 *   all, or print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. By default the following classes are available, where
 *   the parts enclosed by {} are replaced by the appropriate values:
 *   - entity
 *   - entity-paragraphs-item
 *   - paragraphs-item-{bundle}
 *
 * Other variables:
 * - $classes_array: Array of html class attribute values. It is flattened into
 *   a string within the variable $classes.
 *
 * @see template_preprocess()
 * @see template_preprocess_entity()
 * @see template_process()
 */
$link = $content['field_featured_content']['#items'][0]['target_id'];
?>


	
<a href="/node/<?php print render($link); ?>">
	<div class="lp-feature media-object">

		<div class="media-object-section">
			<figure> <?php print render($content['field_featured_image']); ?> </figure>
		</div>

		<div class="media-object-section">
			<h3> <?php print render($content['field_link_text']); ?> </h3>
		</div>
	</div>
</a>
