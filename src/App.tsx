import React, { useState, useMemo } from 'react';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import IndicatorCard from './components/IndicatorCard';
import DetailView from './components/DetailView';
import EmptyState from './components/EmptyState';
import { performanceIndicators, categories } from './data';
import { Category, Level, PerformanceIndicator } from './types';
import { LevelFilter } from './components/LevelFilter';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [selectedIndicator, setSelectedIndicator] = useState<PerformanceIndicator | null>(null);

  const filteredIndicators = useMemo(() => {
    return performanceIndicators.filter((indicator) => {
      const matchesSearch = 
        indicator.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        indicator.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        indicator.id.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || indicator.category === selectedCategory;
      const matchesLevel = !selectedLevel || indicator.level === selectedLevel;
      
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchQuery, selectedCategory, selectedLevel]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <main className={`transition-all duration-300 ${selectedIndicator ? 'mr-[32rem]' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Search and Filters */}
          <div className="space-y-4 mb-6">
            <SearchBar 
              value={searchQuery} 
              onChange={setSearchQuery}
              resultCount={filteredIndicators.length}
            />
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              />
              <LevelFilter
                selectedLevel={selectedLevel}
                onSelect={setSelectedLevel}
              />
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredIndicators.map((indicator, index) => (
              <div
                key={indicator.id}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <IndicatorCard 
                  indicator={indicator} 
                  onClick={() => setSelectedIndicator(indicator)}
                />
              </div>
            ))}
            {filteredIndicators.length === 0 && <EmptyState />}
          </div>
        </div>
      </main>

      {/* Detail View */}
      {selectedIndicator && (
        <DetailView
          indicator={selectedIndicator}
          onClose={() => setSelectedIndicator(null)}
        />
      )}
    </div>
  );
}

export default App;