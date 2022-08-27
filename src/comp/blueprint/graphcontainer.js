import React, { Component } from 'react';
import Logging from './logger'
import LoggerInfo from './layerinfo'

class GraphContainer extends Component {
  constructor(props) {
  super(props);
  this.handlellogger = this.handlellogger.bind(this)
  this.handlelLoggerInfo = this.handlelLoggerInfo.bind(this)
      this.state = {
        checked_logger: false,
        handlel_LoggerInfo: false,
      }
}

handlellogger(e) {
  this.setState({
    checked_logger: !e.target.checked
  })
}

handlelLoggerInfo(e) {
  this.setState({
    handlel_LoggerInfo: !e.target.checked
  })
}



  render() {
    let btn_class_l = this.state.checked_logger ? "col-md-2 rightnav":"sidenavhidden"
    let loggerInfo = this.state.handlel_LoggerInfo ? "col-md-2 logger_Info":"sidenavhidden"

    return (
      <div>
        <div className={this.props.className}>
          <a onClick={this.handlellogger} checked={this.state.checked_logger} href="#about">logger</a>
          <a onClick={this.handlelLoggerInfo} checked={this.state.handlel_LoggerInfo} href="#about">logger-info</a>
          <a href="#services"></a>
          <a href="#clients"></a>
          <a href="#contact"></a>
        </div>
        <LoggerInfo  className={loggerInfo} graphc={this.props}/>

        <Logging  className={btn_class_l} graphc={this.props}/>

      </div>

    );
  }
}

export default GraphContainer;
