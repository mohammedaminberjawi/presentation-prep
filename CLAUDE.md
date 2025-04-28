# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build the application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Code Style Guidelines
- **Formatting**: Follow existing code style (4-space indentation, semicolons)
- **TypeScript**: Use strict types with proper type annotations
- **Imports**: Group imports by external libraries, then internal modules
- **Naming**:
  - Functions: camelCase (e.g., `calculateMedian`)
  - Components: PascalCase (e.g., `LoginPage`)
  - Event handlers: prefix with "handle" (e.g., `handleSubmit`)
- **Error Handling**: Use type guards to handle nullable values
- **React Patterns**: 
  - Use Functional Components
  - Follow the Next.js App Router conventions
  - Put utility functions in `src/utils/`
- **Path Aliases**: Use `@/*` for imports from the `src/` directory