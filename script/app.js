let pageValue = document.getElementById('pageValue');
let cardTextTwo = document.getElementById('cardTextTwo');
let cardTextThree = document.getElementById('cardTextThree');
let cardTextFour = document.getElementById('cardTextFour');
let cardTextQuote = document.getElementById('cardTextQuote');
let quoteBtn = document.getElementById('quoteBtn');


quoteBtn.addEventListener('click', function(){
    cardTextQuote.innerHTML = `
    I was on a buttlet train, I noticed this bored salary man playing with his calculator.  That when it hit me: i gott make a tiny game for killing time
    
    Gunpei Yokoi`;
})

// function mainPage(){

// const div = document.createElement('div');
// div.innerHTML = `
// <h1 class="title">Gunpei Yokoi</h1>`


// document.body.append(div)
// }