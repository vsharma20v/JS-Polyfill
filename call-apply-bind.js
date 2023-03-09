Function.prototype.myBind = function (context, ...args1) {
  const func = this;
  return function (...args2) {
    func.apply(context, [...args1, ...args2]);
  };
};

Function.prototype.myCall = function (context, ...args) {
  const currentContext = context || globalThis;
  let uniqueProp = Math.random();
  while (currentContext[uniqueProp] !== undefined) {
    uniqueProp = Math.random();
  }
  currentContext[uniqueProp] = this;
  const result = currentContext[uniqueProp](...args);
  delete currentContext[uniqueProp];
  return result;
};

Function.prototype.myApply = function (context, args) {
  const currentContext = context || globalThis;
  let uniqueProp = Math.random();
  while (currentContext[uniqueProp] !== undefined) {
    uniqueProp = Math.random();
  }
  currentContext[uniqueProp] = this;
  const result = currentContext[uniqueProp](...args);
  delete currentContext[uniqueProp];
  return result;
};
