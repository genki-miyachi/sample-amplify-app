import { useState } from 'react';
import './App.css';
import { Header } from './ui-components';

function App() {
  const [count, setCount] = useState(0)
  const onClick = () => {
    setCount(count + 1)
  }
  
  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これ、UIコンポーネントを利用した表示です</p>
      <div className="alert alert-primary">Count: {count}</div>
      <button className="btn btn-primary" onClick={onClick}>
        Click me!
      </button>
    </div>
  );
}

export default App;
