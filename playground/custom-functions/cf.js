// console.log('it works');

// function calculateBill() {
//     console.log(`running calculateBill`);
//     const total = 400 * 7;
//     console.log(total);
//     return total;
// };

// const myTotal = calculateBill();

// function calculateBill(bill, taxRate = 0.25, tipRate = 2.57) {
//     console.log(`running calculateBill`);
//     const total = (bill * taxRate) + tipRate;
//     return total;
// }

// console.log(`Your bill is $${calculateBill(400, undefined, 5)}`); 

// function sayHiTo(firstName) {
//     return `Hello ${firstName}`
// };

// const greeting = sayHiTo("Bolu");
// console.log(greeting);

// function addYorubaRespect(name) {
//     return `Aunty ${name}`; 
// };

// console.log(addYorubaRespect("Bisi"));

// const respectedName = addYorubaRespect();

// function yell(theName) {
//     return `E JOR MA! ${theName.toUpperCase()}`
// };

function respectYorubaAunty(firstName) {
    const respectedName = `Aunty ${firstName}`;
    console.log(respectedName);
    return respectedName;
  }
  
  respectYorubaAunty(`Bisi`);