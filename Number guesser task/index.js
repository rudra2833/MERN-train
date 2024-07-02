var totalGuess = 0;
var gameStarted = false;
var randomNumber = 0;

function start(){
    
    console.log("Game started");
    gameStarted = true;

    randomNumber = Math.floor(Math.random() * 100) + 1
    console.log("Random number: " + randomNumber);   

    // hidding the start aand unhidding content
    document.getElementsByClassName("starter")[0].style.display = "none";
    document.getElementsByClassName("content")[0].style.display = "flex";

    document.getElementsByClassName("answer_title")[0].textContent="";

    //changing the guess number in html
    document.getElementById("total_guesses").innerHTML = totalGuess;
}

function guess(){
    if(gameStarted){

        var answer_title = document.getElementsByClassName("answer_title")[0];

        var input = document.getElementById("guess").value;
        totalGuess++;

        //changing the guess number in html
        document.getElementById("total_guesses").innerHTML = totalGuess;

        console.log("Total guess: " + totalGuess);
        console.log("User input: " + input);


        if(input == randomNumber){
            answer_title.textContent = "Congratulation! You have guessed the correct number";
            document.getElementsByClassName("reset")[0].style.display = "flex";
            // reset();
        } else if(input > randomNumber){
            answer_title.textContent = "Your guess is too high";
        } else if(input < randomNumber){
            answer_title.textContent = "Your guess is too low";
        }
    } else {
        alert("Please start the game first");
    }
}

function reset(){
    totalGuess = 0;
    gameStarted = false;
    randomNumber = 0;

    // hidding the start aand unhidding content
    document.getElementsByClassName("starter")[0].style.display = "flex";
    document.getElementsByClassName("content")[0].style.display = "none";
    document.getElementsByClassName("reset")[0].style.display = "none";
}