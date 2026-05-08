# 🔐 Auth Project - IdentityPro Authentication System

A modern, secure authentication system built with **HTML**, **CSS**, and **JavaScript**, integrated with **Supabase** for backend authentication and database management.

## 📋 Project Overview

**IdentityPro** is a comprehensive authentication application that provides:
- User registration (Sign up)
- User login (Log in)
- Password recovery (Forgot password)
- Password reset functionality
- Protected routes (Dashboard accessible only to logged-in users)
- Social authentication (Google & GitHub OAuth)
- Secure session management

## 🎯 Features

### ✨ Core Authentication Features
- **Email-based Authentication**: Sign up and log in with email and password
- **Password Security**: 
  - Minimum 12 characters with special symbols required
  - Password visibility toggle
  - Secure password reset flow
- **Protected Routes**: Dashboard only accessible to authenticated users
- **Social Login**: OAuth integration with Google and GitHub
- **Session Management**: Auto logout and user session tracking
- **Error Handling**: User-friendly error messages and validation

### 🔒 Security Features
- Client-side password validation
- Secure token management
- Protected route authentication
- Logout functionality to clear sessions
- HTTPS-ready architecture

## 📁 Project Structure

```
Auth Project/
├── index.html                 # Dashboard (Protected route)
├── signin.html               # Sign up page
├── login.html                # Login page
├── forgot-password.html      # Forgot password page
├── resset-password.html      # Reset password page
├── CSS/
│   ├── index.css            # Dashboard styling
│   ├── signup.css           # Sign up form styling
│   └── login.css            # Login & forgot password styling
└── supaBase/
    ├── config/
    │   ├── auth.js          # Authentication logic
    │   └── protected.js     # Protected route middleware
    └── [Additional files]
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Supabase project account
- Internet connection for OAuth features

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/MOHSIN777333/Projects-HTML-CSS-JAVASCRIPT-.git
cd "Auth Project"
```

2. **Configure Supabase**
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Update `supaBase/config/auth.js` with your Supabase URL and API key
   - Enable Google and GitHub OAuth providers in Supabase settings

3. **Run the application**
   - Use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```
   - Open `http://localhost:8000` in your browser

## 📄 Page Documentation

### 1. **Sign Up Page** (`signin.html`)
- Create new account with email and password
- Password validation (12+ chars with special symbols)
- Terms of Service agreement checkbox
- Social signup with Google & GitHub
- Link to login page for existing users

**Key Features:**
- Real-time password strength validation
- Eye icon to toggle password visibility
- Professional UI with gradient styling
- Terms & Privacy Policy links

### 2. **Login Page** (`login.html`)
- Log in with email and password
- OAuth login options (Google, GitHub)
- Forgot password recovery link
- Sign up link for new users
- Error message display

**Key Features:**
- Simple, clean interface
- Persistent error messaging
- Quick access to password recovery
- Responsive design

### 3. **Forgot Password Page** (`forgot-password.html`)
- Request password reset via email
- User-friendly instructions
- Success/error notifications
- Return to login option

**Key Features:**
- Email verification
- Reset link delivery
- Clear messaging
- Easy navigation back to login

### 4. **Reset Password Page** (`resset-password.html`)
- Set new password after email verification
- Password update confirmation
- Error handling for invalid tokens
- Redirect to login after successful reset

**Key Features:**
- Token-based password reset
- Password update confirmation
- Error messaging for expired tokens
- Automatic redirect on success

### 5. **Dashboard/Home Page** (`index.html`)
- Welcome message with user's name
- Display logged-in user's email
- Protected route indicator
- Logout functionality
- User session information

**Key Features:**
- Personalized welcome message
- Active session display
- One-click logout
- Protected route badge

## 💻 Technology Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup & structure |
| **CSS3** | Styling, animations, responsive design |
| **JavaScript (ES6+)** | Client-side logic & interactivity |
| **Supabase** | Backend, authentication, database |
| **Google OAuth** | Social login integration |
| **GitHub OAuth** | Social login integration |

## 🔧 Configuration

### Supabase Setup

1. Create `.env` file or update `supaBase/config/auth.js`:
```javascript
const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_KEY = "YOUR_SUPABASE_ANON_KEY";
```

2. Enable OAuth providers:
   - Navigate to Authentication > Providers in Supabase
   - Enable Google OAuth
   - Enable GitHub OAuth
   - Configure redirect URLs

3. Set redirect URLs:
   - Authorized redirect URIs: `http://localhost:8000/index.html`
   - Sign out URL: `http://localhost:8000/login.html`

## 🎨 Styling

### Color Scheme
- **Primary**: Blue/Purple gradients
- **Secondary**: Dark theme with light text
- **Accent**: Green for success, Red for errors
- **Background**: Dark with subtle gradients

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Touch-friendly button sizes
- Readable font sizes on all devices

## 🔐 Security Considerations

- ✅ Password minimum 12 characters with special symbols
- ✅ Input validation on all forms
- ✅ Protected routes check authentication status
- ✅ Secure token handling
- ✅ Auto-logout on session expiry
- ✅ Environment variables for sensitive data

## 🚀 Deployment

### Deployment Options

1. **Vercel** (Recommended)
```bash
npm install -g vercel
vercel
```

2. **Netlify**
```bash
npm run build
# Drag and drop to netlify.com
```

3. **GitHub Pages**
```bash
git push origin main
# Enable GitHub Pages in repository settings
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| OAuth not working | Check Supabase OAuth keys and redirect URLs |
| Password validation failing | Ensure 12+ chars with special symbols |
| Can't access dashboard | Clear browser cache and re-login |
| Email not sending | Verify Supabase email settings |
| CORS errors | Check Supabase CORS settings |

## 📝 API Endpoints Used

### Authentication
- `POST /auth/v1/signup` - Create new account
- `POST /auth/v1/token?grant_type=password` - Login
- `POST /auth/v1/recover` - Request password reset
- `POST /auth/v1/verify` - Verify reset token

### User Management
- `GET /auth/v1/user` - Get current user
- `POST /auth/v1/logout` - Logout user
- `PUT /auth/v1/user` - Update user profile

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**MOHSIN777333**
- GitHub: [@MOHSIN777333](https://github.com/MOHSIN777333)

## 🙏 Acknowledgments

- Supabase team for excellent backend-as-a-service platform
- UI/UX inspiration from modern authentication systems
- Community feedback and contributions

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing documentation
- Review Supabase docs at [supabase.com/docs](https://supabase.com/docs)

---

**Last Updated**: May 8, 2026
**Version**: 1.0.0
**Status**: ✅ Production Ready
