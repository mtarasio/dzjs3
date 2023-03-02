

let age = prompt("Введіть ваш вік: ")
if (age < 11) {
   alert ("Ти ще дитинка)");
} else if (age > 11 && age <=17) {
   alert ("Вітаю, ти вже підліток. Ще трохи і станеш дорослим)");
} else if (age > 17 && age <=59) {
   alert ("Ти вже дорослий, якраз у розквіті сил");
} else if (age > 59) {
   alert ("Ти вже отримуєш пенсію?");
}




let num = prompt("Введіть цифру від 0 до 9:")
if (num == 0) {
   alert(")");
} else if (num == 1) {
   alert("!");
} else if (num == 2) {
   alert("@");
} else if (num == 3) {
   alert("#");
} else if (num == 4) {
   alert("$");
} else if (num == 5) {
   alert("%");
} else if (num == 6) {
   alert("^");
} else if (num == 7) {
   alert("&");
} else if (num == 8) {
   alert("*");
} else if (num == 9) {
   alert("(");
}




let n = parseInt(prompt("Введіть початкове число:"));
let b = parseInt(prompt("Введіть кінцеве число:"));

let sum = 0;

for (let i = n; i <= b; i++) {
   sum += i;
}

alert(`Сума чисел в діапазоні від ${a} до ${b}: ${sum}`);



let a = prompt("Введіть п'ятирозрядне число:");
let reverseA = a.split("").reverse().join("");

if (a === reverseA) {
   alert("Це число є паліндромом!");
} else {
   alert("Це число не є паліндромом.");
}




let purchaseAmount = prompt("Ведіть суму вашої покупки:");

if (purchaseAmount >= 200 && purchaseAmount < 300) {
   let discount = purchaseAmount * 0.03;
   let finalAmount = purchaseAmount - discount;
   alert("Сума до оплати зі знижкою: " + finalAmount.toFixed(2));
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
   let discount = purchaseAmount * 0.05;
   let finalAmount = purchaseAmount - discount;
   alert("Сума до оплати зі знижкою: " + finalAmount.toFixed(2));
} else if (purchaseAmount >= 500) {
   let discount = purchaseAmount * 0.07;
   let finalAmount = purchaseAmount - discount;
   alert("Сума до оплати зі знижкою: " + finalAmount.toFixed(2));
}
