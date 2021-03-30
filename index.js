function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min
    return floatFlag ? r : Math.floor(r)
}

let testPurses = Array(5).fill(0).map(a => {
    return {
        quarters: roll(0, 15),
        dimes: roll(0, 30),
        nickels: roll(0, 40),
        pennies: roll(0, 50),
        price: Number(roll(0, 100, 1).toFixed(2))
    }
})

const purchaseConfirmation = document.getElementById("purchase-confirmation")
const quarterCounter = document.getElementById("quarter-count")
const dimeCounter = document.getElementById("dime-count")
const nickelCounter = document.getElementById("nickel-count")
const pennyCounter = document.getElementById("penny-count")

var arr = []

let counter = 0;

const prev = document.getElementById('previous-case')
const next = document.getElementById('next-case')

if (counter === 0){
    prev.disabled = true;
} else {prev.disabled = false;}

function update() {
    quarterCounter.innerHTML = testPurses[counter].quarters;
    dimeCounter.innerHTML = testPurses[counter].dimes;
    nickelCounter.innerHTML = testPurses[counter].nickels;
    pennyCounter.innerHTML = testPurses[counter].pennies;
    const total = testPurses[counter].quarters + testPurses[counter].dimes + testPurses[counter].nickels + testPurses[counter].pennies;
    console.log(total, testPurses[counter].price)
    if (testPurses[counter].price > total) {
        purchaseConfirmation.innerHTML = `With $${total} you cannot afford this $${testPurses[counter].price} purchase`;
        purchaseConfirmation.style.background = 'red';
    } else if (testPurses[counter].price <= total) {
        purchaseConfirmation.innerHTML = `With $${total} you can afford this $${testPurses[counter].price} purchase`;
        purchaseConfirmation.style.background = 'green';
    }
}
update()
prev.addEventListener('click', function(e) {
    if (counter>0) {
        if (counter === 0){
    prev.disabled = true; }
    else {
        prev.disabled = false;
        counter = counter - 1
        update()
        if (counter === 0){
    prev.disabled = true; }
        }
        
} if (counter === testPurses.length){   
    next.disabled = true;}
    else {next.disabled = false;}
})

next.addEventListener('click', function(e) {
    
   if (counter < testPurses.length) { 
    prev.disabled = false;   
    counter = counter + 1;
    if (counter === testPurses.length - 1){
    next.disabled = true;}
    update()
    }   
})
