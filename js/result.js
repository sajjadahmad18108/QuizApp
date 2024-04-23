
let stdDatabase = JSON.parse(localStorage.getItem("studentDetail")) || [];
console.log("database :", stdDatabase);

let userScore = JSON.parse(localStorage.getItem("score"));

let lastIndex = stdDatabase.length - 1;

// for (let i = 0; i < stdDatabase.length; i++) {
//     console.log("data", stdDatabase[i]);
// }

let lastUser = stdDatabase[lastIndex];
// console.log("last User :" , lastUser);


// user data

let myName = document.querySelector(".stdname");
let myRollNo = document.querySelector(".rollno");
let myBatch = document.querySelector(".Batch");
let mySection = document.querySelector(".section");
let myScore = document.querySelector(".score");

myName.innerText = lastUser.studentName;
myRollNo.innerText = lastUser.rollNo;
myBatch.innerText = lastUser.batch;
mySection.innerText = lastUser.session;
myScore.innerText = userScore;