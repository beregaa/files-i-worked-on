// დავალება 1

// for (let i = 0; i <= 25; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }

// }

// დავალება 2
// for (let index = 0; index > -2000; index -= 2) {
//   console.log(index);
// }

// დავალება 3
// for (let index = 0; index < 100; index++) {
//   if (index == 10) {
//     console.log(`გილოცავთ, თქვენ გაიარეთ ${index} კილომეტრიანი ჩექფოინთი`);
//   } else if (index == 25) {
//     console.log(`გილოცავთ, თქვენ გაიარეთ ${index} კილომეტრიანი ჩექფოინთი`);
//   } else if (index ==75) {
//     console.log(`გილოცავთ, თქვენ გაიარეთ ${index} კილომეტრიანი ჩექფოინთი`);
//   } else if (index == 90) {
//     console.log(`გილოცავთ, თქვენ გაიარეთ ${index} კილომეტრიანი ჩექფოინთი`);
//   }
// }

// დავალება 4
// let sum = 0;
// for (let i = 0; i < 25000; i++) {
//   if (i % 2 == 1) {
//     sum += i;
//   }
// }
// console.log(sum);

// დავალება 5
odd = 0;
even = 0;
for (let i = 500; i < 800; i++) {
  if (i % 2 == 1) {
    odd += i;
  }
  for (let index = 1000; index < 2000; index++) {
    if (i % 2 == 0) {
      even += index;
    }
  }
}
console.log(odd + even);
