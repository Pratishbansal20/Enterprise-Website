const fs = require('fs');
const pdf = require('pdf-parse');

console.log('Type of pdf:', typeof pdf);
console.log('Keys of pdf:', Object.keys(pdf));

if (typeof pdf === 'function') {
    let dataBuffer = fs.readFileSync('STOCK ITEM.pdf');
    pdf(dataBuffer).then(function (data) {
        console.log(data.text);
    });
} else if (pdf.default && typeof pdf.default === 'function') {
    let dataBuffer = fs.readFileSync('STOCK ITEM.pdf');
    pdf.default(dataBuffer).then(function (data) {
        console.log(data.text);
    });
} else {
    console.error('Could not find PDF parsing function');
}
