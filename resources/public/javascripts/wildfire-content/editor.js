var editorPositionBookmark;

jQuery(document).ready(function($) {

	jQuery(window).bind("autosave.start", function(e, res){
		editorPositionBookmark = tinyMCE.activeEditor.selection.getBookmark();
		console.log(editorPositionBookmark);
	});

	jQuery(window).bind("autosave.completed", function(e, res){
		var editor = tinyMCE.activeEditor;
		editor.setContent(res.model.row.content);
		console.log(editorPositionBookmark);
		
	});

});