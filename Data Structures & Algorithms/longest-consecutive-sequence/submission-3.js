class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const numsSet = new Set(nums);

    let longest = 0;

    for (const num of numsSet) {
      // Start only if this is the beginning of a sequence
      if (!numsSet.has(num - 1)) {
        let currentNum = num;
        let currentStreak = 1;

        // Expand the sequence
        while (numsSet.has(currentNum + 1)) {
          currentNum++;
          currentStreak++;
        }

        longest = Math.max(longest, currentStreak);
      }
    }

    return longest;
  }
}
