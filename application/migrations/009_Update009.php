<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Migration_Update009 extends CI_Migration {

    function up() {
        $this->db->query("
				ALTER TABLE `fs_chapters` ADD `release_date` DATETIME NULL AFTER `editor`;
		");
    }

}
