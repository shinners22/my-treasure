# Replit.md

## Overview

This is a full-stack web application built with React and Express.js that serves as a personal portfolio/resume website for Yiran Wang (Stella), an International Tax Analyst. The application features a modern, responsive design using shadcn/ui components and displays professional information including education, skills, and experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: tsx for TypeScript execution in development

### Project Structure
- `/client` - React frontend application
- `/server` - Express.js backend API
- `/shared` - Shared TypeScript schemas and types
- `/attached_assets` - Static assets (profile photo, resume PDF)

## Key Components

### Frontend Components
- **Home Page**: Main portfolio page with personal information, skills, and contact details
- **Navigation**: Smooth scrolling navigation with mobile responsiveness
- **UI Components**: Complete shadcn/ui component library including cards, buttons, badges, dialogs, forms, etc.
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Backend Components
- **API Routes**: RESTful endpoints for resume download and health checks
- **Static File Serving**: Serves resume PDF and other assets
- **Database Schema**: User management system with Drizzle ORM
- **Memory Storage**: In-memory user storage implementation for development

### Database Schema
- **Users Table**: Basic user management with id, username, and password fields
- **Drizzle Configuration**: PostgreSQL dialect with schema validation using Zod

## Data Flow

1. **Client Request**: React frontend makes API requests using TanStack Query
2. **API Processing**: Express.js server handles requests with middleware for logging and error handling
3. **Database Operations**: Drizzle ORM manages database interactions with PostgreSQL
4. **Response**: Server returns JSON responses or file downloads
5. **State Management**: TanStack Query manages caching and synchronization of server state

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: TypeScript ORM for database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React routing
- **date-fns**: Date manipulation utilities

### UI Dependencies
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Variant-based styling utilities

### Development Dependencies
- **tsx**: TypeScript execution for development
- **vite**: Build tool and development server
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tools

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx for TypeScript execution with auto-reload
- **Database**: PostgreSQL connection via environment variables

### Production Build
- **Frontend**: Vite builds optimized React bundle to `/dist/public`
- **Backend**: esbuild bundles Express.js server to `/dist`
- **Static Assets**: Served directly from `/attached_assets`

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **Port Configuration**: Server listens on environment-specified port

### Key Features
- **Resume Download**: Direct PDF download functionality
- **Responsive Design**: Mobile-optimized layout
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Professional Portfolio**: Comprehensive display of skills and experience
- **Modern UI**: Clean, professional design with shadcn/ui components

The application is designed to be easily deployable on Replit with automatic environment setup and includes all necessary configuration files for immediate development and deployment.