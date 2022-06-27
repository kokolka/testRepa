import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Navigate } from "react-router-dom";

const Login = (props) => {

    if(props.appState.UserId){
        return <Navigate to="../" />;
    }

    return (
        <div>
            Login
            <div>
                <Formik
                    initialValues={{ UserId: ''}}
                    validate={values => {
                        const errors = {};
                        if (!values.UserId) {
                            errors.UserId = 'Required';
                        } 
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            props.setUserId(values.UserId);
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>Введите свой контактный ID</div>
                            <Field type="text" name="UserId" />
                            <ErrorMessage name="UserId" component="div" />
                            <button type="submit" disabled={isSubmitting}>
                                Login
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Login;