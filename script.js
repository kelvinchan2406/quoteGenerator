const getQuoteId = document.getElementById("quote");
const getAuthorId = document.getElementById("author");
const getButton = document.getElementById("refresh");


let data = [];
let quote = ``;
let author = ``;

const assignQuote = () => {
    getQuoteId.textContent = quote;
    getAuthorId.textContent= author;
}

const getRndQuote = () => {
    let randomNumber = Math.floor(Math.random()*data.length);
    quote = data[randomNumber].text;
    author = data[randomNumber].author;
    assignQuote();
}

async function getQuote() {
    // const proxy = `https://cors-anywhere.herokuapp.com/`;
    const api = `https://type.fit/api/quotes`;
    try{
        getQuoteId.textContent = `loading`;
        const response = await fetch(api);
        data = await response.json();
        getRndQuote();
    }catch {
        getQuote();
        console.log(`cants get api`);
    }
}

getButton.addEventListener('click', getQuote);
getQuote();
// testsetsetsetsetets
// why cant i push this