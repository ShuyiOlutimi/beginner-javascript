// 1. Select element - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch'); //Select the canvas element itself

const context = canvas.getContext('2d'); //Select the 'context' which is the part of the canvas element on which the painting actually happens within the canvas

const shakeButton = document.querySelector('button'); //Select the canvas element itself

const MOVE_AMOUNT = 10;

// 2. Randomize the starting point for the drawing on every reload.
const width = canvas.width; //Set height and width
const height = canvas.height;
// Alternatively the above is written as const {width, height} = canvas. It will pass it as width = canvas.width because the variable name and the actual property name.
let x = Math.floor(Math.random() * width); //Generate a random number btw between zero and the width

let y = Math.floor(Math.random() * height); //Generate a random number btw between zero and the height

// 3. Setup the canvas
let hue = Math.floor(Math.random() * 235); //Generate random hue number between 0 and 100 (since we are to increment  hue by 1 and hsl takes h values not higher than  )
context.strokeStyle = `hsl(${hue}, 100%, 50%)`

context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 40;

context.beginPath(); //Start drawing
context.moveTo(x, y); //Selects a drawing point (x)px from the left of the canvas and (y)px from the tops of the canvas
context.lineTo(x, y); //Draws an INVISIBLE line from where the drawing point was set by moveTo(), to where the parameters of lineTo() specify. In this case, it draws it from the same point to the same point
context.stroke(); //paints the drawn line and makes it visible

// 4. Make a draw function
function draw(options) {
    // increment hue
    hue = hue + 1;
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    // start drawing path
    context.beginPath();
    context.moveTo(x, y);
    //Generate new value for x and y
    // move x and y based on user movement of arrow keys 
    switch (options.key) {
        case 'ArrowUp':
            y = y - MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y = y + MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x = x - MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x = x + MOVE_AMOUNT;
            break;
        default:
            break;
    };
    //Move line to newly generated values
    context.lineTo(x, y);
    context.stroke();
};

// 5. Write handler for keys
function handleKey(event) {
    if (event.key.includes('Arrow')) {
        event.preventDefault();
        draw({key: event.key})
        console.log(`Handling key`);
        console.log(event.key);
    };
};

// Shake function
function cleanCanvas() {
    canvas.classList.add('shake');
    context.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend',
        function () {
            canvas.classList.remove('shake'),
                { once: true }
        });
};

shakeButton.addEventListener('click', cleanCanvas);

// 7. Listen for arrow keys
window.addEventListener('keydown', handleKey);