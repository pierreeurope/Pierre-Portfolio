# Pierre Blanchet - Portfolio Website

A modern, elegant portfolio website showcasing my journey, skills, and projects.

## Features

- **Home**: Hero section with key metrics and quick navigation
- **Journey**: Detailed career timeline and education
- **Skills**: Comprehensive overview of technical expertise
- **Projects**: Portfolio of major projects with descriptions and technologies

## Design

The website features a clean, modern design with subtle Belle Époque influences:
- Elegant typography using Cormorant Garamond (serif) and Inter (sans-serif)
- Refined color palette with gold accents
- Smooth transitions and hover effects
- Fully responsive design

## Technology Stack

- **React 18** - UI framework
- **React Router** - Client-side routing
- **AWS Amplify** - Hosting and deployment
- **CSS3** - Custom styling with CSS variables

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## AWS Amplify Deployment

This project is configured for AWS Amplify hosting. The `amplify.yml` file contains the build configuration.

To deploy:
1. Connect your repository to AWS Amplify
2. Amplify will automatically detect the build settings
3. Deploy and host your site

## Customization

- Update content in the respective page components (`src/pages/`)
- Modify colors and styling in `src/index.css` (CSS variables)
- Add or remove projects in `src/pages/Projects.js`
- Update navigation links in `src/components/Navigation.js`

## Adding Your Resume

To enable the resume download button:
1. Place your resume PDF file in the `public/` folder
2. Name it `resume.pdf`
3. The download button will automatically work

## License

Private project - All rights reserved