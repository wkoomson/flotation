function init() {
	global.$(global.window.document).ready(function() {
		
		//Size window properly
		var screen = global.gui.Screen.Init();
		var win = global.gui.Window.get();
		win.resizeTo(screen.screens[0].bounds.width / 2, screen.screens[0].bounds.height / 1.5);
		console.log("screen available width "+screen.screens[0].bounds.width+" screen available height"+screen.screens[0].bounds.height);
	
		var editor = require("./../js/editor.js");
		var textEditor = global.$('#editor');
		textEditor.bind('input propertychange', function() {
			editor.reload();
		});
	});
}
