const butt = document.querySelector(".butt");

const wowButton = document.querySelector('.wow')

butt.addEventListener('click', clickHandler);

wowButton.addEventListener('click', clickHandler);

function clickHandler() {
    console.log(`it got clicked`)
};

// Multiple listeners
const buyButtons = document.querySelectorAll('.buy');

function handleBuyButtonClick(event) {
    console.log(`YOU BUYING IT`);
    console.log(parseFloat(event.target.dataset.price));
    console.log(event.currentTarget)
};

buyButtons.forEach(function (eachButton) {
    eachButton.addEventListener('click', handleBuyButtonClick);
});

// event.stopPropagation() helps to stop the event from being passed to higher level listeners. So you don't get to fire other event listeners.



// function buyItem() {
//     console.log(`buying item`)
// };

// buyButtons.forEach(function(eachButton) {
//     console.log(`Binding the buy buttons`);
//     eachButton.addEventListener('click', buyItem);
// });


// function loopBuyButtons(eachButton) {
//     console.log(`Binding the buy buttons`);
//     eachButton.addEventListener('click', buyItem);
// };

// buyButtons.forEach(loopBuyButtons);

// buyButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         console.log(`YOU CLICKED`)
//     }); 
// });