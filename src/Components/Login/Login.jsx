import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Navigate } from "react-router-dom";
import BackArrow from "../../assets/image/Back arrow.png";
import s from "./Login.module.css";

const Login = (props) => {
    let [alertMessage, setAlertMessage] = useState(''); //если есть ошибка связанная с ID, то она появится в alertMessage
    let [flagRegistrationForm, toggleFlagRegistrationForm] = useState(false);//флаг переключения между формой логина и регистрации

    if (props.UserId) { //если пользователь авторизован, то перенаправить на страницу с профилем
        return <Navigate to="../" />;
    }

    return (
        <div className={s.main_box}>
            {flagRegistrationForm === true
                ? <div className={s.main_box__name}>
                    <span onClick={() => {
                        toggleFlagRegistrationForm(false);
                    }}>
                        <img src={BackArrow} alt="back" /></span>
                    <span>Регистрация</span>
                </div>
                : <div className={s.main_box__name}>Авторизация</div>}
            <div className={s.main_box__action_box}>
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
                            {(p) => (
                                <Form>
                                    <div>
                                        <div>Ваш ID:</div>
                                        <Field className={(p.errors.newUserID && p.touched.newUserID) ? s.error_field :''} type="text" name="newUserID" />
                                        <ErrorMessage  className={s.error_message} name="newUserID" component="div" />
                                        <div className={s.error_message}>
                                            {alertMessage != ''
                                                ? alertMessage
                                                : null
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <div>Фамилия:</div>
                                        <Field className={(p.errors.lastname && p.touched.lastname) ? s.error_field :''} type="text" name="lastname" />
                                        <ErrorMessage className={s.error_message} name="lastname" component="div" />
                                    </div>
                                    <div>
                                        <div>Имя:</div>
                                        <Field className={(p.errors.firstname && p.touched.firstname) ? s.error_field :''} type="text" name="firstname" />
                                        <ErrorMessage className={s.error_message} name="firstname" component="div" />
                                    </div>
                                    <div>
                                        <div>Отчество:</div>
                                        <Field className={(p.errors.patronymic && p.touched.patronymic) ? s.error_field :''} type="text" name="patronymic" />
                                        <ErrorMessage className={s.error_message} name="patronymic" component="div" />
                                    </div>
                                    <div>
                                        <div>Номер вашего телефона:</div>
                                        <Field className={(p.errors.phone && p.touched.phone) ? s.error_field :''} type="tel" name="phone" />
                                        <ErrorMessage className={s.error_message} name="phone" component="div" />
                                    </div>
                                    <div>
                                        <div>Ваш email:</div>
                                        <Field className={(p.errors.email && p.touched.email) ? s.error_field :''} type="email" name="email" />
                                        <ErrorMessage className={s.error_message} name="email" component="div" />
                                    </div>
                                    <button className={s.form_button} type="submit" disabled={p.isSubmitting}>
                                        Регистрация
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    // Форма авторизации
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
                        {(p) => (
                            <Form>
                                <div>
                                    <div>Введите свой контактный ID</div>
                                    <Field className={(p.errors.UserId && p.touched.UserId) ? s.error_field :''} type="text" name="UserId" />
                                    <ErrorMessage className={s.error_message} name="UserId" component="div" />
                                    <div>
                                        {alertMessage != ''
                                            ? alertMessage
                                            : null
                                        }
                                    </div>
                                </div>
                                <button className={s.form_button} type="submit" disabled={p.isSubmitting}>
                                    Вход
                                </button>
                                <button className={s.form_button} onClick={() => {
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