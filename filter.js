Array.prototype.myFilter = function (callback, myThis = this) {
  const result = [];
  for (let i = 0; i < myThis.length; ++i) {
    if (callback(myThis[i], i, myThis)) result.push(myThis[i]);
  }
  return result;
};

const arr = [1, 2, 3, 4];

console.log(arr.myFilter((element) => element % 2 === 0));
