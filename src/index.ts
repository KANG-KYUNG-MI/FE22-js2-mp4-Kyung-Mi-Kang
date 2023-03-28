const screenDisplay = document.querySelector('.screen') as HTMLDivElement;
const buttons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
const button = document.querySelector('button') as HTMLButtonElement;

let calculation: string[] = [];
console.log(calculation);

let accumulativeCalculation: string;

function calculate(event: any) {
  event.preventDefault();
  
  //const value = button.textContent;

  const value: any = event.target.value
  if (value === 'CLEAR') {
    calculation = [];
    screenDisplay.innerText = '.';

  }

  else if (value === '=') {
    screenDisplay.innerText = eval(accumulativeCalculation)
  } else {
    calculation.push(value);

    accumulativeCalculation = calculation.join('');
    screenDisplay.innerText = accumulativeCalculation;

    console.log(calculation);
    console.log(accumulativeCalculation);
  }
}

buttons.forEach((button) =>
  button.addEventListener('click', (e) => calculate(e))
);

const div = document.querySelector('.container') as HTMLDivElement;
 const img = document.createElement('img') as HTMLImageElement;
div.append(img);

  console.log(import.meta.url);
const imgUrl = new URL('./media/seoul.jpg', import.meta.url);

img.src = imgUrl.toString()


