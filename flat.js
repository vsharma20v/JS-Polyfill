Array.prototype.myFlat = function (depth = 1) {
  const result = [];

  if (!Array.isArray(this)) throw new Error(`${this}.flat() is not a function`);

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && (depth > 0 || depth === Infinity)) {
      result.push(...this[i].myFlat(depth === Infinity ? Infinity : depth - 1));
    } else {
      result.push(this[i]);
    }
  }

  return result;
};

const result = [[1, 2], 3, 4, 5, [[6, 7]]].myFlat(Infinity);
// const result = [[1, 2], 3, 4, 5, [[6, 7]]].myFlat();
// const result = [[1, 2], 3, 4, 5, [[6, 7]]].myFlat(1);

console.log({ result });
