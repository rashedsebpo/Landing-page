# SEBPO Landing Page

A modern, responsive landing page built with React, Vite, Tailwind CSS, and Framer Motion, recreating the SEBPO company design.

## 🚀 Features

- **React 18** - Modern React with hooks and functional components
- **Vite** - Lightning fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Smooth animations and transitions
- **Responsive Design** - Mobile-first approach with responsive breakpoints
- **Modern UI/UX** - Clean, professional design matching the original Figma design

## 📁 Project Structure

```
sebpo-landing/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Main hero section with SEBPO branding
│   │   ├── TrustedBrands.jsx  # Trusted brands showcase
│   │   ├── Stats.jsx          # Animated statistics section
│   │   └── RecentWorks.jsx    # Portfolio/recent works section
│   ├── App.jsx                # Main App component
│   ├── main.jsx               # React entry point
│   └── style.css              # Global styles with Tailwind directives
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite configuration
└── README.md                  # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd sebpo-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Design Features

### Color Palette
- **Primary Blue**: `#1e88e5` (sebpo-blue)
- **Dark Blue**: `#0d47a1` (sebpo-dark-blue)
- **Orange**: `#ff9800` (sebpo-orange)
- **Yellow**: `#ffc107` (sebpo-yellow)

### Components Overview

1. **Hero Section**
   - Gradient background with SEBPO branding
   - Animated logo and text
   - Call-to-action button
   - Responsive typography

2. **Trusted Brands**
   - Grid layout of partner companies
   - Hover effects and animations
   - Responsive grid (2-4-8 columns)

3. **Statistics**
   - Animated counters
   - Icon representations
   - Staggered animations

4. **Recent Works**
   - Portfolio showcase
   - Card-based layout
   - Hover animations
   - Pagination dots

## 🔧 Customization

### Adding New Components
1. Create new component in `src/components/`
2. Import and use in `App.jsx`
3. Add corresponding styles in Tailwind classes

### Modifying Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  'sebpo-blue': '#1e88e5',
  'sebpo-dark-blue': '#0d47a1',
  // Add your custom colors here
}
```

### Animation Customization
Framer Motion animations can be customized in each component by modifying the `motion` properties and variants.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for demonstration purposes based on the SEBPO design.

---

**Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion**
