# Personal Portfolio Website

**Live Demo**: https://myminiportfolio.netlify.app/

A modern, responsive personal portfolio website built with React, featuring a dark theme design and smooth animations. This portfolio showcases web development projects, services offered, and provides contact functionality.

## 🌟 Features

- **Multi-page Application**: Home, About, Projects, and Contact pages
- **Modern Dark Theme**: Custom dark color scheme with styled-components
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: React transitions and smooth scrolling
- **Project Showcase**: Dynamic project display with images and descriptions
- **Contact Form**: Functional contact form using EmailJS
- **Custom Navigation**: Sticky navigation menu with smooth scroll-to-top
- **Social Media Integration**: Links to GitHub, LinkedIn, and Instagram

## 🚀 Technologies Used

### Frontend Framework
- **React.js (v17.0.2)**: UI library for building the interface
- **React Router DOM (v5.3.0)**: Client-side routing
- **React Transition Group (v4.4.2)**: Animation components

### Styling
- **Styled Components (v5.3.5)**: CSS-in-JS styling solution
- **Custom Typography**: Montserrat and Roboto Mono fonts

### UI Components & Utilities
- **React Icons (v4.3.1)**: Icon library
- **Swiper (v6.5.4)**: Touch slider and carousel
- **UUID (v8.3.2)**: Unique identifier generation

### Functionality
- **EmailJS Com (v3.2.0)**: Email service integration for contact form

### Testing & Development
- **Testing Library**: Jest and React testing utilities
- **Create React App**: Build tool and development environment

## 📁 Project Structure

```
React-portfolio/
├── public/
│   ├── _redirects          # Netlify redirect configuration
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── assets/
│   │   ├── data/
│   │   │   ├── projects.js     # Project data and information
│   │   │   └── testimonials.js # Client testimonials
│   │   ├── fonts/              # Custom fonts
│   │   └── images/             # Project and UI images
│   ├── components/
│   │   ├── AboutSection.js
│   │   ├── AboutInfoItem.js
│   │   ├── Button.js
│   │   ├── ContactBanner.js
│   │   ├── ContactForm.js
│   │   ├── ContactInfoItem.js
│   │   ├── ContactSection.js
│   │   ├── Footer.js
│   │   ├── FooterCol.js
│   │   ├── HeroSection.js
│   │   ├── Map.js
│   │   ├── NavMenu.js
│   │   ├── PText.js
│   │   ├── ProjectItem.js
│   │   ├── ProjectsSection.js
│   │   ├── ScrollToTop.js
│   │   ├── SectionTitle.js
│   │   ├── ServicesSection.js
│   │   ├── ServicesSectionItem.js
│   │   ├── SmoothScrollbar.js
│   │   └── TestimonialsSection.js
│   ├── pages/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Home.js
│   │   └── Projects.js
│   ├── styles/
│   │   ├── GlobalStyle.js
│   │   └── Typography.js
│   ├── App.js                 # Main app component with routing
│   └── index.js              # Entry point
├── .env                      # Environment variables
├── package.json
└── README.md
```

## 🎨 Design Features

- **Color Palette**: Dark theme with custom CSS variables
  - Background: `#262626` (dark-bg), `#1E1E1E` (deep-dark)
  - Text: `#BCB4B4` (gray-1), `white`, `black`
  - Accents: `#363636` (gray-2)

- **Typography**: 
  - Headings: Montserrat (Bold/SemiBold)
  - Body: Roboto Mono (Regular)
  - Base font size: 10px with rem-based scaling

- **Responsive Breakpoints**: Mobile-first design with media queries at 768px

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd React-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory and add your EmailJS credentials:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

4. **Run the development server**
```bash
npm start
```
The application will open at `http://localhost:3000`

## 📜 Available Scripts

### `npm start`
Runs the app in development mode with hot reloading. Open `http://localhost:3000` to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode. See the [Create React App documentation](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder, optimizing the bundle for the best performance. The build is minified and filenames include hashes for caching.

### `npm run eject`
**Note: This is a one-way operation. Once you eject, you can't go back!**
This command removes the single build dependency and copies all configuration files (webpack, Babel, ESLint, etc.) into your project for full control.

## 🚢 Deployment

This project is configured for deployment on various platforms:

### Netlify
1. Run `npm run build`
2. Deploy the `build` folder to Netlify
3. The `_redirects` file is already configured for SPA routing

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect it as a Create React App
3. Deploy with default settings

### Other Platforms
Any static hosting service that supports React applications will work with this project.

## 📝 Customization

### Adding Projects
Edit `src/assets/data/projects.js` to add or modify projects:

```javascript
{
  id: uuidv4(),
  name: 'Project Name',
  desc: 'Technologies Used: React.js, Node.js, etc.',
  link: 'https://project-url.com',
  img: ProjectImage,
}
```

### Adding Testimonials
Edit `src/assets/data/testimonials.js` to add client testimonials:

```javascript
{
  id: 1,
  name: 'Client Name',
  title: 'Client Title',
  org: 'Company',
  desc: 'Testimonial text...',
}
```

### Styling
Modify global styles in `src/styles/GlobalStyle.js` and component-specific styles within each component file.

### Contact Form
Update EmailJS configuration in the `.env` file and modify form handling in `src/components/ContactForm.js`.

## 🌐 Live Demo

Check out the live portfolio to see it in action!

- **Main Portfolio**: https://myminiportfolio.netlify.app/

## 📱 Pages Overview

- **Home**: Hero section, brief about, services preview, projects showcase, testimonials, and contact CTA
- **About**: Detailed about section with personal information and background
- **Projects**: Complete project portfolio with filtering and detailed views
- **Contact**: Contact form, location map, and contact information

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📄 License

This project is private and personal. All rights reserved.

## 👤 Author

**Ajith** - Web Designer & Developer
- GitHub: [@ajith73](https://github.com/ajith73)
- LinkedIn: [Ajith D](https://www.linkedin.com/mwlite/in/ajith-d-77252010ar)
- Instagram: [__.ajithx._](https://www.instagram.com/__.ajithx._/)

## 🙏 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts: Google Fonts (Montserrat, Roboto Mono)