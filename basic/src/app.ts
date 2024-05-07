// const arrowAdd = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button")!;

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(arrowAdd(5));

const hobbies = ["Soccer", "Football"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person1 = {
  firstName: "Max",
  age: 31,
};

const copiedPerson = { ...person1 };

//----
const arrowAdd = (...numbers: number[]) => {
  return numbers.reduce((a, b) => a + b, 0);
};

const addedNumbers = arrowAdd(5, 3, 4, 3.1);
console.log(addedNumbers);

const [hobby1, hobby2, ...restHobbies] = hobbies;
const { firstName: userName, age } = person1;
