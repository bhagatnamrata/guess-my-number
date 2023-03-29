"use strict";
/*console.log(document.querySelector(".message").textContent);
// querySelector is method to select the element.
//DOM--Document object Model is a Structured representation of HTML documents it allows javascript to access html elements and styles to manipulate them.
//each element in a HTML , there is always one element  node in dom tree.
//we can access or interacted with each node using js. 
//DOM always starts with document object.
//first child element in dom is HTML element.(root element)
// DOM !== javascript
//DOM methods , properties for dom manipulation is not a part of js.  
//DOM and DOM methods are the part of web APIs 
// web API is the libereries of broseres implement and we can access using js
// timers,fetch api are different APIs
document.querySelector(".message").textContent="Correct Number🥳"; //DOM manipulation done.changed the text 
document.querySelector(".number").textContent =13;
document.querySelector(".score").textContent =10;
document.querySelector(".guess").value =23;
console.log(document.querySelector(".guess").value);*/

//Define secret number--
let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);

//declaring variable for score value and update it (reduce it with every incorrect guess)
let score = 20;
let highscore = 0;

const displayMessage= function(message){
    document.querySelector(".message").textContent = message;

}

// document.querySelector(".number").textContent = secretNumber;//set number in placce of "?"

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess); //string ,so convert it into number.

    //when there is no input
    if (!guess) {
        // document.querySelector(".message").textContent = "⛔No Number!";
        displayMessage("⛔No Number!");
    }
    //when player wins
    else if (guess === secretNumber) {
        // document.querySelector(".message").textContent = "Correct Number🥳"; //DOM manipulation done.changed the text 
        displayMessage("Correct Number🥳");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;//set number in placce of "?"

        // document.querySelector(".highscore").textContent = score;// for first time only-
        // here highscore cant be score always --
        //but again if highscore(current) is less than previous highscore it will get retain 
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }


    }
    //guess is wrong--
    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector(".message").textContent = guess > secretNumber ? "Guess is too high📈" : "Guess is too low📉"; //DOM manipulation done.
            displayMessage(guess > secretNumber ? "Guess is too high📈" : "Guess is too low📉");


            score = score - 1;
            //or score-=1;
            document.querySelector(".score").textContent = score;
        }
        else {
            // document.querySelector(".message").textContent = "You lose the game😑"; //DOM manipulation done.changed the text 
            displayMessage("You lose the game😑");

        }
    }
    // //when guess is too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "Guess is too high📈"; //DOM manipulation done.
    //         score = score - 1;
    //         //or score-=1;
    //         document.querySelector(".score").textContent = score;
    //     }
    //     else {
    //         document.querySelector(".message").textContent = "You lose the game😑"; //DOM manipulation done.changed the text 

    //     }

    // }
    // //when guess is too low
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "Guess is too low📉"; //DOM manipulation done.
    //         score = score - 1;
    //         //or score-=1;
    //         document.querySelector(".score").textContent = score;
    //     }
    //     else {
    //         document.querySelector(".message").textContent = "You lose the game😑"; //DOM manipulation done.changed the text 

    //     }
    // }
})
///////////////////////////////
// addEventListener is a method// type of event is click//now what we want to do by adding function
//Working on again button-- reset everything
//1.Select the element with "again " class and attach a click event handler 
//2. In the handler function , restore initial values of the score and secretNumber variable
//3.restore initial conditions of message and number score and guess input field 
//4. also restore the original background color(#222) and number width (15rem).

document.querySelector(".again").addEventListener("click", function () {
    //score 
    score = 20;
    //secretNumber updated-
     secretNumber = Math.floor(Math.random() * 20) + 1;
    //message became initial message-
    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...");
    //score updated-
    document.querySelector(".score").textContent = score;
    // secret number is hidden and replaced by "?"---
   
    document.querySelector(".number").textContent = "?";
    //guess fied emptied-
    document.querySelector(".guess").value = "";

    //restore background color
    document.querySelector("body").style.backgroundColor = "#222";
    //restore the width of secretnumber width
    document.querySelector(".number").style.width = "15rem";

})
//DRY--Dont repeat yourself-
//refactoring-- is restructuring the code without changing the code behaviour
////////////////////////////////////////////////
//Project 2- Modal WIndow-