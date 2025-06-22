# 🧠 AI Code Reviewer - Production Ready

An AI-powered code reviewer built with React, Node.js, Express, MongoDB, and Tailwind CSS. This production-ready application allows developers to upload or type code and receive smart, AI-generated suggestions, improvements, and feedback — all with enterprise-grade security and performance.

## 🚀 Features

- 🔐 **Secure Authentication** with JWT tokens and bcrypt password hashing
- 🗄️ **MongoDB Database** for persistent user data storage
- 🌐 **Real-time Code Review** via Google Gemini AI
- ✍️ **Syntax Highlighted Editor** with `react-simple-code-editor` and `Prism.js`
- 📂 **File Upload Support** for `.js`, `.py`, `.cpp`, etc.
- 💬 **Readable Markdown Feedback** from AI
- 🔒 **Protected Routes** with middleware authentication
- 🛡️ **Security Features** including rate limiting, input validation, and CORS
- 🧑‍💻 **User Profiles** with session persistence
- 🌙 **Dark Mode UI**
- 🎨 **Responsive & Dynamic Design** with Tailwind CSS
- 📊 **Health Check Endpoints**
- 🔄 **Error Handling** and logging

## 🏗️ Architecture

```
AI_Code_Reviewer-main/
├── backend/
│   ├── src/
│   │   ├── config/          # Database configuration
│   │   ├── controllers/     # Business logic
│   │   ├── middleware/      # Auth, validation, security
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API endpoints
│   │   └── services/        # AI integration
│   ├── scripts/             # Admin creation script
│   ├── Dockerfile           # Backend Dockerfile (optional)
│   └── server.js            # Server entry point
├── frontend/
│   ├── src/                 # React source code
│   ├── Dockerfile           # Frontend Dockerfile (optional)
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite config
├── .gitignore
├── README.md
```

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
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
- MongoDB (local or MongoDB Atlas)
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
cp .env.example .env # (if you have a template, otherwise create manually)

# Edit .env with your configuration
# See below for required variables
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

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/ai_code_reviewer
MONGODB_URI_PROD=mongodb+srv://username:password@cluster.mongodb.net/ai_code_reviewer

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d

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

### Authentication & Authorization
- JWT-based authentication with configurable expiration
- Password hashing with bcrypt (12 salt rounds)
- Protected routes with middleware
- User role management (user/admin)

### Input Validation
- Email format validation
- Password strength requirements
- Code length limits
- XSS protection

### Security Headers
- Helmet.js for security headers
- CORS configuration
- Rate limiting (100 requests per 15 minutes)
- Request size limits

### Database Security
- MongoDB injection protection via Mongoose
- Input sanitization
- Secure connection strings

## 📊 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update profile (protected)
- `PUT /api/auth/change-password` - Change password (protected)

### AI Code Review
- `POST /api/ai/review` - Submit code for review (protected)

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

- Health check endpoint: `/health`
- Error logging with stack traces
- Custom application logs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the API endpoints

---

**Note**: This is a production-ready application with enterprise-grade security features. Make sure to:
- Change default secrets in production
- Use HTTPS in production
- Set up proper monitoring and logging
- Regular security updates
- Database backups

