// Random NUmber Generator :

let n ;
let y ;
let z ; 

// Main-Thing :

document.getElementById("myBtn").onclick = function() {

     // Generate Number Here ;
     n = Math.floor(Math.random() * 3) + 1;
     y = Math.ceil(Math.random() * 3) + 1;

     // Show the Number in HTML Page :
     document.getElementById("text1").innerHTML = " Your first Number is : " + n ;
     document.getElementById("text2").innerHTML = " Your Second Number is : " + y ;

     // IF Conditional :
     if(n === y) {
          z = "true" ;
          document.getElementById("text3").innerHTML = z ;
     }else {
          z = "False" ;
          document.getElementById("text3").innerHTML = z ;
     }


}

