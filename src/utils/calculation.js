export function calculation(result) {
    let response = eval(result.innerHTML)
    if(response) {
        return response
    }
    return null
 }