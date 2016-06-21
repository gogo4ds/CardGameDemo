//dealing cards and setting up the button functions
window.addEventListener('load', setCards, false);

//firs we create new deck
var myDeck = new Deck();
let deck = document.getElementById("deck");
let ctx = deck.getContext("2d");

let backOfCard = new Image();
backOfCard.onload = function () {
    ctx.drawImage(backOfCard, -3, 0);
}
backOfCard.src = "img/playing-card-back.jpg";

function setCards() {

    //creates Immediately-invoked function expression (IIFE), that deals the first 5 cards
        //this is bad repetition of code, but I don't know how to make it more abstract
    (function deal5Cards(){
        let card1 = document.getElementById("card1");
        let c1 = card1.getContext("2d");
        DrawFace(c1);
        myDeck.cards.shift();

        let card2 = document.getElementById("card2");
        let c2 = card2.getContext("2d");
        DrawFace(c2);
        myDeck.cards.shift();

        let card3 = document.getElementById("card3");
        let c3 = card3.getContext("2d");
        DrawFace(c3);
        myDeck.cards.shift();

        let cardA = document.getElementById("playerCardA");
        let cA = cardA.getContext("2d");
        DrawFace(cA);
        myDeck.cards.shift();

        let cardB = document.getElementById("playerCardB");
        let cB = cardB.getContext("2d");
        DrawFace(cB);
        myDeck.cards.shift();
    })();

    //deals 2 new player cards
    function DealCardA(){
        let cardA = document.getElementById("playerCardA");
        let cA = cardA.getContext("2d");
        DrawFace(cA);
        myDeck.cards.shift();
    }

    function DealCardB(){
        let cardB = document.getElementById("playerCardB");
        let cB = cardB.getContext("2d");
        DrawFace(cB);
        myDeck.cards.shift();
    }

    //sets the function of the button HIT
    $("button").click(function(){
        //checks which cards are selected and deal accordinc to that
        if (myDeck.cards.length > 1){
            if($("#playerCardA").is(".selected") && $("#playerCardB").is(".selected")){
                DealCardA();
                DealCardB();
            }else if($("#playerCardA").is(".selected")){
                DealCardA();
            }else if($("#playerCardB").is(".selected")){
                DealCardB();
            }else{
                DealCardA();
                DealCardB();
            }
        }else{
            if($("#playerCardA").is(".selected")){
                DealCardA();
            }else if($("#playerCardB").is(".selected")) {
                DealCardB();
            }
        }

        //check if the deck is runniong empty and ask the user to select just one card
        if(myDeck.cards.length == 1){
            alert("You have left with ONE card in the deck")
            $("#message").text("You can now select just ONE card!");
        }else if(myDeck.cards.length < 1){
            $("#message").text("Refresh the page if you want to start again!");
            $(".selected").removeClass("selected");
            $('button').css("background-color", "gray").prop('disabled', true);
            backOfCard.src = "img/empty-deck.jpg";
            return;
        }

        //clear the selection from the cards, to prepare them for another round
        $('.player-cards').removeClass('selected');
    });

    //hover and select functions
    //select and deselect card A and B
    $('#playerCardA').click (function () {
        if($('#playerCardA').hasClass('selected')){
            $('#playerCardA').removeClass('selected')
        }else  {
            $('#playerCardA').addClass('selected');
        }
    });

    $('#playerCardB').click (function () {
        if($('#playerCardB').hasClass('selected')){
            $('#playerCardB').removeClass('selected')
        }else  {
            $('#playerCardB').addClass('selected');
        }
    });

    //hover effect on card A and card B
    $('#playerCardA').hover(function () {
        $('#playerCardA').css("border", "1px solid red");
        $('#playerCardA').mouseout(function () {
            $('#playerCardA').css("border", "1px solid black");
        });
    });

    $('#playerCardB').hover(function () {
        $('#playerCardB').css("border", "1px solid red");
        $('#playerCardB').mouseout(function () {
            $('#playerCardB').css("border", "1px solid black");
        });
    });

    //TODO animate the dealing of cards
}










