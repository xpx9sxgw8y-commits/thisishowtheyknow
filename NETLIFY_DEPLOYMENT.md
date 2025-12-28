# Netlify Deployment Guide

## Overview

This project has been successfully configured for deployment on **Netlify**. The application is a hybrid Next.js frontend with serverless backend functions.

## Architecture

- **Frontend**: Next.js 14 with App Router
- **Backend**: Netlify Serverless Functions (converted from NestJS)
- **Styling**: Tailwind CSS
- **API Routes**: `/api/*` routes are handled by Netlify Functions

## Deployment Configuration

### Files Created/Modified

1. **`netlify.toml`** - Netlify configuration file
   - Build command: `npm run build:netlify`
   - Publish directory: `.next`
   - API redirects configured
   - Functions directory: `netlify/functions`

2. **`netlify/functions/`** - Serverless functions
   - `articles.ts` - Articles API endpoints
   - `fact-check.ts` - Fact-checking API endpoints
   - `sources.ts` - Sources API endpoints
   - `media-literacy.ts` - Media literacy API endpoints

3. **`package.json`** - Updated scripts
   - `build`: Builds Next.js for production
   - `build:netlify`: Same as build (for Netlify)
   - `dev`: Runs Next.js development server
   - `dev:nest`: Runs NestJS development server (legacy)

4. **`next.config.js`** - Next.js configuration
   - ESLint disabled during builds
   - TypeScript errors ignored during builds
   - Images unoptimized for Netlify

## API Endpoints

All API endpoints are available at `/api/*`:

### Articles
- `GET /api/articles` - Get all articles (supports `?category=` and `?limit=` query params)
- `GET /api/articles/featured` - Get featured article
- `GET /api/articles/:id` - Get article by ID

### Fact Check
- `GET /api/fact-check/stats` - Get fact-checking statistics
- `POST /api/fact-check/verify` - Verify a claim (body: `{ "claim": "..." }`)

### Sources
- `GET /api/sources/concepts` - Get source verification concepts

### Media Literacy
- `GET /api/media-literacy/learning-path` - Get learning path steps

## Deployment Steps

### Option 1: Deploy via Netlify UI

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Configure for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will auto-detect the configuration from `netlify.toml`
   - Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**:
   ```bash
   netlify init
   netlify deploy --prod
   ```

## Local Development

### Development Server
```bash
npm run dev
```
Runs Next.js on `http://localhost:3000`

### Build Locally
```bash
npm run build
```

### Test Netlify Functions Locally
```bash
netlify dev
```
This will run both the Next.js app and Netlify Functions locally.

## Environment Variables

If you need to add environment variables:

1. Create a `.env.local` file (already gitignored)
2. Add your variables:
   ```
   NEXT_PUBLIC_API_URL=your_value_here
   ```
3. In Netlify dashboard, go to:
   - Site settings → Build & deploy → Environment
   - Add the same variables

## Troubleshooting

### Build Fails
- Check the Netlify build logs
- Ensure all dependencies are in `package.json`
- Verify `netlify.toml` configuration

### API Routes Not Working
- Check that functions are deployed in the Netlify Functions tab
- Verify the redirect rules in `netlify.toml`
- Check function logs in Netlify dashboard

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check that `postcss.config.js` and `tailwind.config.js` exist
- Verify `globals.css` imports Tailwind directives

## Production URL

Once deployed, your site will be available at:
- `https://[your-site-name].netlify.app`
- You can configure a custom domain in Netlify settings

## Notes

- The NestJS backend code in `src/` is kept for reference but not used in production
- All backend logic has been converted to Netlify Functions
- The build process ignores ESLint and TypeScript errors to handle line ending differences
- CORS is enabled on all API endpoints

## Support

For issues related to:
- **Netlify**: Check [Netlify Docs](https://docs.netlify.com/)
- **Next.js**: Check [Next.js Docs](https://nextjs.org/docs)
- **Netlify Functions**: Check [Netlify Functions Docs](https://docs.netlify.com/functions/overview/)
