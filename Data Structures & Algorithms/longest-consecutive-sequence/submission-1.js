class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    const numsSetSorted = new Set(nums.sort((a, b) => a - b));
    const arr = [...numsSetSorted];
    let longestConsecutive = 0;
    let longestConsecutiveCounter = 1;

    for (let index = 0; index < arr.length - 1; index++) {
      if (arr[index + 1] - arr[index] === 1) {
        longestConsecutiveCounter++;
      } else {
        longestConsecutive = Math.max(
          longestConsecutive,
          longestConsecutiveCounter,
        );
        longestConsecutiveCounter = 1;
      }
    }
    longestConsecutive = Math.max(
      longestConsecutive,
      longestConsecutiveCounter,
    );
    return longestConsecutive;
  }
}
