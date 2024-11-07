// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.


 
const removeDuplicates = (arr: number[]): number[] => {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));