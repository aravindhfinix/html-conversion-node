# html-conversion-node

[![npm version](https://badge.fury.io/js/html-conversion-node.svg)](https://badge.fury.io/js/html-conversion-node)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`html-conversion-node` is a Node.js module that allows you to convert HTML content to PDF and plain text formats using Puppeteer and html-to-text libraries. It provides simple and straightforward functions to make the conversion process easy.

## Installation

To use `html-conversion-node`, you need to have Node.js and npm installed on your machine. If you don't have them, you can download and install them from the official Node.js website (https://nodejs.org).

To install the package, run the following command in your project directory:

```
npm install html-conversion-node
```

## Usage

### `convertHtmlToPdf(htmlContent, outputPath, options)`

Converts HTML content to a PDF file and saves it to the specified output path.

**Parameters:**

- `htmlContent` (string): The HTML content or the path to the HTML file to convert to PDF.
- `outputPath` (string, optional): The path where the generated PDF will be saved. If not provided, the PDF buffer will be returned.
- `options` (object, optional): Additional options for Puppeteer's `page.pdf` function. For available options, refer to the Puppeteer documentation.

**Options:**

You can customize the PDF output using the following options:

- `format` (string): Paper format for the PDF (e.g., 'A4', 'Letter', etc.).
- `margin` (object): Page margins in CSS units (e.g., { top: '20px', right: '10px', bottom: '20px', left: '10px' }).
- `preferCSSPageSize` (boolean): Use CSS page size for the PDF.
- `displayHeaderFooter` (boolean): Display header and footer templates.
- `headerTemplate` (string): HTML content for the header.
- `footerTemplate` (string): HTML content for the footer.
- `printBackground` (boolean): Enable background graphics and colors in the PDF.
- `landscape` (boolean): Set to true for landscape orientation, false for portrait.


**Returns:**

- If `outputPath` is provided, the function returns a Promise that resolves with the PDF buffer if the conversion is successful.


**Example:**

```javascript
const { convertHtmlToPdf } = require('html-conversion-node');

const htmlContent = '<html><body><h1>Hello, world!</h1></body></html>';
const outputPath = './output.pdf';

convertHtmlToPdf(htmlContent, outputPath)
    .then((pdfBuffer) => {
        console.log('Conversion to PDF successful.');
    })
    .catch((error) => {
        console.error('Error occurred:', error.message);
    });
```

- If `outputPath` is not provided, the function returns a Promise that resolves with the PDF buffer.

**Example:**

```javascript
const { convertHtmlToPdf } = require('html-conversion-node');

const htmlContent = '<html><body><h1>Hello, world!</h1></body></html>';


convertHtmlToPdf(htmlContent)
    .then((pdfBuffer) => {
        console.log('Conversion to PDF successful.');
    })
    .catch((error) => {
        console.error('Error occurred:', error.message);
    });
```

### `convertHtmlToTxt(htmlContent, outputPath)`

Converts HTML content to plain text and saves it to the specified output path.

**Parameters:**

- `htmlContent` (string): The HTML content or the path to the HTML file to convert to plain text.
- `outputPath` (string, optional): The path where the generated text file will be saved. If not provided, the plain text content will be returned.

**Returns:**

- If `outputPath` is provided, the function returns a Promise that resolves with the plain text content if the conversion is successful.

**Example:**

```javascript
const { convertHtmlToTxt } = require('html-conversion-node');

const htmlContent = '<html><body><h1>Hello, world!</h1></body></html>';
const outputPath = './output.txt';

convertHtmlToTxt(htmlContent, outputPath)
    .then((pdfBuffer) => {
        console.log('Conversion to text successful.');
    })
    .catch((error) => {
        console.error('Error occurred:', error.message);
    });
```

- If `outputPath` is not provided, the function returns a Promise that resolves with the plain text content.

**Example:**

```javascript
const { convertHtmlToTxt } = require('html-conversion-node');

const htmlContent = '<html><body><h1>Hello, world!</h1></body></html>';

convertHtmlToTxt(htmlContent)
    .then((pdfBuffer) => {
        console.log('Conversion to text successful.');
    })
    .catch((error) => {
        console.error('Error occurred:', error.message);
    });
```

## Note

This module utilizes Puppeteer to launch a headless browser and render the HTML content, converting it to PDF. Please ensure that your system has sufficient memory and processing power to run Puppeteer successfully. In some Ubuntu systems, there might not be native support for this package, especially for versions below Ubuntu 20.04. If you wish to use this package on an older Ubuntu version, you will need to install certain additional packages to ensure compatibility.

```
sudo apt-get install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget libgbm-dev
```



