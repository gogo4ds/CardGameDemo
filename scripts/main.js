
//creates object constructor for a single Card
function Card(rank, suit) {
    this.rank = rank;
    this.suit = suit;
}

//creates object named Deck which contains 52 random shuffled cards
function Deck(){

    this.cards = makeNewShuffledDeck();

    function makeNewShuffledDeck() {

        let ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9",
            "10", "Jack", "Queen", "King"];
        let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        let currentSuit;
        let currentRank;

        let allCards = new Array();

        for (currentSuit = 0; currentSuit < suits.length; currentSuit++) {
            for (currentRank = 0; currentRank < ranks.length; currentRank++) {
                allCards.push(new Card(ranks[currentRank], suits[currentSuit]));
            }
        }

        //function that shuffles the deck
        function shuffleDeck() {

            for(let currentCard = 0; currentCard < allCards.length; currentCard++){
                let temp = allCards[currentCard];
                let randomCard = Math.floor(Math.random() * allCards.length);
                allCards[currentCard] = allCards[randomCard];
                allCards[randomCard] = temp;
            }
        }
        shuffleDeck();
        return allCards;
    }
}






