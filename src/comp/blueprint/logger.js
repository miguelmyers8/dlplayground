import React, { Component } from 'react';

class Logging extends Component {
  constructor(props) {
  super(props);
  this.state = {}
  }

  componentDidMount() {
   }

   componentDidUpdate() {
  }

  render() {
    return (
      <div className={this.props.className}>
       <pre id="json">{JSON.stringify(this.props.graphc['model'],null,2)}</pre>
      </div>
    );
  }
}

export default Logging;
