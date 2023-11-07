// Övning 2

// 2.1a

// let x, y;

// x = 'Sant';
// y = 'Falskt';
// console.log(x)
// console.log(y)

// 2.1b

// let x, y;

// x = 'Sant';
// y = 'Falskt';
// console.log(x && x)
// console.log(x && y)
// console.log(y && x)
// console.log(y && y)
// console.log(x || x)
// console.log(x || y)
// console.log(y || x)
// console.log(y || y)


// 2.2a

// let tid;

// tid = 12;
// if (tid == 12) {
//   console.log('Dags för lunch')
// }

// 2.2b + 2.2c

// let tid;

// tid = 13;
// if (tid == 12) {
//   console.log('Dags för lunch')
// } else if (tid < 12) {
//   console.log('Förmiddag')
// } else if (tid > 12) {
//   console.log('Eftermiddag')
// }
// console.log(tid)

// 2.3
// Jag tror att varv kommer att öka med 1 tills varv 9 nås.

// let varv;

// varv = 5;
// while (varv < 9) {
//   console.log(varv)
//   varv++;
// }

// 2.4
// Jag tror att varv kommer att minska med 2 tills det når 16. Sedan med 3 tills det når 12.

// let varv;

// varv = 20;
// while (varv > 12) {
//   console.log(varv)
//   if (varv == 16) {
//     varv = varv - 1;
//   }
//   varv = varv - 2;
// }
// console.log(varv);

//Det som hände var att varv minskade med 2 tills det nådde 16. Där minskade det med 3 en gång för att sedan minska med 2 igen tills värdet var under 12, vilket jag kunde säkerställa med en extra console.log

// 2.5a

// let x;

// x = 0;
// x = x + 1;
// x = x + 1;
// x = x + 1;
// x = x + 1;
// x = x + 1;
// console.log(x)

// 2.5b

// let x;

// x = 0;
// while (x < 5) {
//   x = x + 1;
//   console.log(x)
// }

// 2.5c

// let x;

// x = 0;
// while (x < 5) {
//   x = x + 1;
//   if (x == 3) {
//     console.log(x)
//   }
//   console.log(x);
// }

// 2.6

// let varv;

// varv = 0;
// while (!(varv > 7)) { //upprepa tills varv är större än 7
	
//   varv++;
//   console.log(varv)
// }
// console.log(varv)

// 2.7

// let x;

// x = 1;
// for (var count = 0; count < 10; count++) {
//   x = x * 2;
//   console.log(x)
// }

// 2.8

let summa;

summa = 1;
for (let count = 0; count < 10; count++) {
  summa = summa++;
  console.log('Summan är:')
  console.log(summa)
}