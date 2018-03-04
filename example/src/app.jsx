import React from 'react';
import Contex from 'contex';
import Tick from './tick';

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'inc': {
      const newState = { ...state };
      newState.count += 1;
      return newState;
    }

    default:
      return state;
  }
};

const App = () => (
  <Contex
    initialState={{ count: 0 }}
    reducer={rootReducer}
  >
    <Tick>
      My Tick
    </Tick>
  </Contex>
);

export default App;
