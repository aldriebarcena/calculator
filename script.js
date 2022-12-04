function add(a,b) {
    const sum = a + b;
    return sum
}
function subtract(a,b){
    const difference = a - b;
    return difference
}
function multiply(a,b) {
    const product = a * b;
    return product
};
function divide(a,b) {
    const quotient = a / b;
    return quotient
}
function operate(num1, operator, num2) {
     if (operator == '+') {
         return add(num1, num2)
     } else if (operator == '-') {
         return subtract(num1, num2)
     } else if (operator == '*') {
         return multiply(num1, num2)
     } else if (operator == '/') {
         return divide (num1, num2)
     } else {
         return false
     }
 }



function displayNumber(num) {
    document.querySelector('#displayContainer')
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = num
    displayContainer.appendChild(content)
}

function displayOperation(operator) {
    document.querySelector('#displayContainer')
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = operator
    displayContainer.appendChild(content)
}
