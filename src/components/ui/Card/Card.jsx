import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, value, change, changeType, icon, color = 'blue' }) => {
  const isPositive = changeType === 'positive';
  
  const colorClasses = {
    blue: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10 text-blue-600 dark:text-blue-400',
    green: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10 text-green-600 dark:text-green-400',
    purple: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10 text-purple-600 dark:text-purple-400',
    orange: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10 text-orange-600 dark:text-orange-400'
  };

  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-gray-200 dark:border-dark-700 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
          <div className={`flex items-center mt-2 ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            <FontAwesomeIcon 
              icon={isPositive ? 'arrow-up' : 'arrow-down'} 
              className="text-sm" 
            />
            <span className="text-sm font-medium ml-1">{change}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">vs último período</span>
          </div>
        </div>
        <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[color]} rounded-lg flex items-center justify-center`}>
          <FontAwesomeIcon icon={icon} className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Card;