//  Repeating string character according to the values given

function expandString (input){
    let output ='';
    let i = 0;
     while (i< input.length){
        const char = input [i];
        const count = parseInt(input [i + 1])
       
            output += char.repeat(count);
            i += count ? 2 : 1;
     }

     return output;
}

const input = 'a3b2c1d2a2';
console.log(expandString(input));
