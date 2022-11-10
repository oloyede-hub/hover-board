const background = document.getElementById("background");
const password = document.getElementById("password");
const pointer = document.getElementById("pointer")

password.addEventListener("input", (e) => {
    const input = e.target.value;
    const inputLenth = input.length;
    const blurValue = 20 - inputLenth * 2;
    background.style.filter = `blur(${blurValue}px)`
    pointer.textContent = " ";

    if(input == "") {
        pointer.textContent = ""
    }
    
    if(inputLenth >= 15) {
        pointer.textContent = "Very Strong Password"
        pointer.style.color = "green"
    }else if(inputLenth >= 10 ) {
        pointer.textContent = "Strong Password"
        pointer.style.color = "green"
    }else if (inputLenth >= 5) {
        pointer.textContent = "Weak Password";
        pointer.style.color = "yellow"
    }else if(inputLenth >= 5){
        pointer.textContent = "Input a Strong Password"
        pointer.style.color = "red" 
    }
    
});
