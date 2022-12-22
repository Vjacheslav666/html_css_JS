// Задача 1:
function nameuser() {
    const name = document.getElementById("name").value;
    console.log(name);
    const result = `Привет ${name}!`;
    document.getElementById("result1").value = result;
}
// Задача 2:
function calc(operation) {
    let numberOne = parseFloat(document.getElementById("num1").value);
    let numberTwo = parseFloat(document.getElementById("num2").value);
    let funct = '+_*/';

    if (!funct.includes(operation)) {
        result2 = `Доступны только символы ${funct}!!!`;
    }

    switch (operation) {
        case (!funct.includes(operation)):
            result2 = `Доступны только символы ${funct}!!!`;
            break;
        case '+':
            result2 = numberOne + numberTwo;
            break;
        case '-':
            result2 = numberOne - numberTwo;
            break;
        case '*':
            result2 = numberOne * numberTwo;
            break;
        case '/':
            result2 = (numberTwo === 0)? "На ноль делить нельзя!": numberOne / numberTwo;
            // if (numberTwo === 0) {
            //     result2 = "На ноль делить нельзя!";
            //     break;
            // }
            // result2 = numberOne / numberTwo;
            // break;
    }
    document.getElementById("result2").value = result2;
}

// Задача 3:
function check() {
    const number = parseInt(document.getElementById("number").value);
    console.log(number);

    if (number >= 10 && number <= 19) {
        result3 = `${number} яблок`;
    } else if (number % 10 === 1) {
        result3 = `${number} яблоко`;
    } else if (number % 10 < 5 && number % 10 > 0) {
        result3 = `${number} яблока`;
    } else {
        result3 = `${number} яблок`;
    }

    document.getElementById("result3").value = result3;
}