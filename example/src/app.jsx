import React from 'react';
import Contex from 'contex';
import Tick from './tick';

const rootReducer = (state, action) => {
  switch (action.type) {
    default:
      return {
        ...(state || { count: 0 }),
      };
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key1: 'value',
    };
  }

  render() {
    console.log(`Dummy ${this.state.key1}`); // eslint-disable-line

    return (
      <Contex
        initialState={{ key1: 'value' }}
        reducer={rootReducer}
      >
        <Tick>
          My Tick
        </Tick>
      </Contex>);
  }
}


export default App;
