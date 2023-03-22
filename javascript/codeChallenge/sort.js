'use strict';


// eslint-disable-next-line no-unused-vars
const { mainModule } = require('process');


function sortYear(arr) {
  arr.sort(compareYear);
  return arr;

}


function compareYear(a,b) {
  //do the thing
  if (a.year < b.year) {
    return 1;
  }
  if (a.year > b.year) {
    return -1;
  }
  return 0;
}

function sortTitle(arr) {
  arr.sort(compareTitle);
  return arr;
}

function igonreWords(title) {
  const words = ['A', 'An', 'The', 'a', 'an', 'the', 'THE', 'AN', 'A'];
  const titleArr = title.split(' ');
  if (words.includes(titleArr[0])) {
    titleArr.shift();
  }
  return titleArr.join(' ');
}

//console.log(igonreArticles('The hobbit'));

function compareTitle(a,b) {
  //do the thing
  const titleA = igonreWords(a.title);
  const titleB = igonreWords(b.title);
  if(titleA < titleB) {
    return -1;
  }
  if(titleA > titleB) {
    return 1;
  }
  return 0;
}
console.log(compareTitle({title: 'The Hobbit'}, {title: 'American Beauty'}));







module.exports = {sortYear, compareYear, sortTitle, compareTitle};
