import './Contact.css'
import whatsapp from '../../images/whatsapp-icon.png'
import close from '../../images/close-icon.png'

const InfoCep = (props) => {
    const { setContactFromNav, setContactFromCep, setRevertBtn, setDddAsk } = props
    const submit = (event) => {
        event.preventDefault()
        alert('Formulário enviado!')
        const data = new FormData(event.target)
        const result = {
            name: data.get('name'),
            email: data.get('email'),
            tel: data.get('tel'),
            topic: data.get('topic'),
            message: data.get('message'),
        }
        console.log(result)
        return result
    }

    const closeContact = () => {
        if (setContactFromNav) setContactFromNav(false)
        if (setContactFromCep) setContactFromCep(false)
        if (setRevertBtn) setRevertBtn(false)
        if (setDddAsk) setDddAsk(false)
    }

    return (
        <div className='contact'>
            <div className='contact-button-close'><button className='contact-button-close-bt' onClick={() => {
                closeContact()
            }}><img className='contact-button-close-img' src={close} alt='Ícone de fechar contact' height={45} /></button></div>
            <h3>Fale Conosco</h3>
            <p>Ligue <span>GRÁTIS:</span> <a href='tel:08000010001'>0800 001 0001</a></p>
            <p className='flex-inline'><img src={whatsapp} alt='Ícone whatsapp' height={24} /><a target={'_blank'} rel='noreferrer' href={'https://api.whatsapp.com/send?phone=5553981119556&text=Ol%C3%A1%20Telzir%2C%20desejo%20saber%20mais%20sobre%20os%20planos%20de%20telefonia.'}>+55 53 98111-9556</a></p>
            <form className='contact-form' id='contact-form' onSubmit={(event) => {
                submit(event)
                closeContact()
            }}>
                <input className='contact-form-input' type={'text'} id='name' name='name' placeholder='👤 Nome' required minLength={2} maxLength={40} autoComplete='off' />
                <input className='contact-form-input' type={'email'} id='email' name='email' placeholder='💌 E-mail' required />
                <input className='contact-form-input' type={'tel'} id='tel' name='tel' maxLength={11} minLength={11} placeholder='📱 WhatsApp/Cel com DDD' required autoComplete='off' />
                <input className='contact-form-input' type={'text'} id='topic' name='topic' maxLength={40} minLength={3} placeholder='📌 Assunto' required autoComplete='off' />
                <textarea className='contact-form-input contact-form-textarea' id='message' name='message' placeholder='💬 Mensagem' rows='8' cols='30' required></textarea>
                <button className='contact-button-submit'>Enviar</button>
            </form>
        </div>
    )
}

export default InfoCep