// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "multianchor" is now active!');
	
	let anchors : vscode.Position[] = [];
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('multianchor.setAnchors', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		//vscode.window.showInformationMessage('Hello World from multianchor!');
		
		const editor = vscode.window.activeTextEditor;
		const selections = editor!.selections;
		const newSelections = [];
		let i = 0;
		anchors = [];
		for (const selection of selections) {
			//console.log(i, selection.anchor, selection.start);i++;
			//anchors.push(selection.anchor);
			anchors.push(selection.start);
		}
  
		//editor!.selections = newSelections;
	});
	let disposable2 = vscode.commands.registerCommand('multianchor.selectFromAnchors', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		//vscode.window.showInformationMessage('selectfromanchors from multianchor!');
		
		const editor = vscode.window.activeTextEditor;
		const selections = editor!.selections;
		const newSelections = [];
		let i = 0;
		if(selections.length !== anchors.length){
			return undefined;
		}
		for (const selection of selections) {
			// console.log(i, selection.anchor, selection.start);
			const newSelection1 = new vscode.Selection(anchors[i], selection.start);
			newSelections.push(newSelection1);
			i++;
		}
  
		editor!.selections = newSelections;
	});
	function scroll(editor:vscode.TextEditor, position:vscode.Position, opt:vscode.TextEditorRevealType = vscode.TextEditorRevealType.Default){
        let newSelection = new vscode.Selection(position, position);
        editor.selection = newSelection;
		editor.revealRange(new vscode.Range(position, position), opt);

	}
	let disposable3 = vscode.commands.registerCommand('multianchor.moveToFirstAnchor', () => {
		//vscode.window.showInformationMessage('selectfromanchors from multianchor!');
		
		const editor = vscode.window.activeTextEditor;
		//editor?.options.cursorStyle
		//vscode.commands.executeCommand('cursorMove', )
		if(!editor || anchors.length === 0)return;

        //const position = editor.selection.active;
		const position = anchors[0];

        //let newPosition = position.with(position.line, position.character);
        //let newSelection = new vscode.Selection(newPosition, newPosition);
		scroll(editor, position);

		//editor.selection.active = anchors[0];
	});
	let disposable4 = vscode.commands.registerCommand('multianchor.swapFirstAnchorAndCursor', () => {
		const editor = vscode.window.activeTextEditor;
		//editor?.options.cursorStyle
		//vscode.commands.executeCommand('cursorMove', )
		if(!editor || anchors.length === 0)return;

        //const position = editor.selection.active;
		const position = anchors[0];
		anchors[0] = editor.selection.active;
		scroll(editor, position);

		//editor.selection.active = anchors[0];
	});

	context.subscriptions.push(disposable, disposable2, disposable3, disposable4);
}

// this method is called when your extension is deactivated
export function deactivate() {}
