
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 mt-12 bg-gray-900/50 border-t border-cyan-500/20">
      <p className="text-gray-500">
        &copy; {new Date().getFullYear()} Línea de Tiempo Tecnológica. Creado con fines informativos.
      </p>
    </footer>
  );
};

export default Footer;
