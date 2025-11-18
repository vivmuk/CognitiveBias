# Netlify Path Configuration

## ✅ Good News: No Path Issues Online!

All file paths in this project are **relative paths**, which means they work perfectly on Netlify just like they do locally.

## How Relative Paths Work

### Local (with server):
- Server runs from: `google cog bias/` folder
- File accessed: `http://localhost:8000/bias-1.html`
- Paths like `Cog/favicon.ico` resolve to: `google cog bias/Cog/favicon.ico` ✅

### Netlify (deployed):
- Files deployed to: Root of Netlify site
- File accessed: `https://yoursite.netlify.app/bias-1.html`
- Paths like `Cog/favicon.ico` resolve to: `https://yoursite.netlify.app/Cog/favicon.ico` ✅

## Important: Base Directory Setting

When deploying to Netlify, you need to tell Netlify where your files are:

### Option 1: Repository Root is `google cog bias` folder
- **Base directory**: Leave empty (or `.`)
- **Publish directory**: `.` (root)
- ✅ All files are already in the right place

### Option 2: Repository Root is Parent Folder
- **Base directory**: `google cog bias`
- **Publish directory**: `.` (relative to base directory)
- ✅ Netlify will look in the `google cog bias` subfolder

## How to Check Your Repository Structure

1. Go to your GitHub repo: `https://github.com/vivmuk/CognitiveBias`
2. Check if files are directly in root or in `google cog bias` folder
3. Set Netlify base directory accordingly

## All Paths Are Relative ✅

These paths work everywhere:
- `Cog/favicon.ico` (not `/Cog/favicon.ico`)
- `all-99-biases.js` (not `/all-99-biases.js`)
- `venice-api.js` (not `/venice-api.js`)
- `bias-1.html` (not `/bias-1.html`)

## Testing After Deployment

1. Visit your Netlify URL
2. Open browser console (F12)
3. Check for 404 errors
4. If you see 404s, verify:
   - Base directory is set correctly
   - All files are committed to Git
   - Files are in the expected location

## Summary

✅ **Relative paths = Works everywhere**
✅ **No absolute paths = No broken links**
✅ **Same structure locally and online**

The only thing that matters is setting the **Base directory** correctly in Netlify settings!

