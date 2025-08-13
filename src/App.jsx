import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import CandidateScreening from './pages/CandidateScreening';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Access from './pages/Access';

const ProtectedRoute = ({ children }) => {
  const accessGranted = localStorage.getItem('access_granted') === 'true';
  return accessGranted ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Access page as first screen */}
        <Route path="/" element={<Access />} />

        {/* Protected pages */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Sidebar />
              <div className="content">
                <Header />
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/screening" element={<CandidateScreening />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
                <Footer />
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
