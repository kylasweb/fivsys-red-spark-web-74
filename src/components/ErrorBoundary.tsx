import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to analytics if available
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false,
      });
    }
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  public render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
          <Card className="bg-gradient-to-br from-fivsys-darkGray via-black to-fivsys-darkGray border-2 border-fivsys-red/40 p-8 max-w-2xl w-full text-center relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-fivsys-red/10 via-transparent to-fivsys-red/10 animate-pulse"></div>
            
            <div className="relative z-10">
              {/* Error Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-fivsys-red/20 to-fivsys-burgundy/20 rounded-full border border-fivsys-red/30">
                  <AlertTriangle className="w-16 h-16 text-fivsys-red animate-pulse" />
                </div>
              </div>

              {/* Error Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-fivsys-red to-white bg-clip-text text-transparent">
                Oops! Something went wrong
              </h1>

              {/* Error Description */}
              <p className="text-fivsys-silver text-lg mb-8 leading-relaxed">
                We encountered an unexpected error. Our AI systems are working to resolve this issue.
                Please try refreshing the page or return to the homepage.
              </p>

              {/* Error Details (Development mode only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left mb-8 p-4 bg-black/50 rounded-lg border border-fivsys-red/20">
                  <summary className="cursor-pointer text-fivsys-red font-semibold mb-2 flex items-center">
                    <Bug className="w-4 h-4 mr-2" />
                    Error Details (Development)
                  </summary>
                  <pre className="text-xs text-fivsys-silver overflow-auto max-h-40">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={this.handleRetry}
                  className="bg-gradient-to-r from-fivsys-red to-fivsys-burgundy hover:from-fivsys-burgundy hover:to-fivsys-red transition-all duration-300"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                
                <Button
                  onClick={this.handleReload}
                  variant="outline"
                  className="border-fivsys-red/40 text-fivsys-red hover:bg-fivsys-red/10"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reload Page
                </Button>
                
                <Button
                  onClick={this.handleGoHome}
                  variant="outline"
                  className="border-fivsys-silver/40 text-fivsys-silver hover:bg-fivsys-silver/10"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Button>
              </div>

              {/* Support Information */}
              <div className="mt-8 pt-6 border-t border-fivsys-red/20">
                <p className="text-sm text-fivsys-silver">
                  If this problem persists, please contact our support team at{' '}
                  <a 
                    href="mailto:info@fivsys.com" 
                    className="text-fivsys-red hover:text-white transition-colors"
                  >
                    info@fivsys.com
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
