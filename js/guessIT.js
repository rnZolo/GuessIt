// this will focus on creating UI using JS

const app = document.getElementById('root')

// create DOM elements
const interactWrapper  = document.createElement('div'),
bgQmark = document.createElement('div'),
curtain = document.createElement('div'),
curtainImg = document.createElement('Img'),
indicatorTab = document.createElement('div'),
lpcounter = document.createElement('div'),
lpTag = document.createElement('span'),
guessTag = document.createElement('span'),
guesserHero = document.createElement('div'),
heroBgCon = document.createElement('div'),
bgImg = document.createElement('img'),
heroCon = document.createElement('div'),
heroImg = document.createElement('img'),
playerFr = document.createElement('div'),
boxFr = document.createElement('div'),
boxSpot = document.createElement('div'),
boxCon = document.createElement('div'),
boxImg =  document.createElement('img'), 
rightACon = document.createElement('div'),
rightAspan =  document.createElement('div'),
rightAns =  document.createElement('h1'),
inputGrp = document.createElement('div'),
inputForm = document.createElement('div'),
inputLabel = document.createElement('div'),
labWrapper =  document.createElement('div'),
inputfield = document.createElement('input'),
submit = document.createElement('button'),
submitIcon = document.createElement('img'),
resetButton = document.createElement('button'),
resetIcon = document.createElement('img'),
footer = document.createElement('Footer'), 
ftrContent = document.createElement('p')

// insert the DOM elements
    // add multiple child inside parent
    function appendInside(chlds, prnt){
        for ( let chld of chlds){
            prnt.appendChild(chld)
        }
    }
let appChilds = [curtain, bgQmark, interactWrapper, inputGrp]
appendInside(appChilds, app)
curtain.appendChild(curtainImg)
curtainImg.src = './src/curtain.png'
let interactWrapperChilds = [playerFr, boxFr]
appendInside(interactWrapperChilds, interactWrapper)
let playerFrChilds = [indicatorTab, guesserHero]
appendInside(playerFrChilds, playerFr)
let indiTabChilds = [lpcounter]
appendInside(indiTabChilds, indicatorTab)
    lpcounter.appendChild(lpTag)
    lpTag.textContent = 'Attemps'
    let lpArr = [],
    lpSpanArr = [],
    lpHiLowArr = []
function createLp(){
    for(lp = 1; lp <= 10; lp++){
        let lpCon = document.createElement('div'),
        lpIcons = document.createElement('img'),
        lpGuessNo = document.createElement('div'),
        inputHiLow = document.createElement('div'),
        hiLowImg = document.createElement('img')

        lpcounter.appendChild(lpCon)
        let lpConChilds = [lpIcons, lpGuessNo, inputHiLow]
        appendInside(lpConChilds, lpCon)
        inputHiLow.appendChild(hiLowImg)

        rightAspan.style.display = 'none'
        lpIcons.src = './src/Hgreen.svg'
        hiLowImg.style.display = 'none'
        addClass(lpCon, ['indi-con'])
        addClass(lpIcons, ['indi-icon'])
        addClass(lpGuessNo, ['indi-guessed'])
        addClass(inputHiLow, ['hi-low'])
        lpArr.push(lpIcons)
        lpSpanArr.push(lpGuessNo)
        lpHiLowArr.push(hiLowImg)
    }
}
createLp()
    lpcounter.appendChild(guessTag)
    guessTag.textContent = 'Guessed'
let guesserHeroChilds = [heroBgCon, heroCon]
appendInside(guesserHeroChilds, guesserHero)
    heroBgCon.appendChild(bgImg).src = './src/bgbase.png'
    heroCon.appendChild(heroImg).src = './src/base.png'
boxFr.appendChild(boxSpot)
  boxSpot.appendChild(boxCon)
  boxSpot.appendChild(rightACon)
  rightACon.appendChild(rightAspan)
  rightAspan.appendChild(rightAns)
    boxCon.appendChild(boxImg).src = './src/box2.svg'
   inputGrp.appendChild(inputForm)
   inputForm.appendChild(labWrapper)
let labWrapperChilds = [inputLabel, inputfield, submit, resetButton]
appendInside(labWrapperChilds, labWrapper)

resetButton.addEventListener('click', resetGame)
submit.appendChild(submitIcon)
resetButton.appendChild(resetIcon)
app.parentNode.appendChild(footer)
footer.appendChild(ftrContent)

//insert text and apply attr
    inputLabel.textContent = 'GUESS'
    inputfield.type = 'text'
    inputfield.maxLength = 3
    inputfield.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, "").slice(0, 3);
    });
    inputfield.placeholder = '1 - 100'
    inputfield.disabled = false
    submit.type = 'submit'
    submitIcon.src = './src/lightbulb.svg'
    resetIcon.src = './src/replay.svg'
    resetButton.style.display = 'none'
    ftrContent.textContent = `Renz Sagge 2023`

    const imgsUsed = document.getElementsByTagName('img')
    for (const imgUse of imgsUsed){
        imgUse.draggable = false
    }
    
// Add class to created Elements
    // function to add class to everysingle element
    let elemnt, clss
    function addClass(elemnt, clss){
        elemnt.classList.add(...clss)
    }
