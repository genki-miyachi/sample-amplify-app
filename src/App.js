import { useState } from 'react';
import './App.css';
import { Header } from './ui-components';

function Hello(props) {
  return (
    <div className={"alert alert-" + props.type}>
      {props.message}
    </div>
  )
}

function App() {
  const [msg, setMsg] = useState("")
  const [msgs, setMsgs] = useState([]) 
  
  const onChange = (e) => {
    setMsg(e.target.value)
  }
  
  const onClick = () => {
    setMsgs([
      "Hello, " + msg + "!",
      "こんにちわ、" + msg + "さん。"
    ])
  }
  
  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これ、UIコンポーネントを利用した表示です</p>
      <div className="mx-0 my-3 row">
        <input type="text" className="form-control col" onChange={onChange}/>
        <button className="btn btn-primary col-2" onClick={onClick}>Click</button>
      </div>
      <Hello message={msgs[0]} type="primary" />
      <Hello message={msgs[1]} type="dark"/>
    </div>
  );
}

export default App;
