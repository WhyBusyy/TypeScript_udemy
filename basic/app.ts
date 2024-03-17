// const person: {
//   name: string;
//   age: number;
// } ={
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} =
  // const person
  {
    name: "ybg",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
    // TS 튜플 타입
  };

// * TS 튜플 타입 => push는 예외로 허용됨 *
person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin", "user"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
