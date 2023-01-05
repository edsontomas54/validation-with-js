const username = document.getElementById("username")
const password = document.getElementById("password")
const form = document.querySelector("form")
const errorMessage = document.getElementById("errorMessage")

form.addEventListener("submit", (e)=>{

    const errors =[]

    if(username.value.trim() === "")
    {
        errors.push("Username is required ");
    }
    if(password.value.trim()=== "")
    {
       errors.push("Password is required")
    }
    if(errors.length > 0)
    {
        e.preventDefault();
        errorMessage.toggleAttribute("hidden");
        errorMessage.innerHTML= errors.join(' , ');
    }
})