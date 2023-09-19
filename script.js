// Functional prototypes
// Class-based prototypes
// Object-create() function

// Class
class Student {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calAge() {
    return 2023 - this.birthYear;
  }
}

// console.log(Student.prototype);

const student1 = new Student("Nibir Ahmed", 1995);
const student2 = new Student("Nibir Ahmed", 1996);

console.log(student1);
console.log(student2);
console.log(student1.calAge());

console.log(student1.__proto__);

//////////

class Computer {
  // Private fields
  #password = 1234;
  #bank = []; // private bank variable
  constructor() {
    this.#bank = []; // re-assign
  }

  cpuClockSpeedTest() {
    console.log(`Your computer is 80% faster then others!`);
  }

  depositMoney(money) {
    this.#bank.push(money);
  }
}

const computer1 = new Computer();
console.log(computer1);
computer1.cpuClockSpeedTest();

computer1.depositMoney(1500);
computer1.depositMoney(2500);

console.log(computer1);

////////////////////////////////////////////////////////////////////////////////
// Constructor function
////////////////////////////////////////////////////////////////////////////////

function Person(nickName, birthYear) {
  this.nickName = nickName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2023 - birthYear);
  // };
}
const sadril = new Person("Sadril", 1995);
const nasim = new Person("Nasim", 1998);

// 1. New {} will create
// 2. function will be called, this = {}
// 3. {} linked to prototype
// 4. function will automatically returns

// console.log(Person.hasOwnProperty("nickName"));

console.log(sadril);
console.log(nasim);

console.log(sadril instanceof Person);

// different using method inclded
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

sadril.calcAge();
nasim.calcAge();

console.log(Person.prototype);

console.log(sadril.__proto__ === Person.prototype);
console.log(Person.prototype === Person.prototype);

console.log(Person.prototype.isPrototypeOf(sadril));
console.log(Person.prototype.isPrototypeOf(nasim));
console.log(Person.prototype.isPrototypeOf(Person));

//////////////////////////////////////////////
// class Identification {
//   #bank = [];
//   #password = 1234;
//   constructor(name, birthYear, nationalId) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.nationalId = nationalId;
//     this.#bank = [];
//   }
//   calAge(birthYear) {
//     return 2023 - birthYear;
//   }
//   depositMoney(money) {
//     return this.#bank.push(money);
//   }
// }

// const tumpa = new Identification("Tumpa", 1995, 111);
// console.log(tumpa.__proto__);
// console.log(Identification.prototype);

// console.log(tumpa.depositMoney(1500));
// console.log(tumpa.depositMoney(2500));
// console.log(tumpa);
// console.log(Identification.prototype.isPrototypeOf(tumpa));
// console.log(tumpa instanceof Identification);

function User(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calAge = function () {
  //   console.log(2023 - this.birthYear);
  // };
}
User.prototype.calAge = function () {
  console.log(2023 - this.birthYear);
};
const rahim = new User("Rahim", 1996);
rahim.calAge();
console.log(rahim);

////////

Array.prototype.unique = function () {
  return [...new Set(this)];
};
const arr = [1, 2, 3, 4, 2, 1, 2, 2, 4, 4, 1, 3];
console.log(arr.unique());

///////////

/////////////////////////////////////////////////////////////
// ES6 Classes
/////////////////////////////////////////////////////////////

class Person2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hello, ${this.fullName}!`);
  }

  static couponCode() {
    console.log(32211213123213);
  }
}

const kajol = new Person2("Kajol", 1995);
const fahim = new Person2("Fahim", 1994);

kajol.calcAge();
console.log(kajol);

console.log(fahim);

console.log(Person2.prototype === kajol.__proto__);
console.log(Person2.prototype.constructor);

Person2.couponCode();

// Classes are not HOISTED
// Classes are first-class functions
// Classes always use "use strict"

/////////
// get use dont't call
// class ChinemaHall {
//   constructor(movieName, seatCount) {
//     this.movieName = movieName;
//     this.seatCount = seatCount;
//     this.audience = [];
//   }

/`/; // don't use this getter
//   // getter
//   get ticketPrice() {
//     return this.seatCount * 100;
//   }

//   audienceCount(name) {
//     this.audience.push(name, this.movieName, this.seatCount);
//   }
// }

// const abdullah = new ChinemaHall("Inception", 2);
// console.log(abdullah.ticketPrice);

// const sumaiya = new ChinemaHall("Snowman", 5);
// console.log(sumaiya.ticketPrice);

// abdullah.audienceCount("Abdullah");
// console.log(abdullah);

/////////////////////////////////////////////////////////
// Object.create()
/////////////////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
};

const jessica = Object.create(PersonProto);

jessica.fullName = "Jessica Jennie";
jessica.birthYear = 1990;

console.log(jessica);
jessica.calcAge();

////////////////////////////////////////////////
// Inheritance between multiple classes:
// 1. Constructor function
// 2. ES6 classes
// 3. object.create()

////////////////////////////////////////////////
// 1. Constructor function:
////////////////////////////////////////////////

// class 1
function Person3(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

// Method of class 1
Person3.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

Person3.prototype.greet = function () {
  console.log(`Hello, ${this.firstName}`);
};

// Object from class 1
const tumpa = new Person3("Tumpa", 1996);

console.log(tumpa);

tumpa.calcAge();

// class 2
function Student2(firstName, birthYear, department) {
  Person3.call(this, firstName, birthYear);
  this.department = department;
}

// Linking prototypes between class 1 and class 2
Student2.prototype = Object.create(Person3.prototype);

const sabrina = new Student2("Sabrina", 1996, "CSE");

console.log(sabrina);
sabrina.calcAge();
sabrina.greet();

tumpa.calcAge();
console.log(Person3.prototype);
console.log(Student2.prototype);

//////////////////////////////////////////////////////////////////
// 2. ES6 classes
//////////////////////////////////////////////////////////////////

class Player {
  #tokenNum; // init private field
  #password = 1234;
  constructor(nickName, jerseyNum, rating, tokenNum) {
    this.nickName = nickName;
    this.jerseyNum = jerseyNum;
    this.rating = rating;
    this.#tokenNum = tokenNum; // assign
    this.#greet();
  }

  #greet() {
    console.log(`Hi, ${this.nickName}`);
  }

  playerRating() {
    console.log(`${this.nickName} has ${this.rating} ratings.`);
  }
}

const neymer = new Player("Neymer", 10, 90);

class Captain extends Player {
  constructor(nickName, jerseyNum, rating, bandColor) {
    super(nickName, jerseyNum, rating);
    this.bandColor = bandColor;
  }
}

const fabinho = new Captain("Fabinho", 11, 85, "red");

// neymer.greet();
// fabinho.greet();
fabinho.playerRating();
neymer.playerRating();

//////////////////////////////////////////////////////////////////
// Object.create()
//////////////////////////////////////////////////////////////////

const PersonProto2 = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  getParam(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const jessica2 = Object.create(PersonProto2);
jessica2.getParam("Jessica2", 1995);
console.log(jessica2);
jessica2.calcAge();

// new prototype
const StudentProto = Object.create(PersonProto2);

const natasha = Object.create(StudentProto);
natasha.getParam("Natasha", 1998);
natasha.calcAge();
