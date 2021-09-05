var randomNo1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "images/dice" + randomNo1 + ".png";
var radomDiceImg = document.querySelectorAll("img")[0];
radomDiceImg.setAttribute("src", randomImage);

var randomNo2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNo2 + ".png";
var radomDiceImg2 = document.querySelectorAll("img")[1];
radomDiceImg2.setAttribute("src", randomImage2);

if(randomNo1>randomNo2){
  document.querySelector("h1").innerText="Play 1 wins!!!";
}
else{
  document.querySelector("h1").innerText="Play 2 wins!!!";

}
