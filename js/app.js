// STRINGS
var firstName = 'Mohammed';
console.log(firstName);

var lastName = 'Kashim';
console.log(lastName);

// NUMBERS
var age = 21;
console.log(age);

var float = 4.55;
console.log(float);

var sum = age + float;
console.log(sum);

// BOOLEANS
var bool1 = true;
console.log(bool1);

var bool2 = false;
console.log(bool2);
console.log(bool1 + bool2);

// ARRAYS
var array1 = ['My name', firstName, lastName, 100, age, [] ];
console.log(array1);
console.log(array1[4]);
console.log(array1[4] + array1[3]);
console.log(array1.length);

// ADDIMG ELEMENTS TO ARRAY
var arraySum = array1[4] + array1[3];
console.log(arraySum);
array1.push(arraySum);
console.log(array1);
array1.unshift(arraySum);
console.log(array1);
array1.splice(3, 0, "Spliced");
console.log(array1);
array1.splice(3, 2, "Spliced");
console.log(array1);

// REMOVING ELEMENTS FROM ARRAY
array1.pop();
console.log(array1);

array1.shift();
console.log(array1);

var sliced = array1.slice(1, 5);
console.log(sliced);

// OBJECTS
var obj1 = {
  name: 'Kashim',
  age: 21,
  float: 4.2,
  objArray: [1, 2, 3, 4, 5],
  address: {
    house: 5,
    street: 'Queens Park Avenue',
    city: 'London',
    postcode: '123456'
  },
  // prompt: prompt('I am part of an object'),
  objBoolean: true
};

obj1.job = 'Trainee';

obj1.sum = obj1.age + obj1.float;
console.log(obj1);

var obj2 = {
  intro: 'Hello, my name is ',
  name: 'Kashim',
  connective: ' and I am ',
  age: 21,
  float: 4.2,
  objArray: [1, 2, 3, 4, 5],
  address: {
    house: 5,
    street: 'Queens Park Avenue',
    city: 'London',
    postcode: '123456'
  },
  // prompt: prompt('I am part of an object'),
  objBoolean: true
};

obj2.greeting = obj2.intro + obj2.name + obj2.connective + obj2.age;
console.log(obj2.greeting);
