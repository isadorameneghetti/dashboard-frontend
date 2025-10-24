import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: 'chart-line', label: 'Dashboard', path: '/' },
    { icon: 'users', label: 'Desenvolvedores', path: '/developers' },
    { icon: 'code', label: 'Tecnologias', path: '/technologies' },
    { icon: 'briefcase', label: 'Empregos', path: '/jobs' },
    { icon: 'chart-bar', label: 'Relatórios', path: '/reports' },
    { icon: 'cog', label: 'Configurações', path: '/settings' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`sidebar-transition bg-white dark:bg-black-900 shadow-lg h-full flex flex-col ${isCollapsed ? 'w-20' : 'w-64'}`}>
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon="coffee" className="text-white text-sm" />
              </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Java</h1>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <FontAwesomeIcon 
              icon={isCollapsed ? 'bars' : 'times'} 
              className="text-gray-600 dark:text-gray-300" 
            />
          </button>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className={`flex items-center px-6 py-3 mx-3 rounded-lg cursor-pointer transition-colors ${
              isActive(item.path)
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 border-r-2 border-primary-500'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            <FontAwesomeIcon 
              icon={item.icon} 
              className={`text-lg ${isActive(item.path) ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'}`}
            />
            {!isCollapsed && (
              <span className="ml-3 font-medium">{item.label}</span>
            )}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className={`p-4 border-t border-gray-200 dark:border-gray-800 ${isCollapsed ? 'px-2' : 'px-4'}`}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon="user-circle" className="text-white" />
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Analista Java</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">pesquisa@java.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;