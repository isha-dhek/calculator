function appendNumber(number) {
    document.getElementById("display").value += number;
  }
  
  function appendSymbol(symbol) {
    document.getElementById("display").value += symbol;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteLastChar() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    var display = document.getElementById("display");
    var result = eval(display.value);
    display.value = result;
  }
  