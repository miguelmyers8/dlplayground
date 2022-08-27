import React, { useRef, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import {findDOMNode} from 'react-dom';
import dragable_manager from '../../managers/node_manager.js'

var PlainDraggable =  window.PlainDraggable

const DraggableComponent = (props) => {
  const  [clicked,  setClicked] = useState(!false)
  const  [params,    setParams] = useState(false)
  const  [sending, setMetaData] = useState({})

  useEffect(() => {
  });

  function startbtn(event) {
      dragable_manager.set_startbtn_name(props.id)
  }

  function endbtn(event) {
    if (clicked){
      dragable_manager.add_line(event)
      setClicked(false)
  }else{
      dragable_manager.remove_line(event)
      setClicked(true)
    }
  }

  function startdrag(event) {
      dragable_manager.make_draggable(document.getElementById(props.id),update)
  }

  function update() {
      dragable_manager.update()
  }

  function remove_node(node){
    dragable_manager.remove_node(node.target.parentNode.id)
  }



  return (
    <div className="draggables" id={props.id} onMouseOver={startdrag}>
      {props.id}
      <div className="end-btn-container" id={"end-btn-container-"+props.id}><button onClick={endbtn}  type="button" className="btn btn-primary btn-circle btn-sm" id="end"></button></div>
      <div className="start-btn-container" id={"start-btn-container-"+props.id} ><button onClick={startbtn} type="button" className="btn btn-primary btn-circle btn-sm" id="start" ></button></div>
      <button onClick={remove_node}></button>
    </div>
  )
}

export default DraggableComponent
