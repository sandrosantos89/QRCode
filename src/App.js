import { useState } from 'react';
import './App.css';
import QRCodeCanvas from './QRCodeCanvas';



function App() {
  const [text, setText] = useState()

  return (
    <div className="App">
   
      
      <input onChange={(element) => { setText(element.target.value) }} value={text} placeholder="Digite sua URL aqui"></input>
      <QRCodeCanvas text={text}></QRCodeCanvas>
    <div>
     <h4>Use o QrCode para promover seus projetos</h4>
    </div>
    
    </div>
    
  );
}

export default App;
