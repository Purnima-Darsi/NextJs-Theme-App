# Dynamic Theming App

A modern, responsive web application built with Next.js that allows users to customize their app experience with dynamic themes, logo uploads, and personalized branding.

## Features

### **Dynamic Theming**
- 5 pre-built color themes (Default, Ocean, Forest, Sunset, Purple)
- Real-time theme switching
- CSS custom properties for seamless color transitions
- Theme persistence with localStorage

### **Logo Customization**
- Upload custom logos with drag-and-drop interface
- Real-time logo preview
- Automatic image optimization
- Fallback to default "App Logo" placeholder

### **App Personalization**
- Custom app name configuration
- Dynamic header and welcome messages
- Personalized branding throughout the app

### **Authentication System**
- Secure login with NextAuth.js v5
- Protected routes and session management
- Demo credentials provided for testing

### **Modern UI/UX**
- Responsive design with Tailwind CSS
- Clean, intuitive interface
- Smooth animations and transitions
- Professional styling with proper accessibility

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Purnima-Darsi/NextJs-Theme-App.git
   cd NextJs-Theme-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Demo Credentials

For testing the application, use these credentials:
- **Email:** `admin@example.com`
- **Password:** `password`

## Project Structure

```
theming-app/
├── src/                          # Source code
│   ├── app/                      # Next.js App Router
│   │   ├── api/auth/            # NextAuth API routes
│   │   ├── configure/           # Theme configuration page
│   │   ├── login/               # Login page
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   ├── contexts/                # React contexts
│   │   └── ThemeContext.tsx     # Theme state management
│   ├── auth.config.ts           # NextAuth configuration
│   └── auth.ts                  # NextAuth setup
├── public/                      # Static assets
│   └── favicon.ico              # App favicon
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind CSS config
├── tsconfig.json               # TypeScript config
└── next.config.ts              # Next.js config
```

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework

### Authentication
- **NextAuth.js v5** - Authentication library
- **Credentials Provider** - Demo login system

### State Management
- **React Context** - Theme and app state management
- **localStorage** - Persistent configuration storage

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## Available Themes

| Theme Name | Primary Color | Background | Use Case |
|------------|---------------|------------|----------|
| Default    | Blue (#3B82F6) | White | Professional/Corporate |
| Ocean      | Teal (#0891B2) | Light Cyan | Calm/Refreshing |
| Forest     | Green (#059669) | Light Green | Nature/Eco-friendly |
| Sunset     | Orange (#EA580C) | Light Orange | Energetic/Creative |
| Purple     | Purple (#7C3AED) | Light Purple | Modern/Artistic |

## Usage Guide

### 1. **Login**
- Visit the login page
- Use the provided demo credentials
- Or integrate your own authentication system

### 2. **Customize Your App**
- Navigate to the Configure page
- Change the app name
- Upload a custom logo
- Select your preferred color theme
- Click "Save & Continue"

### 3. **Experience Your Theme**
- Return to the home page
- See your customizations applied
- Header, footer, and content adapt to your theme
- Settings persist across sessions

## Configuration

### Environment Variables
```env
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

### Theme Customization
Modify `src/contexts/ThemeContext.tsx` to add new themes:

```tsx
const themes = [
  { 
    name: 'Your Theme', 
    colors: { 
      primary: '#YOUR_COLOR', 
      background: '#YOUR_BG', 
      text: '#YOUR_TEXT' 
    } 
  },
  // ... existing themes
];
```

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The app can be deployed on any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Purnima Darsi**

## Bug Reports & Feature Requests

Please use the [GitHub Issues](https://github.com/Purnima-Darsi/NextJs-Theme-App/issues) page to report bugs or request features.

## Project Status

- ✅ Core theming functionality
- ✅ Authentication system
- ✅ Logo upload feature
- ✅ App name customization
- ✅ Responsive design
- ✅ Theme persistence

---

Made with by [Purnima Darsi]
