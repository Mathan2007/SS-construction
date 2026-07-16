# TODO: Fix image paths for Vercel

- [ ] Replace hard-coded `/src/assets/...` and `/assets/...` runtime paths with Vite-friendly imports (so production URLs work on Vercel).
- [ ] Fix `About.tsx` logo image path.
- [ ] Fix `src/data.ts` image fields (HERO_IMAGE, PROJECT images, gallery images) to use imported image URLs.
- [ ] Ensure any public/root-relative references like `/logo.png` are handled (either move to `public/` or use import).
- [ ] Build/test locally: `npm run build` and verify images.

