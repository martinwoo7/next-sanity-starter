This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This starter is a statically generated site that uses [Next.js][nextjs] for the frontend and [Sanity][sanity-homepage] to handle its content.
It comes with a native Sanity Studio that offers features like real-time collaboration, instant side-by-side content previews, and intuitive editing.

The Studio connects to Sanity Content Lake, which gives you hosted content APIs with a flexible query language, on-demand image transformations, powerful patching, and more.

> **Note**
>
> This starter uses the `/app` directory for Next.js routing.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
This project also doesn't use have a `page.tsx` in the `/app` directory, and instead the entry point for the website is `/app/(personal)/page.tsx`.
`

## Table of Contents

-   [Features](#features)
-   [Table of Contents](#table-of-contents)
-   [Project Overview](#project-overview)
    -   [Important files and folders](#important-files-and-folders)
-   [Configuration](#configuration)
    -   [Step 1. Set up the environment](#step-1-set-up-the-environment)
    -   [Step 2. Set up the project locally](#step-2-set-up-the-project-locally)
    -   [Step 3. Run Next.js locally in development mode](#step-3-run-nextjs-locally-in-development-mode)
    -   [Step 4. Deploy to production](#step-4-deploy-to-production)
-   [Questions and Answers](#questions-and-answers)
    -   [It doesn't work! Where can I get help?](#it-doesnt-work-where-can-i-get-help)
    -   [How can I remove the "Next steps" block from my app?](#how-can-i-remove-the-next-steps-block-from-my-app)
    -   [How can I set up Incremental Static Revalidation?](#how-can-i-set-up-incremental-static-revalidation)
-   [Next steps](#next-steps)

## Project Overview

| [Example Studio with preview](https://next-sanity-starter-six.vercel.app/studio)                                        |
| ----------------------------------------------------------------------------------------------------------------------- |
| ![Sanity Studio](https://user-images.githubusercontent.com/44635000/197511725-b2a2e2e5-287b-41a9-84c6-ec90d37ca480.png) |

# Important files and folders

| File(s)                        | Description                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------- |
| `sanity.config.ts`             | Config file for Sanity Studio                                                         |
| `sanity.cli.ts`                | Config file for Sanity CLI                                                            |
| `/app/(personal)/page.tsx`     | Landing page for `/`.                                                                 |
| `/app/studio/[[...index]].tsx` | Where Sanity Studio is mounted                                                        |
| `/app/api/draft.ts`            | Serverless route for triggering Draft mode                                            |
| `/app/api/disable-draft.ts`    | Serverless route for disabling Draft mode                                             |
| `/sanity/schemas.ts`           | Where Sanity Studio gets its content types from                                       |
| `/sanity/env.ts`               | Configuration for the Sanity project and dataset                                      |
| `/sanity/schemas.ts`           | Where Sanity Studio gets its content types from                                       |
| `/sanity/lib/client.ts`        | Sanity client configured based on `env.ts`                                            |
| `/sanity/lib/image.ts`         | Sanity image builder - unused in this template, but is needed to render Sanity images |
| `tailwind.config.js`           | Tailwind config. Only applies to files listed under `content`                         |

All pages are wrapped in a master `/app/layout.tsx`, while `/app/(personal)` has its own `layout.tsx`.

## Configuration

### Step 1. Set up the environment

Use the Deploy Button below. It will let you deploy the starter using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-sanity-example) as well as connect it to your Sanity Content Lake using [the Sanity Vercel Integration][integration].

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmartinwoo7%2Fnext-sanity-starter&demo-title=Next.js%20Sanity.io%20Starter&demo-description=Starter%20template%20for%20Calicode%20built%20with%20Next.js%20and%20Sanity.io&demo-url=https%3A%2F%2Fnext-sanity-starter-six.vercel.app%2F&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx)

### Step 2. Set up the project locally

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) that was created for you on your GitHub account. Once cloned, run the following command from the project's root directory:

```bash
npx vercel link
```

Download the environment variables needed to connect Next.js and the Studio to your Sanity project:

```bash
npx vercel env pull
```

This will create a git-ignored `.env` file with environment variables that will be used for local development.

### Step 3. Run Next.js locally in development mode

```bash
npm install && npm run dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

The website should be up and running on [http://localhost:3000][localhost-3000]! You can create and edit content on [http://localhost:3000/studio][localhost-3000-studio].

### Step 4. Deploy to production

To deploy your changes to production you use `git`:

````bash
git add .
git commit
git push

Alternatively, you can deploy without a `git` hosting provider using the Vercel CLI:

```bash
npx vercel --prod
````
