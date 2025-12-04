
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-8 md:py-12 bg-gray-900/50 backdrop-blur-sm border-b border-cyan-500/20">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
        Línea de Tiempo Tecnológica
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
        Un viaje a través de los hitos que definieron nuestra era digital.
      </p>
    </header>
  );
};

export default Header;
