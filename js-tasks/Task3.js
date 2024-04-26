function compressString() {
    let output = '';
    let count = 1;

    for (i = 0; i < input.length; i++) {

        while(input[i] === input[i + 1]){
            count++;
            i++;
        }

        output += input[i] + count;
        count = 1;
    }
    return output;
}

const input = 'aaabbcddaa';
console.log(compressString(input));