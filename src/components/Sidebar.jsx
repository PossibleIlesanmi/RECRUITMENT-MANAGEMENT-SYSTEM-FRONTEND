import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_granted');
  navigate('/');
  };

  return (
    <>
      {/* Menu Button - Only when sidebar is closed */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: '15px',
            left: '15px',
            zIndex: 1200,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#FFFFFF',
            fontSize: '1.8rem',
          }}
        >
          <MenuIcon />
        </button>
      )}

      {/* Sidebar */}
      <div
        className="sidebar"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '250px',
          backgroundColor: '#1E3A8A',
          zIndex: 1500,
          paddingTop: '60px', // Leaves space for close button
        }}
      >
        {/* Close Button */}
        {isOpen && (
          <button
            onClick={toggleSidebar}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#FFFFFF',
              fontSize: '1.8rem',
            }}
          >
            <CloseIcon />
          </button>
        )}

        <h2 style={{ marginTop: 0, fontSize: '1.5rem', color: '#FFFFFF' }}>
          Recruitment System
        </h2>

        {/* Nav Links */}
        <nav>
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/screening" onClick={() => setIsOpen(false)}>Candidate Screening</Link>
          <Link to="/reports" onClick={() => setIsOpen(false)}>Reports</Link>
          <Link to="/settings" onClick={() => setIsOpen(false)}>Settings</Link>
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          style={{
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#DC2626',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Logout
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 1400,
          }}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
