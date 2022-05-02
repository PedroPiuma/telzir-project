import './App.css';
import Form from './components/Form/Form'
import Cep from './components/Cep/Cep'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import tel from './images/tel-icon.png'
import robot from './images/robot-img.png'
import Footer from './components/Footer/Footer';
import Plan from './components/Plan/Plan';

function App() {
  const [dddAsk, setDddAsk] = useState(false)
  const [plan, setPlan] = useState(false)
  return (
    <main className='main'>
      <Navbar setPlan={setPlan} />
      <div className='main-container'>
        <div className='main-container-text'>
          <p className='main-description'>A Telzir tem o prazer de facilitar a comunicação entre as pessoas. Disponibilizamos aqui
            o melhor meio para entender porquê nossos planos de telefonia são confiáveis e excelentes.
            Você como cliente, pode escolher o DDD de origem e destino, o tempo da ligação em minutos e escolher qual o
            plano FaleMais que deseja utilizar. Analise o resultado e veja a vantagem de estar conosco!</p>
          <img className='main-description-robot' src={robot} alt='Robô Telzir' height={250} hidden />
        </div>
        <div className='main-container-form'>
          <button className='main-container-form-bt' onClick={() => setPlan(!plan)} hidden>Planos Telzir</button>
          {plan ? <Plan setPlan={setPlan} /> : ''}
          <span className='main-myddd' onClick={() => setDddAsk(!dddAsk)}><img src={tel} alt='Ícone de telefone' height={20} />Descubra seu DDD</span>
          {dddAsk ? <Cep setDddAsk={setDddAsk} /> : ''}
          <Form />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
