// Make a div
const freshDiv = document.createElement("div");
// add a class of wrapper to it
freshDiv.classList.add("wrapper");
// put it into the body
document.body.append(freshDiv);
// make an unordered list
const ul = document.createElement("ul");
// add three list items with the words "one, two, three" in them
const li1 = document.createElement("li");
li1.textContent = "one";
const li2 = document.createElement("li");
li2.textContent = "two";
const li3 = document.createElement("li");
li3.textContent = "three";
ul.append(li1, li2, li3)
// put that list into the above wrapper
freshDiv.append(ul);
// create an image
const freshImg = document.createElement("img");
// set the source to an image
freshImg.src = `https://picsum.photos/500`;
// set the width to 250
freshImg.width = 250;
// add a class of cute
freshImg.classList.add(`cute`)
// add an alt of Cute Puppy
freshImg.alt = `Cute Puppy`
// Append that image to the wrapper
freshDiv.append(freshImg)
// with HTML string, make a div, with two paragraphs inside of it
const divString = `
    <div>
        <p>lorem ipsum dolor sit amet</p>
        <p>lorem ipsum dolor sit amet</p>
    </div>
`;
// put this div before the unordered list from above
// const range = document.createRange();
// range.selectNode(document.getElementsByTagName("div").item(0));
// const divFragment = range.createContextualFragment(divString);

freshDiv.insertAdjacentHTML("afterbegin", divString);
// add a class to the second paragraph called warning
const classParagraph = document.getElementsByTagName("p").item(1);
classParagraph.classList.add("warning");
console.log(classParagraph)
// remove the first paragraph
const delParagraph = document.querySelector("p")
delParagraph.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
    const AGEINDOGYEARS = age * 15;
    const playerString = `
        <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>They are ${height}cm and ${age} years old. In Dog years this person would be ${AGEINDOGYEARS}. That would be a tall dog!</p>
        <button type="button">Delete</button>
        </div>
    `;       
    return playerString;
};
// make a new div with a class of cards
const playerDiv = document.createElement("div");
playerDiv.classList.add("cards")
// make 4 player cards using generatePlayerCard
const player1 = document.createRange().createContextualFragment(generatePlayerCard("Dodo", 21, 160));
const player2 = document.createRange().createContextualFragment(generatePlayerCard("Eyiwunmi", 23, 160));
const player3 = document.createRange().createContextualFragment(generatePlayerCard("Mimi", 22, 160));;
const player4 = document.createRange().createContextualFragment(generatePlayerCard("Sunshine", 22, 160));
// append those cards to the div
playerDiv.append(player1, player2, player3, player4)


console.log(playerDiv.innerHTML);
// put the div into the DOM just before the wrapper element
freshDiv.insertAdjacentElement("afterbegin", playerDiv)
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
delButton = document.querySelectorAll("button");
// make out delete function
// loop over them and attach a listener