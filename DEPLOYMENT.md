# 🚀 Production Deployment Guide

## 📋 Pre-Deployment Checklist

### ✅ Backend Requirements
- [ ] Node.js 18+ installed
- [ ] Google Gemini API key obtained
- [ ] Environment variables configured
- [ ] All dependencies installed
- [ ] Security settings configured

### ✅ Frontend Requirements
- [ ] Node.js 18+ installed
- [ ] Environment variables configured
- [ ] All dependencies installed
- [ ] Build process tested

## 🌐 Deployment Platforms

### Backend Deployment Options:
1. **Render** (Recommended)
2. **Railway**
3. **Heroku**
4. **DigitalOcean App Platform**
5. **AWS EC2**
6. **Vercel** (Serverless)

### Frontend Deployment Options:
1. **Vercel** (Recommended)
2. **Netlify**
3. **GitHub Pages**
4. **Firebase Hosting**
5. **AWS S3 + CloudFront**

## 🔧 Environment Configuration

### Backend Production Environment
Create `.env` file in backend directory:
```env
# Server Configuration
PORT=3000
NODE_ENV=production

# AI API Configuration
GEMINI_API_KEY=your-production-gemini-api-key-here

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# CORS Configuration
CORS_ORIGIN=https://your-frontend-domain.com
CORS_ORIGIN_PROD=https://your-frontend-domain.com

# Security
HELMET_ENABLED=true
```

### Frontend Production Environment
Create `.env` file in frontend directory:
```env
VITE_API_URL=https://your-backend-domain.com
```

## 🚀 Step-by-Step Deployment

### 1. Backend Deployment (Render Example)

1. **Create Render Account**
   - Sign up at [render.com](https://render.com)

2. **Create New Web Service**
   - Connect your GitHub repository
   - Select the backend directory
   - Choose Node.js environment

3. **Configure Environment Variables**
   ```
   NODE_ENV=production
   GEMINI_API_KEY=your-gemini-api-key
   CORS_ORIGIN=https://your-frontend-domain.com
   CORS_ORIGIN_PROD=https://your-frontend-domain.com
   ```

4. **Build Settings**
   - Build Command: `npm install`
   - Start Command: `npm start`

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Note your backend URL (e.g., `https://your-app.onrender.com`)

### 2. Frontend Deployment (Vercel Example)

1. **Create Vercel Account**
   - Sign up at [vercel.com](https://vercel.com)

2. **Import Project**
   - Connect your GitHub repository
   - Select the frontend directory

3. **Configure Environment Variables**
   ```
   VITE_API_URL=https://your-backend-domain.com
   ```

4. **Build Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Note your frontend URL

## 🔒 Security Checklist

### Backend Security
- [ ] Environment variables are set (not hardcoded)
- [ ] CORS is properly configured for production domains
- [ ] Rate limiting is enabled
- [ ] Helmet security headers are active
- [ ] API keys are secured
- [ ] Error messages don't expose sensitive information

### Frontend Security
- [ ] Environment variables are properly configured
- [ ] API calls use HTTPS
- [ ] No sensitive data in client-side code
- [ ] Build is optimized and minified

## 📊 Monitoring & Health Checks

### Health Check Endpoint
Your backend provides a health check at:
```
GET https://your-backend-domain.com/health
```

Expected response:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "production"
}
```

### Monitoring Setup
1. **Uptime Monitoring**: Use services like UptimeRobot or Pingdom
2. **Error Tracking**: Consider Sentry for error monitoring
3. **Performance Monitoring**: Use platform-specific tools

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure CORS_ORIGIN is set to your frontend domain
   - Check that the domain includes the protocol (https://)

2. **API Key Issues**
   - Verify GEMINI_API_KEY is correctly set
   - Check API key permissions and quotas

3. **Build Failures**
   - Ensure all dependencies are in package.json
   - Check Node.js version compatibility

4. **Environment Variables**
   - Verify all required variables are set
   - Check for typos in variable names

### Debug Commands

```bash
# Test backend locally
cd backend
npm install
npm start

# Test frontend locally
cd frontend
npm install
npm run build
npm run preview
```

## 📈 Performance Optimization

### Backend
- Rate limiting prevents abuse
- Request size limits prevent large payloads
- Error handling prevents crashes

### Frontend
- Code splitting for better loading
- Minified builds for smaller file sizes
- Optimized images and assets

## 🔄 CI/CD Setup (Optional)

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Render
        # Add your deployment steps here

  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        # Add your deployment steps here
```

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review platform-specific documentation
3. Check application logs in your deployment platform
4. Verify environment variables are correctly set

---

**Happy Deploying! 🚀** 