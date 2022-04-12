const selectbuttons = document.querySelectorAll('[data-selection]');
const yourscore = document.querySelector('[data-your-score]');
const compscore = document.querySelector('[data-computer-score]');
const finalColumn = document.querySelector('[data-final-column]')
const SELECTION =[
    {
        name : 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name : 'paper',
        emoji: '🤚',
        beats: 'rock'
    },
    {
        name : 'scissors',
        emoji: '✌️',
        beats: 'paper'
    }
]

selectbuttons.forEach(selectbutton =>{
    selectbutton.addEventListener('click', e=>{
        const selectionName = selectbutton.dataset.selection 
        const selection = SELECTION.find(selection => selection.name === selectionName)
        makeselection(selection)
    })
})



//check winner
function checkwinner(selection, oppselection) {
    return selection.beats === oppselection.name
}



function makeselection(selection) {
    const computerSelection = randomselect()
    const youwinner = checkwinner(selection, computerSelection)
    const compwinner = checkwinner(computerSelection, selection)

    addSelectionresult(computerSelection, compwinner)
    addSelectionresult(selection, youwinner)

    if (youwinner) incrementScore(yourscore)
    if (compwinner) incrementScore(compscore)
    
}

function addSelectionresult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner){
        div.classList.add("winner")
    }
    finalColumn.after(div)
}

//increase score
function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
  }

//random selection for computer
function randomselect() {
    const randomindex = Math.floor(Math.random() * SELECTION.length) 
    return SELECTION[randomindex]
}