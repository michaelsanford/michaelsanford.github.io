# michaelsanford.com

This is my minimal landing page.

## L10n Support (sort of...)

Being a polyglot developer _and human_, I added multi-language support.

The hero element is translated into the languages in which I feel like communicating.

On load, the page checks your browser's preferred language and shows only the matching translation (falling back to English if needed).

# CSP and FSP

I also hardened the security by adding a CSP and a Feature Policy. I also added an app manifest.

# Added Lighthouse Audit

Felt like adding [a Lighthouse audit](https://www.freecodecamp.org/news/how-to-use-lighthouse-in-github-actions/) to this as well,
becuase code quality speaks, right?

## Running Locally

You can serve the site locally using Python's built-in HTTP server:

```bash
python3 -m http.server --directory .
```

Then visit [http://localhost:8000](http://localhost:8000) in your browser.
