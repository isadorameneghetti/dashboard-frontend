import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Filter = ({ onPeriodChange }) => {
  const periods = [
    { id: 'today', label: 'Hoje', icon: 'calendar' },
    { id: 'week', label: 'Semana', icon: 'calendar' },
    { id: 'month', label: 'Mês', icon: 'calendar' },
    { id: 'year', label: 'Ano', icon: 'calendar' },
  ];

  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const handlePeriodChange = (periodId) => {
    setSelectedPeriod(periodId);
    onPeriodChange?.(periodId);
  };

  return (
    <div className="flex space-x-2 bg-gray-100 dark:bg-dark-700 rounded-lg p-1">
      {periods.map((period) => (
        <button
          key={period.id}
          onClick={() => handlePeriodChange(period.id)}
          className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
            selectedPeriod === period.id
              ? 'bg-white dark:bg-dark-600 text-gray-900 dark:text-white shadow-sm'
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