var arrayOfQuotes = [
    {
        "auther": "author 1",
        "quote":"some quote of autor one "
    },
    {
        "auther": "author 2",
        "quote":"some quote of autor two "
    },
    {
        "auther": "author 3",
        "quote":"some quote of autor three "
    },
    {
        "auther": "author 4",
        "quote":"some quote of autor four"
    },
    {
        "auther": "author 5",
        "quote":"some quote of autor five "
    },
    {
        "auther": "author 6",
        "quote":"some quote of autor six "
    }
]
function randomSelector(arrayLength){
    return Math.floor(Math.random()*arrayLength);
}

function generateQuote(){
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML ='"'+ arrayOfQuotes[randomNumber].quote+ '"';
    document.getElementById("autherOutput").innerHTML ='-'+ arrayOfQuotes[randomNumber].auther;
}