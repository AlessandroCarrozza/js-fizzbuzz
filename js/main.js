
const containerDom = document.getElementById("container");



for (let num = 1; num <= 100; num++) {

    
    if (num%3 == 0 && num%5 == 0) {
        const square = `<div class="square red">FizzBuzz</div>`;
        containerDom.innerHTML += square;
    } else if (num%5 == 0) {
        const square = `<div class="square yellow">Buzz</div>`;
        containerDom.innerHTML += square;
    } else if (num%3 == 0) {
        const square = `<div class="square green">Fizz</div>`;
        containerDom.innerHTML += square;
    } else {
        const square = `<div class="square blue">${num}</div>`;
        containerDom.innerHTML += square;
    }

}



