import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dataSources, methodology } from '../../data/javaMarketData';

const Methodology = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <FontAwesomeIcon icon="clipboard-check" className="text-white text-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Metodologia e Fontes</h2>
            <p className="text-gray-600 dark:text-gray-400">Transparência sobre as fontes de dados</p>
          </div>
        </div>

        {/* Fontes Principais */}
        <div className="bg-white dark:bg-black-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">📚 Fontes de Dados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(dataSources).map(([key, source]) => (
              <div key={key} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{source.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Última atualização: {source.lastUpdate}
                </p>
                <a 
                  href={source.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 text-sm hover:underline flex items-center"
                >
                  <FontAwesomeIcon icon="external-link-alt" className="mr-2 text-xs" />
                  Acessar fonte oficial
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Metodologia */}
        <div className="bg-white dark:bg-black-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4"> Metodologia</h3>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
              {methodology}
            </div>
          </div>
        </div>

        {/* Notas Técnicas */}
        <div className="bg-white dark:bg-black-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">💡 Notas Técnicas</h3>
          <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <div className="flex items-start space-x-3">
              <FontAwesomeIcon icon="chart-line" className="text-primary-500 mt-1 flex-shrink-0" />
              <p>Os dados de crescimento são calculados Year-over-Year (YoY) baseados em múltiplas fontes</p>
            </div>
            <div className="flex items-start space-x-3">
              <FontAwesomeIcon icon="dollar-sign" className="text-primary-500 mt-1 flex-shrink-0" />
              <p>Valores salariais em USD, ajustados por paridade de poder de compra quando aplicável</p>
            </div>
            <div className="flex items-start space-x-3">
              <FontAwesomeIcon icon="users" className="text-primary-500 mt-1 flex-shrink-0" />
              <p>Estimativas de desenvolvedores baseadas em múltiplos surveys e dados de plataformas</p>
            </div>
            <div className="flex items-start space-x-3">
              <FontAwesomeIcon icon="sync-alt" className="text-primary-500 mt-1 flex-shrink-0" />
              <p>Dados atualizados trimestralmente conforme novas pesquisas são publicadas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;