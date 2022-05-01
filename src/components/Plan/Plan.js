import './Plan.css'
import close from '../../images/close-icon.png'
import Table from '../Table/Table'
const Plan = (props) => {
    const { setPlan } = props
    return (
        <div className='plan'>
            <div className='plan-prices'>
                <h3 className='plan-prices-title'>Tarifas padrões</h3>
                <Table />
            </div>
            <div className='plan-plans'>
                <h3>Planos</h3>
                <ul className='plan-plans-list' type='square'>
                    <li>Fale Mais 30: Você pode falar até 30 minutos sem custos.</li>
                    <li>Fale Mais 60: Você pode falar até 60 minutos sem custos.</li>
                    <li>Fale Mais 120: Você pode falar até 120 minutos sem custos.</li>
                    <p className='plan-plans-list-p'>*Minutos excedentes terão acréscimo de 10% sobre a tarifa padrão.</p>
                </ul>
            </div>
            <div className='plan-button-close'><button className='plan-button-close-bt' onClick={() => {
                setPlan(false)
            }}><img className='plan-button-close-img' src={close} alt='Ícone de fechar plan' height={45} /></button>
            </div>
        </div>
    )
}

export default Plan