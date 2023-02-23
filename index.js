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

const operator = {
   '.': '.',
   '/': '/',
   '*': '*',
   '+': '+',
   '-': '-',
   '=': '='
}


const getElement = document.querySelectorAll('button')
getElement.forEach((element) => {
   element.addEventListener('click',(element) => {
      
      sendElementToScreen(element)
      clear(element)
      cleanAll(element)
      limitRepeats(element)
      calculus(element)
      newCalculation(element)
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

const calculus = (element) => {
   if(element.target.id === '=') {
      result.innerHTML = eval(result.innerHTML.toString())
      console.log(result.innerHTML.split(/[.\d]/g).join())
   }
}

const newCalculation = (element) => {
   if(element.target.id === '=' && result.innerHTML.match(/\d/g)) {
      result.innerHTML = ''
   }
}
