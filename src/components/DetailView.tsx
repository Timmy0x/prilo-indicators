import React from 'react';
import { X, BookOpen, BarChart, Star } from 'lucide-react';
import { PerformanceIndicator } from '../types';
import { getLevelInfo } from '../utils';

interface DetailViewProps {
  indicator: PerformanceIndicator;
  onClose: () => void;
}

export default function DetailView({ indicator, onClose }: DetailViewProps) {
  const levelInfo = getLevelInfo(indicator.level);

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[32rem] bg-white shadow-2xl border-l border-gray-200 z-50 animate-slide-in">
      <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">{indicator.id}</span>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      
      <div className="p-6 overflow-y-auto max-h-[calc(100vh-64px)]">
        <div className="flex items-start justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{indicator.title}</h2>
          <div className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-sm font-medium border ${levelInfo.colors} whitespace-nowrap`}>
            <span>{indicator.level}</span>
            <div className="flex gap-0.5 ml-1">
              {[...Array(levelInfo.stars)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{indicator.description}</p>
          </div>

          {indicator.examples && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Examples</h3>
              <ul className="space-y-2">
                {indicator.examples.map((example, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 text-gray-500">
              <BookOpen className="h-5 w-5" />
              <span>{indicator.category}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <BarChart className="h-5 w-5" />
              <span>{indicator.subCategory}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}