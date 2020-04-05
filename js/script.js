'use strict';

const isNum = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const getRandomNum = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCounter = function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
};

const gameRandom = function(attemps) {
    const randomNum = getRandomNum(1, 100);
    console.log(randomNum);
    
    const counter = getCounter();

    return (function checkNumber() {
        const count = counter();
        const inputNumber = prompt('Попробуйте угадать число');
        
        if (isNum(inputNumber)) {
            let repeat = false;
            if (count < attemps) {
                const num = +inputNumber;
                if (num > randomNum) {
                    alert('Загаданное число меньше');
                    return checkNumber();
                }
                if (num < randomNum) {
                    alert('Загаданное число больше');
                    return checkNumber();
                }
                repeat = confirm('Поздравляю, вы угадали число! Хотите еще раз?');
            } else {
                repeat = confirm('Количество попыток закончилось. Хотите сыграть еще раз?');
            }
            if(repeat) gameRandom(attemps);
        } else{
            if (inputNumber !== null) {
            alert('Введите число!');
            checkNumber();
            }
        }
        alert('До встречи!');
    }());
};

gameRandom(3);