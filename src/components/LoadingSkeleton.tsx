import React from 'react';

interface SkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '', children }) => {
  return (
    <div className={`animate-pulse bg-gradient-to-r from-fivsys-darkGray/40 via-fivsys-silver/20 to-fivsys-darkGray/40 rounded ${className}`}>
      {children}
    </div>
  );
};

// Page Loading Skeleton
export const PageSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Skeleton */}
      <div className="h-20 bg-gradient-to-r from-fivsys-darkGray/20 to-transparent border-b border-fivsys-red/20">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <div className="hidden md:flex space-x-8">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-20" />
            ))}
          </div>
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
          <Skeleton className="h-6 w-2/3 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto mb-8" />
          <Skeleton className="h-12 w-48 mx-auto" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-fivsys-darkGray/20 to-transparent border border-fivsys-red/20 rounded-lg">
                <Skeleton className="h-12 w-12 mb-4" />
                <Skeleton className="h-6 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Card Loading Skeleton
export const CardSkeleton: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-fivsys-darkGray/20 to-transparent border border-fivsys-red/20 rounded-lg">
      <Skeleton className="h-12 w-12 mb-4" />
      <Skeleton className="h-6 w-3/4 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-2" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
};

// Service Page Skeleton
export const ServicePageSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="h-20 bg-gradient-to-r from-fivsys-darkGray/20 to-transparent border-b border-fivsys-red/20">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      {/* Hero */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Skeleton className="h-16 w-2/3 mx-auto mb-6" />
          <Skeleton className="h-6 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>
      </div>

      {/* Content Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="space-y-6">
              <Skeleton className="h-64 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Form Loading Skeleton
export const FormSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
      <div>
        <Skeleton className="h-4 w-16 mb-2" />
        <Skeleton className="h-32 w-full" />
      </div>
      <Skeleton className="h-12 w-full" />
    </div>
  );
};

// Button Loading Skeleton
export const ButtonSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return <Skeleton className={`h-10 w-24 ${className}`} />;
};

// Text Loading Skeleton
export const TextSkeleton: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className = '' 
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {[...Array(lines)].map((_, i) => (
        <Skeleton 
          key={i} 
          className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
        />
      ))}
    </div>
  );
};

export default Skeleton;
