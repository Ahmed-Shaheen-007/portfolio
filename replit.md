# Overview

This is a full-stack web application built with React frontend and Express backend, showcasing a personal portfolio for a data engineer/analyst named Ahmed. The application features a modern, responsive design using shadcn/ui components and Tailwind CSS, with a complete database setup using Drizzle ORM and PostgreSQL. The project is structured as a monorepo with shared TypeScript schemas and includes comprehensive UI components for building professional web applications.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React 18 using TypeScript and follows a component-based architecture:
- **UI Framework**: React with TypeScript, using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design patterns
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Component Structure**: Modular components organized by feature (navigation, hero, about, skills, projects, contact)

## Backend Architecture
The server-side uses Express.js with TypeScript:
- **Framework**: Express.js with TypeScript support
- **Architecture Pattern**: RESTful API design with route registration system
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Development Setup**: Vite integration for hot module replacement during development

## Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless driver
- **Schema Management**: Centralized schema definitions in shared directory
- **Migrations**: Drizzle Kit for database schema migrations
- **Type Safety**: Full TypeScript integration with Zod for runtime validation

## Development Environment
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Development Server**: Custom setup with Vite middleware integration
- **Hot Reload**: Full-stack hot reload support
- **TypeScript**: Strict TypeScript configuration across all packages
- **Code Organization**: Monorepo structure with shared schemas and utilities

## Design System
- **Component Library**: shadcn/ui with Radix UI primitives
- **Theme System**: CSS custom properties for consistent theming
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Typography**: Custom font stack with Google Fonts integration

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection Pooling**: Built-in connection management through Neon serverless driver

## UI and Styling
- **Radix UI**: Headless component primitives for accessibility
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Web typography (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Error Handling**: Runtime error overlay for development
- **Code Mapping**: Source map support for debugging

## Runtime Libraries
- **React Hook Form**: Form handling with validation
- **Date-fns**: Date manipulation utilities
- **Class Variance Authority**: Component variant management
- **Embla Carousel**: Carousel/slider functionality
- **React Day Picker**: Date picker components

## Build and Deployment
- **Vite**: Frontend build tool and development server
- **esbuild**: Backend compilation for production
- **PostCSS**: CSS processing with Autoprefixer
- **TypeScript**: Type checking and compilation across the stack