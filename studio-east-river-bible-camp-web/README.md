# East River Bible Camp – Sanity Studio

Sanity Content Studio for East River Bible Camp Web.

## Deploying to Vercel

1. **Push your code** to GitHub (or GitLab/Bitbucket) and [import the project in Vercel](https://vercel.com/new).
2. **Set the root directory** (if the repo contains more than this studio): in Vercel project settings, set **Root Directory** to `studio-east-river-bible-camp-web`.
3. **Add your deployment URL to Sanity CORS**  
   After the first deploy, copy your Vercel URL (e.g. `https://your-project.vercel.app`). In [Sanity Manage](https://www.sanity.io/manage) → your project → **API** → **CORS origins**, add that URL (and any custom domain you use) so the Studio can talk to the Sanity API.
4. Redeploy once after adding the CORS origin if the first deploy failed with API errors.

The repo includes a `vercel.json` that sets the build command, output directory (`dist`), and SPA rewrites so client-side routing works.

## Local development

- `npm run dev` – start the Studio locally
- `npm run build` – build for production

## Links

- [Sanity getting started](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the Sanity community](https://www.sanity.io/community/join?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
