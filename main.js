

var button = document.getElementById("calculate-button")
var answer = document.getElementById("answer")


var calculate = function () {
  var firstNum = document.getElementById("value-one");
  var secondNum = document.getElementById("value-two");
  var x = Number(firstNum.value);
  var y = Number(secondNum.value);
  var sum = (x + y);
  answer.innerHTML = sum;
};

button.addEventListener("click", calculate);

//long method if I used runCalc(x + y); on line 12
// function runCalc (x, y) {
//   var sum = x + y;
//   answer.innerHTML = sum;
// }
