// Another Guessing Game (upgraded):

let Answers = Math.floor((Math.random() * 15) + 1) ;
let Guesses = 0 ;

var guessDot = document.getElementById("resultPreview") ;



document.getElementById("myBtn").onclick = function(){
     Guesses++ ;
     let result = document.getElementById("input1").value ;

     if(result == Answers){
          document.getElementById("resultPreview").innerHTML = `WOW ! ${Answers} is Correct` ;
          document.getElementById("resultPreview").innerHTML += ` Guesses : ${Guesses} !`;
          document.getElementById("meter").innerHTML = `✅` ;
          document.getElementById("meter").style.backgroundColor = "#1717";
     }else if(result < Answers){
          document.getElementById("resultPreview").innerHTML = `No it is Small! Guesses : ${Guesses}` ;
          document.getElementById("meter").innerHTML = `🚫`;
          document.getElementById("meter").style.backgroundColor = "rgba(255, 0, 0, 0.623)";
     }else if(result > Answers){
          document.getElementById("resultPreview").innerHTML = `Ohh it is Large! Guesses : ${Guesses}` ;
          document.getElementById("meter").innerHTML = `❌`;
          document.getElementById("meter").style.backgroundColor = "rgba(255, 0, 0, 0.623)" ;
     }else if(result === ""){
          document.getElementById("resultPreview").innerHTML = `Enter a valid Number! Guesses : ${Guesses}` ;
     }else{
          document.getElementById("resultPreview").innerHTML = `Error! Guesses : ${Guesses}` ;
          document.getElementById("meter").innerHTML = `❓`;
          document.getElementById("meter").style.backgroundColor = "rgba(255, 0, 0, 0.623)" ;
     }

     document.getElementById("myBtn").ondblclick = function() {
          location.reload() ;
     }


} 

console.log(Answers);


