// Script to update existing bias pages (1-25) to use all-99-biases.js and update counts
const fs = require('fs');
const path = require('path');

function updateBiasPage(filePath, biasId) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update script reference
    content = content.replace(
        /<script src="cognitive-biases-data\.js"><\/script>/g,
        '<script src="all-99-biases.js"></script>'
    );
    
    // Update count from "of 25" to "of 99"
    content = content.replace(
        /Bias #\d+ of 25/g,
        `Bias #${biasId} of 99`
    );
    
    // For bias-25, update next link from bias-1.html to bias-26.html
    if (biasId === 25) {
        content = content.replace(
            /<a href="bias-1\.html" class="px-3 py-1 bg-slate-600 bg-opacity-50 rounded hover:bg-opacity-70">Next →<\/a>/,
            '<a href="bias-26.html" class="px-3 py-1 bg-slate-600 bg-opacity-50 rounded hover:bg-opacity-70">Next →</a>'
        );
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated bias-${biasId}.html`);
}

// Update all pages from 1 to 25
console.log('Updating existing bias pages 1-25...');

for (let i = 1; i <= 25; i++) {
    const filePath = path.join(__dirname, `bias-${i}.html`);
    if (fs.existsSync(filePath)) {
        updateBiasPage(filePath, i);
    } else {
        console.log(`Warning: bias-${i}.html not found`);
    }
}

console.log('Done! Updated all existing pages.');

