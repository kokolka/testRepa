const numberChange = (number) => { //преобразование телефонного номера
    let result = '';
    if (number[0] == 7) {
        result = `+${number[0]}`;
    }
    result = `${result} (${number.substr(1, 3)}) ${number.substr(4, 3)}-${number.substr(7, 2)}-${number.substr(9, 2)}`;

    return result;
}

export default numberChange;