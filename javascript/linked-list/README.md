#### singly linked list

Author: Ashwini Uppal

## challenge summary

#### lab05
Creat a linked list class and implemented methods like insert, includes and toString.


#### lab06
Implement methods like 
append: which will add a new node with the given value to the end of the list
insert before: which will add a new node with the given new value immediately before the first node that has the value specified
insert after : which will add a new node with the given new value immediately after the first node that has the value specified



## Approach and efficiency

#### code challenge 05
I created a sigly linked list where I checked :
1. If there is anything present in the list. If the list is empty then the new node will
become the head for that list. 
2. For the insert method, new node will be added as a .next property for the existing head. 
3. For includes method, the current variable will start from the head and will keep going to next until it finds the value that we are looking for.
4. For toString method, a variablw will keep track of all the values in the list and update it with each iteration and return all the values
present in the list.


## code challenge 06
I worked with Marcus for this code challenge. 
Method: append()
1. Create a new node
2. If there is no head, then the new node is the head
3. If there is a head then the new node is the new tail
Method: insertBefore()
1. create a variable and assign it the value of head
2. If the value is the head then the new node is the head
3. while there is a current node
4. If the current node's next value is the new value given, then the new node is the current node's next

Method: insertAfter()
1. Create a new node
2. Create a variable and assign it the value of head
3. While there is a current node
    If the current node's value is the new value given then the new node is the current node's next




[Whiteboard for linked-list-insertions](../linked-list/assets/linked-list-insertions.png)