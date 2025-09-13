import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  sizes?: string;
  width?: number;
  height?: number;
}

export const OptimizedImage = ({
  src,
  webpSrc,
  alt,
  className = "",
  loading = "lazy",
  sizes,
  width,
  height,
}: OptimizedImageProps) => {
  const [hasWebpError, setHasWebpError] = useState(false);

  const handleWebpError = () => {
    setHasWebpError(true);
  };

  // If WebP is supported and available, and no error occurred, use WebP
  if (webpSrc && !hasWebpError) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
        <img
          src={src}
          alt={alt}
          className={className}
          loading={loading}
          decoding="async"
          width={width}
          height={height}
          onError={handleWebpError}
          fetchPriority={loading === "eager" ? "high" : "auto"}
        />
      </picture>
    );
  }

  // Fallback to original format
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
      fetchPriority={loading === "eager" ? "high" : "auto"}
    />
  );
};