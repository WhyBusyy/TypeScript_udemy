"use strict";
// const names: Array<string> = [];
// // names[0].split(" ");
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });
// promise.then((data) => {
//   // data.split(" ");
// });
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
//# sourceMappingURL=app.js.map