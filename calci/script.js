const numberInput = document.getElementById('number-input');
const addButton = document.getElementById('add-button');
const calculateButton = document.getElementById('calculate-button');
const averageDisplay = document.getElementById('average-display');

let numbers = [];

addButton.addEventListener('click', () => {
  const number = parseFloat(numberInput.value);
  if (!isNaN(number)) {
    numbers.push(number);
    numberInput.value = '';
  } else {
    alert('Please enter a valid number!');
  }
});

calculateButton.addEventListener('click', () => {
  if (numbers.length === 0) {
    averageDisplay.textContent = 'No numbers entered!';
  } else {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    const average = total / numbers.length;
    averageDisplay.textContent = `The average is: ${average.toFixed(2)}`;
  }
});