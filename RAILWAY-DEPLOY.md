# Deploying to Railway

## Quick Deploy Steps

### Option 1: Deploy via Railway Dashboard (Recommended)

1. **Go to [Railway](https://railway.app)**
   - Sign in or create an account (GitHub login works great)
   - Click "New Project"

2. **Connect to GitHub**
   - Select "Deploy from GitHub repo"
   - Choose your repository: `vivmuk/CognitiveBias`
   - Railway will automatically detect it's a Node.js project

3. **Configure Deployment**
   - Railway will automatically:
     - Detect `package.json`
     - Install dependencies (`express`)
     - Run `npm start` (which runs `server.js`)
   - No additional configuration needed!

4. **Deploy**
   - Railway will automatically deploy
   - You'll get a URL like: `https://your-app-name.up.railway.app`

### Option 2: Deploy via Railway CLI

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Deploy
railway up
```

### Option 3: Deploy via GitHub Integration

1. Push your code to GitHub
2. In Railway dashboard:
   - New Project → Deploy from GitHub repo
   - Select your repo
   - Railway auto-deploys on every push!

## Configuration

The project includes:
- `package.json` - Node.js dependencies and scripts
- `server.js` - Express server to serve static files
- `railway.json` - Railway configuration (optional)

## Environment Variables

**IMPORTANT**: You MUST set the Venice API key as an environment variable for security!

1. Go to Railway dashboard
2. Select your project
3. Go to "Variables" tab
4. Click "New Variable"
5. Add:
   - **Name**: `VENICE_API_KEY`
   - **Value**: `-28c7m7CCiJxA20hQH8fHnxTqTwYFxPvfO3LnkTMgP` (your actual API key)
6. Click "Add"

**Why?**
- The API key is now stored securely server-side
- It's never exposed to the client/browser
- The Express server proxies API requests, keeping the key safe
- This also solves CORS issues!

**Note**: `PORT` is set automatically by Railway - you don't need to set it.

## Custom Domain

1. In Railway dashboard → Settings
2. Click "Generate Domain" or add custom domain
3. Railway provides free HTTPS automatically!

## How It Works

- **Express Server**: Serves all static files (HTML, CSS, JS)
- **Port**: Railway sets `PORT` environment variable automatically
- **Static Files**: All files in the root directory are served
- **Routes**: 
  - `/` → redirects to `/bias-learning-hub.html`
  - `/index.html` → redirects to `/bias-learning-hub.html`
  - `/health` → health check endpoint

## Advantages of Railway

✅ **Simple Deployment**: Just connect GitHub and deploy
✅ **Auto HTTPS**: Free SSL certificates
✅ **Custom Domains**: Easy domain setup
✅ **Environment Variables**: Secure API key storage
✅ **Auto Deploys**: Deploys on every Git push
✅ **Logs**: Built-in logging dashboard
✅ **Scaling**: Easy to scale if needed

## Troubleshooting

### Build Fails
- Check Railway build logs
- Ensure `package.json` is correct
- Verify Node.js version (18+)

### Site Not Loading
- Check Railway deployment logs
- Verify `server.js` is running
- Check the generated URL

### API Not Working
- Check browser console for errors
- Verify CORS settings (Railway should handle this)
- Check API key is correct in `venice-api.js`

## Post-Deployment

1. **Test the site**: Visit your Railway URL
2. **Test Venice AI**: Try the AI exploration features
3. **Check logs**: Railway dashboard → Deployments → View logs
4. **Set up custom domain** (optional)

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch = automatic deployment
- Railway shows deployment status
- Rollback available if needed

## Cost

- **Free tier**: $5 credit/month (plenty for this static site)
- **Hobby plan**: $5/month for more resources
- This static site uses minimal resources

Enjoy your deployed Cognitive Bias Learning Hub! 🚀

