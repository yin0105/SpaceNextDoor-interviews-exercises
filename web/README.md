This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.ts`. The page auto-updates as you edit the file.

## Directory Structure

- All the components related to pages must directly go into `modules/[page_name]/components`. Layouts specific to every page should go inside `modules/[page_name]/layouts`.
- Shared components must go inside `components/` folder
- Shared layouts must go inside `layouts/` folder