
export function changeDigits(digits) {
   
    switch(digits) {
        case '&divide':
            return '/'
        case 'x':
            return  '*'
        default:
            return digits
       
    }
}

export function resetDivisor(digits) {
   
    switch(digits) {
        case '/':
            return '&divide' 
        case '*':
            return 'x' 
        default:
            return digits
       
    }
}

