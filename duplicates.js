function countNonUnique(arr) {
  const uniqueItems = new Set();
  const duplicates = new Set();
  for (const value of arr) {
    if (uniqueItems.has(value)) {
      duplicates.add(value);
      uniqueItems.delete(value);
    } else {
      uniqueItems.add(value);
    }
  }
  return duplicates.size;
}
  
const myArr = [1, 3, 3, 4, 3, 4, 4, 5, 6, 7, 8];
console.log(countNonUnique(myArr))