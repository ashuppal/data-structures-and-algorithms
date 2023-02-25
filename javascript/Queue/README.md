
# Stacks and Queues
<!-- Short summary or background information -->
Create a Queue class that has a front property. It creates an empty Queue when instantiated. This object should be aware of a default empty value assigned to front when the queue is created.

## Challenge
<!-- Description of the challenge -->
Define the following methods for the Queue class:
* enqueue
  * Arguments: value
  * Adds a new node with that value to the back of the queue with an O(1) Time performance.
* dequeue
  * Arguments: none
  * Returns: the value from node from the front of the queue
  * Removes the node from the front of the queue
  * Should raise exception when called on empty queue
* peek
  * Arguments: none
  * Returns: Value of the node located in the front of the queue
  * Should raise exception when called on empty queue
* isEmpty



## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
First I created a Node class that has a value and a next property. Then I created a Queue class that has a front property. It creates an empty Queue when instantiated. This object should be aware of a default empty value assigned to front when the queue is created.

## API
<!-- Description of each method publicly available to your Stack and Queue-->
* enqueue
* dequeue
* peek
* isEmpty

