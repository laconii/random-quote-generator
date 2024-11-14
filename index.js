var quotes = [
    "Be yourself; everyone else is already taken.",
    "So many books, so little time.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "A room without books is like a body without a soul.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "You only live once, but if you do it right, once is enough."
]

var usedIndexes = new Set()
var quoteElement = document.getElementById("quote");

function generateQuote(){
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }
    
    while(true){
        var randomIndex = Math.floor(Math.random() * quotes.length)
        if(usedIndexes.has(randomIndex)) continue
        var quote = quotes[randomIndex]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIndex)
        break;
    }   
}