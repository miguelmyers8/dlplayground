import React, { useRef, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import LayersContainer from './layerscontainer';
import GraphContainer from './graphcontainer';

class MainMenu extends React.Component {

  constructor(props) {
    super(props)
    this.build = this.build.bind(this)
    this.childHandler = this.childHandler.bind(this)
    this.handle_layers = this.handle_layers.bind(this)
    this.handle_utils  = this.handle_utils.bind(this)

    this.state = {
      checked_layers_container: false,
      checked_utils_container : false
    }
  }

 // onclick for layerscontainer
  handle_layers(e) {
    this.setState({
      checked_layers_container: !e.target.checked
    })
  }

  // onclick for utilscontainer
  handle_utils(e) {
    this.setState({
      checked_utils_container: !e.target.checked
    })
  }

  componentDidMount(){
  }

  childHandler(dataFromChild) {
      this.setState({
          data: dataFromChild
      });
  }

//build the graph befor complie
build(){
  // wrong build if line is removed
  var model = this.state.data




  //this.props.app(model)
  fetch( 'http://localhost:3000/api/v1', {
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(model)
    });
}

  render() {

    let layers_container = this.state.checked_layers_container ? "layers_container" : "hidden"
    let utils_container  = this.state.checked_utils_container  ? "utils_container"  : "hidden"

    return (

        <div>

          <div className='mainmenu'>
            <a ><div ><i className="fab fa-cloudsmith fa-lg"></i></div> Api</a><br></br><br></br>
            <a ><div ><i className="fas fa-cubes fa-lg"></i></div>  Models</a><br></br><br></br>
            <a ><div ><i onClick={this.handle_layers} checked={this.state.checked_layers_container} className="fab fa-buffer  fa-lg"></i></div>  Layers</a><br></br><br></br>
            <a ><div ><i onClick={this.handle_utils}  checked={this.state.checked_utils_container}  className="fas fa-circle-notch fa-lg"></i></div>Callbacks</a><br></br><br></br>
            <a ><div ><i className="fas fa-code-branch fa-lg"> </i></div>Graph</a><br></br><br></br>
            <a ><div ><i className="fas fa-cog fa-lg"></i> </div>Utils</a><br></br><br></br>
            <button onClick={this.build} className="btn aqua-gradient">Build</button>
          </div>
            <GraphContainer  className={utils_container} model={this.state.data}/>
            <LayersContainer className={layers_container} model={this.childHandler} ></LayersContainer>
         </div>

            )
          }
        }

  export default MainMenu;
