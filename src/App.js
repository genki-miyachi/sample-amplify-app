import './App.css';
import { Header } from './ui-components';

function onClick() {
  alert("クリックした！")
}

function App() {
  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これ、UIコンポーネントを利用した表示です</p>
      <button className="btn btn-primary" onClick={onClick}>
        Click me!
      </button>
    </div>
  );
}

export default App;
