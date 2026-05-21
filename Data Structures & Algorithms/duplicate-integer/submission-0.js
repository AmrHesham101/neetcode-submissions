class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const map = new Map();

let duplicate = false;

nums.forEach((element) => {
  map.set(element, (map.get(element) || 0) + 1);
});

for (const [key, value] of map) {

  if (value > 1) {
    duplicate = true;
    break;
  }
}

console.log(duplicate);

return duplicate;
  }
}
