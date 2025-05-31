import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { PageSkeleton } from "./components/LoadingSkeleton";
import analytics from "./services/analytics";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

// Lazy load service pages for better performance
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const AppDevelopment = lazy(() => import("./pages/services/AppDevelopment"));
const WebAppDevelopment = lazy(() => import("./pages/services/WebAppDevelopment"));
const DigitalMarketing = lazy(() => import("./pages/services/DigitalMarketing"));
const SocialMediaMarketing = lazy(() => import("./pages/services/SocialMediaMarketing"));
const SalesStrategy = lazy(() => import("./pages/services/SalesStrategy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        // Don't retry on 4xx errors
        if (error instanceof Error && error.message.includes('4')) {
          return false;
        }
        return failureCount < 3;
      },
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => {
  // Initialize analytics on app load
  analytics.trackPageView();

  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        // Track errors in analytics
        analytics.trackError(error.message, window.location.pathname);
        console.error('Application Error:', error, errorInfo);
      }}
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <BackToTop />
            <Suspense fallback={<PageSkeleton />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Service Routes with Error Boundaries */}
                <Route 
                  path="/services/web-development" 
                  element={
                    <ErrorBoundary>
                      <WebDevelopment />
                    </ErrorBoundary>
                  } 
                />
                <Route 
                  path="/services/app-development" 
                  element={
                    <ErrorBoundary>
                      <AppDevelopment />
                    </ErrorBoundary>
                  } 
                />
                <Route 
                  path="/services/web-app-development" 
                  element={
                    <ErrorBoundary>
                      <WebAppDevelopment />
                    </ErrorBoundary>
                  } 
                />
                <Route 
                  path="/services/digital-marketing" 
                  element={
                    <ErrorBoundary>
                      <DigitalMarketing />
                    </ErrorBoundary>
                  } 
                />
                <Route 
                  path="/services/social-media-marketing" 
                  element={
                    <ErrorBoundary>
                      <SocialMediaMarketing />
                    </ErrorBoundary>
                  } 
                />
                <Route 
                  path="/services/sales-strategy" 
                  element={
                    <ErrorBoundary>
                      <SalesStrategy />
                    </ErrorBoundary>
                  } 
                />
                
                {/* Legal Pages */}
                <Route 
                  path="/privacy-policy" 
                  element={
                    <ErrorBoundary>
                      <PrivacyPolicy />
                    </ErrorBoundary>
                  } 
                />
                <Route 
                  path="/terms-of-service" 
                  element={
                    <ErrorBoundary>
                      <TermsOfService />
                    </ErrorBoundary>
                  } 
                />
                
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
