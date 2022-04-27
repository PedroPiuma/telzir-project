import './Form.css'
import { useState, useEffect } from "react"

const prices = {
    '011016': 1.9,
    '011017': 1.7,
    '011018': 0.9,
    '016011': 2.9,
    '017011': 2.7,
    '018011': 1.9,
}

const plans = {
    falemais30: 30,
    falemais60: 60,
    falemais120: 120,
}

const Form = () => {
    const [origin, setOrigin] = useState('011')
    const [target, setTarget] = useState('016')
    const [time, setTime] = useState('')
    const [plan, setPlan] = useState('falemais30')
    const [result, setResult] = useState(0)
    const [planResult, setPlanResult] = useState(0)

    useEffect(() => {
        const operator = (origin, target, time, plan) => {
            const priceKey = origin + target
            const priceEntrie = prices[priceKey ? priceKey : 0]
            const priceCall = priceEntrie * Number(time)
            const pricePlanCall = ((Number(time) - plans[plan]) * priceEntrie) + ((Number(time) - plans[plan]) * priceEntrie) * 0.1
            setResult(priceCall >= 0 ? priceCall.toFixed(2) : '0.00')
            setPlanResult(pricePlanCall >= 0 ? pricePlanCall.toFixed(2) : '0.00')
        }
        operator(origin, target, time, plan)
    }, [origin, target, time, plan])

    return (
        <form className='form'>
            {<p>{result ? `Valor da ligação sem plano: R$${result}` : ''}</p>}
            {<p>{planResult ? `Valor da ligação com plano: R$${planResult}` : ''}</p>}

            <label htmlFor='origin-ddd'>DDD de origem:
                <select name="origin-ddd" onChange={(e) => setOrigin(e.target.value)}>
                    <option value='011'>011</option>
                    <option value='016'>016</option>
                    <option value='017'>017</option>
                    <option value='018'>018</option>
                </select>
            </label>
            <label htmlFor='target-ddd'>DDD de destino:
                <select name="target-ddd" onChange={(e) => setTarget(e.target.value)}>
                    <option value='011'>011</option>
                    <option value='016' selected>016</option>
                    <option value='017'>017</option>
                    <option value='018'>018</option>
                </select>
            </label>
            <input name="time" type={'text'} placeholder='Tempo em minutos' onChange={(e) => setTime(e.target.value)} />
            <label htmlFor='plan'>Planos</label>
            <select name="plan" onChange={(e) => setPlan(e.target.value)}>
                <option value='falemais30'>Fale Mais 30</option>
                <option value='falemais60'>Fale Mais 60</option>
                <option value='falemais120'>Fale Mais 120</option>
            </select>
        </form>
    )
}

export default Form