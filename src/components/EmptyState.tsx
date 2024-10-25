import React from 'react';
import { SearchX } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
      <SearchX className="h-16 w-16 text-gray-400 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        No indicators found
      </h3>
      <p className="text-gray-500 max-w-md">
        Try adjusting your search terms or filters to find what you're looking for.
      </p>
    </div>
  );
}