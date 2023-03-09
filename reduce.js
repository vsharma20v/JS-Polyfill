Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; ++i) {
    if (accumulator) accumulator = callback(accumulator, this[i], i, this);
    else accumulator = this[i];
  }
  return accumulator;
};

Array.prototype.myReduceRight = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = this.length - 1; i >= 0; --i) {
    if (accumulator) accumulator = callback(accumulator, this[i], i, this);
    else accumulator = this[i];
  }
  return accumulator;
};

const arr = [1, 2, 3, 4];

console.log(arr.myReduceRight((acc,curr) => acc+curr));
