How to add your certificate image

1. Place your certificate file (PNG, JPG or PDF) in the `public/certs/` folder.
   - Create the folder if it doesn't exist.
   - Example path: `public/certs/my-certificate.png`.

2. Add an entry to `CERTIFICATIONS` in `constants.ts`. Example:

{
  id: 'my-cert',
  image: '/certs/my-certificate.png',
  url: '/certs/my-certificate.png'
}

3. Restart the dev server (if running):

```bash
npm run dev
```

Notes:
- `image` is used as a thumbnail inside the certification card.
- `url` is opened when clicking "View Certificate"; it can point to a public credential page or the full-size file.
- Using `public/` is easiest because the files are served as-is at the same origin (no bundling required).

To configure the training popup, edit the `TRAINING` object in `constants.ts` and set `whatsappUrl` to your registration link:

```ts
export const TRAINING = {
  enabled: true,
  whatsappUrl: 'https://wa.me/1234567890?text=I%20want%20to%20register%20for%20the%20training',
  phone: '+234 901 203 9810',
  title: 'Training Enrollment Open',
  description: "We're running a hands-on training session for creatives and developers — spaces are limited.",
  delayMs: 1200, // milliseconds before showing CTA
  showEveryVisit: false // set to true to show on every page visit
};
```
 