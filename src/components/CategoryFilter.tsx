import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category | null;
  onSelect: (category: Category | null) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
          ${!selectedCategory 
            ? 'bg-blue-500 text-white shadow-md shadow-blue-200' 
            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
      >
        All Categories
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
            ${selectedCategory === category
              ? 'bg-blue-500 text-white shadow-md shadow-blue-200'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}