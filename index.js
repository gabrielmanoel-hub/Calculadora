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


const bnt = document.querySelectorAll('button')
bnt.forEach((element) => {
   element.addEventListener('click',(element) => {
      allClear(element)

      if(element && checkRepeats(element.target.id)) return

      textOutput(element)
      if(element.target.id === '=') {
         result.innerHTML = calculation(result, operator);
      }
      
      clear(element)
   })
})

function textOutput(element) {
   if(/[^=AC]/g.test(element.target.id)) {
      result.innerHTML += element.target.id
   }
}



function allClear(element) {
   if(element.target.id === 'AC') {
      result.innerText = ''
   }
}

function clear(element) {
   if(element.target.id === 'C') result.innerText = result.innerText.slice(0, -1)
}


function checkRepeats(element) {
   let operadores = Object.values(operator)
   let boolean = null
      operadores.forEach((e) => {
         if(result.innerText.includes(e) && element === e) {
            boolean = true
         }
      })
      return boolean
}
