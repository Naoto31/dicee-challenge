const randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
const randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

document.querySelectorAll('img')[0].setAttribute("src", `images/dice${randomNumber1}.png`); //Left dice
document.querySelectorAll('img')[1].setAttribute("src", `images/dice${randomNumber2}.png`); //Right dice

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Won";

} else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Won";

} else {
  document.querySelector("h1").innerHTML = "Draw";
}
