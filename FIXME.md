# Improvements

## High priority

- [x] Create real localized routes for German and Indonesian so translated content is prerendered and indexable alongside the default English route.
- [x] Generate localized titles, descriptions, canonical URLs, and sitemap entries.
- [x] Add richer SEO and social metadata: canonical URL, Open Graph image and locale, Twitter image, and additional Person JSON-LD fields.
- [ ] Provide localized PDF résumé downloads with a prominent download button.
- [ ] Rewrite experience bullets around measurable outcomes, scale, and impact.
- [ ] Add selected project, case-study, certification, architecture, or portfolio links.

## Reliability and security

- [x] Make `.github/workflows/health-check.yml` fail when one or more monitored URLs are unavailable.
- [x] Add Playwright smoke tests for desktop, mobile, print, asset paths, hydration, and all locales.
- [x] Add automated accessibility checks for heading hierarchy, keyboard navigation, focus visibility, contrast, and language controls.
- [x] Add `rel="noopener noreferrer"` to external links opened with `target="_blank"`.
- [x] Verify that assets and navigation work correctly when deployed under the GitHub Pages `/resume2/` subpath.
- [x] Add container health checks to the Docker deployment configuration.
- [ ] Prefer immutable image digests for production deployments while retaining readable tags.
- [ ] Add license reporting and dependency-policy checks alongside Renovate, Trivy, CodeQL, and SBOM generation.

## UX and content

- [ ] Add a clearer contact CTA with email, LinkedIn, GitHub, and résumé-download actions.
- [ ] Add a concise professional summary above the experience section.
- [ ] Group skills into Backend, Frontend, Cloud and Infrastructure, Messaging and Data, and Tooling categories.
- [ ] Add useful skill context such as primary/working knowledge or years of experience without unsupported percentage bars.
- [ ] Improve the print layout for a clean one- or two-page résumé.
- [ ] Add a manual light/dark theme toggle and persist the preference.

## Build and content quality

- [ ] Reduce duplicate Docker dependency installation and static builds by reusing one CI-built artifact where practical.
- [x] Extend translation/content validation to check URLs, duplicate keys, date formats, bullet length, untranslated content, alt text, and metadata.
