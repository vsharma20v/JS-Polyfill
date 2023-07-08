// Debouncing and throttling are techniques in javascript to optimise the application and browser performance.

// Debouncing is a technique where we limits the execution of function call & waits for a certain delay before calling it again. (ex: search bar suggestion on Flipkart)
// Throttling is a technique where we limits the execution of event handler function to certain interval, even when the event triggers continously. (ex: browser resizing, on scrolling fetch more posts on Twitter)

const debounceFunction = (func, delay = 500) => {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

const throttleFunction = (func, interval = 100) => {
  let shouldTrigger = true;
  return function (...args) {
    const context = this;
    if (shouldTrigger) {
      func.apply(context, args);
      shouldTrigger = false;
      setTimeout(() => {
        shouldTrigger = true;
      }, interval);
    }
  };
};

// Currying is a technique of transforms a function with multiple arguments into a nested series of functions, each taking a single argument - ex: sum(1,2,3) into sum(1)(2)(3)
/* Need:

    1. to create a HOF
    2. to avoid passing the same variable again & again
    3. to make function pure

    Partial Application => transforms a function into another function with smaller Arity (It is the term used to refer to the number of arguments or operands in a function or operation)
    sum(a,b,c) => sum(a)(b)(c) -> currying
    sum(a,b,c) => sum(a)(b,c) -> partial application
*/

// example 1
// function(a,b) => function(a)(b)

// function f(a,b){
//     console.log(a,b);
// }

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// recursive sum
// const sum = (a) => (b) => b ? sum(a + b) : a;

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);

console.log(curriedSum(0)(1)(3));
