import './Navbar.css'
import logo from '../../images/telzir-logo.png'
import menu from '../../images/open-icon.png'
import Contact from '../Contact/Contact'
import Faq from '../Faq/Faq'
import { Fragment, useState } from 'react'

const Navbar = (props) => {
    const { setPlan } = props
    const [visible, setVisible] = useState(false)
    const [revertBtn, setRevertBtn] = useState(false)
    const [contactFromNav, setContactFromNav] = useState(false)
    const [faq, setFaq] = useState(false)
    return (
        <Fragment>
            <nav className='navbar'>
                <img className='navbar-logo' src={logo} alt='Logo da Telzir' height={60} />
                <h1 className='navbar-title'>A melhor empresa de telefonia de SP</h1>
                <button className='navbar-menu'
                    onClick={() => {
                        setVisible(!visible)
                        setRevertBtn(!revertBtn)
                    }}>
                    <img id='navbar-menu-arrow' src={menu} height={20} alt='Seta do menu' className={revertBtn ? 'revert' : ''} />
                </button>
            </nav>
            {
                visible ? <div className='navbar-links'>
                    <span onClick={() => {
                        setVisible(!visible)
                        setContactFromNav(!contactFromNav)
                    }} className='navbar-links-link'>Contact</span>
                    <button className='navbar-links-plan' onClick={() => {
                        setVisible(!visible)
                        setPlan(true)
                        setRevertBtn(!revertBtn)
                    }}>Planos Telzir</button>
                    <span onClick={() => {
                        setVisible(!visible)
                        setFaq(!faq)
                    }} className='navbar-links-link'>FAQ</span></div> : ''
            }
            {contactFromNav ? <Contact setContactFromNav={setContactFromNav} setRevertBtn={setRevertBtn} /> : ''}
            {faq ? <Faq setFaq={setFaq} setRevertBtn={setRevertBtn} /> : ""}
        </Fragment>
    )
}

export default Navbar