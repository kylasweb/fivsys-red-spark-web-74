// Global type extensions for the application
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    scrollTracked?: Record<string, boolean>;
  }
}

export {};
