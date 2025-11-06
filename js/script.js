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

// Validate the contact form
function validateForm() { }