//2
let personname: string = "Rasheed";
console.log("hello", personname, "would you like to learn some python");
//3

let Personname = "Hi Rashid how are you";
console.log(Personname.toLowerCase());
console.log(Personname.toUpperCase());
//title case starting from here 11
let words: string[] = Personname.split(" ");
let titlecase: string = " ";
for (let i = 0; i < words.length; i++) {
  titlecase +=
    words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecase);
//4
{
  let quote = "'Work,Work and Work'";
  console.log(`Quaid E Azam Said: ${quote}`);
}
//5
let quote: string =
  "'A person who never made a mistake never tried anything new.'";
let famous_person: string = "Albert Einstein";
console.log(`${famous_person} said ${quote}`);
//6
{
  let name: string = " Muhammad Hamza";
  console.log("\t", name, "\t");
  console.log(name);
}
// //7
let a = 5;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a / b);
//8
console.log(5 + 3);
console.log(11 - 3);
console.log(32 / 4);
console.log(4 * 2);
//9+10
let favouritenumber: number = 6;
console.log(`My Favourite number is:${favouritenumber}`);
//11

let naame: string[] = ["ahmed", "ayan", "aqib", "habib"];
console.log(naame[0]);
console.log(naame[2]);
console.log(naame[1]);
console.log(naame[3]);

//12
console.log(`hello,${naame[2]} how are you`);
console.log(`hello,${naame[3]} how are you`);
console.log(`hello,${naame[1]} how are you`);
console.log(`hello,${naame[0]} how are you`);
//13
let own: string[] = ["heavy bike", "civic", "plane", "cycle"];
console.log(`i want to ride a ${own[0]},becaue it is very fast`);
console.log(`i want to drive a ${own[1]},becaue it is very comfortable`);
console.log(`i want to travel on the ${own[2]}`);
console.log(`i want to do stunts on ${own[3]},because it is very thrilling`);
//14
let guest: string[] = ["Elon Musk", "Mark Zukerberg", "Einstein", "Hitler"];
console.log(`Hi ${guest[0]},Hamza Here I Want to invite To A Dinner`);
console.log(`Hi ${guest[1]},Hamza Here I Want to invite To A Dinner`);
console.log(`Hi ${guest[2]},Hamza Here I Want to invite To A Dinner`);
console.log(`Hi ${guest[3]},Hamza Here I Want to invite To A Dinner`);
//15
let guest1: string[] = [
  "Elon Musk",
  "Mark Zukerberg",
  "Einstein",
  "Imran Khan",
];
console.log(
  `Hi ${guest[1]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive`
);
console.log(
  `Hi ${guest[0]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive`
);
console.log(
  `Hi ${guest[2]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive`
);
console.log(
  `Hi ${guest[3]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive`
);
// //16
let guest2: string[] = [
  "Cz",
  "Elon Musk",
  "Bhai",
  "Mark Zukerberg",
  "Imran Khan",
];
console.log(guest2.push("Saddam Hussain"));
console.log(
  `Hi ${guest2[0]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive and i find a bigger table`
);
console.log(
  `Hi ${guest2[1]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive and i find a bigger table`
);
console.log(
  `Hi ${guest2[2]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive and i find a bigger table`
);
console.log(
  `Hi ${guest2[3]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive and i find a bigger table`
);
console.log(
  `Hi ${guest2[4]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive and i find a bigger table`
);
console.log(
  `Hi ${guest2[5]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive and i find a bigger table`
);
17;
let guest3: string[] = [
  "Cz",
  "Elon Musk",
  "Bhai",
  "Mark Zukerberg",
  "Imran Khan",
  "Saddam Hussain",
];
console.log(
  `Hi ${guest3[0]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive and i find a bigger table ,OH My Bad New table will not avilable on time So i can only invite two persons but dont worry you are invited`
);
guest3.pop();
console.log(
  `Hi ${guest3[1]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive and i find a bigger table ,OH My Bad New table will not avilable on time So i can only invite two persons but dont worry you are invited `
);
guest3.pop();
console.log(
  `Hi ${guest3[2]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive and i find a bigger table , OH My Bad New table will not avilable on time So i can only invite two persons  `
);
guest3.pop();
console.log(
  `Hi ${guest3[3]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive and i find a bigger table ,OH My Bad New table will not avilable on time So i can only invite two persons`
);
guest3.pop();
console.log(
  `Hi ${guest3[4]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive and i find a bigger table ,OH My Bad New table will not avilable on time So i can only invite two persons`
);
console.log(
  `Hi ${guest3[5]},Hamza Here I Want to invite To A Dinner,Hitler will not make to arrive and i find a bigger table ,OH My Bad New table will not avilable on time So i can only invite two persons`
);
guest3.pop();
guest3.pop();
console.log(guest3);
18;
let explore: string[] = ["Norway", "Italy", "Switzerland", "America", "Dubai"]; //1
console.log(explore); //2
console.log(
  `${explore[3]}, ${explore[4]}, ${explore[1]}, ${explore[0]}, ${explore[2]}` //3
);
console.log(explore); //4
console.log(
  `${explore[2]},${explore[0]},${explore[1]},${explore[4]},${explore[3]}` //5
);
console.log(explore); //6
explore = ["Dubai", "America", "Switzerland", "Italy", "Norway"]; //7

