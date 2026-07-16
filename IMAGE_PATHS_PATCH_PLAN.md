# Image path patch plan (Vercel)

## Information gathered
- `src/data.ts` defines images as runtime strings like `'/src/assets/images/...jpg'`.
- `src/components/About.tsx` uses `src="/src/assets/images/ss_construction_logo_....jpg"`.
- `index.html` uses `og:image` as `content="/logo.png"`.

## Plan
1. Replace `'/src/assets/images/...jpg'` strings in `src/data.ts` with Vite imports so URLs are correct after build.
2. Replace the `About.tsx` logo `src` with a Vite import.
3. Handle `index.html` `og:image` by either:
   - moving logo into `public/logo.png`, or
   - using the existing imported logo url and updating meta via JS (optional).
   Prefer: add/move into `public/` and reference `/logo.png`.
4. Search for any other `/src/assets/` or `/images/` occurrences and patch them.
5. Run `npm run build` and verify image URLs.

