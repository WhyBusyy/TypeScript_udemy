// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "ybg",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "ybg",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// * TS 튜플 타입 => push는 예외로 허용됨 *
// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin", "user"];

let favoriteActivities: string[];
// let favoriteActivities: any[];
// any 타입은 컴파일러가 아무 것도 하지 못하게 함. 모든 타입이 가능.
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
