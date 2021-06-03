console.log(`it works`);

// const item = document.querySelector(`.item`);

// item.innerHTML = `
//     <h1>Hey, Janet. How are you?</h1>
//     <p>I hope you have a great day today<p>
//     <img src="https://picsum.photos/200" alt="">
// `;
// console.log(item.innerHTML);
// You can't interact with the above as a DOM element because it is a string (the browser parses it into HTML when injected but in the Js file, it is a string, not  a DOM element), so you can't append or anything like that 


// Create a DOM Element Fragment
const newHTML = `
    <h1>Hey, Janet. How are you?</h1>
    <img src="https://picsum.photos/200" alt="">
    <p>I hope you have a great day today<p>
`;

const newFragment = document.createRange().createContextualFragment(newHTML);

console.log(newFragment);

document.body.appendChild(newFragment)