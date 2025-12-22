// Script to remove floating navigation panel from all 99 bias pages
const fs = require('fs');
const path = require('path');

function removeNavigationPanel(filePath, biasId) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Pattern to match the floating-nav div and its contents
        // This matches the entire floating-nav section including the opening and closing tags
        const floatingNavPattern = /<div class="floating-nav">[\s\S]*?<\/div>\s*(?=<div class="bias-page-shell"|$)/;
        
        if (content.match(floatingNavPattern)) {
            content = content.replace(floatingNavPattern, '');
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Removed navigation panel from bias-${biasId}.html`);
            return true;
        } else {
            // Try alternative pattern (more flexible)
            const altPattern = /<div class="floating-nav">[\s\S]*?<\/div>/;
            if (content.match(altPattern)) {
                content = content.replace(altPattern, '');
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`✅ Removed navigation panel from bias-${biasId}.html (alt pattern)`);
                return true;
            } else {
                console.log(`⚠️  Could not find floating-nav in bias-${biasId}.html`);
                return false;
            }
        }
    } catch (error) {
        console.error(`❌ Error updating bias-${biasId}.html:`, error.message);
        return false;
    }
}

// Remove navigation panel from all 99 bias pages
console.log('🚀 Starting to remove floating navigation panel from all 99 bias pages...\n');

let successCount = 0;
let failCount = 0;

for (let i = 1; i <= 99; i++) {
    const filePath = path.join(__dirname, `bias-${i}.html`);
    if (fs.existsSync(filePath)) {
        if (removeNavigationPanel(filePath, i)) {
            successCount++;
        } else {
            failCount++;
        }
    } else {
        console.log(`⚠️  Warning: bias-${i}.html not found`);
        failCount++;
    }
}

console.log(`\n✨ Removal complete!`);
console.log(`   ✅ Successfully updated: ${successCount} pages`);
console.log(`   ⚠️  Failed or skipped: ${failCount} pages`);
