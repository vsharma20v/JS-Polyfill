// for shallow copy -> spread operator, Object.Assign() 
// for deep copy -> lodash _.cloneDeep(), JSON.parse(JSON.stringify(data))

function deepCopy(value) {
  if (
    ["string", "number", "boolean", "null", "undefined", "bigint"].includes(
      typeof value
    )
  )
    return value;
  else if (Array.isArray(value)) return value.map((val) => deepCopy(val));
  else
    return Object.keys(value).reduce((acc, key) => {
      acc[key] = deepCopy(value[key]);
      return acc;
    }, {});
}
