# Hello World Chrome Extension

This is a basic Chrome extension that displays "Hello World" in a popup and allows changing the background color of the current page to green.

## Files

- `manifest.json`: Defines the extension's properties and configuration
- `popup.html`: Contains the HTML and inline CSS for the popup
- `popup.js`: Handles the button click event in the popup
- `content.js`: Injects into web pages to change the background color

## Installation

1. Open Google Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" and select the folder containing these files
4. The extension should now appear in your browser toolbar

## Usage

1. Click on the extension icon in the Chrome toolbar to see the "Hello World" message in a popup
2. Click the "Change Background to Green" button to change the background color of the current page to green

## Customization

To modify the extension, you can:

- Edit the `popup.html` file to change the content or styling of the popup
- Update the `manifest.json` file to modify the extension's properties or add new features
- Modify `popup.js` and `content.js` to change the extension's functionality
