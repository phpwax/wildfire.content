var auto_save_bookmark;
jQuery(document).ready(function($) {

	jQuery(window).bind("autosave.start", function(e, res){
		var endId = tinymce.DOM.uniqueId();
		res.dom.add(res.getBody(), 'span', {'id': endId}, '');
	});

	jQuery(window).bind("autosave.completed", function(e, res){
		console.log(auto_save_bookmark);
		var editor = tinyMCE.activeEditor;
		editor.setContent(res.model.row.content);

		var newNode = editor.dom.select('span#' + endId);
		editor.selection.select(newNode[0]);
	});

});