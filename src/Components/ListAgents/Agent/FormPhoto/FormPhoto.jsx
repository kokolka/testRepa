import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormPhoto = (props) => {
    //получения id последней фотографии
    let lastIdPhoto;
    if(props.fotoForPage[props.idAgent].length === 0){
        lastIdPhoto = 1;
    }else{
        lastIdPhoto = props.fotoForPage[props.idAgent][props.fotoForPage[props.idAgent].length - 1].id;
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
                        props.addPhoto(props.idAgent, values.img, values.id, values.date);
                        props.setFlagChangePhoto(false);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {(p) => {
                    return (
                        <Form>
                            <div>
                                <div>URL изображения:</div>
                                <Field type="text" name="img" />
                                <ErrorMessage name="img" component="div" />
                            </div>
                            <div>
                                <div>Дата загрузки:</div>
                                <Field type="date" name="date" />
                                <ErrorMessage name="date" component="div" />
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

export default FormPhoto;