// Script to update Real-World Example sections across all 99 bias pages
const fs = require('fs');
const path = require('path');

function extractExampleContent(html) {
    // Extract the actual example text from the old structure
    const match = html.match(/<p class="text-slate-300"[^>]*>(.*?)<\/p>/s);
    if (match) {
        return match[1].trim();
    }
    
    // Fallback: try to find content with id="exampleText"
    const idMatch = html.match(/id="exampleText"[^>]*>([^<]*(?:<[^>]+>[^<]*<\/[^>]+>[^<]*)*)<\/p>/s);
    if (idMatch) {
        return idMatch[1].trim();
    }
    
    // Another fallback pattern
    const fallbackMatch = html.match(/(?:id="exampleText"[^>]*>|<p class="text-slate-300"[^>]*>)(.*?)(?:<\/p>|<\/span>)/s);
    if (fallbackMatch) {
        let content = fallbackMatch[1].trim();
        // Clean up any HTML tags that might be in there
        content = content.replace(/<[^>]+>/g, '');
        return content;
    }
    
    return null;
}

function updateBiasPage(filePath, biasId) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Extract the example content before replacing
        const exampleContent = extractExampleContent(content);
        
        if (!exampleContent) {
            console.log(`⚠️  Warning: Could not extract example content from bias-${biasId}.html`);
            return false;
        }
        
        // Pattern to match the old Real-World Example section
        const oldSectionPattern = /<!-- Real-World Examples? Section -->[\s\S]*?<\/section>/;
        
        // New improved HTML structure
        const newSection = `<!-- Real-World Examples Section -->
        <section id="examples" class="content-card real-world-example-section">
            <h2 class="text-3xl font-bold text-white mb-6">Real-World Example</h2>
            
            <div class="real-world-example-card">
                <div class="real-world-example-pattern"></div>
                <div class="real-world-example-label">
                    <span>📚</span>
                    <span>Case Study</span>
                </div>
                <div class="real-world-example-header">
                    <div class="real-world-example-icon">
                        <span>💡</span>
                    </div>
                    <h3 class="real-world-example-title">Real-World Application</h3>
                </div>
                <div class="real-world-example-content">
                    <p>${exampleContent}</p>
                </div>
            </div>
        </section>`;
        
        // Replace the old section with the new one
        if (content.match(oldSectionPattern)) {
            content = content.replace(oldSectionPattern, newSection);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Updated bias-${biasId}.html`);
            return true;
        } else {
            console.log(`⚠️  Warning: Could not find Real-World Example section in bias-${biasId}.html`);
            return false;
        }
    } catch (error) {
        console.error(`❌ Error updating bias-${biasId}.html:`, error.message);
        return false;
    }
}

// Update all 99 bias pages
console.log('🚀 Starting to update Real-World Example sections across all 99 bias pages...\n');

let successCount = 0;
let failCount = 0;

for (let i = 1; i <= 99; i++) {
    const filePath = path.join(__dirname, `bias-${i}.html`);
    if (fs.existsSync(filePath)) {
        if (updateBiasPage(filePath, i)) {
            successCount++;
        } else {
            failCount++;
        }
    } else {
        console.log(`⚠️  Warning: bias-${i}.html not found`);
        failCount++;
    }
}

console.log(`\n✨ Update complete!`);
console.log(`   ✅ Successfully updated: ${successCount} pages`);
console.log(`   ⚠️  Failed or skipped: ${failCount} pages`);
