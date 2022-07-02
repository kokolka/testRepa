import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from '../FormGeneralInfo/FormGeneralInfo.module.css';

const FormPhoto = (props) => {
    //получения id последней фотографии
    let lastIdPhoto;
    if (props.idAgent == null) {//для режима создания страницы
        if (props.fotoForPage.length === 0) {
            lastIdPhoto = 0;
        } else {
            lastIdPhoto = props.fotoForPage[props.fotoForPage.length - 1].id;
        }
    } else {
        if (props.fotoForPage[props.idAgent].length === 0) {
            lastIdPhoto = 1;
        } else {
            lastIdPhoto = props.fotoForPage[props.idAgent][props.fotoForPage[props.idAgent].length - 1].id;
        }
    }

    return (
        <div>
            <Formik
                initialValues={{ img: '', id: (lastIdPhoto + 1), date: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.img) {
                        errors.img = 'Обязательно';
                    }
                    if (!values.date) {
                        errors.date = 'Обязательно';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        if (props.idAgent == null) {
                            props.addPhoto(values.img, values.id, values.date); //для создания страницы
                        } else {
                            props.addPhoto(props.idAgent, values.img, values.id, values.date);
                        }
                        props.setFlagChangePhoto(false);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {(p) => {
                    return (
                        <Form>
                            <div>
                                <div className={s.label}>URL изображения:</div>
                                <Field type="text" name="img" />
                                <ErrorMessage name="img" component="div" />
                            </div>
                            <div>
                                <div className={s.label}>Дата загрузки:</div>
                                <Field type="date" name="date" />
                                <ErrorMessage name="date" component="div" />
                            </div>
                            <div>
                                <button onClick={() => {props.setFlagChangePhoto(false)}}>
                                    Отмена
                                </button>
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

export default FormPhoto;