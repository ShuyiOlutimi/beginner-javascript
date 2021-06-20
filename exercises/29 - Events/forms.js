const signUpForm = document.querySelector(`[name='signup']`);

signUpForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event.currentTarget);
});
