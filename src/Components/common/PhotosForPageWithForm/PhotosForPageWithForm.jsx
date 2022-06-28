import React, { useState } from "react";
import RegularButton from "../../../assets/image/Regular add.png";
import FormPhoto from "../Forms/FormPhoto/FormPhoto";

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
                    ? <div onClick={() => { setFlagChangePhoto(true) }}>
                        <span>
                            <img src={RegularButton} alt="add" />
                        </span>
                        <span>
                            ДОБАВИТЬ ИЗОБРАЖЕНИЕ
                        </span>
                    </div>
                    : null}
        </div>
    );
}

export default PhotosForPageWithForm;