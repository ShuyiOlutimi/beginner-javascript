console.log(`it works`);

// Method 1
function addYorubaRespect(firstName) {
    return `Aunty ${firstName}`; 
};

// Method 2 - Anonymous Function
// parameter without function name. Invalid generally but can be used as callbacks, iffy and immediately invoked function expression
function (firstName) {
    return `Aunty ${firstName}`; 
};

// Method 3 - Function Expression
// storing an anonymous function into a variable
const addYorubaRespect = function (firstName) {
    return `Aunty ${firstName}`; 
};

// NOTE: If a function is defined as a function, js will "hoist it". Regardless of where it appears in a code, all functions expressly defined as a function is raised/hoisted upwards and read first. So you can always run a function up in a line of code before the line where it is declared.

// Method 4 - Arrow Function
// Is an anonymous function by default. You pass the parameter without function name to a variable. Then use the fat arrow to link to the code block and delete the curly braces.
const addYorubaRespect = (firstName) =>  `Aunty ${firstName}`;

// You can also remove the brackets from the if the code block is just one line of code.
const addYorubaRespect = firstName =>  `Aunty ${firstName}`;

const add = (a, b = 3) => a + b;

const makeABaby = (first, last, age) => {
     const baby = {
        fullName: `${first} ${last}`,
        age: `${age}`,
     };
     return baby;
};

const user = {
    fullName: "Janet Adeniyi",
    sayHi: function (sayHi) {
        return `Hi ${this.fullName}`;
    },
    yellHi: function() {
        return `HIII ${this.fullName}`;
    },
    screamUserName() {
    return `YOOOOOO ${this.fullName.toUpperCase()}`;
    },
    whisperHi: () => {return `hiiiiii Janet Adeniyi`},
};