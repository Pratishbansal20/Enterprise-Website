const fs = require('fs');
let pdfparse;
try {
    pdfparse = require('pdf-parse');
} catch (e) {
    console.error("Require failed:", e);
}

const parse = pdfparse.default || pdfparse;

async function run() {
    try {
        const dataBuffer = fs.readFileSync('STOCK ITEM.pdf');
        const data = await parse(dataBuffer);
        console.log('---START---');
        console.log(data.text);
        console.log('---END---');
    } catch (error) {
        console.error("Error parsing:", error);
    }
}

run();
