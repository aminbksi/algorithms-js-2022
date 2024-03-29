// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  // 1
  //   array.map((item) => {
  //     const last_chunk = chunked[chunked.length - 1];

  //     if (!last_chunk || last_chunk.length === size) {
  //       chunked.push([item]);
  //     } else {
  //       last_chunk.push(item);
  //     }
  //   });
  //   2
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));

    index += size;
  }

  return chunked;
}

module.exports = chunk;
