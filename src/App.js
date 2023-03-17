import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './ui-components';


function useMessage(value) {
  const data = [
    ["おやすみ、", "..."],
    ["おはよう、", "!"],
    ["こんにちは、", "さん。"],
    ["こんばんは、", "さん。"],
  ]
  const [msg, setMsg] = useState(value);
  
  const setMsgs = (v) => {
    if (v == "") {
      setMsg("no message.")
    } else {
      const h = Math.floor(new Date().getHours() / 6)
      setMsg(data[h][0] + v + data[h][1])
    }
  }
  
  return [msg, setMsgs];
}

function Hello(props) {
  return (
    <div className={"alert alert-" + props.type}>
      {props.message}
    </div>
  )
}

function App() {
  const [msg, setMsg] = useState("")
  const [message, setMessage] = useMessage(msg)
  
  const onChange = (e) => {
    setMsg(e.target.value);
  }
  
  useEffect(() => {
    setMessage(msg);
  }, [msg])
  
  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これ、UIコンポーネントを利用した表示です</p>
      <div className="mx-0 my-3 row">
        <input type="text" className="form-control col" onChange={onChange}/>
      </div>
      <Hello message={message} type="primary" />
    </div>
  );
}

export default App;
