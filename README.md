# ht-stack

![GitHub Repo stars](https://img.shields.io/github/stars/sithu-khant/ht-stack)
![X (formerly Twitter) Follow](https://img.shields.io/twitter/follow/_sithu_khant)

**Note:** This is my current tech stack and folder structure. Things may change over time.

---

## Tech Stack

### **Frontend**

- **Framework:** Next.js (TypeScript) with the `app/` directory (inside the `src/` folder).
- **Styling:** DaisyUI, TailwindCSS.
- **State Management:** Zustand.
- **Forms:** React Hook Form.
- **Icons:** Lucide.
- **Utility Libraries:** clsx, tailwind-merge.
- **Date Utilities:** date-fns.
- **Email Templates:** react-email (by Resend).

### **Backend**

- **Framework:** tRPC.
- **ORM:** Drizzle ORM.
- **Database:** Cloudflare D1.
- **Authentication:** Auth.js.
- **Real-Time State Management:** Cloudflare Durable Objects.
- **Email Sending:** Resend.
- **File Storage:** Cloudflare R2.

### **API and Query Management**

- **API Calls:** tRPC.
- **Validation:** Zod.

## Installations

### **Frontend**

```bash
# Initialize Next.js (with `app/` directory)
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

# Email Templates
bun add react-email @react-email/components
```

**Backend**

```bash
# Framework - tRPC
bun add @trpc/server@next @trpc/client@next @trpc/react-query@next @trpc/next@next @tanstack/react-query@latest

# ORM
bun add drizzle-orm @libsql/client
bun add -D drizzle-kit

# Database (Cloudflare D1)
# No package needed for D1, just use the Cloudflare API with Drizzle ORM.

# Authentication
bun add next-auth@beta

# Real-Time State Management (Cloudflare Durable Objects)
bun add @cloudflare/workers-types

# Email Sending
bun add resend

# Validation
bun add zod

# Deploying Cloudflare Workers (use wrangler CLI for deployment)
bun add wrangler -D
```

**Utils**

```bash
# ES Lint
bun create @eslint/config@latest
bun add eslint-plugin-import -D
```

## Project structure

This is an example bookstore project structure:

```text
src/
  ├── app/                  # Next.js app directory for routing
  │   ├── layout.tsx        # Root layout (e.g., global header/footer)
  │   ├── page.tsx          # Root page (e.g., home or dashboard)
  │   ├── auth/             # Routes for authentication
  │   │   ├── layout.tsx    # Layout for auth routes (e.g., no header/footer)
  │   │   ├── login/        # Login route
  │   │   │   └── page.tsx  # Login page
  │   │   └── signup/       # Signup route
  │   │       └── page.tsx  # Signup page
  │   ├── book/             # Routes for book management
  │   │   ├── layout.tsx    # Layout for book routes
  │   │   ├── page.tsx      # Book list route
  │   │   └── create/       # Create book route
  │   │       └── page.tsx  # Create book page
  ├── features/             # Feature-specific logic
  │   ├── auth/             # Authentication feature
  │   │   ├── components/   # Auth-specific UI components
  │   │   │   ├── login-form.tsx   # Login form component
  │   │   │   └── signup-form.tsx  # Signup form component
  │   │   ├── router.ts     # tRPC routers for login/signup/logout
  │   │   ├── schemas.ts    # Schemas for books
  │   │   ├── types.d.ts    # Type definitions for auth (e.g., user, token)
  │   │   └── store.ts      # Zustand store for authentication state
  │   ├── books/            # Book feature
  │   │   ├── components/   # Book-specific components
  │   │   │   ├── book-list.tsx  # List books UI
  │   │   │   └── book-form.tsx  # Form to create/edit books
  │   │   ├── router.ts     # tRPC routes for books (get, create, update, delete)
  │   │   ├── schemas.ts    # Schemas for books
  │   │   ├── types.d.ts    # Type definitions for books
  │   │   └── store.ts      # Zustand store for book state
  │   └── email/            # Email account management feature (Zoho integration)
  │       ├── components/   # Email-specific UI components
  │       │   ├── email-create-form.tsx  # Form to create an email account
  │       │   ├── email-update-form.tsx  # Form to update an email account
  │       │   └── email-list.tsx         # Component to list all email accounts
  │       ├── routers/      # Email-related API logic handled by tRPC routers
  │       │   └── email.ts       # tRPC routes for Zoho mail integration
  │       ├── types/        # Type definitions for Zoho email
  │       │   └── email.d.ts     # Types for email accounts
  │       └── store.ts       # Zustand store for managing email state
  ├── components/            # Reusable, cross-feature components
  │   ├── ui/                # General-purpose UI components
  │   │   ├── button.tsx     # Button component
  │   │   └── modal.tsx      # Modal component
  │   └── layout/            # Layout components
  │       ├── header.tsx     # Global header
  │       └── footer.tsx     # Global footer
  ├── hooks/                 # General-purpose hooks
  │   ├── state/             # Zustand stores for shared state
  │   │   └── use-theme-store.ts  # Zustand store for managing themes
  │   └── utilities/         # Utility hooks
  │       ├── use-debounce.ts     # Hook for debouncing
  │       └── use-viewport.ts     # Hook to detect viewport size
  ├── lib/                   # Configurations for external libraries/services
  │   ├── session/           # Session-related configuration and middleware
  │   │   ├── index.ts       # Export session-related functions and middleware
  │   │   ├── middleware.ts  # Session middleware (e.g., session handling logic)
  │   │   └── utils.ts       # Helper utilities for working with sessions
  │   ├── trpc/              # tRPC client and server configurations
  │   │   ├── client.ts      # tRPC client setup
  │   │   ├── server.ts      # tRPC server configuration
  │   │   ├── router.ts      # tRPC router definitions (combine all routers here)
  │   │   └── context.ts     # tRPC context setup
  │   ├── auth/              # Auth.js configuration
  │   │   └── auth.ts        # Authentication config
  │   ├── resend/            # Resend email service configuration
  │   │   ├── client.ts      # Resend client setup
  │   │   ├── templates/     # Email templates using react.email
  │   │   │   ├── reset-password.tsx  # Password reset email template
  │   │   │   └── welcome-email.tsx   # Welcome email template
  │   ├── zoho/              # Zoho API integration
  │   │   ├── client.ts      # Zoho API client setup
  │   │   ├── routes.ts      # tRPC API endpoints for Zoho mail
  │   │   └── constants.ts   # Zoho-specific constants (e.g., API URLs)
  │   └── stripe/            # Stripe SDK setup
  │       └── client.ts      # Stripe client
  ├── server/                # Backend and server-side logic
  │   ├── webhooks/          # Webhook handlers
  │   │   ├── stripe/        # Stripe webhook handlers
  │   │   │   ├── handle-invoice.ts   # Stripe invoice webhook handler
  │   │   │   └── handle-book.ts      # Stripe book webhook handler
  │   └── workers/           # Cloudflare Workers logic
  │       └── durable-objects.ts      # Cloudflare Durable Objects setup
  ├── styles/                # Global styles and configurations
  │   ├── globals.css        # Global CSS styles
  │   └── tailwind-config.js # Tailwind CSS configuration
  ├── types/                 # Shared TypeScript types across the app
  │   ├── api.d.ts           # API request/response types
  │   └── common.d.ts        # Common types (e.g., pagination, error-response)
  ├── db/                    # Database models, schemas, constants
  │   ├── schemas/           # Schemas for validation (e.g., using Zod)
  │   │   ├── user-schema.   # User validation schema
  │   │   └── book-schema.ts # Book validation schema
  │   ├── constants/         # Constants for DB and app-wide usage
  │   │   ├── db-constants.ts  # Constants for database-related operations
  │   │   └── app-constants.ts # General app constants (e.g., statuses, roles)
  ├── docs/                  # Documentation folder
  ├── utils/                 # Utility files like date formatting and others
  │   ├── format-date.ts     # Utility to format dates
  │   └── other-utils.ts     # Additional utility functions
  └── TODO                   # To-Do list of upcoming tasks, features, and improvements
```

## Logs

- Mon Jan 27, 2025
  - (1.27.01) - Added eslint and improved folder structure.
  - (1.27.02) - Added import eslinter.
- Sun Jan 26, 2025
  - (1.26.01) - Updated folder and file structure.
- Thu Jan 23, 2025
  - (1.23.01) - Resend and Auth.js.
  - (1.23.02) - Added Cloudflare R2 to the list.
- Wed Jan 22, 2025
  - (1.22.01) - Added Resend as the email provider instead of SendGrid.
  - (1.22.02) - Added Hono email folder.
- Tue Jan 21, 2025
  - (first-commit) - Made this repo public.
  - (1.21.01) - Added tech stack and project structure.
  - (1.21.02) - Added installations.
  - (1.21.03) - Added utils folder to the folder structure.
