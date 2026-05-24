class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isSubsequence(s, t) {
    let sPointer = 0;

    for (let tPointer = 0; tPointer < t.length; tPointer++) {
      // If characters match, move to next character in s
      if (s[sPointer] === t[tPointer]) {
        sPointer++;
      }

      // If we matched all characters in s
      if (sPointer === s.length) {
        return true;
      }
    }

    return s.length === 0;
  }
}
