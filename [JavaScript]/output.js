// 1.
// console.log([1, 2] == [1, 2]);
// console.log({} == {});

// Reason: Both will result in false because array and object both are mutable and every mutable thing in javascript is stored as reference
// which points to its value in memory

// 2.
// let num = 0;
// console.log(num++); //0
// console.log(++num); //2
// console.log(num); //2

// 3.
const user1 = {
  name: "John",
  age: 25,
  address: {
    city: "Lucknow",
    state: "UP",
  },
};

// const user2 = user1;

// user2.name = "Ram";
// user2.address.city = "Ayodhya";
// console.log(user1);
// console.log(user2);

// Reason: Both user1 and user2 will have the updated value where name is Ram and city is Ayodhya because when we assigned user1 to user2
// then at that time reference of user1 is assigned to assigned so when we change any value using the user1 or user2 it is basically
// the same object's value which is stored in memory

// Create a Deep Copy Of Object
const user2 = JSON.parse(JSON.stringify(user1));

user2.name = "Ram";
user2.address.city = "Ayodhya";
console.log(user1);
console.log(user2);
