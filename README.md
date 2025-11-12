# Isabella Melo - Personal Portfolio Website

<div align="left">
<a href="https://isamelo.netlify.app/"><img height="355em" alt="Isabella Melo's Website" src="https://i.imgur.com/wRXJ8nT.gif" /></a>
</div>
</br>

🌐 **[Visit Live Website](https://isamelo.netlify.app/)**  
📂 **[View Source Code](https://github.com/isabellacpmelo/my-personal-website)**

## 📋 About the Project

A modern, responsive, and fully internationalized personal portfolio website built with Vue 3 and cutting-edge web technologies. This project demonstrates advanced front-end development skills including component architecture, internationalization, state management, and user experience optimization.

**Key Highlights:**

- 🌍 Full internationalization support (PT-BR, EN, ES)
- 🎯 Advanced component architecture with 15+ reusable components
- ⚡ Performance-optimized with lazy loading and code splitting
- 📱 Mobile-first responsive design
- 🔄 Real-time language switching with URL persistence

## 🚀 Technologies & Stack

### **Core Technologies**

- **Vue.js 3.5** - Composition API, reactivity system, and component architecture
- **Vite 5.4** - Lightning-fast development and optimized builds
- **Tailwind CSS 3.4** - Utility-first styling with custom design system
- **Vue Router 4.5** - Client-side routing with intelligent navigation
- **Vue-i18n 9** - Complete internationalization solution

### **Advanced Features**

- **VueUse 11.3** - Collection of essential Vue composition utilities
- **Auto Import** - Automatic component and composable imports
- **Vue Layouts** - Flexible layout system
- **Vue Pages** - File-based routing system

### **Development Tools**

- **TypeScript Support** - Type safety and better developer experience
- **ESLint** - Code quality and consistency
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes
- **Vue DevTools** - Development debugging tools
- **Image Optimization** - Automated image compression and format conversion

### **Design & UI**

- **Bootstrap Icons** - Comprehensive icon library
- **Custom Animations** - Smooth transitions and micro-interactions
- **Responsive Design** - Mobile-first approach with breakpoint optimization

## 🏗️ Project Architecture

```
src/
├── components/            # Vue components (15+ reusable components)
│   ├── UI/               # Core UI components (Header, Button, Card, etc.)
│   ├── Helpers/          # Feature components (LanguageButton, ResumeButton)
│   ├── Project/          # Project showcase components
│   └── Sections/         # Main page sections (About, Projects, Contact)
├── assets/
│   ├── css/             # Global styles and Tailwind configuration
│   └── img/             # Optimized images and icons
│       ├── dev-icons/   # Technology stack icons
│       ├── language-icon/# International flag icons
│       └── projects-cover/ # Project screenshots and demos
├── composables/          # Vue 3 composables for shared logic
│   └── useLanguage.js   # Language management composable
├── locales/              # Internationalization files
│   ├── index.js         # Locale configuration and imports
│   ├── pt-BR.js         # Portuguese translations (68+ keys)
│   ├── en.js            # English translations
│   └── es.js            # Spanish translations
├── pages/               # File-based routing pages
│   ├── index.vue        # Main portfolio page
│   └── 404.vue          # Custom error page
└── router/              # Vue Router configuration with catch-all routes
```

## ✨ Features & Capabilities

### **🌍 Internationalization System**

- **Complete multilingual support** for Portuguese (PT-BR), English (EN), and Spanish (ES)
- **68+ translated strings** covering all content areas
- **Real-time language switching** with smooth transitions
- **URL persistence** (`site.com?lang=en`) for shareable links
- **LocalStorage integration** for user preference retention
- **Reactive typing animations** that adapt to language changes

### **🎨 User Interface & Experience**

- **Modern, responsive design** with mobile-first approach
- **Custom design system** built with Tailwind CSS
- **Smooth animations and transitions** throughout the interface
- **Interactive project showcase** with dynamic descriptions
- **Typing effect animations** with language-aware content
- **Accessible navigation** with keyboard and screen reader support

### **⚡ Performance & Technical**

- **Component-based architecture** with 15+ reusable components
- **Optimized build process** with automatic image compression
- **Lazy loading** and code splitting for optimal performance
- **SEO-friendly** structure with proper meta tags
- **Custom 404 error page** with consistent design language
- **Automatic imports** for components and composables

### **📱 Responsive & Cross-Platform**

- **Mobile-first responsive design** adapting to all screen sizes
- **Touch-friendly interactions** for mobile devices
- **Cross-browser compatibility** with modern web standards
- **Progressive enhancement** ensuring functionality across devices

### **🔧 Developer Experience**

- **Hot module replacement** for instant development feedback
- **TypeScript support** for enhanced code quality
- **ESLint integration** for consistent code standards
- **Modular component structure** for easy maintenance and scaling

## 🛠️ Development Setup

### **Prerequisites**

- Node.js 18+ and pnpm (recommended package manager)
- Git for version control

### **Installation & Development**

1. **Clone the repository:**

```bash
git clone https://github.com/isabellacpmelo/my-personal-website.git
cd my-personal-website
```

2. **Install dependencies:**

```bash
pnpm install
```

3. **Start development server:**

```bash
pnpm dev
```

The site will be available at `http://localhost:5173`

4. **Build for production:**

```bash
pnpm build
```

5. **Preview production build:**

```bash
pnpm preview
```

6. **Lint and fix code:**

```bash
pnpm lint
```

### **Environment Configuration**

Create a `.env` file in the root directory with your configuration:

```env
VITE_PERSONAL_EMAIL=your-email@example.com
VITE_LINKEDIN_URL=https://linkedin.com/in/your-profile
VITE_GITHUB_URL=https://github.com/your-username
```

### **Testing Language Features**

- Visit `/` for Portuguese (default)
- Visit `/?lang=en` for English
- Visit `/?lang=es` for Spanish
- Test 404 page by visiting any non-existent route like `/test-404`

## 💻 Recommended IDE Setup

**Primary Recommendation: [VS Code](https://code.visualstudio.com/)**

### **Essential Extensions:**

- **[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)** - Vue 3 language support (disable Vetur if installed)
- **[TailwindCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)** - Autocomplete for Tailwind classes
- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)** - Code linting and formatting

### **Recommended Extensions:**

- **[Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)** - Vue.js code snippets
- **[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)** - Automatically rename paired HTML/XML tags
- **[Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)** - Colorize matching brackets

## � Project Statistics

- **Components:** 15+ reusable Vue components
- **Translations:** 68+ internationalized strings
- **Languages:** 3 fully supported languages
- **Sections:** 5 main content sections
- **Dependencies:** Modern, well-maintained packages
- **Bundle Size:** Optimized for performance
- **Lighthouse Score:** 95+ across all metrics

## 🤝 Contributing

Interested in contributing? Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Areas where contributions are welcome:**

- New language translations
- Performance optimizations
- Accessibility improvements
- Bug fixes and enhancements

## 📚 Learning Resources & Documentation

### **Primary Technologies:**

- **[Vue.js 3 Documentation](https://vuejs.org/)** - Official Vue.js guide and API reference
- **[Vite Documentation](https://vitejs.dev/)** - Build tool documentation
- **[Tailwind CSS Documentation](https://tailwindcss.com/)** - Utility-first CSS framework

### **Internationalization:**

- **[Vue-i18n Documentation](https://vue-i18n.intlify.dev/)** - Vue internationalization plugin
- **[JavaScript Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)** - Native browser i18n support

### **Advanced Vue Concepts:**

- **[Vue Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)** - Modern Vue development patterns
- **[VueUse](https://vueuse.org/)** - Collection of essential Vue composables

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👩‍💻 Author

**Isabella Melo**

- Website: [isamelo.netlify.app](https://isamelo.netlify.app/)
- LinkedIn: [Isabella Melo](https://www.linkedin.com/in/isabellacpmelo/)
- GitHub: [@isabellacpmelo](https://github.com/isabellacpmelo)

---

**⭐ If this project helped you learn something new, please give it a star!**
