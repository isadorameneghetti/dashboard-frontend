import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Reports = () => {
  const reports = [
    {
      title: 'Relatório de Mercado Java 2024',
      description: 'Análise completa do ecossistema Java',
      date: '15 Jun 2024',
      downloads: 1250,
      type: 'Mercado'
    },
    {
      title: 'Pesquisa Salarial 2024',
      description: 'Salários por experiência e região',
      date: '10 Jun 2024',
      downloads: 890,
      type: 'Salários'
    },
    {
      title: 'Tendências de Contratação',
      description: 'Demanda por habilidades específicas',
      date: '05 Jun 2024',
      downloads: 642,
      type: 'Emprego'
    },
    {
      title: 'Tecnologias Emergentes',
      description: 'Novas ferramentas e frameworks',
      date: '01 Jun 2024',
      downloads: 521,
      type: 'Tecnologia'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <FontAwesomeIcon icon="chart-bar" className="text-white text-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Relatórios</h2>
            <p className="text-gray-600 dark:text-gray-400">Relatórios detalhados e análises do mercado</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Relatórios Disponíveis */}
          <div className="bg-white dark:bg-black-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Relatórios Recentes</h3>
            <div className="space-y-4">
              {reports.map((report, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{report.title}</h4>
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-xs rounded-full">
                      {report.type}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{report.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{report.date}</span>
                    <div className="flex items-center space-x-2">
                      <FontAwesomeIcon icon="download" />
                      <span>{report.downloads} downloads</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Métricas de Download */}
          <div className="bg-white dark:bg-black-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Estatísticas de Downloads</h3>
            <div className="space-y-6">
              {[
                { category: 'Relatórios de Mercado', downloads: 3250, growth: 15 },
                { category: 'Pesquisas Salariais', downloads: 2780, growth: 22 },
                { category: 'Guias Técnicos', downloads: 1890, growth: 8 },
                { category: 'Análises Setoriais', downloads: 1420, growth: 12 },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">{stat.category}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{stat.downloads.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-primary-500 h-2 rounded-full"
                      style={{ width: `${(stat.downloads / 5000) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>Crescimento: +{stat.growth}%</span>
                    <span>Total de downloads</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Próximos Relatórios */}
        <div className="bg-white dark:bg-black-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Próximos Relatórios</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Java em Cloud Native', date: 'Jul 2024', progress: 75 },
              { title: 'Segurança em Aplicações Java', date: 'Ago 2024', progress: 45 },
              { title: 'Migração para Java 21', date: 'Set 2024', progress: 20 },
            ].map((report, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{report.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Previsão: {report.date}</p>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-primary-500 h-2 rounded-full"
                    style={{ width: `${report.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>Progresso</span>
                  <span>{report.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;