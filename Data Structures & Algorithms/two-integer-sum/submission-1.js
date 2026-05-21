class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let twoSum = [];
    for (let i = 0; i < nums.length; i++) {
      const element1 = nums[i];
      const remainingElement = target - element1;
      for (let index = i + 1; index < nums.length; index++) {
        const element2 = nums[index];
        if (element2 === remainingElement) {
          twoSum = [i, index];
          break;
        }
      }
    }
    return twoSum;
  }
}