import React from "react";
import s from "./Basement.module.css";

let initialData = {
    yearOfFoundation: 1992,
    thisYear: 2020,
    companyName: 'Честный Агент',
    phoneNumber: '8(495)150-21-12'
}

const Basement = () => {
    return (
        <div className={s.basement_box}>
            <div className={s.basement_box__text_box}>
                <div>
                    <span>&copy;</span>
                    <span>{`${initialData.yearOfFoundation}-${initialData.thisYear} ${initialData.companyName} `}</span>
                    <span>&copy;</span>
                    <span>{` Все права защищены`}</span>
                </div>
                <div>
                    {initialData.phoneNumber}
                </div>
            </div>
        </div>
    );
}

export default Basement;