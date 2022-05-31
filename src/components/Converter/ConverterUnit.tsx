import React, {useState} from 'react'
import {AmountForm} from './AmountForm'
import icons from '../assets/icons'
import {SelectUnit} from './SelectUnit'
import { Icon, IconFont } from '../../styles/components'

const ConverterUnit: React.FC<ConverterType> = (props) => {
    const [isOptionsVisible, setOptionsVisible] = useState(false)
    const show = () => {
        setOptionsVisible(true)
    }
    const hide = () => {
        //todo: set current currency
        setOptionsVisible(false)
    }
    const rate = props.rate ? props.rate : 1
    if (!isOptionsVisible) {
        return <div>
            <div>
                <Icon src={props.icon}/> {props.name}, <IconFont src={props.icon} alt='...'/>
                1 = {rate}<IconFont src={icons[2]} alt='...'/></div>
            <IconFont src={props.icon} alt='...'/>
            <div>
                {props.changeAmount ?
                    <AmountForm amount={props.amount} changeAmount={props.changeAmount}/> :
                    <div>{props.amount}</div>}
            </div>
            <button onClick={show}>{'\u2304'}</button>
        </div>
    } else return <SelectUnit/>
}

export default ConverterUnit

type ConverterType = {
    icon: string
    name: string
    rate?: number | null | undefined
    amount: number
    changeAmount?: (amount: number) => void
}