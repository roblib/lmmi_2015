<?php

/**
 * @file
 * islandora-basic-collection.tpl.php
 *
 * @TODO: needs documentation about file and variables
 */
?>

<div class="islandora islandora-basic-collection">
  <div class="islandora-basic-collection-grid clearfix">
  <?php foreach($associated_objects_array as $key => $value): ?>
	<dl class="islandora-basic-collection-object <?php print $value['class']; ?>">
		<dt class="islandora-basic-collection-thumb"> <a href="/<?php print $value['path']; ?>/datastream/JPG/view.jpg" class="gallery" title="<?php print $value['title']; ?>"> <?php print $value['thumbnail']; ?> </a> </dt>
		<dd class="islandora-basic-collection-caption"><?php print filter_xss($value['title_link']); ?></dd>
	</dl>
<?php endforeach; ?>
</div>
</div>
<!--colorbox config-->
<script>
jQuery('.gallery').colorbox({rel:'gallery'});
</script>
