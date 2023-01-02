// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counter = [];
  const arr = [root, "s"];

  let count = 0;

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "s") {
      counter.push(count);
      arr.push("s");
      count = 0;
    } else {
      arr.push(...node.children);
      count++;
      if (arr.length === 1) {
        counter.push(count);
      }
    }
  }

  return counter;
}

module.exports = levelWidth;
