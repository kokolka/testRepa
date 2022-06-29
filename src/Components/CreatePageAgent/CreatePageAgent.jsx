import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ArrayImgAgent from "../common/ArrayImgAgent/ArrayImgAgent";
import PhotosForPageWithForm from "../common/PhotosForPageWithForm/PhotosForPageWithForm";
import DeleteElement from "../../assets/image/Delete.png";
import AddElement from "../../assets/image/Regular add.png";
import BackArrow from "../../assets/image/Back arrow.png";

const CreatePageAgent = (props) => {
    let [toggleAdd, setToggleAdd] = useState(false);
    let [changeData, setChangeData] = useState(false);
    let [flagRedirect, toggleFlagRedirect] = useState(false);

    if (!props.UserId) {//редирект на страницу логина, если пользователь не авторизован
        return <Navigate to="../login" />;
    }

    let arrayPages = Object.keys(props.AboutAgent.pageData);
    let lastIdPage = arrayPages[arrayPages.length - 1]; //получение последнего ID страницы агента

    return (
        <div>
            <div onClick={() => {
                props.clearPhotoCreatePage(); //отчиста временного хранилища фотографий
            }}>
                <NavLink to='../'> 
                    <img src={BackArrow} alt="back" />
                </NavLink>
            </div>
            <ArrayImgAgent
                idAgent={null} fotoForPage={props.AboutAgent.photoForCreatePage}
                deleteImgForCreate={props.deletePhotoCreatePage} />
            <PhotosForPageWithForm
                idAgent={null} addPhoto={props.addPhotoCreatePage}
                fotoForPage={props.AboutAgent.photoForCreatePage}
                contactID={props.UserId} UserId={props.UserId} />
            <Formik
                initialValues={{
                    id: `${(1 + + lastIdPage)}`, contactId: `${props.UserId}`,
                    shortNameAgent: '', businessEntity: '', contractNo: '', date: '',
                    type: []
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
                        props.addNewPage(values.id, values.contactId, values.shortNameAgent, values.businessEntity, values.contractNo, values.type);
                        props.clearPhotoCreatePage(); //отчиста временного хранилища фотографий
                        toggleFlagRedirect(true);
                        setSubmitting(false);
                    }, 400);
                }}>
                {(p) => {
                    let keys = 0;

                    let elementArray = p.values.type.map(el => { //отображение элементов в типе компании
                        keys = keys + 1;
                        return (<div key={keys}>
                            <span>{el}</span>
                            <span onClick={() => {
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

                    if(flagRedirect === true){
                        return <Navigate to="../login" />;
                    }

                    return (<Form>
                        <div>
                            <div>Название компании:</div>
                            <Field type="text" name="shortNameAgent" />
                            <ErrorMessage name="shortNameAgent" component="div" />
                        </div>
                        <div>
                            <div>Тип юр. лица:</div>
                            <select name="businessEntity" onChange={p.handleChange} onBlur={p.handleBlur}>
                                <option value={''} label={''}></option>
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
                            <div>Контракт:</div>
                            <Field type="text" name="contractNo" />
                            <ErrorMessage name="contractNo" component="div" />
                        </div>
                        <div>
                            <div>Дата создания фирмы:</div>
                            <Field type="date" name="date" />
                            <ErrorMessage name="date" component="div" />
                        </div>
                        <div>
                            <div>Тип оказываемых услуг:</div>
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
                                    Добавить <img src={AddElement} alt="add" />
                                </div>}
                            <ErrorMessage name="type" component="div" />
                        </div>
                        <button type="submit" disabled={p.isSubmitting}>
                            Создать карточку фирмы
                        </button>
                    </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default CreatePageAgent;