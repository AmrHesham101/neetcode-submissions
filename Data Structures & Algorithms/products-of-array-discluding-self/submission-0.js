class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const result = [];

    let product = 1;
    let zeroCount = 0;

    // Calculate product of non-zero numbers
    for (const num of nums) {
      if (num === 0) {
        zeroCount++;
      } else {
        product *= num;
      }
    }

    for (const num of nums) {
      // More than one zero
      if (zeroCount > 1) {
        result.push(0);
      }

      // Exactly one zero
      else if (zeroCount === 1) {
        result.push(num === 0 ? product : 0);
      }

      // No zeros
      else {
        result.push(product / num);
      }
    }

    return result;
  }
}