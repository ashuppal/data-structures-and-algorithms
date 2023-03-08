class TreeNode {
  constructor(val, children) {
    this.val = val;
    this.children = children || [];
  }
}

function fizzBuzzTree(root) {
  function helper(node) {
    if (!node) {
      return null;
    }
    
    let val = node.val;
    
    if (val % 3 === 0 && val % 5 === 0) {
      val = "FizzBuzz";
    } else if (val % 3 === 0) {
      val = "Fizz";
    } else if (val % 5 === 0) {
      val = "Buzz";
    } else {
      val = val.toString();
    }
    
    const newNode = new TreeNode(val);
    for (let child of node.children) {
      newNode.children.push(helper(child));
    }
    
    return newNode;
  }
  
  return helper(root);

}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);

node1.children.push(node2);
node1.children.push(node3);

let node4 = new TreeNode(4);
let node5 = new TreeNode(5);

node2.children.push(node4);
node2.children.push(node5);



console.log(fizzBuzzTree(node1));

module.exports = { TreeNode, fizzBuzzTree };
