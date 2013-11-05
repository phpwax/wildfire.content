var editorPositionBookmark;
var editorScrollTop;

jQuery(document).ready(function($) {

	jQuery(window).bind("autosave.start", function(e, res){
		editorScrollTop = $(res.getDoc()).scrollTop();
		editorPositionBookmark = res.selection.getBookmark(2,true);
	});

	jQuery(window).bind("autosave.completed", function(e, res){
		var editor = tinyMCE.activeEditor;
		editor.setContent(res.model.row.content);
		editor.selection.moveToBookmark(editorPositionBookmark);
		setTimeout(function(){
			$(editor.getDoc()).scrollTop(editorScrollTop);
		}, 80);
	});

});