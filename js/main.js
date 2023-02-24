
const containerDom = document.getElementById("container");



for (let num = 1; num <= 100; num++) {

    const square = `<div class="square">testo</div>`;
    containerDom.innerHTML += square;
    
    if (num%3 == 0 && num%5 == 0) {
        console.log("fizzbuzz");
    } else if (num%5 == 0) {
        console.log("buzz");
    } else if (num%3 == 0) {
        console.log("fizz");
    } else {
        console.log(num);
    }

}



