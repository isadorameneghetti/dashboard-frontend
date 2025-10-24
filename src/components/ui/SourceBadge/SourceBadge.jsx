import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SourceBadge = ({ source }) => {
  if (!source) return null;

  return (
    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon="database" className="text-gray-400 text-xs" />
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Fonte: {source.name}
        </span>
      </div>
      <a 
        href={source.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
      >
        Ver fonte
      </a>
    </div>
  );
};

export default SourceBadge;