// Practice exercise 4.1
console.log("\nPractice exercise 4.1");
console.log("========================\n")
// 1. Create a variable with a Boolean value.
const myVariable = false;
// 2. Output the value of the variable to the console.
console.log(myVariable);
// 3. Check whether the variable is true and if so, output a message to the console,
// using the following syntax:
// if(myVariable){
// //action
// }
if (myVariable) {
    console.log("The Value is True.");
}
else {
    console.log("The value is False.");
}
// 4. Add another if statement with an ! in front of the variable to check whether
// the condition is not true, and create a message that will be printed to the
// console in that instance. You should have two if statements, one with an
// ! and the other without. You could also use an if and an else statement
// instead—experiment!
if (!myVariable) {
    console.log("It's not False.");
}
// 5. Change the variable to the opposite to see how the result changes.



// Practice exercise 4.2
console.log("\nPractice exercise 4.2");
console.log("========================\n")
// 1. Create a prompt to ask the user's age
let age = prompt("How old are you?");
// 2. Convert the response from the prompt to a number
age = Number(age);
// 3. Declare a message variable that you will use to hold the console message for the user
let message;
// 4. If the input age is equal to or greater than 21, set the message variable to
// confirm entry to a venue and the ability to purchase alcohol
if (age >= 21) {
    message = "You can enter to a venue and can drink.";
}
// 5. If the input age is equal to or greater than 19, set the message variable to
// confirm entry to the venue but deny the purchase of alcohol
else if (age >= 19) {
    message = "You can enter to a venue but cannot drink.";
}
// 6. Provide a default else statement to set the message variable to deny entry if
// none are true
else {
    message = "You are not allowed to Enter!";
}
// 7. Output the response message variable to the console
console.log(message);



// Practice exercise 4.3
console.log("\nPractice exercise 4.3");
console.log("========================\n")
// 1. Create a Boolean value for an ID variable
const ID = true;
// 2. Using a ternary operator, create a message variable that will check whether
// their ID is valid and either allow a person into a venue or not
const messages = (ID) ? "You are Allowed In" : "Your Entry is Denied ";
// 3. Output the response to the console
console.log(messages);

// Practice exercise 4.4
console.log("\nPractice exercise 4.4");
console.log("========================\n")
// As discussed in Chapter 1, Getting Started with JavaScript, the JavaScript function Math.
// random() will return a random number in the range of 0 to less than 1, including 0
// but not 1. You can then scale it to the desired range by multiplying the result and
// using Math.floor() to round it down to the nearest whole number; for example, to
// generate a random number between 0 and 9:
// // random number between 0 and 1
// let randomNumber = Math.random();
// // multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * 10;
// // removes digits past decimal place to provide a whole number
// RandomNumber = Math.floor(randomNumber);
// In this exercise, we'll create a Magic 8-Ball random answer generator:
// 1. Start by setting a variable that gets a random value assigned to it. The value
// is assigned by generating a random number 0-5, for 6 possible results. You
// can increase this number as you add more results.
const randomNumber = Math.floor(Math.random() * 6);
// 2. Create a prompt that can get a string value input from a user that you can
// repeat back in the final output.
let answer = "Something not Correct";
let question = prompt("Ask me anything");
// 3. Create 6 responses using the switch statement, each assigned to a different
// value from the random number generator.
switch (randomNumber) {
    case 0:
        answer = "It will work out";
        break;
    case 1:
        answer = "Maybe, maybe not";
        break;
    case 2:
        answer = "Probably not";
        break;
    case 3:
        answer = "Highly likely";
    case 4:
        answer: "Its Not Correct";
        break;
    case 5:
        answer = "Try Again";
        break;
    case 6:
        answer = "Better luck Next Time.";
        break;
    default:
        answer = "I don't know about that";
}
// 4. Create a variable to hold the end response, which should be a sentence
// printed for the user. You can assign different string values for each case,
// assigning new values depending on the results from the random value.
let output = "You asked me " + question + ". I think that " + answer;
// 5. Output the user's original question, plus the randomly selecte
console.log(output);



