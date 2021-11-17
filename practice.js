// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;

  _.each(numbers, function(number) {
    if ( number % 5 === 0 ) {
      count++;
    }
  });

  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var iterator = function (accumulator, item) {
    return accumulator + Number(item.price.substring(1));
  };
  return _.reduce(products, iterator, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var iterator = function(accumulator, item) {

    if ( accumulator[item.type] === undefined ) {
      accumulator[item.type] = 1;
      return accumulator;
    } else {
      accumulator[item.type]++;
      return accumulator;
    }

  };

  return _.reduce(desserts, iterator, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var iterator = function (accumulator, item) {
    if ( item.releaseYear >= 1990 && item.releaseYear <= 2000 ) {
      accumulator.push(item.title);
    }
    return accumulator;
  };

  return _.reduce(movies, iterator, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var iterator = function(accumulator, item) {
    if (item.runtime < timeLimit) {
      accumulator = true;
    }
    return accumulator;
  };
  return _.reduce(movies, iterator, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var iterator = function (item) {
    return item.toUpperCase();
  };

  return _.map(fruits, iterator);
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var iterator = function (item) {
    if ( item.ingredients.includes('flour') ) {
      item.glutenFree = false;
    } else {
      item.glutenFree = true;
    }
    return item;
  };

  return _.map(desserts, iterator);
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  console.log(groceries);
  console.log(coupon);

  var iterator = function(item) {
    item.salePrice = '$' + Math.round(Number(item.price.substring(1)) * 100 * (1 - coupon)) / 100;
    return item;
  };

  return _.map(groceries, iterator);

};
