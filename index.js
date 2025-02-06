// Random Image 1 ;
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImg1 = "dice" + randomNumber1 + ".png";
var randomImgSource1 = "./images/" + randomImg1;
document.querySelectorAll("img")[0].setAttribute("src", randomImgSource1);

// Random Image 2;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImg2 = "dice" + randomNumber2 + ".png";
var randomImgSource2 = "./images/" + randomImg2;
document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);


if (randomImg1 > randomImg2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins...Hooray! ";
}
else if (randomImg1 < randomImg2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins....Hooray";
}
else {
    document.querySelector("h1").innerHTML = "Draw.";
}




