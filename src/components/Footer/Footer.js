import './Footer.css'
import whatsapp from '../../images/whatsapp-icon.png'
import Faq from '../Faq/Faq'
import { useState } from 'react'

const Footer = () => {
    const [faq, setFaq] = useState(false)
    return (
        <div className='footer'>
            <span className='flex-inline'>Ligue <span>GRÁTIS: 📞</span><a href='tel:08000010001'>0800 001 0001</a></span>
            <span className='flex-inline pointer' onClick={() => setFaq(!faq)}>Perguntas Frequentes</span>
            {faq ? <Faq setFaq={setFaq} /> : ''}
            <span className='flex-inline'>Mande mensagem: <img src={whatsapp} alt='Ícone whatsapp' height={24} /><a target={'_blank'} rel='noreferrer' href={'https://api.whatsapp.com/send?phone=5553981119556&text=Ol%C3%A1%20Telzir%2C%20desejo%20saber%20mais%20sobre%20os%20planos%20de%20telefonia.'}>+55 53 98111-9556</a></span>
        </div>
    )
}

export default Footer