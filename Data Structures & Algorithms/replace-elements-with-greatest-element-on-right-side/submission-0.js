class Solution {
  /**
   * @param {number[]} arr
   * @return {number[]}
   */
  replaceElements(arr) {
    const newArr = [...arr];
    for (let index = 0; index < arr.length; index++) {
      const subRightArray = arr.slice(index + 1).toSorted((a, b) => b - a);
      if (subRightArray.length > 0) {
        newArr[index] = subRightArray[0];
      } else {
        newArr[index] = -1;
      }
    }
    return newArr;
  }
}