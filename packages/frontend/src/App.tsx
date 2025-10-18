import React from 'react';
import './App.css';
import './styles/colors.css';
import AppRoutes from './routes/AppRoutes';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </LanguageProvider>
  );
}

export default App;
