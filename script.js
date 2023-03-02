import { digits } from "./src/utils/digits.js";
import { calculation } from "./src/utils/calculation.js"
import { changeDigits, resetDivisor } from './src/utils/filterDigits.js'

const numericalSequence = document.querySelector("#digit")
const result = document.getElementsByClassName('result')[0]
let signal = false
let recalculates = false
let resetPoints = true
digits.forEach((digit) => {
   numericalSequence.innerHTML += `
   <button class='button' id='${changeDigits(digit)}'> 
      ${resetDivisor(digit)}</button>`
})

const getElement = document.querySelectorAll('button')
getElement.forEach((element) => {
   element.addEventListener('click', (element) => {
      const elements = element.target.id
      number(elements)
      clear(elements)
      cleanAll(elements)
      operators(elements)
      calculus(elements)
      resetPoint(elements)
      recalculate(elements)
      replaceOperators(elements)
   })
})

const number = (element) => {
   if (element.match(/[\d]/g)) {
      result.innerHTML += element
      signal = true
   }
}

const operators = (element) => {
   if (element.match(/[^.\dAC=]/g)) {
      if (signal) {
         signal = false
         resetPoints = true
         result.innerHTML += element
      }
   }
}

const clear = (element) => {
   if (element === 'C') {
      signal = true
      resetPoints = true
      result.innerHTML = result.innerHTML.slice(0, -1)
   }
}

const cleanAll = (element) => {
   if (element === 'AC') {
      signal = false
      resetPoints = true
      result.innerHTML = ''
   }
}

const calculus = (element) => {
   const screen = result.innerHTML.slice(-1)
   if(element == '=' && screen == '.') return
   if(element == '=' &&  result.innerHTML == '') return
   if (element == '=') {
      signal = false
      recalculates = true
      result.innerHTML = calculation(result)
   }
}

const recalculate = (element) => {
   if (recalculates && !isNaN(element)) {
      recalculates = false
      result.innerHTML = element
   } else if(recalculates && element == '.') {
      recalculates = false
      result.innerHTML = element
   }
}

const resetPoint = (element) => {
   if (resetPoints && element == '.') {
      resetPoints = false
      result.innerHTML += element
   }
}

const replaceOperators = (element) => {
   const operators = {
      "/":"/",
      "*":"*", 
      "-":"-", 
      "+":"+" 
   }
   const index = result.innerHTML.length - 1
   const screenContent = result.innerHTML
   if(operators[screenContent[index]] && operators[element]) {
      result.innerHTML = result.innerHTML.slice(0,-1) + element
   }
}
