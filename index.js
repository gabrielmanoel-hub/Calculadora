import { digits } from "./src/js/digits.js";
import { calculation } from "./src/js/calculation.js"
import {changeDigits, resetDivisor} from './src/js/filterDigits.js'

const numericalSequence = document.querySelector("#digit")
const result = document.getElementsByClassName('result')[0]

digits.forEach((digit) => {
   numericalSequence.innerHTML += `
   <button class='button' id='${changeDigits(digit)}'> 
      ${resetDivisor(digit)}</button>`
})

const getElement = document.querySelectorAll('button')
getElement.forEach((element) => {
   element.addEventListener('click',(element) => {
      sendElementToScreen(element)
      clear(element)
      cleanAll(element)
      limitRepeats(element)
      calculus(element)
      newCalculation(element)
      // recalculate()
   })
})

const sendElementToScreen = (element) => {
   if(element.target.id.match(/[.\d]/g)) {
      result.innerHTML += element.target.id
   } 
}

const limitRepeats = (element) => {
   if(element.target.id.match(/[^\dAC.=]/g)) {
       result.innerHTML += element.target.id
   } 

}

const clear = (element) => {
   if(element.target.id === 'C') {
      result.innerHTML = result.innerHTML.slice(0, -1)
   }
}

const cleanAll = (element) => {
   if(element.target.id === 'AC') {
      result.innerHTML = ''
   }
}

let boolean = false;
const calculus = (element) => {
   if(element.target.id === '=') {
      boolean = true
      result.innerHTML = calculation(result)
   }
}


const newCalculation = (element) => {
   if(boolean && element.target.id.match(/\d/g)) {
      boolean = false
      result.innerHTML = ''
      result.innerHTML = element.target.id
   }
}

