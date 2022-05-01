import './Faq.css'
import { useState } from 'react'
import close from '../../images/close-icon.png'
import whatsapp from '../../images/whatsapp-icon.png'
const Faq = (props) => {
    const { setFaq, setRevertBtn } = props
    const [how, setHow] = useState(false)
    const [app, setApp] = useState(false)
    const [whats, setWhats] = useState(false)
    return (
        <div className='faq-container'>
            <div className='faq'>
                <div className='faq-button-close'><button className='faq-button-close-bt' onClick={() => {
                    setFaq(false)
                    setRevertBtn(false)
                }}><img className='faq-button-close-img' src={close} alt='Ícone de fechar faq' height={45} /></button></div>
                <h3>Perguntas Frequentes</h3>
                <span className='faq-question' onClick={() => setApp(!app)}>📲 Pagamento | Consumo | Plano</span>
                {app ? <p>Baixe o app Telzir Fale Mais. Acompanhe seu consumo,
                    baixe faturas, configure o pagamento,
                    peça segunda via do boleto e muito mais.</p> : ''}
                <span className='faq-question' onClick={() => setHow(!how)}>✍ Como assinar o plano?</span>
                {how ? <p>Para contratar os planos da Telzir é necessário entrar em contato diretamente conosco.
                    É simples e rápido. Estamos trabalhando com contratações de servições por meio de mensagem via
                    Whatsapp, 0800 ou então por email.
                </p> : ''}
                <span className='faq-question' onClick={() => setWhats(!whats)}><img src={whatsapp} alt='Ícone do whatsapp' height={24} /> Qual o Whatsapp da Telzir?</span>
                {whats ? <p>O número de Whatsapp da Telzir é <p><a target={'_blank'} rel='noreferrer' href={'https://api.whatsapp.com/send?phone=5553981119556&text=Ol%C3%A1%20Telzir%2C%20desejo%20saber%20mais%20sobre%20os%20planos%20de%20telefonia.'}>+55 53 98111-9556</a></p>
                </p> : ''}
            </div>
        </div>
    )
}

export default Faq