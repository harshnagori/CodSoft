let display = document.getElementById('display');
let displayValue = '';

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  displayValue += operator;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === '') {
    displayValue = '0';
  }
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (e) {
    displayValue = 'Error';
    updateDisplay();
    setTimeout(() => {
      clearDisplay();
    }, 1000);
  }
}

function updateDisplay() {
  display.innerText = displayValue;
}
