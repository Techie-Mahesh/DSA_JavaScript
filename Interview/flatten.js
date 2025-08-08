const input = {
  a: {
    b: {
      c: 1,
    },
    d: 2,
  },
  e: 3,
};
const flatten = (input, prefix, result = {}) => {
  if (typeof input !== "object") {
    return "Not posible to parse the array";
  }
  Object.entries(input).map(([key, value]) => {
    let newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      flatten(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  });
  return result;
};
console.log(flatten(input));
