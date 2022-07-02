import React, { useState } from "react";
import RegularButton from "../../../assets/image/Regular add.png";
import FormPhoto from "../Forms/FormPhoto/FormPhoto";
import s from "./PhotosForPageWithForm.module.css";

const PhotosForPageWithForm = (props) => {
    let [flagChangePhoto, setFlagChangePhoto] = useState(false); //флаг отвечающий за отображение формы загрузки фото

    return (
        <div>
            {flagChangePhoto === true
                ? <FormPhoto
                    fotoForPage={props.fotoForPage} idAgent={props.idAgent}
                    setFlagChangePhoto={setFlagChangePhoto} addPhoto={props.addPhoto}
                />
                : props.contactID == props.UserId
                    ? <div className={s.add}>
                        <div className={s.add_img} onClick={() => { setFlagChangePhoto(true) }}>
                            <span>
                                <img src={RegularButton} alt="add" />
                            </span>
                            <span>
                                ДОБАВИТЬ ИЗОБРАЖЕНИЕ
                            </span>
                        </div>
                    </div>
                    : null}
        </div>
    );
}

export default PhotosForPageWithForm;