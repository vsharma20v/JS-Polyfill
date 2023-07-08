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
