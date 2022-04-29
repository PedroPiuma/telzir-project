import './InfoCep.css'
// import { useState } from 'react'

const InfoCep = (props) => {
    const { data, visible } = props
    return (
        <div className='infocep'>
            <p className='infocep-p'>O DDD de sua localidade é {data}.</p>
            <p>Infelizmente não trabalhamos com ligações dessa localidade.</p>
            <p>Caso ainda possua dúvidas ou necessidade de suporte técnico estaremos dispostos em responder através de nossa área de <a rel='noreferrer' target='_blank' href='https://www.svgbackgrounds.com/'>CONTATO</a></p>
            <button className='infocep-button' onClick={() => visible(false)}>OK</button>
        </div>
    )
}

export default InfoCep