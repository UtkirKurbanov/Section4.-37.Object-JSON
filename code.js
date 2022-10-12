var person = {
  name: "Nick",
  age: 27,
  car: {
    model: "Kia",
  },
  job: "Front-End",
  friends: ["Eva", "Patrick"],
};

var str = JSON.stringify(person); //change to string
// console.log(person);
console.log(str); //
console.log(JSON.parse(str)); //return to object
