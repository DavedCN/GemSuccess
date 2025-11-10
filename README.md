# Dog Food Landing Page

A modern, responsive landing page for a premium dog food brand built with React, TypeScript, and Tailwind CSS.

## Features

- **Hero Section**: Eye-catching introduction with feature highlights and call-to-action
- **Nutrition Section**: Detailed information about nutritional benefits
- **Dog Food Benefits**: Comprehensive benefits section for pet owners
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional design with custom branding colors

## Tech Stack

- **Frontend**: React 19.2.0 with TypeScript
- **Styling**: Tailwind CSS 4.1.17
- **Build Tool**: Vite 7.2.2
- **Icons & Assets**: Custom SVG and PNG assets

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5174`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── HeroSection.jsx       # Main hero section with features
│   ├── Nutrition.jsx         # Nutrition information section
│   ├── DogFoodBenefits.jsx   # Benefits section
│   └── Feature.jsx           # Reusable feature component
├── assets/                   # Images and icons
│   ├── Frame.png            # Main hero image
│   ├── vet.png              # Vet icon
│   ├── food.png             # Food icon
│   └── ...                  # Other assets
├── App.jsx                  # Main app component
└── index.css                # Global styles
```

## Key Components

### HeroSection
- Displays the main value proposition
- Features four key selling points with custom icons
- Includes call-to-action button with custom color (#EE6F4B)
- Payment method icons for trust building

### Feature Component
- Reusable component for displaying feature items
- Supports both emoji and image icons
- Circular icon containers with custom backgrounds

### Responsive Design
- Mobile-first approach
- Flexible layouts that adapt to different screen sizes
- Optimized for desktop, tablet, and mobile devices

## Customization

### Colors
- Primary button color: #EE6F4B
- Background: White
- Text colors: Various grays and blacks

### Assets
All images are stored in the `src/assets/` directory and imported as ES6 modules for optimal bundling.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### ESLint Configuration

The project uses ESLint with React-specific rules. Configuration can be found in `eslint.config.js`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private and proprietary.

## Support

For support or questions, please contact the development team.
