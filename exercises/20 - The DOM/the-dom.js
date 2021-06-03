// const paragraph = document.querySelector("p");
// console.log(paragraph);

// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);

// const heading = document.querySelector("h2");
// console.log(heading.textContent)
// console.log(heading.innerText);;
// // heading.textContent = "Janet is beautiful";
// // console.log(heading.textContent);
// // console.log(heading.innerText);
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector(".pizza");

// console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// pizzaList.insertAdjacentText("afterbegin",  "🍕");

// console.log(pizzaList.textContent);

const picture = document.querySelector(".huge");
picture.classList.add("round");

console.log(picture.classList);

function toggleRoundBorders() {
    picture.classList.toggle("round")
};

picture.addEventListener("click", toggleRoundBorders);

picture.alt = "Ocean view";

console.log(picture.getAttribute("src"));

const janet = document.querySelector(".jay");
console.log(janet.dataset);
janet.addEventListener("click", function(){
    alert(`Welcome ${janet.dataset.first}${janet.dataset.last}`)
}); 