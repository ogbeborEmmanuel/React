
import './App.css';
import NavBar from './Component/NavBar';
import { useState } from 'react';
import Form from './Component/Form';
function App() {
  const [number, setNumber] = useState(1)
  const user = {
    name: 'ose', age: 22
  }
  return (
    <div>
      <header>
        <NavBar user={user} />
        <button onClick={() => setNumber(number + 1)}>Increment</button>
        {number}
        <Form />
      </header>
    </div>
  );
}

export default App;