addClass(app, ['flex-row'])
addClass(interactWrapper, ['inter-wrapper'])
addClass(bgQmark, ['cover'])
addClass(curtain, ['curtain'])
addClass(playerFr, ['half-fr'])
addClass(boxFr, ['half-fr'])
addClass(indicatorTab, ['flex-col', 'ten-fr'])
addClass(lpcounter, ['flex-col', 'tab'])
addClass(lpTag, ['tag'])
addClass(guessTag, ['tag'])
addClass(guesserHero, ['hero'])
addClass(heroBgCon, ['hero-bg', 'grid-cent'])
addClass(heroCon, ['hero-con', 'grid-cent'])
addClass(boxSpot, ['box-con'])
addClass(rightACon, ['box-box'])
addClass(rightAspan, ['right-ans'])
addClass(boxCon, ['box-box'])
addClass(inputGrp, ['grid-cent', 'pos-fx'])
addClass(inputForm, ['form-con'])
addClass(labWrapper, ['lab-wrapper'])
addClass(inputLabel, ['input-tag'])
addClass(inputfield, ['input-fld'])
addClass(submit, ['sub-btn'])
addClass(submitIcon, ['sub-icon'])
addClass(resetButton, ['reset'])
addClass(resetIcon, ['sub-icon'])
addClass(footer, ['grid-cent'])
addClass(ftrContent, ['ftr-p'])


let randomNumber = Math.floor(Math.random() * 100) + 1; // generate random number from 1-100
    // console.log(randomNumber)

inputfield.addEventListener('focus', () =>{
        heroImg.src = './src/thinking.png'
            setTimeout(() => {
                heroImg.src = './src/base.png'
            },4000)
    }
)

submit.addEventListener('focus', () =>{ 
    heroImg.src = './src/guessing.png'
    setTimeout(() => {
        heroImg.src = './src/base.png'
    },4000)
})

submit.addEventListener('click', () =>{
    heroImg.src = './src/guessing.png'
    setTimeout(() => {
        heroImg.src = './src/base.png'
    },4000)
})

submit.addEventListener('click', validate)
function validate() {
    const guess = Number(inputfield.value) // passing the value in inputfield to another variables
    //if guess is wrong pop the last heart and replace with the guess.value
    lpHiLowArr[lpHiLowArr.length - guessCount].style.display = 'block'
    if (guess !== randomNumber){ 
        bgImg.src = './src/bgwrong.png'
        lpArr[lpArr.length - guessCount].src = './src/guessedNo.png'
        lpSpanArr[lpSpanArr.length - guessCount].textContent = guess
        setTimeout(() => {
            bgImg.src = './src/bgbase.png'
        },2000)
        
        if (guess < randomNumber){ // set the input field depends on the user guess
            lpHiLowArr[lpHiLowArr.length - guessCount].src = './src/high.svg' 
        }else if (guess > randomNumber){// set the input field depends on the user guess
            lpHiLowArr[lpHiLowArr.length - guessCount].src = './src/low.svg' 
        } 
    }else{
        bgImg.src = './src/bgright.png'
        lpHiLowArr[lpHiLowArr.length - guessCount].style.display = 'none'
    }

    if (guessCount === 7){
        if (guess !== randomNumber){
            //   lpArr[lpArr.length - guessCount] = '../src/Hred.svg'
            lpArr[0].src = './src/Hred.svg'
            lpArr[1].src = './src/Hred.svg' 
            lpArr[2].src = './src/Hred.svg'
            }
    }

    if (guessCount === 10 || guess === randomNumber){
        rightAspan.style.display = 'block'
        rightAns.textContent = randomNumber
        boxImg.style.display = 'none'
        if ( guessCount === 10){
            bgImg.src = './src/bgwrong.png'
            gameOver() 
        }
        if( guess === randomNumber){
            bgImg.src = './src/bgright.png'
            gameOver() 
        }

    }

    inputfield.value = ''
    setTimeout(() => {
        inputfield.focus()
    },2000)
    guessCount++
}

function gameOver() {
    inputLabel.textContent = 'RETRY'
    inputfield.disabled = true;
    inputfield.style.display = 'none'
    submit.disabled = true;
    submit.style.display = 'none'
    resetButton.style.display = 'block'
}

function resetGame() {
    inputLabel.textContent = 'GUESS'
    rightAspan.style.display = 'none'
    inputfield.disabled = false
    submit.disabled = false
    boxImg.style.display = 'block'
    inputfield.style.display = 'block'
    submit.style.display = 'block'
    bgImg.src = './src/bgbase.png'
    lpArr.forEach((index) =>{
        index.src = './src/Hgreen.svg'
    })
    lpSpanArr.forEach((index) => {
        index.textContent = ''
    })
    lpHiLowArr.forEach((index) => {
        index.style.display = 'none'
    })
  //div that show the right answer will not be visible
    resetButton.style.display = 'none'
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 1
}


// inputfield.focus()
let guessCount = 1;


// let guessCharacter = document.querySelector('.guesscharacter')
// guessCharacter =  Image.src = './src/guessDefault.svg' 



