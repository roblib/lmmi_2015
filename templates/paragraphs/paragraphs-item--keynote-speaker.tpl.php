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


<hr>
<?php print render($content['field_keynote_speaker_name']); ?>
<hr>
<?php print render($content['field_keynote_speaker_image']); ?>
<hr>
<?php print render($content['field_keynote_speaker_bio']); ?>
<hr>
<?php print render($content['field_keynote_speech_title']); ?>
<hr>
<?php print render($content['field_keynote_speech_abstract']); ?>
<hr>




<div class="keynote-speaker">
  <figure class="keynote-speaker__img">
    <img src="http://via.placeholder.com/200x200">
    <figcaption class="keynote-speaker__name">
      Speaker Name
    </figcaption>
  </figure>
  <h2 class="keynote-speaker__title">Title of Keynote</h2>
  <section class="keynote-speaker__abstract">
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque provident quos praesentium dolore vero voluptatibus. Iure, quo facilis et quisquam debitis laboriosam saepe earum neque animi! Perferendis voluptatibus odit eum?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque provident quos praesentium dolore vero voluptatibus. Iure, quo facilis et quisquam debitis laboriosam saepe earum neque animi! Perferendis voluptatibus odit eum?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque provident quos praesentium dolore vero voluptatibus. Iure, quo facilis et quisquam debitis laboriosam saepe earum neque animi! Perferendis voluptatibus odit eum?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque provident quos praesentium dolore vero voluptatibus. Iure, quo facilis et quisquam debitis laboriosam saepe earum neque animi! Perferendis voluptatibus odit eum?
    </p>
  </section>
  <section class="keynote-speaker__bio">
<h3>Bio:</h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque provident quos praesentium dolore vero voluptatibus. Iure, quo facilis et quisquam debitis laboriosam saepe earum neque animi! Perferendis voluptatibus odit eum?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque provident quos praesentium dolore vero voluptatibus. Iure, quo facilis et quisquam debitis laboriosam saepe earum neque animi! Perferendis voluptatibus odit eum?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque provident quos praesentium dolore vero voluptatibus. Iure, quo facilis et quisquam debitis laboriosam saepe earum neque animi! Perferendis voluptatibus odit eum?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque provident quos praesentium dolore vero voluptatibus. Iure, quo facilis et quisquam debitis laboriosam saepe earum neque animi! Perferendis voluptatibus odit eum?
    </p>
  </section>
</div>
<hr>
