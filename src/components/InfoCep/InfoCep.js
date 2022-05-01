import './InfoCep.css'
import Contact from '../Contact/Contact'
import { useState } from 'react'


const InfoCep = (props) => {
    const { data, setDddAsk } = props
    const [contactFromCep, setContactFromCep] = useState(false)
    return (
        <div className='infocep'>
            <p className='infocep-p'>O DDD de sua localidade é {data}.</p>
            <p>Infelizmente não trabalhamos com ligações dessa localidade.</p>
            <p>Caso ainda possua dúvidas ou necessidade de suporte técnico estaremos
                dispostos em responder através de nossa área de
                <span className='infocep-contact'
                    onClick={() => setContactFromCep(!contactFromCep)}
                > CONTATO</span>.</p>
            <button className='infocep-button' onClick={() => {
                setDddAsk(false)
            }}>OK</button>
            {contactFromCep ? <Contact setContactFromCep={setContactFromCep} setDddAsk={setDddAsk} /> : ''}
        </div >
    )
}

export default InfoCep