# Stacks and Queues
<!-- Short summary or background information -->
Create a Stack class that has a top property. It creates an empty Stack when instantiated. This object should be aware of a default empty value assigned to top when the stack is created. 



## Challenge
<!-- Description of the challenge -->
Define the following methods for the Stack class:
* push
  * Arguments: value
  * Adds a new node with that value to the top of the stack with an O(1) Time performance.
* pop
  * Arguments: none
  * Returns: the value from node from the top of the stack
  * Removes the node from the top of the stack
  * Should raise exception when called on empty stack
* peek
  * Arguments: none
  * Returns: Value of the node located on top of the stack
  * Should raise exception when called on empty stack
* isEmpty
  * Arguments: none
  * Returns: Boolean indicating whether or not the stack is empty.


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
First I created a Node class that has a value and a next property. Then I created a Stack class that has a top property. It creates an empty Stack when instantiated. This object should be aware of a default empty value assigned to top when the stack is created. 

## API
<!-- Description of each method publicly available to your Stack and Queue-->
* push
* pop
* peek
* isEmpty

