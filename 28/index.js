function myfunction(){

    const suits = ["Sprades", "Diamonds", "Club", "Heart"];
    const value = [
        "ACE",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "king",
    ]
    const deck = []
    for (let i=0; i < suits.length; i++){
        for(let x=0 ; x< value.length; x++){
            let card = {Value : value[x], Suit : suits[i]}
            deck.push(card)
        }
    }

    for (let i = deck.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * i)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }

    document.write('First five cards are : ' + "<br>")

    for (let i=0; i<5 ; i++){
        document.write(` ${deck[i].Value} of ${deck[i].Suit}` + "<br>")
    }
}