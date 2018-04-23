<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * lmmi_2015 theme.
 */
function lmmi_2015_form_alter(&$form, &$form_state, $form_id) {

	//if ($form_id == 'robs_testing_stuff_node_form') {
	//dsm($form);

	
	//}
}
/**
 *  * Implements hook_preprocess_paragraph().
 *   */
function lmmi_2015_preprocess_paragraph(&$variables) {
	dsm($variables);

}
function lmmi_2015_preprocess_entity(&$variables) {
	if ($variables['entity_type'] == 'paragraphs_item') {
	//dsm($variables);
		//if(isset($variables['elements']['field_featured_image']['#items'][0]['title'])){
			//$title = $variables['elements']['pp_title']['#items'][0]['value'];
			//$title = strtolower(drupal_clean_css_identifier($title));
			//$variables['attributes_array']['id'] = $title;
		//}
	}
}