console.log(explore); //7
explore = ["Norway", "Italy", "Switzerland", "America", "Dubai"]; //8

console.log(explore); //8
explore = ["America", "Dubai", "Italy", "Norway", "Switzerland"];
console.log(explore); //9
explore = ["Swizerland", "Norway", "Italy", "Dubai", "America"];
console.log(explore); //10

//19
{
  let guest: string[] = ["Elon Musk", "Mark Zukerberg", "Einstein", "Hitler"];
  console.log(`Hi ${guest[0]},Hamza Here I Want to invite To A Dinner`);
  console.log(`Hi ${guest[1]},Hamza Here I Want to invite To A Dinner`);
  console.log(`Hi ${guest[2]},Hamza Here I Want to invite To A Dinner`);
  console.log(`Hi ${guest[3]},Hamza Here I Want to invite To A Dinner`);
  console.log("I Am Inviting 4 persons");
}
//20

const famousplaces: string[] = [
  "Eiffel Tower",
  "Great Wall of China",
  "Machu Picchu",
  "Taj Mahal",
  "Statue of Liberty",
  "Christ the Redeemer",
  "Colosseum",
  "Sydney Opera House",
  "Mount Everest",
  "Pyramids of Giza",
];

console.log("List of Famous Landmarks:");
console.log(famousplaces);
//21

let obj = {
  name: "hamza",
  age: "12",
  class: "inter passout",
  work: "AI Developer",
};
console.log(obj);
//22
//  let array1:string[]=["hamza",12,"godd"] here is error
// let array1 = ["hamza", "bhai", "godd"];//   this is intentinal error
//23
let boy = "Ahmed";
console.log("is boy =='Ahmed' i predict true");
console.log(boy == "Ahmed");
let drink = "cola";
console.log("is drink == pepsi i predict true");
console.log(drink == "cola");
let foam = "molty foam";
console.log("is foam == master i predict false");
console.log(foam != "molty foam");
let bro = "adnan";
console.log("is bro == azhar i predict true");
console.log(bro == "adnan");
let bike = "kawasaki";
console.log("is bike == BMW i predict true");
console.log(bike == "BMW");
let car = "civic";
console.log("is car == civic i predict true");
console.log(car == "civic");
let water = "stream";
console.log("is water == minerl i predict false");
console.log(water == "strem");
let food = "biryani";
console.log("is food == karahi i predict true");
console.log(food == "karahi");
let vehicle = "car";
console.log("is vehicle == car i predict true");
console.log(vehicle == "car");
let gender = "boy";
console.log("is gender == girl i predict true");
console.log(gender == "girl");
let mobile = "andriod";
console.log("is mobile == andriod i predict true");
console.log(mobile == "andriod");
//24
let str1 = "Hello";
let str2 = "hello";
console.log(str1 !== str2);
console.log(str1 === str2);
let str3 = "WORLD";
let str4 = "world";

