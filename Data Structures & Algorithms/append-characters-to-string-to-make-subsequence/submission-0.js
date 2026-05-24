class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {number}
   */
  appendCharacters(s, t) {
    let tPointer = 0;
    for (let sPointer = 0; sPointer < s.length; sPointer++) {
      // If characters match, move to next character in s
      if (s[sPointer] === t[tPointer]) {
        tPointer++;
      }
    }
    return t.slice(tPointer).length;
  }
}
