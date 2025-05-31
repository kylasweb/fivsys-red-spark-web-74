// Analytics service for tracking user interactions and page views
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface PageViewEvent {
  page_title: string;
  page_location: string;
  page_path: string;
}

export interface PerformanceMetrics {
  page_load_time: number;
  dom_content_loaded: number;
  first_contentful_paint: number;
  largest_contentful_paint?: number;
}

class AnalyticsService {
  private isInitialized = false;
  private gaTrackingId: string | null = null;
  private gaMeasurementId: string | null = null;
  private isAnalyticsEnabled: boolean = false;
  private isErrorReportingEnabled: boolean = false;
  private isPerformanceMonitoringEnabled: boolean = false;

  constructor() {
    this.gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID || null;
    this.gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || null;
    this.isAnalyticsEnabled = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';
    this.isErrorReportingEnabled = import.meta.env.VITE_ENABLE_ERROR_REPORTING === 'true';
    this.isPerformanceMonitoringEnabled = import.meta.env.VITE_ENABLE_PERFORMANCE_MONITORING === 'true';
    this.initialize();
  }

  private initialize() {
    if (!this.isAnalyticsEnabled || (!this.gaTrackingId && !this.gaMeasurementId)) {
      console.log('Analytics disabled or no tracking ID provided');
      return;
    }

    if (typeof window !== 'undefined') {
      const trackingId = this.gaMeasurementId || this.gaTrackingId;
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: unknown[]) {
          window.dataLayer.push(args);
        }
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', this.gaTrackingId, {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });

        this.isInitialized = true;
        this.collectPerformanceMetrics();
        console.log('Analytics initialized with tracking ID:', this.gaTrackingId);
      };
    } else {
      console.log('Analytics not initialized - no tracking ID provided');
    }
  }

  // Track page views
  trackPageView(event: Partial<PageViewEvent> = {}) {
    if (!this.isReady()) return;

    const pageData = {
      page_title: event.page_title || document.title,
      page_location: event.page_location || window.location.href,
      page_path: event.page_path || window.location.pathname,
    };

    window.gtag('config', this.gaTrackingId, pageData);
    console.log('Page view tracked:', pageData);
  }

  // Track custom events
  trackEvent(event: AnalyticsEvent) {
    if (!this.isReady()) return;

    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });

    console.log('Event tracked:', event);
  }

  // Track button clicks
  trackButtonClick(buttonName: string, location: string = 'unknown') {
    this.trackEvent({
      action: 'click',
      category: 'button',
      label: `${buttonName} - ${location}`,
    });
  }

  // Track form submissions
  trackFormSubmission(formName: string, success: boolean = true) {
    this.trackEvent({
      action: 'submit',
      category: 'form',
      label: `${formName} - ${success ? 'success' : 'error'}`,
      value: success ? 1 : 0,
    });
  }

  // Track service page visits
  trackServiceView(serviceName: string) {
    this.trackEvent({
      action: 'view',
      category: 'service',
      label: serviceName,
    });
  }

  // Track contact interactions
  trackContactInteraction(type: 'phone' | 'email' | 'form', label?: string) {
    this.trackEvent({
      action: 'contact',
      category: 'interaction',
      label: `${type}${label ? ` - ${label}` : ''}`,
    });
  }

  // Enhanced error tracking with error reporting feature flag
  trackError(error: string, location: string = 'unknown', errorDetails?: unknown) {
    if (!this.isErrorReportingEnabled) return;

    this.trackEvent({
      action: 'error',
      category: 'exception',
      label: `${location}: ${error}`,
    });

    // Additional error reporting for debugging
    if (errorDetails && import.meta.env.MODE === 'development') {
      console.error('Error tracked:', { error, location, errorDetails });
    }
  }

  // Track scroll depth
  trackScrollDepth(depth: number) {
    this.trackEvent({
      action: 'scroll',
      category: 'engagement',
      label: `${depth}%`,
      value: depth,
    });
  }

  // Track performance metrics
  trackPerformance(metrics: PerformanceMetrics) {
    if (!this.isPerformanceMonitoringEnabled || !this.isReady()) return;

    this.trackEvent({
      action: 'performance',
      category: 'timing',
      label: 'page_load_time',
      value: metrics.page_load_time,
    });

    this.trackEvent({
      action: 'performance',
      category: 'timing',
      label: 'dom_content_loaded',
      value: metrics.dom_content_loaded,
    });

    this.trackEvent({
      action: 'performance',
      category: 'timing',
      label: 'first_contentful_paint',
      value: metrics.first_contentful_paint,
    });

    if (metrics.largest_contentful_paint) {
      this.trackEvent({
        action: 'performance',
        category: 'timing',
        label: 'largest_contentful_paint',
        value: metrics.largest_contentful_paint,
      });
    }

    console.log('Performance metrics tracked:', metrics);
  }

  // Track user engagement metrics
  trackEngagement(action: string, category: string = 'engagement', value?: number) {
    this.trackEvent({
      action,
      category,
      value,
    });
  }

  // Track conversion events
  trackConversion(conversionType: string, value?: number) {
    this.trackEvent({
      action: 'conversion',
      category: 'goal',
      label: conversionType,
      value,
    });
  }

  // Auto-collect performance metrics
  collectPerformanceMetrics() {
    if (!this.isPerformanceMonitoringEnabled) return;

    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const paint = performance.getEntriesByType('paint');
          
          const metrics: PerformanceMetrics = {
            page_load_time: navigation.loadEventEnd - navigation.loadEventStart,
            dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            first_contentful_paint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          };

          // Try to get LCP
          if ('PerformanceObserver' in window) {
            try {
              const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                metrics.largest_contentful_paint = lastEntry.startTime;
                this.trackPerformance(metrics);
                observer.disconnect();
              });
              observer.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
              this.trackPerformance(metrics);
            }
          } else {
            this.trackPerformance(metrics);
          }
        }, 1000);
      });
    }
  }

  // Check if analytics is ready
  private isReady(): boolean {
    if (!this.isInitialized || !window.gtag) {
      console.log('Analytics not ready - tracking skipped');
      return false;
    }
    return true;
  }

  // Get current tracking status
  getStatus() {
    return {
      initialized: this.isInitialized,
      trackingId: this.gaTrackingId,
      ready: this.isReady(),
    };
  }
}

// Create a singleton instance
const analytics = new AnalyticsService();

// Export the instance
export default analytics;
