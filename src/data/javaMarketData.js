// Dados baseados em pesquisas reais do mercado (simulados para demonstração)
export const javaGrowthData = {
  yearlyTrend: [
    { year: '2019', popularity: 65, jobs: 45, salary: 72 },
    { year: '2020', popularity: 63, jobs: 42, salary: 75 },
    { year: '2021', popularity: 60, jobs: 44, salary: 78 },
    { year: '2022', popularity: 58, jobs: 46, salary: 82 },
    { year: '2023', popularity: 62, jobs: 48, salary: 85 },
    { year: '2024', popularity: 65, jobs: 52, salary: 88 }
  ],
  
  quarterlyTrend: [
    { quarter: 'Q1 2023', growth: 2.1 },
    { quarter: 'Q2 2023', growth: 1.8 },
    { quarter: 'Q3 2023', growth: 2.4 },
    { quarter: 'Q4 2023', growth: 2.7 },
    { quarter: 'Q1 2024', growth: 3.2 },
    { quarter: 'Q2 2024', growth: 3.5 }
  ],
  
  marketShare: [
    { language: 'Java', share: 25.8, trend: 'up' },
    { language: 'Python', share: 29.3, trend: 'up' },
    { language: 'JavaScript', share: 24.7, trend: 'stable' },
    { language: 'C#', share: 12.4, trend: 'down' },
    { language: 'PHP', share: 7.8, trend: 'down' }
  ],
  
  jobMarket: [
    { region: 'América do Norte', demand: 68, growth: 12 },
    { region: 'Europa', demand: 72, growth: 8 },
    { region: 'Ásia', demand: 85, growth: 25 },
    { region: 'América Latina', demand: 45, growth: 15 },
    { region: 'Oceania', demand: 58, growth: 5 }
  ],
  
  technologies: [
    { technology: 'Spring Boot', adoption: 78, trend: 'up' },
    { technology: 'Java EE', adoption: 45, trend: 'down' },
    { technology: 'Micronaut', adoption: 32, trend: 'up' },
    { technology: 'Quarkus', adoption: 28, trend: 'up' },
    { technology: 'Jakarta EE', adoption: 38, trend: 'stable' }
  ],
  
  currentStats: {
    globalRank: 3,
    tiobeIndex: 11.5,
    jobPostings: 125000,
    averageSalary: 95000,
    yoyGrowth: 8.7,
    enterpriseAdoption: 76
  }
};

export const javaVersions = [
  { version: 'Java 21', release: '2023', adoption: 15, lts: true },
  { version: 'Java 17', release: '2021', adoption: 45, lts: true },
  { version: 'Java 11', release: '2018', adoption: 65, lts: true },
  { version: 'Java 8', release: '2014', adoption: 85, lts: true },
  { version: 'Java 23', release: '2024', adoption: 5, lts: false }
];