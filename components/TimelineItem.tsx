
import React from 'react';
import { TimelineEvent } from '../types';

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  onSelectEvent: (event: TimelineEvent) => void;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Computación': return 'bg-sky-500 text-sky-900';
    case 'Almacenamiento': return 'bg-amber-500 text-amber-900';
    case 'Redes': return 'bg-emerald-500 text-emerald-900';
    case 'Hardware': return 'bg-rose-500 text-rose-900';
    case 'Móvil': return 'bg-indigo-500 text-indigo-900';
    case 'Software': return 'bg-pink-500 text-pink-900';
    case 'VR/AR': return 'bg-purple-500 text-purple-900';
    case 'Videojuegos': return 'bg-green-500 text-green-900';
    case 'Periféricos': return 'bg-orange-500 text-orange-900';
    case 'Robótica': return 'bg-lime-500 text-lime-900';
    case 'IA': return 'bg-fuchsia-500 text-fuchsia-900';
    case 'Web': return 'bg-teal-500 text-teal-900';
    case 'Dispositivos Portátiles': return 'bg-violet-500 text-violet-900';
    case 'Audio': return 'bg-yellow-500 text-yellow-900';
    case 'Comunicaciones': return 'bg-blue-500 text-blue-900';
    case 'General': return 'bg-slate-500 text-slate-900';
    default: return 'bg-gray-500 text-gray-900';
  }
};


const TimelineItem: React.FC<TimelineItemProps> = ({ event, index, onSelectEvent }) => {
  const isEven = index % 2 === 0;

  const timelineDotClasses = `absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-800 border-4 border-teal-400 flex items-center justify-center left-0 ml-0 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 md:ml-0`;

  return (
    <div className="relative pl-12 md:pl-0">
      {/* Dot on the timeline */}
      <div className={timelineDotClasses}>
        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
      </div>
      
      {/* Content Card container */}
      <div className={`relative ${isEven ? 'md:text-right' : ''}`}>
        <div className="w-full md:w-1/2 inline-block">
          <div 
            className={`
              bg-gray-800/80 backdrop-blur-md rounded-xl shadow-lg shadow-cyan-500/10 overflow-hidden
              border border-gray-700
              transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20 hover:border-cyan-500/50
              cursor-pointer
            `}
            onClick={() => onSelectEvent(event)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') onSelectEvent(event); }}
          >
            <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <time className="font-roboto-mono text-3xl font-bold text-cyan-400">{event.year}</time>
              <h3 className="mt-2 text-2xl font-bold text-gray-100">{event.title}</h3>
              <span className={`inline-block mt-3 px-3 py-1 text-sm font-semibold rounded-full ${getCategoryColor(event.category)}`}>
                {event.category}
              </span>
              <p className="mt-3 text-gray-300 leading-relaxed text-left">{event.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
