'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
/*
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// 1.

function calcAverageHumanAge(ages) {
  const humanAges = ages.map((el) => {
    return el <= 2 ? 2 * el : 16 + el * 4 ;
  });


  return humanAges;
}

const test1 = [5, 2, 4, 1, 15, 8, 3]
const test2 = [16, 6, 10, 5, 6, 1, 4]

const humanAgesDogs = calcAverageHumanAge(test1)

// console.log(humanAgesDogs);

// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
const adultDogs = humanAgesDogs.filter((age) => {return age >= 18})
// console.log(adultDogs);

// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
const avgAgeAdultDogs = adultDogs.reduce((acc, age) => {return acc + age}, 0) / adultDogs.length;
// console.log(avgAgeAdultDogs);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const humanAgesDogsAvgChaining = test1.map((age) => {
  return age <= 2 ? 2 * age : 16 + age * 4
}).filter((age) => {
  return age >= 18;
}).reduce((acc, age) => {return acc + age}, 0) / adultDogs.length

// console.log(humanAgesDogsAvgChaining);


///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/


const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// 1. Store the the average weight of a "Husky" in a variable "huskyWeight"
const huskyWeight = breeds.find((dog) => {
  return dog.breed === 'Husky';
})?.averageWeight;

// console.log(huskyWeight);

// 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
const dogBothActivities = breeds.find((dog) => {
  return dog.activities.includes('running') && dog.activities.includes('fetch');
}).breed;

// console.log(dogBothActivities);

// 3. Create an array "allActivities" of all the activities of all the dog breeds
const allActivities = breeds.flatMap((breed) => breed.activities)
// console.log(allActivities);

// 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). 
// HINT: Use a technique with a special data structure that we studied a few sections ago.
const uniqueActivities = [...(new Set(breeds.flatMap((breed) => breed.activities)))]
// console.log(uniqueActivities);

// 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
const swimmingAdjacent =  [...new Set(breeds.filter((breed) => {
  return breed.activities.includes('swimming');
}).flatMap((dog) => {
  return dog.activities;
}).filter(act => act !== 'swimming'))];

// console.log(swimmingAdjacent);

// 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
// console.log(breeds.every((breed) => {
//   return breed.averageWeight >= 10;
// }));

// 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".
// console.log(breeds.some(dog => dog.activities.length >= 3));


///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they want to figure out if the dogs in there are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const calculateRecommendedFood = function(weightKg) { return weightKg ** 0.75 * 28 }
const controlEatingPortions = function(dog) {
    if(dog.curFood > dog.recFood * 1.1) {
        return `The dog is eating too much food (${dog.curFood}g vs. the recommended ${dog.recFood}g) `
    } else if (dog.curFood < dog.recFood * .9) {
        return `The dog is eating too little food (${dog.curFood}g vs. the recommended ${dog.recFood}g) `
    } else {
        return `The dog is eating an ok amount of food (${dog.curFood}g vs. the recommended ${dog.recFood}g) `
    }
}

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. 
// Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).

function addRecommendedFoodPerDog (dogsArr) {
  dogsArr.map((dog) => {
    const recommendedFoodPortion = calculateRecommendedFood(dog.weight);
    dog.recFood = Math.trunc(recommendedFoodPortion);
  }) 
}
addRecommendedFoodPerDog(dogs);
// console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// console.log( controlEatingPortions( dogs.find((dog) => {
//     return dog.owners.includes('Sarah');
// }) ));

// console.log(controlEatingPortions(dogs[0]))

// 3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
const ownersTooMuch = dogs.filter((dog) => {
    return controlEatingPortions(dog).includes('much');
}).flatMap((d) => d.owners);

console.log(ownersTooMuch)

 const ownersTooLittle = dogs.filter((dog) => {
    return controlEatingPortions(dog).includes('little');
}).flatMap((d) => d.owners);

console.log('-------- TOO LITTLE --------' + ownersTooLittle)

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`"${ownersTooMuch.join(" and ")}'s dogs eat too much!" and "${ownersTooLittle.join(" and ")}'s dogs eat too little!"`)

// 5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
console.log(dogs.some((dog) => {
    return dog.curFood === dog.recFood
}))

// 6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
console.log(dogs.every((dog) => controlEatingPortions(dog).includes('okay')))

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
const checkEatingOkay = dog =>
  dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9;

const dogsEatingOkay = dogs.filter((dog) => checkEatingOkay(dog))
console.log(dogsEatingOkay)

// 8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
const groupedDogs = Object.groupBy(dogs, (dog) => {
    if (dog.curFood > dog.recFood * 1.1) {
        return 'too-much'
    } else if ( dog.curFood < dog.recFood * 0.9) {
        return 'too-little'
    } else {
        return 'exact'
    }
});

console.log(groupedDogs)

// 9. Group the dogs by the number of owners they have
const groupDogsByNumberOfOwners = Object.groupBy(dogs, (dog) => {
    return dog.owners.length
})

console.log(groupDogsByNumberOfOwners)

// 10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!
const sortedArray = dogs.toSorted((a, b) => {
    return a.recFood - b.recFood;
})

console.log(sortedArray)