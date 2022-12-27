// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // 1
  //   return str.split("").reverse().join("");
  // 2
  //   let rev = "";
  //   for (let char of str) {
  //     rev = char + rev;
  //   }
  //   return rev;
  //   3
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
