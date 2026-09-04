import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.resolve(rootDir, 'dist')
const distSsrDir = path.resolve(rootDir, 'dist-ssr')
const publicDir = path.resolve(rootDir, 'public')

const SITE_URL = 'https://mattrmost.com'
const DEFAULT_OG_IMAGE = `${SITE_URL}/avatar.jpg`
const TODAY = new Date().toISOString().split('T')[0]

// Base Schemas
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Syubban Fakhriya',
  alternateName: 'fakrii',
  url: SITE_URL,
  image: `${SITE_URL}/avatar.jpg`,
  jobTitle: 'Software Engineer & Full-Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'PT. SMBC Indonesia'
  },
  description:
    'Full-Stack Developer and Content Writer specialized in Java, Spring Boot, React, TypeScript, Kotlin, and scalable software architecture.',
  sameAs: [
    'https://github.com/HellBus1',
    'https://linkedin.com/in/syubban',
    'https://medium.com/@fakrii',
    'https://instagram.com/mattr.most'
  ],
  knowsAbout: [
    'Java',
    'Spring Boot',
    'React',
    'TypeScript',
    'Flutter',
    'Kotlin',
    'Software Engineering',
    'Web Development',
    'Mobile Development',
    'Microservices Architecture'
  ]
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Syubban Fakhriya Portfolio',
  url: SITE_URL,
  description: 'Engineering portfolio, technical articles, and software showcases by Syubban Fakhriya.',
  author: {
    '@id': `${SITE_URL}/#person`
  },
  inLanguage: 'en-US'
}

