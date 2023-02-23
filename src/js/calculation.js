



export function calculation(result) {
   const num = result.innerHTML.split(/[^.\d]/g)
   const digit = result.innerHTML.split(/[.\d]/g).filter(e => e)
    
    const digits = {
        '*': Number(num[0]) * Number(num[1]),
        '-': Number(num[0]) - Number(num[1]),
        '+': Number(num[0]) + Number(num[1]),
        '/': Number(num[0]) / Number(num[1])
    }
    return calculations(digit.join(), digits)
 }

 function calculations(digit, digits) {
    if(digits[digit]) {
        return   Number.isInteger(digits[digit]) 
            ? digits[digit] 
            : digits[digit].toFixed(2)
    }
 }
 