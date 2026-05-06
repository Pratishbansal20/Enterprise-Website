const fs = require('fs');
let pdf;
try {
    pdf = require('pdf-parse');
} catch (e) {
    console.log('require failed', e);
}

console.log('Default import:', pdf);

if (typeof pdf === 'function') {
    run(pdf);
} else {
    // Try to find the function
    const keys = Object.keys(pdf);
    console.log('Keys:', keys);
    // Maybe it's not exported correctly check deep
    try {
        const lib = require('pdf-parse/lib/pdf-parse.js');
        console.log('Lib import:', lib);
        if (typeof lib === 'function') run(lib);
        else if (typeof lib.default === 'function') run(lib.default);
        else if (typeof lib.PDFParse === 'function') run(lib.PDFParse);
    } catch (e) {
        console.log('Lib import failed', e);
    }
}

function run(parser) {
    console.log('Running parser...');
    let dataBuffer = fs.readFileSync('STOCK ITEM.pdf');
    parser(dataBuffer).then(function (data) {
        console.log('TEXT_START');
        console.log(data.text);
        console.log('TEXT_END');
    }).catch(e => console.error(e));
}
