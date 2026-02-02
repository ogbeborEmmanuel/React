
import './App.css';
import Header from './Component/Header';
import { useState } from 'react';
import Form from './Component/Form';
import PackingList from './Component/PackingList';
function App() {
  const [items, setItems] = useState([])
  return (
    <div>
      <Header />
      <header>
        <Form items={items} setItems={setItems} />
        <PackingList items={items} setItems={setItems} />

      </header>
    </div>
  );
}

export default App;
