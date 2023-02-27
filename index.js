import { digits } from "./src/js/digits.js";
import { calculation } from "./src/js/calculation.js"
import {changeDigits, resetDivisor} from './src/js/filterDigits.js'

const numericalSequence = document.querySelector("#digit")
const result = document.getElementsByClassName('result')[0]
let signal = false
let boolean = false;
digits.forEach((digit) => {
   numericalSequence.innerHTML += `
   <button class='button' id='${changeDigits(digit)}'> 
      ${resetDivisor(digit)}</button>`
})

const getElement = document.querySelectorAll('button')
getElement.forEach((element) => {
   element.addEventListener('click',(element) => {
      number(element)
      clear(element)
      cleanAll(element)
      operators(element)
      calculus(element)
      newCalculation(element)
   })
})

const number = (element) => {
   if(element.target.id.match(/[\d]/g)) {
      result.innerHTML += element.target.id
      signal = false
   } 
}

const operators = (element) => {
   if(element.target.id.match(/[^\dAC=]/g)) {
      if(!signal) {
         signal = true
         result.innerHTML += element.target.id 
      }
      console.log(signal)
   }
}

const clear = (element) => {
   if(element.target.id === 'C') {
      signal = false
      result.innerHTML = result.innerHTML.slice(0, -1)
   }
}

const cleanAll = (element) => {
   if(element.target.id === 'AC') {
      signal = false
      result.innerHTML = ''
   }
}

const calculus = (element) => {
   if(element.target.id === '=') {
      signal = false
      result.innerHTML = calculation(result)
   }
}

const newCalculation = (element) => {
   if(!isNaN(element.target.innerHTML) && boolean ) {
      boolean = false
      result.innerHTML += element.target.id
   }
}



