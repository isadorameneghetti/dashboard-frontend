import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../../components/ui/Card/Card';

const Developers = () => {
  const developerStats = [
    { country: 'Brasil', developers: 150000, growth: 12 },
    { country: 'EUA', developers: 450000, growth: 8 },
    { country: 'Índia', developers: 750000, growth: 25 },
    { country: 'Alemanha', developers: 180000, growth: 5 },
    { country: 'China', developers: 600000, growth: 18 },
  ];

  const experienceLevels = [
    { level: 'Júnior', percentage: 35, averageSalary: 45000 },
    { level: 'Pleno', percentage: 45, averageSalary: 75000 },
    { level: 'Sênior', percentage: 15, averageSalary: 120000 },
    { level: 'Especialista', percentage: 5, averageSalary: 160000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <FontAwesomeIcon icon="users" className="text-white text-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Desenvolvedores Java</h2>
            <p className="text-gray-600 dark:text-gray-400">Distribuição global e perfil dos desenvolvedores</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card
            title="Total Global"
            value="2.1M"
            change="+8.7%"
            changeType="positive"
            icon="users"
            description="Desenvolvedores ativos"
          />
          <Card
            title="Novos em 2024"
            value="156K"
            change="+12.3%"
            changeType="positive"
            icon="user"
            description="Novos desenvolvedores"
          />
          <Card
            title="Taxa de Empregabilidade"
            value="94%"
            change="+2.1%"
            changeType="positive"
            icon="briefcase"
            description="Desenvolvedores empregados"
          />
          <Card
            title="Salário Médio"
            value="$85K"
            change="+5.2%"
            changeType="positive"
            icon="dollar-sign"
            description="USD/ano"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Distribuição por País */}
          <div className="bg-white dark:bg-black-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Distribuição por País</h3>
            <div className="space-y-4">
              {developerStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-gray-900 dark:text-white">{stat.country}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: `${(stat.developers / 1000000) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white w-20">
                      {stat.developers.toLocaleString()}
                    </span>
                    <span className={`text-sm font-medium ${stat.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.growth}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Níveis de Experiência */}
          <div className="bg-white dark:bg-black-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Níveis de Experiência</h3>
            <div className="space-y-4">
              {experienceLevels.map((level, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">{level.level}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      ${level.averageSalary.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-primary-500 h-2 rounded-full"
                      style={{ width: `${level.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>{level.percentage}% dos desenvolvedores</span>
                    <span>Salário médio</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;