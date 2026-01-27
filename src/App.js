
import './App.css';
// import NavBar from './Component/NavBar';
import { useState } from 'react';
import Form from './Component/Form';
import PackingList from './Component/PackingList';
function App() {
  const [items, setItems] = useState([])
  return (
    <div>
      <header>
        <PackingList items={items} setItems={setItems} />
        <Form items={items} setItems={setItems} />
      </header>
    </div>
  );
}

export default App;
