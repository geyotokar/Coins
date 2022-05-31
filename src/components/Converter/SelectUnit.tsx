import React from 'react'
import {Field, Form, Formik} from 'formik'

export const SelectUnit: React.FC = () => {
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

type OwnFormType = {
    id: string
}