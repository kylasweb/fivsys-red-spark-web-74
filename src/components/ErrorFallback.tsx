import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
  title?: string;
  description?: string;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetError,
  title = "Something went wrong",
  description = "An error occurred while loading this section."
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-fivsys-darkGray/20 to-transparent border border-fivsys-red/20 rounded-lg">
      <div className="p-3 bg-gradient-to-br from-fivsys-red/20 to-fivsys-burgundy/20 rounded-full border border-fivsys-red/30 mb-4">
        <AlertTriangle className="w-8 h-8 text-fivsys-red" />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-fivsys-silver mb-4 max-w-md">{description}</p>
      
      {process.env.NODE_ENV === 'development' && (
        <details className="text-left mb-4 p-3 bg-black/50 rounded text-xs text-fivsys-silver max-w-md">
          <summary className="cursor-pointer text-fivsys-red font-semibold mb-1">
            Error Details
          </summary>
          <pre className="overflow-auto max-h-20">{error.message}</pre>
        </details>
      )}
      
      <Button
        onClick={resetError}
        variant="outline"
        className="border-fivsys-red/40 text-fivsys-red hover:bg-fivsys-red/10"
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Try Again
      </Button>
    </div>
  );
};

export default ErrorFallback;
