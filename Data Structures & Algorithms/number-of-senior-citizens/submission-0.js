class Solution {
  /**
   * @param {string[]} details
   * @return {number}
   */
  countSeniors(details) {
    const ageIndex = [11, 12];
    let seniors = 0;
    details.forEach((element) => {
      let age = 0;
      if (element[ageIndex[0]] === "0") {
        age = parseInt(element[ageIndex[1]]);
      } else {
        age = parseInt(element[ageIndex[0]] + element[ageIndex[1]]);
      }
      if (age > 60) {
        seniors++;
      }
    });
    return seniors;
  }
}
