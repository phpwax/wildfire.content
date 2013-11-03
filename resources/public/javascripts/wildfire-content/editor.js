var auto_save_bookmark;
jQuery(document).ready(function($) {

	jQuery(window).bind("autosave.start", function(e, res){
		var endId = tinymce.DOM.uniqueId();
		res.dom.add(res.getBody(), 'div', {'id': endId}, '');
	});

	jQuery(window).bind("autosave.completed", function(e, res){
		var editor = tinyMCE.activeEditor;
		editor.setContent(res.model.row.content);

		var newNode = editor.dom.select('div#' + endId);
		editor.selection.select(newNode[0]);
	});

});