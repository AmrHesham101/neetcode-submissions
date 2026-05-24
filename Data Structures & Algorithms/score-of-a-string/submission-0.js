class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  scoreOfString(s) {
    let sumOfScoreOfString = 0;

    for (let index = 0; index < s.length - 1; index++) {
      const element1 = s[index].charCodeAt(0);
      const element2 = s[index + 1].charCodeAt(0);
      sumOfScoreOfString = sumOfScoreOfString + Math.abs(element1 - element2);
    }
    return sumOfScoreOfString;
  }
}
