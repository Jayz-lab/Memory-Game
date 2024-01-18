//create an array of objects of 12 card images
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
cardArray.sort(() => 0.5 - Math.random())