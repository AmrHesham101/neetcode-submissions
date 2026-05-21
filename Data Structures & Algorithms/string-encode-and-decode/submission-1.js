class Solution {
  constructor() {
    this.encodeMap = new Map();
    this.decodeMap = new Map();
  }

  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    const encoded = [];

    for (const str of strs) {
      if (!this.encodeMap.has(str)) {
        const uuid = crypto.randomUUID();

        this.encodeMap.set(str, uuid);
        this.decodeMap.set(uuid, str);
      }

      encoded.push(this.encodeMap.get(str));
    }

    return encoded.join(",");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    if (str === "") {
      return [];
    }

    return str.split(",").map((id) => this.decodeMap.get(id));
  }
}
