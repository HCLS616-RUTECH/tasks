import { length } from './strings.js';
import { substr } from './strings.js';

const reverseSupport = (finalString, step, currentString) => {
    let currentSubstr = substr(currentString, step);
    if (step === 1) {
        return `${finalString}${currentSubstr}`;
    } else {
        return reverseSupport(`${finalString}${currentSubstr}`, step - 1, currentString);
    }
}

const reverse = (value) => {
    let currentString = value;
    if (typeof value !== 'string') {
        currentString = value + [];
    }
    let currentLenght = length(currentString);
    if (currentLenght === 0) {
        return 'Ошибка! Передано некорректное значение.';
    } else {
        let finalString = reverseSupport(``, currentLenght, currentString);
        return finalString;
    }
}

export { reverse };