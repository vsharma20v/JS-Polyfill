Array.prototype.myMap = function (callback, myThis = this) {
  const result = [];
  for (let i = 0; i < myThis.length; ++i) {
    result.push(callback(myThis[i], i, myThis));
  }
  return result;
};

const arr = [1, 2, 3, 4];

console.log(arr.myMap((element) => element * element, [4, 5, 6]));
