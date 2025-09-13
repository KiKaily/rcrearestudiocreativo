import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { preloadCriticalImages } from './utils/imageOptimization'

// Preload critical images for better performance
preloadCriticalImages();

createRoot(document.getElementById("root")!).render(<App />);
