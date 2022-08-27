import React, {useState, useEffect} from 'react';
import MainMenu from './mainmenu';


function PlayGround() {
  const [state, setState] = useState({})

    function childHandler(dataFromChild) {
        setState({
            data: dataFromChild
        });
    }

    useEffect(() => {
      //state
    });

  return (
  <div id='PlayGround'>
    <div  className="container-fluid">
      <div className='row '>
          <div className = 'col-lg-12 border main_'>
              <div id="render_draggables"></div>
              <MainMenu app={childHandler}></MainMenu>
          </div>
        </div>
      </div>
    </div>
  );
}



export default PlayGround;
