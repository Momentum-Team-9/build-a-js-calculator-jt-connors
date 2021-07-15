const display = document.getElementById('display')
const calc = document.querySelector('.calc')
let equals = document.getElementById('equals')
let clear = document.querySelector("#clear")

calc.addEventListener('click', function(event) {
  display.innerText += event.target.innerText
  console.log(display.innerText)
})

equals.addEventListener('click', function (event){
  console.log(eval(display.innerText))
  display.innerText = display.innerText + event.target.innerText + eval(display.innerText)
})

clear.addEventListener('click',
  function (event){
  location.reload()
})