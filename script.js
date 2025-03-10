function chunkString(str, chunkLength) {
  // Check if the input string is null or undefined, return empty array
  if (str === null || str === undefined) {
    return [];
  }

  // Initialize an empty array to hold the chunks
  let result = [];

  // Loop through the string and slice it into chunks of the given length
  for (let i = 0; i < str.length; i += chunkLength) {
    result.push(str.slice(i, i + chunkLength));
  }

  return result;
}

// Examples
console.log(chunkString("Hello, world!", 5)); // ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2));         // ["12", "34", "5"]
console.log(chunkString("abc", 5));           // ["abc"]

