// Initialize variables
let marioHidingCompartment = 4;
let guessingRight = 3;
let points = 100; // Starting points
let found = false;

// Create a loop for three attempts
for (let attempt = 0; attempt <= guessingRight; attempt++) {
    // Get the father's estimate 
    let fatherEstimate = parseInt(prompt("Please enter your estimate for Mario's hiding compartment number between 1-10"));

    // Check if the estimate is correct
    if (fatherEstimate === marioHidingCompartment) {
        console.log(`Yes, you found your son.Your point is ${points}`);
        found = true;
        break; // Exit the loop if correct
    } else if (fatherEstimate < marioHidingCompartment) {
        points -= 25;
        console.log("Your son is in a compartment with a bigger number.");
    } else {
        points -= 25;
        console.log("Your son is in a compartment with a smaller number.");
    }
}
if (found === false) {
    console.log(`Sorry,you did not find your son.Your point is ${points}`);
}



