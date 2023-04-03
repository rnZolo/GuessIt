// // const lives = document.querySelectorAll('.lifepts')
// //   const guessf = document.createElement('input')
// //   guessf.type = 'number'
// //   guessf.max = 100
// //   guessf.min = 1
// //   guessf.id = 'guessfield'
// // lowOrHi.appendChild(guessf)
// // for(let i = 0; i < 10; i++){
// //     const spanContent = createElement('span')
// //     spanContent.innerHTML = '*'
// //     guessCounter.appendChild(spanContent)
// // }

// // lives.map(function count() {
// //     lives.innerHTML += `<3` 
// //     console.log(lives)
// // })

// let randomNumber = Math.floor(Math.random() * 100) + 1; // generate random number from 1-100

// const guessCounter = document.querySelector('.attemps-counter'); // remaining attemps display   
// const prevGuess = document.querySelector('.prev-guess'); // compilation of guesses display
// const lowOrHi = document.querySelector('.high-low');    // high or low interaction dialogue
// const rightAnswer = document.querySelector('.right-answer') // right answer container

// const userGuess = document.querySelector('#guess'); //input field 
// const submitBtn = document.querySelector('input[type="submit"]'); // submit button


// const centered = document.querySelector('.centered')

// submitBtn.addEventListener('click',checkguess) // function to validate users guess
// // guessCounter.textContent = 10
// prevGuess.textContent = 'No Guesses Yet' // initial txt output value

// // if (userGuess.value.length == 3){ // check if input field contain 3substring/char
// //     submitBtn.focus()
// // }

// function checkguess() {
//     const guess = Number(userGuess.value) // passing the value in inputfield to another variables

//     if (guessCount == 1){
//         prevGuess.textContent = `Previous Guess : ${guess}, ` // initial output if first guess
//     }else{
//         prevGuess.textContent += `${guess}, ` // else add concat it on the end of the initial output
//     }
    
//     if (guess != randomNumber){ 
//         lowOrHi.textContent = 'Wrong '
//         lowOrHi.style.backgroundColor = 'red'
//         if (guess < randomNumber){ // set the input field depends on the user guess
//             lowOrHi.textContent += `${guess} is lesser value` 
//         }else if (guess > randomNumber){// set the input field depends on the user guess
//             lowOrHi.textContent += `${guess} is greater value`
//         } 
//     }else{
//         lowOrHi.textContent = 'GREAT YOU GOT THE RIGHT ANSWER'
//         lowOrHi.style.backgroundColor = 'green'
//     }

//     if (guessCount == 9){
//         // guessCounter.textContent = 'last Chance'
//     }else{
//         // guessCounter.textContent = 10 - guessCount
//         // add pop here
        
//     }

//     if (guessCount === 10 || guess === randomNumber){
//         rightAnswer.textContent = `${randomNumber}`
//         rightAnswer.style.backgroundColor = 'green'
//         rightAnswer.style.color = 'white'
//         gameOver()   
//     }

    
//     if (userGuess.value.length != 0 ){
//         submitBtn.focus()
//     }

//     console.log(guessCount)
//     userGuess.value = ''
//     userGuess.focus()
//     guessCount++
// }

// function gameOver() {
//     userGuess.disabled = true;
//     submitBtn.disabled = true;
//     resetButton = document.createElement('button')
//     resetButton.textContent = 'Play Again'
//     centered.appendChild(resetButton)
//     resetButton.addEventListener('click', resetGame)
// }

// function resetGame() {
//     userGuess.disabled = false
//     submitBtn.disabled = false
//     // guessCounter.textContent = 10
//     guessCounter.innerHTML = lives.lifecounts()
//     prevGuess.textContent = 'No Guesses Yet'
//     guessCount = 1
//     lowOrHi.textContent = ''
//     lowOrHi.style.backgroundColor = 'white'
//     rightAnswer.style.backgroundColor = 'white'
//     rightAnswer.textContent = ''
//     ce.parentNode.removeChild(resetButton);
//     randomNumber = Math.floor(Math.random() * 100) + 1;
// }



// userGuess.focus()
// let guessCount = 1;
// let resetButton;


// // let guessCharacter = document.querySelector('.guesscharacter')
// // guessCharacter =  Image.src = './src/guessDefault.svg' 
