import React, {useEffect, useState} from 'react'
import '../../styles/style.css'
import {useDispatch, useSelector} from 'react-redux'
import {actions, AppStateType, getPrice} from '../REDUX'
import {Chart} from './Chart'
import ConverterUnit from './ConverterUnit'
import icons from '../assets/icons'
import {Aside, Content, Section} from '../../styles/components'

const Converter: React.FC = React.memo(() => {

    //todo: keep it in reducer. Id of currency to change options in converter
    const [id, setId] = useState('bitcoin' as string)
    const [idVs, setIdVs] = useState('usd' as string)

    const data = useSelector((state: AppStateType) => state.value)
    const amount1 = useSelector((state: AppStateType) => state.amount1)
    const amount2 = useSelector((state: AppStateType) => state.amount2)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPrice(id, idVs))
    }, [id, idVs, dispatch])

    let rates = Object.values(data.bitcoin ? data.bitcoin : data.ethereum ? data.ethereum : data.dollar ? data.dollar : {})
    let rate = rates[0]

    useEffect(()=>{
        const amount = amount1 ? amount1 * rate : 1
        dispatch(actions.setAmount2(amount))
    },  [rate, amount1, dispatch])

    const changeAmount = (amount: number) => {
        dispatch(actions.setAmount1(amount))
    }
    const icon1 = icons[0]
    const icon2 = icons[2]

    return <Content>
        <Section>
            <ConverterUnit icon={icon1} name='BTC' amount={amount1} changeAmount={changeAmount} rate={rate} />
            <ConverterUnit icon={icon2} name='BTC' amount={amount2}/>
        </Section>
        <Aside><Chart/></Aside>
    </Content>
})

export default Converter