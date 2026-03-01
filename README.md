# Norbert Cseh's CV

This project is a modern, responsive, and interactive CV/Resume built with TypeScript, HTML, and CSS.

## Features

- **Modern UI**: Clean and professional design using JetBrains fonts.
- **Dark/Light Mode Toggle**: Integrated theme switching with system preference detection and `localStorage`
  persistence.
- **Interactive Elements**: Intersection Observer for section fade-in animations.
- **Print Optimized**: Custom print styles to ensure high-quality PDF/Paper output.
- **Responsive Design**: Adapts beautifully to various screen sizes.

## Personal Information

- **Name**: Norbert Cseh
- **Website**: [www.ncseh.hu](https://www.ncseh.hu)
- **LinkedIn**: [norbertistvancseh](https://www.linkedin.com/in/norbertistvancseh/)
- **GitHub**: [NorbertCseh](https://github.com/NorbertCseh)

## Development

This project is built using [Vite](https://vitejs.dev/).

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Hosting

The project is hosted on [www.ncseh.hu](https://www.ncseh.hu).

### Custom Domain Setup (rackhost.hu)

To connect your custom domain **www.ncseh.hu** to this GitHub Pages site:

#### 1. DNS Configuration at Rackhost.hu

Log in to your rackhost.hu control panel and update your DNS records for `ncseh.hu`:

- **A Records** (Point `ncseh.hu` to GitHub's IP addresses):
    - `185.199.108.153`
    - `185.199.109.153`
    - `185.199.110.153`
    - `185.199.111.153`
- **CNAME Record** (Point `www` to your GitHub username's pages URL):
    - Host: `www`
    - Value: `NorbertCseh.github.io` (or your actual GitHub username)

#### 2. GitHub Repository Settings

1. Go to your repository **Settings** > **Pages**.
2. Under **Custom domain**, type `www.ncseh.hu` and click **Save**.
3. A `CNAME` file has been added to the `public/` folder in this repo to ensure this setting is preserved.
4. Wait for DNS propagation (can take up to 24 hours).
5. Once verified, check **Enforce HTTPS**.

### Deployment

This project includes a GitHub Action for automatic deployment to GitHub Pages. Whenever you push to the `main` branch,
the site is automatically built and deployed.

To enable this on GitHub:

1. Go to your repository **Settings** on GitHub.
2. Navigate to **Pages** in the sidebar.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push to `main` branch to trigger the deployment.
