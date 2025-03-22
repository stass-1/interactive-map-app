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

## FILESYSTEM ACCESS

This project can be developed on both Windows and Unix-based systems (Mac/Linux). Before using filesystem tools, always check which system you're currently working on.

### Determining Your Current Environment

When starting work on the codebase, first run this command to check allowed directories:

```bash
list_allowed_directories
```

The response will indicate the base paths available for the current environment:

- **Windows environment**: Paths will start with drive letters (e.g., `D:\Projects\ed`)
- **Unix environment**: Paths will use forward slashes (e.g., `/Users/stass/Documents/ed`)

Always use the appropriate path format for the current environment when accessing files.

### Working with Filesystem Paths

#### Windows Environment
- Base Directory: `D:\Projects\ed\`
- Use backslashes in paths: `D:\Projects\ed\src\utils\mocks\tripData.ts`

#### Unix Environment (Mac/Linux)
- Base Directory: `/Users/stass/Documents/ed/`
- Use forward slashes in paths: `/Users/stass/Documents/ed/src/utils/mocks/tripData.ts`

⚠️ **Important**: When using filesystem tools, always use the complete absolute path that matches the current environment. Relative paths (e.g., `/src/utils/mocks`) will not work.

#### Code References
Within the codebase (imports, etc.), continue using relative paths as normal:
```javascript
import { transportData } from '../../utils/mocks/transportData'
```

## CROSS-PLATFORM DEVELOPMENT GUIDELINES

### Path References
- When documenting paths in this README or other documentation, include both formats:
  - Windows: `D:\Projects\ed\src\components\`
  - Unix: `/Users/stass/Documents/ed/src/components/`

### Git Configuration
- Configure Git to handle line endings properly:
  ```bash
  git config --global core.autocrlf true  # On Windows
  git config --global core.autocrlf input # On Mac/Linux
  ```

### Code Editor Settings
- Make sure your editor is configured to use the proper line endings and 4-space indentation
- VSCode users should apply the project's `.editorconfig` settings

### Testing Before Committing
- When working across platforms, test your changes on both systems if possible
- Be especially careful with path-sensitive operations and filesystem interactions

## File Structure

### Key Directories
- **D:\\Projects\\ed\\src\\components\\** (Unix: **/Users/stass/Documents/ed/src/components/**) - React components
- **D:\\Projects\\ed\\src\\components\\auth\\** (Unix: **/Users/stass/Documents/ed/src/components/auth/**) - Authentication-related components
- **D:\\Projects\\ed\\src\\components\\layout\\** (Unix: **/Users/stass/Documents/ed/src/components/layout/**) - Layout-related components
- **D:\\Projects\\ed\\src\\components\\ui\\** (Unix: **/Users/stass/Documents/ed/src/components/ui/**) - Reusable UI components
- **D:\\Projects\\ed\\src\\context\\** (Unix: **/Users/stass/Documents/ed/src/context/**) - React context providers
- **D:\\Projects\\ed\\src\\types\\** (Unix: **/Users/stass/Documents/ed/src/types/**) - TypeScript type definitions
- **D:\\Projects\\ed\\src\\utils\\** (Unix: **/Users/stass/Documents/ed/src/utils/**) - Utility functions

### Key Files
- **D:\\Projects\\ed\\src\\App.tsx** (Unix: **/Users/stass/Documents/ed/src/App.tsx**) - Main application component with sidebar content and logout functionality
- **D:\\Projects\\ed\\src\\components\\Map.tsx** (Unix: **/Users/stass/Documents/ed/src/components/Map.tsx**) - OpenStreetMap implementation using React Leaflet
- **D:\\Projects\\ed\\src\\components\\auth\\LoginPage.tsx** (Unix: **/Users/stass/Documents/ed/src/components/auth/LoginPage.tsx**) - Authentication page with form and map background
- **D:\\Projects\\ed\\src\\components\\auth\\LoginMap.tsx** (Unix: **/Users/stass/Documents/ed/src/components/auth/LoginMap.tsx**) - Map component used in login page
- **D:\\Projects\\ed\\src\\components\\layout\\CollapsibleLayout.tsx** (Unix: **/Users/stass/Documents/ed/src/components/layout/CollapsibleLayout.tsx**) - Two-column layout with collapsible sidebar
- **D:\\Projects\\ed\\src\\context\\AuthContext.tsx** (Unix: **/Users/stass/Documents/ed/src/context/AuthContext.tsx**) - Manages authentication state with login/logout functions
- **D:\\Projects\\ed\\src\\types\\auth.ts** (Unix: **/Users/stass/Documents/ed/src/types/auth.ts**) - Authentication related type definitions
- **D:\\Projects\\ed\\src\\types\\map.ts** (Unix: **/Users/stass/Documents/ed/src/types/map.ts**) - Map and geographic data type definitions
- **D:\\Projects\\ed\\src\\utils\\mocks\\tripData.ts** (Unix: **/Users/stass/Documents/ed/src/utils/mocks/tripData.ts**) - Contains strongly-typed trip data for map markers
- **D:\\Projects\\ed\\src\\utils\\mocks\\activitiesData.ts** (Unix: **/Users/stass/Documents/ed/src/utils/mocks/activitiesData.ts**) - Contains mock activity data
- **D:\\Projects\\ed\\src\\utils\\mocks\\packingListData.ts** (Unix: **/Users/stass/Documents/ed/src/utils/mocks/packingListData.ts**) - Contains mock packing list data
- **D:\\Projects\\ed\\src\\utils\\mocks\\transportData.ts** (Unix: **/Users/stass/Documents/ed/src/utils/mocks/transportData.ts**) - Contains mock transportation data
- **D:\\Projects\\ed\\src\\utils\\googleAuth.ts** (Unix: **/Users/stass/Documents/ed/src/utils/googleAuth.ts**) - Handles Google authentication
- **D:\\Projects\\ed\\src\\utils\\leaflet-icon-fix.ts** (Unix: **/Users/stass/Documents/ed/src/utils/leaflet-icon-fix.ts**) - Fixes for Leaflet map icons

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

6. **README Updates**: When making changes to the README, always provide a formatted version without markdown after the changes are complete, to facilitate copy-pasting into other documents.

7. **Documentation Synchronization**: When making significant architectural changes or adding new major features, update both the README and the "[tech] Travel Planner" Google Document to keep project knowledge synchronized across platforms.

8. **Working with AI Assistants**: When working with AI assistants (like Claude):
   - Always mention which operating system environment is currently being used when asking for file modifications
   - Provide specific absolute file paths for any files that need to be modified
   - If the assistant makes an error with file paths, direct it to use `list_allowed_directories` first to determine the correct environment
   - Use the appropriate context-setting documents to provide the assistant with necessary project information

## License

MIT