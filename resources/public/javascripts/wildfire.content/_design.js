jQuery(document).ready(function(){

  jQuery(".field-design-pagetype select, .field-design-layout select").bind("change", function(){
    auto_save_form(jQuery('#auto-save span'), jQuery('#auto-save'), jQuery('#auto-save img'));
    jQuery(".design_preview iframe").attr("src", jQuery(".preview-button").attr("href"));
  });

});