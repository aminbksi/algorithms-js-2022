// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const arr = str.split(" ");
  const capitalized = arr.map((item) => {
    const firstLetter = item.slice(0, 1).toUpperCase();
    return firstLetter + item.slice(1, item.length);
  });

  return capitalized.join(" ");
}

module.exports = capitalize;
