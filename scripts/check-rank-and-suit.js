/**
 * Created by gogo4_000 on 6/19/2016.
 */
function DrawFace(context) {

    let face = new Image();
    face.onload = function () {
        context.drawImage(face, 4, 0);
    }

    switch (myDeck.cards[0].suit){
        case "Hearts":
            switch (myDeck.cards[0].rank){
                case "Ace":
                    face.src = "img/ace-hearts.jpg";
                    break;
                case "2": face.src = "img/2-hearts.jpg";
                    break;
                case "3": face.src = "img/3-hearts.jpg";
                    break;
                case "4": face.src = "img/4-hearts.jpg";
                    break;
                case "5": face.src = "img/5-hearts.jpg";
                    break;
                case "6": face.src = "img/6-hearts.jpg";
                    break;
                case "7": face.src = "img/7-hearts.jpg";
                    break;
                case "8": face.src = "img/8-hearts.jpg";
                    break;
                case "9": face.src = "img/9-hearts.jpg";
                    break;
                case "10": face.src = "img/10-hearts.jpg";
                    break;
                case "Jack": face.src = "img/jack-hearts.jpg";
                    break;
                case "Queen": face.src = "img/queen-hearts.jpg";
                    break;
                case "King": face.src = "img/king-hearts.jpg";
                    break;
            }
            break;
        case "Clubs":
            switch (myDeck.cards[0].rank){
                case "Ace":
                    face.src = "img/ace-clubs.jpg";
                    break;
                case "2": face.src = "img/2-clubs.jpg";
                    break;
                case "3": face.src = "img/3-clubs.jpg";
                    break;
                case "4": face.src = "img/4-clubs.jpg";
                    break;
                case "5": face.src = "img/5-clubs.jpg";
                    break;
                case "6": face.src = "img/6-clubs.jpg";
                    break;
                case "7": face.src = "img/7-clubs.jpg";
                    break;
                case "8": face.src = "img/8-clubs.jpg";
                    break;
                case "9": face.src = "img/9-clubs.jpg";
                    break;
                case "10": face.src = "img/10-clubs.jpg";
                    break;
                case "Jack": face.src = "img/jack-clubs.jpg";
                    break;
                case "Queen": face.src = "img/queen-clubs.jpg";
                    break;
                case "King": face.src = "img/king-clubs.jpg";
                    break;
            }
            break;
        case "Diamonds":
        case "Clubs":
            switch (myDeck.cards[0].rank){
                case "Ace":
                    face.src = "img/ace-diamonds.jpg";
                    break;
                case "2": face.src = "img/2-diamonds.jpg";
                    break;
                case "3": face.src = "img/3-diamonds.jpg";
                    break;
                case "4": face.src = "img/4-diamonds.jpg";
                    break;
                case "5": face.src = "img/5-diamonds.jpg";
                    break;
                case "6": face.src = "img/6-diamonds.jpg";
                    break;
                case "7": face.src = "img/7-diamonds.jpg";
                    break;
                case "8": face.src = "img/8-diamonds.jpg";
                    break;
                case "9": face.src = "img/9-diamonds.jpg";
                    break;
                case "10": face.src = "img/10-diamonds.jpg";
                    break;
                case "Jack": face.src = "img/jack-diamonds.jpg";
                    break;
                case "Queen": face.src = "img/queen-diamonds.jpg";
                    break;
                case "King": face.src = "img/king-diamonds.jpg";
                    break;
            }
            break;
        case "Spades":
            switch (myDeck.cards[0].rank){
                case "Ace":
                    face.src = "img/ace-spades.jpg";
                    break;
                case "2": face.src = "img/2-spades.jpg";
                    break;
                case "3": face.src = "img/3-spades.jpg";
                    break;
                case "4": face.src = "img/4-spades.jpg";
                    break;
                case "5": face.src = "img/5-spades.jpg";
                    break;
                case "6": face.src = "img/6-spades.jpg";
                    break;
                case "7": face.src = "img/7-spades.jpg";
                    break;
                case "8": face.src = "img/8-spades.jpg";
                    break;
                case "9": face.src = "img/9-spades.jpg";
                    break;
                case "10": face.src = "img/10-spades.jpg";
                    break;
                case "Jack": face.src = "img/jack-spades.jpg";
                    break;
                case "Queen": face.src = "img/queen-spades.jpg";
                    break;
                case "King": face.src = "img/king-spades.jpg";
                    break;
            }
            break;
    }
}