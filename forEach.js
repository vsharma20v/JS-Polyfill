Array.prototype.myForEach = function (callback, myThis = this) {
  for (let i = 0; i < myThis.length; ++i) {
      callback(myThis[i], i, myThis);
  }
};

const arr = [1, 2, 3, 4];

console.log(arr.myForEach(console.log));
