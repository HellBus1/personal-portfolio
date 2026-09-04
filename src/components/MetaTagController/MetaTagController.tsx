import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSEO } from '@/hooks/useSEO'

const MetaTagController = () => {
  const location = useLocation()
  useSEO()

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return
    const params = new URLSearchParams(location.search)
    const hasRef = params.has('ref')

    const existingMeta = document.querySelector("meta[name='robots']")

    if (hasRef) {
      if (existingMeta) {
        existingMeta.setAttribute('content', 'noindex, follow')
      } else {
        const meta = document.createElement('meta')
        meta.name = 'robots'
        meta.content = 'noindex, follow'
        document.head.appendChild(meta)
      }
    }
  }, [location])

  return null
}

export default MetaTagController
