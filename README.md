# TechVision 2025 - Conference Landing Page

A modern, responsive landing page for the TechVision 2025 technology conference built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive**: Fully responsive across all devices
- **Performance Optimized**: Built with Vite for fast builds and optimal performance
- **SEO Ready**: Meta tags, sitemap, and robots.txt included
- **Accessibility**: WCAG compliant components and navigation
- **Analytics Ready**: Conversion tracking and user behavior monitoring
- **Deployment Ready**: Configured for Netlify and Vercel deployment

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 5
- **Styling**: Tailwind CSS, PostCSS
- **Routing**: React Router DOM
- **UI Components**: Radix UI, Framer Motion, Lucide React
- **Forms**: React Hook Form
- **Charts**: Recharts, D3.js
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd techvision_2025
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Preview production build

## 🚀 Deployment

### Netlify Deployment

1. **Connect your repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy** - Netlify will automatically detect the `netlify.toml` configuration

### Vercel Deployment

1. **Connect your repository** to Vercel
2. **Framework preset**: Vite
3. **Deploy** - Vercel will automatically detect the `vercel.json` configuration

### Manual Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your hosting provider

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Input, etc.)
│   ├── ErrorBoundary.jsx
│   ├── ScrollToTop.jsx
│   └── ...
├── pages/              # Page components
│   ├── landing-page/   # Main landing page
│   │   ├── components/ # Landing page sections
│   │   └── index.jsx
│   └── NotFound.jsx
├── styles/             # CSS and Tailwind styles
├── utils/              # Utility functions
├── App.jsx             # Main app component
├── Routes.jsx          # Routing configuration
└── index.jsx           # Entry point
```

## 🎨 Customization

### Colors and Theme

The project uses CSS custom properties for theming. Edit `src/styles/tailwind.css` to customize:

- Primary colors
- Accent colors
- Background colors
- Typography

### Content

Update content in the respective component files:

- `src/pages/landing-page/components/HeroSection.jsx`
- `src/pages/landing-page/components/SpeakerShowcase.jsx`
- `src/pages/landing-page/components/PricingSection.jsx`
- And other section components

### SEO

Update meta tags in `src/pages/landing-page/index.jsx`:

- Title
- Description
- Keywords
- Open Graph tags
- Twitter cards

## 🔧 Configuration Files

- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `netlify.toml` - Netlify deployment configuration
- `vercel.json` - Vercel deployment configuration

## 📊 Performance

The build is optimized with:

- Code splitting for better loading performance
- Manual chunk configuration for optimal caching
- Source maps for debugging
- Gzip compression ready
- Asset optimization

## 🔒 Security

Security headers are configured for:

- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy

## 📈 Analytics

The project includes conversion tracking for:

- Section views
- Scroll depth
- Time on page
- Navigation clicks
- Form submissions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@techvision2025.com or create an issue in the repository.