const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
    title: 'Syubban Fakhriya — Full-Stack Developer & Content Writer',
    description:
      'Personal portfolio and engineering showcase of Syubban Fakhriya. Specialized in Java, Spring Boot, React, TypeScript, Kotlin, and scalable software architecture.',
    canonical: `${SITE_URL}/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    schema: [personSchema, websiteSchema]
  },
  {
    path: '/projects',
    priority: '0.9',
    changefreq: 'weekly',
    title: 'Projects & Engineering Archive — Syubban Fakhriya',
    description:
      'Explore production-ready applications, open-source repositories, and native mobile utilities built with Java, Kotlin, Flutter, and React by Syubban Fakhriya.',
    canonical: `${SITE_URL}/projects`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Projects & Engineering Archive',
        url: `${SITE_URL}/projects`,
        description: 'Curated archive of software engineering projects and applications.',
        author: { '@id': `${SITE_URL}/#person` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` }
        ]
      }
    ]
  },
  {
    path: '/projects/ventnote',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'VentNote: Privacy-Focused Offline Android Note App — Syubban Fakhriya',
    description:
      'VentNote is a native Android application built with Kotlin, Room Database, and MVVM architecture. Privacy-first, offline, ad-free note-taking with 5,000+ Play Store downloads.',
    canonical: `${SITE_URL}/projects/ventnote`,
    ogImage: `${SITE_URL}/data/assets/projects/ventnote_banner.jpg`,
    ogType: 'article',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'VentNote',
        operatingSystem: 'Android',
        applicationCategory: 'ProductivityApplication',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '3.4', ratingCount: '92' },
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.digiventure.ventnote',
        author: { '@id': `${SITE_URL}/#person` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` },
          { '@type': 'ListItem', position: 3, name: 'VentNote', item: `${SITE_URL}/projects/ventnote` }
        ]
      }
    ]
  },
  {
    path: '/projects/ventfit',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'VentFit: Flutter Health & BMI Tracker — Syubban Fakhriya',
    description:
      'VentFit empowers personal health tracking with a sleek BMI Calculator and fitness metrics, built with Flutter, Dart, and cross-platform architecture.',
    canonical: `${SITE_URL}/projects/ventfit`,
    ogImage: `${SITE_URL}/data/assets/projects/ventfit_banner.jpg`,
    ogType: 'article',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'VentFit',
        operatingSystem: 'Android',
        applicationCategory: 'HealthAndFitnessApplication',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.digiventure.ventfit',
        author: { '@id': `${SITE_URL}/#person` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` },
          { '@type': 'ListItem', position: 3, name: 'VentFit', item: `${SITE_URL}/projects/ventfit` }
        ]
      }
    ]
  },
  {
    path: '/projects/investcount',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'InvestCount: Deposit & Investment Calculator — Syubban Fakhriya',
    description:
      'InvestCount is a smart financial investment calculator helping users evaluate fixed deposit yields, tax liabilities, and compounding returns.',
    canonical: `${SITE_URL}/projects/investcount`,
    ogImage: `${SITE_URL}/data/assets/projects/investcount_banner.png`,
    ogType: 'article',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'InvestCount',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        url: 'https://investcount.mattrmost.com/',
        author: { '@id': `${SITE_URL}/#person` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` },
          { '@type': 'ListItem', position: 3, name: 'InvestCount', item: `${SITE_URL}/projects/investcount` }
        ]
      }
    ]
  },
  {
    path: '/projects/spring-boot-exploration',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'Spring Boot Exploration: Software Engineering Standards — Syubban Fakhriya',
    description:
      'A dedicated repository exploring enterprise standards, clean architecture, transactions, and microservice performance in Spring Boot and Java.',
    canonical: `${SITE_URL}/projects/spring-boot-exploration`,
    ogImage: `${SITE_URL}/data/assets/projects/springboot_exploration.jpg`,
    ogType: 'article',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareSourceCode',
        name: 'Spring Boot Exploration',
        codeRepository: 'https://github.com/HellBus1/spring-playground',
        programmingLanguage: 'Java',
        author: { '@id': `${SITE_URL}/#person` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` },
          { '@type': 'ListItem', position: 3, name: 'Spring Boot Exploration', item: `${SITE_URL}/projects/spring-boot-exploration` }
        ]
      }
    ]
  },
  {
    path: '/projects/react-tailwind-starter',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'React Tailwind Starter: Vite Boilerplate — Syubban Fakhriya',
    description:
      'Production-ready React 18 starter template configured with Vite, TypeScript, Tailwind CSS, and DaisyUI.',
    canonical: `${SITE_URL}/projects/react-tailwind-starter`,
    ogImage: `${SITE_URL}/data/assets/projects/react_template_banner.png`,
    ogType: 'article',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareSourceCode',
        name: 'React Tailwind Starter',
        codeRepository: 'https://github.com/HellBus1/ts-react-tailwind-starter',
        programmingLanguage: 'TypeScript',
        author: { '@id': `${SITE_URL}/#person` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` },
          { '@type': 'ListItem', position: 3, name: 'React Tailwind Starter', item: `${SITE_URL}/projects/react-tailwind-starter` }
        ]
      }
    ]
  },
  {
    path: '/articles',
    priority: '0.9',
    changefreq: 'weekly',
    title: 'Technical Articles & Publications — Syubban Fakhriya',
    description:
      'Deep dives into software engineering, database transactions, JVM garbage collection, generative AI engineering workflows, and mobile frameworks.',
    canonical: `${SITE_URL}/articles`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Technical Articles & Publications',
        url: `${SITE_URL}/articles`,
        description: 'Technical writing, guides, and engineering reflections by Syubban Fakhriya.',
        author: { '@id': `${SITE_URL}/#person` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Articles', item: `${SITE_URL}/articles` }
        ]
      }
    ]
  },
  {
    path: '/about',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'About Syubban Fakhriya — Full-Stack Engineer & Background',
    description:
      'Learn about Syubban Fakhriya, a Software Engineer based in Indonesia with 2+ years of experience building resilient systems with Java, Spring Boot, React, and Kotlin.',
    canonical: `${SITE_URL}/about`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'profile',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: { '@id': `${SITE_URL}/#person` },
        url: `${SITE_URL}/about`
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` }
        ]
      }
    ]
  },
  {
    path: '/ventnote-privacy-policy',
    priority: '0.4',
    changefreq: 'yearly',
    title: 'VentNote Privacy Policy — Syubban Fakhriya',
    description: 'Privacy Policy for the VentNote Android application.',
    canonical: `${SITE_URL}/ventnote-privacy-policy`,
    ogType: 'website'
  },
  {
    path: '/ventnote-oauth-privacy-policy',
    priority: '0.4',
    changefreq: 'yearly',
    title: 'VentNote Google Drive OAuth Privacy Policy — Syubban Fakhriya',
    description: 'Privacy policy and disclosure regarding Google Drive OAuth integration for VentNote backup synchronization.',
    canonical: `${SITE_URL}/ventnote-oauth-privacy-policy`,
    ogType: 'website'
  },
  {
    path: '/ventfit-privacy-policy',
    priority: '0.4',
    changefreq: 'yearly',
    title: 'VentFit Privacy Policy — Syubban Fakhriya',
    description: 'Privacy Policy for the VentFit Flutter application.',
    canonical: `${SITE_URL}/ventfit-privacy-policy`,
    ogType: 'website'
  }
]

async function prerender() {
  console.log('🚀 Starting Zero-Dependency Vite SSG Pre-rendering Pipeline...')

  const templatePath = path.resolve(distDir, 'index.html')
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client build template not found at ${templatePath}. Run "vite build" first.`)
  }
  const rawTemplate = fs.readFileSync(templatePath, 'utf-8')

  const serverEntryPath = path.resolve(distSsrDir, 'entry-server.js')
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`SSR server bundle not found at ${serverEntryPath}. Run "vite build --ssr" first.`)
  }

  const { render } = await import(serverEntryPath)

  for (const route of routes) {
    console.log(`  ➔ Pre-rendering route: ${route.path}`)
    const { html: appHtml } = render(route.path)

    let pageHtml = rawTemplate

    // 1. Inject rendered component tree into root container
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    )

    // 2. Replace <title>
    pageHtml = pageHtml.replace(
      /<title>[\s\S]*?<\/title>/i,
      `<title>${route.title}</title>`
    )

    // 3. Replace or inject meta description
    if (pageHtml.includes('name="description"')) {
      pageHtml = pageHtml.replace(
        /<meta\s+name="description"[\s\S]*?>/i,
        `<meta name="description" content="${route.description}" />`
      )
    }

    // 4. Replace canonical URL tag
    pageHtml = pageHtml.replace(
      /<link\s+rel="canonical"[\s\S]*?>/i,
      `<link rel="canonical" href="${route.canonical}" />`
    )

    // 5. Replace Open Graph tags
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:title"[\s\S]*?>/i,
      `<meta property="og:title" content="${route.title}" />`
    )
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:description"[\s\S]*?>/i,
      `<meta property="og:description" content="${route.description}" />`
    )
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:url"[\s\S]*?>/i,
      `<meta property="og:url" content="${route.canonical}" />`
    )
    if (route.ogImage) {
      pageHtml = pageHtml.replace(
        /<meta\s+property="og:image"[\s\S]*?>/i,
        `<meta property="og:image" content="${route.ogImage}" />`
      )
    }
    if (route.ogType) {
      pageHtml = pageHtml.replace(
        /<meta\s+property="og:type"[\s\S]*?>/i,
        `<meta property="og:type" content="${route.ogType}" />`
      )
    }

    // 6. Replace Twitter Card tags
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:title"[\s\S]*?>/i,
      `<meta name="twitter:title" content="${route.title}" />`
    )
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:description"[\s\S]*?>/i,
      `<meta name="twitter:description" content="${route.description}" />`
    )
    if (route.ogImage) {
      pageHtml = pageHtml.replace(
        /<meta\s+name="twitter:image"[\s\S]*?>/i,
        `<meta name="twitter:image" content="${route.ogImage}" />`
      )
    }

    // 7. Inject Route-Specific JSON-LD Schemas if present
    if (route.schema && route.schema.length > 0) {
      const schemaJson = JSON.stringify(route.schema.length === 1 ? route.schema[0] : route.schema)
      const schemaTag = `\n  <script type="application/ld+json" id="route-jsonld">${schemaJson}</script>\n</head>`
      pageHtml = pageHtml.replace('</head>', schemaTag)
    }

    // 8. Write static HTML file into dist
    if (route.path === '/') {
      fs.writeFileSync(path.resolve(distDir, 'index.html'), pageHtml, 'utf-8')
    } else {
      const routeDir = path.resolve(distDir, route.path.replace(/^\//, ''))
      fs.mkdirSync(routeDir, { recursive: true })
      fs.writeFileSync(path.resolve(routeDir, 'index.html'), pageHtml, 'utf-8')
    }
  }

  // Generate dynamic sitemap.xml
  console.log('  ➔ Generating canonical sitemap.xml...')
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`
  for (const route of routes) {
    sitemapContent += `  <url>\n    <loc>${route.canonical}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>\n`
  }
  sitemapContent += `</urlset>\n`
  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapContent, 'utf-8')
  fs.writeFileSync(path.resolve(publicDir, 'sitemap.xml'), sitemapContent, 'utf-8')

  // Generate robots.txt
  console.log('  ➔ Generating AI-friendly robots.txt...')
  const robotsContent = `# Search Engine Bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# AI Crawlers (AEO / GEO)
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

# Default for all other crawlers
User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml
`
  fs.writeFileSync(path.resolve(distDir, 'robots.txt'), robotsContent, 'utf-8')
  fs.writeFileSync(path.resolve(publicDir, 'robots.txt'), robotsContent, 'utf-8')

  // Generate _redirects for Cloudflare Pages
  console.log('  ➔ Generating Cloudflare Pages _redirects...')
  const redirectsContent = `# Legacy and Mismatched URL 301 Redirects
/transparency                     /about                           301
/projects/springboot-exploration  /projects/spring-boot-exploration 301
/projects/react-template          /projects/react-tailwind-starter  301

# SPA fallback
/*                                /index.html                      200
`
  fs.writeFileSync(path.resolve(distDir, '_redirects'), redirectsContent, 'utf-8')
  fs.writeFileSync(path.resolve(publicDir, '_redirects'), redirectsContent, 'utf-8')

  // Clean up temporary dist-ssr directory
  console.log('  ➔ Cleaning up temporary dist-ssr directory...')
  fs.rmSync(distSsrDir, { recursive: true, force: true })

  console.log('✅ SSG Pre-rendering Pipeline completed successfully!\n')
}

prerender().catch((err) => {
  console.error('❌ Pre-rendering failed:', err)
  process.exit(1)
})
