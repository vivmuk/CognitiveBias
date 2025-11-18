// Script to add favicon links to all bias pages
const fs = require('fs');
const path = require('path');

const faviconHTML = `
    <!-- Favicon and App Icons -->
    <link rel="icon" type="image/x-icon" href="Cog/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="Cog/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="Cog/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="Cog/favicon-96x96.png">
    
    <!-- Apple Touch Icons -->
    <link rel="apple-touch-icon" sizes="57x57" href="Cog/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="Cog/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="Cog/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="Cog/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="Cog/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="Cog/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="Cog/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="Cog/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="Cog/apple-icon-180x180.png">
    <link rel="apple-touch-icon" href="Cog/apple-icon.png">
    
    <!-- Android Icons -->
    <link rel="manifest" href="Cog/manifest.json">
    
    <!-- Microsoft Tiles -->
    <meta name="msapplication-TileColor" content="#0f3460">
    <meta name="msapplication-TileImage" content="Cog/ms-icon-144x144.png">
    <meta name="msapplication-config" content="Cog/browserconfig.xml">
    
    <!-- Theme Color -->
    <meta name="theme-color" content="#0f3460">
`;

function addFaviconsToFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if favicon already exists
    if (content.includes('Cog/favicon.ico')) {
        console.log(`Skipping ${path.basename(filePath)} - favicon already exists`);
        return;
    }
    
    // Find the <head> tag and insert favicon after viewport meta
    const viewportPattern = /(<meta name="viewport"[^>]*>)/i;
    if (viewportPattern.test(content)) {
        content = content.replace(
            viewportPattern,
            `$1${faviconHTML}`
        );
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Added favicons to ${path.basename(filePath)}`);
    } else {
        // If no viewport, try after charset
        const charsetPattern = /(<meta charset="UTF-8">)/i;
        if (charsetPattern.test(content)) {
            content = content.replace(
                charsetPattern,
                `$1\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">${faviconHTML}`
            );
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Added favicons to ${path.basename(filePath)}`);
        } else {
            console.log(`Warning: Could not find insertion point in ${path.basename(filePath)}`);
        }
    }
}

// Add favicons to all bias pages (1-99)
console.log('Adding favicons to all bias pages...');

for (let i = 1; i <= 99; i++) {
    const filePath = path.join(__dirname, `bias-${i}.html`);
    if (fs.existsSync(filePath)) {
        addFaviconsToFile(filePath);
    }
}

// Also add to test page
const testPagePath = path.join(__dirname, 'test-venice-api.html');
if (fs.existsSync(testPagePath)) {
    addFaviconsToFile(testPagePath);
}

console.log('Done! All pages now have favicons.');

