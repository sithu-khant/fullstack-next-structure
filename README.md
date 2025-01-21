# fullstack-next-structure

![GitHub Repo stars](https://img.shields.io/github/stars/sithu-khant/fullstack-next-structure)
![X (formerly Twitter) Follow](https://img.shields.io/twitter/follow/_sithu_khant)

**Note:** This is my current tech stack and folder structure. Things may change overtime.

## Tech stack

- **Frontend**

  - **Framework:** Next.js with the `app/` directory (inside the `src/` folder).
  - **Styling:** DaisyUI, TailwindCSS.
  - **State Management:** Zustand.
  - **Forms:** React Hook Form.
  - **Icons:** Luide.
  - **Utility Libraries:** clsx, tailwind-merge.
  - **Date Utilities:** date-fns.

- **Backend**

  - **Framework:** Hono.
  - **tRPC:** For type-safe APIs.
  - **ORM:** Drizzle ORM.
  - **Database:** Cloudflare D1.
  - **Authentication:** Better-auth with D1.
  - **Real-Time State Management:** Cloudflare Durable Objects.

- **API and Query Management:**
  - **API Calls:** React Query (@tanstack/react-query).
  - **Validation:** Zod, @hono/zod-validator.

## Installations

**Frontend**

```bash
# Install Next.js (with `app/` directory)
bun create next@latest --ts .

# Styling
bun add tailwindcss postcss autoprefixer daisyui

# State Management
bun add zustand

# Forms
bun add react-hook-form @hookform/resolvers

# Icons
bun add lucide-react

# Utility Libraries
bun add clsx tailwind-merge

# Date Utilities
bun add date-fns
```

**Backend**

```bash
# Framework
bun add hono

# tRPC
bun add @trpc/server @trpc/client @trpc/react-query

# ORM
bun add drizzle-orm drizzle-kit

# Database (Cloudflare D1)
# No package needed for D1, just use the Cloudflare API and Drizzle ORM

# Authentication
bun add better-auth

# Real-Time State Management (Cloudflare Durable Objects)
bun add @cloudflare/workers-types

# API and Query Management
bun add @tanstack/react-query

# Validation
bun add zod @hono/zod-validator

# Deploying Cloudflare Workers (use wrangler CLI for deployment)
bun add wrangler
```

## Project structure

This is a example bookstore project structure.

```text
src/
  ├── app/                # Next.js app directory for routing
  │   ├── layout.tsx      # Root layout (e.g., global header/footer)
  │   ├── page.tsx        # Root page (e.g., home or dashboard)
  │   ├── auth/           # Routes for authentication
  │   │   ├── layout.tsx  # Layout for auth routes (e.g., no header/footer)
  │   │   ├── login/      # Login route
  │   │   │   └── page.tsx  # Login page
  │   │   └── signup/       # Signup route
  │   │       └── page.tsx  # Signup page
  │   ├── book/   # Routes for book management
  │   │   ├── layout.tsx  # Layout for book routes
  │   │   ├── page.tsx    # book list route
  │   │   └── create/     # Create book route
  │   │       └── page.tsx  # Create book page
  ├── features/           # Feature-specific logic
  │   ├── auth/           # Authentication feature
  │   │   ├── components/ # Auth-specific UI components
  │   │   │   ├── login-form.tsx   # Login form component
  │   │   │   └── signup-form.tsx  # Signup form component
  │   │   ├── hooks/      # Custom hooks for auth
  │   │   │   ├── use-login.ts     # Login API hook (React Query)
  │   │   │   └── use-signup.ts    # Signup API hook (React Query)
  │   │   ├── api/        # Authentication API and helpers
  │   │   │   ├── routes.ts        # API calls for login/signup/logout
  │   │   │   └── helpers/
  │   │   │       ├── token-helper.ts       # Token handling utilities (e.g., generate, decode)
  │   │   │       ├── password-helper.ts    # Password hashing & validation utilities
  │   │   │       └── auth-error-helper.ts  # Error handling for auth-related issues
  │   │   ├── types/      # Type definitions for auth
  │   │   │   └── auth.d.ts  # Types for auth (e.g., user, token)
  │   │   └── store.ts    # Zustand store for authentication state
  │   ├── books/          # Book feature
  │   │   ├── components/ # Book-specific components
  │   │   │   ├── book-list.tsx  # List books UI
  │   │   │   └── book-form.tsx  # Form to create/edit books
  │   │   ├── hooks/      # Custom hooks for book
  │   │   │   ├── use-get-books.ts      # Get books hook
  │   │   │   └── use-create-book.ts    # Create book hook
  │   │   │   └── update-book-by-id.ts  # Update book hook
  │   │   ├── api/        # book API and helpers
  │   │   │   ├── routes.ts     # API calls for books
  │   │   │   └── helpers.ts    # Utilities for book logic
  │   │   ├── types/      # Type definitions for book
  │   │   │   └── book.d.ts     # Types for books
  │   │   └── store.ts    # Zustand store for book state
  ├── components/         # Reusable, cross-feature components
  │   ├── ui/             # General-purpose UI components
  │   │   ├── button.tsx  # Button component
  │   │   └── modal.tsx   # Modal component
  │   └── layout/         # Layout components
  │       ├── header.tsx  # Global header
  │       └── footer.tsx  # Global footer
  ├── hooks/              # General-purpose hooks
  │   ├── api-hooks/      # API-related hooks for CRUD operations
  │   │   ├── use-create.ts       # Generic hook for creating items
  │   │   ├── use-update-by-id.ts # Generic hook for updating items by ID
  │   │   ├── use-delete-by-id.ts # Generic hook for deleting items by ID
  │   │   ├── use-get-by-id.ts    # Generic hook for fetching item by ID
  │   │   └── use-get-all.ts      # Generic hook for fetching all items
  │   ├── state/          # Zustand stores for shared state
  │   │   └── use-theme-store.ts  # Zustand store for managing themes
  │   └── utilities/      # Utility hooks
  │       ├── use-debounce.ts  # Hook for debouncing
  │       └── use-viewport.ts  # Hook to detect viewport size
  ├── lib/                # Configurations for external libraries/services
  │   ├── trpc/           # tRPC client and server configurations
  │   │   ├── client.ts   # tRPC client setup
  │   │   ├── server.ts   # tRPC server configuration
  │   │   ├── router.ts   # tRPC router definitions
  │   │   └── context.ts  # tRPC context setup
  │   ├── auth/           # better-auth configuration
  │   │   └── better-auth.ts  # Authentication config
  │   └── stripe/         # Stripe SDK setup
  │       └── stripe-client.ts  # Stripe client
  ├── server/             # Backend and server-side logic
  │   ├── webhooks/       # Webhook handlers
  │   │   ├── stripe/     # Stripe webhook handlers
  │   │   │   ├── handle-invoice.ts  # Stripe invoice webhook handler
  │   │   │   └── handle-book.ts  # Stripe book webhook handler
  │   │   └── sendgrid/   # SendGrid email event handlers
  │   │       └── handle-email-events.ts  # SendGrid email event handler
  │   └── workers/        # Cloudflare Workers logic
  │       └── durable-objects.ts  # Cloudflare Durable Objects setup
  ├── state/              # Shared Zustand stores across the app
  │   ├── user-store.ts   # Global user state
  │   └── theme-store.ts  # Global theme state
  ├── styles/             # Global styles and configurations
  │   ├── globals.css     # Global CSS styles
  │   └── tailwind-config.js  # Tailwind CSS configuration
  ├── types/              # Shared TypeScript types across the app
  │   ├── api.d.ts        # API request/response types
  │   └── common.d.ts     # Common types (e.g., pagination, error-response)
  ├── db/                 # Database models, schemas, constants
  │   ├── models/         # Database models (tables, relationships, etc.)
  │   │   ├── user.ts     # User model
  │   │   ├── book.ts     # book model
  │   │   └── index.ts    # Export all models
  │   ├── schemas/        # Schemas for validation (e.g., using Zod)
  │   │   ├── user-schema.ts   # User validation schema
  │   │   └── book-schema.ts  # book validation schema
  │   ├── constants/      # Constants for DB and app-wide usage
  │   │   ├── db-constants.ts  # Constants for database-related operations
  │   │   └── app-constants.ts # General app constants (e.g., statuses, roles)
  ├── docs/               # Documentation folder
  ├── utils/              # Utility files like date formatting and others
  │   ├── format-date.ts  # Utility to format dates
  │   └── other-utils.ts  # Additional utility functions
  └── TODO                # To-Do list of upcoming tasks, features, and improvements
```

## Logs

- Tue Jan 21, 2025
  - (first-commit) - Made this repo public.
  - (1.21.01) - Added tech stack and project structure.
  - (1.21.02) - Added installations.
  - (1.21.03) - Added utils folder to the folder structure.
