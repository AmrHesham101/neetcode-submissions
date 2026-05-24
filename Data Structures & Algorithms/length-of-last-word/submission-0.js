class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLastWord(s) {
    let lastWord = "";
    let isSpace = false;
    for (let index = 0; index < s.length; index++) {
      const element = s[index];
      if (element === " ") {
        isSpace = true;
      }
      if (isSpace === true && element !== " ") {
        lastWord = element;
        isSpace = false;
      } else {
        if (element !== " ") {
          lastWord = lastWord + element;
        }
      }
    }
    return lastWord.length;
  }
}