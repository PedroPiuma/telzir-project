import './Navbar.css'
import logo from './img/telzir-logo.png'
import menu from './img/open-icon.png'
import Contato from '../Contato/Contato'
import { Fragment, useState } from 'react'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const [revertBtn, setRevertBtn] = useState(false)
    const [contactFromNav, setContactFromNav] = useState(false)
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
                    <img src={menu} height={20} alt='Seta do menu' className={revertBtn ? 'revert' : ''} />
                </button>
            </nav>
            {
                visible ? <ul className='navbar-links'>
                    <li onClick={() => {
                        setVisible(!visible)
                        setContactFromNav(!contactFromNav)
                    }} className='navbar-links-link'>Contato</li>
                    <li onClick={() => setVisible(!visible)} className='navbar-links-link'>FAQ</li></ul> : ''
            }
            {contactFromNav ? <Contato setContactFromNav={setContactFromNav} setRevertBtn={setRevertBtn} /> : ''}
        </Fragment>
    )
}

export default Navbar