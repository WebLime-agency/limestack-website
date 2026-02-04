# LimeStack SEO Plan

Audit date: 2026-02-03

Goal: Improve organic discoverability via search engines and AI tools (Google, Bing, Perplexity, ChatGPT search, Google AI Overviews).

---

## Phase 1 — Technical Foundation

These are the baseline requirements for search engines to properly crawl and index the site.

### 1.1 Sitemap (`sitemap.xml`) ✅

- **Status:** Complete — live at https://limestack.io/sitemap.xml, 7 pages discovered
- **Impact:** High — search engines can't efficiently discover pages without one
- **Tool:** [super-sitemap](https://github.com/jasongitmail/super-sitemap) (SvelteKit-native, auto-discovers routes, TypeScript, handles dynamic routes)
- **Tasks:**
  - [x] Install `super-sitemap` (`npm i -D super-sitemap`)
  - [x] Create `/src/routes/sitemap.xml/+server.ts` with origin `https://limestack.io`
  - [x] Exclude blog routes via `excludeRoutePatterns` (blog deferred for now)
  - [ ] Add blog slug param values once blog has real content
  - [x] Add `Sitemap: https://limestack.io/sitemap.xml` to `static/robots.txt`
  - [x] Verify sitemap renders at `https://limestack.io/sitemap.xml` after deploy
  - [x] Submit sitemap in Google Search Console (submitted Feb 3, 2026 — Status: Success, 7 pages)
  - [ ] Submit sitemap in Bing Webmaster Tools

### 1.2 Canonical URLs ✅

- **Status:** Complete — added to `+layout.svelte` using `$page.url.pathname`
- **Impact:** High — prevents duplicate content penalties from trailing slashes, query params, etc.
- **Tasks:**
  - [x] Add `<link rel="canonical" href="..." />` in `+layout.svelte` using `$page.url.pathname`
  - [x] Ensure canonical is absolute URL (`https://limestack.io` + path)
  - [x] SvelteKit `$page.url.pathname` already strips query params; trailing slash handled by SvelteKit config

### 1.3 Fix `og:url` (hardcoded to homepage) ✅

- **Status:** Complete — now dynamic per page, done alongside 1.2
- **Impact:** Medium — social shares for `/pricing`, `/features`, etc. all point back to homepage
- **Tasks:**
  - [x] Make `og:url` dynamic using `$page.url.pathname` (same approach as canonical)

### 1.4 Preconnect hint for Plausible

- **Status:** Missing
- **Impact:** Low — minor performance improvement
- **Tasks:**
  - [ ] Add `<link rel="preconnect" href="https://plausible.io" />` in `app.html` before the Plausible script

---

## Phase 2 — Structured Data (JSON-LD)

Structured data helps search engines understand what the site is and can trigger rich results (knowledge panels, product cards, breadcrumbs). AI tools also rely heavily on this.

### 2.1 Organization schema (homepage)

- **Status:** Missing
- **Impact:** High — tells search engines and AI who LimeStack is
- **Tasks:**
  - [ ] Add JSON-LD `Organization` schema to homepage `<svelte:head>`
  - [ ] Include: name, url, logo, description, sameAs (social links when available)

### 2.2 WebSite schema (homepage)

- **Status:** Missing
- **Impact:** Medium — helps Google understand the site as a whole
- **Tasks:**
  - [ ] Add JSON-LD `WebSite` schema with `potentialAction` SearchAction (if site has search)
  - [ ] Or simpler `WebSite` with just name + url if no search functionality

### 2.3 SoftwareApplication schema (features/pricing)

- **Status:** Missing
- **Impact:** Medium — can trigger product rich results in search
- **Tasks:**
  - [ ] Add JSON-LD `SoftwareApplication` schema on `/features` or `/pricing`
  - [ ] Include: name, applicationCategory, operatingSystem, offers (pricing tiers)

### 2.4 BreadcrumbList schema (all inner pages)

- **Status:** Missing
- **Impact:** Low-Medium — improves search result appearance with breadcrumb trails
- **Tasks:**
  - [ ] Add JSON-LD `BreadcrumbList` to all pages except homepage
  - [ ] Structure: Home > Page Name (e.g., Home > Features, Home > Blog > Post Title)

### 2.5 Article schema (blog posts — when blog is live)

- **Status:** N/A until blog is built
- **Tasks:**
  - [ ] Add JSON-LD `Article` schema to blog post template
  - [ ] Include: headline, author, datePublished, dateModified, image, description

---

## Phase 3 — AI Discoverability

Emerging standards for making the site understandable to AI tools and LLM-powered search.

### 3.1 `llms.txt`

- **Status:** Missing
- **Impact:** High for AI discovery — plain-text file that LLMs can read to understand the product
- **Reference:** https://llmstxt.org
- **Tasks:**
  - [ ] Create `/static/llms.txt` with:
    - What LimeStack is (one-liner)
    - Who it's for (target audience)
    - Key features (bullet list)
    - Pricing summary
    - How to get started
    - Links to key pages
  - [ ] Keep it factual, concise, and updated as the product evolves

### 3.2 Semantic HTML review

- **Status:** Good overall, minor improvements possible
- **Tasks:**
  - [ ] Ensure all sections use `<section>`, `<article>`, `<nav>`, `<main>` appropriately
  - [ ] Verify `<main>` wraps primary content (not nav/footer)
  - [ ] These semantic landmarks help AI tools parse page structure

---

## Phase 4 — Content Strategy

Technical SEO gets you indexed. Content gets you ranked.

### 4.1 Blog decision

- **Status:** Blog routes exist with hardcoded placeholder content — no real posts
- **Impact:** High — thin/fake content can hurt domain authority
- **Options:**
  - **Option A:** Build out the blog with real content (recommended if you can write 1-2 posts/month)
  - **Option B:** Remove blog from routes and navigation, add back when ready
  - **Option C:** Add `noindex` to blog pages as a temporary measure
- **Tasks:**
  - [ ] Decide on option A, B, or C
  - [ ] If A: Plan 3-5 initial posts targeting eBay reseller keywords (sourcing tips, listing optimization, inventory management)
  - [ ] If A: Set up proper blog data source (markdown files, CMS, or Supabase)
  - [ ] If A: Add RSS feed (`/src/routes/rss.xml/+server.ts`)
  - [ ] If B: Remove `/blog` routes and nav/footer links

### 4.2 Keyword targeting

- **Status:** Current titles/descriptions are decent but generic
- **Tasks:**
  - [ ] Research primary keywords (e.g., "eBay inventory management", "eBay listing tool", "reseller software")
  - [ ] Refine page titles and meta descriptions to include target keywords naturally
  - [ ] Ensure homepage H1 and description include primary keyword
  - [ ] Add long-tail keywords to feature section headings

### 4.3 Content depth on key pages

- **Status:** Pages are clean but relatively thin on indexable text content
- **Tasks:**
  - [ ] Consider adding more descriptive text to `/features` (search engines need text to index)
  - [ ] Add FAQ section to `/pricing` (can also use FAQPage schema for rich results)
  - [ ] Consider customer testimonials/social proof (when available)

---

## Phase 5 — Miscellaneous

### 5.1 Web manifest

- **Status:** Missing
- **Tasks:**
  - [ ] Create `/static/manifest.webmanifest` with app name, icons, theme color
  - [ ] Link in `app.html`: `<link rel="manifest" href="/manifest.webmanifest" />`

### 5.2 Additional favicon sizes

- **Status:** Only SVG favicon + apple-touch-icon
- **Tasks:**
  - [ ] Generate 16x16 and 32x32 PNG favicons
  - [ ] Add corresponding `<link>` tags in `app.html`

### 5.3 Twitter/X handle

- **Status:** No `twitter:site` meta tag
- **Tasks:**
  - [ ] Add `<meta name="twitter:site" content="@yourhandle" />` once you have an X account

### 5.4 Image alt text policy

- **Status:** No content images currently, but important for future
- **Tasks:**
  - [ ] When adding product screenshots or images, always include descriptive `alt` attributes
  - [ ] Use keywords naturally in alt text where appropriate

---

## Search Console & Indexing

These are external steps (not code changes) but critical for SEO.

- [x] Set up Google Search Console (verified, active)
- [ ] Set up Bing Webmaster Tools
- [x] Submit sitemap to Google Search Console (Feb 3, 2026 — Success, 7 pages)
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor Core Web Vitals in Search Console
- [ ] Request indexing for key pages after changes are deployed
- [ ] Set up Bing's IndexNow for faster indexing (Cloudflare supports this natively)

---

## Progress Tracking

| Phase | Item | Status |
|-------|------|--------|
| 1.1 | Sitemap (super-sitemap) | ✅ Complete |
| 1.2 | Canonical URLs | ✅ Complete |
| 1.3 | Fix og:url | ✅ Complete |
| 1.4 | Preconnect hint | Not started |
| 2.1 | Organization schema | Not started |
| 2.2 | WebSite schema | Not started |
| 2.3 | SoftwareApplication schema | Not started |
| 2.4 | BreadcrumbList schema | Not started |
| 2.5 | Article schema | Blocked (needs blog) |
| 3.1 | llms.txt | Not started |
| 3.2 | Semantic HTML review | Not started |
| 4.1 | Blog decision | Needs decision |
| 4.2 | Keyword targeting | Not started |
| 4.3 | Content depth | Not started |
| 5.1 | Web manifest | Not started |
| 5.2 | Favicon sizes | Not started |
| 5.3 | Twitter handle | Not started |
| 5.4 | Image alt text | Future |
| — | Google Search Console | ✅ Complete |
| — | Bing Webmaster Tools | Not started |
