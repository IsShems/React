import React, { useState } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

function App() {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowA(!showA)}>
        {showA ? 'Hide A' : 'Show A'}
      </button>
      <button onClick={() => setShowB(!showB)}>
        {showB ? 'Hide B' : 'Show B'}
      </button>

      {showA && <ComponentA />}
      {showB && <ComponentB />}
    </div>
  );
}

export default App;
