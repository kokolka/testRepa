import React from "react";

let initialData = {
    yearOfFoundation: 1992,
    thisYear: 2020,
    companyName: 'Честный Агент',
    phoneNumber: '8(495)150-21-12'
}

const Basement = () =>{
    return(
        <div>
            <p> {`'C' ${initialData.yearOfFoundation}-${initialData.thisYear} ${initialData.companyName} 'С' Все права защищены`}</p>
            <p> {initialData.phoneNumber}</p>
        </div>
    );
}

export default Basement;