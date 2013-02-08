<?
CMSApplication::register_module("content", array("display_name"=>"Content", "link"=>"/admin/content/", 'split'=>true));
CMSApplication::register_asset("wildfire", "js", "wildfire.content");

AutoLoader::register_view_path("plugin", __DIR__."/view/");
AutoLoader::register_controller_path("plugin", __DIR__."/lib/controller/");
AutoLoader::register_controller_path("plugin", __DIR__."/resources/app/controller/");

AutoLoader::register_assets("javascripts/wildfire.content",__DIR__."/resources/public/javascripts/wildfire.content/", "/*.js");

AutoLoader::$plugin_array[] = array("name"=>"wildfire.content","dir"=>__DIR__);


?>