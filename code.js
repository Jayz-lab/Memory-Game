//Event Listener for DOMContentLoaded:
//This code ensures that the rest of the script runs only after the HTML document has been completely loaded.
document.addEventListener('DOMContentLoaded', () => {
    
//list all card options: create an array of objects of 12 card images
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.pgn',
    },
    {
        name: 'cheesebuger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.pgn',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.pgn',
    },
    {
        name: 'cheesebuger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.pgn',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
]
//console.log(cardArray)
//.sort() method compares 2 values and sorts the card array in random order
//.sort() method compares 2 values and sorts through them
//checks if the array is >0.5 or <0.5
cardArray.sort(() => 0.5 - Math.random())//nice adv short cut to shuffle an array randomly
//console.log(cardArray)

const grid = document.querySelector('#grid')
//console.log(grid)

//Arrays to Track Game State: These arrays are used to store the names and IDs of the cards that the player has chosen and the cards that have been matched.
const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

//Create Game Board: function to create an element for each object in the array
function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')//create img element 
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        console.log(card, i)
        grid.append(card)
    }
}

createBoard()

//check for matches: This function is called when the player has chosen two cards. 
//It checks if the two selected cards match or not, updates the display accordingly, and manages game logic.
function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card: This function is called when a card is clicked.
  //It updates the state arrays (cardsChosen and cardsChosenId), 
  //changes the card image to reveal the actual image, and triggers the matching logic after a short delay.
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()

})