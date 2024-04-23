"use strict";
const arrowAdd = (a, b = 1) => a + b;
const printOutput = (output) => console.log(output);
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => console.log(event));
}
printOutput(arrowAdd(5));
//# sourceMappingURL=app.js.map