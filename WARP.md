# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Repository overview
- Framework: Nuxt.js 2 (target: static) with @nuxt/content for content-driven pages
- Styling: Tailwind CSS (JIT) with @tailwindcss/typography, custom palette and fonts via @nuxtjs/google-fonts
- Utilities: @nuxtjs/date-fns for date formatting
- Content and CMS: Markdown content under content/, Netlify CMS configured in static/admin/config.yml (git-gateway backend), Cloudinary media library
- Deployment style: Static generation (nuxt generate). Netlify-style redirects via static/_redirects

Common commands
- Install dependencies
  - yarn: yarn install
  - npm: npm install
- Run dev server (hot reload on http://localhost:3000)
  - yarn dev
  - npm run dev
- Build for production (server-rendered start)
  - yarn build
  - npm run build
- Start production server (after build)
  - yarn start
  - npm run start
- Generate static site (for static hosting)
  - yarn generate
  - npm run generate
- Linting: Not configured in this repo
- Tests: Not configured in this repo (no test runner or scripts defined)

High-level architecture
1) Routing and pages (pages/)
- Home: pages/index.vue simply re-exports pages/_homepage.vue. _homepage.vue pulls category list and a homepage configuration document from content/homepage/, then constructs a masonry of featured and secondary posts
- Articles: Dynamic category and article routes under pages/articles/_category/{index.vue,_article.vue}
  - Category page queries posts with category === selected category.titre and renders a list via components/Articles.vue
  - Article page fetches a single post and its category; renders details, date, authors, attachments, and body via <nuxt-content>
- Publications: Mirrored structure under pages/publications/_category/{index.vue,_publication.vue} with components/Publications.vue
- Institut: pages/institut/_subpage.vue loads ordered “Institut” pages; pages/institut/index.vue applies middleware/institut.js to redirect to the default subpage
- Search: pages/search.vue uses @nuxt/content’s .search(query) across posts and publications, then hydrates category metadata for rendering

2) Content model (content/)
- Posts: content/posts/*.md
- Article categories: content/categories/*.md (ordered via frontmatter ‘ordre’)
- Publications: content/publications/*.md
- Publication categories: content/publication-categories/*.md (ordered; may include a cover)
- Institut pages: content/institut/*.md (ordered)
- Homepage config: content/homepage/homepage.md (drives featured and secondary articles)
Notes
- Frontmatter fields are aligned with static/admin/config.yml (Netlify CMS). Key fields include: titre, date, url, auteur, couverture, category, annexes, etc. Avoid committing secrets; media uploads go to Cloudinary per the CMS config

3) Components and layout
- Layouts: layouts/default.vue renders Navbar, <Nuxt/>, and Myfooter; layouts/error.vue provides a simple 404 view
- Lists: components/Articles.vue and components/ArticlesMasonry.vue render post cards and a masonry grid (with Cloudinary-style size transforms applied in image URLs). components/Publications.vue renders publication entries
- TOC: components/TableOfContents.vue builds an on-page TOC from h2/h3 headings (defaults to scanning #category-content). It slugifies headings and supports smooth scroll + hash updates
- Shared UI: Icons, Sidebar, Auteurs, Attachments, Share, Navbar, Myfooter implement common UI elements

4) Plugins and middleware
- Plugin: plugins/custom-footnotes.js (client only) augments <nuxt-content> output to support footnotes defined as [^n] references and paragraphs starting with [^n]: definition. It:
  - Scans rendered content, hides original definition paragraphs
  - Appends a .footnotes section with an ordered list of definitions and backrefs
  - Replaces inline [^n] occurrences with sup-linked references
  Consider this when modifying DOM inside <nuxt-content> to avoid conflicts
- Middleware:
  - middleware/redirect.js: redirects to ‘/’ (used for generic redirects if applied)
  - middleware/institut.js: redirects ‘/institut’ to a default page (‘/institut/origines-et-finalites’)

5) Configuration
- nuxt.config.js
  - target: 'static' with generate.fallback = true (SPA fallback for unknown routes on static hosts)
  - head: French locale, site title, viewport, description, and Fathom analytics script
  - env.baseURL set to https://ihei-asso.org (used by the app if referenced)
  - css: includes assets/style.css
  - buildModules: @nuxtjs/tailwindcss, @nuxtjs/google-fonts, @nuxtjs/date-fns
  - modules: @nuxt/content with markdown options and nestedProperties config
  - build.postcss: postcss-import, tailwindcss, autoprefixer
  - tailwindcss module configured to use ~/tailwind.config.js
- Tailwind: tailwind.config.js enables JIT, purges components/layouts/pages/plugins/nuxt.config/content, sets custom colors, fonts, and typography defaults
- Path aliases: jsconfig.json maps ~/* and @/* (and their doubled forms) to the project root for concise imports

6) Admin and content editing
- Netlify CMS is configured under static/admin/ (config.yml). If the site is hosted with Netlify Identity + git-gateway, editors can access /admin to manage content. Media uploads are configured to use Cloudinary
- The static/_redirects file is included for Netlify routing/redirect behavior and is copied into the generated site

Operational tips specific to this repo
- When adding content manually, prefer aligning frontmatter fields with the CMS configuration (static/admin/config.yml) to keep the UI consistent
- The homepage order for secondary articles is dictated by the list in content/homepage/homepage.md (array of slugs); ensure slugs match the target posts
- If you modify DOM around <nuxt-content>, remember the custom-footnotes plugin runs post-mount on the client and may need coordination

Important references
- README.md includes the basic Yarn commands for install/dev/build/start/generate
- Key files: nuxt.config.js, tailwind.config.js, jsconfig.json, pages/*, components/*, content/*, plugins/custom-footnotes.js, middleware/*, static/admin/config.yml

