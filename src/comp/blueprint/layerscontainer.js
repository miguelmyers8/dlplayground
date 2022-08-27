import React from 'react';
import ReactDOM from 'react-dom';
import Drag from './dragndrop'

//import {slide as Menu} from 'react-burger-menu';


class LayersContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      layers:[],
      count:1,
    }
    this.createlayer = this.createlayer.bind(this)
  }


   createlayer(id_){
    var count =   this.state.count++
    var layer = <Drag id={count+' '+id_.target.id} key={count+' '+id_.target.id}/>
    this.state.layers.push(layer)
    const container = React.createElement('div', {id:"r-container"}, this.state.layers);
    ReactDOM.render(container,  document.getElementById('render_draggables'));
  }

  render() {

    return(
      <div className={this.props.className} >
        <a id='Dense' onClick={this.createlayer} href="#about">Dense</a>
        <a id='Conv2D' onClick={this.createlayer} href="#services">Conv2D</a>
        <a id='Flatten' onClick={this.createlayer} href="#clients">Flatten</a>
        <a id='Maxpool2D' onClick={this.createlayer} href="#contact">Maxpool2D</a>
      </div>
    );
  }
};
export default LayersContainer;
