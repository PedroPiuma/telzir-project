import './InfoCep.css'
import seta from './img/left-arrow.png'
import { useState } from 'react'

const InfoCep = (props) => {
    const data = props
    const [visible, setVisible] = useState(true)
    if (!visible) return console.log('Retorno aqui')
    return (
        <div className='infocep'>
            <p className='infocep-p'>O DDD de sua localidade é {data.data}.</p>
            <p>Infelizmente não trabalhamos com ligações dessa localidade.</p>
            <p>Caso ainda possua dúvidas ou necessidade de suporte técnico estaremos dispostos em responder através de nossa área de <a rel='noreferrer' target='_blank' href='https://www.svgbackgrounds.com/'>CONTATO</a><img src={seta} alt='Seta indicando o link da página de contato.' /> </p>
            <button className='infocep-button' onClick={() => setVisible(!visible)}>OK</button>
        </div>
    )
}

export default InfoCep