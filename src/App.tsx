import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EvidencePage from './pages/EvidencePage';
import IncidentPage from './pages/IncidentPage';
import RiskAssessmentPage from './pages/RiskAssessmentPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AlertProvider } from './contexts/AlertContext';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AlertProvider>
          <Router>
            <Navbar />
            <main className="p-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/evidence" element={<EvidencePage />} />
                <Route path="/incidents" element={<IncidentPage />} />
                <Route path="/risk-assessment" element={<RiskAssessmentPage />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </AlertProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
