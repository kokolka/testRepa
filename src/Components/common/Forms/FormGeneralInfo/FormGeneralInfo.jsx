import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DeleteElement from '../../../../assets/image/Delete.png';
import AddElement from '../../../../assets/image/Regular add.png';
import s from './FormGeneralInfo.module.css';

const FormGeneralInfo = (props) => {
    let [toggleAdd, setToggleAdd] = useState(false);
    let [changeData, setChangeData] = useState(false);

    return (
        <div>
            <Formik
                initialValues={{
                    shortNameAgent: props.shortName, businessEntity: props.businessEntity,
                    contractNo: props.contractNo, date: props.date, type: props.type
                }}
                validate={values => {
                    const errors = {};
                    if (!values.shortNameAgent) {
                        errors.shortNameAgent = 'Обязательно';
                    }
                    if (!values.businessEntity) {
                        errors.businessEntity = 'Обязательно';
                    }
                    if (!values.contractNo) {
                        errors.contractNo = 'Обязательно';
                    } else if (values.contractNo.length !== 5) {
                        errors.contractNo = 'Длина кода равна 5';
                    }
                    if (!values.date) {
                        errors.date = 'Обязательно';
                    }
                    if (!values.type) {
                        errors.type = 'Обязательно';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        props.setGeneralInfo(
                            props.idAgent, values.shortNameAgent, values.businessEntity,
                            values.contractNo, values.date, values.type
                        );
                        props.changeFlag(false);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {(p) => {
                    let keys = 0;

                    let elementArray = p.values.type.map(el => { //отображение элементов в типе компании
                        keys = keys + 1;
                        return (<div key={keys} className={s.element_type}>
                            <span className={s.element_type__text}>{el}</span>
                            <span className={s.element_type__img} onClick={() => {
                                deleteElementArray(el)
                            }}>
                                <img src={DeleteElement} alt="Delete" />
                            </span>
                        </div>)
                    })

                    let deleteElementArray = (el) => {//удаление элементов в типе компании
                        p.values.type = p.values.type.filter(e => e != el);
                        setChangeData(!changeData); //нужно для перезапуска перерисовки
                    }
                    let addElementToArrow = (el) => {//добавление элементов в типе компании
                        p.values.type.push(el);
                    }

                    return (
                        <Form>
                            <div>
                                <div className={s.label}>Название компании:</div>
                                <Field type="text" name="shortNameAgent" />
                                <ErrorMessage name="shortNameAgent" component="div" />
                            </div>
                            <div>
                                <div className={s.label}>Тип юр. лица:</div>
                                <select name="businessEntity" onChange={p.handleChange} onBlur={p.handleBlur}>
                                    <option value={p.values.businessEntity} label={p.values.businessEntity}>{p.values.businessEntity}</option>
                                    <option value={'ООО'} label={'ООО'}>ООО</option>
                                    <option value={'ИП'} label={'ИП'}>ИП</option>
                                    <option value={'АО'} label={'АО'}>ИП</option>
                                    <option value={'ПАО'} label={'ПАО'}>ИП</option>
                                    <option value={'НКО'} label={'НКО'}>ИП</option>
                                    <option value={'ОП'} label={'ОП'}>ИП</option>
                                </select>
                                <ErrorMessage name="businessEntity" component="div" />
                            </div>
                            <div>
                                <div className={s.label}>Контракт:</div>
                                <Field type="text" name="contractNo" />
                                <ErrorMessage name="contractNo" component="div" />
                            </div>
                            <div>
                                <div className={s.label}>Дата контракта:</div>
                                <Field type="date" name="date" />
                                <ErrorMessage name="date" component="div" />
                            </div>
                            <div>
                                <div className={s.label}>Тип услуг:</div>
                                {elementArray}
                                {toggleAdd == true
                                    ? <div>
                                        <select onChange={(e) => {
                                            setToggleAdd(false);
                                            addElementToArrow(e.target.value);
                                        }} onBlur={props.handleBlur}>
                                            <option value={''} label={''}></option>
                                            <option value={'agent'} label={'agent'}>agent</option>
                                            <option value={'contractor'} label={'contractor'}>contractor</option>
                                        </select>
                                    </div>
                                    : <div onClick={() => {
                                        setToggleAdd(true)
                                    }}>
                                        <img src={AddElement} alt="add" />
                                    </div>}
                                <ErrorMessage name="type" component="div" />
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

export default FormGeneralInfo;