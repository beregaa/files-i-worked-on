//დავალება 1

// let newMessages = false;

// (let = console.log("სალამი ჯიმა")),
//   newMessages ? console.log("წაუკითხავი მესიჯია ჯიმა") : " ";
//დავალება 2
// let userBalance = 20;
// let userCartTotal = 20;

// let = userBalance >= userCartTotal
//     ? console.log("გადახდა წარმატების შესრულდა")
//     : console.log("თქვენ არ გაქვთ საკმარისი თანხხა");

// დავალება 3
// let testScore = 70;
// if (testScore >= 95) {
//   console.log("შეჩემააა საღოლ!!!");
// } else if (testScore >= 70) {
//   console.log("ოპაააა");
// } else if (testScore >= 50) {
//   console.log(" გეპეი... ფაქტიურად ჩაიჭერი");
// }

// დავალება 4

let adminSale = 30;
let frequentClientsale = 20;
let studentSale = 10;

let userBalance = 40;
let userCartTotal = 60;

let userIsAdmin = false;
let userIsFrequentClient = true;
let userIsStudent = false;

if (
  (userIsAdmin && userBalance >= userCartTotal - adminSale) ||
  (userIsFrequentClient && userBalance >= userCartTotal - frequentClientsale) ||
  (userIsStudent && userBalance >= userCartTotal - frequentClientsale)
) {
  console.log("გადახდა წარმატებით შესრულდა");
} else {
  console.log("გადახდა წარმატებით ვერ შესრულდა");
}

//დავალება 5

// let fuel = 80;

// if (fuel >= 80) {
//   console.log("ბათუმამდე");
// } else if (fuel >= 50) {
//   console.log("ქუთაისამდე");
// } else if (fuel >= 30) {
//   console.log("ხაშურამდე");
// } else if (fuel >= 20) {
//   console.log("გორამდე");
// } else if (fuel >= 10) {
//   console.log("იგოეთამდე");
// }
// დავალება 6

let fuel = 200;

if (fuel - 80 > 80) {
  console.log("ჩახვალ თბილისამდეც");
}
