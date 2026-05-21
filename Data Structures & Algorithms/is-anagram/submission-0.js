class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const mapText1 = new Map();
    const mapText2 = new Map();
    let isAnagram = true;
    if (s.length !== t.length) {
      return false;
    } else {
      for (let index = 0; index < s.length; index++) {
        const elementText1 = s[index];
        const elementText2 = t[index];
        mapText1.set(elementText1, (mapText1.get(elementText1) || 0) + 1);
        mapText2.set(elementText2, (mapText2.get(elementText2) || 0) + 1);
      }
      for (const [key, value] of mapText1) {
        if (mapText1.get(key) !== mapText2.get(key)) {
          isAnagram = false;
          break;
        }
      }
    }
    return isAnagram;
  }
}