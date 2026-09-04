export interface RouteSEO {
  path: string
  title: string
  description: string
  canonical: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
  keywords?: string[]
  schema?: Record<string, unknown>[]
  noindex?: boolean
}

export const SITE_URL = 'https://mattrmost.com'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/avatar.jpg`
export const SITE_AUTHOR = 'Syubban Fakhriya'

// Base Person Schema
export const personSchema = {
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

// Base WebSite Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Syubban Fakhriya Portfolio',
  url: SITE_URL,
  description:
    'Engineering portfolio, technical articles, and software showcases by Syubban Fakhriya.',
  author: {
    '@id': `${SITE_URL}/#person`
  },
  inLanguage: 'en-US'
}

export const routeSeoRegistry: Record<string, RouteSEO> = {
  '/': {
    path: '/',
    title: 'Syubban Fakhriya — Full-Stack Developer & Content Writer',
    description:
      'Personal portfolio and engineering showcase of Syubban Fakhriya. Specialized in Java, Spring Boot, React, TypeScript, Kotlin, and scalable software architecture.',
    canonical: `${SITE_URL}/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    keywords: [
      'Syubban Fakhriya',
      'Full-Stack Developer',
      'Software Engineer',
      'Java',
      'Spring Boot',
      'React',
      'Flutter',
      'Kotlin',
      'TypeScript',
      'Web Development',
      'Indonesia'
    ],
    schema: [personSchema, websiteSchema]
  },
  '/projects': {
    path: '/projects',
    title: 'Projects & Engineering Archive — Syubban Fakhriya',
    description:
      'Explore production-ready applications, open-source repositories, and native mobile utilities built with Java, Kotlin, Flutter, and React by Syubban Fakhriya.',
    canonical: `${SITE_URL}/projects`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    keywords: [
      'Software Projects',
      'Engineering Archive',
      'VentNote',
      'VentFit',
      'InvestCount',
      'Spring Boot'
    ],
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
  '/projects/ventnote': {
    path: '/projects/ventnote',
    title: 'VentNote: Privacy-Focused Offline Android Note App — Syubban Fakhriya',
    description:
      'VentNote is a native Android application built with Kotlin, Room Database, and MVVM architecture. Privacy-first, offline, ad-free note-taking with 5,000+ Play Store downloads.',
    canonical: `${SITE_URL}/projects/ventnote`,
    ogImage: `${SITE_URL}/data/assets/projects/ventnote_banner.jpg`,
    ogType: 'article',
    keywords: [
      'VentNote',
      'Android App',
      'Kotlin',
      'Room Database',
      'MVVM',
      'Note Taking App',
      'Google Play Store'
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'VentNote',
        operatingSystem: 'Android',
        applicationCategory: 'ProductivityApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '3.4',
          ratingCount: '92'
        },
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.digiventure.ventnote',
        author: { '@id': `${SITE_URL}/#person` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'VentNote',
            item: `${SITE_URL}/projects/ventnote`
          }
        ]
      }
    ]
  },
  '/projects/ventfit': {
    path: '/projects/ventfit',
    title: 'VentFit: Flutter Health & BMI Tracker — Syubban Fakhriya',
    description:
      'VentFit empowers personal health tracking with a sleek BMI Calculator and fitness metrics, built with Flutter, Dart, and cross-platform architecture.',
    canonical: `${SITE_URL}/projects/ventfit`,
    ogImage: `${SITE_URL}/data/assets/projects/ventfit_banner.jpg`,
    ogType: 'article',
    keywords: ['VentFit', 'Flutter', 'Dart', 'BMI Calculator', 'Health App', 'Mobile Development'],
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'VentFit',
            item: `${SITE_URL}/projects/ventfit`
          }
        ]
      }
    ]
  },
  '/projects/investcount': {
    path: '/projects/investcount',
    title: 'InvestCount: Deposit & Investment Calculator — Syubban Fakhriya',
    description:
      'InvestCount is a smart financial investment calculator helping users evaluate fixed deposit yields, tax liabilities, and compounding returns.',
    canonical: `${SITE_URL}/projects/investcount`,
    ogImage: `${SITE_URL}/data/assets/projects/investcount_banner.png`,
    ogType: 'article',
    keywords: [
      'InvestCount',
      'Investment Calculator',
      'Kalkulator Deposito',
      'React',
      'Financial Tool',
      'TypeScript'
    ],
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'InvestCount',
            item: `${SITE_URL}/projects/investcount`
          }
        ]
      }
    ]
  },
  '/projects/spring-boot-exploration': {
    path: '/projects/spring-boot-exploration',
    title: 'Spring Boot Exploration: Software Engineering Standards — Syubban Fakhriya',
    description:
      'A dedicated repository exploring enterprise standards, clean architecture, transactions, and microservice performance in Spring Boot and Java.',
    canonical: `${SITE_URL}/projects/spring-boot-exploration`,
    ogImage: `${SITE_URL}/data/assets/projects/springboot_exploration.jpg`,
    ogType: 'article',
    keywords: [
      'Spring Boot',
      'Java',
      'Enterprise Architecture',
      'Microservices',
      'Spring Security',
      'JPA'
    ],
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Spring Boot Exploration',
            item: `${SITE_URL}/projects/spring-boot-exploration`
          }
        ]
      }
    ]
  },
  '/projects/react-tailwind-starter': {
    path: '/projects/react-tailwind-starter',
    title: 'React Tailwind Starter: Vite Boilerplate — Syubban Fakhriya',
    description:
      'Production-ready React 18 starter template configured with Vite, TypeScript, Tailwind CSS, and DaisyUI.',
    canonical: `${SITE_URL}/projects/react-tailwind-starter`,
    ogImage: `${SITE_URL}/data/assets/projects/react_template_banner.png`,
    ogType: 'article',
    keywords: ['React Template', 'Vite Boilerplate', 'Tailwind CSS', 'TypeScript', 'DaisyUI'],
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
          {
            '@type': 'ListItem',
            position: 3,
            name: 'React Tailwind Starter',
            item: `${SITE_URL}/projects/react-tailwind-starter`
          }
        ]
      }
    ]
  },
  '/articles': {
    path: '/articles',
    title: 'Technical Articles & Publications — Syubban Fakhriya',
    description:
      'Deep dives into software engineering, database transactions, JVM garbage collection, generative AI engineering workflows, and mobile frameworks.',
    canonical: `${SITE_URL}/articles`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    keywords: [
      'Technical Articles',
      'Spring Boot Tutorials',
      'Garbage Collector',
      'Database Transactions',
      'AI Workflows'
    ],
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
  '/about': {
    path: '/about',
    title: 'About Syubban Fakhriya — Full-Stack Engineer & Background',
    description:
      'Learn about Syubban Fakhriya, a Software Engineer based in Indonesia with 2+ years of experience building resilient systems with Java, Spring Boot, React, and Kotlin.',
    canonical: `${SITE_URL}/about`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'profile',
    keywords: [
      'About Syubban Fakhriya',
      'Software Engineer Resume',
      'Engineering Philosophy',
      'PT SMBC Indonesia'
    ],
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
  '/ventnote-privacy-policy': {
    path: '/ventnote-privacy-policy',
    title: 'VentNote Privacy Policy — Syubban Fakhriya',
    description: 'Privacy Policy for the VentNote Android application.',
    canonical: `${SITE_URL}/ventnote-privacy-policy`,
    ogType: 'website'
  },
  '/ventnote-oauth-privacy-policy': {
    path: '/ventnote-oauth-privacy-policy',
    title: 'VentNote Google Drive OAuth Privacy Policy — Syubban Fakhriya',
    description:
      'Privacy policy and disclosure regarding Google Drive OAuth integration for VentNote backup synchronization.',
    canonical: `${SITE_URL}/ventnote-oauth-privacy-policy`,
    ogType: 'website'
  },
  '/ventfit-privacy-policy': {
    path: '/ventfit-privacy-policy',
    title: 'VentFit Privacy Policy — Syubban Fakhriya',
    description: 'Privacy Policy for the VentFit Flutter application.',
    canonical: `${SITE_URL}/ventfit-privacy-policy`,
    ogType: 'website'
  }
}

export function getRouteSEO(path: string): RouteSEO {
  // Exact match
  if (routeSeoRegistry[path]) {
    return routeSeoRegistry[path]
  }

  // Trailing slash normalization
  const normalizedPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path
  if (routeSeoRegistry[normalizedPath]) {
    return routeSeoRegistry[normalizedPath]
  }

  // Fallback default
  return {
    path,
    title: 'Syubban Fakhriya — Full-Stack Developer & Content Writer',
    description:
      'Personal portfolio and engineering showcase of Syubban Fakhriya. Specialized in Java, Spring Boot, React, TypeScript, Kotlin, and scalable software architecture.',
    canonical: `${SITE_URL}${path}`,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    schema: [personSchema, websiteSchema]
  }
}
