<?
AutoLoader::register_assets("javascripts/wildfire-content", __DIR__."/resources/public/javascripts/wildfire-content/", "/*.js");
AutoLoader::register_view_path("plugin", __DIR__."/view/");
AutoLoader::register_controller_path("plugin", __DIR__."/lib/controller/");
AutoLoader::register_controller_path("plugin", __DIR__."/resources/app/controller/");
AutoLoader::$plugin_array[] = array("name"=>"wildfire.content","dir"=>__DIR__);

AutoLoader::add_plugin_setup_script(__DIR__."/setup.php");
?>