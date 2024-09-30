const subscribe = document.getElementById("subscribe");
const error = document.getElementById("error");
const emailInput = document.getElementById("emailid");

const regex = /^[\w]+@[\w]+\.[\w]+$/g;

const color = getComputedStyle(document.documentElement).getPropertyValue("--LightRed");

subscribe.addEventListener("click", function(event){
    event.preventDefault();
    console.log(emailInput.value);
    if(emailInput.value.search(regex) == -1){
        error.style.display = "block"
        emailInput.style.border = `2px solid ${color}`;
    }
    else{
        error.style.display = "none"
        emailInput.style.border = `2px solid black`;
    }
})
