//****1****

// const person = {
//   first: "Elon",
//   last: "Musk",
//   twitter: "@elonmusk",
//   company: "Space X",
// };

// function destructPerson({ twitter, company }) {
//   console.log(twitter, company);
// }
// destructPerson(person);

//2. Skriv en funktion som tar emot nedan objekt och visar för- och efternamn i ett h1-element.

//****2****
// const person = {
//   first: "Elon",
//   last: "Musk",
//   twitter: "@elonmusk",
//   company: "Space X",
// };

// function destPerson({ first, last }) {
//   let header = document.createElement("h1");
//   header.innerHTML = `${first} ${last}`;
//   document.body.appendChild(header);
// }
// destPerson(person);

//****3****
// const item = {
//   name: "Xbox One X",
//   originalPrice: 499.99,
// };

// function killXbox({ originalPrice }, quantity) {
//   console.log(originalPrice, quantity);
//   let totalAmount = originalPrice * quantity;
//   console.log(totalAmount);
// }
// killXbox(item, 4);

//****4****
// const item = {
//   name: "Xbox One X",
//   originalPrice: 499.99,
//   discount: 0.15,
// };

// function shop({ originalPrice, discount }, amount) {
//   let totalAmount = originalPrice * amount - discount;
//   console.log(totalAmount);
// }
// shop(item, 2);

//****5*****
// const person1 = {
//   first: "Anna",
//   last: "Anka",
//   location: "Malmö",
// };
// const person2 = {
//   first: "Nick",
//   last: "Cage",
//   location: "Los Angeles",
// };

// function register({ first }, { last }) {
//   console.log(first);
//   console.log(last);
// }
// register(person1, person2);

//****6****
// const person = {
//   first: "Nicholas",
//   last: "Cage",
// };

// //Klon av objektet
// const updatedPerson = { ...person };
// updatedPerson.location = "Malmö";

// function theClone({ first, last, location }) {
//   console.log(updatedPerson);
// }
// theClone(updatedPerson);

//****7*****
// const arr1 = ["fre", "lör", "sön"];
// const arr2 = ["mån", "tis"];
// const arr3 = ["ons", "tors"];

// const arr4 = [...arr1, ...arr2, ...arr3];
// arr4.splice(0, 0, ...arr2);
// arr4.splice(2, 0, ...arr3);
// arr4.splice(7, 4);
// console.log(arr4);

//****8****
//Första är INDEX - ANDRA ÄR HUR MÅNGA DU VILL TA BORT - SEN SPREAD!
// const month1 = ["jan", "feb"];
// const month2 = ["mar", "apr", "maj"];
// const month3 = ["sep", "okt"];
// const year = ["jun", "jul", "aug", "nov", "dec"];

// year.splice(0, 0, ...month1);
// year.splice(2, 0, ...month2);
// year.splice(8, 0, ...month3);
// console.log(year);

// ***9****
// const prop1 = "animal";
// const prop2 = "name";
// const prop3 = "continent";

// const theAnimals = {};

// theAnimals[prop1] = "Nelson";
// theAnimals[prop2] = "Mister";
// theAnimals[prop3] = "Malmö";

// console.log(prop1);
// console.log(theAnimals);

//****10****

const animals = {
  animal: "lion",
  name: "simba",
  continent: "africa",
};

function callAnimals({ animal, name, continent }) {
  console.log(Object.keys(animals));
}
callAnimals(animals);
