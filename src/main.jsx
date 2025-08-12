import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E3A8A',
    },
    secondary: {
      main: '#F59E0B',
    },
    success: {
      main: '#10B981',
    },
    text: {
      primary: '#1E3A8A',
      secondary: '#FFFFFF',
    },
    background: {
      default: '#F9FAFB',
      paper: '#FFFFFF',
    },
    dark: {
      background: {
        default: '#1A202C',
        paper: '#2D3748',
      },
      text: {
        primary: '#F7FAFC', // Updated to match StyledPaper
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);