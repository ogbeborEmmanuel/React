
import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <header>
        <button onClick={() => setNumber(number + 1)}>Increment</button>
        {number}
      </header>
    </div>
  );
}

export default App;
