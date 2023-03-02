const operators = {
    ".":".", 
    "/":"/",
    "*":"*", 
    "-":"-", 
    "+":"+" 
 }

export function calculation(result) {
    if(checkCorrectInformation(result)) {
        let response = eval(result.innerHTML)
        return response
    }
    return result.innerHTML
 }



 export const checkCorrectInformation = (result) => {
    const nums = result.innerHTML
    const index = nums.length - 1 
    if(nums[index] == operators[nums[index]]) {
        return false
    }
    return true
 }