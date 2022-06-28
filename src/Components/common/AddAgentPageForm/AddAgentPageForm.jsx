import React from "react";
import { useState } from "react";
import RegularButton from "../../../assets/image/Regular add.png";
import ArrayImgAgent from "../ArrayImgAgent/ArrayImgAgent";
import FormGeneralInfo from "../Forms/FormGeneralInfo/FormGeneralInfo";
import PhotosForPageWithForm from "../PhotosForPageWithForm/PhotosForPageWithForm";

const AddAgentPageForm = (props) => {
    let [flagFormAddPage, toggleFlagFormAddPage] = useState(false);


    return (
        <div>
            {flagFormAddPage == true
                ? <div >
                    <div>
                        <FormGeneralInfo
                             />
                    </div>
                    <div>
                        ПРИЛОЖЕННЫЕ ФОТО
                        
                        <div>
                            
                        </div>
                    </div>
                </div>
                : <div onClick={() => { toggleFlagFormAddPage(true) }}>
                    <span>
                        <img src={RegularButton} alt="add" />
                    </span>
                    <span>
                        ДОБАВИТЬ СТРАНИЦУ АГЕНТА
                    </span>
                </div>}
        </div>
    );
}

export default AddAgentPageForm;