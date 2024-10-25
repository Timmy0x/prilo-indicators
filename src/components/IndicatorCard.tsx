import React from 'react';
import { PerformanceIndicator } from '../types';
import { BookOpen, BarChart, Star } from 'lucide-react';
import { getLevelInfo } from '../utils';

interface IndicatorCardProps {
  indicator: PerformanceIndicator;
  onClick: () => void;
}

export default function IndicatorCard({ indicator, onClick }: IndicatorCardProps) {
  const levelInfo = getLevelInfo(indicator.level);

  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-sm text-gray-500 font-medium">{indicator.id}</span>
          <h3 className="text-lg font-semibold text-gray-900 mt-0.5 group-hover:text-blue-600 transition-colors">
            {indicator.title}
          </h3>
        </div>
        <div className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium border ${levelInfo.colors}`}>
          <span>{indicator.level}</span>
          <div className="flex gap-0.5 ml-1">
            {[...Array(levelInfo.stars)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-current" />
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 line-clamp-2 mb-3">{indicator.description}</p>
      
      <div className="flex items-center gap-3 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <BookOpen className="h-4 w-4" />
          <span>{indicator.category}</span>
        </div>
        <div className="flex items-center gap-1">
          <BarChart className="h-4 w-4" />
          <span>{indicator.subCategory}</span>
        </div>
      </div>
    </div>
  );
}