console.log(str3.toLowerCase() === str4);

console.log(str3.toLowerCase() !== str4);
let num1 = 10;
let num2 = 20;

console.log(num1 < num2);

console.log(num1 > num2);
console.log(num1 <= 10);

console.log(num2 <= 10);
console.log(num2 >= 20);

console.log(num1 >= 20);
a = 5;
b = 15;
let c = 25;
console.log(a < b && b < c);

console.log(a > b && b < c);
console.log(a < b || b > c);

console.log(a > b || b > c);
let fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana"));

console.log(fruits.includes("grape"));
console.log(!fruits.includes("grape"));

console.log(!fruits.includes("banana"));
//25
let alien_color = "green";

if (alien_color === "green") {
  console.log("The player just earned 5 points.");
}
alien_color = "red";

if (alien_color === "green") {
  console.log("The player just earned 5 points.");
}

26;
let alien_color2 = "blue";

if (alien_color2 === "blue") {
  console.log("The player just earned 5 points for shooting the alien.");
} else {
  console.log("The player just earned 10 points.");
}
let alien_color1 = "yellow";

if (alien_color === "white") {
  console.log("The player just earned 5 points for shooting the alien.");
} else {
  console.log("The player just earned 10 points.");
}
//27
let alien_color3 = "green";

if (alien_color3 === "green") {
  console.log("The player just earned 5 points.");
} else if (alien_color === "yellow") {
  console.log("The player just earned 10 points.");
} else if (alien_color3 === "red") {
  console.log("The player just earned 15 points.");
}
alien_color3 = "yellow";

if (alien_color3 === "green") {
  console.log("The player just earned 5 points.");
} else if (alien_color3 === "yellow") {
  console.log("The player just earned 10 points.");
} else if (alien_color3 === "red") {
  console.log("The player just earned 15 points.");
}
alien_color3 = "red";

if (alien_color3 === "green") {
  console.log("The player just earned 5 points.");
} else if (alien_color3 === "yellow") {
  console.log("The player just earned 10 points.");
} else if (alien_color3 === "red") {
  console.log("The player just earned 15 points.");
}
//28
let age = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else if (age >= 65) {
  console.log("The person is an elder.");
}
age = 1;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else if (age >= 65) {
  console.log("The person is an elder.");
}
age = 3;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else if (age >= 65) {
  console.log("The person is an elder.");
}
age = 10;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else if (age >= 65) {
  console.log("The person is an elder.");
}
29;
let favorite_fruits = ["apple", "banana", "mango"];
if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes("mango")) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.includes("strawberry")) {
  console.log("You really like strawberries!");
}

if (favorite_fruits.includes("orange")) {
  console.log("You really like oranges!");
}
//30
let usernames = ["admin", "Eric", "Jessica", "Michael", "Sarah"];

for (let username of usernames) {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
31;
const users: string[] = [];

if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  for (const user of users) {
    if (user === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log("Hello " + user + ", thank you for logging in again.");
    }
  }
}
32;
const currentUsers: string[] = ["John", "Alice", "Bob", "Eve", "Mallory"];
const newUsers: string[] = ["John", "Charlie", "Bob", "David", "Frank"];
const lowercaseCurrentUsers = currentUsers.map((user) => user.toLowerCase());
for (const newUser of newUsers) {
  const lowercaseNewUser = newUser.toLowerCase();
  if (lowercaseCurrentUsers.includes(lowercaseNewUser)) {
    console.log(
      `Username '${newUser}' is unavailable. Please choose a different username.`
    );
  } else {
    console.log(`Username '${newUser}' is available for use.`);
  }
}
//33
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of numbers) {
  let ordinal: string;
  if (num === 1) {
    ordinal = "st";
  } else if (num === 2) {
    ordinal = "nd";
  } else if (num === 3) {
    ordinal = "rd";
  } else {
    ordinal = "th";
  }
  console.log(`${num}${ordinal}`);
}
34;
const favoritePizzas: string[] = ["Pepperoni", "Margherita", "Hawaiian"];

