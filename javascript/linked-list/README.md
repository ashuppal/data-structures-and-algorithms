#### singly linked list

Author: Ashwini Uppal

#### challenge

Created a linked list class and implemented methods like insert, includes and toString

#### Approach and efficiency

I started with creating a class "SinglyLinkedList" which will be used to create the linked list object that will be used in the tests.
After that I created Node class to be used to create nodes for the SinglyLinkedList class.
After that I exported the SinglyLinkedList module and tested all the methods.


#### API

I created a sigly linked list where I checked :
1. If there is anything present in the list. If the list is empty then the new node will
become the head for that list. 
2. For the insert method, new node will be added as a .next property for the existing head. 
3. For includes method, the current varible will start from the head and will keep going to next until it finds the value that we are looking for.
4. For toString method, a variablw will keep track of all the values in the list and update it with each iteration and return all the values
present in the list.