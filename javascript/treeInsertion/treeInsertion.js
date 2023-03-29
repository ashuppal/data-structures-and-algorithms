'use strict';

const {HashTable} = require('../hashtable/hashtable');


const tree_intersection = (tree1, tree2) => {
  const table = new HashTable(1024);
  let arr1 = tree1.preOrder();
  let arr2 = tree2.preOrder();
  arr1.forEach(e => table.set(e, true));
  let valuesArr = [];

  for(let i = 0; i < arr2.length; i++) {
    let value = arr2[i];
    if(table.has(value)){
      valuesArr.push(value);
    } else {
      table.set(value, true);
    }
  }
  return valuesArr;
};


module.exports = {tree_intersection};
