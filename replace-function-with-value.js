const obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c
  },
  d: (a, b, c) => {
    return a - b - c;
  }
};

function replaceFunctionsWithValues(value) {
  return function (...args) {
    if (Array.isArray(value)) {
      return value.map((val) => replaceFunctionsWithValues(val)(...args));
    } else if (typeof value === "object" && value !== null) {
      const newObj = {};
      for (let key in value) {
        newObj[key] = replaceFunctionsWithValues(value[key])(...args);
      }
      return newObj;
    } else if (typeof value === "function") {
      return value(...args);
    } else {
      return value;
    }
  };
}

const newObj = replaceFunctionsWithValues(obj)(1, 2, 3);
console.log(newObj);
