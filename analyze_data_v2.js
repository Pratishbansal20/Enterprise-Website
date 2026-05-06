
const fs = require('fs');
const path = require('path');

try {
    const data = fs.readFileSync(path.join(__dirname, 'src', 'data', 'products.json'), 'utf8');
    const products = JSON.parse(data);

    const analysis = {
        total: products.length,
        brands: {},
        categories: {},
        units: {},
        sizes: {},
        potentialAttributes: {
            thickness: {},
            finish: {}
        }
    };

    products.forEach(p => {
        analysis.brands[p.brand] = (analysis.brands[p.brand] || 0) + 1;
        analysis.categories[p.category] = (analysis.categories[p.category] || 0) + 1;

        // Extract Thickness (e.g. 0.8MM, 1MM)
        const thickMatch = p.name.match(/(\d+(\.\d+)?)MM/i);
        if (thickMatch) {
            const t = thickMatch[0].toUpperCase();
            analysis.potentialAttributes.thickness[t] = (analysis.potentialAttributes.thickness[t] || 0) + 1;
        }

        // Extract Finish (Gloss, Matt, Suede, Texture)
        const nameUpper = p.name.toUpperCase();
        if (nameUpper.includes('GLOSS') || nameUpper.includes('GL')) analysis.potentialAttributes.finish['GLOSS'] = (analysis.potentialAttributes.finish['GLOSS'] || 0) + 1;
        if (nameUpper.includes('MATT') || nameUpper.includes('MT')) analysis.potentialAttributes.finish['MATT'] = (analysis.potentialAttributes.finish['MATT'] || 0) + 1;
        if (nameUpper.includes('SUEDE') || nameUpper.includes('SF')) analysis.potentialAttributes.finish['SUEDE'] = (analysis.potentialAttributes.finish['SUEDE'] || 0) + 1;
        if (nameUpper.includes('TEXTURE')) analysis.potentialAttributes.finish['TEXTURE'] = (analysis.potentialAttributes.finish['TEXTURE'] || 0) + 1;
    });

    console.log(JSON.stringify(analysis, null, 2));
} catch (error) {
    console.error('Error:', error.message);
}
