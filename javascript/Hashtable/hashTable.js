'use strict';

class HashTable {
  constructor (size) {
    this.size = size;
    this.buckets = Array (size);
  }

  hash (key) {
    let characters = key.split ('');
    let asciiSum = characters.reduce ((acc, char) => {
      return acc + char.charCodeAt (0);
    }, 0);
    console.log(asciiSum);
    let initialHash = (asciiSum * 599);
    return initialHash % this.size;
  }

  has (key) {
    let hash = this.hash (key);
    return this.buckets[hash] ? true : false;
  }

  add (key, value) {
    let hash = this.hash (key);
    if (!this.buckets[hash]) this.buckets[hash] = [];
    this.buckets[hash].push ({[key]:value});
    return hash;
  }

  get (key) {
    let hash = this.hash (key);
    if (!this.buckets[hash]) return null;
    for (let i = 0; i < this.buckets[hash].length; i++) {
      let bucket = this.buckets[hash][i];
      if (bucket[key]) return bucket[key];
    }
  }

  set (key, value) {
    let hash = this.hash (key);
    if (!this.buckets[hash]) return null;
    for (let i = 0; i < this.buckets[hash].length; i++) {
      let bucket = this.buckets[hash][i];
      if (bucket[key]) {
        bucket[key] = value;
        return bucket[key];
      }
    }
  }

  keys () {
    let keys = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          let bucket = this.buckets[i][j];
          keys.push (Object.keys (bucket)[0]);
        }
      }
    }
    return keys;
  }
 



}


function leftJoin(table1, table2) {
  let result = [];

  for (let key of table1.keys()) {
    let value1 = table1.get(key);
    let value2 = table2.get(key) || null;
    result.push([key, value1, value2]);
  }

  return result;
}



module.exports = {HashTable, leftJoin};


