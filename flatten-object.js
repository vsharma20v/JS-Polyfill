const obj = {
  name: "vibhu",
  age: 23,
  skills: [
    { id: 1, name: "Cooking", rating: { value: 2, outOf: 5 } },
    { id: 2, name: "painting", rating: { value: 3, outOf: 5 } },
    { id: 3, name: "gardening", rating: { value: 5, outOf: 5 } },
  ],
  companies: {
    tekion: {
      location: "Bangalore",
      policy: {
        name: "WFO",
        love: 0,
      },
    },
    pocketFM: {
      location: "Bangalore",
      policy: { name: "WFH", love: 5 },
    },
    cognizant: {
      location: "Hyderabad",
      policy: { name: "WFH", love: 3 },
    },
  },
};

function flattenObj(obj, parentName) {
  let result = {};

  for (let key in obj) {
    const keyName = parentName ? `${parentName}.${key}` : key;
    if (typeof obj[key] === "object") {
      result = { ...result, ...flattenObj(obj[key], keyName) };
    } else {
      result[keyName] = obj[key];
    }
  }

  return result;
}

console.log(flattenObj(obj));