for (const pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");
35;
const animals: string[] = ["Dog", "Cat", "Elephant"];

for (const animal of animals) {
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");
//36
function makeShirt(size: string, message: string): void {
  console.log(`Shirt size: ${size}`);
  console.log(`Message: ${message}`);
}
makeShirt("L", "I love TypeScript!");
//37
function makeShirt1(
  size: string = "large",
  message: string = "I love TypeScript!"
): void {
  console.log(`Shirt size: ${size}`);
  console.log(`Message: ${message}`);
}

makeShirt1();
makeShirt1("medium");
makeShirt1("small", "Custom message");
//38
function describeCity(city: string, country: string = "unknown"): void {
  console.log(`${city} is in ${country}.`);
}
describeCity("Karachi", "Pakistan");
describeCity("New York");
describeCity("Tokyo", "Japan");
39;
function cityCountry(city: string, country: string): string {
  return `${city}, ${country}`;
}
const city1 = cityCountry("Lahore", "Pakistan");
const city2 = cityCountry("New York", "United States");
const city3 = cityCountry("Tokyo", "Japan");
console.log(city1);
console.log(city2);
console.log(city3);
//40
function makeAlbum(
  artist: string,
  albumTitle: string,
  numTracks?: number
): Record<string, any> {
  const albumInfo: Record<string, any> = {
    artist,
    albumTitle,
  };

  if (numTracks !== undefined) {
    albumInfo.numTracks = numTracks;
  }

  return albumInfo;
}
const album1 = makeAlbum("The Beatles", "Abbey Road");
const album2 = makeAlbum("Pink Floyd", "The Dark Side of the Moon", 10);
const album3 = makeAlbum("Led Zeppelin", "IV", 8);

console.log(album1);
console.log(album2);
console.log(album3);
//41
function show_magicians(magicianNames: string[]): void {
  for (const magician of magicianNames) {
    console.log(magician);
  }
}
const magicians: string[] = [
  "David Copperfield",
  "Harry Houdini",
  "Dynamo",
  "Penn & Teller",
];
show_magicians(magicians);
//42
function makeGreat1(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (const magician of magicians) {
    greatMagicians.push(`${magician} the Great`);
  }
  return greatMagicians;
}

function showMagicians1(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}
const originalMagicians1: string[] = ["Houdini", "Dynamo", "Copperfield"];
const greatMagicians1: string[] = makeGreat(originalMagicians1);

console.log("Original magicians:");
showMagicians(originalMagicians1);

console.log("\nGreat magicians:");
showMagicians(greatMagicians1);

//43
function makeGreat(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (const magician of magicians) {
    greatMagicians.push(`${magician} the Great`);
  }
  return greatMagicians;
}

function showMagicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

const originalMagicians: string[] = ["Houdini", "Dynamo", "Copperfield"];
const greatMagicians: string[] = makeGreat(originalMagicians);

console.log("Original magicians:");
showMagicians(originalMagicians);

console.log("\nGreat magicians:");
// showMagicians(greatMagicians);
//44
function orderSandwich(...items: string[]): void {
  console.log("Sandwich order summary:");
  console.log("Bread + " + items.join(" + ") + " + Bread");
}

orderSandwich("Turkey", "Lettuce", "Tomato");
orderSandwich("Ham", "Cheese");
orderSandwich("Peanut Butter", "Jelly", "Banana", "Honey");
//45
class Car {
  private make: string;
  private model: string;
  private color: string;
  private year: number;
  private mileage: number;
  private features: Record<string, any>;

  constructor(
    make: string,
    model: string,
    color: string,
    year: number,
    mileage: number
  ) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.year = year;
    this.mileage = mileage;
    this.features = {};
  }

  addFeature(featureName: string, value: any): void {
    this.features[featureName] = value;
  }

  getDetails(): Record<string, any> {
    return {
      make: this.make,
      model: this.model,
      color: this.color,
      year: this.year,
      mileage: this.mileage,
      features: this.features,
    };
  }
}
const myCar = new Car("Toyota", "Camry", "Blue", 2022, 10000);
myCar.addFeature("Sunroof", true);
myCar.addFeature("Navigation", false);

console.log(myCar.getDetails());
