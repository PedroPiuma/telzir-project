import './Cep.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import InfoCep from '../InfoCep/InfoCep'

const Form = (props) => {
    const { visible } = props
    const [cep, setCep] = useState('')
    const [data, setData] = useState('')
    const [disabled, setDisabled] = useState(false)
    const ddds = [11, 16, 17, 18]
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
            {data.ddd && !(ddds.some(e => e === Number(data.ddd))) ? <InfoCep data={data.ddd} visible={visible} /> : ''}
            <p className='cep-form-p'>Digite abaixo o CEP de sua localidade</p>
            <form className='cep-form-container'>
                <div className='cep-form-container-box'>
                    <input id='cep' placeholder='Ex.: 14022071' className='cep-form-container-box-input' type='text' maxLength={8} onChange={(event) => setCep(event.target.value)} autoComplete='off' disabled={disabled} />
                    {data.ddd ? <p className='cep-form-container-box-p'> Seu CEP é 0{data.ddd} de {data.localidade}/{data.uf}</p> : ''}
                </div>
            </form>
        </div>
    )
}

export default Form