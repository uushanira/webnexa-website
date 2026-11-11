# WebNexazz Website

Modern, responsive company website for **WebNexazz** (Software Development & IT Services), built with React, Vite, Tailwind CSS, React Router, and Lucide React.

## Project Structure

```text
src/
├── components/   # Reusable UI components (Navbar, Footer, Logo, Seo, etc.)
├── data/         # Centralized company info, services, tech stack & sample projects
├── layouts/      # Shared page layout (MainLayout)
├── pages/        # Home, About Us, Services, Portfolio, Contact Us, NotFound
├── App.jsx       # Route definitions with lazy-loading and ErrorBoundary
├── index.css     # Tailwind CSS imports and shared utility styles
└── main.jsx      # Application entry point
```

## Customization

Edit `src/data/siteData.js` to update:
- Company contact placeholders (`email`, `phone`, `location`, `hours`)
- Social media links (`socials`)
- Services, deliverables, tech stack, and portfolio projects (replace the clearly labelled sample concepts with real client projects when ready)

## Local Development

```bash
npm install
npm run dev
```

Run linting and production build verification:

```bash
npm run lint
npm run build
```

## Deployment (Cloudflare Pages)

1. Push the repository to GitHub or GitLab.
2. In **Cloudflare Dashboard → Workers & Pages → Create → Pages**, connect your repository.
3. Use these build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. `public/_redirects` is included for clean client-side route fallback.

> **Note:** Cloudflare Pages supports commercial websites on its free plan. If you consider Vercel instead, note that Vercel's Hobby plan has non-commercial usage restrictions.
