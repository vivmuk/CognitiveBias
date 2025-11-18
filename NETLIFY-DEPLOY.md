# Deploying to Netlify

## Quick Deploy Steps

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Go to [Netlify](https://app.netlify.com)**
   - Sign in or create an account
   - Click "Add new site" → "Import an existing project"

2. **Connect to GitHub**
   - Select your repository: `vivmuk/CognitiveBias`
   - Netlify will automatically detect the settings

3. **Build Settings**
   - **Build command**: Leave empty (static site)
   - **Publish directory**: `.` (root directory)
   - **Base directory**: Leave empty (all files are now in the repo root)

4. **Deploy**
   - Click "Deploy site"
   - Netlify will deploy your site automatically

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Option 3: Drag & Drop

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop the `google cog bias` folder
3. Your site will be live instantly!

## Configuration

The project includes:
- `netlify.toml` - Netlify configuration file
- `_redirects` - URL redirects
- `index.html` - Redirects to main hub

## Site Settings

After deployment, configure:

1. **Site Name**: Change in Site settings → General → Site details
2. **Custom Domain**: Add in Domain settings
3. **Environment Variables**: If needed for Venice AI API key (optional)

## Important Notes

### Venice AI API Key
- The API key is currently in `venice-api.js`
- For production, consider using Netlify Environment Variables:
  1. Go to Site settings → Environment variables
  2. Add `VENICE_API_KEY` with your key
  3. Update `venice-api.js` to read from environment:
     ```javascript
     this.apiKey = process.env.VENICE_API_KEY || 'your-default-key';
     ```

### CORS Issues
- Netlify handles CORS automatically
- All API calls should work from the deployed site

### File Size
- Large files (like PDFs) may need to be excluded
- Check `.gitignore` for excluded files

## Post-Deployment

1. **Test the site**: Visit your Netlify URL
2. **Test Venice AI**: Click on any bias and test the AI exploration
3. **Check console**: Open browser DevTools (F12) to check for errors

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch will auto-deploy
- Netlify will show deployment status
- You can preview deployments before going live

## Troubleshooting

### Build Fails
- Check Netlify build logs
- Ensure all files are committed to Git
- Verify `netlify.toml` syntax

### API Not Working
- Check browser console for CORS errors
- Verify API key is correct
- Test using `test-venice-api.html`

### Pages Not Loading
- Check file paths are relative (not absolute)
- Verify all HTML files are in root directory
- Check `_redirects` file is correct

## Support

For issues:
1. Check Netlify build logs
2. Check browser console (F12)
3. Test locally first using `start-server.bat`

