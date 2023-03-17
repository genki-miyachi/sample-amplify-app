import './App.css';
import { Header } from './ui-components';

function App() {
  let val = 0;
  const onClick = () => {
    val += 1
  }
  
  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これ、UIコンポーネントを利用した表示です</p>
      <div className="alert alert-primary">Count: {val}</div>
      <button className="btn btn-primary" onClick={onClick}>
        Click me!
      </button>
    </div>
  );
}

export default App;
