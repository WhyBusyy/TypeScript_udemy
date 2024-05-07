const arrowAdd = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button")!;

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(arrowAdd(5));

const hobbies = ["Soccer", "Football"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person1 = {
  name: "Max",
  age: 31,
};

const copiedPerson = { ...person1 };
