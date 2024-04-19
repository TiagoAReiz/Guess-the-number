let randomNumber = Math.floor(Math.random() * 100)
let tries = 0
function checkGuess() {
  let guess = document.getElementById("guess").value
  let message = document.getElementById("message")
  tries++
  if (guess == randomNumber) {
    message.innerHTML =
      "Congrats! You guessed correctly in " + tries + " attempts"
  } else if (guess < randomNumber) {
    message.innerHTML = "Your guess is too low"
  } else {
    message.innerHTML = "Your guess is too high"
  }
   document.getElementById("guess").value = ""
}
function resetGuess( ){
  randomNumber = Math.floor(Math.random() * 100)
  message.innerHTML = 'Reseted'
  document.getElementById("guess").value = ''
}