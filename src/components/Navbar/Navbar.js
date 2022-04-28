import './Navbar.css'
import logo from './img/telzir-logo.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img className='navbar-logo' src={logo} alt='Logo da Telzir' height={60} />
            <h1 className='navbar-title'>Telzir FaleMais</h1>
        </nav>
    )
}

export default Navbar