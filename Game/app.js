const player1Score = document.getElementById('player1Score')
const player2Score = document.getElementById('player2Score')
const winingScoreDisplay = document.getElementById('playingScore')
const userInput = document.getElementById('inputScore') 
const player1Btn = document.getElementById('player1')
const player2Btn = document.getElementById('player2')
const resetBtn = document.getElementById('reset')

const resultDisplay = document.getElementById('result')

let p1Score = 0
let p2Score = 0
let winingScore = 0
let gameOver = false

userInput.addEventListener('change', () => {
    let wining = +userInput.value 
    winingScore = wining
    winingScoreDisplay.innerText = winingScore 
    userInput.value = ''
    resetFunc() 
})


player1Btn.addEventListener('click', ()=>{
    if(winingScore == 0){
        alert('Please enter wining score first!')
        return 
    }
   if(!gameOver){
   p1Score++
   gameProcess(p1Score,winingScore)
    } 
  player1Score.innerText = p1Score

})

player2Btn.addEventListener('click', ()=>{
     if(winingScore == 0){
        alert('Please enter wining score first!')
        return 
    }

    if(!gameOver){
     p2Score++
     gameProcess(p2Score,winingScore) 
   }
player2Score.innerText = p2Score
})

function gameProcess(oldScore,winingScore){
    if(oldScore === winingScore){ 
    gameOver = true
    player1Btn.setAttribute('disabled','disabled')
    player2Btn.setAttribute('disabled','disabled')

    if(p1Score > p2Score){
            resultDisplay.innerText = "🎉 Player 1 wins!";
            resultDisplay.style.color = "green";
        }
        else if(p2Score > p1Score){
            resultDisplay.innerText = "🎉 Player 2 wins!";
            resultDisplay.style.color = "blue";
        }
        else {
            resultDisplay.innerText = "🤝 It's a tie!";
            resultDisplay.style.color = "orange";
        }
   } 
}

function resetFunc(){
    p1Score = 0
    p2Score = 0
    gameOver = false 
    player1Score.innerText = 0
    player2Score.innerText = 0
    player1Btn.removeAttribute('disabled')
    player2Btn.removeAttribute('disabled')
    resultDisplay.innerText = "" 

}
resetBtn.addEventListener('click', resetFunc)