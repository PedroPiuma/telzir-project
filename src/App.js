import './App.css';
import Form from './components/Form/Form'
import Cep from './components/Cep/Cep'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import tel from './tel-icon.png'

function App() {
  const [dddAsk, setDddAsk] = useState(false)
  return (
    <main className='main'>
      <Navbar />
      <div className='main-container'>
        <p className='main-description'>A Telzir tem o prazer facilitar a comunicação entre as pessoas. Assim, está
          disponível abaixo o melhor meio para entender porque nossos planos de telefonia são naturalmente favoráveis.
          Você como cliente, pode escolher o DDD de origem e destino, o tempo da ligação em minutos e escolher qual o
          plano FaleMais que deseja utilizar. Analise o resultado e veja a vantagem de estar conosco!</p>
        <span className='main-myddd' onClick={() => setDddAsk(!dddAsk)}><img src={tel} alt='Ícone de telefone' height={20} />Descubra seu DDD</span>
        {dddAsk ? <Cep className='main-cep' visible={setDddAsk} /> : ''}
        <Form />
      </div>
    </main>
  );
}

export default App;
