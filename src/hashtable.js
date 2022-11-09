export class HashTable {
  table = new Array(17);
  numItems = 0;
  setItem = (key, value) => {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor >= 0.75) this.resize();
    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) this.table[idx].push([key, value]);
    else this.table[idx] = [[key, value]];
  };
  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) newTable[idx].push([key, value]);
          else newTable[idx] = [[key, value]];
        });
      }
    });
    this.table = newTable;
  };
  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);
    if (!this.table[idx]) return null;
    return this.table[idx].find((el) => el[0] === key)[1];
  };
}

function hashStringToInt(s, tableSize) {
  let hash = 19;
  for (let i = 0; i < s.length; i++) {
    hash = (13 + hash + s.charCodeAt(i)) % tableSize;
    console.log(hash, s, s.charCodeAt(i), s[i], tableSize);
  }
  return hash;
}
