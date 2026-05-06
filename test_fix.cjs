const pdf = require('pdf-parse');
console.log('typeof pdf:', typeof pdf);
console.log('typeof pdf.PDFParse:', typeof pdf.PDFParse);
console.log('typeof pdf.default:', typeof pdf.default);

try {
    const fs = require('fs');
    if (fs.existsSync('STOCK ITEM.pdf')) {
        const buffer = fs.readFileSync('STOCK ITEM.pdf');
        // Try calling pdf.PDFParse if function
        if (typeof pdf.PDFParse === 'function') {
            pdf.PDFParse(buffer).then(d => console.log('Success with .PDFParse')).catch(e => console.log('Error .PDFParse', e));
        } else {
            console.log("PDFParse is not a function");
        }
    }
} catch (e) {
    console.log(e);
}
