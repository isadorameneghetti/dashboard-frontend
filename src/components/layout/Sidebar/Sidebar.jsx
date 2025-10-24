import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: 'chart-line', label: 'Dashboard', active: true },
    { icon: 'users', label: 'Usuários' },
    { icon: 'shopping-cart', label: 'Vendas' },
    { icon: 'chart-bar', label: 'Relatórios' },
    { icon: 'envelope', label: 'Mensagens' },
    { icon: 'cog', label: 'Configurações' },
  ];

  return (
    <div className={`sidebar-transition bg-white dark:bg-dark-800 shadow-lg h-full flex flex-col ${isCollapsed ? 'w-20' : 'w-64'}`}>
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-dark-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon="chart-line" className="text-white text-sm" />
              </div>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">DashboardPro</h1>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
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
            className={`flex items-center px-6 py-3 mx-3 rounded-lg cursor-pointer transition-colors ${
              item.active
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 border-r-2 border-primary-600'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-700'
            }`}
          >
            <FontAwesomeIcon 
              icon={item.icon} 
              className={`text-lg ${item.active ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'}`}
            />
            {!isCollapsed && (
              <span className="ml-3 font-medium">{item.label}</span>
            )}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className={`p-4 border-t border-gray-200 dark:border-dark-700 ${isCollapsed ? 'px-2' : 'px-4'}`}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon="user-circle" className="text-white" />
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">João Silva</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">admin@exemplo.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;