import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  placeholder?: string;
  lazy?: boolean;
  webp?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  quality = 85,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRpdiBjbGFzcz0iYW5pbWF0ZS1wdWxzZSBiZy1ncmF5LTMwMCByb3VuZGVkIG1kOnJvdW5kZWQtbmVcIj48L2Rpdj4KPC9zdmc+',
  lazy = true,
  webp = true,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, isInView]);

  // Generate optimized image sources
  const generateImageSrc = (originalSrc: string, format?: string) => {
    if (!originalSrc || originalSrc.startsWith('data:')) return originalSrc;
    
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    if (quality) params.set('q', quality.toString());
    if (format) params.set('f', format);
    
    const queryString = params.toString();
    return queryString ? `${originalSrc}?${queryString}` : originalSrc;
  };

  // Handle image loading
  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    
    const handleLoad = () => {
      setImageSrc(generateImageSrc(src));
      setIsLoaded(true);
      setHasError(false);
      onLoad?.();
    };

    const handleError = () => {
      setHasError(true);
      setImageSrc(src); // Fallback to original
      onError?.();
    };

    img.onload = handleLoad;
    img.onerror = handleError;

    // Try WebP first if supported and enabled
    if (webp && supportsWebP()) {
      img.src = generateImageSrc(src, 'webp');
    } else {
      img.src = generateImageSrc(src);
    }

  }, [isInView, src, width, height, quality, webp, onLoad, onError]);

  // Check WebP support
  const supportsWebP = () => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-fivsys-darkGray/20 via-fivsys-silver/10 to-fivsys-darkGray/20 animate-pulse rounded" />
      )}
      
      {/* Actual image */}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        style={{
          aspectRatio: width && height ? `${width} / ${height}` : undefined
        }}
      />
      
      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-fivsys-darkGray/20 text-fivsys-silver">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 opacity-50">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
            </div>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Progressive Image Component for hero sections
export const ProgressiveImage: React.FC<OptimizedImageProps & {
  lowResSrc?: string;
  sizes?: string;
  srcSet?: string;
}> = ({
  src,
  lowResSrc,
  alt,
  className = '',
  sizes,
  srcSet,
  ...props
}) => {
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsHighResLoaded(true);
    img.src = src;
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {/* Low resolution placeholder */}
      {lowResSrc && !isHighResLoaded && (
        <OptimizedImage
          src={lowResSrc}
          alt={alt}
          className="absolute inset-0 filter blur-sm scale-110"
          lazy={false}
          {...props}
        />
      )}
      
      {/* High resolution image */}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ${
          isHighResLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        sizes={sizes}
        srcSet={srcSet}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default OptimizedImage;
