# Banking System

A modern, full-featured banking application built with Next.js 16, React 19, and TypeScript. The application provides comprehensive banking functionalities including account management, fund transfers, and financial analytics.

**Live Demo:** [https://banking-system-kappa-six.vercel.app](https://banking-system-kappa-six.vercel.app)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Project Architecture](#project-architecture)
- [Dependencies](#dependencies)
- [Configuration Files](#configuration-files)
- [Monitoring & Error Tracking](#monitoring--error-tracking)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🏦 **Account Management** - Create, manage, and track multiple bank accounts
- 💸 **Fund Transfers** - Seamless money transfers between accounts using Dwolla integration
- 🔐 **Secure Authentication** - User authentication and authorization
- 📊 **Financial Analytics** - Real-time charts and financial visualizations using Chart.js
- 🏦 **Bank Integration** - Plaid integration for connecting external bank accounts
- 🎨 **Modern UI** - Beautiful, responsive interface built with Tailwind CSS and Shadcn UI components
- 📱 **Responsive Design** - Optimized for desktop and mobile devices
- 🔍 **Form Validation** - Robust form validation with React Hook Form and Zod
- 📈 **Performance Monitoring** - Integrated Sentry for error tracking and performance monitoring

## Tech Stack

### Frontend
- **Framework:** Next.js 16.1.6
- **UI Library:** React 19.2.3
- **Language:** TypeScript 5
- **Styling:** 
  - Tailwind CSS 3.3.5
  - Shadcn UI Components
  - Class Variance Authority (CVA)
  - Tailwind CSS Animations

### Form Management & Validation
- **react-hook-form** 7.71.1 - Efficient form state management
- **@hookform/resolvers** 5.2.2 - Schema validators integration
- **Zod** 4.3.6 - TypeScript-first schema validation

### Banking & Payment Integration
- **Plaid** 41.3.0 - Bank account linking and aggregation
- **react-plaid-link** 4.1.1 - React component for Plaid Link
- **Dwolla** 3.4.0 - Payment processing and fund transfers
- **Appwrite** - Backend services via node-appwrite 22.1.0

### Data & Analytics
- **react-chartjs-2** 5.3.1 - Chart visualization
- **Chart.js** (via react-chartjs-2) - Data visualization library
- **react-countup** 6.5.3 - Number animation effects

### Utilities
- **query-string** 9.3.1 - Query string parsing and stringification
- **clsx** 2.1.1 - Utility for constructing classNames
- **tailwind-merge** 3.4.0 - Merge Tailwind CSS classes intelligently
- **lucide-react** 0.575.0 - Beautiful icon library

### Error Tracking & Monitoring
- **@sentry/nextjs** 10.39.0 - Error tracking and performance monitoring

### Development Tools
- **ESLint** 10.0.1 - Code quality and linting
- **TypeScript** 5 - Static type checking
- **Babel Plugin React Compiler** - React compilation optimization
- **PostCSS** 8.4.24 - CSS transformations
- **Autoprefixer** 10.4.14 - Vendor prefix management
- **Shadcn CLI** 3.8.4 - Component library management

## Project Structure

```
banking_system/
├── app/                           # Next.js app router (pages and layouts)
│   ├── layout.tsx                # Root layout component
│   ├── page.tsx                  # Home page
│   ├── dashboard/                # Dashboard pages
│   ├── auth/                     # Authentication pages
│   └── api/                      # API routes
│
├── components/                   # Reusable React components
│   ├── ui/                       # Shadcn UI components
│   ├── layout/                   # Layout components (Header, Sidebar, Footer)
│   ├── forms/                    # Form components
│   └── cards/                    # Card and data display components
│
├── lib/                          # Utility functions and helpers
│   ├── utils.ts                  # Common utilities
│   ├── appwrite.ts               # Appwrite client configuration
│   ├── plaid.ts                  # Plaid integration
│   └── dwolla.ts                 # Dwolla integration
│
├── constants/                    # Application constants
│   ├── index.ts                  # Exported constants
│   ├── navigation.ts             # Navigation configuration
│   └── api.ts                    # API endpoints
│
├── types/                        # TypeScript type definitions
│   ├── index.ts                  # Type exports
│   ├── auth.ts                   # Authentication types
│   ├── account.ts                # Account types
│   └── transaction.ts            # Transaction types
│
├── public/                       # Static assets
│   ├── images/                   # Image files
│   ├── icons/                    # SVG icons
│   └── fonts/                    # Custom fonts
│
├── styles/                       # Global styles
│   └── globals.css               # Global CSS and Tailwind imports
│
├── instrumentation.ts            # Server instrumentation
├── instrumentation-client.ts     # Client instrumentation
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── postcss.config.mjs            # PostCSS configuration
├── eslint.config.mjs             # ESLint configuration
├── components.json               # Shadcn UI configuration
├── sentry.server.config.ts       # Sentry server configuration
├── sentry.edge.config.ts         # Sentry edge runtime configuration
├── package.json                  # Project dependencies and scripts
├── package-lock.json             # Locked dependency versions
└── README.md                     # This file
```

## Getting Started

### Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher (or yarn/pnpm/bun)
- **Git** for version control
- External accounts (optional):
  - Plaid API keys for bank integration
  - Dwolla API keys for payment processing
  - Appwrite instance for backend services

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kingpin9292/banking_system.git
   cd banking_system/banking_system
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Environment Setup

Create a `.env.local` file in the `banking_system/` directory with the following variables:

```env
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
APPWRITE_API_KEY=your_api_key

# Plaid Configuration
NEXT_PUBLIC_PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_secret
PLAID_ENV=sandbox  # or production

# Dwolla Configuration
DWOLLA_KEY=your_dwolla_key
DWOLLA_SECRET=your_dwolla_secret
DWOLLA_ENV=sandbox  # or production

# Sentry Configuration (Optional)
NEXT_PUBLIC_SENTRY_AUTH_TOKEN=your_sentry_token
SENTRY_ORG=your_org
SENTRY_PROJECT=your_project
```

### Running the Application

**Development Mode:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

The dev server auto-reloads as you edit files.

**Production Build:**
```bash
npm run build
npm start
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the application for production |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint to check code quality |

## Project Architecture

### Frontend Architecture

- **Next.js App Router** - Modern file-based routing system
- **React 19** - Latest React features with server components support
- **Component-Based** - Reusable UI components built with Shadcn UI
- **Type-Safe** - Full TypeScript support for type safety

### Styling

- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **CSS-in-JS** - Class Variance Authority for dynamic styling
- **Responsive** - Mobile-first responsive design approach

### State Management

- **React Hook Form** - Efficient form state management
- **Server State** - Leveraging Next.js server components

### Integration

- **Plaid** - Bank account aggregation and connectivity
- **Dwolla** - Payment processing and fund transfers
- **Appwrite** - Backend database and authentication

## Dependencies

### Core Dependencies
- `next`: 16.1.6
- `react`: 19.2.3
- `react-dom`: 19.2.3
- `typescript`: 5.x

### UI & Styling
- `tailwindcss`: 3.3.5
- `lucide-react`: 0.575.0
- `class-variance-authority`: 0.7.1
- `radix-ui`: 1.4.3

### Forms & Validation
- `react-hook-form`: 7.71.1
- `@hookform/resolvers`: 5.2.2
- `zod`: 4.3.6

### Banking/Finance
- `plaid`: 41.3.0
- `react-plaid-link`: 4.1.1
- `dwolla-v2`: 3.4.0
- `react-chartjs-2`: 5.3.1

### Backend
- `node-appwrite`: 22.1.0

### Monitoring
- `@sentry/nextjs`: 10.39.0

## Configuration Files

### `next.config.ts`
Next.js configuration including webpack settings, security headers, and redirects.

### `tsconfig.json`
TypeScript compiler options with path aliases (`@/*` resolves to project root).

### `tailwind.config.ts`
Tailwind CSS configuration with custom theme colors and component variants.

### `eslint.config.mjs`
ESLint rules for code quality and consistency.

### `components.json`
Shadcn UI configuration for component generation and management.

### `postcss.config.mjs`
PostCSS plugins configuration for CSS processing.

## Monitoring & Error Tracking

The application integrates **Sentry** for:
- Error tracking and reporting
- Performance monitoring
- Release tracking
- Session replay (optional)

Configured in:
- `sentry.server.config.ts` - Server-side error tracking
- `sentry.edge.config.ts` - Edge runtime error tracking
- `instrumentation.ts` - Sentry initialization
- `instrumentation-client.ts` - Client-side instrumentation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- ⚡ **Fast Page Loads** - Optimized with Next.js image optimization and code splitting
- 📦 **Small Bundle Size** - Tree-shaking and minification
- 🚀 **Server Components** - Reduced client-side JavaScript
- 📊 **Monitoring** - Sentry integration for performance insights

## Best Practices

- ✅ Type-safe code with TypeScript
- ✅ Component reusability with Shadcn UI
- ✅ Form validation with Zod schemas
- ✅ Responsive design with Tailwind CSS
- ✅ Error tracking with Sentry
- ✅ Code quality with ESLint

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can specify a different port:
```bash
npm run dev -- -p 3001
```

### Build Errors
Clear the Next.js cache:
```bash
rm -rf .next
npm run build
```

### Module Not Found
Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

---

**Questions?** Feel free to open an issue on the [GitHub repository](https://github.com/kingpin9292/banking_system).
