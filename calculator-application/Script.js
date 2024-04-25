let input = '';

// function appendtoDisplay(value) {
//     document.getElementById("input").value = input;
//     input += value;
// }

const calcInput = document.getElementById("input");

console.log(calcInput)

function appendtoDisplay(value) {
    calcInput.value += value;
    console.log(calcInput.value)
}

function clearDisplay() {
    document.getElementById("input").value = '';
    input = '';
}

console.log("appendInput");

function calculate() {
    try {
        const calcInput = document.getElementById('input')
        let numericValue = calcInput.value.slice(4, calcInput.value.length - 1);

        switch (calcInput.value.slice(0, 3)) {
            case 'sin':
                calcInput.value = Math.sin(Number(numericValue)).toString()
                break;
            case 'cos':
                calcInput.value = Math.cos(Number(numericValue));
                break;
            case 'tan':
                calcInput.value = Math.tan(Number(numericValue));
                break;
            case 'log':
                calcInput.value = Math.log(Number(numericValue));
                break;  
            default:
                calcInput.value = eval(calcInput.value);
                break;
        }
    }
    catch (error) {
        document.getElementById("input").value = 'Error occured!';
    }   
}

// function calculateSquare() {
//     input = Math.sqrt(eval(input));
//     document.getElementById("input").value = input;
// }

// function calculatePercentage() {
//     input = eval((input) / 100);
//     document.getElementById("input").value = input;
// }

// function calculateFactorial() {
//     input = eval(input);
//     let result = 1;
//     for (let i = 2; result <= num; i++) {
//         result = i * i;
//     }
//     document.getElementById("input").value = input;
//     input = result;
// }

function calculateTrig(func) {
    let angle = eval(input);
    if (func === 'sin') {
        input = Math.sin(Math.PI / 180);
    }
    else if (func === 'cos') {
        input = Math.cos(angle * (Math.PI / 180));
    }
    else if (func === 'tan') {
        input = Math.tan(angle * (Math.PI / 180));
    }
    document.getElementById("input").value = input;
}

function logFunction(base) {
    const inputValue = parseFloat(input);
    input = Math.log(inputValue) / Math.log(base);
    document.getElementById("input").value = input;
}

function exponent(constant) {
    input += constant;
    document.getElementById("input").value = input;

}