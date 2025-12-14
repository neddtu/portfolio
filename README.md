# Portfolio Website

A modern, responsive portfolio website built with React and TailwindCSS.

![React](https://img.shields.io/badge/React-19.1.4-61DAFB?style=flat&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat&logo=vite&logoColor=white)

## ✨ Features

- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Fast loading with Vite
- 🎨 Modern UI with animations (Framer Motion)
- 🔧 Easy to customize - all data in one file

## 🛠️ Tech Stack

- **React 19** - UI Library
- **TailwindCSS 4** - Styling
- **Vite 7** - Build Tool
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📁 Project Structure

```
src/
├── components/       # React components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── ScrollToTop.jsx
│   └── ThemeToggle.jsx
├── context/          # React context
│   └── ThemeContext.jsx
├── data/             # Centralized data
│   └── index.js      # All portfolio content here
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20.x
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/tucoi052/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

### Build for Production

```bash
npm run build
# or
yarn build
```

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d --build

# Or run manually
docker build -t portfolio .
docker run -d -p 2211:80 portfolio
```

The site will be available at `http://localhost:2211`

## ✏️ Customization

All content is centralized in `src/data/index.js`:

- `personalInfo` - Name, email, phone, GitHub, CV path
- `roles` - Typing animation roles
- `stats` - Experience statistics
- `skills` - Technical skills list
- `experiences` - Work experience
- `projects` - Featured projects
- `menuItems` - Navigation menu
- `education` - Education info
- `activities` - Activities info

Just edit this file to update your portfolio content!

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 👤 Author

**Duong Dinh Tu**

- GitHub: [@tucoi052](https://github.com/tucoi052)
- Email: tucoi052@gmail.com
