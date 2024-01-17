let textInput = document.querySelector("#inputtext");
let countChar = document.querySelector(".charcount");
let countWord = document.querySelector(".wordcount");
let toUppercase = document.querySelector(".uppercase");
let toLowercase = document.querySelector(".lowercase");
let textConvert = document.querySelector("#convertarea");

let input = "";

countChar.addEventListener("click", function () {
  input += textInput.value.length;
  alert(` ${input} Characters are present`);
  input = "";
});

countWord.addEventListener("click", function () {
  input += textInput.value.split(" ").length;
  alert(` ${input} Words are present`);
  input = "";
});

toUppercase.addEventListener("click", function () {
  input += textInput.value.toUpperCase();
  //    alert(` ${input} Character are present`)
  alert(`Text in Uppercase is ${input}`);
  input = "";
});

toLowercase.addEventListener("click", function () {
  input += textInput.value.toLowerCase();
  //    alert(` ${input} Character are present`)
  alert(`Text in Lowercase is ${input}`);
  input = "";
});
