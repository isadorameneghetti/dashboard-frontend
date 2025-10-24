import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SourceBadge from '../SourceBadge/SourceBadge';

const Card = ({ title, value, change, changeType, icon, description, source }) => {
  const isPositive = changeType === 'positive';
  
  return (
    <div className="bg-white dark:bg-black-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
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
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">vs último ano</span>
          </div>
          {description && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{description}</p>
          )}
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-900/10 rounded-lg flex items-center justify-center">
          <FontAwesomeIcon icon={icon} className="text-primary-600 dark:text-primary-400 text-xl" />
        </div>
      </div>
      
      {/* Badge de fonte */}
      <SourceBadge source={source} />
    </div>
  );
};

export default Card;