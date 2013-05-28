jQuery(document).ready(function(){

  jQuery(window).bind("autosave.completed", function(e, res){
    jQuery(".design_preview iframe").get(0).contentWindow.location.reload();
  });

  jQuery(".field-design-pagetype select, .field-design-layout select").bind("change", function(){
    auto_save_form(jQuery('#auto-save'));

  });

});