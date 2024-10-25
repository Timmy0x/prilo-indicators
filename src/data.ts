import { PerformanceIndicator } from './types';

export const performanceIndicators: PerformanceIndicator[] = [
  {
    id: 'MKT-001',
    title: 'Explain Marketing and its Importance',
    description: 'Understand the fundamental concepts of marketing and its role in business success, including the marketing mix and consumer behavior.',
    category: 'Marketing',
    subCategory: 'Marketing Concepts',
    level: 'Basic',
    examples: [
      'Define the marketing concept and its evolution',
      'Explain the importance of customer-centric marketing',
      'Describe the elements of the marketing mix (4Ps)'
    ]
  },
  {
    id: 'FIN-001',
    title: 'Explain the Nature of Financial Markets',
    description: 'Analyze how financial markets operate and their impact on business operations and economic growth.',
    category: 'Finance',
    subCategory: 'Financial Analysis',
    level: 'Intermediate',
    examples: [
      'Describe the role of primary and secondary markets',
      'Analyze market efficiency concepts',
      'Evaluate different types of financial instruments'
    ]
  },
  {
    id: 'ENT-001',
    title: 'Develop Business Plan',
    description: 'Create comprehensive business plans that outline business concepts, market analysis, and financial projections.',
    category: 'Entrepreneurship',
    subCategory: 'Business Planning',
    level: 'Advanced',
    examples: [
      'Conduct market research and analysis',
      'Create detailed financial projections',
      'Develop marketing and operations strategies'
    ]
  },
  {
    id: 'HOS-001',
    title: 'Customer Service Excellence',
    description: 'Master the principles of exceptional customer service in the hospitality industry.',
    category: 'Hospitality',
    subCategory: 'Customer Service',
    level: 'Basic',
    examples: [
      'Handle customer complaints effectively',
      'Demonstrate professional communication',
      'Create memorable guest experiences'
    ]
  },
  {
    id: 'MGT-001',
    title: 'Strategic Management Process',
    description: 'Understand and implement strategic management principles in business operations.',
    category: 'Business Management',
    subCategory: 'Strategy',
    level: 'Advanced',
    examples: [
      'Conduct SWOT analysis',
      'Develop strategic objectives',
      'Implement change management processes'
    ]
  }
];

export const categories: Category[] = [
  'Marketing',
  'Finance',
  'Hospitality',
  'Business Management',
  'Entrepreneurship'
];