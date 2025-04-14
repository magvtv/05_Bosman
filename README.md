# Bosman Portfolio Project

A modern portfolio website built with React, TypeScript, and Vite to showcase architectural and design projects.

## Features

- Project gallery with filterable categories
- Detailed project pages with image galleries
- Responsive design for all device sizes
- Smooth scrolling and animations
- Testimonials section

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS Modules / Tailwind CSS (depending on your styling approach)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/magvtv/05_Bosman.git
```

2. Navigate to the project directory:

```bash
cd 05_Bosman
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── components/        # Reusable UI components
├── data/              # JSON data files
├── lib/               # Utility functions
├── pages/             # Page components
├── types/             # TypeScript type definitions
└── assets/            # Static assets (images, fonts, etc.)
```

## Data Management

Projects are stored in `data/projects.json` and follow the structure defined in `types/project.ts`. The `lib/projects.ts` file provides utility functions to access and filter project data:

- `getAllProjects()`: Returns all projects
- `getFeaturedProjects(count)`: Returns a specified number of featured projects
- `getProjectById(id)`: Finds a specific project by ID

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## License

[MIT License](LICENSE)

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
