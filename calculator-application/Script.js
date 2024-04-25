let input = '';


const calcInput = document.getElementById("input");

console.log(calcInput)

function valueDisplay(value) {
    calcInput.value += value;
    console.log(calcInput.value)
}

function clearDisplay() {
    document.getElementById("input").value = '';
}


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

function clearEachElement(){
   const input = document.getElementById("input");
   const currentValue = input.value;
   const newValue = currentValue.slice(0,-1);
   input.value = newValue;
}
