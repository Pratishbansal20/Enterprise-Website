const fs = require('fs');
const path = require('path');
let pdf;
try {
    pdf = require('pdf-parse');
} catch (e) {
    console.error('Failed to require pdf-parse:', e);
    process.exit(1);
}

const PDF_PATH = path.join(__dirname, '../STOCK ITEM.pdf');
const OUTPUT_PATH = path.join(__dirname, '../src/data/products.json');

async function processPdf() {
    try {
        console.log('Reading PDF file...');
        if (!fs.existsSync(PDF_PATH)) {
            throw new Error(`PDF file not found at ${PDF_PATH}`);
        }

        const dataBuffer = fs.readFileSync(PDF_PATH);

        let pdfParse;
        if (typeof pdf === 'function') {
            pdfParse = pdf;
        } else if (pdf.default && typeof pdf.default === 'function') {
            pdfParse = pdf.default;
        } else if (pdf.PDFParse && typeof pdf.PDFParse === 'function') {
            pdfParse = pdf.PDFParse;
        } else {
            throw new Error('Could not find PDF parsing function. Keys: ' + Object.keys(pdf).join(', '));
        }

        console.log(`Using pdf parser: ${pdfParse.name || 'anonymous'}`);

        let text = '';
        try {
            console.log('Attempting direct call...');
            const data = await pdfParse(dataBuffer);
            text = data.text;
        } catch (err) {
            console.warn('Direct call failed:', err.message);
            if (err.message.includes("Class constructor") || err.message.includes("invoke without 'new'")) {
                console.log("Trying 'new' keyword...");
                // Note: pdf-parse class usually doesn't take buffer in constructor immediately to return data promise?
                // It usually returns an instance. logic might be new Parser().parse(buffer)?
                // But let's try generic approach.
                try {
                    const instance = new pdfParse(dataBuffer);
                    // Check if instance is promise-like or has text
                    if (instance.then) {
                        const data = await instance;
                        text = data.text;
                    } else if (instance.text) {
                        text = instance.text;
                    } else {
                        console.log('Instance keys:', Object.keys(instance));
                        throw new Error('Instance created but no text found');
                    }
                } catch (e2) {
                    console.error('New keyword failed:', e2);
                    throw err; // Throw original error
                }
            } else {
                throw err;
            }
        }

        if (!text) {
            throw new Error('No text extracted');
        }

        // Split text into lines
        const lines = text.split('\n');
        console.log(`Total lines found: ${lines.length}`);

        const products = [];
        let skipped = 0;

        const lineRegex = /^(\S+)\s+(.+?)\s+(PCS|SQFT|SQM|SET|KGS|MTR|NA)\s+([-]?\d+(?:\.\d+)?)\s+[\d\.]+\s+([\d,\.]+)\s+([\d,\.]+)\s+(.+)$/;

        for (const line of lines) {
            const trimmedLine = line.trim();
            if (!trimmedLine) continue;

            const match = trimmedLine.match(lineRegex);

            if (match) {
                const purchasePrice = parseFloat(match[5].replace(/,/g, ''));
                const salesPrice = parseFloat(match[6].replace(/,/g, ''));

                products.push({
                    code: match[1],
                    name: match[2].trim(),
                    unit: match[3],
                    stock: parseFloat(match[4]),
                    purchasePrice: isNaN(purchasePrice) ? 0 : purchasePrice,
                    salesPrice: isNaN(salesPrice) ? 0 : salesPrice,
                    company: match[7].trim()
                });
            } else {
                skipped++;
            }
        }

        console.log(`Extracted ${products.length} products.`);

        const dir = path.dirname(OUTPUT_PATH);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        if (products.length > 0) {
            fs.writeFileSync(OUTPUT_PATH, JSON.stringify(products, null, 2));
            console.log(`Successfully wrote data to ${OUTPUT_PATH}`);
        } else {
            console.warn('No products extracted!');
            fs.writeFileSync(OUTPUT_PATH, JSON.stringify([], null, 2));
        }

    } catch (error) {
        console.error('Error processing PDF:', error);
        process.exit(1);
    }
}

processPdf();
