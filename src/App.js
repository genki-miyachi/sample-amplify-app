import { useEffect, useState } from 'react';
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
  const data = [
    ["おやすみ、", "..."],
    ["おはよう、", "!"],
    ["こんにちは、", "さん。"],
    ["こんばんは、", "さん。"],
  ]
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState(input);
  const [msgs, setMsgs] = useState(msg); 
  
  const onChange = (e) => {
    setInput(e.target.value)
  }
  
  const onClick = () => {
    setMsg(input)
  }
  
  useEffect(() => {
    if (msg == "") {
      setMsgs("no message.");
    } else {
      const h = Math.floor(new Date().getHours() / 6);
      setMsgs(data[h][0] + msg + data[h][1]);
    }
  }, [msg])
  
  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これ、UIコンポーネントを利用した表示です</p>
      <div className="mx-0 my-3 row">
        <input type="text" className="form-control col" onChange={onChange}/>
        <button className="btn btn-primary col-2" onClick={onClick}>Click</button>
      </div>
      <Hello message={msgs} type="primary" />
    </div>
  );
}

export default App;
