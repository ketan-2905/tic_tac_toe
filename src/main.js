import { TicTacToeLayout } from "./template/ticTacToetemplate.js";
// import {Player} from "./model/player.js"

let call = ''
let setNameCount = 0

const resetBtn = document.querySelector(".reset-btn")
const okBtn = document.querySelector(".ok")
const submitName = document.querySelector("#submit")
const players = document.querySelectorAll(".player")

const input= document.querySelector("input")

const tooltipText = document.querySelector(".tooltip-text")

const instructionLayout= document.querySelector(".instruction")
const fromLayout= document.querySelector(".from")
const ticTacToeBody = document.querySelector(".tic-tac-toe-body")

console.log(players);

submitName.addEventListener('click' , (e) => {
    e.preventDefault()
    console.log("hi",input.value);
    
    if(!input.value) return
    fromLayout.classList.add("hide")
    console.log(call);
    
    if(call == 'player1' || call == 'player3'){
        players[0].innerText = input.value
        players[2].innerText = input.value
    }
    if(call == 'player2' || call == 'player4'){
        players[1].innerText = input.value
        players[3].innerText = input.value
    }
    input.value = ''
    setNameCount++
    if(setNameCount == 2){
        ticTacToeBody.classList.remove("hide")
        tooltipText.classList.add("hide")
    }
})

players.forEach((player,index) => {
    player.addEventListener("click" , () => {
        call = `player${index+1}`
        fromLayout.classList.remove("hide")
        player.classList.add("preventPointer")
    })
})

const intApp = () => {
    const instance = new TicTacToeLayout()
    resetBtn.classList.remove("hide")
    instructionLayout.classList.add("hide")
}

okBtn.addEventListener("click" , () => {
    if(setNameCount == 2) intApp()
    return
})