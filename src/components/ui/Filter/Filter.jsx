import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Filter = ({ onPeriodChange }) => {
  const periods = [
    { id: 'yearly', label: 'Anual', icon: 'calendar-alt' },
    { id: 'quarterly', label: 'Trimestral', icon: 'chart-bar' },
  ];

  const [selectedPeriod, setSelectedPeriod] = useState('yearly');

  const handlePeriodChange = (periodId) => {
    setSelectedPeriod(periodId);
    onPeriodChange?.(periodId);
  };

  return (
    <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      {periods.map((period) => (
        <button
          key={period.id}
          onClick={() => handlePeriodChange(period.id)}
          className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
            selectedPeriod === period.id
              ? 'bg-primary-500 text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <FontAwesomeIcon icon={period.icon} className="mr-2 text-xs" />
          {period.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;