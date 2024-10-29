
// 1. Gör en array som innehåller 5 st olika frukter av datatypen string.
// let fruits = ["apple", "banana", "pear", "orange", "lime"];
// console.log(fruits);

// // 2. En array som innehåller 3 olika datatyper
// let datatypesArray = ["string", 11, true];
// console.log(datatypesArray);

// // 3. Låt "animals" innehålla antalet objekt i arrayen
// let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
// console.log(animals.length);

// console.log(animals[0]); // 4. Hämta cat

// console.log(animals[3]); // 5. Hämta funky chihuahua

// // 6. Byt ut hamster mot tiger
// animals[1] = "tiger";
// console.log(animals[1]);

// 7. Lägg ihop två arrayer a och b
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let aplusb = a.concat(b);
// console.log(aplusb);

// 8. Merga array "b" in i "a" på index 3
// let a = [1, 2, 3, 7, 8, 9];
// let b = [4, 5, 6];

// a.splice(3, 0, ...b);
// console.log(a);

// 9. Klona array
// let arr = ["a", "b", "c"];

// let clonedArr = arr.slice();
// console.log(clonedArr);

// let fruits = ["kiwi", "apple", "pear"];

// fruits.push("banana"); // 10. Lägg till en frukt i slutet av arrayen
// console.log(fruits);

// fruits.unshift("orange"); // 11. Lägg till en frukt i början av arrayen
// console.log(fruits);

// fruits.pop(); // 12. Ta bort sista frukten i arrayen
// console.log(fruits);

// fruits.shift(); // 13. Ta bort första frukten i arrayen
// console.log(fruits);

// fruits.splice(1, 0, "orange"); // 14. Sött in frukt på index 1
// console.log(fruits);

// fruits.splice(2, 0, "strawberry", "blueberry", "mango"); // 15. Sätt in tre frukter på index 2
// console.log(fruits);

// let names = ["David", "Christoffer", "Johan", "Maja"]; 

// names.splice(1, 2); // 16. Ta bort Christoffer och Johan
// console.log(names);

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // 17. Spegelvänd arrayen ovan
// nums.reverse();
// console.log(nums);

let str = "Supercalifragilisticexpialidocious";

console.log(str.includes("n")); // 18. Kika om strängen innehåller bokstaven 'n'