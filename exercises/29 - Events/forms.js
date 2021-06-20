const signUpForm = document.querySelector(`[name='signup']`);

signUpForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event.currentTarget.name.value);
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.agree.checked);
});

// Prevent a specific value from being submitted with a form

signUpForm.addEventListener('submit', function (event) {
    const name = event.currentTarget.name.value;
    if (name.includes('Janet')) {
        alert(`Sorry babe, no Janet's allowed here`);
        event.preventDefault();
    };
})

// 'keyup'
// 'keydown'
// 'focus'
// 'blur'

function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
};

signUpForm.name.addEventListener('keyup', logEvent);
signUpForm.name.addEventListener('keydown', logEvent);
signUpForm.name.addEventListener('focus', logEvent);
signUpForm.name.addEventListener('blur', logEvent);