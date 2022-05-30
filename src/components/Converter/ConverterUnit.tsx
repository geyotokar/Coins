import React, {useState} from "react";
import {AmountForm} from "./AmountForm";
import {Field, Form, Formik} from "formik";
import icons from "../assets/icons";

type ConverterType = {
    icon: string
    name: string
    rate?: number | null | undefined
    amount: number
    changeAmount?: (amount: number) => void
}

type OwnFormType = {
    id: string
}

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
        return <div className='b c'>
            <div className='c-text'>
                <img className='icon' src={props.icon} alt='...'/> {props.name}, <img className='icon' src={props.icon} alt='...'/>
                1 = {rate}<img className='icon' src={icons[2]} alt='...'/></div>
            <img className='icon-l c-amount' src={props.icon} alt='...'/>
            <div className='c-form'>
                {props.changeAmount ?
                    <AmountForm amount={props.amount} changeAmount={props.changeAmount}/> :
                    <div className='c-vs'>{props.amount}</div>}
            </div>
            <button className='button c-toggle' onClick={show}>{'\u2304'}</button>
        </div>
    } else return <OptionsForm />
}

export const OptionsForm: React.FC = (props) => {
    const submit = (values: OwnFormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        setSubmitting(false);
    }
    return <div>
        <Formik initialValues={{id: ''}} onSubmit={submit}>
            {({isSubmitting}) => (
                <Form>
                    <Field type='text' name='amount'/>
                    <button type="submit" disabled={isSubmitting}>
                        convert
                    </button>
                </Form>
            )}
        </Formik>
        {/*<div className='b c'>
        <div className='a-row'>
            <div className='a' name='bitcoin'>{'\u20BF'}</div>
            <div className='a' name='ethereum'>{'\u29EB'}</div>
            <div className='a' name='dollar'>{'\u0024'}</div>
        </div>
        <button className='button c-toggle' onSubmit={hide}>{'\u005E'}</button>
    </div>*/}
    </div>
}

export default ConverterUnit