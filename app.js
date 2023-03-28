/// Some Few More Conditional code :
let x;

document.getElementById("myBtn").onclick = function() {
     if(document.getElementById('check1').checked){
          x = " The BOX is Checked !";
          document.getElementById("myText").innerHTML = x ;
     }else {
          x = " the BOX is Not Checked !";
          document.getElementById("myText").innerHTML = x ;
     }
}

console.log(x);