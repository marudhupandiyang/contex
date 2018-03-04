import React from 'react';
import { connect } from 'contex';

class Tick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    debugger; // eslint-disable-line
    return (
      <div>
        Hello Tick
      </div>
    );
  }
}


export default connect()(Tick);
