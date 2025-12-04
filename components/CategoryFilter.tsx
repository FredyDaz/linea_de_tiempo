
import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  const allCategories = ['All', ...categories];

  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold text-cyan-400 mb-4 text-center md:text-left">Filtrar por Categoría</h2>
      <div className="flex flex-wrap justify-center md:justify-start gap-3">
        {allCategories.map((category) => {
          const isActive = category === selectedCategory;
          const buttonClasses = `
            px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-400
            ${isActive
              ? 'bg-cyan-500 border-cyan-500 text-gray-900 shadow-lg shadow-cyan-500/30'
              : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-cyan-500/50 hover:text-white'
            }
          `;
          return (
            <button
              key={category}
              className={buttonClasses}
              onClick={() => onSelectCategory(category)}
              aria-pressed={isActive}
            >
              {category === 'All' ? 'Todas' : category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
