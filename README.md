# Personal Homepage

A bilingual personal website adapted from the resume in `assets/resume.pdf`, now styled closer to an academic homepage layout.

## Local preview

```bash
cd /Users/bytedance/Documents/New\ project/personal-site
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy with GitHub Pages

1. Create a GitHub repository and push this `personal-site` directory as the repository root.
2. Keep the default branch name as `main`.
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Push to `main`; the workflow at `.github/workflows/deploy-pages.yml` will publish the site automatically.

## Expected URL

- If the repository name is `<username>.github.io`, the site URL will be `https://<username>.github.io/`
- If the repository name is something like `personal-site`, the site URL will usually be `https://<username>.github.io/personal-site/`

## Main files

- `index.html`: homepage structure
- `styles.css`: academic-style layout and responsive design
- `script.js`: Chinese / English toggle
- `assets/resume.pdf`: original resume PDF
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment workflow
