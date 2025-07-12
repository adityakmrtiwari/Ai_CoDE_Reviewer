# 🧠 AI Code Reviewer - Production Ready

An AI-powered code reviewer built with React, Node.js, Express, and Tailwind CSS. This production-ready application allows developers to upload or type code and receive smart, AI-generated suggestions, improvements, and feedback — all with enterprise-grade security and performance.

## 🚀 Features

- 🌐 **Real-time Code Review** via Google Gemini AI
- ✍️ **Syntax Highlighted Editor** with `react-simple-code-editor` and `Prism.js`
- 📂 **File Upload Support** for `.js`, `.py`, `.cpp`, etc.
- 💬 **Readable Markdown Feedback** from AI
- 🛡️ **Security Features** including rate limiting, input validation, and CORS
- 🌙 **Dark Mode UI**
- 🎨 **Responsive & Dynamic Design** with Tailwind CSS
- 📊 **Health Check Endpoints**
- 🔄 **Error Handling** and logging
- 🚀 **No Authentication Required** - Start reviewing code immediately!
- 💾 **Stateless Architecture** - No database required

## 🏗️ Architecture

```
AI_Code_Reviewer-main/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Business logic
│   │   ├── middleware/      # Validation, security
│   │   ├── routes/          # API endpoints
│   │   └── services/        # AI integration
│   ├── server.js            # Server entry point
│   └── package.json         # Backend dependencies
├── frontend/
│   ├── src/                 # React source code
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite config
├── .gitignore
├── README.md
```

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **express-validator** for input validation
- **helmet** for security headers
- **express-rate-limit** for rate limiting
- **Google Gemini AI** for code analysis

### Frontend
- **React 19** with Vite
- **React Router** for navigation
- **Tailwind CSS** for styling
- **React Toastify** for notifications
- **React Simple Code Editor** with syntax highlighting

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- Google Gemini API key

### 1. Clone and Setup
```bash
git clone <repository-url>
cd AI_Code_Reviewer-main
```

### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create environment file
# Create .env file manually with your configuration
```

### 3. Frontend Setup
```bash
cd ../frontend

# Install dependencies
npm install

# Create .env file for frontend
# Example:
echo VITE_API_URL=http://localhost:3000 > .env
# For production, set VITE_API_URL to your deployed backend URL
```

### 4. Environment Configuration
#### Backend `.env` example:
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# AI API Configuration
GEMINI_API_KEY=your-gemini-api-key-here

# CORS Configuration
CORS_ORIGIN=http://localhost:5173
CORS_ORIGIN_PROD=https://yourdomain.com
```
#### Frontend `.env` example:
```env
VITE_API_URL=http://localhost:3000
# For production: VITE_API_URL=https://your-backend-url.com
```

### 5. Start Development Servers
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## 🔐 Security Features

### Input Validation
- Code length limits
- XSS protection

### Security Headers
- Helmet.js for security headers
- CORS configuration
- Rate limiting (100 requests per 15 minutes)
- Request size limits

## 📊 API Endpoints

### AI Code Review
- `POST /api/ai/review` - Submit code for review

### Health Check
- `GET /health` - Server health status

## 🚀 Production Deployment

1. Deploy backend and frontend separately (e.g., Render for backend, Vercel for frontend)
2. Set environment variables as shown above for production
3. Make sure your frontend `.env` uses your deployed backend URL
4. For custom domains, update CORS and environment variables accordingly

## 🔧 Development

### Code Quality
```bash
# Lint frontend
cd frontend
npm run lint
```

## 📈 Monitoring & Logging

- Global error handling with detailed error messages
- Health check endpoint for monitoring

## 🎯 Usage

1. **Navigate to the Review Page**: Click "Review" in the navigation
2. **Upload or Type Code**: Either upload a file or type code directly in the editor
3. **Get AI Review**: Click "Review Code" to receive instant feedback
4. **Review Results**: View detailed analysis, error detection, and improvement suggestions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Google Gemini AI for providing the AI capabilities
- The React and Node.js communities for excellent tooling
- Tailwind CSS for the beautiful UI framework

