// display welcome
welcomeMessage();

function welcomeMessage() {
    // asking for their name
    let name = prompt("Please enter your name:");
    if (name !== null) {name = name.charAt(0).toUpperCase() + name.slice(1)

    }

    if (name !== null) {
        // clicked ok without entering name
        if (name === ""){document.getElementById('greeting').innerHTML = 'Hello, <br/> welcome to <br/> My Website!';}
        // entered name
        else {document.getElementById('greeting').innerHTML = 'Hello ' + name + ', <br/> welcome to <br> My Website!';}
    } else {
  // clicked Cancel
  document.getElementById('greeting').innerHTML = 'Hello, welcome to My Website!<br/>Why didnt you tell me your name btw?';}

  
}

function validateInput() {
  let inputField1 = document.getElementById("inputField1");
  let inputField2 = document.getElementById("inputField2");
  let inputField3 = document.getElementById("inputField3");
  let inputValue1 = inputField1.value.trim();
  let inputValue2 = inputField2.value.trim();
  let inputValue3 = inputField3.value.trim();
  let errorMessage1 = document.getElementById("errorMessage1");
  let errorMessage2 = document.getElementById("errorMessage2");
  let errorMessage3 = document.getElementById("errorMessage3");
  //validation logic here
  if (inputValue1 === "") {
    //invalud input, apply shake effect and display the error message
    inputField1.classList.add("shake");
    errorMessage1.style.visibility = "visible";
    //remove the shake class and hide the error message after the animation
    setTimeout(function () {
      inputField1.classList.remove("shake");
      errorMessage1.style.visibility = "hidden";
    }, 500);
  } else {
    if (inputValue2 === "") {
    //invalud input, apply shake effect and display the error message
    inputField2.classList.add("shake");
    errorMessage2.style.visibility = "visible";
    //remove the shake class and hide the error message after the animation
    setTimeout(function () {
      inputField2.classList.remove("shake");
      errorMessage2.style.visibility = "hidden";
    }, 500);
  } else {
    if (inputValue3 === "") {
    //invalud input, apply shake effect and display the error message
    inputField3.classList.add("shake");
    errorMessage3.style.visibility = "visible";
    //remove the shake class and hide the error message after the animation
    setTimeout(function () {
      inputField3.classList.remove("shake");
      errorMessage3.style.visibility = "hidden";
    }, 500);
  } else {
    {alert("Valid input");}
  }
}
}
}