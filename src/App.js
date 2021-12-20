import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [data,setData]=useState('');
  const [insertMode,setInsertMode]=useState(false);
  const [serverData,setServerData]=useState('');
  const textInput=(e)=>{
    setData(e.target.value);
  }

  const checkData=()=>{
    console.log(data);
  }

  const request=()=>{
    Axios({
      method:'post',
      url:'http://localhost:9999',
      data:{data:data}
    }).then((res)=>{
      console.log(res.data);
      setServerData(res.data);
    })
  }

  const insert=()=>{
    setInsertMode(!insertMode);
  }

  return (
    <div className="App">
      <textarea onChange={textInput}></textarea><br/>
      <button onClick={checkData}>내용확인</button><br/>
      <button onClick={request}>서버전송</button>
      <br/>
      <br/>
      <pre>{data}</pre>
      <br/>
      <br/>
      <div>
        {insertMode?<textarea>{serverData}</textarea>:<pre>{serverData}</pre>}
      </div>
      <button onClick={insert}>수정모드</button>
    </div>
  );
}

export default App;
