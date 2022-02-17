const getQuoteId = document.getElementById("quote");
const getAuthorId = document.getElementById("author");
const getTweetButton = document.getElementById("tweet");
const getRefreshButton = document.getElementById("refresh");


let data = [];
let quote = ``;
let author = ``;
let counter = 0;

// const addCounter = () => {
//     counter++;
//     // (!(counter === 10)) ? counter = counter + 1 : getQuoteId.textContent = `cant get quotes`;
//     console.log(counter);
// }


const assignQuote = () => {
    getQuoteId.textContent = quote;
    getAuthorId.textContent= author;
    // counter = 0;
}

const getRndQuote = () => {
    let randomNumber = Math.floor(Math.random()*data.length);
    quote = data[randomNumber].text;
    author = data[randomNumber].author;
    (!(typeof quote === `string`) || quote === ``) ? getQuote() : 
        (!(typeof author === `string`) || author === ``) ? getQuote() : assignQuote();
    
}

async function getQuote() {
    // const proxy = `https://cors-anywhere.herokuapp.com/`;
    const api = `https://type.fit/api/quotes`;
    try{
        getQuoteId.textContent = `Loading`;
        const response = await fetch(api);
        data = await response.json();
        // throw new Error('oops');
        getRndQuote();
    }catch {
        console.log(`cants get api`);
        console.log(counter);
        counter++;
        runCounter();
        // (counter < 10) ? (counter = counter++) : (getQuoteId.textContent = `cant get quotes`);
        // (counter < 10) ? (getQuoteId.textContent = `cant get quotes`) : (counter = counter++);
        // if(counter > 10){
        //     counter = counter++;
        // }else{
        //     getQuoteId.textContent = `cant get quotes`
        // }
    }
}
const runCounter = () => {
    (!(counter === 10)) ? getQuote() : (getQuoteId.textContent = `cant get quotes`);
}


const tweet = () => {

    window.open(`https://twitter.com/intent/tweet?text=${quote} - ${author}`, "_blank");
}


getTweetButton.addEventListener('click', tweet);
getRefreshButton.addEventListener('click', getQuote);
runCounter();