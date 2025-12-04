
import React, { useEffect } from 'react';
import { TimelineEvent } from '../types';

interface DetailModalProps {
  event: TimelineEvent | null;
  onClose: () => void;
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

const DetailModal: React.FC<DetailModalProps> = ({ event, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!event) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-gray-800 rounded-2xl shadow-2xl shadow-cyan-500/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row transform transition-transform duration-300 scale-95 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <style>
          {`
            @keyframes fade-in-up {
              0% {
                opacity: 0;
                transform: translateY(20px) scale(0.95);
              }
              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
            .animate-fade-in-up {
              animation: fade-in-up 0.3s ease-out forwards;
            }
          `}
        </style>
        <div className="w-full md:w-1/2 flex-shrink-0">
            <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="w-full h-64 md:h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
            />
        </div>
        <div className="p-8 flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getCategoryColor(event.category)}`}>
                {event.category}
              </span>
              <h2 id="modal-title" className="mt-2 text-4xl font-bold text-gray-100">{event.title}</h2>
              <time className="font-roboto-mono text-2xl font-bold text-cyan-400">{event.year}</time>
            </div>
            <button 
                onClick={onClose} 
                className="text-gray-400 hover:text-white transition-colors text-2xl"
                aria-label="Cerrar"
            >
                &times;
            </button>
          </div>
          <p className="mt-6 text-gray-300 leading-relaxed flex-grow">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
