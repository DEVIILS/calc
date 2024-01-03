const resultElement = document.getElementById("result"),
  input1 = document.getElementById("input1"),
  input2 = document.getElementById("input2"),
  submitBtn = document.getElementById("submit");

let action = "+";
result.innerHTML = "0";

function btnChangeSymbolAction(symbol) {
  action = String(document.getElementById(symbol.id).textContent);
  action = String(action.replace(/\n/g, "")); // удаление переносов
  action = String(action.replaceAll(" ", "")); // удаление пробелов
}
function printResult(result) {
  result < 0
    ? (resultElement.style.color = "red")
    : (resultElement.style.color = "green");
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  switch (actionSymbol) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
};
