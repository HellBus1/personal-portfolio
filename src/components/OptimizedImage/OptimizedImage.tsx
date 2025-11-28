import { ImgHTMLAttributes } from 'react'

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  priority?: boolean
}

/**
 * OptimizedImage component with lazy loading and better performance
 * @param src - Image source URL
 * @param alt - Alternative text for accessibility
 * @param priority - If true, loads image eagerly (for above-the-fold images)
 * @param className - Additional CSS classes
 */
const OptimizedImage = ({
  src,
  alt,
  priority = false,
  className,
  ...props
}: OptimizedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding='async'
      className={className}
      {...props}
    />
  )
}

export default OptimizedImage
