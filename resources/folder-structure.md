# folder structure

```
/my-project
  /frontend               # Next.js frontend (React code)
    /pages                # Next.js pages (routes)
    /components           # React components
    /public               # Static assets (images, icons)
    /styles               # Global styles (CSS, SCSS)
    next.config.js        # Next.js config
    package.json          # Frontend dependencies and scripts
  /backend                # Hono backend (API routes, controllers)
    /controllers          # Controller logic for handling requests
    /models               # Mongoose models or database schemas
    /routes               # Hono API routes definitions
    app.ts                # Entry point for Hono app
    package.json          # Backend dependencies and scripts
  .gitignore              # Git ignore file
  README.md               # Project documentation
  package.json            # Root package.json for shared dependencies (optional)
```