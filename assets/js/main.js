const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up'),
    forgotPassword = document.getElementById('forgot-password'),
    resetPassword = document.getElementById('reset-password'),
    email = document.getElementById('email')

signUp.addEventListener('click', ()=>{
    // Remove classes 
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})

resetPassword.addEventListener("click", () => {
  //remove class
  forgotPassword.classList.remove("none");
  loginIn.classList.remove("block");

  // Add classes
  forgotPassword.classList.toggle("block");
  loginIn.classList.toggle("none");
});



// form validation
