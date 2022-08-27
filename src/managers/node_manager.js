import React from 'react';
import graph from '../core/graph_engine'

var LeaderLine     =      window.LeaderLine
var PlainDraggable =  window.PlainDraggable

console.log(window.PlainDraggable)

class Node_manager extends React.Component{
    constructor(_component) {
      super()
      this.count = 0
      this._component = _component
      this.graph = graph
      this.add_remove_line = true
    }

    add_line(event){
      // add line
        let elem = document.getElementById(this.get_startbtn_name())
        let line_ = new LeaderLine(elem.children[1].children[0],event.target)
        this.graph.add_edge(elem.id,event.target.parentNode.parentNode.id,{'line':line_})
        console.log(this.graph_build())
    }

    set_startbtn_name(name){
      this.startbtn_name = name
    }

    get_startbtn_name(){
      return this.startbtn_name
    }

    make_draggable(name,update){
      this.dragging = new PlainDraggable(name,{onMove:update})
    }

    update() {
      for (const obj of this.graph.find_edges() ){
          obj.edge.line.position()
      }
    }

    remove_line(node, remove_node = false){
        this.graph.remove_edge(this.startbtn_name,node.target.parentNode.parentNode.id)
        }


    remove_node(node){
    //this.graph.remove_node_connection(node) // removes connection on the graph
    //this.remove_line(node) // only remove single line not whole path
    }

    graph_build(){
      var model = {} // this needs to change -- it does not (always) follow the insertion order
      for (const [keys,values] of  Object.entries(this.graph._graph.hashes)){
        model[keys] = {}
        for (const [_keys,_values] of  Object.entries(values)){
        model[_keys] = null // set node atter for key in model
        }
      }
      return model
    }


}


const node_manager = new Node_manager();

export default node_manager
