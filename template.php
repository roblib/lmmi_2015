<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * lmmi_2015 theme.
 */
drupal_add_js(drupal_get_path('theme', 'lmmi_2015') . '/dist/assets/js/app.js', array(
  'preprocess' => FALSE,
  'group' => JS_THEME,
  'every_page' => TRUE,
  'weight' => 1000,
  )
);
drupal_add_css(drupal_get_path('theme', 'lmmi_2015') . '/dist/assets/css/lmmi-2015.styles.css', array(
  'preprocess' => FALSE,
  'group' => CSS_THEME,
  'media' => 'screen',
  'every_page' => TRUE,
  'weight' => 1000,
  )
);
