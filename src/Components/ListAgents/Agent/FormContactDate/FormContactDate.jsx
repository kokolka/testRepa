import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormContactDate = (props) => {
    return (
        <div>
            <Formik
                initialValues={{ 
                    lastname: props.lastname, firstname: props.firstname, 
                    patronymic: props.patronymic, phone: props.phone, email: props.email
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Обязательно';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Неправильный адрес электронной почты';
                    }
                    if (!values.lastname) {
                        errors.lastname = 'Обязательно';
                    }else if (/[' ']/i.test(values.lastname)) {
                        errors.lastname = 'Неправильный ввод';
                    }
                    if (!values.firstname) {
                        errors.firstname = 'Обязательно';
                    }else if (/[' ']/i.test(values.firstname)) {
                        errors.firstname = 'Неправильный ввод';
                    }
                    if (/[' ']/i.test(values.patronymic)) {
                        errors.patronymic = 'Неправильный ввод';
                    }
                    if (!values.phone) {
                        errors.phone = 'Обязательно';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        props.setContactDate(props.userId, values.lastname, values.firstname, values.patronymic, values.phone, values.email);
                        props.changeFlag(false);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {(p) => {
                    return (
                        <Form>
                            <div>
                                <div>Фамилия:</div>
                                <Field type="text" name="lastname" />
                                <ErrorMessage name="lastname" component="div" />
                            </div>
                            <div>
                                <div>Имя:</div>
                                <Field type="text" name="firstname" />
                                <ErrorMessage name="firstname" component="div" />
                            </div>
                            <div>
                                <div>Отчество:</div>
                                <Field type="text" name="patronymic" />
                                <ErrorMessage name="patronymic" component="div" />
                            </div>
                            <div>
                                <div>Номер телефона:</div>
                                <Field type="tel" name="phone" />
                                <ErrorMessage name="phone" component="div" />
                            </div>
                            <div>
                                <div>Эл. почта:</div>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" />
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

export default FormContactDate;