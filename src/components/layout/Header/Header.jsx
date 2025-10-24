import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-white dark:bg-black-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Java Market Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400">Crescimento e tendências do ecossistema Java</p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title={darkMode ? 'Modo Claro' : 'Modo Escuro'}
          >
            <FontAwesomeIcon 
              icon={darkMode ? 'sun' : 'moon'} 
              className="text-gray-600 dark:text-gray-300" 
            />
          </button>

          {/* Notifications */}
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
            <FontAwesomeIcon icon="bell" className="text-gray-600 dark:text-gray-300" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full border-2 border-white dark:border-black-900"></span>
          </button>

          {/* Last Update */}
          <div className="hidden md:block text-sm text-gray-500 dark:text-gray-400">
            Atualizado: {new Date().toLocaleDateString('pt-BR')}
          </div>
          
          {/* User Avatar */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
              <FontAwesomeIcon icon="user-circle" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Tech Analyst</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Java Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;