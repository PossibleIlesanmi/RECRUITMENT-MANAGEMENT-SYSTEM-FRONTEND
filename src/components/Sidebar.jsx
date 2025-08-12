import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 style={{ marginTop: 0, fontSize: '1.5rem', color: '#FFFFFF' }}>Recruitment System</h2>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/screening">Candidate Screening</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;