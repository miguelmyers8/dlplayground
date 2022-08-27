import React from 'react';
import __graph__ from './graph.js'


class Graph extends React.Component{
    // Graph data structure, undirected by default.
    constructor() {
        super()
        this.  _graph = __graph__;
        this.  _layers_params = {}
    }

  //Add connection between node1 and node2
    add_edge(n1,n2,atter){
      this._graph.add_edge(n1,n2,atter)
    }

    find(node){
      return this._graph.find_node(node)
    }

    get_node_atter(node){
      return this._graph.get_node_atter(node)
    }

    get_all_nodes_atter(atter){
      return this._graph.get_all_nodes_atter(atter)
    }

    set_node_atter(node,atter){
      return this._graph.set_node_atter(node,atter)
    }

    remove_edge(start,end){
      this._graph.hashes[start][end]['edge']['line'].remove() // shouldnt be able to call hashes directly
      delete this._graph.hashes[start][end]
    }

    find_edges(){
      return this._graph.find_edges()
    }


}



const graph = new Graph();

export default graph
