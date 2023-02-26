



export function calculation(result) {
    const numStart = result.innerHTML.match(/^-?[\d]+[.]?[\d]+|^[-]?\d/g)
    const numEnd = result.innerHTML.match(/\d+[.]?\d+$|\d$/g)
    const digit = result.innerHTML.split(/[.\d]/g).filter(e => e)
    const checkOperatorNumbers = digit.length > 1 ? digit[1] : digit[0]
    const digits = {
        '*': Number(numStart[0]) * Number(numEnd[0]),
        '-': Number(numStart[0]) - Number(numEnd[0]),
        '+': Number(numStart[0]) + Number(numEnd[0]),
        '/': Number(numStart[0]) / Number(numEnd[0])
    }
    return calculations(checkOperatorNumbers, digits)
 }

 function calculations(digit, digits) {
    if(digits[digit]) {
        return digits[digit]   
    }
 }