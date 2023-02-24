
const containerDom = document.getElementById("container");



for (let num = 1; num <= 100; num++) {

    
    if (num%3 == 0 && num%5 == 0) {
        const square = `<div class="square">FizzBuzz</div>`;
        containerDom.innerHTML += square;
    } else if (num%5 == 0) {
        const square = `<div class="square">Buzz</div>`;
        containerDom.innerHTML += square;
    } else if (num%3 == 0) {
        const square = `<div class="square">Fizz</div>`;
        containerDom.innerHTML += square;
    } else {
        const square = `<div class="square">${num}</div>`;
        containerDom.innerHTML += square;
    }

}



