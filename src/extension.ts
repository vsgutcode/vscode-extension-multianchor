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

	context.subscriptions.push(disposable, disposable2);
}

// this method is called when your extension is deactivated
export function deactivate() {}
