<?php
/**
 * Plugin Name: Elementor Enhanced Multi Upload
 * Description: Enhances Elementor forms with user-friendly multiple file upload functionality, allowing users to preview and remove files before submitting.
 * Version: 1.0.0
 * Author: Tunity Digital Agency
 * Author URI: https://www.tunity.be
 * Text Domain: elementor-enhanced-multi-upload
 * License: GPL v3
 */

// Security check
defined('ABSPATH') || exit;

// Enqueue frontend scripts
function eemfu_enqueue_scripts() {
    wp_enqueue_script(
        'eemfu-script',
        plugins_url('/assets/enhanced-upload.js', __FILE__),
        [],
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'eemfu_enqueue_scripts');
