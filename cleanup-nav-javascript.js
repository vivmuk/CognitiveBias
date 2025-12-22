// Script to remove JavaScript references to floating-nav from all 99 bias pages
const fs = require('fs');
const path = require('path');

function cleanupNavJavaScript(filePath, biasId) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Remove JavaScript code that references floating-nav
        // Pattern 1: Remove lines that update floating-nav classes
        const pattern1 = /document\.querySelectorAll\(['"]\.floating-nav[^)]+\)\.forEach\([^)]+\);?\s*/g;
        if (content.match(pattern1)) {
            content = content.replace(pattern1, '');
            modified = true;
        }
        
        // Pattern 2: Remove querySelector for floating-nav elements
        const pattern2 = /const\s+\w+\s*=\s*document\.querySelector\(['"]\.floating-nav[^)]+\);?\s*/g;
        if (content.match(pattern2)) {
            content = content.replace(pattern2, '');
            modified = true;
        }
        
        // Pattern 3: Remove lines that set active class on floating-nav items
        const pattern3 = /navItem\.classList\.add\(['"]active['"]\);?\s*/g;
        if (content.match(pattern3)) {
            content = content.replace(pattern3, '');
            modified = true;
        }
        
        // Pattern 4: Remove activeLink references if they're for floating-nav
        const pattern4 = /const\s+activeLink\s*=\s*document\.querySelector\(['"]\.floating-nav[^)]+\);?\s*/g;
        if (content.match(pattern4)) {
            content = content.replace(pattern4, '');
            modified = true;
        }
        
        // Pattern 5: More general - remove any line containing floating-nav in querySelector
        const pattern5 = /[^\n]*\.floating-nav[^\n]*\n/g;
        const beforeCount = (content.match(/\.floating-nav/g) || []).length;
        content = content.replace(pattern5, '');
        const afterCount = (content.match(/\.floating-nav/g) || []).length;
        
        if (beforeCount !== afterCount) {
            modified = true;
        }
        
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Cleaned up floating-nav JavaScript from bias-${biasId}.html`);
            return true;
        } else {
            // Check if there are any remaining floating-nav references
            if (content.includes('floating-nav')) {
                console.log(`⚠️  Still has floating-nav references in bias-${biasId}.html (may need manual cleanup)`);
            }
            return false;
        }
    } catch (error) {
        console.error(`❌ Error updating bias-${biasId}.html:`, error.message);
        return false;
    }
}

// Clean up JavaScript references from all 99 bias pages
console.log('🚀 Starting to clean up floating-nav JavaScript references from all 99 bias pages...\n');

let successCount = 0;
let failCount = 0;

for (let i = 1; i <= 99; i++) {
    const filePath = path.join(__dirname, `bias-${i}.html`);
    if (fs.existsSync(filePath)) {
        if (cleanupNavJavaScript(filePath, i)) {
            successCount++;
        } else {
            failCount++;
        }
    } else {
        console.log(`⚠️  Warning: bias-${i}.html not found`);
        failCount++;
    }
}

console.log(`\n✨ Cleanup complete!`);
console.log(`   ✅ Successfully updated: ${successCount} pages`);
console.log(`   ⚠️  No changes needed or skipped: ${failCount} pages`);
