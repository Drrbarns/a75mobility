# Deployment Guide

## GitHub Repository
✅ Successfully pushed to: https://github.com/Drrbarns/a75mobility.git

## Deploying to Vercel

### Option 1: Using Vercel Dashboard (Recommended)

1. Go to [Vercel](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import the `Drrbarns/a75mobility` repository
5. Configure the project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
   - **Install Command**: `npm install`
6. Click "Deploy"

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd d:\Websites\a75mobility

# Deploy to Vercel
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? a75mobility
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

## Environment Variables (Optional)

If you need to set environment variables:

1. In Vercel Dashboard, go to your project
2. Navigate to Settings → Environment Variables
3. Add any required variables:
   - `VITE_SITE_URL` - Your production URL (e.g., https://a75mobility.vercel.app)
   - Any API keys or configuration values

## Post-Deployment

After deployment:

1. ✅ Update `index.html` canonical URL with your Vercel URL
2. ✅ Update `public/sitemap.xml` with your Vercel URL
3. ✅ Update `public/robots.txt` with your Vercel URL
4. ✅ Test all pages and functionality
5. ✅ Submit sitemap to Google Search Console

## Custom Domain (Optional)

To add a custom domain:

1. In Vercel Dashboard, go to your project
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request

## Monitoring

Monitor your deployment at:
- Vercel Dashboard: https://vercel.com/dashboard
- Analytics: Enable in project settings
- Logs: Available in deployment details
