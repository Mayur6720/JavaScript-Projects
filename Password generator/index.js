let generateBtn = document.querySelector(".generate-Btn");
let display = document.querySelector(".display");
let limit = document.getElementsByClassName("limit");
let condition = document.querySelectorAll(".condition");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let spacialChr = "!@#$%&*";

let length = 5;
generateBtn.addEventListener("click", function () {
  let show =
    lowerCase[Math.ceil(Math.random() * 24)] +
    number[Math.ceil(Math.random() * length)] +
    upperCase[Math.ceil(Math.random() * 24)] +
    number[Math.ceil(Math.random()*length)] + 
    upperCase[Math.ceil(Math.random()*24)]
    spacialChr[Math.ceil(Math.random() * length)];
  console.log(show);
  display.value = show;
});

