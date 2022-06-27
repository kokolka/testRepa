import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Navigate } from "react-router-dom";

const Login = (props) => {
    let [alertMessage, setAlertMessage] = useState(''); //если есть ошибка связанная с ID, то она появится в alertMessage
    let [flagRegistrationForm, toggleFlagRegistrationForm] = useState(false);//флаг переключения между формой логина и регистрации

    if (props.UserId) { //если пользователь авторизован, то перенаправить на страницу с профилем
        return <Navigate to="../" />;
    }

    return (
        <div>
            Login
            <div>
                {flagRegistrationForm === true
                    ? <div>
                        <Formik
                            initialValues={{ newUserID: '', lastname: '', firstname: '', patronymic: '', phone: '', email: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Обязательно';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Некорректный email';
                                }
                                if (!values.newUserID) {
                                    errors.newUserID = 'Обязательно';
                                }
                                if (!values.lastname) {
                                    errors.lastname = 'Обязательно';
                                }
                                if (!values.firstname) {
                                    errors.firstname = 'Обязательно';
                                }
                                if (!values.phone) {
                                    errors.phone = 'Обязательно';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    if (!props.contacts[values.newUserID]) { //проверка на похожие ID
                                        //добавление данных пользователя в BBL
                                        props.addNewPersona(values.newUserID, values.lastname, values.firstname, values.patronymic, values.phone, values.email);
                                        props.setUserId(values.newUserID); //авторизация
                                        setAlertMessage('');
                                    } else {
                                        setAlertMessage('Такой ID пользователя уже используется');
                                    }
                                    toggleFlagRegistrationForm(false);
                                    props.addNewPersona(values.newUserID, values.lastname, values.firstname, values.patronymic, values.phone, values.email);
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div>
                                        <div>Ваш ID:</div>
                                        <Field type="text" name="newUserID" />
                                        <ErrorMessage name="newUserID" component="div" />
                                        <div>
                                            {alertMessage != ''
                                                ? alertMessage
                                                : null
                                            }
                                        </div>
                                    </div>
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
                                        <div>Номер вашего телефона:</div>
                                        <Field type="tel" name="phone" />
                                        <ErrorMessage name="phone" component="div" />
                                    </div>
                                    <div>
                                        <div>Ваш email:</div>
                                        <Field type="email" name="email" />
                                        <ErrorMessage name="email" component="div" />
                                    </div>
                                    <button type="submit" disabled={isSubmitting}>
                                        Регистрация
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    : <Formik
                        initialValues={{ UserId: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.UserId) {
                                errors.UserId = 'Обязательное поле';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                if (!props.contacts[values.UserId]) { //если ID пользователя нет в BBL
                                    setAlertMessage('Нет пользователя с таким ID. Вам нужно зарегистрироваться.');
                                } else {
                                    setAlertMessage('');
                                    props.setUserId(values.UserId);
                                }
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div>
                                    <div>Введите свой контактный ID</div>
                                    <Field type="text" name="UserId" />
                                    <ErrorMessage name="UserId" component="div" />
                                    <div>
                                        {alertMessage != ''
                                            ? alertMessage
                                            : null
                                        }
                                    </div>
                                </div>
                                <button type="submit" disabled={isSubmitting}>
                                    Вход
                                </button>
                                <button onClick={() => {
                                    toggleFlagRegistrationForm(true);
                                    setAlertMessage('');
                                }}>
                                    Регистрация
                                </button>
                            </Form>
                        )}
                    </Formik>}
            </div>
        </div>
    );
}

export default Login;