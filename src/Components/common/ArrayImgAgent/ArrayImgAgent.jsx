import React from "react";
import DeletePhoto from "../../../assets/image/Dalete photo.png";
import s from "./ArrayImgAgent.module.css";

const ArrayImgAgent = (props) => {

    let splitString = (str) => { //получение название картинки из пути
        let result;
        result = str.split('/');
        if (result[0] === 'https:' || result[0] === 'http:') { //если изображение получено из url
            result = result[result.length - 1].split('?');
            result = result[0];
        } else {
            result = result[result.length - 1];
            result = result.split('.');
            result = `${result[0]}.${result[result.length - 1]}`;
        }
        return result;
    }

    let changeDataStile = (date) => { //преобразование даты к типу: "24 июня 2022"
        let year = date.substr(0, 4);
        let month = date.substr(5, 2);
        let day = date.substr(8, 2);

        switch (month) {
            case '01': month = "января"; break;
            case '02': month = "февраля"; break;
            case '03': month = "марта"; break;
            case '04': month = "апреля"; break;
            case '05': month = "мая"; break;
            case '06': month = "июня"; break;
            case '07': month = "июля"; break;
            case '08': month = "августа"; break;
            case '09': month = "сентября"; break;
            case '10': month = "октября"; break;
            case '11': month = "ноября"; break;
            case '12': month = "декабря"; break;
        }

        return `${day} ${month} ${year}`;
    }


    let arrowImg; //будет содержать массив с разметкой и фотками
    if (props.idAgent == null) { //если id агента не передали, то мы находимся в режиме создания страницы агента
        arrowImg = props.fotoForPage.map(el => {
            return (
                <div key={el.id} className={s.photo_element}>
                    <img src={el.img} />
                    <div className={s.photo_element__name}>
                        {splitString(el.img)}
                    </div>
                    <div className={s.photo_element__date}>
                        {changeDataStile(el.date)}
                    </div>
                    {/* удаление изображения в режиме создания страницы*/}
                    <div className={s.photo_element__delete}
                        onClick={() => { props.deleteImgForCreate(el.id) }}>
                        <img src={DeletePhoto} alt="del" />
                    </div>
                </div>
            )
        })
    } else {
        arrowImg = props.fotoForPage[props.idAgent].map(el => {
            return (
                <div key={el.id} className={s.photo_element}>
                    <img src={el.img} />
                    <div className={s.photo_element__name}>
                        {splitString(el.img)}
                    </div>
                    <div className={s.photo_element__date}>
                        {changeDataStile(el.date)}
                    </div>
                    {/* удаление изображения */}
                    {props.contactID == props.UserId
                        ? <div className={s.photo_element__delete}
                            onClick={() => { props.deleteImgFromPage(props.idAgent, el.id) }}>
                            <img src={DeletePhoto} alt="del" />
                        </div>
                        : null}
                </div>
            )
        })
    }
    return (
        <div>
            <div className={s.photo_box}>
                {arrowImg}
            </div>
        </div>
    );
}

export default ArrayImgAgent;