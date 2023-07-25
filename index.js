const puppeteer = require('puppeteer');
const fs = require('fs');
const { htmlToText } = require('html-to-text');


function convertHtmlToPdf(htmlContent, outputPath, options) {
    return new Promise(async (resolve, reject) => {
        try {
            const option = options || {}; // Use options if provided or an empty object as default

            if (fs.existsSync(htmlContent)) {
                try {
                    htmlContent = fs.readFileSync(htmlContent, 'utf-8');
                } catch (error) {
                    throw new Error('Error reading HTML file:', error);
                }
            }

            const browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
                defaultViewport: null,
                slowMo: 100,
                ignoreHTTPSErrors: true,
                devtools: false,
                timeout: 30000,
            });

            const page = await browser.newPage();

            await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });

            const pdfBuffer = await page.pdf(option);

            if (outputPath) {
                fs.writeFile(outputPath, pdfBuffer, 'binary', (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        console.log(`PDF saved to ${outputPath}`);
                        resolve(pdfBuffer);
                    }
                });
            } else {
                resolve(pdfBuffer);
            }

            await browser.close();
        } catch (error) {
            console.error('Error occurred:', error.message); // Print the error message
            reject(error);
        }
    });
}


function convertHtmlToTxt(htmlContent, outputPath) {
    return new Promise((resolve, reject) => {
        try {
            if (fs.existsSync(htmlContent)) {
                htmlContent = fs.readFileSync(htmlContent, 'utf-8');
            }

            const textContent = htmlToText(htmlContent);

            if (outputPath) {
                fs.writeFile(outputPath, textContent, (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        console.log(`Text file saved to ${outputPath}`);
                        resolve(textContent);
                    }
                });
            } else {
                resolve(textContent);
            }
        } catch (error) {
            console.error('Error occurred:', error.message);
            reject(error);
        }
    });
}


module.exports = { convertHtmlToTxt, convertHtmlToPdf };
