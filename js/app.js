
/*-------------------------------- Constants --------------------------------*/
const startingScreen = document.querySelector('.starting-screen')
const startGame = document.querySelector('.start')
const options = document.querySelector('.option-buttons')
const allCards = document.querySelectorAll('.story')
//Story Map
const storyMap = {
    "card-one": {
      option1: "card-two",   // Throw fork
      option2: "card-three"  // Attack guard
    },
    "card-two": {
      option1: "card-four",  // Corridor/disguise
      option2: "card-six"    // Armory
    },
    "card-three": {
      option1: "card-five",  // Risky hallway
      option2: "card-six"    // Armory
    },
    "card-four": {
      option1: "card-eleven", // Back door escape (Ending 5)
      option2: "card-five"    // Hallway/possible guards
    },
    "card-five": {
      option1: "card-seven",  // Fireball spell (Ending 1)
      option2: "card-eight"   // Moat escape (Ending 2)
    },
    "card-six": {
      option1: "card-nine",   // Hallway with bow (Ending 3)
      option2: "card-ten"     // Tower zipline (Ending 4)
    }
  }
/*-------------------------------- Variables --------------------------------*/
let playerChoice = ''
let currentCard = 'card-one'

/*------------------------ Cached Element References ------------------------*/
const option1Btn = document.querySelector('#option1')
const option2Btn = document.querySelector('#option2')
const resetBtn = document.querySelector('#reset')
/*----------------------------- Event Listeners -----------------------------*/
startGame.addEventListener('click', (btn) => {
    document.querySelector('.starting-screen').style.display = 'none'
    hideAllCards()
    document.querySelector(`.${currentCard}`).style.display = 'flex'
    document.querySelector('.option-buttons').style.display = 'inline'
   })
   option1Btn.addEventListener('click', (btn) => {
       goToNextCard('option1')
   })
   option2Btn.addEventListener('click', (btn) => {
       goToNextCard('option2')
   })
   resetBtn.addEventListener('click', (btn) => {
       resetGame()
   })
/*-------------------------------- Functions --------------------------------*/
function hideAllCards() {
    allCards.forEach(card => card.style.display = 'none')
}
function goToNextCard(choice) {
    const nextCard = storyMap[currentCard][choice]
    if(!nextCard) return
    hideAllCards()
    document.querySelector(`.${nextCard}`).style.display = 'flex'
    currentCard = nextCard
    if (!storyMap[currentCard]) {
        resetBtn.style.display = 'inline'
        options.style.display = 'none'
    }
}
function resetGame() {
    hideAllCards()
    currentCard = 'card-one'
    startingScreen.style.display = 'flex'
    document.querySelector('.option-buttons').style.display = 'none'
    resetBtn.style.display = 'none'
}