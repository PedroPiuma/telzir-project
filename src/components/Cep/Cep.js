import './Cep.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import InfoCep from '../InfoCep/InfoCep'

const Form = (props) => {
    const [cep, setCep] = useState('')
    const [data, setData] = useState('')
    const [disabled, setDisabled] = useState(false)
    useEffect(() => {
        const request = async () => {
            try {
                setDisabled(true)
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
                if (response.data.erro) {
                    alert('CEP Inválido')
                }
                return setData(response.data)
            } catch (error) {
                console.log('Erro')
            } finally {
                setDisabled(false)
            }
        }
        if (cep.length === 8) request()
    }, [cep])
    return (
        <div className='cep-form'>
            {data.ddd ? <InfoCep data={data.ddd} /> : ''}
            <p className='margin-zero text-center'>Digite o CEP de sua localidade</p>
            <form className='cep-form-container'>
                <div className='cep-form-container-box'>
                    <input id='cep' placeholder='Digite seu CEP aqui' className='cep-form-container-box-input' type='text' maxLength={8} onChange={(event) => setCep(event.target.value)} autoComplete='off' disabled={disabled} />
                </div>
                {/* <p>O DDD de sua localidade é {data.ddd}</p> */}
            </form>
        </div>
    )
}

export default Form