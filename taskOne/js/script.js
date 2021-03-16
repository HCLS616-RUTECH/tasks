'use strict'
// Cумма квадратов
const findSumOfTheSquares = (n, firstNumber) => {
    let sum = Math.pow(firstNumber, 2);
    let lastNumber = n - 1;
    if (lastNumber > 0) {
        for (let i = 1; i <= lastNumber; i++) {
            sum += Math.pow((firstNumber + i), 2);
        }
    }
    return sum;
}
// Квадрат суммы
const findTheSquareOfSum = (n, firstNumber) => {
    let lastNumber = n - 1;
    let supportSum = 0;
    if (lastNumber > 0) {
        for (let i = lastNumber; i >= 1; i--) {
            supportSum += i;
        }
    }
    let sum = firstNumber * n + supportSum;
    let square = Math.pow(sum, 2);
    return square;
}
// Основная функция
const sumSquareDifference = (n, firstNumber = 1) => {
    let isSuitable = false;
    let currentN = n;
    let currentFirstNumber = firstNumber;
    switch (true) {
        // Все значения переданы корректно
        case typeof n === 'number' && n > 0 && typeof firstNumber === 'number' && firstNumber > 0:
            isSuitable = true;
            break;
        // n передано в виде строки
        case typeof n === 'string' && typeof firstNumber === 'number' && firstNumber > 0:
            currentN = +n;
            if (!isNaN(currentN) && currentN > 0) {
                isSuitable = true;
            }
            break;
        // firstNumber передано в виде строки
        case typeof firstNumber === 'string' && typeof n === 'number' && n > 0:
            currentFirstNumber = +firstNumber;
            if (!isNaN(currentFirstNumber) && currentFirstNumber > 0) {
                isSuitable = true;
            }
            break;
        // и n и firstNumber переданы в виде строк
        case typeof n === 'string' && typeof firstNumber === 'string':
            currentN = +n;
            currentFirstNumber = +firstNumber;
            if (!isNaN(currentN) && currentN > 0 && !isNaN(currentFirstNumber) && currentFirstNumber > 0) {
                isSuitable = true;
            }
            break;
    }
    if (isSuitable) {
        let sumOfTheSquares = findSumOfTheSquares(currentN, currentFirstNumber);
        let theSquareOfSum = findTheSquareOfSum(currentN, currentFirstNumber);
        return theSquareOfSum - sumOfTheSquares;
    } else {
        return 'Ошибка! Передано некорректное значение.';
    }
}

console.log(sumSquareDifference('10'));