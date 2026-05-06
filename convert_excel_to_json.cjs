const XLSX = require('xlsx');
const fs = require('fs');

const getCategory = (itemName) => {
    if (!itemName) return 'Miscellaneous';
    const name = itemName.toString().toUpperCase();

    // Categorization Logic
    if (name.includes('LAMINATE') || name.includes('MICA') || name.includes('VIRGO') || name.includes('MERINO')) return 'Laminates';
    if (name.includes('PLY') || name.includes('BLOCK BOARD') || name.includes('FLUSH DOOR') || name.includes('TEAK') || name.includes('CHEE') || name.includes('GURJAN')) return 'Plywood';
    if (name.includes('PVC') || name.includes('WPC') || name.includes('FOAM')) return 'PVC Boards';
    if (name.includes('ADHESIVE') || name.includes('FEVICOL') || name.includes('SH') || name.includes('HEATX') || name.includes('JIVANJOR') || name.includes('HARDENER') || name.includes('RESIN')) return 'Adhesives';
    if (name.includes('ACRYLIC')) return 'Acrylic';
    if (name.includes('HINGE') || name.includes('LOCK') || name.includes('HANDLE') || name.includes('CHANNEL') || name.includes('TELESCOPIC') || name.includes('AUTO') || name.includes('SCREW') || name.includes('NAIL') || name.includes('KNOB') || name.includes('MAGNET') || name.includes('STOPPER')) return 'Hardware';

    return 'Miscellaneous';
};

try {
    const workbook = XLSX.readFile('Stock name and codes.xlsx');
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    let headerRowIndex = -1;
    let codeIndex = -1;
    let nameIndex = -1;

    // Find header row dynamically
    for (let i = 0; i < rawData.length; i++) {
        const row = rawData[i];
        const rowStr = JSON.stringify(row).toLowerCase();

        if (rowStr.includes('code')) {
            headerRowIndex = i;

            // Find specific column indexes
            row.forEach((cell, idx) => {
                if (!cell) return;
                const txt = cell.toString().toLowerCase().trim();

                if (txt === 'code') codeIndex = idx;
                else if (txt.includes('name') || txt.includes('item') || txt.includes('product') || txt.includes('particular')) nameIndex = idx;
            });

            if (codeIndex !== -1 && nameIndex !== -1) break;
        }
    }

    if (headerRowIndex === -1 || codeIndex === -1 || nameIndex === -1) {
        console.error('Could not find Headers (Code, Name). Headers found:', rawData[headerRowIndex]);
        process.exit(1);
    }

    console.log(`Headers found at row ${headerRowIndex}. Code Code: ${codeIndex}, Name Col: ${nameIndex}`);

    const products = [];

    // Parse Data
    for (let i = headerRowIndex + 1; i < rawData.length; i++) {
        const row = rawData[i];
        if (!row || !row[nameIndex]) continue;

        const itemName = row[nameIndex].toString().trim();
        if (itemName === '' || itemName.toLowerCase() === 'total') continue;

        const rawCode = row[codeIndex];
        const code = (rawCode !== undefined && rawCode !== null) ? rawCode.toString().trim() : 'N/A';

        const category = getCategory(itemName);
        let id = code !== 'N/A' ? code.replace(/[^a-zA-Z0-9]/g, '') : `MISC${products.length}`;
        if (!id || id.length < 2) id = `ITEM${products.length + Date.now()}`;

        products.push({
            id: id,
            code: code,
            name: itemName,
            brand: "Generic",
            category: category,
            size: "Standard",
            unit: "Unit",
            description: itemName,
            features: [category, "In Stock"]
        });
    }

    fs.writeFileSync('src/data/products.json', JSON.stringify(products, null, 2));
    console.log(`Successfully converted ${products.length} items to products.json`);

    // Log for validation
    const counts = {};
    products.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
    console.log('Categories:', counts);

} catch (e) {
    console.error('Error:', e);
}
