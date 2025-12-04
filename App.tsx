
import React, { useState } from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import DetailModal from './components/DetailModal';
import CategoryFilter from './components/CategoryFilter';
import { timelineData } from './data/timelineData';
import { TimelineEvent } from './types';

const categories = [...new Set(timelineData.map(event => event.category))].sort();

const App: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const handleSelectEvent = (event: TimelineEvent) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredEvents = selectedCategory === 'All'
    ? timelineData
    : timelineData.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
        <Timeline events={filteredEvents} onSelectEvent={handleSelectEvent} />
      </main>
      <Footer />
      <DetailModal event={selectedEvent} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
