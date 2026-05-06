
const fs = require('fs');
const products = require('./src/data/products.json');

const analysis = {
    total: products.length,
    brands: {},
    categories: {},
    units: {},
    sizes: {},
    namePatterns: []
};

products.forEach(p => {
    analysis.brands[p.brand] = (analysis.brands[p.brand] || 0) + 1;
    analysis.categories[p.category] = (analysis.categories[p.category] || 0) + 1;
    analysis.units[p.unit] = (analysis.units[p.unit] || 0) + 1;
    analysis.sizes[p.size] = (analysis.sizes[p.size] || 0) + 1;
});

console.log(JSON.stringify(analysis, null, 2));
