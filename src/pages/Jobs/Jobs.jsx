import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../../components/ui/Card/Card';

const Jobs = () => {
  const jobMarket = [
    { region: 'América do Norte', openings: 45000, growth: 12, remote: 65 },
    { region: 'Europa', openings: 38000, growth: 8, remote: 58 },
    { region: 'Ásia', openings: 75000, growth: 25, remote: 42 },
    { region: 'América Latina', openings: 22000, growth: 15, remote: 48 },
  ];

  const popularRoles = [
    { role: 'Backend Developer', demand: 85, salary: 95000 },
    { role: 'Full Stack Developer', demand: 78, salary: 105000 },
    { role: 'DevOps Engineer', demand: 72, salary: 115000 },
    { role: 'Software Architect', demand: 45, salary: 135000 },
    { role: 'Mobile Developer', demand: 38, salary: 88000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <FontAwesomeIcon icon="briefcase" className="text-white text-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mercado de Trabalho</h2>
            <p className="text-gray-600 dark:text-gray-400">Oportunidades e tendências de emprego</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card
            title="Vagas Abertas"
            value="180K"
            change="+12.5%"
            changeType="positive"
            icon="briefcase"
            description="Global"
          />
          <Card
            title="Salário Médio"
            value="$95K"
            change="+5.2%"
            changeType="positive"
            icon="dollar-sign"
            description="USD/ano"
          />
          <Card
            title="Trabalho Remoto"
            value="58%"
            change="+8.3%"
            changeType="positive"
            icon="home"
            description="Das vagas"
          />
          <Card
            title="Taxa de Contratação"
            value="3.2%"
            change="+0.4%"
            changeType="positive"
            icon="user-check"
            description="Conversão"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Mercado por Região */}
          <div className="bg-white dark:bg-black-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mercado por Região</h3>
            <div className="space-y-4">
              {jobMarket.map((market, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">{market.region}</span>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {market.remote}% remoto
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {market.openings.toLocaleString()} vagas
                    </span>
                    <span className={`text-sm font-medium ${market.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      +{market.growth}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cargos em Alta */}
          <div className="bg-white dark:bg-black-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Cargos em Alta</h3>
            <div className="space-y-4">
              {popularRoles.map((role, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">{role.role}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      ${role.salary.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-primary-500 h-2 rounded-full"
                      style={{ width: `${role.demand}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>Demanda: {role.demand}%</span>
                    <span>Salário médio</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Setores que Mais Contratam */}
        <div className="bg-white dark:bg-black-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Setores que Mais Contratam</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { sector: 'Tecnologia', percentage: 35, companies: 12500 },
              { sector: 'Financeiro', percentage: 28, companies: 8900 },
              { sector: 'E-commerce', percentage: 18, companies: 6700 },
              { sector: 'Saúde', percentage: 12, companies: 4500 },
            ].map((sector, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FontAwesomeIcon icon="building" className="text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{sector.sector}</h4>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">{sector.percentage}%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{sector.companies.toLocaleString()} empresas</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;