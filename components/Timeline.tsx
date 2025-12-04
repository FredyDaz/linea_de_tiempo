
import React from 'react';
import TimelineItem from './TimelineItem';
import { TimelineEvent } from '../types';

interface TimelineProps {
  events: TimelineEvent[];
  onSelectEvent: (event: TimelineEvent) => void;
}

const Timeline: React.FC<TimelineProps> = ({ events, onSelectEvent }) => {
  return (
    <div className="relative">
      {/* Central line */}
      {events.length > 0 && (
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-1 bg-gradient-to-b from-cyan-500/50 via-teal-500/50 to-blue-500/50 rounded-full transform md:-translate-x-1/2"></div>
      )}
      
      <div className="space-y-12">
        {events.length > 0 ? (
          events.map((event: TimelineEvent, index: number) => (
            <TimelineItem 
              key={`${event.year}-${event.title}`} 
              event={event} 
              index={index}
              onSelectEvent={onSelectEvent} 
            />
          ))
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-400">No se encontraron eventos</h2>
            <p className="text-gray-500 mt-2">Prueba seleccionando otra categoría.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