// Practice exercise 4.5
console.log("\nPractice exercise 4.5");
console.log("========================\n")
// 1. Create a variable called prize and use a prompt to ask the user to set the
// value by selecting a number between 0 and 10
let prize = prompt("Choose a number between 0-10");
// 2. Convert the prompt response to a number data type
prize = Number(prize);
// 3. Create a variable to use for the output message containing the value "My
// Selection: "
let outputs = "My Selection: ";
// 4. Using the switch statement (and creativity), provide a response back
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
switch (prize) {
    case 0:
        outputs += "Gold ";
        break;

    case 1:
        outputs += "Coin ";
        break;
    case 2:
        outputs += "Big ";
        break;

    case 3:
        outputs += "Box of HandCraft";
        break;

    case 4:
        outputs += "Silver ";
        break;

    case 5:
        outputs += "Bricks ";
        break;
    case 6:
        outputs += "Mercedes";
        break;

    case 7:
        outputs += "Silver Jewelry";
        break;

    case 8:
        outputs += "Fancy Dress";
        break;

    case 9:
        outputs += "High Heels";
        break;

    case 10:
        outputs += "Makeup";       
         break;

    default:
        outputs += "Sorry Try Again";
}
// 6. Output the message back to the user by concatenating your prize variable
// strings and the output message string
console.log(outputs);

// Chapter projects
console.log("\nChapter projects");
console.log("========================\n")


// Evaluating a number game
console.log("\nEvaluating a number game");
// Ask the user to enter a number and check whether it's greater than, equal to, or less
// than a dynamic number value in your code. Output the result to the user.
let val = prompt("Enter a Number?");
val = Number(val);
let num = 17;
let msg = "nothing";
if (val > num) {
    msg = val + " was greater than " + num;
} else if (val === num) {
    msg = val + " was equal to " + num;
} else {
    msg = val + " is less than " + num;
}
console.log(msg);


// Friend checker game
console.log("\nFriend checker game");
console.log("========================\n")
// Ask the user to enter a name, 
let name = prompt("Enter a name");
// using the switch statement to return a confirmation
// that the user is a friend if the name selected is known in the case statements. You
// can add a default response that you don't know the person if it's an unknown name.
// Output the result into the console.

let statement;
switch (name) {
    case "Sheeza":
        statement = name + " is my friend";
        break;
    case "Abiha":
        statement = name + " is my friend";
        break;
    case "Ayesha":
        statement = name + " is my friend";
        break;
    case "Hafsa":
        statement = name + " is my friend";
        break;
    case "Maham":
        statement = name + " is my friend";
        break;
    default:
       statement = "I don't know " + name;
}
console.log(statement);

// Rock Paper Scissors game
console.log("\nRock Paper Scissors game");
console.log("========================\n")
// This is a game between a player and the computer, where both will make a random
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version
// using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and
// Scissors will beat out Paper. You can use JavaScript to create your own version of
// this game, applying the logic with an if statement. Since this project is a little more
// difficult, here are some suggested steps:
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
const Array = ["Rock", "Paper", "Scissors"];
// 2. Set up a variable that generates a random number 0-2 for the player and then
// do the same for the computer's selection. The number represents the index
// values in the array of the 3 items.
let computer = Math.floor(Math.random() * 3);
let player = Math.floor(Math.random() * 3);
// 3. Create a variable to hold a response message to the user. This can show the
// random results for the player and then also the result for the computer of the
// matching item from the array.
// 4. Create a condition to handle the player and computer selections. If both are
// the same, this results in a tie.
// 5. Use conditions to apply the game logic and return the correct results.
// There are several ways to do this with the condition statements, but you
// could check which player's index value is bigger and assign the victory
// accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the
// computer selection and the result of the game.

let sent = "player selected:" + Array[player] + " vs computer selected:" +
    Array[computer] + " ";
if (player === computer) {
    message += "It's a tie";
} else if (player > computer) {
    if (computer == 0 && player == 2) {
        sent += "Computer Wins";
    } else {
        sent += "Player Wins";
    }
} else {
    if (computer == 2 && player == 0) {
        sent += "Player Wins";
    } else {
        sent += "Computer Wins";
    }
}
console.log(sent);
