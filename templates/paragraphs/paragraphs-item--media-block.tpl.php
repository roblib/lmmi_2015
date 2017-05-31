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
?>
<div class="paragraphs--media-block <?php print $classes; ?>"<?php print $attributes; ?>>
  
	<div class="paragraphs--media-block--image">
		<?php print render($content['field_media_block_image']); ?>
		<?php if ($content['field_image_caption']): ?>
			<div class="paragraphs--media-block--image--caption">
				<?php print render($content['field_image_caption']); ?>
			</div>
		<?php endif; ?>

	</div>
	<div class="paragraphs--media-block--text">
		<?php print render($content['field_text_block']); ?>
	</div>

</div>
