export const patterns = {
    phoneNumber: {
        regExp: /^\+?[0-9]*$/,
        msg: 'Numărul de telefonu nu este valid.'
    },
    onlyNumbers: {
        regExp: /^[0-9]\d*$/,
        msg: 'Trebuie să introduceți doar numere.'
    },
    onlyCharacters: {
        regExp: /^[a-zA-Z ]*$/,
        msg: 'Trebuie să introduceți doar caractere.'
    }
};
