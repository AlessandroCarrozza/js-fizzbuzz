
const containerDom = document.getElementById("container");



for (let num = 1; num <= 100; num++) {

    
    if (num%3 == 0 && num%5 == 0) {
        const square = document.createElement("div");
        square.append("FizzBuzz");
        square.classList.add("square");
        square.classList.add("red");
        containerDom.append(square);
    } else if (num%5 == 0) {
        const square = document.createElement("div");
        square.append("Buzz");
        square.classList.add("square");
        square.classList.add("yellow");
        containerDom.append(square);
    } else if (num%3 == 0) {
        const square = document.createElement("div");
        square.append("Fizz");
        square.classList.add("square");
        square.classList.add("green");
        containerDom.append(square);
    } else {
        const square = document.createElement("div");
        square.append(num);
        square.classList.add("square");
        square.classList.add("blue");
        containerDom.append(square);
    }

}



