import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Technologies = () => {
  const frameworks = [
    { name: 'Spring Boot', adoption: 78, trend: 'up', category: 'Backend' },
    { name: 'Hibernate', adoption: 65, trend: 'stable', category: 'ORM' },
    { name: 'Maven', adoption: 72, trend: 'stable', category: 'Build' },
    { name: 'Gradle', adoption: 45, trend: 'up', category: 'Build' },
    { name: 'JUnit 5', adoption: 68, trend: 'up', category: 'Testing' },
    { name: 'Mockito', adoption: 58, trend: 'stable', category: 'Testing' },
  ];

  const tools = [
    { name: 'IntelliJ IDEA', usage: 62, preference: 'primary' },
    { name: 'Eclipse', usage: 28, preference: 'secondary' },
    { name: 'VS Code', usage: 35, preference: 'growing' },
    { name: 'NetBeans', usage: 12, preference: 'declining' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <FontAwesomeIcon icon="code" className="text-white text-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tecnologias Java</h2>
            <p className="text-gray-600 dark:text-gray-400">Ecossistema e ferramentas do desenvolvimento Java</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Frameworks Populares */}
          <div className="bg-white dark:bg-black-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Frameworks Mais Usados</h3>
            <div className="space-y-4">
              {frameworks.map((framework, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon 
                      icon={framework.trend === 'up' ? 'caret-up' : 'minus'}
                      className={`text-sm ${
                        framework.trend === 'up' ? 'text-green-500' : 'text-gray-500'
                      }`}
                    />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">{framework.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{framework.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: `${framework.adoption}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white w-12">
                      {framework.adoption}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ferramentas de Desenvolvimento */}
          <div className="bg-white dark:bg-black-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">IDEs e Ferramentas</h3>
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">{tool.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{tool.usage}% uso</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        tool.preference === 'primary' ? 'bg-primary-500' : 
                        tool.preference === 'growing' ? 'bg-green-500' :
                        tool.preference === 'declining' ? 'bg-red-500' : 'bg-gray-500'
                      }`}
                      style={{ width: `${tool.usage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tecnologias Emergentes */}
        <div className="bg-white dark:bg-black-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tecnologias Emergentes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Quarkus', growth: 45, description: 'Supersonic Subatomic Java' },
              { name: 'Micronaut', growth: 38, description: 'Modern full-stack framework' },
              { name: 'GraalVM', growth: 52, description: 'Universal VM' },
              { name: 'Helidon', growth: 28, description: 'Cloud native framework' },
            ].map((tech, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FontAwesomeIcon icon="cloud" className="text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{tech.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{tech.description}</p>
                <span className="text-primary-600 dark:text-primary-400 font-medium">+{tech.growth}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;