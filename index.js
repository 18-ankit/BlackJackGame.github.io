
var cards = [];
var sum = 0;
var hasBlackJack = false;

var isAlive = false;

var message = " ";

var messageEl = document.getElementById( "message-el" );
var sumEl = document.getElementById( "sum-el" );
var cardsEl = document.getElementById( "cards-el" );


var player = {
    name: "Ankitt",
    chips:150
}

var playerEl = document.getElementById( "player-el" );
playerEl.textContent = player.name + " : $" + player.chips;


function getRandomCard () {

    var randomNumber = Math.floor( Math.random() * 13 ) + 1;

    if ( randomNumber > 10 ) {
        return 10;
    } else if ( randomNumber === 1 ) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame () {
    
    isAlive = true;
    var firstCard = getRandomCard();
    var secondCard = getRandomCard();
    cards = [ firstCard, secondCard ];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame () {
    
    cardsEl.textContent = " Cards : " ;

    for ( var i = 0; i < cards.length; i++ ){
        cardsEl.textContent += cards[ i ] + " , " ;
    }

    sumEl.textContent = "Sum : " + sum;

    if ( sum <= 20 ) {
        message = " Do You Want to Draw a new Card ? 🙂";
    }
    else if ( sum === 21 ) {
        message = " Wohoo! , You've got a BlackJack 🥳";
        hasBlackJack = true;
    }
    else {
        message = " Sorry! , You're out of the Game 😅";
        isAlive = false;
    }

    messageEl.textContent = message;
}



function newCard () {
    
    if ( isAlive === true && hasBlackJack === false ) {
        
        var card = getRandomCard();

        sum += card;

        cards.push( card );

        renderGame();
    }



}