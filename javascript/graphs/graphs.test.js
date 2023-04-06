'use strict';

const { Graph, Edge} = require('../graphs/graphs.js');

describe('Graph', () => {
  it('Can successfully add a node to the graph', () => {
    const graph = new Graph();
    const vertex = graph.addVertex('A');
    expect(vertex.value).toBe('A');
  }
  );
  it('Can successfully add an addDirectedEdge between two nodes', () => {
    const graph = new Graph();
    const vertex1 = graph.addVertex('A');
    const vertex2 = graph.addVertex('B');
    graph.addDirectedEdge(vertex1, vertex2);
    expect(graph.adjacencyList.get(vertex1)).toEqual([new Edge(vertex2)]);
  }
  );

  it('can get all the neighbors of a node', () => {
    const graph = new Graph();
    const vertex1 = graph.addVertex('A');
    const vertex2 = graph.addVertex('B');
    const vertex3 = graph.addVertex('C');
    graph.addDirectedEdge(vertex1, vertex2);
    graph.addDirectedEdge(vertex1, vertex3);
    expect(graph.getNeighbors(vertex1)).toEqual([new Edge(vertex2), new Edge(vertex3)]);
  }
  );

  it('get size of the graph', () => {
    const graph = new Graph();
    const vertex1 = graph.addVertex('A');
    const vertex2 = graph.addVertex('B');
    const vertex3 = graph.addVertex('C');
    graph.addDirectedEdge(vertex1, vertex2);
    graph.addDirectedEdge(vertex1, vertex3);
    expect(graph.size()).toEqual(3);
  }
  );


});
