const XLSX = require('xlsx');

try {
    const workbook = XLSX.readFile('Stock name and codes.xlsx');
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    // Check rows 0 to 5
    for (let i = 0; i < 6; i++) {
        console.log(`Row ${i}:`, JSON.stringify(rawData[i]));
    }

} catch (e) {
    console.error(e);
}
