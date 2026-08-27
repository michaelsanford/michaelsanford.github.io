# michaelsanford.com

This is my minimal landing page.

On load, the page checks your browser's preferred language and shows only the matching translation (falling back to English if needed).

## Technical Features

### Security

- **Content Security Policy (CSP)**: Restricts resource loading to prevent XSS attacks
- **Permissions Policy**: Disables unnecessary browser features (camera, microphone, geolocation, etc.)
- **Secure external resources**: All third-party content loaded over HTTPS

### Performance

- **DNS preconnect hints**: Early connection establishment for critical domains (Google Fonts, FontAwesome)
- **Lazy loading images**: Badge images load only when needed
- **Optimized font loading**: Google Fonts with `font-display: swap` for immediate text visibility
- **Minimal dependencies**: Only essential external resources

### Progressive Web App

- **Web App Manifest**: Enables installation and native app-like experience
- **Theme colors**: Consistent branding across platforms
- **Responsive icons**: Multiple sizes for different devices

### Accessibility & SEO

- **Semantic HTML**: Proper document structure
- **Alt text**: All images have descriptive alternative text
- **Language detection**: Automatic content localization based on browser preferences
- **Meta tags**: Complete OpenGraph and Twitter Card support

## Running Locally

You can serve the site locally using Python's built-in HTTP server:

```bash
python3 -m http.server --directory .
```

Then visit [http://localhost:8000](http://localhost:8000) in your browser.

## Security scanning

[Snyk](https://snyk.io) runs on every push and pull request, and weekly on a schedule,
via [`.github/workflows/snyk.yml`](.github/workflows/snyk.yml):

- **Snyk Code** — static analysis of first-party source

Findings are published to this repository's **Security → Code scanning** tab. The build
fails on anything at `high` severity or above.

Run the same scans locally before pushing:

```powershell
./scripts/Invoke-SnykScan.ps1                          # exactly what CI runs
./scripts/Invoke-SnykScan.ps1 -SeverityThreshold low   # everything, including noise
```

Requires the Snyk CLI (`winget install Snyk.Snyk`) and a one-time `snyk auth`.
