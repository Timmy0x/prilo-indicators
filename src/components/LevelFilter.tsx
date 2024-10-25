import React from 'react';
import { Level } from '../types';

interface LevelFilterProps {
  selectedLevel: Level | null;
  onSelect: (level: Level | null) => void;
}

const levels: Level[] = ['Basic', 'Intermediate', 'Advanced'];

export function LevelFilter({ selectedLevel, onSelect }: LevelFilterProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
          ${!selectedLevel 
            ? 'bg-purple-500 text-white shadow-md shadow-purple-200' 
            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
      >
        All Levels
      </button>
      {levels.map((level) => (
        <button
          key={level}
          onClick={() => onSelect(level)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
            ${selectedLevel === level
              ? 'bg-purple-500 text-white shadow-md shadow-purple-200'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
        >
          {level}
        </button>
      ))}
    </div>
  );
}