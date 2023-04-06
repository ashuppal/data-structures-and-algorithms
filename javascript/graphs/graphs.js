'use strict';

class Vertex{
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph{
  constructor(){
    this.adjacencyList = new Map();
  }

  addVertex(value){
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0){

    const neighbors = this.adjacencyList.get(startVertex);
    neighbors.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex){
    return [...this.adjacencyList.get(vertex)];
  }

  getNodes(){
    return this.adjacencyList.keys;
  }

  size(){
    return this.adjacencyList.size;
  }







  breadthFirst(root, callback){
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(queue.length){
      current = queue.pop();

      if(callback) callback(current.value);


      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors){
        if(!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }
    return visited;
  }


  depthFirst(root, cb){
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while (stack.length) {
      current = stack.pop();


      if (cb) cb(current.value);

    
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }

    return visited;
  }




  businessTrip(graph, cities){
    let cost = 0;
    let result = true;
    for(let i = 0; i < cities.length - 1; i++){
      let neighbors = graph.getNeighbors(cities[i]);
      let found = false;
      for(let j = 0; j < neighbors.length; j++){
        if(neighbors[j].vertex.value === cities[i + 1].value){
          cost += neighbors[j].weight;
          found = true;
          break;
        }
      }
      if(!found){
        result = false;
        break;
      }
    }
    if(result){
      return `True, $${cost}`;
    } else {
      return 'False, $0';
    }
  }

  /**Problem domain:

Write the following method for the Graph class:

Name: Depth first
Arguments: Node (Starting point of search)
Return: A collection of nodes in their pre-order depth-first traversal order
Program output: Display the collection
 */



  depthFirst1(node){
    let visited = new Set();
    let output = [];
    output.push(node.value);
    visited.add(node);
    let neighbors = this.getNeighbors(node);
    for(let i = 0; i < neighbors.length; i++){
      if(!visited.has(neighbors[i].vertex)){
        output = output.concat(this.depthFirst1(neighbors[i].vertex));
      }
    }
    return output;
  }


}



module.exports = { Graph, Vertex, Edge };

const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');
const E = graph.addVertex('E');
const F = graph.addVertex('F');
const G = graph.addVertex('G');
const H = graph.addVertex('H');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(B, G);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(F, H);
graph.addDirectedEdge(C, H);
graph.addDirectedEdge(F, E);

graph.breadthFirst(A, console.log);
console.log('-----------------');
graph.depthFirst(A, console.log);
console.log('-----------------');
console.log(graph.size());

console.log('-----------------');

console.log(graph.depthFirst1(A)); //output: [ 'A', 'B', 'G', 'D', 'F', 'E', 'H', 'C' ]

