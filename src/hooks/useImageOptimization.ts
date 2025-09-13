import { useEffect, useState } from 'react';
import { supportsWebP } from '../utils/imageOptimization';

export const useImageOptimization = () => {
  const [webpSupported, setWebpSupported] = useState<boolean | null>(null);

  useEffect(() => {
    supportsWebP().then(setWebpSupported);
  }, []);

  return {
    webpSupported,
    shouldUseWebP: webpSupported === true,
  };
};