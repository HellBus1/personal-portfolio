import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getRouteSEO, RouteSEO, SITE_URL } from '@/data/seoData'

function updateMetaTag(attribute: 'name' | 'property', key: string, content: string) {
  if (typeof document === 'undefined') return
  let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function updateLinkTag(rel: string, href: string) {
  if (typeof document === 'undefined') return
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

function updateJsonLd(schemas: Record<string, unknown>[] | undefined) {
  if (typeof document === 'undefined') return
  const existingScript = document.getElementById('dynamic-jsonld')
  if (existingScript) {
    existingScript.remove()
  }

  if (schemas && schemas.length > 0) {
    const script = document.createElement('script')
    script.id = 'dynamic-jsonld'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)
    document.head.appendChild(script)
  }
}

export function useSEO(customSEO?: Partial<RouteSEO>) {
  const location = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    const baseSEO = getRouteSEO(location.pathname)
    const seo: RouteSEO = {
      ...baseSEO,
      ...customSEO,
      canonical: customSEO?.canonical || `${SITE_URL}${location.pathname}`
    }

    // Title
    document.title = seo.title

    // Standard meta tags
    updateMetaTag('name', 'description', seo.description)
    if (seo.keywords && seo.keywords.length > 0) {
      updateMetaTag('name', 'keywords', seo.keywords.join(', '))
    }
    updateMetaTag('name', 'author', 'Syubban Fakhriya')

    // Canonical link
    updateLinkTag('canonical', seo.canonical)

    // OpenGraph
    updateMetaTag('property', 'og:title', seo.title)
    updateMetaTag('property', 'og:description', seo.description)
    updateMetaTag('property', 'og:url', seo.canonical)
    updateMetaTag('property', 'og:type', seo.ogType || 'website')
    if (seo.ogImage) {
      updateMetaTag('property', 'og:image', seo.ogImage)
    }

    // Twitter
    updateMetaTag('name', 'twitter:card', 'summary_large_image')
    updateMetaTag('name', 'twitter:title', seo.title)
    updateMetaTag('name', 'twitter:description', seo.description)
    if (seo.ogImage) {
      updateMetaTag('name', 'twitter:image', seo.ogImage)
    }

    // Robots
    if (seo.noindex) {
      updateMetaTag('name', 'robots', 'noindex, nofollow')
    } else {
      updateMetaTag('name', 'robots', 'index, follow')
    }

    // Structured data
    updateJsonLd(seo.schema)
  }, [location.pathname, customSEO])
}
