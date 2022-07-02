import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from '../FormGeneralInfo/FormGeneralInfo.module.css';


const FormName = (props) => {
    return (
        <div>
            <Formik
                initialValues={{name: props.name}}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Обязательно';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        props.setName(props.idAgent, values.name);
                        props.changeFlag(false);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {(p) => {
                    return (
                        <Form>
                            <div>
                                <div className={s.label}>Название фирмы:</div>
                                <Field type="text" name="name" />
                                <ErrorMessage name="name" component="div" />
                            </div>
                            <div>
                                <button type="submit" disabled={p.isSubmitting}>
                                    Отправить
                                </button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default FormName;