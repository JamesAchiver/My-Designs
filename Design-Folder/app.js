// Make a Small Guess Game :

const answer = Math.floor((Math.random() * 10) + 1) ;
let guesses = 0 ;
// console.log(answer) ;
document.getElementById("mySubmit").onclick = function() {
     let guess = document.getElementById("myInput").value ;
     guesses++ ;
     if(guess == answer){
          document.getElementById("guessResult").innerHTML = `${answer} is Correct! Guesses : ${guesses} ` ;
          // location.reload() ;
     }else if(guess > answer){
          document.getElementById("guessResult").innerHTML = `Too Large! Guesses : ${guesses}`;
          // location.reload() ;
     }else if(guess < answer){
          document.getElementById("guessResult").innerHTML = `Too Small ! Guesses : ${guesses}`;
          // location.reload();
     }else {
          document.getElementById("guessResult").innerHTML = `Enter a Number ! Guesses : ${guesses}`;
     }

     document.getElementById("mySubmit").ondblclick = function() {
          location.reload();
     }

}


console.log(`Answer :  ${answer}`);
