// Displaying the sum of the evan numbers in the object

const input1 = {
    a: {
        1: 2,
        2: {
            c: 4,
            d: 3,
        },
    },
    c: 6,
    f: {
        e: {
            k: 2,
        }
    }
}

const input2 = {
    "a": 2,
    "b": {
        "x": 4,
        "y": {
            "foo": 3,
            "z": {
                "bar": 2
            }
        }
    }, "c": {
        "p": {
            "h": 2,
            "r": 5
        },
        "q": 'ball',
        "r": 5
    },
    "d": 1,
    "e": {
        "nn": {
            "lil": {
                2: 1
            }
        },
        "mm": 'car'
    }
};

function sumOfEvenNumbers(obj) {
    let sum = 0;

    function traverse(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                traverse(obj[key]);
            } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
                sum += obj[key];
            }
        }
    }

    traverse(obj);

}


console.log(sumOfEvenNumbers(input1));
console.log(sumOfEvenNumbers(input2));


