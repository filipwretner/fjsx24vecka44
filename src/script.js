console.log("Hello array thuesday");

// 1.1 Skapa och Manipulera Arrayer
// Exempel 1: Skapa en Array
let fruits = ["apple", "mango", "banana"];

// console.log("fruits: ", fruits);

// Exempel 2: Åtkomst till Array-element
// console.log("fruit at index 0: ", fruits[0]);
// console.log("fruit at index 1: ", fruits[1]);
// console.log("fruit at index 2: ", fruits[2]);

// Exempel 3: Ändra ett Array-element
fruits[1] = "mandarin";
// console.log("fruit at index 1 from line 15 and not from line 5: ", fruits[1]);
// console.log("fruits from line 15 and not from line 5: ", fruits);

// 1.2 Array-metoder
// Exempel 4: push() och pop()
fruits.push("kiwi");
// console.log("fruits: line 21", fruits);

let removedFruit = fruits.pop();

// console.log("fruits line 24: ", fruits);
// console.log("removedFruit line 24: ", typeof removedFruit);

//
// Exempel 5: unshift() och shift()

let lenghtOfFruitsArray = fruits.unshift("strawberry");
// console.log("fruits: line 32", fruits);
// console.log("lenghtOfFruitsArray: line 32", lenghtOfFruitsArray);

let strawberry = fruits.shift();
console.log("fruits: line 36", fruits);
// console.log("strawberry: line 36", strawberry);

//
// Exempel 6: splice()
// Lägg till element med splice()
fruits.splice(1, 0, "lime", "watermelon");

// console.log("fruits: line 43", fruits);

// Ta bort element med splice()
fruits.splice(2, 1);
// console.log("fruits: line 48", fruits);
fruits.splice(3, 1);
console.log("fruits: line 50", fruits);

// 1.3 Iterera över Arrayer
// Exempel 7: For-loop
for (let i = 0; i < fruits.length; i++) {
  console.log("fruit at index...", fruits[i]);
}
// Exempel 8: For-of-loop
for (const fruit of fruits) {
  console.log(
    "Each fruit from the fruits array inside the for-of-looop:  ",
    fruit
  );
}
// Exempel 9: forEach()

fruits.forEach(function (fruit, index) {
  console.log("fruit: ", fruit);
});
