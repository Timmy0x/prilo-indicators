export type Level = 'Basic' | 'Intermediate' | 'Advanced';

export interface PerformanceIndicator {
  id: string;
  title: string;
  description: string;
  category: Category;
  subCategory: string;
  level: Level;
  examples?: string[];
}

export type Category = 
  | 'Marketing'
  | 'Finance'
  | 'Hospitality'
  | 'Business Management'
  | 'Entrepreneurship';