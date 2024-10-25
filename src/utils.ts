export const getLevelInfo = (level: string) => {
  switch (level) {
    case 'Basic':
      return {
        colors: 'bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-200',
        stars: 1
      };
    case 'Intermediate':
      return {
        colors: 'bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-700 border-yellow-200',
        stars: 2
      };
    case 'Advanced':
      return {
        colors: 'bg-gradient-to-r from-red-50 to-red-100 text-red-700 border-red-200',
        stars: 3
      };
    default:
      return {
        colors: 'bg-gray-100 text-gray-800 border-gray-200',
        stars: 0
      };
  }
};