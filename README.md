# Interactive Map Application

An interactive web application using React and OpenStreetMap for displaying and interacting with geodata.

## Technology Stack

- **React** with **Vite** as the bundler
- **Material UI** for user interface components
- **React Leaflet** for interactive OpenStreetMap integration
- **ESLint** and **Prettier** for code formatting

## Project Structure

- Two-column interface: info panel (2/5) + map (3/5)
- React component architecture
- File structure with separation into components, utils, etc.

## Implementation Features

- Adaptive layout based on MUI Grid
- Full-screen map with markers for key locations
- Configured code formatting: no semicolons, 4 spaces for tabs
- Collapsible left panel with toggle button
- Shadow effect from the left panel onto the map
- All styles applied using Material UI's sx props instead of CSS files

## Commands

- `npm run dev` - start development server
- `npm run build` - build the project
- `npm run lint` - check code
- `npm run format` - format code

## Installation

1. Clone the repository
```
git clone https://github.com/stass-1/interactive-map-app.git
cd interactive-map-app
```

2. Install dependencies
```
npm install
```

3. Run the project in development mode
```
npm run dev
```

The application will be available at `http://localhost:5173`.

## Repository Information

- **GitHub Repository**: [https://github.com/stass-1/interactive-map-app](https://github.com/stass-1/interactive-map-app)
- **Access**: Full read/write access has been granted to all collaborators
- **CI/CD**: Currently not configured, pending setup
- **Issue Tracking**: Use GitHub Issues for task management and bug reporting
- **Branch Strategy**: Feature branches should be created from master and merged via pull requests

## Development Guidelines

- All code, comments, and documentation must be in English
- Follow the established code style with Prettier and ESLint
- Use component-based architecture for all UI elements
- Commit messages should be descriptive and follow conventional commits format
- Create an issue for any significant feature or bugfix
- Do not use CSS files for styling; use Material UI's sx props instead
- Do not add comments in code files

## Collaboration Rules

1. **No Code Comments**: Never add comments in the code. The code should be self-explanatory through descriptive variable and function names.

2. **Applying Changes**: When requesting to apply changes, the codebase is accessible in the `ed` folder. Always use the filesystem tools to implement the requested changes directly in the codebase.

## License

MIT