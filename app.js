// Random NUmber Generator :

let n ;
let y ;
let z ; 

// Main-Thing :

document.getElementById("myBtn").onclick = function() {

     // Generate Number Here ;
     n = Math.floor((Math.random() * 6) + 1);
     y = Math.floor((Math.random() * 6) + 1);

     // Show the Number in HTML Page :
     document.getElementById("text1").innerHTML = " Your first Number is : " + n ;
     document.getElementById("text2").innerHTML = " Your Second Number is : " + y ;
     
     // if Conditional for 6 :
     
     if(n === 6 && y === 6){
          z = "You Got 6" ;
          document.getElementById("text3").innerHTML = z ;
     }else if(n === y){
          z = "True";
          document.getElementById("text3").innerHTML = z ;
     }else {
          z = "False";
          document.getElementById("text3").innerHTML = z ;
     }


}

