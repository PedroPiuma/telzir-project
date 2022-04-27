import './App.css';
import Form from './components/Form/Form'
import Cep from './components/Cep/Cep'
import { useState } from 'react'

function App() {
  const [dddAsk, setDddAsk] = useState(false)
  return (
    <main className='main'>
      <h1 className='main-title'>Telzir FaleMais</h1>
      <p className='main-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
      <span className='main-myddd' onClick={() => setDddAsk(!dddAsk)}>📞 Descubra seu DDD</span>
      {dddAsk ? <Cep /> : ''}
      <Form />
    </main>
  );
}

export default App;
