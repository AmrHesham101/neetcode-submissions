class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const soretedElementText1 = s.split("").sort().join("");
    const soretedElementText2 = t.split("").sort().join("");
    return soretedElementText1 === soretedElementText2;
  }
}