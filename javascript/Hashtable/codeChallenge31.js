'use strict';


const HashTable = require ('./hashtable.js');

function repeatedWord (string) {
  let newString = string.toLowerCase();
  let words = newString.split (' ');
  let newTable = new HashTable (words.length);
  for (let i = 0; i < words.length; i++) {
    if (newTable.has (words[i])) {
      return words[i];
    } else {
      newTable.add (words[i], words[i]);
    }
  }
  return null;
}

console.log (repeatedWord ('Once upon a time, there was a brave princess who...'));

console.log(repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'));

module.exports = repeatedWord;

