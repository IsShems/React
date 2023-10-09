import React from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import ThemeToggle from './theme/ThemeToggle';
import ThemedComponent from './theme/ThemedComponent'; 
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher App</h1>
        <ThemeToggle />
        <ThemedComponent /> {}
      </div>
    </ThemeProvider>
  );
}

export default App;

