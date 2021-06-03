console.log(`it works`);

const newParagraph = document.createElement("p");
newParagraph.textContent = `I am a newly created paragraph`;
newParagraph.classList.add("sweet");
console.log(newParagraph);

const newImage = document.createElement(`img`);
newImage.src = `https://picsum.photos/200`;
newImage.alt = `Cool pic`;
newImage.classList.add("fair")
console.log(newImage);

const newDiv = document.createElement(`div`);
newDiv.classList.add(`container`);
console.log(newDiv);

// newDiv.appendChild(newImage);
// newDiv.appendChild(newParagraph);

// appendChild can only append one element at a time, however, you can now use append which supports multiple elements and not one at at time like appendChild. See below.

newDiv.append(newImage, newParagraph);

document.body.append(newDiv);

const newHeading = document.createElement(`h2`);
newHeading.textContent = `Watch me append`;

newDiv.insertAdjacentElement("afterbegin", newHeading);


const newList = document.createElement(`ul`);

const newListItem1 = document.createElement(`li`);
newListItem1.textContent = `One`;

const newListItem2 = document.createElement(`li`);
newListItem2.textContent = `Two`;

const newListItem3 = document.createElement(`li`);
newListItem3.textContent = `Three`;

const newListItem4 = document.createElement(`li`);
newListItem4.textContent = `Four`;

const newListItem5 = document.createElement(`li`);
newListItem5.textContent = `Five`;

newList.insertAdjacentElement("afterbegin", newListItem1);
newList.insertAdjacentElement("beforeend", newListItem5);
newListItem5.insertAdjacentElement("beforebegin", newListItem4);
newListItem1.insertAdjacentElement("afterend", newListItem2);
newListItem2.insertAdjacentElement("afterend", newListItem3)

newDiv.append(newList);