<?php
/**
 * @file
 * Template file for field_slideshow_controls
 *
 *
 */
?>
<div id="field-slideshow-<?php print $slideshow_id; ?>-controls" class="field-slideshow-controls">
  <a href="#" class="prev"><i class="fa fa-chevron-left"></i></a>
  <?php if (!empty($controls_pause)) : ?>
    <a href="#" class="play"><i class="fa fa-play"></i></a>
    <a href="#" class="pause"><i class="fa fa-pause"></i></a>
  <?php endif; ?>
  <a href="#" class="next"><i class="fa fa-chevron-right"></i></a>
</div>
