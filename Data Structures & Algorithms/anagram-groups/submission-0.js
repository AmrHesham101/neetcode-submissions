class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const groupAnagram = new Map();
    for (let i = 0; i < strs.length; i++) {
      const elementText1 = strs[i].split("").sort().join("");
      if (!groupAnagram.has(elementText1)) {
        groupAnagram.set(elementText1, []);
        strs.forEach((elementText2, index) => {
          const sorted = elementText2.split("").sort().join("");
          if (elementText1 === sorted) {
            groupAnagram.get(elementText1).push(elementText2);
          }
        });
      }
    }
    return [...groupAnagram.values()];
  }
}
