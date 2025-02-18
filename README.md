# Verdant

Verdant is a project aimed at allowing users to find multiple environmental risks in a specific area. By leveraging various data sources and analytical tools, Verdant provides comprehensive insights into environmental hazards, helping users make informed decisions about their surroundings.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## About Next.js

Next.js(https://nextjs.org) is a full-stack application that can be used to simplify many best practices regarding web development all into one framework.

### File Based Routing

In Next.js, developers are allowed to create routes for their application using the App Router. The App Router is a file-based routing system in Next.js where you define your routes through specific naming conventions of your folders.

Example:
```javascript
// app/about/page.tsx
export default function AboutPage() {
  return <div>About Us</div>;
}
```

### API Endpoints

You can create API endpoints by adding files to the `pages/api` directory. These files will be treated as API routes instead of React pages.

Example:
```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
