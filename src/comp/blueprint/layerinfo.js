import React, { Component } from 'react';

class LoggerInfo extends Component {
  constructor(props) {
  super(props);
  this.state = {}
  this.t = this.t.bind(this)

}

t(e){

}

  render() {
    return (
      <div className={this.props.className}>
       <pre></pre>
      </div>
    );
  }
}

export default LoggerInfo;
