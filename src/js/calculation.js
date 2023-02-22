



export function calculation(result, operador) {
    let digit = result.innerHTML.split('')
    let number = result.innerHTML.match(/[.\d]/g)
    let number1 = null

    digit.forEach(element => {
        if(element === '*') {
            return            
        }
        console.log(element)
        
    });

    
    // const digits = {
    //     '*': Number(number[0]) * Number(number[1]),
    //     '-': Number(number[0]) - Number(number[1]),
    //     '+': Number(number[0]) + Number(number[1]),
    //     '/': Number(number[0]) / Number(number[1])
    // }

    // if(digits[digit[0]]) {
    //     return digits[digit[0]]
    // }
    
 }