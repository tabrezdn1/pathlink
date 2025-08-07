# Pathlink Landing Page

A modern, responsive landing page built with **React 18 + TypeScript**, inspired by the [JobHunt website](https://jobhunt.framer.website/) with custom Pathlink branding. Features professional animations, dark/light theme support, and enterprise-grade development tooling.

## 🚀 Features

- **TypeScript**: Full type safety and modern development experience
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **Dark/Light Theme**: System preference detection with smooth transitions
- **Professional Animations**: Framer Motion powered micro-interactions and page transitions
- **Modern UI Components**: 
  - Hero section with animated stats and floating elements
  - Feature showcase with hover effects
  - Interactive job listing cards with gradient backgrounds
  - Testimonial section with dashboard preview
  - Resource library with video and blog cards
  - Expandable FAQ section with smooth animations
  - Newsletter signup with floating CTA
- **Custom Brand Colors**: Pathlink theme (#05324f) with professional palette
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Efficient bundle size with tree shaking and code splitting ready
- **Developer Experience**: ESLint, Prettier, TypeScript, and comprehensive tooling

## 🎨 Design System

### Colors
- **Primary**: #05324f (Pathlink brand color)
- **Dark Theme**: Custom dark color palette
- **Light Theme**: Clean whites and grays

### Typography
- Modern sans-serif font stack
- Responsive typography scales
- Proper contrast ratios

### Animations
- Staggered entry animations
- Hover effects and micro-interactions
- Smooth page transitions
- Floating elements and breathing animations

## 🛠️ Tech Stack

- **React 18** - Latest React features with TypeScript
- **TypeScript** - Type safety and enhanced developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Professional animations and micro-interactions
- **Lucide React** - Beautiful, consistent icons
- **ESLint & Prettier** - Code quality and formatting
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view in browser

4. Build for production:
```bash
npm run build
```

## 🔧 Development Scripts

```bash
npm start          # Start development server
npm run build      # Create production build
npm run lint       # Run ESLint for code quality
npm run lint:fix   # Fix linting issues automatically
npm run format     # Format code with Prettier
npm run type-check # TypeScript type checking
```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Header.js        # Navigation and theme toggle
│   ├── Hero.js          # Hero section with CTAs
│   ├── Features.js      # Feature showcase
│   ├── JobListings.js   # Job cards grid
│   ├── Testimonial.js   # Testimonial section
│   ├── Resources.js     # Video and blog resources
│   ├── FAQ.js           # Expandable FAQ
│   └── Footer.js        # Footer with newsletter
├── context/             # React context
│   └── ThemeContext.js  # Theme management
├── App.js              # Main app component
├── index.css           # Global styles and utilities
└── index.js            # App entry point
```

## 🎯 Key Sections

1. **Hero Section**: Main landing area with animated stats and CTAs
2. **Features**: "Apply From Anywhere" and "Scrutinized Listings" sections
3. **Job Listings**: Animated job cards with hover effects
4. **Testimonials**: Customer feedback with dashboard preview
5. **Resources**: Video tutorials and blog posts
6. **FAQ**: Expandable questions with smooth animations
7. **Footer**: Newsletter signup and links

## 🌙 Theme System

The app supports both light and dark themes with:
- System preference detection
- LocalStorage persistence
- Smooth color transitions
- Custom dark mode color palette

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Performance Features

- Lazy loading for images
- Optimized animations
- Efficient re-renders
- Minimal bundle size

## 🎨 Customization

To customize the design:

1. **Colors**: Update `tailwind.config.js` color palette
2. **Animations**: Modify Framer Motion variants in components
3. **Content**: Update text and data in component files
4. **Layout**: Adjust grid systems and spacing

## 📄 License

This project is open source and available under the MIT License.