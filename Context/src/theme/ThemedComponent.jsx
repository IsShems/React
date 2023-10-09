import React from 'react';
import { useTheme } from './ThemeContext';

function ThemedComponent() {
  const { theme } = useTheme();
console.log(theme)
  return (
    <div className={`themed-component ${theme}`}>
      <p>123</p>
    </div>
  );
}

export default ThemedComponent;
