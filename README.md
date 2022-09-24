# vscode-extension-multianchor README

The selection anchor function that supports multiple cursors.

## Features

The anchor in vscode does not support multiple cursors, so only one location can be selected. It works as shown in the following figure.

![default-anchor-demo](https://raw.githubusercontent.com/vsgutcode/vscode-extension-multianchor/main/images/default-anchor-demo.gif)


This extension supports multiple cursors and works as shown in the figure below.

![multianchor-demo](https://raw.githubusercontent.com/vsgutcode/vscode-extension-multianchor/main/images/multianchor-demo.gif)


## Requirements

nothing

## Extension Settings

This extension contributes the following commands:

* `multianchor.setAnchors`: Set anchors at multiple cursors position.
* `multianchor.selectFromAnchors`: Select from anchors to multiple cursors position.
* `multianchor.moveToFirstAnchor`: Move cursor to first anchor.
* `multianchor.swapFirstAnchorAndCursor`: Swap first anchor and cursor.

## Known Issues

nothing

## Release Notes


### 0.0.3

add moveToFirstAnchor.

