
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

// let str = "Supercalifragilisticexpialidocious";

// console.log(str.includes("n")); // 18. Kika om strängen innehåller bokstaven 'n'
// console.log(str.includes("x")); // 19. Kika om strängen innehåller bokstaven 'x'
// console.log(str.indexOf("p")); // 20. Hitta position för 'p'
// console.log(str.slice(0, 5)); // 21. Första 5 tecknen
// console.log(str.slice(-7)); // 22. Sista 7 tecknen

// let numArray = [23, 45, 5, 62, 1, 21, 3, 54];

// console.log(numArray.filter(num => num > 5)); // 23. Filtrera alla nummer över 5

// console.log(numArray.filter(num => num < 5)); // 24. Filtrera alla nummer under 5

// let persons = [
//   {
//     name: "Felicia",
//     age: 12,
//   },
//   {
//     name: "Pelle",
//     age: 20,
//   },
//   {
//     name: "Peter",
//     age: 59,
//   },
//   {
//     name: "Anna",
//     age: 32,
//   },
//   {
//     name: "Jocke",
//     age: 18,
//   },
//   {
//     name: "Ella",
//     age: 3,
//   },
// ];

// console.log(persons.filter(person => person.age >= 18).map(person => person.name)); // 25. Skriv ut alla namn som är 18 år och äldre

// console.log(persons.filter(person => person.age < 18).map(person => person.name)); // 26. Skriv ut alla namn som är mindre än 18 år

// let arr = ["beta", "alfa", "gamma"];

// console.log(arr.sort()); // 27. Sortera i bokstavsordning

// let nums = [1, 5, 7, 9, 3, 4, 2, 6, 8];

// console.log(nums.sort((a, b) => a - b)); // 28. Sortera numeriskt

// console.log(persons.sort((a, b) => a.age - b.age)); // 29. Sortera person-array med ålder, yngst först

// console.log(persons.sort((a, b) => b.age - a.age)); // 30. Sortera person-array med ålder, äldst först

// console.log(persons.sort((a, b) => a.name.localeCompare(b.name))); // 31. Sortera person-array i bokstavsordning

// console.log(persons.map(person => {return {...person, name: person.name.toUpperCase()};})); // 32. I person-arrayen ovan, gör om alla namn till _versaler_.

// console.log(persons.map(person => {return {...person, name: person.name.split('').reverse().join('')};})); // 33. I person-arrayen ovan, _spegelvänd_ alla namn.

// let fruits = ["apelsin", "päron", "äpple", "kiwi"];

// fruits.forEach(fruit => console.log(fruit)); // 34. Loopa med forEach och skriv ut varje ord

// for (let fruit of fruits) { // 35. Loopa med for of och skriv ut varje ord
//     console.log(fruit);
// }

// for (let i = 0; i < fruits.length; i++) { // 36. Loopa med for och skriv ut varje ord
//     console.log(fruits[i]);
// }

// 37. Loopa ut och skriv ut med index
// fruits.forEach((fruit, index) => { // ForEach
//     console.log(`${index} - ${fruit}`);
// });

// for (let [index, fruit] of fruits.entries()) { // for of loop - entries() för att sätta koppla samman [index, fruit] ur arrayen
//     console.log(`${index} - ${fruit}`);
// }

// for (let i = 0; i < fruits.length; i++) { // Vanlig for loop
// console.log(`${i} - ${fruits[i]}`);
// }


// OBJECT BOOTCAMP

// 1. Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är title, author, numPages.
// 2. Skapa en array av objekt med flera stycken böcker
// 3. Skapa en funktion som söker efter en titel i arrayen, om den hittar en så returneras objektet annars null. Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar.

// bookOne = {title: "Cthulu", author: "Lovecraft", numPages: 300};
// bookTwo = {title: "Different", author: "Lovecraft", numPages: 300};
// bookThree = {title: "More Different", author: "Lovecraft", numPages: 300};

// let library = [bookOne, bookTwo, bookThree];
// let searchTitle = library.filter(book => book.title.toLowerCase().includes("cthulu"));

// console.log(searchTitle);

// Letter frequency



// User Register

// filterByCountry

// function filterByCountry(users, countryCode) {
//   return users.filter(user => user.nat === countryCode);
// }

// console.log(filterByCountry(users, "DE"));

// filterByGender

// function filterByGender(users, gender) {
//   return users.filter(user => user.name.title === gender);
// }

// console.log(filterByGender(users, "Mr"));
// console.log(filterByGender(users, "Miss"));

// listEmails

// function listEmails(users) {
//   return users.map(user => user.email);
// }

// console.log(listEmails(users));

// Reformat Emails

// const newDomains = { FR: ".fr", CH: ".ch", DE: ".de", NO: ".no", US: ".us", TR: ".tr", FI: ".fi", GB: ".uk", NL: ".nl", NZ: ".nz", AU: ".au", ES: ".es", IE: ".ie", DK: ".dk", IR: ".ir", BR: ".br", CA: ".ca" };

// function reformatEmails(users) {
//   return users.map(user => {
//     const lastName = user.name.last.toLowerCase();
//     const firstName = user.name.first.toLowerCase();
//     const domain = newDomains[user.nat];
    
//     return `${lastName}.${firstName}@evilcorp${domain}`;
//   });
// }

// console.log(reformatEmails(users));

// HIGH ORDER FUNCTIONS

