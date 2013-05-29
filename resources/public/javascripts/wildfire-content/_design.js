jQuery(document).ready(function(){

  jQuery(window).bind("autosave.completed", function(e, res){
    jQuery(".design_preview iframe").attr("src",res.model.row.permalink+"?preview="+res.meta.model.primval).get(0).contentWindow.location.reload();
  });

  jQuery(".field-design-pagetype select, .field-design-layout select").bind("change", function(){
    auto_save_form(jQuery('#auto-save'));

  });

});