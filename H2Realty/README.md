# H2 Signature Realty

A responsive, buildless real estate website designed around the supplied H2 Signature Realty logo. Navy, muted teal, white space, editorial typography, and residential inspiration photography.

## Publish with GitHub Pages

1. Create or open your GitHub repository.
2. Upload the **contents** of this folder to the repository root: `index.html`, `styles.css`, `script.js`, `assets/`, and `.nojekyll`.
3. In **Settings → Pages**, choose **Deploy from a branch**, then **main** and **/(root)**. Save.
4. GitHub will show the published address once deployment completes.

All local references use relative paths, so the site also works under a GitHub project URL. No build tools or dependencies are required. To preview locally, run `python3 -m http.server 8000` in this folder and open http://localhost:8000.

## Before launch

- Review company copy, the service area, and Equal Housing Opportunity footer for accuracy.
- Add your approved agent/brokerage information, required license disclosures, and contact details.
- The contact form currently prepares a copyable inquiry; it does **not** transmit or store submissions. Connect an approved form service or configure a real email-based workflow before offering direct delivery. Never place API secrets in this static repository.
- Photography is illustrative, not actual listings. No listings, reviews, credentials, or sales results have been fabricated.
- Images are loaded from Unsplash URLs and need an internet connection. For production, review image usage rights and download approved photography into `assets/`, then update the image paths in `index.html` to remove that external dependency.

## Customize

Edit text and image URLs in `index.html`. Brand colors are defined at the beginning of `styles.css`. Interaction behavior is in `script.js`. The original supplied logo is in `assets/logo.jpg`.

## Verification

JavaScript syntax, HTML parsing, local asset references, and ZIP integrity were checked. Browser visual QA was unavailable in the current environment; verify desktop and mobile layouts after upload.
