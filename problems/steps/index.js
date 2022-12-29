// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// recursion

function steps(n, row = 0, shape = "") {
  if (n === row) {
    return;
  }

  if (n === shape.length) {
    console.log(shape);
    return steps(n, row + 1);
  }

  const plus = shape.length <= row ? "#" : " ";
  steps(n, row, shape + plus);
}

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let shape = "";
//     // 1
//     // for (let j = 1; j <= i; j++) {
//     //   shape += "#";
//     // }
//     // for (let k = 1; k <= n - i; k++) {
//     //   shape += " ";
//     // }
//     // 2
//     for (let j = 1; j <= n; j++) {
//       if (j <= i) {
//         shape += "#";
//       } else {
//         shape += " ";
//       }
//     }
//     console.log(shape);
//   }
// }

module.exports = steps;
