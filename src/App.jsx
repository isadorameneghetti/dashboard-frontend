import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar/Sidebar';
import Header from './components/layout/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Developers from './pages/Developers/Developers';
import Technologies from './pages/Technologies/Technologies';
import Jobs from './pages/Jobs/Jobs';
import Reports from './pages/Reports/Reports';
import Methodology from './pages/Methodology/Methodology';
import Settings from './pages/Settings/Settings';
import './config/fontAwesome';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50 dark:bg-black-900">
        {/* Sidebar */}
        <div className="flex-shrink-0 z-50">
          <Sidebar />
        </div>
        
        {/* Conteúdo Principal */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/methodology" element={<Methodology />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;