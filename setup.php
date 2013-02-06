<?
CMSApplication::register_module("content", array("display_name"=>"Content", "link"=>"/admin/content/", 'split'=>true));

AutoLoader::register_view_path("plugin", __DIR__."/view/");
AutoLoader::register_controller_path("plugin", __DIR__."/lib/controller/");
AutoLoader::register_controller_path("plugin", __DIR__."/resources/app/controller/");
AutoLoader::$plugin_array[] = array("name"=>"wildfire.content","dir"=>__DIR__);


?>