




function Llogarit()
{
console.log("Llogarit");
var numri1= document.getElementById("nr1").value;
numri1 = parseInt(numri1);
var numri2= document.getElementById("nr2").value;
numri2 = parseInt(numri2);
var veprimi= document.getElementById("veprimi").value;
console.log(numri1);
console.log(numri2);
console.log(veprimi);


var rezultati = 0;

if (veprimi == '*'){
    rezultati = numri1 * numri2;
}


else if (veprimi == '/'){
    rezultati = numri1 / numri2;

}

else if (veprimi == '+'){

    rezultati = numri1 + numri2;
    
}
else if (veprimi == '-'){

    rezultati = numri1 - numri2;
    
}

else 
{
    alert ("Ju lutem jepni nej veprim")
}

console.log(rezultati);

document.getElementById("rezultati").value=rezultati;


}

function GjejShumen()
{
    var limiti = document.getElementById("limiti").value;
    limiti = parseInt(limiti);
  var PrimeNumbers="";

  for(var i=1; i<=limiti;i++){

var count=0; //numeron plotepjestuesit
for(var j=1; j<= i; j++) { //nga 1 deri tek numri qe do te marim ne shqyrtim 

if(i%j == 0){
count ++; //nqs nje nga numrat plotepjestohen rrisim count 

}
}


if(count == 2){
PrimeNumbers +=i +" ,";


}


}
console.log(PrimeNumbers);



  document.getElementById("shuma").value=PrimeNumbers;

}