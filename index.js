const caulculation = document.getElementById("calculation")
const inputVal = document.getElementById("xinput")
const randomResult = document.getElementById("random-result")
const randomInput = document.getElementById("random-input")
const btnRandom = document.getElementById('btnRandom')

const solve = (e) => {
  const parsedValue = parseInt(e.target.value)
  let calculatedValue = 0
  if (!isNaN(parsedValue)){
    calculatedValue = ((6.51*parsedValue)/8)
  }
  caulculation.innerText = calculatedValue
}

const solveRandom = () => {
  console.log("trigger")
  const parsedValue = parseInt(randomInput.value)
  let calculatedValue = 0
  if (!isNaN(parsedValue)){
    calculatedValue = Math.floor(Math.random() * parsedValue) + 1;
  }
  randomResult.innerText = calculatedValue
}

inputVal.addEventListener('input',solve)
randomInput.addEventListener('input', solveRandom)
btnRandom.addEventListener('click', solveRandom)
