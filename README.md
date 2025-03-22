# Interactive Map Application

An interactive web application using React with TypeScript and OpenStreetMap for displaying and interacting with geodata.

## Technology Stack

- **React** with **TypeScript** and **Vite** as the bundler
- **Material UI** for user interface components
- **React Leaflet** for interactive OpenStreetMap integration
- **ESLint** and **Prettier** for code formatting

## Project Structure

- Two-column interface: info panel (2/5) + map (3/5)
- React component architecture with TypeScript type safety
- File structure with separation into components, utils, types, etc.

## File Structure

### Key Directories
- **D:\\Projects\\ed\\src\\components\\** (Unix: **/src/components/**) - React components
- **D:\\Projects\\ed\\src\\components\\auth\\** (Unix: **/src/components/auth/**) - Authentication-related components
- **D:\\Projects\\ed\\src\\components\\layout\\** (Unix: **/src/components/layout/**) - Layout-related components
- **D:\\Projects\\ed\\src\\components\\ui\\** (Unix: **/src/components/ui/**) - Reusable UI components
- **D:\\Projects\\ed\\src\\context\\** (Unix: **/src/context/**) - React context providers
- **D:\\Projects\\ed\\src\\types\\** (Unix: **/src/types/**) - TypeScript type definitions
- **D:\\Projects\\ed\\src\\utils\\** (Unix: **/src/utils/**) - Utility functions

### Key Files
- **D:\\Projects\\ed\\src\\App.tsx** (Unix: **/src/App.tsx**) - Main application component with sidebar content and logout functionality
- **D:\\Projects\\ed\\src\\components\\Map.tsx** (Unix: **/src/components/Map.tsx**) - OpenStreetMap implementation using React Leaflet
- **D:\\Projects\\ed\\src\\components\\auth\\LoginPage.tsx** (Unix: **/src/components/auth/LoginPage.tsx**) - Authentication page with form and map background
- **D:\\Projects\\ed\\src\\components\\auth\\LoginMap.tsx** (Unix: **/src/components/auth/LoginMap.tsx**) - Map component used in login page
- **D:\\Projects\\ed\\src\\components\\layout\\CollapsibleLayout.tsx** (Unix: **/src/components/layout/CollapsibleLayout.tsx**) - Two-column layout with collapsible sidebar
- **D:\\Projects\\ed\\src\\context\\AuthContext.tsx** (Unix: **/src/context/AuthContext.tsx**) - Manages authentication state with login/logout functions
- **D:\\Projects\\ed\\src\\types\\auth.ts** (Unix: **/src/types/auth.ts**) - Authentication related type definitions
- **D:\\Projects\\ed\\src\\types\\map.ts** (Unix: **/src/types/map.ts**) - Map and geographic data type definitions
- **D:\\Projects\\ed\\src\\utils\\mocks\\tripData.ts** (Unix: **/src/utils/mocks/tripData.ts**) - Contains strongly-typed trip data for map markers
- **D:\\Projects\\ed\\src\\utils\\mocks\\activitiesData.ts** (Unix: **/src/utils/mocks/activitiesData.ts**) - Contains mock activity data
- **D:\\Projects\\ed\\src\\utils\\mocks\\packingListData.ts** (Unix: **/src/utils/mocks/packingListData.ts**) - Contains mock packing list data
- **D:\\Projects\\ed\\src\\utils\\mocks\\transportData.ts** (Unix: **/src/utils/mocks/transportData.ts**) - Contains mock transportation data
- **D:\\Projects\\ed\\src\\utils\\googleAuth.ts** (Unix: **/src/utils/googleAuth.ts**) - Handles Google authentication
- **D:\\Projects\\ed\\src\\utils\\leaflet-icon-fix.ts** (Unix: **/src/utils/leaflet-icon-fix.ts**) - Fixes for Leaflet map icons

### Component Relationships
- **App.tsx** uses **CollapsibleLayout.tsx** for the main UI structure
- **App.tsx** includes **Map.tsx** for the map display
- **LoginPage.tsx** includes **LoginMap.tsx** for the login background
- **App.tsx** and **LoginPage.tsx** both consume **AuthContext.tsx** for authentication

## Implementation Features

- Adaptive layout based on MUI Grid
- Full-screen map with markers for key locations
- Configured code formatting: no semicolons, 4 spaces for tabs
- TypeScript static type checking for improved code quality and developer experience
- Collapsible left panel with toggle button
- Shadow effect from the left panel onto the map
- All styles applied using Material UI's sx props instead of CSS files

## Commands

- `yarn run dev` - start development server
- `yarn run build` - build the project (includes TypeScript compilation)
- `yarn run preview` - preview production build locally
- `yarn run lint` - check code with ESLint
- `yarn run lint:fix` - fix code with ESLint
- `yarn run format` - format code with Prettier
- `yarn run type-check` - check TypeScript types without emitting files

## Installation

1. Clone the repository
```
git clone https://github.com/stass-1/interactive-map-app.git
cd interactive-map-app
```

2. Install dependencies
```
yarn install
```

3. Run the project in development mode
```
yarn run dev
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
- Use proper TypeScript types for all components and functions
- Commit messages should be descriptive and follow conventional commits format
- Create an issue for any significant feature or bugfix
- Do not use CSS files for styling; use Material UI's sx props instead
- Do not add comments in code files
- Always include React Router v7 future flags in BrowserRouter configuration

## Collaboration Rules

1. **No Code Comments**: Never add comments in the code. The code should be self-explanatory through descriptive variable and function names.

2. **Applying Changes**: When requesting to apply changes, the codebase is accessible in the `D:\\Projects\\ed` folder (Unix: `/Users/stass/Documents/ed`). Always use the filesystem tools to implement the requested changes directly in the codebase.

3. **Git Version Control**: Always add new files to git immediately after creation using `git add <file-path>` to ensure they are tracked in version control.

4. **TypeScript Usage**: Always use proper typing for variables, functions, and components. Avoid using `any` type unless absolutely necessary.

5. **React Router Configuration**: Always use the following future flags in BrowserRouter to ensure compatibility with React Router v7:
   ```tsx
   <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
   ```
   - `v7_relativeSplatPath`: Ensures correct relative route resolution within splat routes
   - `v7_startTransition`: Uses React.useTransition for smoother navigation and better concurrent mode compatibility

## License

MIT