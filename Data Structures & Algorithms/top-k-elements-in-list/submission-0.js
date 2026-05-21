class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const map = new Map();
    for (let index = 0; index < nums.length; index++) {
      const element = nums[index];
      if (map.has(element)) {
        map.set(element, map.get(element) + 1);
      } else {
        map.set(element, 1);
      }
    }
    const topKeys = [...map.entries()]
      .sort((a, b) => b[1] - a[1]) // sort by value descending
      .slice(0, k)
      .map(([key]) => key);
    return topKeys;
  }
}
