import React from 'react'
import {Field, Form, Formik} from 'formik'

type PropsType = {
    amount: number
    changeAmount: (amount: number) => void
}

export const AmountForm: React.FC<PropsType> = (props) => {
    const submit = (values: {amount: number}, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        props.changeAmount(values.amount)
        setSubmitting(false);
    }

    return <div>
        <Formik initialValues={{amount: props.amount}} onSubmit={submit}>
            {({isSubmitting}) => (
                <Form>
                    <Field type='text' name='amount'/>
                    <button type="submit" disabled={isSubmitting}>
                        +
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}