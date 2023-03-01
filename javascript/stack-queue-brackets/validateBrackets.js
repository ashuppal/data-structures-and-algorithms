'use strict';
function validateBrackets(str){

  let stack = [];
  let open = ['(', '[', '{'];
  let close = [')', ']', '}'];
  let values = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i])) {
      stack.push(str[i]);
    } else if (close.includes(str[i])) {
      if (stack[stack.length - 1] === values[str[i]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(validateBrackets('(){}[[]]'));
console.log(validateBrackets('{}(){}'));
console.log(validateBrackets('()[[Extra Characters]]'));
