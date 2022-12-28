// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};

  for (let char of str) {
    chars[char] = chars[char] ? chars[char] + 1 : 1;
  }
  let max = 0;
  let charmax = "";
  //   1
  //   for (let char in chars) {
  //     if (chars[char] > max) {
  //       max = chars[char];
  //       charmax = char;
  //     }
  //   }
  //   2
  Object.entries(chars).map((obj) => {
    if (obj[1] > max) {
      max = obj[1];
      charmax = obj[0];
    }
  });

  return charmax;
}

module.exports = maxChar;
