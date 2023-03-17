import './App.css';
import { Header } from './ui-components';

function Hello(props) {
  return (
    <p className={"alert alert-" + props.type}>{props.message}</p>
  )
}

function App() {
  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これ、UIコンポーネントを利用した表示です</p>
      <Hello message="サンプルのメッセージです。" type="primary" />
      <Hello message="表示のタイプも変えられます" type="dark" />
    </div>
  );
}

export default App;
