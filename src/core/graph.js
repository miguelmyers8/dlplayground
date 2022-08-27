/*
  Write JavaScript/React code here and press Ctrl+Enter to execute.

  Try: mountNode.innerHTML = 'Hello World!';
   Or: ReactDOM.render(<h2>Hello React!</h2>, mountNode);
*/

import React from 'react';


class __Graph__{

constructor(directed=false){
    this.hashes = {};
    this.atter = {};
    this._directed = directed
    }

add_node(node,atter={}){
  if (node in this.hashes){
    }
    else{
      this.hashes[node] = {}
    }
    this.atter[node] = Object.assign({},atter) //dosent point to the same object atter thats being shared
    this.atter[node]['id'] = node // constant atter of the edge
    return this.hashes[node]
  }

add_nodes_from(nodes,atters={}){ // if atters empty nodes needs to be a list of list, where each inner list is [node, obj atter for node]
  if (Object.keys(atters).length === 0 && atters.constructor === Object){ //checks if atter thats shared between all nodes is empty
    for (var node_set_index in nodes){
        const [_node,obj] = nodes[node_set_index]
         this.add_node(_node,obj)
      }
    }else{
      for (var node_set_index in nodes){
         this.add_node(nodes[node_set_index],atters)
      }
    }
  }

add_edge(from,to,atter={}){
  this.add_node(from,this.atter[from])[to] = {}
  this.add_node(to,this.atter[to])
  if (!(this._directed)){this.add_node(to,{})[from] = {}}
    this.hashes[from][to]['edge'] = atter
  }

remove_node(node){
      for (const [key, value] of Object.entries(this.hashes)) {
        delete value[node]
    }
  delete this.hashes[node]
  delete this.atter[node]
  }

find_node(node){
    return this.hashes[node]
  }

set_node_atter(node,atter){
    Object.assign(this.atter[node], atter);
  }

get_node_atter(node){
    return this.atter[node]
  }

get_all_nodes_atter(atter){
  var obj = {}
  for (const [key,value] of Object.entries(this.atter))
  obj[key] = value[atter]
  return obj
}

*find_edges(){
    for (const [key,value] of Object.entries(this.hashes)){
      for (const [_key,_value] of Object.entries(value)){
        yield _value
      }
    }
  }

del_edge(start,end){
      delete this.hashes[start][end]
}
}


var graph = new __Graph__(true)
export default graph

/*
var g = new __Graph__(true)
console.log('add_nodes_from')
g.add_nodes_from(['node1','node2','node3'],{data:'dog'})
//display.log(g.atter)
g.add_edge('node1','node2',{color:'blue'})
g.add_edge('node1','node2',{color:'blue',line:'dotted'})
console.log('hashes')
console.log(g.hashes)
console.log(g.atter)
*/
