import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Filter from '../../components/ui/Filter/Filter';
import Card from '../../components/ui/Card/Card';
import Chart from '../../components/ui/Chart/Chart';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // Dados mockados para as métricas
  const metricsData = {
    today: [
      { title: 'Total de Usuários', value: '12.5K', change: '+12%', changeType: 'positive', icon: 'users', color: 'blue' },
      { title: 'Vendas', value: 'R$ 42.5K', change: '+8%', changeType: 'positive', icon: 'dollar-sign', color: 'green' },
      { title: 'Taxa de Conversão', value: '3.2%', change: '+0.4%', changeType: 'positive', icon: 'percent', color: 'purple' },
      { title: 'Sessões Ativas', value: '1.2K', change: '-2%', changeType: 'negative', icon: 'eye', color: 'orange' },
    ],
    month: [
      { title: 'Total de Usuários', value: '152.3K', change: '+15%', changeType: 'positive', icon: 'users', color: 'blue' },
      { title: 'Vendas', value: 'R$ 892.1K', change: '+22%', changeType: 'positive', icon: 'dollar-sign', color: 'green' },
      { title: 'Taxa de Conversão', value: '4.1%', change: '+1.2%', changeType: 'positive', icon: 'percent', color: 'purple' },
      { title: 'Sessões Ativas', value: '45.8K', change: '+8%', changeType: 'positive', icon: 'eye', color: 'orange' },
    ]
  };

  // Dados mockados para gráficos
  const chartData = {
    month: [
      { name: 'Jan', value: 4000 },
      { name: 'Fev', value: 3000 },
      { name: 'Mar', value: 2000 },
      { name: 'Abr', value: 2780 },
      { name: 'Mai', value: 1890 },
      { name: 'Jun', value: 2390 },
      { name: 'Jul', value: 3490 },
    ],
    year: [
      { name: '2018', value: 24000 },
      { name: '2019', value: 13980 },
      { name: '2020', value: 9800 },
      { name: '2021', value: 39080 },
      { name: '2022', value: 48000 },
      { name: '2023', value: 38900 },
      { name: '2024', value: 42900 },
    ]
  };

  const currentMetrics = metricsData[selectedPeriod] || metricsData.month;
  const currentChartData = chartData[selectedPeriod] || chartData.month;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <div className="p-6">
        {/* Header e Filtros */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 space-y-4 lg:space-y-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Visão Geral</h2>
            <p className="text-gray-600 dark:text-gray-400">Monitoramento em tempo real das principais métricas</p>
          </div>
          <Filter onPeriodChange={setSelectedPeriod} />
        </div>

        {/* Grid de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentMetrics.map((metric, index) => (
            <Card
              key={index}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              changeType={metric.changeType}
              icon={metric.icon}
              color={metric.color}
            />
          ))}
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-gray-200 dark:border-dark-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Desempenho de Vendas</h3>
              <FontAwesomeIcon icon="chart-line" className="text-gray-400" />
            </div>
            <Chart data={currentChartData} color="#3b82f6" />
          </div>
          
          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-gray-200 dark:border-dark-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tráfego de Usuários</h3>
              <FontAwesomeIcon icon="users" className="text-gray-400" />
            </div>
            <Chart data={currentChartData.map(item => ({ 
              ...item, 
              value: item.value * 0.7 
            }))} color="#10b981" />
          </div>
        </div>

        {/* Tabela de Dados Recentes */}
        <div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-gray-200 dark:border-dark-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Atividades Recentes</h3>
            <FontAwesomeIcon icon="exchange-alt" className="text-gray-400" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-dark-700">
                  <th className="text-left py-3 text-gray-600 dark:text-gray-400 font-medium">Usuário</th>
                  <th className="text-left py-3 text-gray-600 dark:text-gray-400 font-medium">Ação</th>
                  <th className="text-left py-3 text-gray-600 dark:text-gray-400 font-medium">Data</th>
                  <th className="text-left py-3 text-gray-600 dark:text-gray-400 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { user: 'João Silva', action: 'Compra realizada', date: '15 Jun 2024', status: 'Concluído' },
                  { user: 'Maria Santos', action: 'Cadastro concluído', date: '14 Jun 2024', status: 'Concluído' },
                  { user: 'Pedro Costa', action: 'Atualização de perfil', date: '14 Jun 2024', status: 'Pendente' },
                  { user: 'Ana Oliveira', action: 'Subscription upgrade', date: '13 Jun 2024', status: 'Concluído' },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-dark-700 last:border-0">
                    <td className="py-3 text-gray-900 dark:text-white">{item.user}</td>
                    <td className="py-3 text-gray-600 dark:text-gray-400">{item.action}</td>
                    <td className="py-3 text-gray-600 dark:text-gray-400">{item.date}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Concluído' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;