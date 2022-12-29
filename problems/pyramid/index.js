// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   const midPoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let shapedRow = "";
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (column <= row + midPoint && column >= midPoint - row) {
//         shapedRow += "#";
//       } else {
//         shapedRow += " ";
//       }
//     }

//     console.log(shapedRow);
//   }
// }

//  recursion

function pyramid(n, row = 0, shapedRow = "") {
  if (row === n) {
    return;
  }

  if (shapedRow.length === 2 * n - 1) {
    console.log(shapedRow);
    return pyramid(n, row + 1);
  }
  const midPoint = Math.floor((2 * n - 1) / 2);

  if (
    shapedRow.length <= row + midPoint &&
    shapedRow.length >= midPoint - row
  ) {
    shapedRow += "#";
  } else {
    shapedRow += " ";
  }
  pyramid(n, row, shapedRow);
}

module.exports = pyramid;
