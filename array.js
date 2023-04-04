//დავალება 1

// let userfirstName = "დათო";

// console.log("სალამალეიქუმ " + userfirstName);

//დავალება 2

// let userBalance = 50;
// let cartTotal = 70;
// let x = userBalance - cartTotal;

// if (userBalance >= cartTotal) {
//   console.log("გადახდა არს");
// } else {
//   console.log(
//     `თქვენ არ გაქვთ საკმარისი თანხა, გთხოვთ დამატებით ჩარიცხოთ ${x} ლარი ოპერაციის დასასრულებლად`
//   );
// }

// დავალება 3

// let maxScore = 100;
// let barrier = 50;
// let studentScore = 60;

// if (studentScore >= barrier) {
//   console.log(
//     `გილოცავთ, თქვენ გადალახეთ ${barrier} ქულიანი ბარიერი ${studentScore}/ ${maxScore} ქულით`
//   );
// } else {
//   console.log(
//     `ვწუხვარ, თქვენ ვერ გადალახეთ ${barrier} ქულიანი ბარიერი ${studentScore}/${maxScore}ქულით`
//   );
// }

//დავალება 4
let shippingIsPossible = true;
let text = `თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი ${
  shippingIsPossible ? "არის" : "არ არის"
} `;

console.log(text);

// დავლება 5
// let userLoggedIn = false;
// let userFirstName = "ამბაკო";
// let userIsFemale = true;
// if (userLoggedIn) {
//   console.log(
//     `ზდრასტი გაუმარჯოს ${userIsFemale ? "ქალბატონო" : ""} ${userFirstName}`
//   );
// } else {
//   console.log(`აბა ჰე  ${userIsFemale ? "ქალბატონო" : ""} ${userFirstName}`);
// }
// დავალება 6
// let userQuestions = [
//   "რა?",
//   "სად?",
//   "როდის",
//   "რა?",
//   "სად?",
//   "როდის",
//   "რა?",
//   "სად?",
//   "როდის",
//   "რა?",
//   "სად?",
//   "როდის",
//   "რა?",
//   "სად?",
//   "როდის",
//   "რა?",
//   "სად?",
//   "როდის",
//   "რა?",
//   "სად?",
//   "როდის",
//   "რა?",
//   "სად?",
//   "როდის",
//   "ვინ?",
// ];
// if (userQuestions.length = 25) {
//   console.log("შემდეგი კითხვის დასმას შეძლებ 3 საათში");
// }

//7 დავალება 7
// let userWeights = [70, 60 , 55];
// let goal = 50;
// let lastItem = userWeights[userWeights.length - 1];
// let x = lastItem - goal
// if (goal < lastItem ) {
//     console.log(` ჯერ კდიევ დაგრჩა ${x} კილო დასაკლები`);
// } else {
// }

// დავალება 8

// let gigosTestResults = [90 , 70 , 80]

// let math =gigosTestResults[2] -gigosTestResults[0]

// if (math < 10) {
//     console.log("ნიჭიერია მარა ზარმაცი");

// }else{
//     console.log('უხ გიგო გიგოოო');
// }

// დაავალება 9

// let gigosTestResults = [60  , 62]

// let math = gigosTestResults[1] - gigosTestResults[0]
// console.log(math);

// if (math <= 2) {
//     console.log("ნიჭიერია მარა ზარმაცი");

// } else if (math <= 5 ){
// console.log(" კარგ ბოვშვია");
// }

// დავალება 10
function isBigEnough(value) {
  return value >= 25;
}

const gigosResults = [50,25 , 90, 44].filter(isBigEnough);

if (gigosResults.length >= 4) {
  console.log('გილოცავ :))');
  
} else {
  console.log('მაგრად გადაურჩი 4 წლიან არაფერს');
}

